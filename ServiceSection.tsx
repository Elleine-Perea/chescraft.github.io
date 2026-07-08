'use client';

import React, { useRef, useEffect, useState } from 'react';

// Purple SVG icons for each service
const GraphicDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="2" y="2" width="9" height="9" rx="1" fill="currentColor" opacity="0.9" />
    <rect x="13" y="2" width="9" height="9" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="2" y="13" width="9" height="9" rx="1" fill="currentColor" opacity="0.6" />
    <circle cx="17.5" cy="17.5" r="4.5" fill="currentColor" opacity="0.9" />
  </svg>
);

const WebDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="2" y="3" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 8l3 3-3 3M13 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VideoEditingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="2" y="4" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M17 8.5l5-3v13l-5-3V8.5z" fill="currentColor" opacity="0.8" />
    <path d="M7 9l5 3-5 3V9z" fill="currentColor" />
  </svg>
);

const VAIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M7 9h10M7 12h7M7 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    icon: <GraphicDesignIcon />,
    title: 'Graphic Design',
    color: 'from-primary/20 to-accent/10',
    borderColor: 'border-primary/30',
    glowColor: 'hover:border-primary/60',
    items: [
      'Social Media Graphics',
      'Branding',
      'Post Templates',
      'Flyers',
      'Canva Designs',
      'Pixel Art Assets',
    ],
  },
  {
    icon: <WebDesignIcon />,
    title: 'Web Design',
    color: 'from-secondary/20 to-primary/10',
    borderColor: 'border-secondary/30',
    glowColor: 'hover:border-secondary/60',
    items: [
      'Landing Pages',
      'Portfolio Websites',
      'Business Websites',
      'Responsive Design',
      'Wix',
      'HTML/CSS',
    ],
  },
  {
    icon: <VideoEditingIcon />,
    title: 'Video Editing',
    color: 'from-accent/20 to-secondary/10',
    borderColor: 'border-accent/30',
    glowColor: 'hover:border-accent/60',
    items: [
      'Short-form Reels',
      'TikTok',
      'YouTube Shorts',
      'CapCut Editing',
      'Basic Motion Graphics',
    ],
  },
  {
    icon: <VAIcon />,
    title: 'General Virtual Assistant',
    color: 'from-primary/15 to-secondary/10',
    borderColor: 'border-primary/20',
    glowColor: 'hover:border-primary/50',
    items: [
      'Administrative Support',
      'Email Management',
      'Calendar Management',
      'Data Entry',
      'Research',
      'Customer Support',
      'Documentation',
    ],
  },
];

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1" aria-hidden="true">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 bg-primary rounded-none opacity-60" style={{ opacity: 1 - i * 0.2 }} />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              My Services
            </span>
          </div>
          <h2 className="font-heading tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            What I Can Do{' '}
            <span className="text-gradient-purple">For You</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base font-body">
            From pixel-perfect designs to reliable virtual support — I&apos;ve got you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  delay,
  visible,
}: {
  svc: (typeof services)[0];
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`glass-card rounded-2xl border ${svc.borderColor} ${svc.glowColor} p-6 flex flex-col gap-4 transition-all duration-400 hover:-translate-y-2 cursor-default group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon + Title */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} text-primary border ${svc.borderColor} transition-all duration-300 ${hovered ? 'scale-110' : ''}`}>
        {svc.icon}
      </div>

      <h3 className="font-heading text-foreground text-lg leading-tight">
        {svc.title}
      </h3>

      {/* Items list */}
      <ul className="space-y-2 flex-1">
        {svc.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span className="w-1.5 h-1.5 bg-primary rounded-none flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div
        className={`h-0.5 rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ${hovered ? 'w-full' : 'w-0'}`}
        aria-hidden="true"
      />
    </div>
  );
}