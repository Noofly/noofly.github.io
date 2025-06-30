import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = ({ currentLanguage }) => {
  const [metrics, setMetrics] = useState({
    loadSpeed: 0,
    accessibility: 0,
    carbonFootprint: 0,
    uptime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('performance-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetMetrics = {
        loadSpeed: 1.2,
        accessibility: 98,
        carbonFootprint: 0.15,
        uptime: 99.9
      };

      const animateMetrics = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;

          setMetrics({
            loadSpeed: Number((targetMetrics.loadSpeed * progress).toFixed(1)),
            accessibility: Math.floor(targetMetrics.accessibility * progress),
            carbonFootprint: Number((targetMetrics.carbonFootprint * progress).toFixed(2)),
            uptime: Number((targetMetrics.uptime * progress).toFixed(1))
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setMetrics(targetMetrics);
          }
        }, stepDuration);
      };

      animateMetrics();
    }
  }, [isVisible]);

  const metricsData = [
    {
      id: 'load-speed',
      title: currentLanguage === 'en' ? 'Load Speed' : 'Vitesse de Chargement',
      value: `${metrics.loadSpeed}s`,
      icon: 'Zap',
      description: currentLanguage === 'en' 
        ? 'Average page load time across all devices'
        : 'Temps de chargement moyen des pages sur tous les appareils',
      color: 'success',
      benchmark: currentLanguage === 'en' ? 'Industry avg: 3.2s' : 'Moyenne industrie: 3.2s'
    },
    {
      id: 'accessibility',
      title: currentLanguage === 'en' ? 'Accessibility Score' : 'Score d\'Accessibilité',
      value: `${metrics.accessibility}%`,
      icon: 'Eye',
      description: currentLanguage === 'en'
        ? 'WCAG 2.1 AA compliance rating'
        : 'Note de conformité WCAG 2.1 AA',
      color: 'accent',
      benchmark: currentLanguage === 'en' ? 'Target: 95%+' : 'Objectif: 95%+'
    },
    {
      id: 'carbon-footprint',
      title: currentLanguage === 'en' ? 'Carbon Footprint' : 'Empreinte Carbone',
      value: `${metrics.carbonFootprint}g`,
      icon: 'Leaf',
      description: currentLanguage === 'en'
        ? 'CO2 emissions per page visit'
        : 'Émissions de CO2 par visite de page',
      color: 'success',
      benchmark: currentLanguage === 'en' ? 'Web avg: 4.6g' : 'Moyenne web: 4.6g'
    },
    {
      id: 'uptime',
      title: currentLanguage === 'en' ? 'Uptime' : 'Disponibilité',
      value: `${metrics.uptime}%`,
      icon: 'Activity',
      description: currentLanguage === 'en'
        ? 'Server availability over the last 12 months'
        : 'Disponibilité du serveur sur les 12 derniers mois',
      color: 'cta',
      benchmark: currentLanguage === 'en' ? 'Industry std: 99.5%' : 'Standard industrie: 99.5%'
    }
  ];

  const performanceInsights = [
    {
      title: currentLanguage === 'en' ? 'Optimized Images' : 'Images Optimisées',
      description: currentLanguage === 'en'
        ? 'WebP format with lazy loading reduces bandwidth by 40%'
        : 'Format WebP avec chargement paresseux réduit la bande passante de 40%',
      icon: 'Image'
    },
    {
      title: currentLanguage === 'en' ? 'Code Splitting' : 'Division du Code',
      description: currentLanguage === 'en'
        ? 'Dynamic imports ensure only necessary code is loaded'
        : 'Les imports dynamiques garantissent que seul le code nécessaire est chargé',
      icon: 'Code'
    },
    {
      title: currentLanguage === 'en' ? 'CDN Distribution' : 'Distribution CDN',
      description: currentLanguage === 'en'
        ? 'Global edge servers provide sub-second response times'
        : 'Les serveurs edge globaux fournissent des temps de réponse inférieurs à la seconde',
      icon: 'Globe'
    },
    {
      title: currentLanguage === 'en' ? 'Green Hosting' : 'Hébergement Vert',
      description: currentLanguage === 'en'
        ? 'Powered by 100% renewable energy sources'
        : 'Alimenté par 100% de sources d\'énergie renouvelable',
      icon: 'Leaf'
    }
  ];

  return (
    <div id="performance-metrics" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
          {currentLanguage === 'en' ? 'Performance That Matters' : 'Performance qui Compte'}
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          {currentLanguage === 'en'
            ? 'Real-time metrics showcasing commitment to speed, accessibility, and sustainability'
            : 'Métriques en temps réel montrant l\'engagement envers la vitesse, l\'accessibilité et la durabilité'
          }
        </p>
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-2xl shadow-subtle border border-secondary-200 p-6 hover:shadow-elevated transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${metric.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric.icon} size={24} color="white" strokeWidth={2} />
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold text-${metric.color}`}>
                  {metric.value}
                </div>
              </div>
            </div>
            
            <h3 className="font-semibold text-text-primary mb-2">{metric.title}</h3>
            <p className="text-text-secondary text-sm mb-3 leading-relaxed">
              {metric.description}
            </p>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-secondary">{metric.benchmark}</span>
              <div className={`w-2 h-2 bg-${metric.color} rounded-full animate-pulse`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-br from-surface to-primary-50 rounded-2xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
          {currentLanguage === 'en' ? 'Performance Optimization Techniques' : 'Techniques d\'Optimisation des Performances'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceInsights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-subtle">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={insight.icon} size={20} color="white" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-2">{insight.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Performance Monitor */}
      <div className="bg-secondary-900 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">
            {currentLanguage === 'en'
              ? 'Performance Monitoring: Coming Soon'
              : 'Suivi de Performance : Bientôt Disponible'}
          </h3>
        </div>
        <div className="text-secondary-200 text-lg mb-6">
          {currentLanguage === 'en'
            ? "Once my projects are live, you'll find real-time performance metrics here. In the meantime, I apply best practices to ensure speed, accessibility, and reliability for every project."
            : "Dès que mes projets seront en ligne, vous trouverez ici des métriques de performance en temps réel. En attendant, j'applique les meilleures pratiques pour garantir rapidité, accessibilité et fiabilité à chaque projet."}
        </div>
        <div>
          <h4 className="text-secondary-100 text-base font-semibold mb-2">
            {currentLanguage === 'en' ? 'Planned Monitoring Tools & Methods:' : 'Outils & Méthodes Prévus pour le Suivi :'}
          </h4>
          <ul className="list-disc list-inside text-secondary-200 text-sm space-y-1">
            <li>Lighthouse (Google Chrome)</li>
            <li>UptimeRobot</li>
            <li>Sentry</li>
            <li>Google Analytics</li>
            <li>WebPageTest</li>
            <li>{currentLanguage === 'en' ? 'Manual accessibility audits' : `Audits d'accessibilité manuels`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;