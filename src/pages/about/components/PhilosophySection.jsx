import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { constants } from '../../../data/constants';

const PhilosophySection = ({ currentLanguage }) => {
  const [activeCard, setActiveCard] = useState(0);

  const content = {
    en: {
      title: "Development Philosophy",
      subtitle: "Core beliefs that guide my approach to technology and user experience"
    },
    fr: {
      title: "Philosophie de Développement",
      subtitle: "Croyances fondamentales qui guident mon approche de la technologie et de l'expérience utilisateur"
    }
  };

  const philosophyCards = [
    {
      title: {
        en: "The Solution Through Code",
        fr: "La Solution par le Code"
      },
      description: {
        en: "My goal is to design technical solutions that combine robustness, simplicity, and efficiency, with a strong foundation in practical application. For me, code is the ultimate tool to solve real-world problems.",
        fr: "Mon but est de concevoir des solutions techniques qui allient robustesse, simplicité et efficacité, avec un fort ancrage dans le concret. Pour moi, le code est l'outil ultime pour résoudre les problèmes du monde réel."
      },
      principles: {
        en: [
          "Robust and tested code is the foundation of any lasting solution",
          "Performance in the service of experience, not complexity",
          "A solution is only complete if it is understandable and maintainable"
        ],
        fr: [
          "Un code robuste et testé est la base de toute solution durable",
          "La performance au service de l'expérience, pas de la complexité",
          "Une solution n'est complète que si elle est compréhensible et maintenable"
        ]
      },
      icon: "ShieldCheck",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=300&fit=crop",
      caseStudy: {
        en: "Developed an automation script that reduced data processing time by 80% for a client.",
        fr: "Développé un script d'automatisation qui a réduit le temps de traitement des données de 80% pour un client."
      }
    },
    {
      title: {
        en: "Intelligent Automation",
        fr: "Automatisation Intelligente"
      },
      description: {
        en: "I use automation and AI not just to optimize processes, but to simplify lives. Technology should fade into the background, creating intuitive and frictionless experiences.",
        fr: "J'utilise l'automatisation et l'IA non seulement pour optimiser les processus, mais pour simplifier des vies. La technologie doit s'effacer au profit de l'expérience, en créant des interactions intuitives et sans friction."
      },
      principles: {
        en: [
          "Automation should reduce mental load, not increase it",
          "AI as a tool to augment human capabilities, not replace them",
          "Simplicity of use hides controlled complexity"
        ],
        fr: [
          "L'automatisation doit réduire la charge mentale, pas l'augmenter",
          "L'IA comme outil pour augmenter les capacités humaines, pas les remplacer",
          "La simplicité d'usage cache une complexité maîtrisée"
        ]
      },
      icon: "Bot",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop",
      caseStudy: {
        en: "Designed a chatbot using NLP to handle 70% of customer support queries, freeing up the team for high-value tasks.",
        fr: "Conçu un chatbot utilisant le NLP pour traiter 70% des requêtes de support client, libérant l'équipe pour des tâches à plus haute valeur ajoutée."
      }
    },
    {
      title: {
        en: "Future Tech & Trust",
        fr: "Technologie d'Avenir & Confiance"
      },
      description: {
        en: "I am actively exploring emerging technologies like blockchain to build more transparent, secure, and decentralized systems. For me, security is not an option, but a promise.",
        fr: "J'explore activement les technologies émergentes comme la blockchain pour construire des systèmes plus transparents, sécurisés et décentralisés. Pour moi, la sécurité n'est pas une option, c'est une promesse."
      },
      principles: {
        en: [
          "Exploring new tech frontiers (blockchain, Web3)",
          "Decentralization for more transparency and user control",
          "Proactively anticipating future security challenges"
        ],
        fr: [
          "Explorer les nouvelles frontières technologiques (blockchain, Web3)",
          "La décentralisation pour plus de transparence et de contrôle utilisateur",
          "Anticiper proactivement les futurs enjeux de sécurité"
        ]
      },
      icon: "Blocks",
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1642139564264-7c6999a383d6?w=400&h=300&fit=crop",
      caseStudy: {
        en: "Developed a proof-of-concept for a decentralized voting system on a private blockchain to ensure data integrity.",
        fr: "Développé une preuve de concept pour un système de vote décentralisé sur une blockchain privée pour garantir l'intégrité des données."
      }
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-surface via-white to-accent-50">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group cursor-pointer transition-all duration-500 ${
                activeCard === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveCard(index)}
            >
              <div className="bg-white rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-500 overflow-hidden h-full">
                {/* Card Header */}
                <div className="relative overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${card.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src={card.image}
                        alt={card.title[currentLanguage]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Icon name={card.icon} size={32} color="white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {card.title[currentLanguage]}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {card.description[currentLanguage]}
                  </p>

                  {/* Principles List */}
                  <div className="space-y-3 mb-6">
                    {card.principles[currentLanguage].map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-text-primary">{principle}</p>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className={`transition-all duration-500 ${
                    activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="border-t border-secondary-200 pt-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Lightbulb" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
                            Case Study
                          </p>
                          <p className="text-sm text-text-primary">
                            {card.caseStudy[currentLanguage]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-center">
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${
                      activeCard === index ? 'bg-accent' : 'bg-secondary-200'
                    }`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-subtle p-8 max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-accent mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-light text-primary leading-relaxed mb-6">
              {currentLanguage === 'en' 
                ? constants.citation_en
                : constants.citation_fr
              }
            </blockquote>
            <cite className="text-text-secondary font-medium">
              - {constants.name}, Ingénieur en Informatique
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;