import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cta } from '../../../components/site/Bits';
import { APPLICATIONS, SERVICES, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';

export const metadata: Metadata = pageMeta('/applications', META.applications.title, META.applications.description);

/** Maps a status label to one of four semantic badge treatments. Color is
 * paired with a text label throughout, never used as the sole indicator. */
function statusClass(status: string) {
  if (status === 'Live') return 'pl-status-live';
  if (status === 'Pilot' || status === 'Internal Pilot' || status === 'Public Beta') return 'pl-status-pilot';
  if (status === 'In Development') return 'pl-status-development';
  return 'pl-status-planned';
}

const PRODUCT_ACCENTS = ['pl-product-teal', 'pl-product-gold'];

// Small bespoke line-icon set, kept in one cohesive stroke style (48x48
// viewbox, 1.8px stroke). Decorative only — hidden from assistive tech.
const PRODUCT_ICONS: Record<string, ReactNode> = {
  LogicCommons: (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M9 10.5h12l4 5H39v22H9z" />
      <path d="M16 23h16M16 29h12" />
    </svg>
  ),
  'Permit & Bridge': (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M7 34h34M11 34V22m26 12V22M11 24c7 0 7-10 13-10s6 10 13 10" />
      <path d="M16 30v4m8-8v8m8-4v4" />
    </svg>
  ),
};

export default function ApplicationsHub() {
  return (
    <main>
      <div className="pl-hero pl-hero-with-image">
        <div className="pl-hero-copy">
          <h1>{APPLICATIONS.hero.headline}</h1>
          <p>{APPLICATIONS.hero.body}</p>
        </div>
        <Image
          className="pl-hero-image"
          src="/applications-toolbox.png"
          alt="A toolbox holding icons for documents, calendars, search, links, notes, and charts"
          width={1680}
          height={952}
          priority
        />
      </div>

      <section className="pl-section pl-applications-intro" aria-labelledby="applications-heading">
        <div className="pl-section-heading">
          <p className="pl-eyebrow">The first usable tools</p>
          <h2 id="applications-heading">Choose the tool. Do the work. Keep the record.</h2>
        </div>
        <div className="pl-product-grid">
          {APPLICATIONS.items.map((a, i) => (
            <article className={`pl-product-card ${PRODUCT_ACCENTS[i % PRODUCT_ACCENTS.length]}`} key={a.name}>
              <div className="pl-product-card-top">
                <span className="pl-product-icon">{PRODUCT_ICONS[a.name]}</span>
                <span className={`pl-product-status ${statusClass(a.status)}`}>
                  <span aria-hidden="true" />
                  {a.status}
                </span>
              </div>
              <div className="pl-product-copy">
                <h3>{a.name}</h3>
                <p className="pl-product-tagline">{a.tagline}</p>
                <p>{a.copy}</p>
              </div>
              <div className="pl-product-card-footer">
                <Link className="pl-product-link" href={a.href}>
                  {a.cta}
                  <span aria-hidden="true">↗</span>
                </Link>
                <div className="pl-related-services">
                  <span className="pl-related-label">Built from our work in</span>{' '}
                  {a.relatedServices.map((slug, i2) => {
                    const service = SERVICES.items.find((s) => s.slug === slug);
                    if (!service) return null;
                    return (
                      <span key={slug}>
                        <Link href={`/services/${slug}`}>{service.name}</Link>
                        {i2 < a.relatedServices.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <Link className="pl-cta-ghost pl-cta" href={`/contact?topic=${a.topic}`}>
                    Tell us what you need
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pl-runtime" aria-labelledby="runtime-heading">
        <div className="pl-runtime-copy">
          <div className="pl-doctrine-head">
            <Image
              className="pl-doctrine-mark"
              src="/puddlejumper-mascot.png"
              alt=""
              width={96}
              height={64}
            />
            <p className="pl-eyebrow">{APPLICATIONS.underneath.eyebrow}</p>
          </div>
          <h2 id="runtime-heading">{APPLICATIONS.underneath.headline}</h2>
          <p>{APPLICATIONS.underneath.body}</p>
          <Link className="pl-runtime-link" href={APPLICATIONS.underneath.href}>
            {APPLICATIONS.underneath.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="pl-runtime-diagram" role="img" aria-label="PublicLogic applications share one governed PuddleJumper runtime underneath">
          <div className="pl-runtime-surfaces" aria-hidden="true">
            <span>Documents</span>
            <span>Permits</span>
            <span>Projects</span>
            <span>Operations</span>
          </div>
          <div className="pl-runtime-connector" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="pl-runtime-core" aria-hidden="true">
            <span>PJ</span>
            <div>
              <strong>PuddleJumper</strong>
              <small>Governed runtime</small>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <p className="pl-eyebrow">{APPLICATIONS.families.eyebrow}</p>
        <h2>{APPLICATIONS.families.headline}</h2>
        <p className="pl-lead">{APPLICATIONS.families.body}</p>
        <div className="pl-family-list">
          {APPLICATIONS.families.items.map((f, i) => (
            <Link className="pl-family-row" href={f.href} key={f.name}>
              <span className="pl-family-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pl-family-name">
                <h3>{f.name}</h3>
                <p>{f.tagline}</p>
              </div>
              <p className="pl-family-copy">{f.copy}</p>
              <span className={`pl-product-status ${statusClass(f.status)}`}>
                <span aria-hidden="true" />
                {f.status}
              </span>
              <span className="pl-family-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pl-trust-panel">
        <div className="pl-trust-statement">
          <p className="pl-eyebrow">Plain language, precise status</p>
          <h2>{APPLICATIONS.sameSpine.headline}</h2>
          <p className="pl-note">{APPLICATIONS.sameSpine.items.join(' · ')}</p>
          <p>{APPLICATIONS.sameSpine.closing}</p>
        </div>
        <div className="pl-status-legend">
          {APPLICATIONS.statusLanguage.items.map((s) => (
            <div key={s.label}>
              <strong>{s.label}</strong>
              <span>{s.copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pl-close-band">
        <p className="pl-eyebrow">Start with the work</p>
        <h2>Need a tool, a pilot, or a better way to carry the record?</h2>
        <p>Show us where the work gets stuck, and we&rsquo;ll tell you whether an application fits &mdash; or whether the problem needs something else.</p>
        <Cta label="Start a conversation" href="/contact" />
      </section>
    </main>
  );
}
