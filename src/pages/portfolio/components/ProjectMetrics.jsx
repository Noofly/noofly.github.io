import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectMetrics = ({ projects }) => {
  const calculateAverageMetric = (metricKey) => {
    const validProjects = projects.filter(project => project.metrics && typeof project.metrics[metricKey] === 'number');
    if (validProjects.length === 0) return null;
    const total = validProjects.reduce((sum, project) => sum + project.metrics[metricKey], 0);
    return Math.round(total / validProjects.length);
  };

  const getTotalTechnologies = () => {
    const allTechs = projects.flatMap(project => project.technologies);
    return new Set(allTechs).size;
  };

  const getFeaturedCount = () => {
    return projects.filter(project => project.featured).length;
  };

  const metrics = [
    {
      label: 'Avg Performance',
      value: calculateAverageMetric('performance'),
      icon: 'Zap',
      color: 'success'
    },
    {
      label: 'Avg Accessibility',
      value: calculateAverageMetric('accessibility'),
      icon: 'Users',
      color: 'accent'
    },
    {
      label: 'Technologies',
      value: getTotalTechnologies(),
      icon: 'Code2',
      color: 'secondary'
    },
    {
      label: 'Featured',
      value: getFeaturedCount(),
      icon: 'Star',
      color: 'cta'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'text-success-600 bg-success-50',
      accent: 'text-accent-600 bg-accent-50',
      secondary: 'text-secondary-600 bg-secondary-50',
      cta: 'text-cta-600 bg-cta-50'
    };
    return colorMap[color] || 'text-text-primary bg-surface';
  };

  return (
    <div className="flex items-center space-x-6">
      {metrics.filter(metric => metric.value !== null).map((metric, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(metric.color)}`}>
            <Icon name={metric.icon} size={16} />
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary">{metric.value}</div>
            <div className="text-xs text-text-secondary">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMetrics;