import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out so it can be served by nginx on the OVH VPS.
  output: "export",
  images: { unoptimized: true },
  // Emit /path/index.html so nginx can serve clean URLs without rewrites.
  trailingSlash: true,
};

export default nextConfig;
