import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = ({ currentLanguage }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const content = {
    en: {
      title: "My Technical Evolution Journey",
      subtitle: "Key milestones that shaped my development philosophy and expertise",
      viewDetails: "Summary",
      showLess: "Show Less"
    },
    fr: {
      title: "Mon Parcours d'Évolution Technique",
      subtitle: "Étapes clés qui ont façonné ma philosophie de développement et mon expertise",
      viewDetails: "En bref",
      showLess: "Réduire"
    }
  };

  const timelineData = [
    {
      year: "2018",
      title: {
        en: "First Line of Code",
        fr: "Première Ligne de Code"
      },
      role: {
        en: "Computer Science Student (DUT)",
        fr: "Étudiant en DUT Informatique"
      },
      description: {
        en: "My journey began with the fundamentals: learning algorithms, then writing code on paper, and finally, my first lines in C. It was a methodical discovery of programming logic, from theory to practice.",
        fr: "Mon parcours a commencé par les fondamentaux : l'apprentissage de l'algorithmique, puis l'écriture de code sur papier, et enfin, mes premières lignes en C. Ce fut une découverte méthodique de la logique de programmation, de la théorie à la pratique."
      },
      technologies: {
        en: ["C", "Python", "Algorithms", "Software Engineering", "Databases", "System Architecture", "Networks"],
        fr: ["C", "Python", "Algorithmes", "Génie Logiciel", "Bases de données", "Architecture des systèmes", "Réseaux"]
      },
      icon: "Code2",
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop"
    },
    {
      year: "2020",
      title: {
        en: "Apprenticeship & Academic Projects",
        fr: "Alternance & Projets Académiques"
      },
      role: {
        en: "Apprentice Developer @ Worldline",
        fr: "Développeur en Alternance @ Worldline"
      },
      description: {
        en: "At Worldline, I joined the team managing the McDonald's France app (+10M downloads). I handled application maintenance and CI/CD on a Java SpringBoot, XML & CSS stack, all within an Agile environment. It was a deep dive into large-scale production demands.",
        fr: "Chez Worldline, j'ai intégré l'équipe gérant l'app McDo France (+10M de téléchargements). Ma mission : maintenance applicative et CI/CD sur une stack Java SpringBoot, XML & CSS, le tout en environnement Agile. Une immersion profonde dans les exigences de la production à grande échelle."
      },
      technologies: {
        en: ["Java SpringBoot", "XML", "CSS", "CI/CD", "Agile", "PHP", "JavaScript"],
        fr: ["Java SpringBoot", "XML", "CSS", "CI/CD", "Agile", "PHP", "JavaScript"]
      },
      icon: "Briefcase",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    {
      year: "2020-2023",
      title: {
        en: "Engineering School & Project Management",
        fr: "École d'Ingénieurs & Gestion de Projet"
      },
      role: {
        en: "Engineering Student @ IMT Nord Europe & Project Manager @ SIA Habitat",
        fr: "Étudiant Ingénieur @ IMT Nord Europe & Chef de Projet @ SIA Habitat"
      },
      description: {
        en: {
          school: "I pursued an Engineering degree in Computer Science with specializations in Information System Design & Management, Software Development, and 3D Entertainment Technologies (Computer Vision, Unity, Augmented Reality).",
          work: "As a project manager at SIA Habitat, I managed ERP projects, acting as a bridge between users and the ERP development provider. My responsibilities included gathering requirements, writing specifications/technical specifications, monitoring development progress, testing/acceptance testing, social housing management, and level 2 support."
        },
        fr: {
          school: "J'ai suivi un diplôme d'Ingénieur en Informatique avec des spécialisations en Conception et Gestion de Systèmes d'Information, Développement Logiciel, et Technologies 3D Entertainment (Computer Vision, Unity, Réalité Augmentée).",
          work: "En tant que chef de projet chez SIA Habitat, j'ai géré des projets ERP, faisant le lien entre les utilisateurs et le prestataire développant l'ERP. Mes responsabilités incluaient le recueil des besoins, la rédaction de spécifications/cahiers des charges, le suivi du développement, les tests/recettes, la gestion propre au logement social, et le support de niveau 2."
        }
      },
      technologies: {
        en: ["Computer Vision", "Unity", "Augmented Reality", "Project Management", "Information Systems", "3D Technologies", "ERP", "Requirements Analysis", "Testing"],
        fr: ["Computer Vision", "Unity", "Réalité Augmentée", "Gestion de Projet", "Systèmes d'Information", "Technologies 3D", "ERP", "Analyse des Besoins", "Tests"]
      },
      icon: "GraduationCap",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      year: "2023",
      title: {
        en: "Final Year Project: ERP Test Automation",
        fr: "Projet de Fin d'Études : Automatisation de Tests ERP"
      },
      role: {
        en: "Software Engineer @ SIA Habitat",
        fr: "Ingénieur Logiciel @ SIA Habitat"
      },
      description: {
        en: "I developed a comprehensive test automation software for the ERP system that revolutionized the version upgrade testing process. The tool automated manual tests that previously took weeks to complete, allowing project managers to focus on their core tasks. It featured a NoCode interface for creating custom test scenarios, JSON import/export capabilities, and batch test execution with categorization.",
        fr: "J'ai développé un logiciel complet d'automatisation de tests pour le système ERP qui a révolutionné le processus de test de montée de version. L'outil automatisait les tests manuels qui prenaient auparavant des semaines, permettant aux chefs de projet de se concentrer sur leurs tâches principales. Il proposait une interface NoCode pour créer des scénarios de tests personnalisés, des capacités d'import/export JSON, et l'exécution de tests par lots avec catégorisation."
      },
      technologies: {
        en: ["Java", "JavaFX", "Selenium", "Cucumber", "Test Automation", "NoCode", "JSON", "ERP"],
        fr: ["Java", "JavaFX", "Selenium", "Cucumber", "Automatisation de Tests", "NoCode", "JSON", "ERP"]
      },
      icon: "TestTube",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      year: "2023-2025",
      title: {
        en: "Post-Graduation: Freelance & Personal Projects Era",
        fr: "Post-Diplôme : Parcours de Développeur Indépendant"
      },
      role: {
        en: "Independent Developer",
        fr: "Développeur Indépendant"
      },
      description: {
        en: {
          learning: "I focused on mastering modern development technologies, particularly React Native for mobile development, blockchain technologies, and AI/ML for intelligent features.",
          projects: "I worked on various personal projects including automation bots using computer vision, Discord bots for community management, and freelance projects helping businesses implement digital solutions."
        },
        fr: {
          learning: "Je me suis concentré sur la maîtrise des technologies de développement modernes, notamment React Native pour le développement mobile, les technologies blockchain, et l'IA/ML pour des fonctionnalités intelligentes.",
          projects: "J'ai travaillé sur divers projets personnels, notamment des bots d'automatisation utilisant la vision par ordinateur. J'ai également été amené à travailler sur des projets freelance, tels que des bots Discord pour la gestion de communautés."
        }
      },
      technologies: {
        en: ["React Native", "Python", "Computer Vision", "Discord Bots", "Freelance", "Automation"],
        fr: ["React Native", "Python", "Vision par Ordinateur", "Bots Discord", "Freelance", "Automatisation"]
      },
      icon: "Compass",
      color: "bg-indigo-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      year: "2025",
      title: {
        en: "StockChef: Mobile App for Food Waste Reduction",
        fr: "StockChef : Application Mobile Anti-Gaspillage"
      },
      role: {
        en: "Mobile App Developer",
        fr: "Développeur d'Application Mobile"
      },
      description: {
        en: "StockChef is a mobile app I developed to help families reduce food waste through smart scanning and AI-powered recipe suggestions.\n\nThis project was a turning point in my development journey. It taught me how to bring a complex idea to life, dealing with real-world challenges like user experience design and technical constraints. Building something that could actually help people in their daily lives gave me a new perspective on the impact of technology.\n\nThe project is currently on pause due to technical limitations - users had to manually enter expiration dates, which was too cumbersome for daily use. This taught me the importance of user experience and the value of waiting for the right technological evolution to make a project truly viable.",
        fr: "StockChef est une application mobile que j'ai développée pour aider les familles à réduire le gaspillage alimentaire grâce au scan intelligent et aux suggestions de recettes IA.\n\nCe projet a été un tournant dans mon parcours de développeur. Il m'a appris à donner vie à une idée complexe, en gérant les défis du monde réel comme la conception d'expérience utilisateur et les contraintes techniques. Construire quelque chose qui pourrait réellement aider les gens dans leur vie quotidienne m'a donné une nouvelle perspective sur l'impact de la technologie.\n\nLe projet est actuellement en pause à cause de limitations techniques - les utilisateurs devaient saisir manuellement les dates de péremption, ce qui était trop contraignant pour un usage quotidien. Cela m'a appris l'importance de l'expérience utilisateur et la valeur d'attendre la bonne évolution technologique pour rendre un projet vraiment viable."
      },
      technologies: {
        en: ["React Native", "Expo", "Firebase", "Open Food Facts API", "AI/ML", "Mobile Development"],
        fr: ["React Native", "Expo", "Firebase", "API Open Food Facts", "IA/ML", "Développement Mobile"]
      },
      icon: "Smartphone",
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="timeline" className="py-20 bg-white">
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

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                }`}>
                  <div className="bg-surface rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                          <Icon name={item.icon} size={24} color="white" strokeWidth={2} />
                        </div>
                        <span className="text-2xl font-bold text-accent">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {item.title[currentLanguage]}
                      </h3>
                      
                      <p className="text-accent font-medium mb-4">
                        {item.role[currentLanguage]}
                      </p>
                      
                      <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {index === 2 && typeof item.description[currentLanguage] === 'object' ? (
                          <>
                            <span className="block font-semibold mb-1">{currentLanguage === 'fr' ? "École d'ingénieurs" : "Engineering School"}</span>
                            <span className="block mb-3">{item.description[currentLanguage].school}</span>
                            <span className="block font-semibold mb-1">{currentLanguage === 'fr' ? "Entreprise / Gestion de projet" : "Company / Project Management"}</span>
                            <span className="block">{item.description[currentLanguage].work}</span>
                          </>
                        ) : index === 4 && typeof item.description[currentLanguage] === 'object' ? (
                          <>
                            <span className="block font-semibold mb-1">{currentLanguage === 'fr' ? "Formation continue" : "Continuous Learning"}</span>
                            <span className="block mb-3">{item.description[currentLanguage].learning}</span>
                            <span className="block font-semibold mb-1">{currentLanguage === 'fr' ? "Freelance & Projets Personnels" : "Freelance & Personal Projects"}</span>
                            <span className="block">{item.description[currentLanguage].projects}</span>
                          </>
                        ) : (
                          item.description[currentLanguage]
                        )}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="px-6 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies && item.technologies[currentLanguage] && item.technologies[currentLanguage].map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent-50 text-accent text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className="border-t border-secondary-200">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-text-secondary hover:text-accent transition-colors duration-300"
                      >
                        <span className="text-sm font-medium">
                          {expandedItem === index ? content[currentLanguage].showLess : content[currentLanguage].viewDetails}
                        </span>
                        <Icon 
                          name={expandedItem === index ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                        />
                      </button>
                      
                      {expandedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={item.image}
                              alt={item.title[currentLanguage]}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                              <div className="p-4 text-white">
                                <p className="text-sm font-medium">
                                  {index === 0 && (currentLanguage === 'en' ? 'Key Learning' : 'Apprentissage Clé')}
                                  {index === 1 && (currentLanguage === 'en' ? 'Professional Impact' : 'Impact Professionnel')}
                                  {index === 2 && (currentLanguage === 'en' ? 'Academic Achievement' : 'Réussite Académique')}
                                  {index === 3 && (currentLanguage === 'en' ? 'Innovation Project' : 'Projet d\'Innovation')}
                                  {index === 4 && (currentLanguage === 'en' ? 'Freelance & Innovation' : 'Freelance & Innovation')}
                                  {index === 5 && (currentLanguage === 'en' ? 'StockChef Launch' : 'Lancement StockChef')}
                                </p>
                                <p className="text-xs opacity-90">
                                  {index === 0 && (currentLanguage === 'en' 
                                    ? 'Understanding the fundamentals of programming logic and problem-solving approach.' 
                                    : 'Compréhension des fondamentaux de la logique de programmation et de l\'approche de résolution de problèmes.')}
                                  {index === 1 && (currentLanguage === 'en' 
                                    ? 'Experience with large-scale applications and Agile methodologies in production environments.' 
                                    : 'Expérience avec des applications à grande échelle et les méthodologies Agile en environnement de production.')}
                                  {index === 2 && (currentLanguage === 'en' 
                                    ? 'Combined theoretical knowledge with practical project management experience in business information systems.' 
                                    : 'Combinaison de connaissances théoriques avec une expérience pratique de gestion de projet dans les systèmes d\'information de gestion.')}
                                  {index === 3 && (currentLanguage === 'en' 
                                    ? 'Developed a comprehensive automation solution that significantly improved team productivity and reduced manual testing time from weeks to hours.' 
                                    : 'Développement d\'une solution d\'automatisation complète qui a considérablement amélioré la productivité de l\'équipe et réduit le temps de test manuel de semaines à heures.')}
                                  {index === 4 && (currentLanguage === 'en' 
                                    ? 'Built diverse expertise through freelance work and personal projects, focusing on automation, community management, and modern development technologies.' 
                                    : 'Construction d\'une expertise diversifiée à travers le travail freelance et les projets personnels, en se concentrant sur l\'automatisation, la gestion de communautés et les technologies de développement modernes.')}
                                  {index === 5 && (currentLanguage === 'en' 
                                    ? 'Created StockChef mobile app to tackle food waste, learning valuable lessons about user experience and the importance of timing in technology projects.' 
                                    : 'Création de l\'app mobile StockChef pour lutter contre le gaspillage alimentaire, apprenant des leçons précieuses sur l\'expérience utilisateur et l\'importance du timing dans les projets technologiques.')}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;