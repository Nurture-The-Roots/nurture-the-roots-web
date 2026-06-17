import { createServerFn } from "@tanstack/react-start";

const ONEDRIVE_BASE = "https://connector-gateway.lovable.dev/microsoft_onedrive/v1.0";
const SHAREPOINT_BASE = "https://connector-gateway.lovable.dev/microsoft_sharepoint";

function commonHeaders(connectorKey: string) {
  const lovable = process.env.LOVABLE_API_KEY;
  if (!lovable) throw new Error("LOVABLE_API_KEY is not configured");
  if (!connectorKey) throw new Error("Microsoft connector is not linked");
  return {
    Authorization: `Bearer ${lovable}`,
    "X-Connection-Api-Key": connectorKey,
  };
}

function oneDriveHeaders() {
  return commonHeaders(process.env.MICROSOFT_ONEDRIVE_API_KEY ?? "");
}

function sharePointHeaders() {
  return commonHeaders(process.env.MICROSOFT_SHAREPOINT_API_KEY ?? "");
}

async function gfetch(url: string, init: RequestInit & { jsonBody?: unknown } = {}) {
  const { jsonBody, headers, ...rest } = init;
  const res = await fetch(url, {
    ...rest,
    headers: {
      ...(headers as Record<string, string> | undefined),
      ...(jsonBody !== undefined ? { "Content-Type": "application/json" } : {}),
    },
    body: jsonBody !== undefined ? JSON.stringify(jsonBody) : rest.body,
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Microsoft Graph error ${res.status}: ${body.slice(0, 500)}`);
  }
  if (res.status === 204) return null;
  const ctype = res.headers.get("content-type") ?? "";
  return ctype.includes("application/json") ? await res.json() : await res.text();
}

function safeName(name: string) {
  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 240) throw new Error("Invalid name length");
  if (/[\\/:*?"<>|]/.test(trimmed)) throw new Error("Name contains invalid characters");
  return trimmed;
}

function safeId(id: string) {
  if (!id || id.length > 256 || !/^[A-Za-z0-9!\-_.~,=:%@]+$/.test(id)) {
    throw new Error("Invalid item id");
  }
  return id;
}

export type FileItem = {
  id: string;
  name: string;
  isFolder: boolean;
  size: number;
  lastModified: string;
  mimeType: string | null;
  webUrl: string | null;
  childCount: number | null;
};

function toItem(raw: any): FileItem {
  return {
    id: raw.id,
    name: raw.name,
    isFolder: !!raw.folder,
    size: raw.size ?? 0,
    lastModified: raw.lastModifiedDateTime ?? "",
    mimeType: raw.file?.mimeType ?? null,
    webUrl: raw.webUrl ?? null,
    childCount: raw.folder?.childCount ?? null,
  };
}

/* ===================== OneDrive ===================== */

export const listOneDriveChildren = createServerFn({ method: "POST" })
  .inputValidator((d: { itemId?: string }) => ({
    itemId: d.itemId ? safeId(d.itemId) : undefined,
  }))
  .handler(async ({ data }): Promise<FileItem[]> => {
    const url = data.itemId
      ? `${ONEDRIVE_BASE}/me/drive/items/${data.itemId}/children?$top=200&$orderby=folder,name`
      : `${ONEDRIVE_BASE}/me/drive/root/children?$top=200&$orderby=folder,name`;
    const json: any = await gfetch(url, { headers: oneDriveHeaders() });
    return (json.value ?? []).map(toItem);
  });

export const getOneDriveItem = createServerFn({ method: "POST" })
  .inputValidator((d: { itemId: string }) => ({ itemId: safeId(d.itemId) }))
  .handler(async ({ data }) => {
    const json: any = await gfetch(
      `${ONEDRIVE_BASE}/me/drive/items/${data.itemId}`,
      { headers: oneDriveHeaders() },
    );
    return {
      id: json.id as string,
      name: json.name as string,
      parentId: (json.parentReference?.id as string | undefined) ?? null,
    };
  });

export const createOneDriveFolder = createServerFn({ method: "POST" })
  .inputValidator((d: { parentId?: string; name: string }) => ({
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
  }))
  .handler(async ({ data }) => {
    const url = data.parentId
      ? `${ONEDRIVE_BASE}/me/drive/items/${data.parentId}/children`
      : `${ONEDRIVE_BASE}/me/drive/root/children`;
    return await gfetch(url, {
      method: "POST",
      headers: oneDriveHeaders(),
      jsonBody: { name: data.name, folder: {}, "@microsoft.graph.conflictBehavior": "rename" },
    });
  });

export const renameOneDriveItem = createServerFn({ method: "POST" })
  .inputValidator((d: { itemId: string; name: string }) => ({
    itemId: safeId(d.itemId),
    name: safeName(d.name),
  }))
  .handler(async ({ data }) =>
    gfetch(`${ONEDRIVE_BASE}/me/drive/items/${data.itemId}`, {
      method: "PATCH",
      headers: oneDriveHeaders(),
      jsonBody: { name: data.name },
    }),
  );

export const deleteOneDriveItem = createServerFn({ method: "POST" })
  .inputValidator((d: { itemId: string }) => ({ itemId: safeId(d.itemId) }))
  .handler(async ({ data }) =>
    gfetch(`${ONEDRIVE_BASE}/me/drive/items/${data.itemId}`, {
      method: "DELETE",
      headers: oneDriveHeaders(),
    }),
  );

export const getOneDriveDownloadUrl = createServerFn({ method: "POST" })
  .inputValidator((d: { itemId: string }) => ({ itemId: safeId(d.itemId) }))
  .handler(async ({ data }): Promise<{ url: string; name: string }> => {
    const json: any = await gfetch(
      `${ONEDRIVE_BASE}/me/drive/items/${data.itemId}?$select=id,name,@microsoft.graph.downloadUrl`,
      { headers: oneDriveHeaders() },
    );
    const url = json["@microsoft.graph.downloadUrl"];
    if (!url) throw new Error("No download URL available");
    return { url, name: json.name };
  });

export const uploadOneDriveSmall = createServerFn({ method: "POST" })
  .inputValidator((d: { parentId?: string; name: string; base64: string }) => ({
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
    base64: d.base64,
  }))
  .handler(async ({ data }) => {
    const bytes = Uint8Array.from(atob(data.base64), (c) => c.charCodeAt(0));
    if (bytes.byteLength > 4 * 1024 * 1024) throw new Error("File too large for small upload");
    const encodedName = encodeURIComponent(data.name);
    const url = data.parentId
      ? `${ONEDRIVE_BASE}/me/drive/items/${data.parentId}:/${encodedName}:/content`
      : `${ONEDRIVE_BASE}/me/drive/root:/${encodedName}:/content`;
    return await gfetch(url, {
      method: "PUT",
      headers: {
        ...oneDriveHeaders(),
        "Content-Type": "application/octet-stream",
      },
      body: bytes,
    });
  });

export const createOneDriveUploadSession = createServerFn({ method: "POST" })
  .inputValidator((d: { parentId?: string; name: string }) => ({
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
  }))
  .handler(async ({ data }): Promise<{ uploadUrl: string }> => {
    const encodedName = encodeURIComponent(data.name);
    const url = data.parentId
      ? `${ONEDRIVE_BASE}/me/drive/items/${data.parentId}:/${encodedName}:/createUploadSession`
      : `${ONEDRIVE_BASE}/me/drive/root:/${encodedName}:/createUploadSession`;
    const json: any = await gfetch(url, {
      method: "POST",
      headers: oneDriveHeaders(),
      jsonBody: {
        item: { "@microsoft.graph.conflictBehavior": "rename", name: data.name },
      },
    });
    return { uploadUrl: json.uploadUrl };
  });

/* ===================== SharePoint ===================== */

export type SpSite = { id: string; displayName: string; webUrl: string };
export type SpDrive = { id: string; name: string; driveType: string };

export const searchSharePointSites = createServerFn({ method: "POST" })
  .inputValidator((d: { query: string }) => ({ query: (d.query ?? "").trim().slice(0, 100) }))
  .handler(async ({ data }): Promise<SpSite[]> => {
    const q = data.query
      ? `?search=${encodeURIComponent(data.query)}`
      : `?search=*`;
    const json: any = await gfetch(`${SHAREPOINT_BASE}/sites${q}`, {
      headers: sharePointHeaders(),
    });
    return (json.value ?? [])
      .filter((s: any) => s.id && s.displayName)
      .slice(0, 25)
      .map((s: any) => ({ id: s.id, displayName: s.displayName, webUrl: s.webUrl }));
  });

export const listSharePointDrives = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string }) => ({ siteId: d.siteId }))
  .handler(async ({ data }): Promise<SpDrive[]> => {
    const json: any = await gfetch(
      `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives`,
      { headers: sharePointHeaders() },
    );
    return (json.value ?? []).map((d: any) => ({
      id: d.id,
      name: d.name,
      driveType: d.driveType,
    }));
  });

export const listSharePointChildren = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; itemId?: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    itemId: d.itemId ? safeId(d.itemId) : undefined,
  }))
  .handler(async ({ data }): Promise<FileItem[]> => {
    const base = `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}`;
    const url = data.itemId
      ? `${base}/items/${data.itemId}/children?$top=200&$orderby=folder,name`
      : `${base}/root/children?$top=200&$orderby=folder,name`;
    const json: any = await gfetch(url, { headers: sharePointHeaders() });
    return (json.value ?? []).map(toItem);
  });

export const getSharePointItem = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; itemId: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    itemId: safeId(d.itemId),
  }))
  .handler(async ({ data }) => {
    const json: any = await gfetch(
      `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}/items/${data.itemId}`,
      { headers: sharePointHeaders() },
    );
    return {
      id: json.id as string,
      name: json.name as string,
      parentId: (json.parentReference?.id as string | undefined) ?? null,
    };
  });

export const createSharePointFolder = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; parentId?: string; name: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
  }))
  .handler(async ({ data }) => {
    const base = `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}`;
    const url = data.parentId
      ? `${base}/items/${data.parentId}/children`
      : `${base}/root/children`;
    return await gfetch(url, {
      method: "POST",
      headers: sharePointHeaders(),
      jsonBody: { name: data.name, folder: {}, "@microsoft.graph.conflictBehavior": "rename" },
    });
  });

export const renameSharePointItem = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; itemId: string; name: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    itemId: safeId(d.itemId),
    name: safeName(d.name),
  }))
  .handler(async ({ data }) =>
    gfetch(
      `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}/items/${data.itemId}`,
      { method: "PATCH", headers: sharePointHeaders(), jsonBody: { name: data.name } },
    ),
  );

export const deleteSharePointItem = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; itemId: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    itemId: safeId(d.itemId),
  }))
  .handler(async ({ data }) =>
    gfetch(
      `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}/items/${data.itemId}`,
      { method: "DELETE", headers: sharePointHeaders() },
    ),
  );

export const getSharePointDownloadUrl = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; itemId: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    itemId: safeId(d.itemId),
  }))
  .handler(async ({ data }): Promise<{ url: string; name: string }> => {
    const json: any = await gfetch(
      `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}/items/${data.itemId}?$select=id,name,@microsoft.graph.downloadUrl`,
      { headers: sharePointHeaders() },
    );
    const url = json["@microsoft.graph.downloadUrl"];
    if (!url) throw new Error("No download URL available");
    return { url, name: json.name };
  });

export const uploadSharePointSmall = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; parentId?: string; name: string; base64: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
    base64: d.base64,
  }))
  .handler(async ({ data }) => {
    const bytes = Uint8Array.from(atob(data.base64), (c) => c.charCodeAt(0));
    if (bytes.byteLength > 4 * 1024 * 1024) throw new Error("File too large for small upload");
    const base = `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}`;
    const encodedName = encodeURIComponent(data.name);
    const url = data.parentId
      ? `${base}/items/${data.parentId}:/${encodedName}:/content`
      : `${base}/root:/${encodedName}:/content`;
    return await gfetch(url, {
      method: "PUT",
      headers: { ...sharePointHeaders(), "Content-Type": "application/octet-stream" },
      body: bytes,
    });
  });

export const createSharePointUploadSession = createServerFn({ method: "POST" })
  .inputValidator((d: { siteId: string; driveId: string; parentId?: string; name: string }) => ({
    siteId: d.siteId,
    driveId: d.driveId,
    parentId: d.parentId ? safeId(d.parentId) : undefined,
    name: safeName(d.name),
  }))
  .handler(async ({ data }): Promise<{ uploadUrl: string }> => {
    const base = `${SHAREPOINT_BASE}/sites/${encodeURIComponent(data.siteId)}/drives/${encodeURIComponent(data.driveId)}`;
    const encodedName = encodeURIComponent(data.name);
    const url = data.parentId
      ? `${base}/items/${data.parentId}:/${encodedName}:/createUploadSession`
      : `${base}/root:/${encodedName}:/createUploadSession`;
    const json: any = await gfetch(url, {
      method: "POST",
      headers: sharePointHeaders(),
      jsonBody: { item: { "@microsoft.graph.conflictBehavior": "rename", name: data.name } },
    });
    return { uploadUrl: json.uploadUrl };
  });