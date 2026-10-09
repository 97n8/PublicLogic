import type { Metadata } from 'next';
import { Hero, Cta } from '../../../components/site/Bits';
import { NOTES } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta(
  '/notes',
  'Notes',
  'Process notes, governance essays, and findings from both PublicLogic ' +
    'principals — municipal government and clinical/organizational research.',
);

export default function FieldNotes() {
  return (
    <main>
      <Hero headline={NOTES.hero.headline} body={NOTES.hero.body} />

      <section className="pl-section">
        <h2>{NOTES.series.headline}</h2>
        <div className="pl-notes-list">
          {NOTES.series.items.map((n) => (
            <article className="pl-note-card" key={n.name}>
              <p className="pl-eyebrow">
                {n.type} · {n.status}
              </p>
              <h3>{n.name}</h3>
              <p className="pl-note">{n.subtitle}</p>
              <p>{n.abstract}</p>
              <p className="pl-note">{n.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section pl-empty-state">
        <h2>{NOTES.empty.headline}</h2>
        <p className="pl-lead">{NOTES.empty.body}</p>
        <Cta label={NOTES.empty.cta} href="/contact" />
      </section>
    </main>
  );
}
