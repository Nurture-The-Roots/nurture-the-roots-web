import type { ImgHTMLAttributes } from "react";

type Variant = {
  width: number;
  format: "avif" | "webp" | "jpg" | string;
  mime: string;
  url: string;
  size?: number;
};

export type ResponsiveSource = {
  version: number;
  source: string;
  original_filename: string;
  intrinsic: { width: number; height: number };
  fallback: string;
  variants: Variant[];
};

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  source: ResponsiveSource;
  alt: string;
  sizes?: string;
  /** True for above-the-fold / LCP images; sets eager + fetchpriority="high". */
  priority?: boolean;
};

const FORMAT_ORDER: Array<{ format: string; mime: string }> = [
  { format: "avif", mime: "image/avif" },
  { format: "webp", mime: "image/webp" },
];

function buildSrcSet(variants: Variant[], format: string) {
  return variants
    .filter((v) => v.format === format)
    .sort((a, b) => a.width - b.width)
    .map((v) => `${v.url} ${v.width}w`)
    .join(", ");
}

export function ResponsiveImage({
  source,
  alt,
  sizes = "(min-width: 1024px) 1152px, 100vw",
  priority = false,
  loading,
  className,
  ...imgProps
}: Props) {
  const jpgSrcSet = buildSrcSet(source.variants, "jpg");
  return (
    <picture>
      {FORMAT_ORDER.map(({ format, mime }) => {
        const srcSet = buildSrcSet(source.variants, format);
        if (!srcSet) return null;
        return <source key={format} type={mime} srcSet={srcSet} sizes={sizes} />;
      })}
      <img
        {...imgProps}
        src={source.fallback}
        srcSet={jpgSrcSet || undefined}
        sizes={sizes}
        alt={alt}
        width={imgProps.width ?? source.intrinsic.width}
        height={imgProps.height ?? source.intrinsic.height}
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding="async"
        // @ts-expect-error – lowercase camelCase variant for broader browser support
        fetchpriority={priority ? "high" : undefined}
        className={className}
      />
    </picture>
  );
}

export default ResponsiveImage;