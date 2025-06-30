import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { constants } from '../../../data/constants';

const HeroSection = ({ content, currentLanguage, onScrollClick }) => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = {
    en: [
      {
        language: 'java',
        code: `public class ${constants.name.replace(' ', '')} {
  public String innovate() {
    return "${constants.citation_en}";
  }
}`
      },
      {
        language: 'java',
        code: `class BeautifulDesign {
  void transform() {
    System.out.println("Ideas into reality");
  }
}`
      },
      {
        language: 'java',
        code: `public class ExperienceBuilder {
  public User build() {
    User user = new User();
    user.delight();
    return user;
  }
}`
      },
      {
        language: 'javascript',
        code: `const developer = {
  name: '${constants.name}',
  passions: 'Automation, AI, Blockchain',
  philosophy: '${constants.citation_en}',
  expertise: ['Java', 'Python', 'React'],
  approach: 'User-Centered Innovation'
};`
      }
    ],
    fr: [
      {
        language: 'java',
        code: `public class ${constants.name.replace(' ', '')} {
  public String innover() {
    return "${constants.citation_fr}";
  }
}`
      },
      {
        language: 'java',
        code: `class DesignMagnifique {
  void transformer() {
    System.out.println("Idées en réalité");
  }
}`
      },
      {
        language: 'java',
        code: `public class ConstructeurExperience {
  public Utilisateur construire() {
    Utilisateur user = new Utilisateur();
    user.ravir();
    return user;
  }
}`
      },
      {
        language: 'javascript',
        code: `const développeur = {
  nom: '${constants.name}',
  passions: 'Automatisation, IA, Blockchain',
  philosophie: '${constants.citation_fr}',
  expertise: ['Java', 'Python', 'React'],
  approche: 'Innovation Centrée Utilisateur'
};`
      }
    ]
  };

  const currentCodeSnippets = codeSnippets[currentLanguage];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % currentCodeSnippets.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentCodeSnippets.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-primary-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cta/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            {/* Dynamic Greeting */}
            <div className="mb-6">
              <p className="text-accent font-medium text-lg mb-2">
                {content.greeting} {content.location} 👋
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} />
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              <span className="text-gradient">{content.heroTitle}</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-text-secondary mb-8">
              {content.heroSubtitle}
            </h2>

            <p className="text-lg lg:text-xl text-text-secondary mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                to="/portfolio"
                className="btn-cta flex items-center justify-center space-x-2"
              >
                <Icon name="Sparkles" size={20} />
                <span>{content.ctaText}</span>
              </Link>
              
              <Link 
                to="/about"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="User" size={20} />
                <span>{currentLanguage === 'en' ? 'Learn More About Me' : 'Apprenez-en plus sur moi'}</span>
              </Link>
            </div>
          </div>

          {/* Interactive Code Visualization */}
          <div className="relative">
            <div className="bg-secondary-900 rounded-2xl p-6 shadow-modal transform hover:scale-105 transition-transform duration-500">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-secondary-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-accent-500 text-sm font-mono">
                  creative-developer.{currentCodeSnippets[currentCodeIndex].language}
                </div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm">
                <pre className={`text-secondary-100 transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                  <code>{currentCodeSnippets[currentCodeIndex].code}</code>
                </pre>
              </div>

              {/* Code Language Indicator */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-cta-500 text-xs">
                    {currentLanguage === 'en' ? 'Live Coding...' : 'Codage en Direct...'}
                  </span>
                </div>
                <div className="text-secondary-400 text-xs uppercase tracking-wide">
                  {currentCodeSnippets[currentCodeIndex].language}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce delay-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cta rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-success rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={onScrollClick}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-text-secondary text-sm">
            {currentLanguage === 'en' ? 'Scroll to explore' : 'Faites défiler pour explorer'}
          </span>
          <Icon name="ChevronDown" size={24} color="var(--color-text-secondary)" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;