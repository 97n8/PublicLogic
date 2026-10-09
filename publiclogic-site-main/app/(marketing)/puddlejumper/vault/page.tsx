// Deliberate closeout. Formerly the VAULT framework page — the acronym and
// its five conditions exposed internal enforcement mechanics beyond what the
// v4.0 canon allows, so this route now carries ARCHIEVE: the closeout layer,
// explained at the level a buyer needs, nothing more.

import type { Metadata } from 'next';
import { Hero, Cta } from '../../../../components/site/Bits';
import { PUDDLEJUMPER } from '../../../../lib/site-content';
import { pageMeta } from '../../../../lib/seo';

export const metadata: Metadata = pageMeta(
  '/puddlejumper/vault',
  'Deliberate Closeout',
  'ARCHIEVE is the closeout layer PuddleJumper uses when governed work is ' +
    'ready to be preserved as a completed evidence package.',
);

export default function Archieve() {
  return (
    <main>
      <p className="pl-eyebrow">{PUDDLEJUMPER.archieve.eyebrow}</p>
      <Hero headline={PUDDLEJUMPER.archieve.headline} body={PUDDLEJUMPER.archieve.body} />

      <div className="pl-hero-ctas">
        <Cta label="Talk with PublicLogic" href="/contact?topic=puddlejumper" />
        <Cta label="Back to PuddleJumper" href="/puddlejumper" variant="secondary" />
      </div>
    </main>
  );
}
