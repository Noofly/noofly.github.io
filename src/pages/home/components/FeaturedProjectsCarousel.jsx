import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { getFeaturedProjects } from '../../../data/projects';

const FeaturedProjectsCarousel = ({ currentLanguage }) => {
  const [activeProject, setActiveProject] = useState(0);
  const autoScrollRef = useRef();
  const navigate = useNavigate();

  const projects = getFeaturedProjects().map(project => ({
    id: project.id,
    title: project.title[currentLanguage],
    category: project.type[currentLanguage],
    description: project.shortDescription[currentLanguage],
    image: project.thumbnail,
    techStack: project.technologies,
    metrics: project.metrics.carousel,
    liveUrl: project.liveUrl,
    githubUrl: '#'
  }));

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-scroll every 6.5 seconds
  useEffect(() => {
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    autoScrollRef.current = setTimeout(() => {
      nextProject();
    }, 6000);
    return () => clearTimeout(autoScrollRef.current);
  }, [activeProject, projects.length]);

  // Reset timer on manual change
  const handleManualChange = (index) => {
    setActiveProject(index);
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
  };

  const currentProject = projects[activeProject];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Project Display */}
      <div className="bg-white rounded-2xl shadow-elevated border border-secondary-200 overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Project Image */}
          <div className="relative overflow-hidden group" style={{ cursor: 'pointer' }} onClick={() => navigate(`/portfolio/${currentProject.id}`)}>
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Project Details */}
          <div className="p-8 lg:p-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent-100 text-accent text-sm font-medium rounded-full mb-3">
                {currentProject.category}
              </span>
              <h3 className="text-3xl font-bold text-primary mb-4">{currentProject.title}</h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-6 whitespace-pre-line">
                {currentProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                {currentLanguage === 'en' ? 'Tech Stack' : 'Stack Technique'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary-100 text-text-primary text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {currentProject.metrics && Object.keys(currentProject.metrics).length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(currentProject.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-xs text-text-secondary capitalize">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Link
                to={`/portfolio/${currentProject.id}`}
                className="btn-primary flex items-center space-x-2"
              >
                <Icon name="Eye" size={18} />
                <span>{currentLanguage === 'en' ? 'View Details' : 'Voir Détails'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        {/* Previous/Next Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => { prevProject(); if (autoScrollRef.current) clearTimeout(autoScrollRef.current); }}
            className="w-12 h-12 bg-white border border-secondary-300 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={() => { nextProject(); if (autoScrollRef.current) clearTimeout(autoScrollRef.current); }}
            className="w-12 h-12 bg-white border border-secondary-300 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject ? 'bg-accent' : 'bg-secondary-500 hover:bg-secondary-600'
              }`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-text-secondary text-sm">
          {activeProject + 1} / {projects.length}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsCarousel;