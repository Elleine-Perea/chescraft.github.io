'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const blobRef3 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = (clientX - cx) / cx;
      const my = (clientY - cy) / cy;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-mx * 30}px, ${-my * 25}px)`;
      }
      if (blobRef3.current) {
        blobRef3.current.style.transform = `translate(${mx * 20}px, ${my * 20}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `perspective(1200px) rotateY(${mx * 2}deg) rotateX(${-my * 2}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid-bg pt-24 pb-16"
      aria-label="Hero section"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      {/* Atmospheric blobs */}
      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary rounded-full pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 blob-accent rounded-full pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <div
        ref={blobRef3}
        className="absolute top-1/2 right-1/4 w-64 h-64 blob-primary rounded-full pointer-events-none transition-transform duration-500 ease-out opacity-50"
        aria-hidden="true"
      />

      {/* Pixel grid decorations */}
      <div className="absolute top-20 left-8 grid grid-cols-3 gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-none"
            style={{ opacity: Math.random() > 0.4 ? 1 : 0.2, animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      <div className="absolute bottom-24 right-8 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-accent rounded-none"
            style={{ opacity: i % 3 === 0 ? 1 : 0.3 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div ref={contentRef} className="relative z-10 transition-transform duration-300 ease-out">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up border border-primary/20">
              <span className="w-2 h-2 bg-primary animate-pulse-glow rounded-none pixel-dot" />
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Available for Freelance Work
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-arcade leading-[1.3] tracking-tight mb-6 animate-fade-in-up text-foreground"
              style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', animationDelay: '0.1s' }}
            >
              Designing{' '}
              <span className="text-gradient-purple glow-text">Creative</span>
              <br />
              Digital Experiences,
              <br />
              <span className="relative">
                One{' '}
                <span className="text-gradient-purple">Pixel</span>{' '}
                at a Time.
                {/* Pixel cursor blink */}
                <span className="inline-block w-1 h-8 bg-primary ml-1 align-middle animate-pixel-blink" aria-hidden="true" />
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up font-body"
              style={{ animationDelay: '0.2s' }}
            >
              Hi, I&apos;m{' '}
              <span className="text-secondary font-semibold">
                Francesca Elleine Perea
              </span>
              , the creative behind ChesCraft.
              <br className="hidden sm:block" />
              I help creatives, startups, and small businesses build a strong
              online presence through thoughtful design, websites, and virtual
              assistance.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-secondary transition-all duration-200 glow-purple hover:scale-105 active:scale-95"
              >
                <span className="pixel-dot group-hover:animate-pulse" />
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-primary/50 text-foreground font-bold text-sm hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Let&apos;s Work Together
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {[
                { num: '4+', label: 'Services Offered' },
                { num: '12+', label: 'Tools Mastered' },
                { num: '100%', label: 'Client-Focused' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-gradient-purple">
                    {stat.num}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pixel Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <PixelIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function PixelIllustration() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md floating">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-3xl animate-pulse-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main illustration card */}
      <div className="relative glass-card rounded-3xl p-6 sm:p-8 pixel-border">
        {/* Pixel sparkle dots top-right */}
        <div className="absolute -top-3 -right-3 grid grid-cols-2 gap-1" aria-hidden="true">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-accent rounded-none"
              style={{
                opacity: i % 2 === 0 ? 1 : 0.5,
                animation: `sparkle-float ${1.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* SVG Pixel Girl Illustration */}
        <svg
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Pixel art illustration of a girl working on a laptop"
        >
          {/* Desk */}
          <rect x="30" y="230" width="260" height="16" rx="2" fill="#334155" />
          <rect x="60" y="246" width="12" height="50" rx="1" fill="#1E293B" />
          <rect x="248" y="246" width="12" height="50" rx="1" fill="#1E293B" />

          {/* Laptop base */}
          <rect x="80" y="180" width="160" height="52" rx="4" fill="#1E293B" />
          <rect x="84" y="184" width="152" height="44" rx="2" fill="#0F172A" />

          {/* Laptop screen glow */}
          <rect x="84" y="184" width="152" height="44" rx="2" fill="url(#screenGlow)" opacity="0.8" />

          {/* Screen content - code lines */}
          <rect x="92" y="192" width="60" height="3" rx="1" fill="#8B5CF6" opacity="0.9" />
          <rect x="92" y="199" width="80" height="3" rx="1" fill="#A78BFA" opacity="0.7" />
          <rect x="92" y="206" width="50" height="3" rx="1" fill="#C084FC" opacity="0.8" />
          <rect x="92" y="213" width="70" height="3" rx="1" fill="#8B5CF6" opacity="0.6" />
          <rect x="92" y="220" width="40" height="3" rx="1" fill="#A78BFA" opacity="0.9" />
          {/* Cursor blink */}
          <rect x="136" y="220" width="6" height="3" rx="0" fill="#C084FC">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>

          {/* Design elements on screen */}
          <rect x="170" y="192" width="58" height="34" rx="2" fill="#8B5CF6" opacity="0.15" />
          <rect x="174" y="196" width="24" height="12" rx="1" fill="#8B5CF6" opacity="0.5" />
          <rect x="174" y="212" width="50" height="4" rx="1" fill="#A78BFA" opacity="0.3" />
          <rect x="174" y="218" width="36" height="4" rx="1" fill="#A78BFA" opacity="0.2" />

          {/* Laptop hinge */}
          <rect x="80" y="228" width="160" height="6" rx="2" fill="#1E293B" />

          {/* Chair */}
          <rect x="110" y="290" width="100" height="8" rx="3" fill="#1E293B" />
          <rect x="150" y="298" width="20" height="20" rx="1" fill="#1E293B" />

          {/* Body / torso */}
          <rect x="120" y="230" width="80" height="65" rx="8" fill="#A78BFA" opacity="0.3" />
          {/* Shirt details */}
          <rect x="140" y="240" width="40" height="2" rx="1" fill="#8B5CF6" opacity="0.5" />

          {/* Arms */}
          {/* Left arm */}
          <path d="M120 250 Q95 260 90 275 Q88 280 96 280 Q104 280 110 265 Z" fill="#FBBF7A" opacity="0.9" />
          {/* Right arm */}
          <path d="M200 250 Q225 260 230 275 Q232 280 224 280 Q216 280 210 265 Z" fill="#FBBF7A" opacity="0.9" />

          {/* Hands on keyboard */}
          <ellipse cx="100" cy="210" rx="12" ry="8" fill="#FBBF7A" opacity="0.9" />
          <ellipse cx="220" cy="210" rx="12" ry="8" fill="#FBBF7A" opacity="0.9" />
          {/* Pixel fingers */}
          {[94, 100, 106].map((x, i) => (
            <rect key={i} x={x} y={203} width="5" height="7" rx="2" fill="#FBBF7A" opacity="0.9" />
          ))}
          {[214, 220, 226].map((x, i) => (
            <rect key={i} x={x} y={203} width="5" height="7" rx="2" fill="#FBBF7A" opacity="0.9" />
          ))}

          {/* Neck */}
          <rect x="148" y="155" width="24" height="30" rx="4" fill="#FBBF7A" opacity="0.95" />

          {/* Head */}
          <rect x="128" y="108" width="64" height="60" rx="16" fill="#FBBF7A" opacity="0.95" />

          {/* Hair - pixel style */}
          <rect x="128" y="100" width="64" height="28" rx="12" fill="#1a1a2e" />
          <rect x="120" y="108" width="16" height="36" rx="6" fill="#1a1a2e" />
          <rect x="184" y="108" width="16" height="36" rx="6" fill="#1a1a2e" />
          {/* Hair highlight */}
          <rect x="136" y="102" width="20" height="8" rx="4" fill="#334155" opacity="0.6" />

          {/* Eyes */}
          <rect x="142" y="128" width="8" height="8" rx="2" fill="#1E293B" />
          <rect x="170" y="128" width="8" height="8" rx="2" fill="#1E293B" />
          {/* Eye shine */}
          <rect x="144" y="129" width="2" height="2" rx="0" fill="white" opacity="0.8" />
          <rect x="172" y="129" width="2" height="2" rx="0" fill="white" opacity="0.8" />

          {/* Smile */}
          <path d="M150 146 Q160 154 170 146" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Blush */}
          <ellipse cx="140" cy="144" rx="6" ry="4" fill="#F9A8D4" opacity="0.5" />
          <ellipse cx="180" cy="144" rx="6" ry="4" fill="#F9A8D4" opacity="0.5" />

          {/* Headphone / earphone */}
          <circle cx="128" cy="140" r="8" fill="#8B5CF6" opacity="0.8" />
          <circle cx="128" cy="140" r="4" fill="#C084FC" opacity="0.9" />

          {/* Coffee cup */}
          <rect x="240" y="200" width="28" height="30" rx="4" fill="#1E293B" />
          <rect x="243" y="203" width="22" height="24" rx="2" fill="#0F172A" />
          <path d="M268 210 Q278 212 278 220 Q278 228 268 228" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Steam */}
          <path d="M250 198 Q252 192 250 186" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M258 196 Q260 190 258 184" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
          </path>

          {/* Floating design elements */}
          {/* Floating star/sparkle top-left */}
          <g opacity="0.8">
            <rect x="46" y="100" width="6" height="6" rx="0" fill="#C084FC">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>
          <g opacity="0.6">
            <rect x="268" y="130" width="4" height="4" rx="0" fill="#8B5CF6">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
            </rect>
          </g>
          <g opacity="0.5">
            <rect x="56" y="160" width="5" height="5" rx="0" fill="#A78BFA">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Pixel palette/design tool */}
          <rect x="50" y="185" width="24" height="20" rx="3" fill="#1E293B" opacity="0.9" />
          <rect x="53" y="188" width="5" height="5" rx="0" fill="#8B5CF6" />
          <rect x="60" y="188" width="5" height="5" rx="0" fill="#C084FC" />
          <rect x="67" y="188" width="5" height="5" rx="0" fill="#A78BFA" />
          <rect x="53" y="195" width="5" height="5" rx="0" fill="#F59E0B" />
          <rect x="60" y="195" width="5" height="5" rx="0" fill="#10B981" />
          <rect x="67" y="195" width="5" height="5" rx="0" fill="#EF4444" />

          <defs>
            <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Status badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-primary/30 whitespace-nowrap">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-foreground">Open to Projects</span>
        </div>
      </div>

      {/* Floating skill chips */}
      <div className="absolute -left-4 top-1/4 glass-card px-3 py-2 rounded-xl border border-primary/20 floating-delayed hidden sm:block">
        <span className="text-xs font-bold text-primary">UI/UX Design</span>
      </div>
      <div className="absolute -right-4 top-1/3 glass-card px-3 py-2 rounded-xl border border-accent/20 floating hidden sm:block" style={{ animationDelay: '-2s' }}>
        <span className="text-xs font-bold text-accent">Pixel Art</span>
      </div>
    </div>
  );
}