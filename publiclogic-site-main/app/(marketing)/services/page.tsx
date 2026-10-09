import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, Cta } from '../../../components/site/Bits';
import { SERVICES, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/services', META.services.title, META.services.description);

export default function ServicesHub() {
  return (
    <main>
      <p className="pl-eyebrow">{SERVICES.hero.eyebrow}</p>
      <Hero headline={SERVICES.hero.headline} body={SERVICES.hero.body} />

      <section className="pl-section">
        <div className="pl-intro-callout">
          <div>
            <h2>{SERVICES.intro.headline}</h2>
            <p className="pl-lead">{SERVICES.intro.body}</p>
          </div>
          <div className="pl-intro-callout-cta">
            <Cta label="Ask about a Readiness Review" href="/contact" />
            <p className="pl-note">A fixed-scope first engagement for most clients.</p>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <p className="pl-eyebrow">{SERVICES.items.length} practice areas · {SERVICES.groups.length} groups</p>
        {SERVICES.groups.map((group) => {
          const items = SERVICES.items.filter((s) => s.group === group.key);
          return (
            <div className="pl-service-row" key={group.key}>
              <div className="pl-service-row-label">
                <h2>{group.label}</h2>
                <p className="pl-note">{group.gloss}</p>
              </div>
              <div className="pl-service-row-cards">
                {items.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="pl-card pl-card-link">
                    <h3>{s.name}</h3>
                    <p>{s.subhead}</p>
                    <span className="pl-card-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="pl-section pl-readiness">
        <p className="pl-eyebrow">{SERVICES.engagementSteps.eyebrow}</p>
        <h2>{SERVICES.engagementSteps.headline}</h2>
        <div className="pl-grid">
          {SERVICES.engagementSteps.steps.map((step, i) => (
            <article className="pl-card" key={step.name}>
              <span className="pl-card-line">{`${i + 1}. ${step.name}`}</span>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <h2>{SERVICES.collaborators.headline}</h2>
        <p className="pl-lead">{SERVICES.collaborators.body}</p>
      </section>

      <section className="pl-close-band">
        <p className="pl-eyebrow">{SERVICES.callProcess.eyebrow}</p>
        <h2>{SERVICES.callProcess.headline}</h2>
        <p>{SERVICES.callProcess.body}</p>
        <p className="pl-note">{SERVICES.callProcess.note}</p>
        <Cta label="Start a conversation" href="/contact" />
      </section>
    </main>
  );
}
