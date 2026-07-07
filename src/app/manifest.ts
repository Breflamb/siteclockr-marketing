import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d6e6e",
    icons: [
      {
        src: "/brand/logo.png",
        sizes: "179x67",
        type: "image/png",
      },
    ],
  };
}
