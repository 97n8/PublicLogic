import type { Metadata } from 'next';
import { Hero } from '../../../../components/site/Bits';
import { LEGAL } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta('/legal/privacy', LEGAL.privacy.headline);

export default function LegalPrivacy() {
  return (
    <main>
      <Hero headline={LEGAL.privacy.headline} body="" />
      <section className="pl-section">
        <p className="pl-lead">{LEGAL.privacy.body}</p>
      </section>
    </main>
  );
}
