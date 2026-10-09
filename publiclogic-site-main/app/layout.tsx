import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';
import { SITE_URL, BRAND } from '../lib/site-content';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
});

const defaultTitle = 'PublicLogic | Governance Systems and Public Operations';
const defaultDescription =
  'PublicLogic builds governance, systems, applications, and operating records for public, ' +
  'regional, and mission-driven work.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: 'PublicLogic',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/logo.png', width: 2092, height: 748, alt: 'PublicLogic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/logo.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PublicLogic',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: BRAND.emails.general,
  slogan: BRAND.firmLine,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${plexSerif.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
