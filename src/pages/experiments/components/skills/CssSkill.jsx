import React, { useState } from 'react';
import Icon from '../../../../components/AppIcon';
import CodePreview from '../CodePreview';

const CssSkill = ({ skill, currentLanguage }) => {
  const [cssProperties, setCssProperties] = useState({
    duration: 2,
    scale: 1.2,
    rotation: 360,
    color: '#3182ce',
  });

  const code = () => `.animated-element {
  animation: spin ${cssProperties.duration}s linear infinite;
  transform: scale(${cssProperties.scale}) rotate(${cssProperties.rotation}deg);
  background-color: ${cssProperties.color};
}`;

  const description =
    currentLanguage === 'en'
      ? 'Experiment with CSS properties to create live animations. The code updates as you adjust the controls.'
      : 'Expérimentez avec les propriétés CSS pour créer des animations en direct. Le code se met à jour lorsque vous ajustez les contrôles.';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Column: Description and Controls */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-3">{skill.name}</h3>
        <p className="text-text-secondary mb-3 leading-relaxed">{skill.description}</p>
        <a
          href={skill.docUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-accent hover:underline mb-6"
        >
          {currentLanguage === 'en' ? 'Learn More' : 'En savoir plus'}
          <Icon name="ArrowRight" size={16} className="ml-1" />
        </a>
        
        {/* Controls */}
        <div className="space-y-4 mt-6">
          <h4 className="font-semibold text-text-primary">{currentLanguage === 'en' ? 'Controls' : 'Contrôles'}</h4>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">{currentLanguage === 'en' ? 'Duration (s)' : 'Durée (s)'}</label>
            <input type="range" min="0.5" max="5" step="0.1" value={cssProperties.duration} onChange={(e) => setCssProperties({ ...cssProperties, duration: parseFloat(e.target.value) })} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">{currentLanguage === 'en' ? 'Scale' : 'Échelle'}</label>
            <input type="range" min="0.5" max="2" step="0.1" value={cssProperties.scale} onChange={(e) => setCssProperties({ ...cssProperties, scale: parseFloat(e.target.value) })} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">{currentLanguage === 'en' ? 'Rotation (deg)' : 'Rotation (deg)'}</label>
            <input type="range" min="0" max="360" step="1" value={cssProperties.rotation} onChange={(e) => setCssProperties({ ...cssProperties, rotation: parseInt(e.target.value, 10) })} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">{currentLanguage === 'en' ? 'Color' : 'Couleur'}</label>
            <input type="color" value={cssProperties.color} onChange={(e) => setCssProperties({ ...cssProperties, color: e.target.value })} className="w-full h-10 p-1 border border-secondary-300 rounded-lg cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Right Column: Preview and Code */}
      <div>
        <div className="bg-secondary-100 rounded-lg p-8 flex items-center justify-center min-h-[150px] mb-4">
          <div
            className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold text-xl"
            style={{
              backgroundColor: cssProperties.color,
              animation: `spin ${cssProperties.duration}s linear infinite`,
              transform: `scale(${cssProperties.scale}) rotate(${cssProperties.rotation}deg)`,
            }}
          >
            CSS
          </div>
        </div>
        <CodePreview code={code()} language="css" />
      </div>
    </div>
  );
};

export default CssSkill; 