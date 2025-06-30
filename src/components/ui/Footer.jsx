import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import { useLanguage } from '../LanguageContext';
import { constants } from '../../data/constants';

const Footer = () => {
  const { currentLanguage } = useLanguage();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/images/photo_cadre.jpg" 
                alt="Ambroise Gyre" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold">{constants.name}</h3>
            </div>
            <p className="text-secondary-300">
              {currentLanguage === 'en' 
                ? constants.citation_en
                : constants.citation_fr
              }
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {currentLanguage === 'en' ? "Quick Links" : "Liens Rapides"}
            </h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-secondary-300 hover:text-white transition-colors duration-300">
                {currentLanguage === 'en' ? "About" : "À Propos"}
              </Link>
              <Link to="/portfolio" className="block text-secondary-300 hover:text-white transition-colors duration-300">
                {currentLanguage === 'en' ? "Portfolio" : "Portfolio"}
              </Link>
              <Link to="/contact" className="block text-secondary-300 hover:text-white transition-colors duration-300">
                {currentLanguage === 'en' ? "Contact" : "Contact"}
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">
              {currentLanguage === 'en' ? "Connect" : "Mes réseaux sociaux"}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Noofly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-secondary-700 transition-colors duration-300"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ambroise-gyre/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-secondary-700 transition-colors duration-300"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} {constants.name}. {currentLanguage === 'en' ? "All rights reserved." : "Tous droits réservés."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 