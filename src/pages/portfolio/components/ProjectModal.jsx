import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { useLanguage } from '../../../components/LanguageContext';
import ArchitectureDiagram from "./ArchitectureDiagram";

const ProjectModal = ({ project, onClose, initialTab = 'overview' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const { currentLanguage } = useLanguage();

  const t = {
    tabs: {
      overview: { en: 'Overview', fr: 'Aperçu' },
      caseStudy: { en: 'Case Study', fr: 'Étude de cas' },
      technical: { en: 'Technical Details', fr: 'Détails techniques' },
      results: { en: 'Results & Impact', fr: 'Impact & Résultats' },
    },
    projectOverview: { en: 'Project Overview', fr: 'Aperçu du projet' },
    technologiesUsed: { en: 'Technologies Used', fr: 'Technologies utilisées' },
    viewLiveSite: { en: 'View Live Site', fr: 'Voir le site' },
    shareProject: { en: 'Share Project', fr: 'Partager le projet' },
    performanceMetrics: { en: 'Performance Metrics', fr: 'Indicateurs de performance' },
    projectDetails: { en: 'Project Details', fr: 'Détails du projet' },
    client: { en: 'Client', fr: 'Client' },
    timeline: { en: 'Timeline', fr: 'Durée' },
    industry: { en: 'Industry', fr: 'Domaine' },
    complexity: { en: 'Complexity', fr: 'Complexité' },
    high: { en: 'High', fr: 'Élevée' },
    medium: { en: 'Medium', fr: 'Moyenne' },
    low: { en: 'Low', fr: 'Faible' },
    results: { en: 'Results', fr: 'Résultats' },
    seo: { en: 'SEO', fr: 'SEO' },
    accessibility: { en: 'Accessibility', fr: 'Accessibilité' },
    performance: { en: 'Performance', fr: 'Performance' },
    featured: { en: 'Featured', fr: 'Mis en avant' },
    complexityLabel: { en: 'Complexity', fr: 'Complexité' },
    challenge: { en: 'The Challenge', fr: 'Le défi' },
    solution: { en: 'The Solution', fr: 'La solution' },
    resultsTitle: { en: 'The Results', fr: 'Les résultats' },
    testimonial: { en: 'Client Testimonial', fr: 'Témoignage client' },
    lessons: { en: 'Lessons Learned', fr: 'Leçons retenues' },
    technicalArch: { en: 'Technical Architecture', fr: 'Architecture technique' },
    interactiveArch: { en: 'Interactive Architecture Diagram', fr: `Diagramme interactif d'architecture` },
    clickToExplore: { en: 'Click on different components to explore the technical architecture', fr: 'Cliquez sur les différents composants pour explorer l\'architecture technique' },
    frontend: { en: 'Frontend Technologies', fr: 'Technologies Frontend' },
    backend: { en: 'Backend & Infrastructure', fr: 'Backend & Infrastructure' },
    resultsImpact: { en: 'Results & Business Impact', fr: 'Résultats & Impact métier' },
    perfScore: { en: 'Performance Score', fr: 'Score de performance' },
    accessScore: { en: 'Accessibility Score', fr: `Score d'accessibilité` },
    seoScore: { en: 'SEO Score', fr: 'Score SEO' },
    businessImpact: { en: 'Business Impact', fr: 'Impact métier' },
  };

  const hasResultsTab = project.metrics && (
    project.metrics.performance ||
    project.metrics.accessibility ||
    project.metrics.seo ||
    (project.metrics.businessImpact && (project.metrics.businessImpact.en || project.metrics.businessImpact.fr))
  );

  const tabs = [
    { id: 'overview', label: t.tabs.overview[currentLanguage], icon: 'Eye' },
    { id: 'case-study', label: t.tabs.caseStudy[currentLanguage], icon: 'FileText' },
    { id: 'technical', label: t.tabs.technical[currentLanguage], icon: 'Code2' },
    ...(hasResultsTab ? [{ id: 'results', label: t.tabs.results[currentLanguage], icon: 'TrendingUp' }] : [])
  ];

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('id', project.id);
    const shareUrl = url.toString();
    const shareTitle = project.title[currentLanguage];
    const shareText = project.shortDescription ? project.shortDescription[currentLanguage] : '';

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      }).catch(() => {/* L'utilisateur a annulé, pas d'erreur à afficher */});
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(currentLanguage === 'fr' ? 'Lien du projet copié dans le presse-papiers !' : 'Project link copied to clipboard!');
    }
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <motion.div
        variants={contentVariants}
        className="relative bg-white rounded-2xl shadow-modal max-w-6xl w-full max-h-[98vh] h-[98vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (FIXED, always rendered) */}
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title[currentLanguage]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300"
          >
            <Icon name="X" size={20} />
          </button>
          {/* Project Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-3 mb-3">
              {project.featured && (
                <div className="bg-cta text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>{t.featured[currentLanguage]}</span>
                </div>
              )}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.complexity === 'high' 
                  ? 'bg-error-100 text-error-700' 
                  : project.complexity === 'medium'
                  ? 'bg-warning-100 text-warning-700'
                  : 'bg-success-100 text-success-700'
              }`}>
                {currentLanguage === 'fr'
                  ? `Complexité ${t[project.complexity][currentLanguage].toLowerCase()}`
                  : `${t[project.complexity][currentLanguage]} ${t.complexityLabel[currentLanguage]}`}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title[currentLanguage]}
            </h1>
            <p className="text-primary-100 text-lg">
              {project.type[currentLanguage]} • {project.industry[currentLanguage]} • {project.year}
            </p>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="border-b border-secondary-200 bg-white">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-accent border-b-2 border-accent bg-accent-50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-secondary-50'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Content Area (tabs) */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Description */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-text-primary mb-4">{t.projectOverview[currentLanguage]}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed whitespace-pre-line">
                    {project.description[currentLanguage]}
                  </p>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">{t.technologiesUsed[currentLanguage]}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Icon name="ExternalLink" size={16} />
                        <span>{t.viewLiveSite[currentLanguage]}</span>
                      </button>
                    )}
                    <button onClick={handleShare} className="px-6 py-3 border border-secondary-300 text-text-primary rounded-lg font-medium hover:bg-secondary-50 transition-colors duration-300 flex items-center space-x-2">
                      <Icon name="Share2" size={16} />
                      <span>{t.shareProject[currentLanguage]}</span>
                    </button>
                  </div>
                </div>
                {/* Project Details Sidebar */}
                <div className="space-y-6">
                  {/* Metrics */}
                  {(project.metrics && (project.metrics.performance || project.metrics.accessibility || project.metrics.seo)) && (
                    <div className="bg-surface p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-4">{t.performanceMetrics[currentLanguage]}</h4>
                      <div className="space-y-3">
                        {project.metrics.performance && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-secondary">{t.performance[currentLanguage]}</span>
                            <span className="font-bold text-success-600">{project.metrics.performance}</span>
                          </div>
                        )}
                        {project.metrics.accessibility && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-secondary">{t.accessibility[currentLanguage]}</span>
                            <span className="font-bold text-accent-600">{project.metrics.accessibility}</span>
                          </div>
                        )}
                        {project.metrics.seo && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-secondary">{t.seo[currentLanguage]}</span>
                            <span className="font-bold text-warning-600">{project.metrics.seo}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {/* Project Info */}
                  <div className="bg-surface p-4 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-4">{t.projectDetails[currentLanguage]}</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-text-secondary block">{t.client[currentLanguage]}</span>
                        <span className="font-medium text-text-primary">
                          {typeof project.client === 'object' && project.client[currentLanguage]
                            ? project.client[currentLanguage]
                            : project.client === 'Projet personnel' || project.client === 'Personal project'
                              ? (currentLanguage === 'fr' ? 'Projet personnel' : 'Personal project')
                              : project.client}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary block">{t.timeline[currentLanguage]}</span>
                        <span className="font-medium text-text-primary">
                          {(() => {
                            if (typeof project.timeline === 'object' && project.timeline[currentLanguage]) {
                              return project.timeline[currentLanguage];
                            }
                            // FR : garder l'affichage d'origine
                            if (currentLanguage === 'fr') return project.timeline;
                            // EN : parser nombre + unité
                            const regex = /([0-9]+)\s*(jour|jours|semaine|semaines|mois|an|ans)/i;
                            const match = typeof project.timeline === 'string' && project.timeline.match(regex);
                            if (match) {
                              const n = parseInt(match[1], 10);
                              const unit = match[2].toLowerCase();
                              let enUnit = '';
                              if (unit.startsWith('jour')) enUnit = n > 1 ? 'Days' : 'Day';
                              else if (unit.startsWith('semaine')) enUnit = n > 1 ? 'Weeks' : 'Week';
                              else if (unit === 'mois') enUnit = n > 1 ? 'Months' : 'Month';
                              else if (unit.startsWith('an')) enUnit = n > 1 ? 'Years' : 'Year';
                              else enUnit = unit;
                              return `${n} ${enUnit}`;
                            }
                            // fallback
                            return project.timeline;
                          })()}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary block">{t.industry[currentLanguage]}</span>
                        <span className="font-medium text-text-primary">{project.industry[currentLanguage]}</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary block">{t.complexity[currentLanguage]}</span>
                        <span className="font-medium text-text-primary">
                          {currentLanguage === 'fr'
                            ? `Complexité ${t[project.complexity][currentLanguage].toLowerCase()}`
                            : `${t[project.complexity][currentLanguage]} ${t.complexityLabel[currentLanguage]}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case-study' && (
            <div className="p-6">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Problem Statement */}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="AlertCircle" size={24} color="var(--color-error-600)" />
                    <span>{t.challenge[currentLanguage]}</span>
                  </h3>
                  <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {project.caseStudy.problem[currentLanguage]}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Lightbulb" size={24} color="var(--color-warning-600)" />
                    <span>{t.solution[currentLanguage]}</span>
                  </h3>
                  <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {project.caseStudy.solution[currentLanguage]}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="TrendingUp" size={24} color="var(--color-success-600)" />
                    <span>{t.resultsTitle[currentLanguage]}</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-success-50 p-4 rounded-lg">
                        <Icon name="CheckCircle" size={20} color="var(--color-success-600)" className="mt-0.5" />
                        <span className="text-success-800 font-medium">{result[currentLanguage]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {project.caseStudy.testimonial && project.caseStudy.testimonial.text && project.caseStudy.testimonial.text[currentLanguage] && (
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-text-primary mb-4">{t.testimonial[currentLanguage]}</h3>
                    <blockquote className="text-text-secondary italic mb-4 text-lg">
                      "{project.caseStudy.testimonial.text[currentLanguage]}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} color="white" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">{project.caseStudy.testimonial.author}</div>
                        <div className="text-sm text-text-secondary">{project.caseStudy.testimonial.position && project.caseStudy.testimonial.position[currentLanguage]}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lessons Learned */}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="BookOpen" size={24} color="var(--color-accent-600)" />
                    <span>{t.lessons[currentLanguage]}</span>
                  </h3>
                  <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {project.caseStudy.lessonsLearned[currentLanguage]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="p-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-text-primary mb-6">{t.technicalArch[currentLanguage]}</h3>
                {project.architectureDiagram && (
                  <ArchitectureDiagram diagramData={project.architectureDiagram} />
                )}
                {project.technicalDetails && project.technicalDetails[currentLanguage] ? (
                  <TechnicalDetailsCards markdown={project.technicalDetails[currentLanguage]} />
                ) : (
                  <div className="bg-secondary-50 border-2 border-dashed border-secondary-300 rounded-lg p-8 mb-8 text-center">
                    <Icon name="Cpu" size={48} color="var(--color-secondary-500)" className="mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-text-primary mb-2">{t.interactiveArch[currentLanguage]}</h4>
                    <p className="text-text-secondary">
                      {t.clickToExplore[currentLanguage]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Onglet results affiché seulement si présent dans tabs */}
          {hasResultsTab && activeTab === 'results' && (
            <div className="p-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-text-primary mb-6">{t.resultsImpact[currentLanguage]}</h3>
                {/* Key Metrics */}
                {(project.metrics && (project.metrics.performance || project.metrics.accessibility || project.metrics.seo)) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.metrics.performance && (
                      <div className="text-center p-6 bg-success-50 rounded-lg">
                        <div className="text-3xl font-bold text-success-600 mb-2">{project.metrics.performance}</div>
                        <div className="text-sm font-medium text-success-800">{t.perfScore[currentLanguage]}</div>
                      </div>
                    )}
                    {project.metrics.accessibility && (
                      <div className="text-center p-6 bg-accent-50 rounded-lg">
                        <div className="text-3xl font-bold text-accent-600 mb-2">{project.metrics.accessibility}</div>
                        <div className="text-sm font-medium text-accent-800">{t.accessScore[currentLanguage]}</div>
                      </div>
                    )}
                    {project.metrics.seo && (
                      <div className="text-center p-6 bg-warning-50 rounded-lg">
                        <div className="text-3xl font-bold text-warning-600 mb-2">{project.metrics.seo}</div>
                        <div className="text-sm font-medium text-warning-800">{t.seoScore[currentLanguage]}</div>
                      </div>
                    )}
                  </div>
                )}
                {/* Business Impact */}
                {project.metrics && project.metrics.businessImpact && project.metrics.businessImpact[currentLanguage] && (
                  <div className="bg-cta-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} color="var(--color-cta)" />
                      <span>{t.businessImpact[currentLanguage]}</span>
                    </h4>
                    <p className="text-lg font-semibold text-cta-700">
                      {project.metrics.businessImpact[currentLanguage]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

function TechnicalDetailsCards({ markdown }) {
  // Découpe le markdown en sections par titres (## ou **Titre** :)
  const sections = markdown.split(/\n(?=\*\*|##)/g).map(block => block.trim()).filter(Boolean);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {sections.map((section, idx) => {
        // Récupère le titre et le contenu
        const match = section.match(/^\*\*(.*?)\*\*\s*:?\s*\n?([\s\S]*)/);
        const title = match ? match[1].trim() : '';
        let content = match ? match[2].trim() : section;
        // Supprime les tirets en début de ligne et espaces inutiles
        content = content.replace(/^\s*-\s?/gm, '').trim();
        // Affiche chaque section dans une carte
        return (
          <div key={idx} className="bg-secondary-50 rounded-lg p-6">
            {title && <h4 className="text-lg font-semibold text-text-primary mb-2">{title}</h4>}
            <div className="text-text-secondary whitespace-pre-line">{content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectModal;