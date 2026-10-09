import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { Section } from '../../../../components/site/Section';
import { MUNI, META } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/applications/muni', META.muni.title, META.muni.description);

export default function MuniPage() {
  return (
    <main>
      <p className="pl-eyebrow">{MUNI.hero.eyebrow}</p>
      <Hero headline={MUNI.hero.headline} body={MUNI.hero.body} />

      <Section headline={MUNI.builtFor.headline} lead={MUNI.builtFor.body} />

      <section className="pl-section">
        <h2>{MUNI.fitsWhere.headline}</h2>
        <ul className="pl-example-list">
          {MUNI.fitsWhere.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <Section headline={MUNI.doesNot.headline} lead={MUNI.doesNot.body} />

      <div className="pl-hero-ctas">
        <Cta label={MUNI.cta} href="/contact?topic=muni" />
        <Cta label="See all applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
