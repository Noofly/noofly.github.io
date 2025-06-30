import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CollaborationSection = ({ currentLanguage }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const content = {
    en: {
      title: "Collaboration & Client Stories",
      subtitle: "Building bridges through technology and fostering meaningful partnerships across cultures"
    },
    fr: {
      title: "Collaboration & Histoires Clients",
      subtitle: "Construire des ponts grâce à la technologie et favoriser des partenariats significatifs à travers les cultures"
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: {
        en: "Product Manager at TechFlow",
        fr: "Chef de Produit chez TechFlow"
      },
      company: "TechFlow Inc.",
      location: "San Francisco, USA",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      testimonial: {
        en: `Working with Alex was transformative for our product. His ability to translate complex technical concepts into user-friendly solutions while maintaining cultural sensitivity for our global audience was exceptional. The bilingual documentation and communication made our international expansion seamless.`,
        fr: `Travailler avec Alex a été transformateur pour notre produit. Sa capacité à traduire des concepts techniques complexes en solutions conviviales tout en maintenant la sensibilité culturelle pour notre audience mondiale était exceptionnelle. La documentation et communication bilingues ont rendu notre expansion internationale fluide.`
      },
      project: {
        en: "Global E-commerce Platform Redesign",
        fr: "Refonte de Plateforme E-commerce Mondiale"
      },
      results: {
        en: [
          "40% increase in international user engagement",
          "25% reduction in support tickets",
          "Successful launch in 5 new markets"
        ],
        fr: [
          "40% d'augmentation de l'engagement utilisateur international",
          "25% de réduction des tickets de support",
          "Lancement réussi dans 5 nouveaux marchés"
        ]
      },
      collaboration: {
        en: "Alex's cross-cultural communication skills and technical expertise made him an invaluable bridge between our US and European teams.",
        fr: "Les compétences de communication interculturelle et l'expertise technique d'Alex en ont fait un pont inestimable entre nos équipes américaines et européennes."
      }
    },
    {
      name: "Pierre Dubois",
      role: {
        en: "CTO at InnovateLab",
        fr: "CTO chez InnovateLab"
      },
      company: "InnovateLab",
      location: "Paris, France",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      testimonial: {
        en: `Alex brought a unique perspective to our team, combining technical excellence with cultural intelligence. His ability to work seamlessly across time zones and languages while delivering high-quality code was remarkable. The way he adapted his communication style for different stakeholders was impressive.`,
        fr: `Alex a apporté une perspective unique à notre équipe, combinant l'excellence technique avec l'intelligence culturelle. Sa capacité à travailler de manière transparente à travers les fuseaux horaires et les langues tout en livrant du code de haute qualité était remarquable. La façon dont il a adapté son style de communication pour différentes parties prenantes était impressionnante.`
      },
      project: {
        en: "AI-Powered Analytics Dashboard",
        fr: "Tableau de Bord Analytique Alimenté par IA"
      },
      results: {
        en: [
          "60% improvement in data processing speed",
          "Seamless French/English interface",
          "Zero accessibility compliance issues"
        ],
        fr: [
          "60% d'amélioration de la vitesse de traitement des données",
          "Interface français/anglais transparente",
          "Zéro problème de conformité d'accessibilité"
        ]
      },
      collaboration: {
        en: "His technical leadership and cultural bridge-building capabilities made complex international projects feel effortless.",
        fr: "Son leadership technique et ses capacités de construction de ponts culturels ont rendu les projets internationaux complexes sans effort."
      }
    },
    {
      name: "Maria Rodriguez",
      role: {
        en: "Design Director at CreativeStudio",
        fr: "Directrice Design chez CreativeStudio"
      },
      company: "CreativeStudio",
      location: "Barcelona, Spain",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      testimonial: {
        en: `Alex's collaboration style is exceptional. He doesn't just implement designs; he enhances them with technical insights while respecting the creative vision. His multilingual abilities helped us communicate design concepts across our diverse team more effectively.`,
        fr: `Le style de collaboration d'Alex est exceptionnel. Il n'implémente pas seulement les designs ; il les améliore avec des insights techniques tout en respectant la vision créative. Ses capacités multilingues nous ont aidés à communiquer les concepts de design à travers notre équipe diverse plus efficacement.`
      },
      project: {
        en: "Interactive Brand Experience Platform",
        fr: "Plateforme d'Expérience de Marque Interactive"
      },
      results: {
        en: [
          "Award-winning user interface design",
          "95% client satisfaction rate",
          "Featured in 3 design publications"
        ],
        fr: [
          "Design d'interface utilisateur primé",
          "95% de taux de satisfaction client",
          "Présenté dans 3 publications de design"
        ]
      },
      collaboration: {
        en: "The perfect blend of technical precision and creative understanding. Alex made our ambitious designs come to life flawlessly.",
        fr: "Le mélange parfait de précision technique et de compréhension créative. Alex a donné vie à nos designs ambitieux sans faille."
      }
    }
  ];

  const collaborationApproach = {
    principles: [
      {
        title: { en: "Cultural Intelligence", fr: "Intelligence Culturelle" },
        description: {
          en: "Adapting communication styles and technical approaches to respect cultural differences and preferences",
          fr: "Adapter les styles de communication et les approches techniques pour respecter les différences et préférences culturelles"
        },
        icon: "Globe",
        examples: {
          en: [
            "Localized user interface patterns",
            "Cultural color psychology consideration",
            "Time zone-aware collaboration schedules"
          ],
          fr: [
            "Modèles d'interface utilisateur localisés",
            "Considération de la psychologie des couleurs culturelles",
            "Horaires de collaboration conscients des fuseaux horaires"
          ]
        }
      },
      {
        title: { en: "Transparent Communication", fr: "Communication Transparente" },
        description: {
          en: "Clear, consistent updates and documentation in multiple languages to ensure all stakeholders stay informed",
          fr: "Mises à jour et documentation claires et cohérentes en plusieurs langues pour s'assurer que toutes les parties prenantes restent informées"
        },
        icon: "MessageSquare",
        examples: {
          en: [
            "Bilingual project documentation",
            "Regular video updates with cultural context",
            "Accessible technical explanations"
          ],
          fr: [
            "Documentation de projet bilingue",
            "Mises à jour vidéo régulières avec contexte culturel",
            "Explications techniques accessibles"
          ]
        }
      },
      {
        title: { en: "Agile Adaptation", fr: "Adaptation Agile" },
        description: {
          en: "Flexible methodologies that accommodate different working styles and cultural preferences across international teams",
          fr: "Méthodologies flexibles qui s'adaptent aux différents styles de travail et préférences culturelles à travers les équipes internationales"
        },
        icon: "Zap",
        examples: {
          en: [
            "Flexible meeting schedules",
            "Cultural holiday awareness",
            "Adaptive workflow processes"
          ],
          fr: [
            "Horaires de réunion flexibles",
            "Conscience des jours fériés culturels",
            "Processus de flux de travail adaptatifs"
          ]
        }
      }
    ]
  };

  return (
    <section id="collaboration" className="py-20 bg-white">
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

        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTestimonial === index 
                    ? 'scale-105 shadow-elevated' 
                    : 'hover:scale-102 hover:shadow-subtle'
                }`}
                onClick={() => setSelectedTestimonial(index)}
              >
                <div className="bg-surface rounded-xl p-6 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-text-secondary">{testimonial.role[currentLanguage]}</p>
                      <p className="text-xs text-accent">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {testimonial.testimonial[currentLanguage].substring(0, 150)}...
                  </p>

                  <div className="text-center">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      selectedTestimonial === index 
                        ? 'bg-accent text-white' 
                        : 'bg-accent-50 text-accent'
                    }`}>
                      {selectedTestimonial === index ? 'Selected' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Testimonial */}
          <motion.div
            key={selectedTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={testimonials[selectedTestimonial].avatar}
                    alt={testimonials[selectedTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {testimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-text-secondary">
                      {testimonials[selectedTestimonial].role[currentLanguage]}
                    </p>
                    <p className="text-accent font-medium">
                      {testimonials[selectedTestimonial].company}
                    </p>
                  </div>
                </div>

                <blockquote className="text-lg text-text-primary leading-relaxed mb-6">
                  "{testimonials[selectedTestimonial].testimonial[currentLanguage]}"
                </blockquote>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">
                    {currentLanguage === 'en' ? 'Project:' : 'Projet:'}
                  </h4>
                  <p className="text-accent font-medium mb-3">
                    {testimonials[selectedTestimonial].project[currentLanguage]}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonials[selectedTestimonial].collaboration[currentLanguage]}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-4">
                    {currentLanguage === 'en' ? 'Project Results:' : 'Résultats du Projet:'}
                  </h4>
                  <div className="space-y-3">
                    {testimonials[selectedTestimonial].results[currentLanguage].map((result, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-primary">
                      {currentLanguage === 'en' ? 'Location:' : 'Localisation:'}
                    </span>
                  </div>
                  <p className="text-text-secondary">{testimonials[selectedTestimonial].location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Collaboration Approach */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">
              {currentLanguage === 'en' ? 'My Collaboration Approach' : 'Mon Approche de Collaboration'}
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {currentLanguage === 'en' 
                ? "Building successful partnerships through cultural intelligence and technical excellence"
                : "Construire des partenariats réussis grâce à l'intelligence culturelle et l'excellence technique"
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationApproach.principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-surface rounded-xl p-6 hover:shadow-subtle transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name={principle.icon} size={24} color="white" strokeWidth={2} />
                </div>
                
                <h4 className="text-xl font-bold text-primary mb-3">
                  {principle.title[currentLanguage]}
                </h4>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {principle.description[currentLanguage]}
                </p>

                <div className="space-y-2">
                  {principle.examples[currentLanguage].map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'en' 
                ? "Ready to Start Your Project?" 
                : "Prêt à Commencer Votre Projet?"
              }
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {currentLanguage === 'en' 
                ? "Let's discuss how we can bring your vision to life with thoughtful technology and cultural intelligence."
                : "Discutons de la façon dont nous pouvons donner vie à votre vision avec une technologie réfléchie et une intelligence culturelle."
              }
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2">
              <Icon name="MessageCircle" size={18} />
              <span>
                {currentLanguage === 'en' ? 'Start a Conversation' : 'Commencer une Conversation'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationSection;