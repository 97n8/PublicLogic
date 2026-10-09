import type { Metadata } from 'next';
import { Hero } from '../../../components/site/Bits';
import { CONTACT, META } from '../../../lib/site-content';
import { pageMeta } from '../../../lib/seo';
import ContactForm from './ContactForm';

export const metadata: Metadata = pageMeta('/contact', META.contact.title, META.contact.description);

export default function Contact() {
  return (
    <main>
      <Hero headline={CONTACT.hero.headline} body={CONTACT.hero.body} />

      <section className="pl-section">
        <h2>{CONTACT.reasons.headline}</h2>
        <ul className="pl-example-list">
          {CONTACT.reasons.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="pl-lead">{CONTACT.reasons.thesis}</p>
        <p className="pl-note">{CONTACT.reasons.closing}</p>
      </section>

      <section className="pl-section">
        <h2>{CONTACT.next.headline}</h2>
        <p className="pl-lead">{CONTACT.next.body}</p>
      </section>

      <section className="pl-section">
        <ContactForm />
      </section>
      <section className="pl-section">
        <h2>{CONTACT.direct.headline}</h2>
        <ul className="pl-list">
          {CONTACT.direct.rows.map((r) => (
            <li className="pl-list-row" key={r.label}>
              <span>{r.label}</span>
              <strong>{r.value}</strong>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
