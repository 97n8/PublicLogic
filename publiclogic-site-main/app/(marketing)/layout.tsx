import type { Metadata } from 'next';
import './site.css';
import Nav from '../../components/site/Nav';
import Footer from '../../components/site/Footer';
import { META } from '../../lib/site-content';

export const metadata: Metadata = {
  title: {
    template: '%s · PublicLogic',
    default: META.home.title,
  },
  description: META.home.description,
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="pl-page">{children}</div>
      <Footer />
    </>
  );
}
