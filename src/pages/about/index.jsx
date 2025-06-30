import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import PhilosophySection from './components/PhilosophySection';
import SkillsRadarSection from './components/SkillsRadarSection';
import BehindScenesSection from './components/BehindScenesSection';
import CollaborationSection from './components/CollaborationSection';
import ResourcesSection from './components/ResourcesSection';
import { useLanguage } from '../../components/LanguageContext';

const AboutTechnicalEvolutionJourney = () => {
  const { currentLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  // Translations object for section names
  const translations = {
    en: {
      hero: 'Introduction',
      timeline: 'Journey',
      philosophy: 'Philosophy',
      skills: 'Skills',
      'behind-scenes': 'Process',
      collaboration: 'Collaboration',
      resources: 'Resources'
    },
    fr: {
      hero: 'Introduction',
      timeline: 'Parcours',
      philosophy: 'Philosophie',
      skills: 'Compétences',
      'behind-scenes': 'Processus',
      collaboration: 'Collaboration',
      resources: 'Ressources'
    }
  };

  const sections = [
    { id: 'hero', icon: 'User' },
    { id: 'timeline', icon: 'Clock' },
    { id: 'skills', icon: 'Target' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -60; // Décalage en pixels (ajuste selon la taille de ton header)
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Fixed Navigation Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block group">
        <div className="bg-white rounded-xl shadow-elevated p-2 space-y-2 transition-all duration-300 w-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center p-2 rounded-lg transition-all duration-300 w-full overflow-hidden ${
                activeSection === section.id ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
              title={translations[currentLanguage][section.id]}
            >
              <div
                className={`p-2 rounded-md transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent text-white shadow-subtle'
                    : 'group-hover:bg-accent-50'
                }`}
              >
                <Icon 
                  name={section.icon} 
                  size={18} 
                  strokeWidth={2}
                  className="flex-shrink-0 transition-all duration-300"
                />
              </div>
              <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-32 wide:opacity-100 wide:w-32 ml-0 group-hover:ml-3 wide:ml-3 ${
                activeSection === section.id ? 'font-semibold' : ''
              }`}>
                {translations[currentLanguage][section.id]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <TimelineSection currentLanguage={currentLanguage} />
        <SkillsRadarSection currentLanguage={currentLanguage} />
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white rounded-full shadow-elevated px-4 py-2 flex space-x-2 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-accent hover:bg-accent-50'
              }`}
            >
              <Icon name={section.icon} size={16} strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default AboutTechnicalEvolutionJourney;