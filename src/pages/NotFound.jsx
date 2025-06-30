import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Footer from '../components/ui/Footer';
import { useLanguage } from '../components/LanguageContext';

const NotFound = () => {
  const { currentLanguage } = useLanguage();
  const content = {
    en: {
      notFound: 'Page Not Found',
      message: "The page you're looking for doesn't exist or has been moved.",
      backHome: 'Back to Home',
      goBack: 'Go Back',
    },
    fr: {
      notFound: 'Page introuvable',
      message: "La page que vous cherchez n'existe pas ou a été déplacée.",
      backHome: 'Retour à l\'accueil',
      goBack: 'Retour',
    }
  };
  return (
    <>
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="AlertTriangle" size={40} color="white" strokeWidth={2} />
            </div>
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">{content[currentLanguage].notFound}</h2>
            <p className="text-text-secondary mb-8">
              {content[currentLanguage].message}
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/"
              className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
            >
              <Icon name="Home" size={18} />
              <span>{content[currentLanguage].backHome}</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full px-6 py-3 border border-secondary-300 text-text-primary rounded-lg font-medium hover:bg-secondary-50 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Icon name="ArrowLeft" size={18} />
              <span>{content[currentLanguage].goBack}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default NotFound;