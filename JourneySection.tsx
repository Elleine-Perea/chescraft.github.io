'use client';

import React, { useRef, useEffect, useState } from 'react';

const GraduateIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#B89FE8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 10.5v5c0 2 2.686 3.5 6 3.5s6-1.5 6-3.5v-5" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 8v5" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LaptopIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="#B89FE8" strokeWidth="1.5"/>
    <path d="M1 20h22" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 8h10M7 12h6" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WorkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#B89FE8" strokeWidth="1.5"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#9B7FD4" strokeWidth="1.5"/>
    <path d="M12 12v4M10 14h4" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h12v8a6 6 0 01-12 0V2z" stroke="#B89FE8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 5H3a2 2 0 000 4h3M18 5h3a2 2 0 010 4h-3" stroke="#9B7FD4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16v4M8 20h8" stroke="#B89FE8" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="2" fill="#7C5CBF"/>
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#B89FE8" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(124,92,191,0.3)"/>
    <circle cx="12" cy="12" r="2" fill="#9B7FD4"/>
  </svg>
);

const journeySteps = [
  {
    year: '2020',
    title: 'TVL ICT Graduate',
    desc: 'Completed Technical Vocational Livelihood - Information and Communications Technology track.',
    icon: <GraduateIcon />,
    color: 'text-primary',
    dot: 'bg-primary',
  },
  {
    year: '2021',
    title: 'BS Computer Science Student',
    desc: 'Enrolled in Bachelor of Science in Computer Science, building a strong foundation in tech.',
    icon: <LaptopIcon />,
    color: 'text-secondary',
    dot: 'bg-secondary',
  },
  {
    year: '2022–2023',
    title: 'Service Crew at Jollibee',
    desc: '1 year and 9 months of customer service excellence, building communication, teamwork, and resilience.',
    icon: <WorkIcon />,
    color: 'text-accent',
    dot: 'bg-accent',
  },
  {
    year: '2024',
    title: 'Ripple Success Academy Graduate',
    desc: 'Completed intensive training in virtual assistance and digital skills — Batch 17.',
    icon: <TrophyIcon />,
    color: 'text-primary',
    dot: 'bg-primary',
  },
  {
    year: '2024–Present',
    title: 'Freelance Digital Creative',
    desc: 'Building ChesCraft — offering design, web, video, and VA services to clients worldwide.',
    icon: <StarIcon />,
    color: 'text-gradient-purple',
    dot: 'bg-accent',
  },
];

export default function JourneySection() {
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
      id="journey"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            My Journey
          </span>
          <h2 className="mt-4 font-extrabold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            The Path That{' '}
            <span className="text-gradient-purple">Made Me</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 timeline-line" aria-hidden="true" />

          <div className="space-y-10">
            {journeySteps?.map((step, i) => (
              <div
                key={step?.title}
                className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[2.15rem] top-1.5 w-4 h-4 ${step?.dot} rounded-none border-2 border-background z-10`}
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/40 hover:-translate-y-0.5 hover:glow-purple-sm transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {step?.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-bold text-primary tracking-wider">{step?.year}</span>
                      </div>
                      <h3 className="font-bold text-foreground text-base mb-1.5">{step?.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}