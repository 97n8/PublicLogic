import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { Section } from '../../../../components/site/Section';
import { STAY, META } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/applications/stay', META.stay.title, META.stay.description);

export default function StayPage() {
  return (
    <main>
      <p className="pl-eyebrow">{STAY.hero.eyebrow}</p>
      <Hero headline={STAY.hero.headline} body={STAY.hero.body} />

      <Section headline={STAY.bookingPlatforms.headline} lead={STAY.bookingPlatforms.body} />

      <section className="pl-section">
        <h2>{STAY.carries.headline}</h2>
        <ul className="pl-example-list">
          {STAY.carries.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pl-section">
        <p className="pl-note">{STAY.statusNote}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={STAY.cta} href="/lodge" />
        <Cta label="See all applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
