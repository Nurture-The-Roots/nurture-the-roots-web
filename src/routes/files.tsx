import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  listOneDriveChildren,
  createOneDriveFolder,
  renameOneDriveItem,
  deleteOneDriveItem,
  getOneDriveDownloadUrl,
  uploadOneDriveSmall,
  createOneDriveUploadSession,
  listSharePointChildren,
  createSharePointFolder,
  renameSharePointItem,
  deleteSharePointItem,
  getSharePointDownloadUrl,
  uploadSharePointSmall,
  createSharePointUploadSession,
  searchSharePointSites,
  listSharePointDrives,
  type FileItem,
  type SpSite,
  type SpDrive,
} from "@/lib/ms-files.functions";

export const Route = createFileRoute("/files")({
  component: FilesPage,
  head: () => ({
    meta: [
      { title: "Files — OneDrive & SharePoint" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-2xl text-foreground">Files dashboard error</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  },
  notFoundComponent: () => <div className="p-12">Not found</div>,
});

const MAX_UPLOAD_BYTES = 100 * 1024 * 1024; // 100 MB
const SMALL_UPLOAD_THRESHOLD = 4 * 1024 * 1024; // 4 MB
const CHUNK_SIZE = 5 * 1024 * 1024; // 5 MB, multiple of 320 KiB

type Source = "onedrive" | "sharepoint";
type Crumb = { id: string | null; name: string };
type Notice = { kind: "success" | "error"; text: string };

function FilesPage() {
  const [source, setSource] = useState<Source>("onedrive");
  const [site, setSite] = useState<SpSite | null>(null);
  const [drive, setDrive] = useState<SpDrive | null>(null);
  const [stack, setStack] = useState<Crumb[]>([{ id: null, name: "Root" }]);
  const [notice, setNotice] = useState<Notice | null>(null);

  const current = stack[stack.length - 1];
  const showFiles = source === "onedrive" || (site && drive);

  // reset stack when switching source or drive
  const resetStack = useCallback(() => setStack([{ id: null, name: "Root" }]), []);
  useEffect(() => { resetStack(); }, [source, drive?.id, resetStack]);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Microsoft 365
          </p>
          <h1 className="mt-2 font-serif text-4xl text-foreground">Files</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Browse, upload, rename, and download files in the connected OneDrive
            or SharePoint account.
          </p>
        </header>

        <div className="mb-6 inline-flex rounded-full border border-border bg-card p-1">
          {(["onedrive", "sharepoint"] as Source[]).map((s) => (
            <button
              key={s}
              onClick={() => { setSource(s); setSite(null); setDrive(null); }}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                source === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s === "onedrive" ? "OneDrive" : "SharePoint"}
            </button>
          ))}
        </div>

        {source === "sharepoint" && (
          <SharePointPicker
            site={site}
            drive={drive}
            onSite={(s) => { setSite(s); setDrive(null); }}
            onDrive={setDrive}
          />
        )}

        {notice && (
          <div
            className={`mb-4 rounded-md border px-4 py-2 text-sm ${
              notice.kind === "success"
                ? "border-primary/30 bg-primary/5 text-foreground"
                : "border-destructive/40 bg-destructive/5 text-destructive"
            }`}
          >
            {notice.text}
          </div>
        )}

        {showFiles && (
          <FilesBrowser
            source={source}
            site={site}
            drive={drive}
            stack={stack}
            setStack={setStack}
            current={current}
            onNotice={setNotice}
          />
        )}
      </div>
    </main>
  );
}

/* ===================== SharePoint Picker ===================== */

function SharePointPicker({
  site, drive, onSite, onDrive,
}: {
  site: SpSite | null;
  drive: SpDrive | null;
  onSite: (s: SpSite) => void;
  onDrive: (d: SpDrive) => void;
}) {
  const [query, setQuery] = useState("");
  const sitesQuery = useQuery({
    queryKey: ["sp", "sites", query],
    queryFn: () => searchSharePointSites({ data: { query } }),
    staleTime: 60_000,
  });
  const drivesQuery = useQuery({
    queryKey: ["sp", "drives", site?.id],
    queryFn: () => listSharePointDrives({ data: { siteId: site!.id } }),
    enabled: !!site,
  });

  return (
    <div className="mb-6 rounded-lg border border-border bg-card p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">
            SharePoint site
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sites…"
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
          <div className="mt-2 max-h-48 overflow-auto rounded-md border border-border/50">
            {sitesQuery.isLoading ? (
              <p className="p-3 text-sm text-muted-foreground">Loading…</p>
            ) : sitesQuery.error ? (
              <p className="p-3 text-sm text-destructive">{(sitesQuery.error as Error).message}</p>
            ) : sitesQuery.data?.length === 0 ? (
              <p className="p-3 text-sm text-muted-foreground">No sites found.</p>
            ) : (
              sitesQuery.data?.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSite(s)}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-muted ${
                    site?.id === s.id ? "bg-muted font-medium" : ""
                  }`}
                >
                  {s.displayName}
                </button>
              ))
            )}
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">
            Document library
          </label>
          {!site ? (
            <p className="mt-2 text-sm text-muted-foreground">Pick a site first.</p>
          ) : drivesQuery.isLoading ? (
            <p className="mt-2 text-sm text-muted-foreground">Loading libraries…</p>
          ) : drivesQuery.error ? (
            <p className="mt-2 text-sm text-destructive">{(drivesQuery.error as Error).message}</p>
          ) : (
            <div className="mt-2 max-h-48 overflow-auto rounded-md border border-border/50">
              {drivesQuery.data?.map((d) => (
                <button
                  key={d.id}
                  onClick={() => onDrive(d)}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-muted ${
                    drive?.id === d.id ? "bg-muted font-medium" : ""
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===================== Files Browser ===================== */

function FilesBrowser({
  source, site, drive, stack, setStack, current, onNotice,
}: {
  source: Source;
  site: SpSite | null;
  drive: SpDrive | null;
  stack: Crumb[];
  setStack: React.Dispatch<React.SetStateAction<Crumb[]>>;
  current: Crumb;
  onNotice: (n: Notice | null) => void;
}) {
  const qc = useQueryClient();
  const parentId = current.id ?? undefined;

  const queryKey = useMemo(
    () =>
      source === "onedrive"
        ? ["onedrive", parentId ?? "root"]
        : ["sharepoint", site?.id, drive?.id, parentId ?? "root"],
    [source, site?.id, drive?.id, parentId],
  );

  const list = useQuery({
    queryKey,
    queryFn: () =>
      source === "onedrive"
        ? listOneDriveChildren({ data: { itemId: parentId } })
        : listSharePointChildren({
            data: { siteId: site!.id, driveId: drive!.id, itemId: parentId },
          }),
  });

  const invalidate = () => qc.invalidateQueries({ queryKey });

  const newFolder = useMutation({
    mutationFn: (name: string) =>
      source === "onedrive"
        ? createOneDriveFolder({ data: { parentId, name } })
        : createSharePointFolder({
            data: { siteId: site!.id, driveId: drive!.id, parentId, name },
          }),
    onSuccess: () => { onNotice({ kind: "success", text: "Folder created" }); invalidate(); },
    onError: (e: Error) => onNotice({ kind: "error", text: e.message }),
  });

  const renameItem = useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) =>
      source === "onedrive"
        ? renameOneDriveItem({ data: { itemId: id, name } })
        : renameSharePointItem({
            data: { siteId: site!.id, driveId: drive!.id, itemId: id, name },
          }),
    onSuccess: () => { onNotice({ kind: "success", text: "Renamed" }); invalidate(); },
    onError: (e: Error) => onNotice({ kind: "error", text: e.message }),
  });

  const deleteItem = useMutation({
    mutationFn: (id: string) =>
      source === "onedrive"
        ? deleteOneDriveItem({ data: { itemId: id } })
        : deleteSharePointItem({
            data: { siteId: site!.id, driveId: drive!.id, itemId: id },
          }),
    onSuccess: () => { onNotice({ kind: "success", text: "Deleted" }); invalidate(); },
    onError: (e: Error) => onNotice({ kind: "error", text: e.message }),
  });

  const handleDownload = async (item: FileItem) => {
    try {
      onNotice(null);
      const res =
        source === "onedrive"
          ? await getOneDriveDownloadUrl({ data: { itemId: item.id } })
          : await getSharePointDownloadUrl({
              data: { siteId: site!.id, driveId: drive!.id, itemId: item.id },
            });
      const a = document.createElement("a");
      a.href = res.url;
      a.download = res.name;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      onNotice({ kind: "error", text: (e as Error).message });
    }
  };

  const [uploadingName, setUploadingName] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    onNotice(null);
    if (file.size > MAX_UPLOAD_BYTES) {
      onNotice({ kind: "error", text: "File exceeds 100 MB limit." });
      return;
    }
    setUploadingName(file.name);
    try {
      if (file.size <= SMALL_UPLOAD_THRESHOLD) {
        const base64 = await fileToBase64(file);
        if (source === "onedrive") {
          await uploadOneDriveSmall({ data: { parentId, name: file.name, base64 } });
        } else {
          await uploadSharePointSmall({
            data: {
              siteId: site!.id, driveId: drive!.id, parentId,
              name: file.name, base64,
            },
          });
        }
      } else {
        const { uploadUrl } =
          source === "onedrive"
            ? await createOneDriveUploadSession({ data: { parentId, name: file.name } })
            : await createSharePointUploadSession({
                data: { siteId: site!.id, driveId: drive!.id, parentId, name: file.name },
              });
        await uploadInChunks(uploadUrl, file);
      }
      onNotice({ kind: "success", text: `Uploaded ${file.name}` });
      invalidate();
    } catch (e) {
      onNotice({ kind: "error", text: (e as Error).message });
    } finally {
      setUploadingName(null);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Breadcrumbs stack={stack} onJump={(i) => setStack((s) => s.slice(0, i + 1))} />
        <div className="flex gap-2">
          <button
            onClick={() => {
              const name = window.prompt("New folder name");
              if (name) newFolder.mutate(name);
            }}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted"
          >
            New folder
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleUpload(f);
              e.target.value = "";
            }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={!!uploadingName}
            className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {uploadingName ? `Uploading ${truncate(uploadingName, 24)}…` : "Upload file"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        {list.isLoading ? (
          <div className="p-8 text-center text-sm text-muted-foreground">Loading…</div>
        ) : list.error ? (
          <div className="p-8 text-center text-sm text-destructive">
            {(list.error as Error).message}
          </div>
        ) : list.data?.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">This folder is empty.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2.5">Name</th>
                <th className="px-4 py-2.5 text-right">Size</th>
                <th className="px-4 py-2.5 text-right">Modified</th>
                <th className="px-4 py-2.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.data?.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-border/40 last:border-0 hover:bg-muted/50"
                >
                  <td className="px-4 py-2.5">
                    {item.isFolder ? (
                      <button
                        onClick={() => setStack((s) => [...s, { id: item.id, name: item.name }])}
                        className="flex items-center gap-2 text-left font-medium text-foreground hover:underline"
                      >
                        <span aria-hidden>📁</span>
                        {item.name}
                      </button>
                    ) : (
                      <span className="flex items-center gap-2 text-foreground">
                        <span aria-hidden>📄</span>
                        {item.name}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-muted-foreground">
                    {item.isFolder ? `${item.childCount ?? 0} items` : formatBytes(item.size)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-muted-foreground">
                    {item.lastModified ? new Date(item.lastModified).toLocaleDateString() : "—"}
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <div className="flex justify-end gap-1.5">
                      {!item.isFolder && (
                        <button
                          onClick={() => handleDownload(item)}
                          className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          Download
                        </button>
                      )}
                      <button
                        onClick={() => {
                          const name = window.prompt("Rename to", item.name);
                          if (name && name !== item.name) renameItem.mutate({ id: item.id, name });
                        }}
                        className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        Rename
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete "${item.name}"? This cannot be undone.`)) {
                            deleteItem.mutate(item.id);
                          }
                        }}
                        className="rounded px-2 py-1 text-xs text-destructive hover:bg-destructive/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Breadcrumbs({ stack, onJump }: { stack: Crumb[]; onJump: (i: number) => void }) {
  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {stack.map((c, i) => (
        <span key={`${c.id ?? "root"}-${i}`} className="flex items-center gap-1">
          {i > 0 && <span className="px-1">/</span>}
          <button
            onClick={() => onJump(i)}
            className={`rounded px-1.5 py-0.5 hover:bg-muted ${
              i === stack.length - 1 ? "font-medium text-foreground" : ""
            }`}
          >
            {c.name}
          </button>
        </span>
      ))}
    </nav>
  );
}

/* ===================== helpers ===================== */

function formatBytes(n: number) {
  if (n === 0) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(n) / Math.log(1024));
  return `${(n / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function truncate(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1) + "…";
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const result = r.result as string;
      const idx = result.indexOf(",");
      resolve(idx >= 0 ? result.slice(idx + 1) : result);
    };
    r.onerror = () => reject(r.error ?? new Error("File read error"));
    r.readAsDataURL(file);
  });
}

async function uploadInChunks(uploadUrl: string, file: File) {
  let start = 0;
  while (start < file.size) {
    const end = Math.min(start + CHUNK_SIZE, file.size);
    const chunk = file.slice(start, end);
    const res = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Length": String(end - start),
        "Content-Range": `bytes ${start}-${end - 1}/${file.size}`,
      },
      body: chunk,
    });
    if (!res.ok && res.status !== 202) {
      const text = await res.text().catch(() => "");
      throw new Error(`Upload failed (${res.status}): ${text.slice(0, 200)}`);
    }
    start = end;
  }
}