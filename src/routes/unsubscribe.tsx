import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

export const Route = createFileRoute("/unsubscribe")({
  head: () => ({
    meta: [
      { title: "Unsubscribe — Nurture The Roots™" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const [status, setStatus] = useState<Status>("loading");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("token");
    if (!t) {
      setStatus("invalid");
      return;
    }
    setToken(t);
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`)
      .then(async (res) => {
        const body = await res.json().catch(() => ({}));
        if (!res.ok) return setStatus("invalid");
        if (body.valid === false && body.reason === "already_unsubscribed") {
          return setStatus("already");
        }
        if (body.valid) return setStatus("valid");
        setStatus("invalid");
      })
      .catch(() => setStatus("error"));
  }, []);

  const confirm = async () => {
    if (!token) return;
    try {
      const res = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.success) setStatus("success");
      else if (body.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto max-w-xl px-6 py-24">
      <h1 className="font-serif text-3xl text-cocoa">Unsubscribe</h1>
      <div className="mt-6 text-earth/85 leading-relaxed">
        {status === "loading" && <p>Checking your link…</p>}
        {status === "valid" && (
          <>
            <p>Click below to confirm and you will no longer receive emails from Nurture The Roots™.</p>
            <button
              onClick={confirm}
              className="mt-6 inline-flex items-center rounded-full bg-clay text-white px-6 py-3 text-sm hover:bg-clay/90 transition-colors"
            >
              Confirm unsubscribe
            </button>
          </>
        )}
        {status === "already" && <p>You're already unsubscribed. You won't receive further emails.</p>}
        {status === "success" && <p>You've been unsubscribed. Thank you, and be well.</p>}
        {status === "invalid" && <p>This unsubscribe link is invalid or has expired.</p>}
        {status === "error" && <p>Something went wrong. Please try again later.</p>}
      </div>
    </section>
  );
}