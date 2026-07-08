'use client';

import React, { useRef, useEffect, useState } from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="currentColor" />
      </svg>
    ),
    title: 'Creative Solutions',
    desc: 'Modern designs that represent your brand with pixel-perfect precision and unique visual identity.',
    span: 'col-span-1 row-span-1',
    accent: 'border-primary/30 hover:border-primary/60',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
      </svg>
    ),
    title: 'Fast Learner',
    desc: 'Quickly adapts to new tools, workflows, and project requirements without missing a beat.',
    span: 'col-span-1 row-span-1',
    accent: 'border-secondary/30 hover:border-secondary/60',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
      </svg>
    ),
    title: 'Reliable Support',
    desc: 'Organized, dependable, and deadline-driven. You can count on consistent delivery and clear updates throughout every project.',
    span: 'col-span-1 sm:col-span-2 row-span-1',
    accent: 'border-accent/30 hover:border-accent/60',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.9" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Client-Focused',
    desc: 'Clear communication and a collaborative process that keeps you in the loop at every stage.',
    span: 'col-span-1 row-span-1',
    accent: 'border-primary/30 hover:border-primary/60',
  },
];

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
            Why Choose ChesCraft
          </span>
          <h2 className="mt-4 font-heading tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            The{' '}
            <span className="text-gradient-purple">Difference</span>{' '}
            You Feel
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Card 1: Creative Solutions */}
          <div className="glass-card rounded-2xl p-7 border border-primary/30 hover:border-primary/60 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group" style={{ transitionDelay: '0ms' }}>
            <span className="text-primary group-hover:scale-110 inline-block transition-transform duration-200 mb-4">{features?.[0]?.icon}</span>
            <h3 className="font-heading text-foreground text-xl mb-2">{features?.[0]?.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">{features?.[0]?.desc}</p>
          </div>

          {/* Card 2: Fast Learner */}
          <div className="glass-card rounded-2xl p-7 border border-secondary/30 hover:border-secondary/60 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group" style={{ transitionDelay: '80ms' }}>
            <span className="text-secondary group-hover:scale-110 inline-block transition-transform duration-200 mb-4">{features?.[1]?.icon}</span>
            <h3 className="font-heading text-foreground text-xl mb-2">{features?.[1]?.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">{features?.[1]?.desc}</p>
          </div>

          {/* Card 3: Reliable Support — spans 2 cols */}
          <div className="glass-card rounded-2xl p-7 border border-accent/30 hover:border-accent/60 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group sm:col-span-2" style={{ transitionDelay: '160ms' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-shrink-0">
                <span className="text-accent group-hover:scale-110 inline-block transition-transform duration-200">{features?.[2]?.icon}</span>
              </div>
              <div>
                <h3 className="font-heading text-foreground text-xl mb-2">{features?.[2]?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{features?.[2]?.desc}</p>
              </div>
              {/* Pixel decorative row */}
              <div className="flex-shrink-0 hidden sm:grid grid-cols-4 gap-1 ml-auto" aria-hidden="true">
                {Array.from({ length: 16 })?.map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-none" style={{ background: i % 3 === 0 ? '#C084FC' : i % 2 === 0 ? '#8B5CF6' : '#334155' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Client-Focused — spans 2 cols */}
          <div className="glass-card rounded-2xl p-7 border border-primary/30 hover:border-primary/60 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group sm:col-span-2" style={{ transitionDelay: '240ms' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-shrink-0">
                <span className="text-primary group-hover:scale-110 inline-block transition-transform duration-200">{features?.[3]?.icon}</span>
              </div>
              <div>
                <h3 className="font-heading text-foreground text-xl mb-2">{features?.[3]?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{features?.[3]?.desc}</p>
              </div>
              {/* CTA inside card */}
              <a
                href="#contact"
                className="flex-shrink-0 ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/20 text-primary text-sm font-semibold border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200 whitespace-nowrap font-body"
              >
                <span className="pixel-dot" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}