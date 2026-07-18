import type { NextConfig } from "next";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const nextConfig: NextConfig = {
  // Explicitly expose public env to the client bundle (static export).
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
  },
  // Produce a fully static site in ./out so it can be served by nginx on the OVH VPS.
  output: "export",
  images: { unoptimized: true },
  // Emit /path/index.html so nginx can serve clean URLs without rewrites.
  trailingSlash: true,
};

export default nextConfig;
