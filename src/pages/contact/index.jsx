import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from '../../components/ui/Footer';

const ContactPage = () => {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      title: "Ready to bring your ideas to life?",
      subtitle: "Let's create something amazing together"
    },
    fr: {
      title: "Prêt à donner vie à vos idées ?",
      subtitle: "Créons quelque chose d'incroyable ensemble"
    }
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="text-text-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent">
              {currentTranslations.title}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {currentTranslations.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm currentLanguage={currentLanguage} />
            </div>
            <div className="lg:mt-12">
              <ContactInfo currentLanguage={currentLanguage} />
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage; 