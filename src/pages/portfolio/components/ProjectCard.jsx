import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { useLanguage } from '../../../components/LanguageContext';

const ProjectCard = ({ project, index, onClick, onViewCaseStudy }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = {
    featured: { en: 'Featured', fr: 'Mis en avant' },
    performance: { en: 'Performance', fr: 'Performance' },
    accessibility: { en: 'Accessibility', fr: 'Accessibilité' },
    businessImpact: { en: 'Business Impact', fr: 'Impact métier' },
    viewCaseStudy: { en: 'View Case Study', fr: "Voir l'étude de cas" },
    liveDemo: { en: 'Live Demo', fr: 'Démo en ligne' },
    complexity: {
      high: { en: 'High', fr: 'Élevée' },
      medium: { en: 'Medium', fr: 'Moyenne' },
      low: { en: 'Low', fr: 'Faible' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-500 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <div className="bg-cta text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                <Icon name="Star" size={12} />
                <span>{t.featured[currentLanguage]}</span>
              </div>
            </div>
          )}

          {/* Live Preview Button */}
          <motion.div
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
              <Icon name="ExternalLink" size={20} color="var(--color-primary)" />
            </div>
          </motion.div>

          {/* Complexity Indicator */}
          <div className="absolute top-4 right-4">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.complexity === 'high' 
                ? 'bg-error-100 text-error-700' 
                : project.complexity === 'medium'
                ? 'bg-warning-100 text-warning-700'
                : 'bg-success-100 text-success-700'
            }`}>
              {t.complexity[project.complexity][currentLanguage]}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Project Title and Type */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title[currentLanguage]}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-accent bg-accent-50 px-3 py-1 rounded-full">
                {project.type[currentLanguage]}
              </span>
              <span className="text-sm text-text-secondary">
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {project.shortDescription[currentLanguage]}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md font-medium">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (project.metrics.performance || project.metrics.accessibility) && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {project.metrics.performance && (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Icon name="Zap" size={14} color="var(--color-success-600)" />
                    <span className="text-xs text-text-secondary">{t.performance[currentLanguage]}</span>
                  </div>
                  <div className="text-lg font-bold text-success-600">
                    {project.metrics.performance}
                  </div>
                </div>
              )}
              {project.metrics.accessibility && (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Icon name="Users" size={14} color="var(--color-accent-600)" />
                    <span className="text-xs text-text-secondary">{t.accessibility[currentLanguage]}</span>
                  </div>
                  <div className="text-lg font-bold text-accent-600">
                    {project.metrics.accessibility}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Business Impact */}
          {project.metrics && project.metrics.businessImpact && project.metrics.businessImpact[currentLanguage] && (
            <div className="bg-surface p-3 rounded-lg mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="TrendingUp" size={14} color="var(--color-cta)" />
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                  {t.businessImpact[currentLanguage]}
                </span>
              </div>
              <p className="text-sm font-semibold text-text-primary">
                {project.metrics.businessImpact[currentLanguage]}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              className="flex items-center space-x-2 text-accent hover:text-accent-700 font-medium text-sm transition-colors duration-300"
              onClick={e => {
                e.stopPropagation();
                if (onViewCaseStudy) onViewCaseStudy();
                else onClick();
              }}
            >
              <Icon name="Eye" size={16} />
              <span>{t.viewCaseStudy[currentLanguage]}</span>
            </button>
            
            {project.liveUrl && (
              <button 
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary font-medium text-sm transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <Icon name="ExternalLink" size={16} />
                <span>{t.liveDemo[currentLanguage]}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;