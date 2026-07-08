'use client';

import React, { useRef, useEffect, useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$3',
    unit: '/hour',
    badge: null,
    features: [
      'Basic admin tasks',
      'Simple graphics',
      'Data entry',
      'Social media assistance',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'General VA',
    price: '$6',
    unit: '/hour',
    badge: 'Most Popular',
    features: [
      'Administrative support',
      'Graphic Design',
      'Calendar Management',
      'Research',
      'Customer Support',
      'Email Management',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$10',
    unit: '/hour',
    badge: null,
    features: [
      'Graphic Design',
      'Web Design',
      'Video Editing',
      'Priority Support',
      'Custom Projects',
    ],
    cta: 'Get Started',
    highlight: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 blob-primary opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Package Deals
          </span>
          <h2 className="mt-4 font-extrabold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Transparent{' '}
            <span className="text-gradient-purple">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Flexible hourly packages designed for every stage of your business.
          </p>
        </div>

        {/* Trial Banner */}
        <div
          className={`mb-10 mx-auto max-w-2xl glass-card rounded-2xl p-4 sm:p-5 border border-accent/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="flex-shrink-0 text-accent">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </span>
          <div>
            <p className="font-bold text-foreground text-sm sm:text-base font-heading">
              1 Week Trial —{' '}
              <span className="text-gradient-purple">50% OFF</span>{' '}
              your chosen package
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-body">
              Try before you commit. No long-term contracts required.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-accent/20 text-accent text-sm font-bold border border-accent/30 hover:bg-accent hover:text-white transition-all duration-200 whitespace-nowrap font-body"
          >
            Claim Trial
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 100} visible={visible} />
          ))}
        </div>

        {/* Discovery CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base glow-purple hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-95 font-body"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
            </svg>
            Book a Discovery Call
          </a>
          <p className="mt-3 text-xs text-muted-foreground font-body">
            Free 30-min consultation. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  delay,
  visible,
}: {
  plan: (typeof plans)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className={`relative glass-card rounded-2xl p-7 flex flex-col border transition-all duration-400 hover:-translate-y-2 ${
        plan.highlight
          ? 'border-primary/60 glow-purple scale-[1.02]'
          : 'border-border/50 hover:border-primary/40 hover:glow-purple-sm'
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        {plan.name}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-gradient-purple' : 'text-foreground'}`}>
          {plan.price}
        </span>
        <span className="text-muted-foreground text-sm font-medium">{plan.unit}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-none flex-shrink-0" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
          plan.highlight
            ? 'bg-primary text-primary-foreground glow-purple-sm hover:bg-secondary'
            : 'bg-muted text-foreground hover:bg-primary/20 hover:text-primary border border-border/50'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}