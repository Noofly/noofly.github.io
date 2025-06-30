import React from "react";
import { useLanguage } from "../../components/LanguageContext";
import Footer from "../../components/ui/Footer";
import InteractiveSkillsLab from "./components/InteractiveSkillsLab";

const InteractiveSkillsLabPage = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: 'Interactive Skills Laboratory',
      subtitle: 'Welcome to my digital lab. Here, you can interact with live code demonstrations and see the result in action. Feel free to play around!',
    },
    fr: {
      title: `Laboratoire d'Expérimentations`,
      subtitle: "Bienvenue dans mon laboratoire numérique. Ici, vous pouvez interagir avec des démonstrations de code en direct et voir le résultat en action. N'hésitez pas à expérimenter !",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
        <InteractiveSkillsLab currentLanguage={currentLanguage} />
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default InteractiveSkillsLabPage;
