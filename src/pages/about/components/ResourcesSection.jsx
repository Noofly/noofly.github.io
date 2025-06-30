import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ResourcesSection = ({ currentLanguage }) => {
  const [downloadingItem, setDownloadingItem] = useState(null);

  const content = {
    en: {
      title: "Resources & Downloads",
      subtitle: "Access my resume, technical articles, code samples, and other valuable resources"
    },
    fr: {
      title: "Ressources & Téléchargements",
      subtitle: "Accédez à mon CV, articles techniques, échantillons de code et autres ressources précieuses"
    }
  };

  const handleDownload = (itemId) => {
    setDownloadingItem(itemId);
    // Simulate download process
    setTimeout(() => {
      setDownloadingItem(null);
    }, 2000);
  };

  const resumeFormats = [
    {
      id: 'pdf',
      format: 'PDF',
      description: {
        en: 'Professional resume in PDF format - Perfect for applications and printing',
        fr: 'CV professionnel en format PDF - Parfait pour les candidatures et l\'impression'
      },
      size: '2.3 MB',
      icon: 'FileText',
      color: 'bg-red-500'
    },
    {
      id: 'docx',
      format: 'DOCX',
      description: {
        en: 'Editable Word document format - Easy to customize and modify',
        fr: 'Format de document Word modifiable - Facile à personnaliser et modifier'
      },
      size: '1.8 MB',
      icon: 'FileText',
      color: 'bg-blue-500'
    },
    {
      id: 'json',
      format: 'JSON',
      description: {
        en: 'Machine-readable format for automated systems and ATS compatibility',
        fr: 'Format lisible par machine pour systèmes automatisés et compatibilité ATS'
      },
      size: '0.5 MB',
      icon: 'Code',
      color: 'bg-green-500'
    }
  ];

  const technicalArticles = [
    {
      id: 'react-patterns',
      title: {
        en: 'Advanced React Patterns for Scalable Applications',
        fr: 'Modèles React Avancés pour Applications Évolutives'
      },
      description: {
        en: 'Deep dive into compound components, render props, and custom hooks for building maintainable React applications.',
        fr: 'Plongée profonde dans les composants composés, render props, et hooks personnalisés pour construire des applications React maintenables.'
      },
      readTime: '12 min',
      category: 'React',
      downloads: 1250,
      icon: 'BookOpen',
      color: 'bg-blue-500'
    },
    {
      id: 'performance-optimization',
      title: {
        en: 'Web Performance Optimization: A Complete Guide',
        fr: 'Optimisation des Performances Web: Un Guide Complet'
      },
      description: {
        en: 'Comprehensive guide covering Core Web Vitals, lazy loading, code splitting, and advanced optimization techniques.',
        fr: 'Guide complet couvrant Core Web Vitals, lazy loading, code splitting, et techniques d\'optimisation avancées.'
      },
      readTime: '18 min',
      category: 'Performance',
      downloads: 890,
      icon: 'Zap',
      color: 'bg-yellow-500'
    },
    {
      id: 'accessibility-first',
      title: {
        en: 'Accessibility-First Development Approach',
        fr: 'Approche de Développement Accessibilité-First'
      },
      description: {
        en: 'Building inclusive web applications from the ground up with WCAG 2.1 compliance and best practices.',
        fr: 'Construire des applications web inclusives dès le départ avec conformité WCAG 2.1 et meilleures pratiques.'
      },
      readTime: '15 min',
      category: 'Accessibility',
      downloads: 675,
      icon: 'Heart',
      color: 'bg-purple-500'
    },
    {
      id: 'ai-integration',
      title: {
        en: 'Integrating AI into Modern Web Applications',
        fr: 'Intégrer l\'IA dans les Applications Web Modernes'
      },
      description: {
        en: 'Practical guide to implementing AI features using OpenAI API, with real-world examples and best practices.',
        fr: 'Guide pratique pour implémenter des fonctionnalités IA en utilisant l\'API OpenAI, avec exemples réels et meilleures pratiques.'
      },
      readTime: '20 min',
      category: 'AI/ML',
      downloads: 1100,
      icon: 'Brain',
      color: 'bg-cyan-500'
    }
  ];

  const codeSnippets = [
    {
      id: 'custom-hooks',
      title: {
        en: 'Custom React Hooks Collection',
        fr: 'Collection de Hooks React Personnalisés'
      },
      description: {
        en: 'Reusable custom hooks for common patterns: useLocalStorage, useDebounce, useIntersectionObserver, and more.',
        fr: 'Hooks personnalisés réutilisables pour modèles communs: useLocalStorage, useDebounce, useIntersectionObserver, et plus.'
      },
      language: 'TypeScript',
      lines: 450,
      icon: 'Code2',
      color: 'bg-blue-600'
    },
    {
      id: 'animation-utils',
      title: {
        en: 'Framer Motion Animation Utilities',
        fr: 'Utilitaires d\'Animation Framer Motion'
      },
      description: {
        en: 'Pre-built animation variants and utilities for smooth, performant animations in React applications.',
        fr: 'Variantes d\'animation pré-construites et utilitaires pour animations fluides et performantes dans applications React.'
      },
      language: 'JavaScript',
      lines: 320,
      icon: 'Sparkles',
      color: 'bg-pink-500'
    },
    {
      id: 'api-helpers',
      title: {
        en: 'API Integration Helper Functions',
        fr: 'Fonctions d\'Aide Intégration API'
      },
      description: {
        en: 'Robust API client with error handling, retry logic, and TypeScript support for modern web applications.',
        fr: 'Client API robuste avec gestion d\'erreurs, logique de retry, et support TypeScript pour applications web modernes.'
      },
      language: 'TypeScript',
      lines: 280,
      icon: 'Server',
      color: 'bg-green-600'
    }
  ];

  const socialContributions = [
    {
      platform: 'GitHub',
      username: '@alexchen-dev',
      contributions: '500+ commits this year',
      description: {
        en: 'Open source contributions and personal projects',
        fr: 'Contributions open source et projets personnels'
      },
      icon: 'Github',
      color: 'bg-gray-800',
      stats: {
        repositories: 45,
        stars: 1200,
        followers: 350
      }
    },
    {
      platform: 'Stack Overflow',
      username: 'alex-chen',
      contributions: '15k+ reputation',
      description: {
        en: 'Helping developers solve complex problems',
        fr: 'Aider les développeurs à résoudre des problèmes complexes'
      },
      icon: 'HelpCircle',
      color: 'bg-orange-500',
      stats: {
        answers: 120,
        questions: 25,
        badges: 18
      }
    },
    {
      platform: 'Dev.to',
      username: '@alexchen',
      contributions: '25+ articles published',
      description: {
        en: 'Technical articles and tutorials',
        fr: 'Articles techniques et tutoriels'
      },
      icon: 'PenTool',
      color: 'bg-black',
      stats: {
        articles: 25,
        reactions: 2500,
        followers: 180
      }
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-surface via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {content[currentLanguage].title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {content[currentLanguage].subtitle}
          </p>
        </motion.div>

        {/* Resume Downloads */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-3">
              <Icon name="User" size={24} className="text-accent" />
              <span>{currentLanguage === 'en' ? 'Resume Downloads' : 'Téléchargements CV'}</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {resumeFormats.map((format, index) => (
              <motion.div
                key={format.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${format.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={format.icon} size={24} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{format.format}</h4>
                    <p className="text-sm text-text-secondary">{format.size}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {format.description[currentLanguage]}
                </p>
                
                <button
                  onClick={() => handleDownload(format.id)}
                  disabled={downloadingItem === format.id}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloadingItem === format.id ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin" />
                      <span>{currentLanguage === 'en' ? 'Downloading...' : 'Téléchargement...'}</span>
                    </>
                  ) : (
                    <>
                      <Icon name="Download" size={18} />
                      <span>{currentLanguage === 'en' ? 'Download' : 'Télécharger'}</span>
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Articles */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-3">
              <Icon name="BookOpen" size={24} className="text-accent" />
              <span>{currentLanguage === 'en' ? 'Technical Articles' : 'Articles Techniques'}</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 ${article.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={article.icon} size={20} color="white" strokeWidth={2} />
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.downloads} downloads</span>
                  </div>
                </div>
                
                <h4 className="font-bold text-primary mb-2">
                  {article.title[currentLanguage]}
                </h4>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {article.description[currentLanguage]}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent-50 text-accent text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <button
                    onClick={() => handleDownload(article.id)}
                    disabled={downloadingItem === article.id}
                    className="flex items-center space-x-2 text-accent hover:text-accent-700 font-medium text-sm transition-colors duration-300"
                  >
                    {downloadingItem === article.id ? (
                      <>
                        <Icon name="Loader2" size={16} className="animate-spin" />
                        <span>{currentLanguage === 'en' ? 'Reading...' : 'Lecture...'}</span>
                      </>
                    ) : (
                      <>
                        <Icon name="ExternalLink" size={16} />
                        <span>{currentLanguage === 'en' ? 'Read Article' : 'Lire Article'}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-3">
              <Icon name="Code2" size={24} className="text-accent" />
              <span>{currentLanguage === 'en' ? 'Code Samples' : 'Échantillons de Code'}</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={snippet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${snippet.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={snippet.icon} size={20} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent">{snippet.language}</span>
                    <p className="text-xs text-text-secondary">{snippet.lines} lines</p>
                  </div>
                </div>
                
                <h4 className="font-bold text-primary mb-2">
                  {snippet.title[currentLanguage]}
                </h4>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {snippet.description[currentLanguage]}
                </p>
                
                <button
                  onClick={() => handleDownload(snippet.id)}
                  disabled={downloadingItem === snippet.id}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloadingItem === snippet.id ? (
                    <>
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      <span>{currentLanguage === 'en' ? 'Downloading...' : 'Téléchargement...'}</span>
                    </>
                  ) : (
                    <>
                      <Icon name="Github" size={16} />
                      <span>{currentLanguage === 'en' ? 'View on GitHub' : 'Voir sur GitHub'}</span>
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Contributions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-3">
              <Icon name="Users" size={24} className="text-accent" />
              <span>{currentLanguage === 'en' ? 'Community Contributions' : 'Contributions Communauté'}</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialContributions.map((contribution, index) => (
              <motion.div
                key={contribution.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${contribution.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={contribution.icon} size={24} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{contribution.platform}</h4>
                    <p className="text-sm text-text-secondary">{contribution.username}</p>
                  </div>
                </div>
                
                <p className="text-accent font-medium mb-2">{contribution.contributions}</p>
                <p className="text-text-secondary text-sm mb-4">
                  {contribution.description[currentLanguage]}
                </p>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(contribution.stats).map(([key, value]) => (
                    <div key={key} className="bg-surface rounded-lg p-2">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-subtle p-8">
            <Icon name="Mail" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              {currentLanguage === 'en' 
                ? "Need Something Specific?" 
                : "Besoin de Quelque Chose de Spécifique?"
              }
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              {currentLanguage === 'en' 
                ? "Can't find what you're looking for? I'm happy to create custom resources or answer specific questions about my experience and expertise."
                : "Vous ne trouvez pas ce que vous cherchez? Je suis heureux de créer des ressources personnalisées ou répondre à des questions spécifiques sur mon expérience et expertise."
              }
            </p>
            <button className="btn-cta inline-flex items-center space-x-2">
              <Icon name="MessageCircle" size={18} />
              <span>
                {currentLanguage === 'en' ? 'Get in Touch' : 'Prendre Contact'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;