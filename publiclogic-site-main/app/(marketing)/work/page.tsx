import type { Metadata } from 'next';
import { Hero, Cta } from '@/components/site/Bits';
import { Section } from '@/components/site/Section';
import { WORK, META } from '@/lib/site-content';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/work', META.work.title, META.work.description);

export default function Work() {
  return (
    <main>
      <Hero headline={WORK.hero.headline} body={WORK.hero.body} />

      <section className="pl-section" aria-labelledby="proof-heading">
        <h2 id="proof-heading" className="sr-only">
          Where the work shows up
        </h2>
        <div className="pl-principles">
          {WORK.proofSections.map((s) => (
            <div className="pl-principle" key={s.id}>
              <p className="pl-eyebrow">{s.eyebrow}</p>
              <h3>{s.headline}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow={WORK.lodge.eyebrow}
        headline={WORK.lodge.headline}
        lead={WORK.lodge.body}
        note={WORK.lodge.thesis}
      />

      <Section headline={WORK.proof.headline} lead={WORK.proof.body} note={WORK.proof.note} />

      <Section headline={WORK.honesty.headline} lead={WORK.honesty.body} />

      <Section headline={WORK.whatWeCareAbout.headline} note={WORK.whatWeCareAbout.closing}>
        <ul className="pl-example-list">
          {WORK.whatWeCareAbout.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </Section>

      <Section headline={WORK.whoWeWorkWith.headline} lead={WORK.whoWeWorkWith.body}>
        <p className="pl-lead">{WORK.whoWeWorkWith.current}</p>
        <h3>{WORK.whoWeWorkWith.partnering.headline}</h3>
        <p className="pl-lead">{WORK.whoWeWorkWith.partnering.body}</p>
      </Section>

      <div className="pl-hero-ctas">
        <Cta label="Start a conversation" href="/contact" />
      </div>
    </main>
  );
}
