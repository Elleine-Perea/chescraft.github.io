'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  title: 'Social Media Designs',
  category: 'Graphic Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dffc213b-1773132000565.png",
  alt: 'Colorful social media graphic templates arranged on dark surface with vibrant neon accent colors',
  tall: true
},
{
  title: 'Landing Pages',
  category: 'Web Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e95743b9-1772801172429.png",
  alt: 'Modern web design interface displayed on laptop screen in dimly lit workspace with dark UI',
  tall: false
},
{
  title: 'Portfolio Website',
  category: 'Web Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12bdef8f8-1767217682830.png",
  alt: 'Clean portfolio website design on monitor in dark studio with minimal lighting',
  tall: false
},
{
  title: 'Brand Kit',
  category: 'Branding',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1837aaf15-1783426775917.png",
  alt: 'Brand identity kit with logo variations, color palette swatches, and typography samples on dark background',
  tall: true
},
{
  title: 'Marketing Graphics',
  category: 'Graphic Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff5983a2-1780516258363.png",
  alt: 'Marketing promotional graphics and digital advertisements displayed on dark studio backdrop',
  tall: false
},
{
  title: 'Pixel Art',
  category: 'Pixel Art',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15ebe7420-1773033730004.png",
  alt: 'Retro pixel art game scene with purple and blue color palette on dark screen',
  tall: false
},
{
  title: 'Website UI',
  category: 'UI Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11afea59d-1772495906604.png",
  alt: 'Modern website user interface design mockup with dark theme and purple accent colors on monitor',
  tall: false
},
{
  title: 'Video Editing',
  category: 'Video',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1771a5b0d-1772244351617.png",
  alt: 'Video editing timeline on dark monitor screen with colorful footage clips and audio waveforms',
  tall: false
}];


export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 relative overflow-hidden">
      
      <div className="absolute top-1/2 right-0 w-72 h-72 blob-accent opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="mt-4 font-extrabold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Selected{' '}
            <span className="text-gradient-purple">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            A collection of projects spanning design, web, and digital creativity.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {projects.map((project, i) =>
          <PortfolioCard key={project.title} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}

function PortfolioCard({
  project,
  index



}: {project: (typeof projects)[0];index: number;}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="break-inside-avoid relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-400 hover:-translate-y-1 hover:glow-purple-sm group cursor-pointer mb-5"
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      <div className={`relative ${project.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
        <AppImage
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`} />
        

        {/* Scrim — dark overlay for legibility */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-60'}`}
          aria-hidden="true" />
        

        {/* Hover content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
          
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            {project.category}
          </span>
          <h3 className="font-bold text-foreground text-base">{project.title}</h3>
          <div className="mt-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-none" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">View Project</span>
          </div>
        </div>
      </div>
    </div>);

}