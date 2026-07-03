import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";
import { OgImageContent } from "@/lib/og-image-node";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
