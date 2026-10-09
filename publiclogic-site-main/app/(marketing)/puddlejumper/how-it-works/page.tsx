import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { PUDDLEJUMPER } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta(
  '/puddlejumper/how-it-works',
  'How PuddleJumper Works',
  'The distinction PuddleJumper keeps between what was requested, what was ' +
    'allowed, and what actually happened — and why that is operational memory.',
);

export default function HowItWorks() {
  return (
    <main>
      <Hero headline={PUDDLEJUMPER.recordKeepsWhy.headline} body={PUDDLEJUMPER.recordKeepsWhy.body} />

      <section className="pl-section">
        <p className="pl-lead pl-pullquote">{PUDDLEJUMPER.recordKeepsWhy.thesis}</p>
      </section>

      <div className="pl-hero-ctas">
        <Cta label="See how work closes out" href="/puddlejumper/vault" variant="secondary" />
        <Cta label="Talk with PublicLogic" href="/contact?topic=puddlejumper" />
      </div>
    </main>
  );
}
