import type { NextConfig } from 'next';
import { SERVICES } from './lib/site-content';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
