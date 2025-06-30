import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { useLanguage } from '../../../components/LanguageContext';
import { constants } from '../../../data/constants';

const HeroSection = () => {
  const { currentLanguage } = useLanguage();
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [downloadingResume, setDownloadingResume] = useState(false);

  const content = {
    en: {
      greeting: `Hello, I'm ${constants.name}`,
      title: "Computer Science Engineer",
      subtitle: "Building smart, useful, and robust solutions to real-world problems",
      description: [
        "I am a developer passionate about automation, artificial intelligence, and blockchain. My journey began with a fascination for intelligent systems and tools capable of simplifying users' lives.",
        "Since then, I have been designing technical solutions that combine robustness, simplicity, and efficiency, with a strong foundation in practical application. What drives me is transforming complex ideas or problems into intuitive, automated, or decentralized applications, where technology fades into the background in favor of the user experience.",
        "I always strive to bridge the gap between code performance and clarity of use."
      ],
      currentProject: "Currently working on:",
      projectName: "Portfolio Website",
      collaborateButton: "Let's Collaborate",
      resumeButton: "Download Resume"
    },
    fr: {
      greeting: `Bonjour, je suis ${constants.name}`,
      title: "Ingénieur en Informatique",
      subtitle: "Je crée des solutions intelligentes, utiles et robustes à partir de problèmes réels",
      description: [
        "Je suis un développeur passionné par l'automatisation, l'intelligence artificielle et la blockchain. Mon parcours a commencé avec une fascination pour les systèmes intelligents et les outils capables de simplifier la vie des utilisateurs.",
        "Depuis, je conçois des solutions techniques qui allient robustesse, simplicité et efficacité, avec un fort ancrage dans le concret. Ce qui m'anime, c'est de transformer des idées ou des problématiques complexes en applications intuitives, automatisées ou décentralisées, où la technologie s'efface au profit de l'expérience.",
        "Je cherche toujours à faire le lien entre la performance du code et la clarté de son usage."
      ],
      currentProject: "Travaille actuellement sur:",
      projectName: "Site Portfolio",
      collaborateButton: "Travaillons ensemble",
      resumeButton: "Téléchargez mon CV"
    }
  };

  const codeLines = {
    en: [
      "const developer = {",
      `  name: '${constants.name}',`,
      "  passion: 'Crafting Digital Experiences',",
      "  expertise: ['Java', 'Python', 'React'],",
      `  philosophy: '${constants.citation_en}',`,
      "  currentFocus: 'Portfolio Website',",
      "  languages: ['French', 'English'],",
      "  approach: 'User-Centered Innovation'",
      "};"
    ],
    fr: [
      "const développeur = {",
      `  nom: '${constants.name}',`,
      "  passion: 'Créer des Expériences Numériques',",
      "  expertise: ['Java', 'Python', 'React'],",
      `  philosophie: '${constants.citation_fr}',`,
      "  focusActuel: 'Site Portfolio',",
      "  langues: ['Français', 'Anglais'],",
      "  approche: 'Innovation Centrée Utilisateur'",
      "};"
    ]
  };

  const currentCodeLines = codeLines[currentLanguage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine((prev) => {
        if (prev >= currentCodeLines.length - 1) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            return 0;
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [currentCodeLines.length]);

  const socialLinks = [
    { name: 'Github', icon: 'Github', url: 'https://github.com/Noofly' },
    { name: 'Linkedin', icon: 'Linkedin', url: 'https://www.linkedin.com/in/ambroise-gyre/' },
    { name: 'Mail', icon: 'Mail', url: 'mailto:ambroise.gyre@gmail.com' }
  ];

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    // Déclenche immédiatement le téléchargement
    const link = document.createElement('a');
    link.href = '/Ambroise_Gyre_CV.pdf';
    link.download = 'Ambroise_Gyre_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Laisse le bouton en état 'Téléchargement...' pendant 3 secondes
    setTimeout(() => {
      setDownloadingResume(false);
    }, 3000);
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-surface via-white to-accent-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-accent font-medium text-lg"
              >
                {content[currentLanguage].greeting}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight"
              >
                {content[currentLanguage].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-text-secondary"
              >
                {content[currentLanguage].subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg max-w-none text-text-primary space-y-4"
            >
              {content[currentLanguage].description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleResumeDownload}
                disabled={downloadingResume}
                className="flex items-center space-x-2 px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloadingResume ? (
                  <>
                    <Icon name="Loader2" size={18} className="animate-spin" />
                    <span>{currentLanguage === 'en' ? 'Downloading...' : 'Téléchargement...'}</span>
                  </>
                ) : (
                  <>
                    <Icon name="Download" size={18} />
                    <span>{content[currentLanguage].resumeButton}</span>
                  </>
                )}
              </button>
              <Link to="/contact" className="btn-cta flex items-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>{content[currentLanguage].collaborateButton}</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                  className="p-3 bg-white rounded-lg shadow-subtle hover:shadow-elevated text-text-secondary hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  <Icon name={social.icon} size={20} strokeWidth={2} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Photo & Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Professional Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <Image
                  src="/assets/images/photo_cadre.jpg"
                  alt={constants.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-elevated p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-text-secondary">{content[currentLanguage].currentProject}</p>
                    <p className="text-sm font-medium text-primary">{content[currentLanguage].projectName}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Code Editor */}
            <div className="bg-secondary-900 rounded-xl shadow-elevated overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary-800 border-b border-secondary-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-secondary-100 text-sm ml-4">developer.js</span>
                </div>
                <Icon name="Code2" size={16} color="rgb(156 163 175)" />
              </div>
              
              <div className="p-4 font-mono text-sm">
                {currentCodeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: index <= currentCodeLine ? 1 : 0.3,
                      x: 0 
                    }}
                    transition={{ delay: index * 0.1 }}
                    className={`${
                      index <= currentCodeLine ? 'text-secondary-100' : 'text-secondary-500'
                    } ${index === currentCodeLine && isTyping ? 'border-r-2 border-accent animate-pulse' : ''}`}
                  >
                    <span className="text-secondary-500 mr-4">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="text-accent">{line}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;