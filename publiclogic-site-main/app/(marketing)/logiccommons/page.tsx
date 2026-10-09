import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { LOGICCOMMONS, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/logiccommons', META.logiccommons.title, META.logiccommons.description);

export default function LogicCommonsPage() {
  return (
    <main>
      <p className="pl-eyebrow">{LOGICCOMMONS.hero.subline}</p>
      <Hero headline={LOGICCOMMONS.hero.headline} body={LOGICCOMMONS.hero.body} />

      <section className="pl-section">
        <h2>{LOGICCOMMONS.friction.headline}</h2>
        <p className="pl-lead">{LOGICCOMMONS.friction.body}</p>
        <p className="pl-note pl-pullquote">{LOGICCOMMONS.friction.thesis}</p>
      </section>

      <section className="pl-section">
        <h2>{LOGICCOMMONS.tools.headline}</h2>
        <p className="pl-lead">{LOGICCOMMONS.tools.body}</p>
        <div className="pl-grid">
          {LOGICCOMMONS.tools.items.map((item) => (
            <article className="pl-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <p className="pl-note">{LOGICCOMMONS.note}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={LOGICCOMMONS.hero.cta} href="/contact?topic=logiccommons" />
        <Cta label="Explore Permit & Bridge" href="/permit-bridge" variant="secondary" />
      </div>
    </main>
  );
}
