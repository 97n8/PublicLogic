import Link from 'next/link';

export function Cta({
  label,
  href,
  variant = 'primary',
}: {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}) {
  const cls = variant === 'primary' ? 'pl-cta pl-cta-primary' : 'pl-cta pl-cta-secondary';

  if (href.startsWith('http')) {
    return (
      <a className={cls} href={href} rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {label}
    </Link>
  );
}

export function Hero({
  headline,
  body,
  primary,
  secondary,
}: {
  headline: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="pl-hero">
      <div className="pl-hero-copy">
        <h1>{headline}</h1>
        {body ? <p>{body}</p> : null}
      </div>
      {(primary || secondary) && (
        <div className="pl-hero-ctas">
          {primary && <Cta label={primary.label} href={primary.href} />}
          {secondary && <Cta label={secondary.label} href={secondary.href} variant="secondary" />}
        </div>
      )}
    </section>
  );
}

export function ProofBar({ items, body }: { items: readonly string[]; body?: string }) {
  return (
    <section className="pl-proofbar" aria-label="Key highlights">
      <ul>
        {items.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      {body && <p className="pl-proofbar-body">{body}</p>}
    </section>
  );
}

export function RecordGrid({
  items,
  body,
}: {
  items: readonly { stat: string; label: string }[];
  body?: string;
}) {
  return (
    <section className="pl-record-grid-wrap" aria-label="Record summary">
      <div className="pl-record-grid">
        {items.map((r) => (
          <div className="pl-record-card" key={r.label}>
            <div className="pl-record-stat">{r.stat}</div>
            <div className="pl-record-label">{r.label}</div>
          </div>
        ))}
      </div>
      {body && <p className="pl-record-body">{body}</p>}
    </section>
  );
}
