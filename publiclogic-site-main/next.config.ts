import type { NextConfig } from 'next';
import { SERVICES } from './lib/site-content';

// GitHub Pages project site: https://97n8.github.io/PublicLogic/
const BASE_PATH = '/PublicLogic';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: next build writes the whole site to ./out, which the Pages workflow publishes.
  output: 'export',
  basePath: BASE_PATH,
  // Static export has no image optimizer, so images are served as plain files.
  images: { unoptimized: true },
  // Read by withBasePath() in lib/base-path.ts for plain img sources.
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  // Not applied under output: 'export' (static hosting); kept for a host that serves redirects.
  async redirects() {
    // Old service slugs, merged into the six-line catalog. Keeps any
    // existing bookmarks/links live instead of 404ing.
    return Object.entries(SERVICES.redirects).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
