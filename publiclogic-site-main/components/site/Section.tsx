import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  headline: string;
  lead?: string;
  note?: string;
  headingLevel?: 'h2' | 'h3';
  children?: ReactNode;
};

export function Section({
  eyebrow,
  headline,
  lead,
  note,
  headingLevel: Heading = 'h2',
  children,
}: SectionProps) {
  return (
    <section className="pl-section">
      {eyebrow && <p className="pl-eyebrow">{eyebrow}</p>}
      <Heading>{headline}</Heading>
      {lead && <p className="pl-lead">{lead}</p>}
      {children}
      {note && <p className="pl-note">{note}</p>}
    </section>
  );
}
