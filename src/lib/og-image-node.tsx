import { siteConfig } from "@/lib/data/site";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#09090b",
        backgroundImage:
          "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 55%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 28,
          color: "#9ca3af",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            display: "flex",
          }}
        />
        {siteConfig.title}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.05,
          maxWidth: 900,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "#9ca3af",
          marginTop: 24,
          maxWidth: 820,
        }}
      >
        {siteConfig.headline}
      </div>
    </div>
  );
}
