import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const location = useLocation();

  const translations = {
    en: {
      title: 'Software Engineer',
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skillsLab: 'Experiments',
      startConversation: 'Start a Conversation',
      language: 'Language',
    },
    fr: {
      title: 'Ingénieur en Informatique',
      home: 'Accueil',
      about: 'À Propos',
      portfolio: 'Portfolio',
      skillsLab: 'Expérimentations',
      startConversation: 'Contactez-moi',
      language: 'Langue',
    }
  };

  const navigationItems = [
    { name: translations[currentLanguage].home, path: '/', icon: 'Home' },
    { name: translations[currentLanguage].about, path: '/about', icon: 'User' },
    { name: translations[currentLanguage].portfolio, path: '/portfolio', icon: 'Briefcase' },
    { name: translations[currentLanguage].skillsLab, path: '/experiments', icon: 'Brain' },
  ];

  const languageItems = [
    { code: 'fr', name: 'Français', flag: '/assets/flags/fr.svg' },
    { code: 'en', name: 'English', flag: '/assets/flags/us.svg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    closeMenu();
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-secondary-200' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <img 
                src="/assets/images/photo_cadre.jpg" 
                alt="Ambroise Gyre" 
                className="w-10 h-10 rounded-lg object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                Ambroise Gyre
              </h1>
              <p className="text-xs text-text-secondary -mt-1">{translations[currentLanguage].title}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-accent text-white shadow-subtle'
                    : 'text-text-primary hover:text-accent hover:bg-accent-50'
                }`}
              >
                <Icon name={item.icon} size={16} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-text-primary hover:text-accent transition-colors duration-300">
                <img src={languageItems.find(lang => lang.code === currentLanguage)?.flag} alt={currentLanguage} className="w-5 h-auto rounded-sm" />
                <span>{languageItems.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}</span>
                <Icon name="ChevronDown" size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-elevated border border-secondary-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {languageItems.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-accent-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      currentLanguage === lang.code ? 'text-accent font-medium' : 'text-text-primary'
                    }`}
                  >
                    <img src={lang.flag} alt={lang.code} className="w-5 h-auto rounded-sm" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="btn-cta flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} />
              <span>{translations[currentLanguage].startConversation}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-accent hover:bg-accent-50 transition-all duration-300"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-secondary-200 shadow-elevated">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-accent text-white'
                      : 'text-text-primary hover:text-accent hover:bg-accent-50'
                  }`}
                >
                  <Icon name={item.icon} size={18} strokeWidth={2} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="border-t border-secondary-200 pt-4">
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">{translations[currentLanguage].language}</p>
              <div className="grid grid-cols-2 gap-2">
                {languageItems.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      currentLanguage === lang.code
                        ? 'bg-accent text-white'
                        : 'text-text-primary hover:text-accent hover:bg-accent-50'
                    }`}
                  >
                    <img src={lang.flag} alt={lang.code} className="w-5 h-auto rounded-sm" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-secondary-200 pt-4">
              <Link 
                to="/contact"
                className="w-full btn-cta flex items-center justify-center space-x-2"
                onClick={closeMenu}
              >
                <Icon name="MessageCircle" size={16} />
                <span>{translations[currentLanguage].startConversation}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;