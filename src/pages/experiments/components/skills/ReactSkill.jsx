import React, { useState } from 'react';
import Icon from '../../../../components/AppIcon';
import CodePreview from '../CodePreview';

const ReactSkill = ({ skill, currentLanguage }) => {
  const [reactState, setReactState] = useState({
    count: 0,
    text: 'Hello World',
    isVisible: true,
  });

  const code = () => `// Component State
const [state, setState] = useState({
  count: ${reactState.count},
  text: "${reactState.text}",
  isVisible: ${reactState.isVisible.toString()}
});`;

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
            <label className="block text-sm font-medium text-text-primary mb-2">
              {currentLanguage === 'en' ? 'Counter' : 'Compteur'}
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setReactState({ ...reactState, count: reactState.count - 1 })}
                className="w-10 h-10 bg-accent text-white rounded-lg hover:bg-accent-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Icon name="Minus" size={16} />
              </button>
              <span className="text-2xl font-bold text-primary min-w-12 text-center">{reactState.count}</span>
              <button
                onClick={() => setReactState({ ...reactState, count: reactState.count + 1 })}
                className="w-10 h-10 bg-accent text-white rounded-lg hover:bg-accent-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {currentLanguage === 'en' ? 'Text Input' : 'Saisie de Texte'}
            </label>
            <input
              type="text"
              value={reactState.text}
              onChange={(e) => setReactState({ ...reactState, text: e.target.value })}
              className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder={currentLanguage === 'en' ? 'Enter text...' : 'Entrez du texte...'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {currentLanguage === 'en' ? 'Visibility' : 'Visibilité'}
            </label>
            <button
              onClick={() => setReactState({ ...reactState, isVisible: !reactState.isVisible })}
              className={`w-full px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                reactState.isVisible
                  ? 'bg-success text-white hover:bg-success-700'
                  : 'bg-secondary-300 text-text-primary hover:bg-secondary-400'
              }`}
            >
              {reactState.isVisible
                ? (currentLanguage === 'en' ? 'Visible' : 'Visible')
                : (currentLanguage === 'en' ? 'Hidden' : 'Caché')}
            </button>
          </div>
        </div>
      </div>
      {/* Right Column: Preview and Code */}
      <div>
        <div className="bg-secondary-100 rounded-lg p-8 flex items-center justify-center min-h-[150px] mb-4">
          {reactState.isVisible && (
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-4">{reactState.count}</div>
              <div className="text-xl text-text-secondary">{reactState.text}</div>
            </div>
          )}
        </div>
        <CodePreview code={code()} language="jsx" />
      </div>
    </div>
  );
};

export default ReactSkill; 