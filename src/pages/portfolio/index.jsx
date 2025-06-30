import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterBar from './components/FilterBar';
import ProjectMetrics from './components/ProjectMetrics';
import Footer from '../../components/ui/Footer';
import { projects } from '../../data/projects';
import { useLanguage } from '../../components/LanguageContext';
import { useLocation } from 'react-router-dom';

const CATEGORY_LABELS = {
  'web-app': { en: 'Web Applications', fr: 'Applications Web' },
  'mobile-app': { en: 'Mobile Apps', fr: 'Applications Mobiles' },
  'dashboard': { en: 'Dashboards', fr: 'Tableaux de Bord' },
  'website': { en: 'Websites', fr: 'Sites Web' },
  'bot-discord': { en: 'Discord Bots', fr: 'Bots Discord' },
  'bot-game': { en: 'Game Bots', fr: 'Bots Jeux Vidéo' },
  'desktop-app': { en: 'Software', fr: 'Logiciel' },
};

const getCategoryFilters = (projects, currentLanguage) => {
  const categories = Array.from(new Set(projects.map(p => p.category)));
  return [
    { value: 'all', label: currentLanguage === 'en' ? 'All Projects' : 'Tous les Projets', count: projects.length },
    ...categories.map(cat => ({
      value: cat,
      label: CATEGORY_LABELS[cat]?.[currentLanguage] || cat,
      count: projects.filter(p => p.category === cat).length
    }))
  ];
};

const PortfolioProjectUniverse = () => {
  const { currentLanguage } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [initialTab, setInitialTab] = useState('overview');
  const location = useLocation();

  const filterOptions = getCategoryFilters(projects, currentLanguage);

  const complexityOptions = [
    { value: 'all', label: currentLanguage === 'en' ? 'All Complexity' : 'Toutes Complexités' },
    { value: 'high', label: currentLanguage === 'en' ? 'High Complexity' : 'Haute Complexité' },
    { value: 'medium', label: currentLanguage === 'en' ? 'Medium Complexity' : 'Complexité Moyenne' },
    { value: 'low', label: currentLanguage === 'en' ? 'Low Complexity' : 'Faible Complexité' }
  ];

  const sortOptions = [
    { value: 'featured', label: currentLanguage === 'en' ? 'Featured First' : 'Mis en Avant' },
    { value: 'recent', label: currentLanguage === 'en' ? 'Most Recent' : 'Plus Récents' },
    { value: 'alphabetical', label: currentLanguage === 'en' ? 'Alphabetical' : 'Alphabétique' }
  ];

  // Filter and sort projects
  const filteredProjects = projects
    .filter(project => {
      const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter;
      const matchesSearch = project.title[currentLanguage].toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b.year - a.year;
        case 'featured': {
          // 1. Mis en avant d'abord
          if (b.featured !== a.featured) return b.featured - a.featured;
          // 2. Complexité décroissante
          const complexityOrder = { high: 3, medium: 2, low: 1 };
          const aComplexity = complexityOrder[a.complexity] || 0;
          const bComplexity = complexityOrder[b.complexity] || 0;
          if (bComplexity !== aComplexity) return bComplexity - aComplexity;
          // 3. Plus récent d'abord
          return b.year - a.year;
        }
        case 'alphabetical':
          return a.title[currentLanguage].localeCompare(b.title[currentLanguage]);
        default:
          return 0;
      }
    });

  const openProjectModal = (project, tab = 'overview') => {
    setSelectedProject(project);
    setInitialTab(tab);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Ouvre le modal si un id est présent dans l'URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    if (id) {
      const project = projects.find(p => String(p.id) === String(id));
      if (project) {
        setSelectedProject(project);
        setInitialTab('overview');
        setIsModalOpen(true);
      }
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-800 to-accent pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {currentLanguage === 'en' ? 'Project Universe' : 'Mes projets'}
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                {currentLanguage === 'en'
                  ? "Welcome to my portfolio! Here, you'll find a selection of work I'm passionate about: apps, custom tools, automation, and more. Each project started with a real need, a desire to learn, or the challenge of solving a problem. I enjoy designing and building practical solutions, always with the user experience in mind."
                  : "Bienvenue dans mon portfolio ! Ici, je partage les projets qui me tiennent à cœur : applications, outils sur-mesure, automatisations… Chaque projet est né d'un besoin concret, d'une envie d'apprendre ou de relever un défi technique. J'aime imaginer, concevoir et donner vie à des solutions utiles, en gardant toujours l'utilisateur au centre de mes priorités."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 text-primary-100"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Code2" size={20} />
                <span className="font-medium">{projects.length} {currentLanguage === 'en' ? 'Projects' : 'Projets'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} />
                <span className="font-medium">{projects.filter(p => p.featured).length} {currentLanguage === 'en' ? 'Featured' : 'Mis en Avant'}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-white border-b border-secondary-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <FilterBar
            filterOptions={filterOptions}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            sortOptions={sortOptions}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-primary">
                {currentLanguage === 'fr'
                  ? `${filteredProjects.length === 1 ? '1 projet trouvé' : filteredProjects.length + ' projets trouvés'}`
                  : `${filteredProjects.length} Project${filteredProjects.length !== 1 ? 's' : ''} Found`}
              </h2>
              <div className="hidden md:block">
                <ProjectMetrics projects={filteredProjects} />
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter + searchTerm + sortBy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => openProjectModal(project)}
                  onViewCaseStudy={() => openProjectModal(project, 'case-study')}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} color="var(--color-secondary-500)" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                {currentLanguage === 'en' ? 'No Projects Found' : 'Aucun Projet Trouvé'}
              </h3>
              <p className="text-text-secondary max-w-md mx-auto mb-8">
                {currentLanguage === 'en' 
                  ? "Try adjusting your search terms or filters to find the projects you're looking for."
                  : "Essayez d'ajuster vos termes de recherche ou filtres pour trouver les projets que vous recherchez."
                }
              </p>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                {currentLanguage === 'en' ? 'Clear All Filters' : 'Effacer Tous les Filtres'}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProjectModal}
            initialTab={initialTab}
          />
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioProjectUniverse;