import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import ToolsSection from '@/app/components/ToolsSection';
import WhySection from '@/app/components/WhySection';
import PricingSection from '@/app/components/PricingSection';
import CertificationsSection from '@/app/components/CertificationsSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import JourneySection from '@/app/components/JourneySection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <main>
        {/* 1. Hero — Who is this? */}
        <HeroSection />

        {/* 2. About — Background & values */}
        <AboutSection />

        {/* 3. Services — What do they do? */}
        <ServicesSection />

        {/* 4. Tools — How do they work? */}
        <ToolsSection />

        {/* 5. Why ChesCraft — Why trust them? */}
        <WhySection />

        {/* 6. Pricing — What's the cost? */}
        <PricingSection />

        {/* 7. Certifications — Credentials */}
        <CertificationsSection />

        {/* 8. Portfolio — Proof of work */}
        <PortfolioSection />

        {/* 9. Journey — Story */}
        <JourneySection />

        {/* 10. Contact — How to reach */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}