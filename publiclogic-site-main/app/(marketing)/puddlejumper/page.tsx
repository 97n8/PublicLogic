import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { PUDDLEJUMPER, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/puddlejumper', META.puddlejumper.title, META.puddlejumper.description);

export default function PuddleJumper() {
  return (
    <main>
      <p className="pl-eyebrow">{PUDDLEJUMPER.hero.eyebrow}</p>
      <Hero headline={PUDDLEJUMPER.hero.headline} body={PUDDLEJUMPER.hero.body} />

      <section className="pl-section">
        <h2>{PUDDLEJUMPER.storesResult.headline}</h2>
        <ul className="pl-example-list">
          {PUDDLEJUMPER.storesResult.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="pl-lead">{PUDDLEJUMPER.storesResult.body}</p>
        <p className="pl-note pl-pullquote">{PUDDLEJUMPER.storesResult.thesis}</p>
      </section>

      <section className="pl-section">
        <h2>{PUDDLEJUMPER.sources.headline}</h2>
        <p className="pl-lead">{PUDDLEJUMPER.sources.body}</p>
      </section>

      <section className="pl-section">
        <p className="pl-eyebrow">{PUDDLEJUMPER.caseSpaces.eyebrow}</p>
        <h2>{PUDDLEJUMPER.caseSpaces.headline}</h2>
        <p className="pl-lead">{PUDDLEJUMPER.caseSpaces.body}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label={PUDDLEJUMPER.hero.cta} href="/puddlejumper/how-it-works" />
        <Cta label="See the applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
