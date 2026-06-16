
## Goal

Add a new page at **`/files`** that lets anyone with the link browse the connected Microsoft account's files. The page has a toggle to switch between two sources:

- **OneDrive** — the connected user's personal drive (`/me/drive`)
- **SharePoint** — pick a site, then a document library, then browse it

Both sources support full file management: **browse, upload, download, rename, delete**, plus folder navigation and "New folder".

## Visual / UX

- Editorial styling consistent with the rest of the site: warm cream background, serif header, soft cards.
- Header: "Files" with subtitle "OneDrive & SharePoint".
- Toggle pill row: `OneDrive | SharePoint`.
- When SharePoint is selected: a site picker (search box + list) then a drive picker, then the file table.
- Breadcrumb trail (`Root / Folder A / Folder B`) for navigation back up.
- File table: name, type icon, size, modified date, row actions (Download, Rename, Delete). Folders are clickable rows.
- Floating action bar: "Upload file" (drag-and-drop area + file input), "New folder".
- Toasts on success/error; confirmation dialog before Delete.
- `noindex, nofollow` meta on the route — even though it's public, we don't want it crawled.

## Technical Plan

### Connectors

Two app connectors are now linked to this project:
- **Microsoft OneDrive** — scopes include `Files.ReadWrite`, enabling full CRUD on `/me/drive`.
- **Microsoft SharePoint** — scopes include `Sites.ReadWrite.All`, enabling CRUD on SharePoint document libraries.

Both are gateway-backed; secrets `MICROSOFT_ONEDRIVE_API_KEY`, `MICROSOFT_SHAREPOINT_API_KEY`, and `LOVABLE_API_KEY` are already injected at runtime. All Graph calls go through `https://connector-gateway.lovable.dev/{connector}/...` — never directly to `graph.microsoft.com`.

### Server functions (`src/lib/ms-files.functions.ts`)

All Graph access happens server-side via `createServerFn` so the connector keys never reach the browser.

OneDrive (uses `MICROSOFT_ONEDRIVE_API_KEY`, base `/me/drive`):
- `listOneDriveChildren({ itemId? })` → `GET /me/drive/root/children` or `/me/drive/items/{id}/children`
- `getOneDriveItem({ itemId })` → metadata (used for breadcrumbs)
- `createOneDriveFolder({ parentId, name })` → `POST /children` with `{ name, folder: {} }`
- `renameOneDriveItem({ itemId, name })` → `PATCH /items/{id}`
- `deleteOneDriveItem({ itemId })` → `DELETE /items/{id}`
- `getOneDriveDownloadUrl({ itemId })` → returns the short-lived `@microsoft.graph.downloadUrl` from `GET /items/{id}` so the browser downloads directly (avoids streaming binaries through the server function RPC boundary).
- `uploadOneDriveFile` → see "Uploads" below.

SharePoint (uses `MICROSOFT_SHAREPOINT_API_KEY`, base `/sites`):
- `searchSharePointSites({ query })` → `GET /sites?search=...`
- `listSharePointDrives({ siteId })` → `GET /sites/{siteId}/drives`
- `listSharePointChildren({ siteId, driveId, itemId? })` → `GET /sites/{siteId}/drives/{driveId}/root/children` or `/items/{id}/children`
- `createSharePointFolder`, `renameSharePointItem`, `deleteSharePointItem`, `getSharePointDownloadUrl`, `uploadSharePointFile` — same shapes as OneDrive, scoped to the chosen site+drive.

Each function validates input with a small `inputValidator` (path-safe IDs, name length, no slashes in names), returns plain DTOs (id, name, size, lastModifiedDateTime, folder/file flag, mimeType, webUrl), and re-throws gateway errors with status + body for the route's `errorComponent`.

### Uploads

Files come from the browser via `<input type="file">`. Two paths:

- **Small files (≤ 4 MB)**: a server function accepts base64-encoded bytes + filename + parentId, then `PUT /items/{parentId}:/{name}:/content` with the decoded `Uint8Array`.
- **Large files (> 4 MB)**: server function creates an **upload session** (`POST /items/{parentId}:/{name}:/createUploadSession`) and returns the session's `uploadUrl` to the browser, which PUTs chunks of ≤ 60 MiB directly to Microsoft (the upload URL is pre-authenticated, so chunks don't need the connector key). Cap a single upload at 100 MB to keep the UX simple; reject larger files with a clear message.

### Route (`src/routes/files.tsx`)

- Public route, `head()` sets `<title>Files</title>` and `meta robots="noindex, nofollow"`.
- TanStack Query owns the file-listing cache (`["onedrive", parentId]`, `["sharepoint", siteId, driveId, parentId]`). Loader prefetches the OneDrive root via `ensureQueryData`.
- All mutations (upload, rename, delete, new folder) use `useMutation` + `useServerFn`; on success they invalidate the matching list query so the table refreshes.
- Source toggle and current folder path live in URL search params (`source`, `site`, `drive`, `path`) via `validateSearch` so refresh/share preserves state.
- `errorComponent` shows a friendly message and a retry button.

### Components

- `src/components/files/SourceToggle.tsx` — segmented control.
- `src/components/files/SharePointSitePicker.tsx` — debounced search + result list.
- `src/components/files/FileTable.tsx` — sortable list, row actions, double-click into folders.
- `src/components/files/UploadDropzone.tsx` — drop area + file picker; routes through small-vs-large upload paths.
- `src/components/files/RenameDialog.tsx`, `ConfirmDeleteDialog.tsx`, `NewFolderDialog.tsx` — built on existing shadcn primitives.

### Navigation

Add a discreet "Files" link in the existing footer/admin area (not the main marketing nav) so it stays separate from the public-facing site copy.

### Out of scope (ask before adding)

- Per-user authentication / multi-tenant Microsoft sign-in — the connector is a single shared identity by design.
- Sharing links, permission editing, version history.
- In-browser preview of Office docs (we link out to `webUrl` instead).
