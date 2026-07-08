'use client';

import React, { useRef, useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const socials = [
  { label: 'Facebook', icon: 'GlobeAltIcon', href: '#', color: 'hover:text-blue-400' },
  { label: 'Instagram', icon: 'PhotoIcon', href: '#', color: 'hover:text-pink-400' },
  { label: 'LinkedIn', icon: 'BriefcaseIcon', href: '#', color: 'hover:text-blue-300' },
  { label: 'GitHub', icon: 'CodeBracketIcon', href: '#', color: 'hover:text-foreground' },
  { label: 'Behance', icon: 'PaintBrushIcon', href: '#', color: 'hover:text-blue-400' },
];

const contactInfo = [
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'francescaelleineperea17@gmail.com',
    href: 'mailto:francescaelleineperea17@gmail.com',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+63 909 628 2515',
    href: 'tel:+639096282515',
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'Naic, Cavite, Philippines',
    href: '#',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to email service in production
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
      <div className="absolute top-1/3 left-0 w-80 h-80 blob-primary opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 blob-accent opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-4 font-extrabold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Let&apos;s Build Something{' '}
            <span className="text-gradient-purple">Amazing</span>{' '}
            Together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Ready to bring your vision to life? Drop me a message and let&apos;s get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/40 hover:-translate-y-0.5 hover:glow-purple-sm transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={info.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-semibold text-foreground break-all">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl border border-border/50 hover:border-primary/40 text-muted-foreground ${social.color} transition-all duration-200 hover:-translate-y-0.5 text-sm font-medium`}
                  >
                    <Icon name={social.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="mailto:francescaelleineperea17@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base glow-purple hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="pixel-dot" />
                Let&apos;s Work Together
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="glass-card rounded-2xl p-7 border border-border/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <span className="text-primary">
                    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" aria-hidden="true">
                      <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="currentColor" />
                    </svg>
                  </span>
                  <h3 className="font-heading text-foreground text-2xl">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm font-body">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-primary/20 text-primary text-sm font-semibold border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-body"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Maria Santos"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="maria@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground text-sm transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm glow-purple-sm hover:bg-secondary transition-all duration-200 hover:scale-[1.01] active:scale-95 font-body"
                  >
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 inline ml-2" aria-hidden="true">
                      <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="currentColor" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}