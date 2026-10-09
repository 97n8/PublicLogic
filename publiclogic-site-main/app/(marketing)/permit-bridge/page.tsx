import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { PERMITBRIDGE, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/permit-bridge', META.permitbridge.title, META.permitbridge.description);

export default function PermitBridgePage() {
  return (
    <main>
      <p className="pl-eyebrow">{PERMITBRIDGE.hero.subline}</p>
      <Hero headline={PERMITBRIDGE.hero.headline} body={PERMITBRIDGE.hero.body} />

      <section className="pl-section">
        <h2>{PERMITBRIDGE.startWithRequirement.headline}</h2>
        <p className="pl-lead">{PERMITBRIDGE.startWithRequirement.body}</p>
        <p className="pl-note pl-pullquote">{PERMITBRIDGE.startWithRequirement.thesis}</p>
        <p className="pl-lead">{PERMITBRIDGE.startWithRequirement.closing}</p>
      </section>

      <section className="pl-section">
        <h2>{PERMITBRIDGE.sides.headline}</h2>
        <div className="pl-grid">
          {PERMITBRIDGE.sides.items.map((item) => (
            <article className="pl-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={PERMITBRIDGE.hero.cta} href="/contact?topic=permitbridge" />
        <Cta label="Explore LogicCommons" href="/logiccommons" variant="secondary" />
      </div>
    </main>
  );
}
