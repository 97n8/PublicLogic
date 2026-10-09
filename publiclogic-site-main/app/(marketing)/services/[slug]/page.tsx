import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Hero, Cta } from '@/components/site/Bits';
import { Section } from '@/components/site/Section';
import { SERVICES, META } from '@/lib/site-content';
import { pageMeta } from '@/lib/seo';

type Params = { slug: string };
type Props = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return SERVICES.items.map((s) => ({ slug: s.slug }));
}

function findService(slug: string) {
  return SERVICES.items.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: 'Service not found', description: META.services.description };
  return pageMeta(`/services/${service.slug}`, service.name, service.subhead);
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const { detailLabels: label } = SERVICES;

  return (
    <main>
      <Hero headline={service.h1} body={service.subhead} />

      <section className="pl-section">
        <blockquote className="pl-pullquote">
          <p>&ldquo;{service.triggerPhrase}&rdquo;</p>
        </blockquote>
      </section>

      <Section headline={label.whoFor} lead={service.whoFor} />

      <Section headline={label.whatTheyGet} lead={service.whatTheyGet} />

      <Section
        headline={label.engagementModel}
        lead={service.engagementModel}
        note={service.positioningNote}
      />

      <div className="pl-hero-ctas">
        <Cta label="Talk with us" href={`/contact?topic=${encodeURIComponent(service.lane)}`} />
        <Cta label="See all services" href="/services" variant="secondary" />
      </div>
    </main>
  );
}
