import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ currentLanguage }) => {
  const translations = {
    en: {
      fullName: "Full Name",
      fullNamePlaceholder: "Your Name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Submit"
    },
    fr: {
      fullName: "Nom Complet",
      fullNamePlaceholder: "Votre Nom",
      email: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      message: "Message",
      messagePlaceholder: "Votre message...",
      submit: "Envoyer"
    }
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <form action="https://formspree.io/f/xgvyrkbg" method="POST" className="space-y-8">
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">
          {currentTranslations.fullName}
        </label>
        <div className="relative">
          <input type="text" id="full-name" name="full-name" required className="block w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500" placeholder={currentTranslations.fullNamePlaceholder} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          {currentTranslations.email}
        </label>
        <div className="relative">
          <input type="email" id="email" name="email" required className="block w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500" placeholder={currentTranslations.emailPlaceholder} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          {currentTranslations.message}
        </label>
        <textarea id="message" name="message" rows="4" required className="block w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500" placeholder={currentTranslations.messagePlaceholder}></textarea>
      </div>
      <div>
        <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          {currentTranslations.submit}
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 