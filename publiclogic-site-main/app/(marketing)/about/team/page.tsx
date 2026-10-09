import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { TEAM } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta(
  '/about/team',
  'Team',
  'Nathan Boudreau and Dr. Allison Weiss Rothschild, Co-Founders of PublicLogic.',
);

export default function Team() {
  return (
    <main>
      <Hero headline={TEAM.hero.headline} body={TEAM.hero.body} />

      <section className="pl-section">
        <div className="pl-principles">
          {TEAM.members.map((m) => (
            <div className="pl-principle" key={m.name}>
              <h3>{m.name}</h3>
              <p className="pl-note">{m.role}</p>
              <ul className="pl-example-list">
                {m.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {m.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="pl-hero-ctas">
        <Cta label="Start a conversation" href="/contact" />
      </div>
    </main>
  );
}
