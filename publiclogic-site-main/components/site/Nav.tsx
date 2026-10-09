'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND, NAV } from '../../lib/site-content';

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const scrolledRef = useRef(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open — otherwise scrolling
  // behind an open menu shrinks the sticky nav mid-interaction and the
  // menu (positioned relative to it) jumps.
  useEffect(() => {
    if (!open) return undefined;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  useEffect(() => {
    let ticking = false;

    const applyScrollState = () => {
      ticking = false;
      // Hysteresis: enter the "scrolled" state past 32px, only leave it
      // once back under 12px. A single shared threshold flickers on/off
      // every frame when scroll position hovers near it (momentum
      // scrolling, trackpad rubber-banding), which shows up as visible
      // nav jitter.
      const y = window.scrollY;
      if (!scrolledRef.current && y > 32) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && y < 12) {
        scrolledRef.current = false;
        setScrolled(false);
      }
    };

    const onScroll = () => {
      // Close the mobile menu on scroll — it's positioned relative to
      // the nav, which resizes on scroll, so an open menu would jump.
      setOpen((prev) => (prev ? false : prev));
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(applyScrollState);
      }
    };

    applyScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="pl-nav" data-open={open ? 'true' : 'false'} data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="pl-nav-inner">
        <Link href="/" className="pl-brand" aria-label={BRAND.wordmark}>
          <img src="/logo.png" alt="PublicLogic" className="pl-logo" width={2092} height={748} />
        </Link>

        <button
          type="button"
          className="pl-nav-toggle"
          aria-expanded={open}
          aria-controls="pl-primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="pl-nav-toggle-box" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav id="pl-primary-nav" className={`pl-nav-links${open ? ' is-open' : ''}`} aria-label="Primary">
          {NAV.map((n) => {
            const active = isActivePath(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'is-active' : undefined}
              >
                {n.label}
              </Link>
            );
          })}
          <Link className="pl-nav-cta" href={BRAND.primaryCta.href}>
            {BRAND.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
