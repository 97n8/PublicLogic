import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { Section } from '../../../../components/site/Section';
import { BIZZ, META } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/applications/bizz', META.bizz.title, META.bizz.description);

export default function BizzPage() {
  return (
    <main>
      <p className="pl-eyebrow">{BIZZ.hero.eyebrow}</p>
      <Hero headline={BIZZ.hero.headline} body={BIZZ.hero.body} />

      <Section headline={BIZZ.firstOS.headline} lead={BIZZ.firstOS.body} />

      <section className="pl-section">
        <h2>{BIZZ.carries.headline}</h2>
        <ul className="pl-example-list">
          {BIZZ.carries.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pl-section">
        <p className="pl-note">{BIZZ.statusNote}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={BIZZ.cta} href="/contact?topic=bizz" />
        <Cta label="See all applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
