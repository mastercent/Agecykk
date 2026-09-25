import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Project } from './data/agencyData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'button' | 'hidden'>('default');
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for top bar indicator
  useEffect(() => {
    const sectionIds = ['hero', 'expertise', 'services', 'process', 'projects', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    scrollToSection('contact');
  };

  const handleContactForSimilarProject = (projectName: string) => {
    setSelectedProject(null);
    setSelectedServicePreset(`Case Study Inquiry: ${projectName}`);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F3F4F6] selection:bg-[#FF5500] selection:text-white noise-bg">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor cursorType={cursorType} cursorText="VIEW" />

      {/* Floating Top Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main id="hero">
        {/* Cinematic Hero matching attached reference */}
        <HeroSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onExploreWork={() => scrollToSection('projects')}
          onViewServices={() => scrollToSection('services')}
        />

        {/* 01 / Philosophy Section */}
        <PhilosophySection
          onExploreWork={() => scrollToSection('projects')}
        />

        {/* 02 / Services & Capabilities Section */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* 03 / Process Section */}
        <ProcessSection />

        {/* 04 / Selected Work & Case Studies */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          setCursorType={setCursorType}
        />

        {/* 05 / About the Studio & Operating Principles */}
        <AboutSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 06 / Testimonials & Executive Proof */}
        <TestimonialsSection />

        {/* Dramatic Full-Bleed Orange Call to Action */}
        <CtaSection
          onStartProject={() => scrollToSection('contact')}
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 07 / Direct Inquiry & Lead Capture */}
        <ContactSection
          selectedServicePreset={selectedServicePreset}
        />
      </main>

      {/* Minimalist Black Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactForSimilar={handleContactForSimilarProject}
      />

      {/* Quick 30-min Executive Consultation Scheduler Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
