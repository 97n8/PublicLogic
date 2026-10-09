import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { Section } from '../../../../components/site/Section';
import { BUILD, META } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/applications/build', META.build.title, META.build.description);

export default function BuildAppPage() {
  return (
    <main>
      <p className="pl-eyebrow">{BUILD.hero.eyebrow}</p>
      <Hero headline={BUILD.hero.headline} body={BUILD.hero.body} />

      <Section headline={BUILD.oneProject.headline} lead={BUILD.oneProject.body} />

      <section className="pl-section">
        <h2>{BUILD.carries.headline}</h2>
        <ul className="pl-example-list">
          {BUILD.carries.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pl-section">
        <p className="pl-note">{BUILD.statusNote}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={BUILD.cta} href="/contact?topic=build" />
        <Cta label="See all applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
