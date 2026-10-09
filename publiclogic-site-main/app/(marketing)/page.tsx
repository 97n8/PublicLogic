import type { Metadata } from 'next';
import { Cta } from '../../components/site/Bits';
import { BRAND, HOME, META } from '../../lib/site-content';
import { pageMeta } from '../../lib/seo';

export const metadata: Metadata = pageMeta('', META.home.title, META.home.description);

export default function Home() {
  return (
    <main>
      <section className="pl-hero">
        <div className="pl-hero-copy">
          <h1>{HOME.hero.headline}</h1>
          {HOME.hero.body.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <div className="pl-hero-ctas">
          <Cta label={HOME.hero.cta} href={BRAND.primaryCta.href} />
          <Cta label={HOME.hero.secondaryCta.label} href={HOME.hero.secondaryCta.href} variant="secondary" />
        </div>
      </section>

      <section className="pl-section">
        <h2>{HOME.thesis.headline}</h2>
        <p className="pl-lead">{HOME.thesis.body}</p>
      </section>

      <section className="pl-section">
        <h2>{HOME.pathways.headline}</h2>
        {HOME.pathways.lead.map((line) => (
          <p className="pl-lead" key={line}>
            {line}
          </p>
        ))}
        <div className="pl-stage-list">
          {HOME.pathways.items.map((item, i) => (
            <article className="pl-stage" data-stage={i + 1} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <Cta label={item.cta} href={item.href} variant="secondary" />
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <h2>Three ways to work with us.</h2>
        <div className="pl-grid">
          {HOME.waysToWork.map((lane) => (
            <article className="pl-card" key={lane.name}>
              <h3>{lane.name}</h3>
              <p>{lane.copy}</p>
              <Cta label={lane.cta} href={lane.href} variant="secondary" />
            </article>
          ))}
        </div>
      </section>

      <section className="pl-section">
        <p className="pl-eyebrow">{HOME.governanceInfra.eyebrow}</p>
        <h2>{HOME.governanceInfra.headline}</h2>
        <p className="pl-lead">{HOME.governanceInfra.body}</p>
        <ul className="pl-example-list">
          {HOME.governanceInfra.items.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong> {item.copy}
            </li>
          ))}
        </ul>
        <Cta label={HOME.governanceInfra.cta} href={HOME.governanceInfra.href} variant="secondary" />
      </section>

      <section className="pl-section">
        <h2>{HOME.builtFrom.headline}</h2>
        <p className="pl-lead">{HOME.builtFrom.body}</p>
        <div className="pl-proof-grid">
          <div className="pl-proof-tile">
            <strong>Regional collaboration</strong>
            <p>Helped stand up a regional public-safety collaboration that started with five towns and grew to nine.</p>
          </div>
          <div className="pl-proof-tile">
            <strong>Recognized digital work</strong>
            <p>Municipal digital systems recognized at the 2025 Massachusetts Digital Government Summit.</p>
          </div>
        </div>
        <p className="pl-note pl-pullquote">{HOME.builtFrom.thesis}</p>
        <Cta label={HOME.builtFrom.cta} href={HOME.builtFrom.href} variant="secondary" />
      </section>

      <section className="pl-section">
        <article className="pl-card">
          <h3>{HOME.lodge.name}</h3>
          <p>{HOME.lodge.copy}</p>
          <Cta label={HOME.lodge.cta} href={HOME.lodge.href} variant="secondary" />
        </article>
      </section>

      <section className="pl-close-band">
        <p className="pl-eyebrow">{HOME.closing.eyebrow}</p>
        <h2>{HOME.closing.headline}</h2>
        <p>{HOME.closing.body}</p>
        <p className="pl-note pl-pullquote">
          {HOME.closing.line}
          <br />
          {HOME.closing.thesis}
        </p>
        <div className="pl-hero-ctas">
          <Cta label={BRAND.primaryCta.label} href={BRAND.primaryCta.href} />
          <Cta label="See services" href="/services" variant="secondary" />
        </div>
      </section>
    </main>
  );
}
