import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindScenesSection = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState('workspace');

  const content = {
    en: {
      title: "Behind the Scenes",
      subtitle: "A glimpse into my development process, tools, and workspace insights"
    },
    fr: {
      title: "Dans les Coulisses",
      subtitle: "Un aperçu de mon processus de développement, outils et insights d'espace de travail"
    }
  };

  const tabs = [
    {
      id: 'workspace',
      name: { en: 'Workspace', fr: 'Espace de Travail' },
      icon: 'Monitor'
    },
    {
      id: 'tools',
      name: { en: 'Tools & Stack', fr: 'Outils & Stack' },
      icon: 'Wrench'
    },
    {
      id: 'process',
      name: { en: 'Development Process', fr: 'Processus de Développement' },
      icon: 'GitBranch'
    },
    {
      id: 'learning',
      name: { en: 'Learning Journey', fr: 'Parcours d\'Apprentissage' },
      icon: 'BookOpen'
    }
  ];

  const workspaceData = {
    setup: {
      en: {
        title: "My Development Setup",
        description: "A carefully curated environment designed for productivity and creativity",
        items: [
          {
            category: "Hardware",
            items: [
              "MacBook Pro 16\" M2 Max - Primary development machine",
              "Dell UltraSharp 32\" 4K Monitor - Extended screen real estate",
              "Mechanical Keyboard (Cherry MX Blue) - Tactile feedback for coding",
              "Logitech MX Master 3 - Precision mouse for design work",
              "Sony WH-1000XM4 - Noise-canceling for deep focus sessions"
            ]
          },
          {
            category: "Software",
            items: [
              "VS Code with custom theme and extensions",
              "iTerm2 with Oh My Zsh configuration",
              "Figma for design and prototyping",
              "Notion for project management and documentation",
              "Spotify for coding playlists (Lo-fi & Ambient)"
            ]
          }
        ]
      },
      fr: {
        title: "Mon Setup de Développement",
        description: "Un environnement soigneusement organisé conçu pour la productivité et la créativité",
        items: [
          {
            category: "Matériel",
            items: [
              "MacBook Pro 16\" M2 Max - Machine de développement principale",
              "Moniteur Dell UltraSharp 32\" 4K - Espace d'écran étendu",
              "Clavier Mécanique (Cherry MX Blue) - Retour tactile pour le codage",
              "Logitech MX Master 3 - Souris de précision pour le travail de design",
              "Sony WH-1000XM4 - Réduction de bruit pour les sessions de concentration"
            ]
          },
          {
            category: "Logiciel",
            items: [
              "VS Code avec thème personnalisé et extensions",
              "iTerm2 avec configuration Oh My Zsh",
              "Figma pour le design et le prototypage",
              "Notion pour la gestion de projet et documentation",
              "Spotify pour les playlists de codage (Lo-fi & Ambient)"
            ]
          }
        ]
      }
    },
    environment: {
      en: "Home office with natural lighting, plants for air quality, and a standing desk setup for health. The space is designed to minimize distractions while maximizing creativity and focus.",
      fr: "Bureau à domicile avec éclairage naturel, plantes pour la qualité de l'air, et un setup de bureau debout pour la santé. L'espace est conçu pour minimiser les distractions tout en maximisant la créativité et la concentration."
    }
  };

  const toolsData = {
    categories: [
      {
        name: { en: "Backend Development", fr: "Développement Backend" },
        color: "bg-green-500",
        tools: [
          { name: "Java (Spring)", proficiency: 90, description: { en: "For robust enterprise applications", fr: "Pour des applications d'entreprise robustes" } },
          { name: "Node.js", proficiency: 85, description: { en: "For fast and scalable network applications", fr: "Pour des applications réseau rapides et évolutives" } },
          { name: "Python", proficiency: 80, description: { en: "For data analysis and scripting", fr: "Pour l'analyse de données et le scripting" } },
          { name: "C# / C", proficiency: 75, description: { en: "For system-level programming", fr: "Pour la programmation au niveau système" } }
        ]
      },
      {
        name: { en: "Frontend Development", fr: "Développement Frontend" },
        color: "bg-blue-500",
        tools: [
          { name: "React", proficiency: 95, description: { en: "Primary library for building user interfaces", fr: "Bibliothèque principale pour construire des interfaces utilisateur" } },
          { name: "JavaFX", proficiency: 80, description: { en: "For rich client applications", fr: "Pour des applications client riches" } },
          { name: "HTML/CSS", proficiency: 98, description: { en: "The building blocks of the web", fr: "Les blocs de construction du web" } }
        ]
      },
      {
        name: { en: "Databases & Tools", fr: "Bases de Données & Outils" },
        color: "bg-purple-500",
        tools: [
          { name: "SQL (Oracle, PostgreSQL)", proficiency: 88, description: { en: "For relational data management", fr: "Pour la gestion des données relationnelles" } },
          { name: "Git/GitHub", proficiency: 95, description: { en: "For version control and collaboration", fr: "Pour le contrôle de version et la collaboration" } },
          { name: "CI/CD", proficiency: 85, description: { en: "For continuous integration and delivery", fr: "Pour l'intégration et la livraison continues" } },
          { name: "Docker", proficiency: 80, description: { en: "For application containerization", fr: "Pour la conteneurisation d'applications" } }
        ]
      },
      {
        name: { en: "Project Management & Quality", fr: "Gestion de Projet & Qualité" },
        color: "bg-yellow-500",
        tools: [
          { name: "Agile/Scrum", proficiency: 92, description: { en: "For iterative project management", fr: "Pour la gestion de projet itérative" } },
          { name: "Selenium/JUnit", proficiency: 85, description: { en: "For automated testing", fr: "Pour les tests automatisés" } },
          { name: "Jira/Trello", proficiency: 90, description: { en: "For task and issue tracking", fr: "Pour le suivi des tâches et des problèmes" } }
        ]
      }
    ]
  };

  const processData = {
    phases: [
      {
        name: { en: "Discovery & Planning", fr: "Découverte & Planification" },
        icon: "Search",
        duration: "1-2 weeks",
        activities: {
          en: [
            "Stakeholder interviews and requirement gathering",
            "User research and persona development",
            "Technical architecture planning",
            "Project timeline and milestone definition"
          ],
          fr: [
            "Entretiens avec les parties prenantes et collecte des exigences",
            "Recherche utilisateur et développement de personas",
            "Planification de l'architecture technique",
            "Définition de la chronologie et des jalons du projet"
          ]
        }
      },
      {
        name: { en: "Design & Prototyping", fr: "Design & Prototypage" },
        icon: "Palette",
        duration: "2-3 weeks",
        activities: {
          en: [
            "Wireframing and user flow mapping",
            "Visual design and component library creation",
            "Interactive prototype development",
            "Usability testing and iteration"
          ],
          fr: [
            "Wireframing et cartographie des flux utilisateur",
            "Design visuel et création de bibliothèque de composants",
            "Développement de prototype interactif",
            "Tests d'utilisabilité et itération"
          ]
        }
      },
      {
        name: { en: "Development", fr: "Développement" },
        icon: "Code",
        duration: "4-8 weeks",
        activities: {
          en: [
            "Environment setup and CI/CD pipeline configuration",
            "Component development with test-driven approach",
            "API integration and data management",
            "Performance optimization and accessibility implementation"
          ],
          fr: [
            "Configuration de l'environnement et du pipeline CI/CD",
            "Développement de composants avec approche test-driven",
            "Intégration API et gestion des données",
            "Optimisation des performances et implémentation de l'accessibilité"
          ]
        }
      },
      {
        name: { en: "Testing & Deployment", fr: "Tests & Déploiement" },
        icon: "CheckCircle",
        duration: "1-2 weeks",
        activities: {
          en: [
            "Comprehensive testing across devices and browsers",
            "Performance auditing and optimization",
            "Security review and vulnerability assessment",
            "Production deployment and monitoring setup"
          ],
          fr: [
            "Tests complets sur appareils et navigateurs",
            "Audit de performance et optimisation",
            "Révision de sécurité et évaluation des vulnérabilités",
            "Déploiement en production et configuration de monitoring"
          ]
        }
      }
    ]
  };

  const learningData = {
    currentFocus: {
      en: [
        "AI/ML integration in web applications",
        "Advanced TypeScript patterns and best practices",
        "Web3 and blockchain development fundamentals",
        "Advanced animation techniques with Framer Motion"
      ],
      fr: [
        "Intégration IA/ML dans les applications web",
        "Modèles TypeScript avancés et meilleures pratiques",
        "Fondamentaux du développement Web3 et blockchain",
        "Techniques d'animation avancées avec Framer Motion"
      ]
    },
    resources: {
      en: [
        "Frontend Masters - Advanced React patterns",
        "Coursera - Machine Learning Specialization",
        "YouTube - Theo's tech talks and tutorials",
        "Books - 'Clean Architecture' by Robert Martin"
      ],
      fr: [
        "Frontend Masters - Modèles React avancés",
        "Coursera - Spécialisation Machine Learning",
        "YouTube - Conférences tech et tutoriels de Theo",
        "Livres - 'Clean Architecture' par Robert Martin"
      ]
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'workspace':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">
                  {workspaceData.setup[currentLanguage].title}
                </h3>
                <p className="text-text-secondary">
                  {workspaceData.setup[currentLanguage].description}
                </p>
                
                {workspaceData.setup[currentLanguage].items.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-primary">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 text-sm text-text-secondary">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=400&fit=crop"
                  alt="Development Workspace"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-text-secondary">
                  {workspaceData.environment[currentLanguage]}
                </p>
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-8">
            {toolsData.categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                  <h3 className="text-xl font-bold text-primary">
                    {category.name[currentLanguage]}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                      className="bg-surface rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-primary">{tool.name}</h4>
                      <p className="text-sm text-text-secondary mt-1">
                        {tool.description[currentLanguage]}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'process':
        return (
          <div className="space-y-8">
            {processData.phases.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name={phase.icon} size={24} color="white" strokeWidth={2} />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-bold text-primary">
                      {phase.name[currentLanguage]}
                    </h3>
                    <span className="px-3 py-1 bg-accent-50 text-accent text-sm font-medium rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.activities[currentLanguage].map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start space-x-3 text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );

      case 'learning':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  {currentLanguage === 'en' ? 'Current Learning Focus' : 'Focus d\'Apprentissage Actuel'}
                </h3>
                <ul className="space-y-3">
                  {learningData.currentFocus[currentLanguage].map((focus, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="Target" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  {currentLanguage === 'en' ? 'Learning Resources' : 'Ressources d\'Apprentissage'}
                </h3>
                <ul className="space-y-3">
                  {learningData.resources[currentLanguage].map((resource, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="BookOpen" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="TrendingUp" size={24} className="text-accent" />
                <h3 className="text-lg font-semibold text-primary">
                  {currentLanguage === 'en' ? 'Learning Stats' : 'Statistiques d\'Apprentissage'}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'en' ? 'Hours/Week' : 'Heures/Semaine'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'en' ? 'Courses Completed' : 'Cours Complétés'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'en' ? 'Tech Articles' : 'Articles Tech'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100+</div>
                  <div className="text-sm text-text-secondary">
                    {currentLanguage === 'en' ? 'GitHub Commits' : 'Commits GitHub'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="behind-scenes" className="py-20 bg-surface">
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

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-subtle'
                  : 'bg-white text-text-secondary hover:text-accent hover:bg-accent-50'
              }`}
            >
              <Icon name={tab.icon} size={18} strokeWidth={2} />
              <span>{tab.name[currentLanguage]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-subtle p-8"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default BehindScenesSection;