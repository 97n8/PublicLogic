import Link from 'next/link';
import { BRAND, NAV, COPY } from '../../lib/site-content';

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Accessibility', href: '/legal/accessibility' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pl-footer">
      <div className="pl-footer-main">
        <div className="pl-footer-brand">
          <span className="pl-wordmark">{BRAND.wordmark}</span>
          <span className="pl-subhead">{BRAND.firmLine}</span>
        </div>

        <p className="pl-footer-note">
          <span className="pl-note">
            {COPY.footerLegal} · {year} ·{' '}
            <a href={`mailto:${BRAND.emails.general}`}>{BRAND.emails.general}</a>
          </span>
        </p>
      </div>

      <nav className="pl-footer-links" aria-label="Footer">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
        <Link href="/contact">Contact</Link>
        {LEGAL_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      <p className="pl-footer-stamp">{COPY.footerStamp}</p>
    </footer>
  );
}
