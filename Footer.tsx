import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <AppLogo size={36} />
          </div>
          <p className="text-xs text-muted-foreground italic font-body">
            Crafting brands that stand the test of time.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {[
            { label: 'Facebook', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
          ]?.map((s) => (
            <a
              key={s?.label}
              href={s?.href}
              className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {s?.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right font-body">
          © 2026 ChesCraft.{' '}
          <span className="text-muted-foreground/60">
            Designed with creativity and lots of coffee.
          </span>
        </p>
      </div>
    </footer>
  );
}