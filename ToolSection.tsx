'use client';

import React, { useRef, useEffect, useState } from 'react';

// Purple SVG icons for each tool
const toolIcons: Record<string, React.ReactNode> = {
  Canva: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="13" y="2" width="9" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="2" y="13" width="9" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="17.5" cy="17.5" r="4.5" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  CapCut: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 8.5l6-3.5v14l-6-3.5V8.5z" fill="currentColor" opacity="0.8" />
      <path d="M6 9l5 3-5 3V9z" fill="currentColor" />
    </svg>
  ),
  GoPaint: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor" />
    </svg>
  ),
  'Ibis Paint': (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a1 1 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 000-1.41z" fill="currentColor" />
    </svg>
  ),
  Resprite: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="3" y="3" width="4" height="4" fill="currentColor" />
      <rect x="10" y="3" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="17" y="3" width="4" height="4" fill="currentColor" opacity="0.3" />
      <rect x="3" y="10" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="10" y="10" width="4" height="4" fill="currentColor" />
      <rect x="17" y="10" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="3" y="17" width="4" height="4" fill="currentColor" opacity="0.3" />
      <rect x="10" y="17" width="4" height="4" fill="currentColor" opacity="0.6" />
      <rect x="17" y="17" width="4" height="4" fill="currentColor" />
    </svg>
  ),
  'Google Workspace': (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="13" y="3" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="3" y="13" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  'Microsoft Office': (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9h10M7 12h10M7 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  ChatGPT: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  Wix: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="3" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 8h20" stroke="currentColor" strokeWidth="2" />
      <path d="M7 13h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 8h8l-.5 5L12 14.5 8.5 13 8.3 11H10l.1 1 1.9.5 1.9-.5.2-2H8z" fill="currentColor" opacity="0.8" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 8H8l.3 3h7.2l-.3 3-3.2.8-3.2-.8-.2-2H8.8l.3 2.5 2.9.8 2.9-.8.4-4.3H8.5" fill="currentColor" opacity="0.8" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <path d="M12 2C9.24 2 7.5 3.24 7.5 5v2h4.5v1H5.5C3.57 8 2 9.57 2 11.5v3C2 16.43 3.57 18 5.5 18H7v-2.5c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5-1.57 3.5-3.5V5c0-1.76-1.74-3-4.5-3h-2.5zm-1 1.5a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" opacity="0.7" />
      <path d="M12 22c2.76 0 4.5-1.24 4.5-3v-2h-4.5v-1h6.5c1.93 0 3.5-1.57 3.5-3.5v-3C22 7.57 20.43 6 18.5 6H17v2.5c0 1.93-1.57 3.5-3.5 3.5h-5C6.57 12 5 13.57 5 15.5V19c0 1.76 1.74 3 4.5 3H12zm1-1.5a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" opacity="0.9" />
    </svg>
  ),
};

const tools = [
  { name: 'Canva', category: 'Design' },
  { name: 'CapCut', category: 'Video' },
  { name: 'GoPaint', category: 'Art' },
  { name: 'Ibis Paint', category: 'Art' },
  { name: 'Resprite', category: 'Pixel Art' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Microsoft Office', category: 'Productivity' },
  { name: 'ChatGPT', category: 'AI' },
  { name: 'Wix', category: 'Web' },
  { name: 'HTML', category: 'Code' },
  { name: 'CSS', category: 'Code' },
  { name: 'Python', category: 'Code' },
];

export default function ToolsSection() {
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
      id="tools"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 blob-accent opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Tools & Software
            </span>
          </div>
          <h2 className="font-heading tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            My{' '}
            <span className="text-gradient-purple">Creative Toolkit</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base font-body">
            The apps and platforms I use to bring your vision to life.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools?.map((tool, i) => (
            <div
              key={tool?.name}
              className={`glass-card rounded-2xl p-4 flex flex-col items-center gap-3 border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:glow-purple-sm transition-all duration-300 group cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-primary group-hover:scale-110 transition-transform duration-200">
                {toolIcons[tool.name]}
              </span>
              <div className="text-center">
                <p className="text-xs font-bold text-foreground leading-tight font-heading">{tool?.name}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-body">{tool?.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}