import type { Metadata } from 'next';
import { SITE_URL } from './site-content';

const OG_IMAGE = { url: '/logo.png', width: 2092, height: 748, alt: 'PublicLogic' };

// Shared metadata shape for every marketing route: canonical URL, Open Graph,
// and Twitter card, all built from the same title/description already
// defined per page. Keeps SEO fields consistent without repeating them.
export function pageMeta(path: string, title: string, description?: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = title.includes('PublicLogic') ? title : `${title} · PublicLogic`;
  return {
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: 'PublicLogic',
      type: 'website',
      locale: 'en_US',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(description ? { description } : {}),
    title,
  };
}
