import type { Metadata } from 'next';
import { Hero } from '../../../../components/site/Bits';
import { LEGAL } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/legal/terms', LEGAL.terms.headline);

export default function LegalTerms() {
  return (
    <main>
      <Hero headline={LEGAL.terms.headline} body="" />
      <section className="pl-section">
        <p className="pl-lead">{LEGAL.terms.body}</p>
      </section>
    </main>
  );
}
