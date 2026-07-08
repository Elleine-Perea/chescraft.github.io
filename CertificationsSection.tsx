'use client';

import React, { useRef, useEffect, useState } from 'react';

const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h12v8a6 6 0 01-12 0V2z" stroke="#B89FE8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 5H3a2 2 0 000 4h3M18 5h3a2 2 0 010 4h-3" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16v4M8 20h8" stroke="#B89FE8" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="2" fill="#7C5CBF"/>
  </svg>
);

const MonitorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#B89FE8" strokeWidth="1.5"/>
    <path d="M8 21h8M12 17v4" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 7h12M6 11h8" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" stroke="#B89FE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6l-4 12" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HtmlIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" stroke="#B89FE8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 8h8l-.5 5-3.5 1-3.5-1-.25-3H15" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const certifications = [
  {
    org: 'Ripple Success Academy',
    title: 'Graduate Batch 17',
    icon: <TrophyIcon />,
    year: '2024',
    color: 'border-primary/40',
    dot: 'bg-primary',
  },
  {
    org: 'Mimo',
    title: 'Front-End Development',
    icon: <MonitorIcon />,
    year: '2024',
    color: 'border-secondary/40',
    dot: 'bg-secondary',
  },
  {
    org: 'Mimo',
    title: 'Python Programming',
    icon: <CodeIcon />,
    year: '2024',
    color: 'border-accent/40',
    dot: 'bg-accent',
  },
  {
    org: 'Mimo',
    title: 'HTML Certification',
    icon: <HtmlIcon />,
    year: '2024',
    color: 'border-primary/30',
    dot: 'bg-primary',
  },
];

export default function CertificationsSection() {
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
      id="certifications"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Certifications
          </span>
          <h2 className="mt-4 font-extrabold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Credentials &{' '}
            <span className="text-gradient-purple">Achievements</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px timeline-line sm:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-8">
            {certifications?.map((cert, i) => (
              <div
                key={cert?.title}
                className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 ${cert?.dot} rounded-none border-2 border-background z-10 animate-pulse-glow`}
                  aria-hidden="true"
                />

                {/* Card */}
                <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] glass-card rounded-2xl p-5 border ${cert?.color} hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group`}>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {cert?.icon}
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">{cert?.org}</p>
                      <p className="font-bold text-foreground text-sm sm:text-base">{cert?.title}</p>
                      <p className="text-xs text-primary mt-1">{cert?.year}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}