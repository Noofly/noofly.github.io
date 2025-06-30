import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophyInAction = ({ currentLanguage }) => {
  const [activeValue, setActiveValue] = useState(null);

  const content = {
    en: {
      values: [
        {
          id: 'solution-code',
          title: 'The Solution Through Code',
          icon: 'ShieldCheck',
          description: 'My goal is to build solutions that are robust, simple, and efficient—always grounded in practical use.',
          examples: [
            'Reliable, clear, and tested code is the foundation of any sustainable solution.',
            'Performance should serve the user experience, not add unnecessary complexity.',
            `A solution is only complete if it's understandable and maintainable over time.`
          ],
          color: 'accent'
        },
        {
          id: 'intelligent-automation',
          title: 'Intelligent Automation',
          icon: 'Bot',
          description: 'I use automation and artificial intelligence to streamline processes, reduce mental load, and boost efficiency. I believe the best technology is the kind that quietly enhances the experience.',
          examples: [
            'Automation should simplify, not overwhelm.',
            'AI is a tool to augment human abilities, not replace them.',
            'Behind a simple interface lies a well-structured and reliable system.'
          ],
          color: 'cta'
        },
        {
          id: 'future-tech-trust',
          title: 'Future Tech & Trust',
          icon: 'Blocks',
          description: `I actively explore emerging technologies like blockchain to build systems that are more transparent, secure, and resilient. Security isn't a feature—it's a promise, built from the ground up.`,
          examples: [
            'Explore emerging technologies like blockchain and Web3 to push current boundaries.',
            'Use decentralization to promote transparency and empower users.',
            'Proactively anticipate future security challenges.'
          ],
          color: 'success'
        }
      ],
      summaryTitle: "A Pragmatic, Results-Driven Approach",
      summaryText: `My work is guided by a simple principle: using technology purposefully to meet real-world needs. Every project is an opportunity to design reliable, understandable, and sustainable solutions—where functional clarity meets technical precision.`
    },
    fr: {
      values: [
        {
          id: 'solution-code',
          title: 'La Solution par le Code',
          icon: 'ShieldCheck',
          description: 'Mon objectif est de développer des solutions à la fois robustes, simples et efficaces, en restant toujours connecté aux besoins réels du terrain.',
          examples: [
            'Un code fiable, clair et testé : la base de toute solution durable.',
            `La performance doit améliorer l'expérience, pas ajouter de complexité.`,
            `Une solution n'est complète que si elle est compréhensible et maintenable sur le long terme.`
          ],
          color: 'accent'
        },
        {
          id: 'intelligent-automation',
          title: 'Automatisation Intelligente',
          icon: 'Bot',
          description: `J'utilise l'automatisation et l'intelligence artificielle pour alléger les processus, réduire la charge mentale et améliorer l'efficacité. Pour moi, la technologie réussie est celle qui s'efface au profit de l'expérience.`,
          examples: [
            `L'automatisation doit libérer du temps, pas ajouter de complexité.`,
            `L'IA est là pour épauler l'humain, pas le remplacer.`,
            `Derrière une interface simple, une architecture maîtrisée et fiable.`
          ],
          color: 'cta'
        },
        {
          id: 'future-tech-trust',
          title: `Technologie d'Avenir & Confiance`,
          icon: 'Blocks',
          description: `J'explore activement des technologies comme la blockchain pour concevoir des systèmes plus transparents, sécurisés et résilients. La sécurité n'est pas un bonus : c'est une promesse à tenir, dès la conception.`,
          examples: [
            'Explorer les technologies émergentes comme la blockchain et le Web3 pour repousser les limites actuelles.',
            `Mettre la décentralisation au service de la transparence et de l'autonomie des utilisateurs.`,
            'Anticiper proactivement les futurs enjeux de sécurité.'
          ],
          color: 'success'
        }
      ],
      summaryTitle: "Une Approche Pragmatique et Orientée Résultats",
      summaryText: `Ma manière de travailler repose sur une idée simple : utiliser la technologie de façon pertinente pour répondre à des besoins réels.\nChaque projet est l'occasion de concevoir des solutions fiables, compréhensibles et durables, en alliant clarté fonctionnelle et rigueur technique.`
    }
  };

  const handleValueClick = (valueId) => {
    setActiveValue(activeValue === valueId ? null : valueId);
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentContent.values.map((value) => (
          <div
            key={value.id}
            className={`relative bg-white rounded-2xl shadow-subtle border border-secondary-200 p-8 cursor-pointer transition-all duration-500 hover:shadow-elevated ${
              activeValue === value.id ? 'ring-2 ring-accent ring-opacity-50 transform scale-105' : ''
            }`}
            onClick={() => handleValueClick(value.id)}
          >
            {/* Value Header */}
            <div className="flex items-start space-x-4 mb-6">
              <div className={`w-12 h-12 bg-${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={value.icon} size={24} color="white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
              <div className={`transform transition-transform duration-300 ${
                activeValue === value.id ? 'rotate-180' : ''
              }`}>
                <Icon name="ChevronDown" size={20} color="var(--color-text-secondary)" />
              </div>
            </div>

            {/* Expandable Examples */}
            <div className={`overflow-hidden transition-all duration-500 ${
              activeValue === value.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-secondary-200 pt-6">
                <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Examples in Practice' : 'Exemples en Pratique'}
                </h4>
                <div className="space-y-3">
                  {value.examples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-${value.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <p className="text-text-secondary text-sm leading-relaxed">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeValue === value.id ? `bg-${value.color} animate-pulse` : 'bg-secondary-300'
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Summary */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            {currentContent.summaryTitle}
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {currentContent.summaryText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyInAction;