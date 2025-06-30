import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ContactInfo = ({ currentLanguage }) => {
  const translations = {
    en: {
      availableForWork: "Available for work",
      description: "My inbox is always open. Whether you have a project or just want to say Hi, I would love to hear from you. Feel free to contact me and I'll get back to you."
    },
    fr: {
      availableForWork: "Disponible immédiatement",
      description: "Ma boîte mail est toujours ouverte. Que vous ayez un projet ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter et je vous répondrai au plus vite."
    }
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-400 font-medium">{currentTranslations.availableForWork}</span>
      </div>

      <Image
        src="/assets/images/photo_cadre.jpg"
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mb-6 mx-auto shadow-lg border-4 border-gray-700"
      />
      
      <p className="text-gray-300 text-center mb-8">
        {currentTranslations.description}
      </p>

      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/ambroise-gyre/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Icon name="Linkedin" size={24} />
        </a>
        <a href="https://github.com/Noofly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Icon name="Github" size={24} />
        </a>
        <a href="mailto:gyre.ambroise@gmail.com" className="text-gray-400 hover:text-white">
          <Icon name="Mail" size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo; 