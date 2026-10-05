/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import GuidedTourModal from './components/GuidedTourModal';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import CVModal from './components/CVModal';
import EasterEggBanner from './components/EasterEggBanner';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import WorkflowSection from './sections/WorkflowSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

import { Project } from './data/projects';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isTourWelcome, setIsTourWelcome] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [contactInitialService, setContactInitialService] = useState('Site web');

  // Load preferences from localStorage on mount
  useEffect(() => {
    // Dark mode preference
    const savedTheme = localStorage.getItem('milano_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Guided tour check: trigger welcome if first time visit
    const tourDone = localStorage.getItem('milano_tour_completed');
    if (!tourDone) {
      // Delay slightly so the user sees the hero before the welcome appears
      const timer = setTimeout(() => {
        setIsTourOpen(true);
        setIsTourWelcome(true);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleToggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('milano_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('milano_theme', 'light');
    }
  };

  const handleStartTour = () => {
    setIsTourWelcome(false);
    setIsTourOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#F8FAFC] text-slate-900'} relative selection:bg-[#FF5500] selection:text-white`}>
      {/* Quick Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Easter Egg Feedback Banner */}
      <EasterEggBanner
        isOpen={easterEggActive}
        onClose={() => setEasterEggActive(false)}
      />

      {/* Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onStartTour={handleStartTour}
        onTriggerEasterEgg={() => setEasterEggActive(true)}
      />

      {/* Main Content Flow */}
      <main id="main-content">
        <HeroSection onOpenCV={() => setIsCVOpen(true)} />
        <AboutSection onOpenCV={() => setIsCVOpen(true)} />
        <SkillsSection />
        <ServicesSection onSelectService={handleSelectServiceFromCard} />
        <ProjectsSection onOpenCaseStudy={(proj) => setSelectedProject(proj)} />
        <WorkflowSection />
        <ExperienceSection />
        <ContactSection initialProjectType={contactInitialService} />
      </main>

      {/* Footer */}
      <Footer onRestartTour={handleStartTour} />

      {/* Guided Tour Modal */}
      <GuidedTourModal
        isOpen={isTourOpen}
        initialWelcome={isTourWelcome}
        onClose={() => setIsTourOpen(false)}
      />

      {/* Detailed Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}
