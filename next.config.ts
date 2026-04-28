import type { NextConfig } from "next";

const DEMO_URL = "https://demo.planara.com/demo";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old marketing-site demo mockups → real demo subdomain
      { source: "/demo", destination: DEMO_URL, permanent: false, basePath: false },
      { source: "/demo/service", destination: DEMO_URL, permanent: false, basePath: false },
      { source: "/demo/owner", destination: DEMO_URL, permanent: false, basePath: false },
    ];
  },
};

export default nextConfig;
