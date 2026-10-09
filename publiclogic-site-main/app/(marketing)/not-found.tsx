// 404 — kept inside the marketing route group so Nav/Footer still render.

import { Hero, Cta } from '../../components/site/Bits';
import { COPY } from '../../lib/site-content';

export default function NotFound() {
  return (
    <main>
      <Hero headline={COPY.notFound.headline} body={COPY.notFound.body} />
      <div className="pl-hero-ctas">
        <Cta label="Go to Services" href="/services" />
        <Cta label="Go to Applications" href="/applications" variant="secondary" />
      </div>
    </main>
  );
}
