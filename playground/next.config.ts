import type { NextConfig } from "next";

// Kit playground: renders the components in ../template so they can be
// developed and checked in a browser. Not a deliverable; pages copy template/.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
