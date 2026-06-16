import { integrations } from "@/lib/integrations";

type Props = {
  /** Override `VITE_DUBSADO_INQUIRY_URL` for a specific embed. */
  src?: string;
  title?: string;
  /** Fallback rendered when no Dubsado URL is configured yet. */
  fallback?: React.ReactNode;
};

/**
 * Soft-bordered wrapper around a Dubsado public form iframe. When the URL is
 * not yet set, renders the supplied fallback so pages keep working.
 */
export function DubsadoEmbed({ src, title = "Inquiry form", fallback }: Props) {
  const url = src ?? integrations.dubsadoInquiryUrl;
  if (!url) {
    return <>{fallback}</>;
  }
  return (
    <div className="rounded-2xl border border-taupe/25 bg-sand/40 p-3 md:p-5 shadow-[0_18px_50px_-32px_rgba(74,63,57,0.45)]">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="block w-full rounded-xl bg-background min-h-[720px]"
      />
    </div>
  );
}

type IntakeButtonProps = {
  className?: string;
  children?: React.ReactNode;
  /** Override the env-derived intake URL. */
  href?: string;
};

/**
 * Linkified "Begin Intake" button. Opens the Dubsado intake form in a new tab.
 * Falls back to the contact page when the intake URL is not yet configured.
 */
export function IntakeButton({ className, children, href }: IntakeButtonProps) {
  const url = href ?? integrations.dubsadoIntakeUrl;
  const target = url ?? "/contact";
  const external = Boolean(url);
  return (
    <a
      href={target}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children ?? "Begin Intake"}
    </a>
  );
}