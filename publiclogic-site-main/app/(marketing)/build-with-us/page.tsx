import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { BUILD_WITH_US, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/build-with-us', META.buildWithUs.title, META.buildWithUs.description);

export default function BuildWithUs() {
  return (
    <main>
      <p className="pl-eyebrow">{BUILD_WITH_US.hero.eyebrow}</p>
      <Hero
        headline={BUILD_WITH_US.hero.headline}
        body={BUILD_WITH_US.hero.body}
        primary={{ label: BUILD_WITH_US.hero.cta, href: '/contact?topic=build-with-us' }}
        secondary={BUILD_WITH_US.hero.secondaryCta}
      />

      <section id="what-belongs-here" className="pl-section">
        <h2>{BUILD_WITH_US.whatBelongs.headline}</h2>
        <p className="pl-lead">{BUILD_WITH_US.whatBelongs.body}</p>
        <div className="pl-criteria-list">
          {BUILD_WITH_US.whatBelongs.items.map((item, i) => (
            <div className="pl-criteria-row" key={item}>
              <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="pl-note">{BUILD_WITH_US.whatBelongs.closing}</p>
      </section>

      <section className="pl-section">
        <h2>Bilateral contribution.</h2>
        <p className="pl-lead">Each side has to bring something real, with decision rights that match the contribution.</p>
        <div className="pl-contribution-grid">
          <div className="pl-contribution-col">
            <h3>{BUILD_WITH_US.mayContribute.headline}</h3>
            <ul className="pl-example-list">
              {BUILD_WITH_US.mayContribute.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pl-note">{BUILD_WITH_US.mayContribute.note}</p>
          </div>
          <div className="pl-contribution-col">
            <h3>{BUILD_WITH_US.partnerBrings.headline}</h3>
            <p>{BUILD_WITH_US.partnerBrings.body}</p>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <h2>{BUILD_WITH_US.howItForms.headline}</h2>
        <div className="pl-stage-list">
          {BUILD_WITH_US.howItForms.steps.map((step, i) => (
            <article className="pl-stage" data-stage={i + 1} key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <h2>{BUILD_WITH_US.boundaries.headline}</h2>
        <div className="pl-caveat-card">
          <p className="pl-lead">{BUILD_WITH_US.boundaries.body}</p>
          <p className="pl-note">{BUILD_WITH_US.boundaries.note}</p>
        </div>
      </section>

      <section className="pl-close-band">
        <h2>{BUILD_WITH_US.closing.headline}</h2>
        <p>{BUILD_WITH_US.closing.body}</p>
        <div className="pl-hero-ctas">
          <Cta label={BUILD_WITH_US.closing.cta} href="/contact?topic=build-with-us" />
          <Cta label="See our work" href="/work" variant="secondary" />
        </div>
      </section>
    </main>
  );
}
