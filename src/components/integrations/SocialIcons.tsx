import type { ReactNode } from "react";
import { Instagram, Music2, Youtube } from "lucide-react";
import { integrations } from "@/lib/integrations";

const baseClass =
  "inline-flex items-center justify-center w-10 h-10 rounded-full border border-cocoa/15 text-cocoa/75 hover:text-clay hover:border-clay/60 transition-colors";

type Link = { href: string | undefined; label: string; icon: ReactNode };

export function SocialIcons() {
  const links: Link[] = [
    {
      href: integrations.instagramUrl,
      label: "Instagram",
      icon: <Instagram size={18} aria-hidden />,
    },
    {
      href: integrations.tiktokUrl,
      label: "TikTok",
      icon: <Music2 size={18} aria-hidden />,
    },
    {
      href: integrations.youtubeUrl,
      label: "YouTube",
      icon: <Youtube size={18} aria-hidden />,
    },
  ];
  const visible = links.filter(
    (l): l is Link & { href: string } => Boolean(l.href),
  );

  if (visible.length === 0) return null;
  return (
    <ul className="flex items-center gap-3" aria-label="Social profiles">
      {visible.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={l.label}
            className={baseClass}
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}