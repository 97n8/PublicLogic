import type { Metadata } from 'next';
import { Hero } from '../../../../components/site/Bits';
import { LEGAL } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/legal/accessibility', LEGAL.accessibility.headline);

export default function LegalAccessibility() {
  return (
    <main>
      <Hero headline={LEGAL.accessibility.headline} body="" />
      <section className="pl-section">
        <p className="pl-lead">{LEGAL.accessibility.body}</p>
      </section>
    </main>
  );
}
