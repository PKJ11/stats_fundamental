export default function StaticHtmlFrame({
  src,
  title,
  fill = false,
}: {
  src: string;
  title: string;
  /** Fill the parent container instead of the full viewport (for use below a header). */
  fill?: boolean;
}) {
  return (
    <iframe
      src={src}
      title={title}
      style={{
        display: "block",
        width: fill ? "100%" : "100vw",
        height: fill ? "100%" : "100dvh",
        border: "none",
      }}
    />
  );
}
