import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { ABOUT, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/about', META.about.title, META.about.description);

export default function About() {
  return (
    <main>
      <Hero headline={ABOUT.hero.headline} body={ABOUT.hero.body} />

      <section className="pl-section">
        <p className="pl-eyebrow">Founding directors</p>
        <div className="pl-founder-grid">
          {ABOUT.founders.map((f) => (
            <div className="pl-founder-card" key={f.name}>
              <h3>{f.name}</h3>
              <p className="pl-note">{f.role}</p>
              {f.copy.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="pl-hero-ctas">
          <Cta label="Full bios" href="/about/team" variant="secondary" />
        </div>
      </section>

      <section className="pl-section">
        <h2>{ABOUT.twoDisciplines.headline}</h2>
        <div className="pl-lens-grid">
          <div className="pl-lens-row">
            <strong>{ABOUT.founders[0].role}</strong>
            <p>{ABOUT.twoDisciplines.nateQuestion}</p>
          </div>
          <div className="pl-lens-row">
            <strong>{ABOUT.founders[1].role}</strong>
            <p>{ABOUT.twoDisciplines.allieQuestion}</p>
          </div>
          <div className="pl-lens-synthesis">
            <p>{ABOUT.twoDisciplines.closing}</p>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <h2>{ABOUT.structureIsCare.headline}</h2>
        <p className="pl-note pl-pullquote">{ABOUT.structureIsCare.thesis}</p>
        <p className="pl-lead">{ABOUT.structureIsCare.body}</p>
        <div className="pl-commitment-grid">
          {ABOUT.structureIsCare.commitments.map((c) => (
            <div className="pl-commitment-tile" key={c.label}>
              <h3>{c.label}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <h2>{ABOUT.photos.headline}</h2>
        <p className="pl-note">{ABOUT.photos.body}</p>
        <div className="pl-field-gallery">
          {ABOUT.photos.items.map((p) => (
            <figure key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption>{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pl-close-band">
        <h2>Want to see if we&rsquo;re a fit?</h2>
        <p>Meet the team behind PublicLogic, or tell us what&rsquo;s stuck.</p>
        <div className="pl-hero-ctas">
          <Cta label="Meet the team" href="/about/team" />
          <Cta label="Start a conversation" href="/contact" variant="secondary" />
        </div>
      </section>
    </main>
  );
}
