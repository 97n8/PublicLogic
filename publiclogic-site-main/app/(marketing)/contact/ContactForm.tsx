'use client';

import { useEffect, useState } from 'react';
import { CONTACT, INTEREST_FORM } from '../../../lib/site-content';

// Topic query params used by "Notify me"/CTA links across the site, mapped
// to the visible "Interested in" options below.
const TOPIC_TO_INTEREST: Record<string, string> = {
  puddlejumper: 'PuddleJumper',
  logiccommons: 'LogicCommons',
  permitbridge: 'Permit & Bridge',
  municipal: 'Services / Consulting',
  institutional: 'Services / Consulting',
  lodge: 'Kendall Pond Lodge',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sourcePage, setSourcePage] = useState('');

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get('topic');
    if (topic && TOPIC_TO_INTEREST[topic]) {
      setInterestedIn(TOPIC_TO_INTEREST[topic]);
    }
    // Where they were before landing on the form — the referring page if
    // we have one, otherwise the topic param, otherwise "direct".
    setSourcePage(document.referrer || (topic ? `topic=${topic}` : 'direct'));
  }, []);

  if (submitted) {
    return (
      <div className="pl-success-state" role="status" aria-live="polite">
        <h2>{CONTACT.thankYou.headline}</h2>
        <p className="pl-lead">{CONTACT.thankYou.body}</p>
      </div>
    );
  }

  return (
    <form
      className="pl-form"
      onSubmit={(event) => {
        event.preventDefault();

        // Every interest CTA on the site funnels into this one form, which
        // posts straight into the linked Google Sheet — no redirect off
        // the site, no embedded Google UI. The formResponse endpoint
        // doesn't support CORS, so the response is opaque (no-cors); we
        // submit optimistically and show the thank-you state either way.
        const body = new URLSearchParams({
          [INTEREST_FORM.entries.name]: name,
          [INTEREST_FORM.entries.email]: email,
          [INTEREST_FORM.entries.orgType]: org,
          [INTEREST_FORM.entries.interestedIn]: interestedIn,
          [INTEREST_FORM.entries.message]: message,
          [INTEREST_FORM.entries.sourcePage]: sourcePage,
        });

        fetch(INTEREST_FORM.action, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
          keepalive: true,
        }).catch(() => {
          // Opaque no-cors response means we can't detect real failures
          // either way — fail silently and still show the thank-you state.
        });

        setSubmitted(true);
      }}
    >
      <div className="pl-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pl-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pl-field">
        <label htmlFor="org">Town / organization</label>
        <select id="org" name="org" required value={org} onChange={(e) => setOrg(e.target.value)}>
          <option value="" disabled>
            Choose one
          </option>
          {CONTACT.orgOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="pl-field">
        <label htmlFor="interestedIn">What are you interested in?</label>
        <select
          id="interestedIn"
          name="interestedIn"
          required
          value={interestedIn}
          onChange={(e) => setInterestedIn(e.target.value)}
        >
          <option value="" disabled>
            Choose one
          </option>
          {CONTACT.interestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="pl-field">
        <label htmlFor="message">{"What's stuck?"}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What is active, stuck, scattered, or being carried by one person?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="pl-cta pl-cta-primary" type="submit">
        Send
      </button>
    </form>
  );
}
