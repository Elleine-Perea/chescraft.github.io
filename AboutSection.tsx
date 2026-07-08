'use client';

import React, { useRef, useEffect, useState } from 'react';

const coreValues = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="currentColor" />
      </svg>
    ),
    title: 'Creativity',
    desc: 'Fresh ideas and original designs tailored to your brand.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
      </svg>
    ),
    title: 'Reliability',
    desc: 'Consistent delivery, on time, every time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" />
      </svg>
    ),
    title: 'Growth',
    desc: 'Always learning, always evolving with the industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: 'Attention to Detail',
    desc: 'Every pixel matters. Quality is non-negotiable.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex gap-1" aria-hidden="true">
            <div className="w-2 h-2 bg-primary rounded-none" />
            <div className="w-2 h-2 bg-secondary rounded-none opacity-60" />
            <div className="w-2 h-2 bg-accent rounded-none opacity-40" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="font-heading tracking-tight mb-8 leading-tight text-foreground" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Hello! I&apos;m{' '}
              <span className="text-gradient-purple">Francesca</span>
              <br />
              <span className="text-muted-foreground font-light text-2xl font-body">
                Virtual Assistant & Digital Creative
              </span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg font-body">
              <p>
                I&apos;m a Virtual Assistant and Digital Creative from the Philippines. I specialize in{' '}
                <span className="text-secondary font-semibold">Graphic Design, Web Design, Video Editing,</span>{' '}
                and General Virtual Assistance.
              </p>
              <p>
                Before entering the digital industry, I worked as a Service Crew at{' '}
                <span className="text-foreground font-medium">Jollibee for almost two years</span>. That experience
                strengthened my communication skills, adaptability, customer service, teamwork, and ability
                to perform under pressure.
              </p>
              <p>
                Today, I combine creativity with organization to help businesses{' '}
                <span className="text-secondary font-semibold">
                  save time, build their brand, and create meaningful digital experiences.
                </span>
              </p>
            </div>

            {/* Location badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl border border-border/50">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
              </svg>
              <div>
                <p className="text-xs text-muted-foreground font-body">Based in</p>
                <p className="text-sm font-semibold text-foreground font-body">Naic, Cavite, Philippines</p>
              </div>
            </div>
          </div>

          {/* Right: Core Values */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 font-heading">
              Core Values
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues?.map((val, i) => (
                <div
                  key={val?.title}
                  className="glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary group-hover:scale-110 transition-transform duration-200">
                      {val?.icon}
                    </span>
                    <span className="font-bold text-foreground text-sm font-heading">{val?.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-body">{val?.desc}</p>
                </div>
              ))}
            </div>

            {/* Decorative pixel grid */}
            <div className="mt-8 grid grid-cols-8 gap-1.5 opacity-20" aria-hidden="true">
              {Array.from({ length: 32 })?.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-none"
                  style={{
                    background: i % 4 === 0 ? '#8B5CF6' : i % 3 === 0 ? '#C084FC' : '#334155',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}