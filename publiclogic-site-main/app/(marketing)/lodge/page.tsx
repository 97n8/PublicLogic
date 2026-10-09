import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { LODGE, META, SITE_URL } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/lodge', META.lodge.title, META.lodge.description);

const lodgingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Kendall Pond Lodge',
  description: META.lodge.description,
  url: LODGE.hero.href,
  areaServed: 'North Central Massachusetts',
  parentOrganization: { '@type': 'Organization', name: 'PublicLogic', url: SITE_URL },
};

export default function Lodge() {
  return (
    <main>
      <Hero headline={LODGE.hero.headline} body={LODGE.hero.body} />
      <div className="pl-hero-ctas">
        <Cta label={LODGE.hero.cta} href={LODGE.hero.href} />
      </div>

      <section className="pl-section">
        <h2>{LODGE.placeFirst.headline}</h2>
        <p className="pl-lead">{LODGE.placeFirst.body}</p>
      </section>

      <section className="pl-section">
        <h2>{LODGE.whyOnSite.headline}</h2>
        <p className="pl-lead">{LODGE.whyOnSite.body}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={LODGE.hero.cta} href={LODGE.hero.href} />
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
    </main>
  );
}
