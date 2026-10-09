import type { MetadataRoute } from 'next';
import { SITE_URL, SERVICES } from '../lib/site-content';

const STATIC_ROUTES = [
  '',
  '/about',
  '/about/team',
  '/applications',
  '/applications/muni',
  '/applications/build',
  '/applications/bizz',
  '/applications/stay',
  '/build-with-us',
  '/contact',
  '/legal/accessibility',
  '/legal/privacy',
  '/legal/terms',
  '/lodge',
  '/logiccommons',
  '/notes',
  '/permit-bridge',
  '/puddlejumper',
  '/puddlejumper/how-it-works',
  '/puddlejumper/vault',
  '/services',
  '/work',
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = SERVICES.items.map((s) => `/services/${s.slug}`);
  const now = new Date();

  return [...STATIC_ROUTES, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
import type { MetadataRoute } from 'next';
import { SITE_URL, SERVICES } from '../lib/site-content';

const STATIC_ROUTES = [
  '',
  '/about',
  '/about/team',
  '/applications',
  '/applications/muni',
  '/applications/build',
  '/applications/bizz',
  '/applications/stay',
  '/build-with-us',
  '/contact',
  '/legal/accessibility',
  '/legal/privacy',
  '/legal/terms',
  '/lodge',
  '/logiccommons',
  '/notes',
  '/permit-bridge',
  '/puddlejumper',
  '/puddlejumper/how-it-works',
  '/puddlejumper/vault',
  '/services',
  '/work',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = SERVICES.items.map((s) => `/services/${s.slug}`);
  const now = new Date();

  return [...STATIC_ROUTES, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
