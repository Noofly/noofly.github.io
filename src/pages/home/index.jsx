import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProjectsCarousel from './components/FeaturedProjectsCarousel';
import PhilosophyInAction from './components/PhilosophyInAction';
import Footer from '../../components/ui/Footer';
import { useLanguage } from '../../components/LanguageContext';
import { constants } from '../../data/constants';

const HomepageInteractiveDeveloperShowcase = () => {
  const { currentLanguage } = useLanguage();
  const [visitorLocation, setVisitorLocation] = useState('Lille');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // IP-based location detection
    detectLocationByIP();

    return () => clearInterval(timer);
  }, []);

  const detectLocationByIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      
      if (response.ok) {
        const data = await response.json();
        
        const city = data.city || data.region || data.country_name || '';
        setVisitorLocation(city);
      } else {
        setVisitorLocation('');
      }
    } catch (error) {
      console.log('IP-based detection error:', error);
      setVisitorLocation('');
    }
  };

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return currentLanguage === 'en' ? 'Good Morning' : 'Bonjour';
    if (hour < 18) return currentLanguage === 'en' ? 'Good Afternoon' : 'Bon Après-midi';
    return currentLanguage === 'en' ? 'Good Evening' : 'Bonsoir';
  };

  const content = {
    en: {
      greeting: getTimeBasedGreeting(),
      location: visitorLocation ? `in ${visitorLocation}` : '',
      heroTitle: constants.citation_en,
      heroSubtitle: "Automation • IA • Blockchain",
      heroDescription: "Passionate about automation, artificial intelligence, and blockchain, I develop simple, useful, and robust solutions to solve real-world problems.",
      ctaText: "Explore My Craft",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "Signature works that showcase technical artistry",
      philosophyTitle: "My Technical Beliefs",
      philosophySubtitle: "What inspires my approach to every project"
    },
    fr: {
      greeting: getTimeBasedGreeting(),
      location: visitorLocation ? `à ${visitorLocation}` : '',
      heroTitle: constants.citation_fr,
      heroSubtitle: "Automatisation • IA • Blockchain",
      heroDescription: "Développeur passionné par l'automatisation, l'intelligence artificielle et la blockchain, je crée des solutions simples, utiles et robustes pour répondre à des besoins concrets.",
      ctaText: "Explorez mon travail",
      projectsTitle: "Projets vedettes",
      projectsSubtitle: "Quelques exemples de mon travail",
      philosophyTitle: "Mes convictions techniques",
      philosophySubtitle: "Les principes qui orientent chaque projet"
    }
  };

  const currentContent = content[currentLanguage];

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#featured-projects');
    if (nextSection) {
      const headerOffset = 40; // Approx height of the sticky header + some margin
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        content={currentContent}
        currentLanguage={currentLanguage}
        onScrollClick={scrollToNextSection}
      />

      {/* Featured Projects Carousel */}
      <section id="featured-projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {currentContent.projectsTitle}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {currentContent.projectsSubtitle}
            </p>
          </div>
          <FeaturedProjectsCarousel currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* Philosophy in Action */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {currentContent.philosophyTitle}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {currentContent.philosophySubtitle}
            </p>
          </div>
          <PhilosophyInAction currentLanguage={currentLanguage} />
        </div>
      </section>


      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default HomepageInteractiveDeveloperShowcase;