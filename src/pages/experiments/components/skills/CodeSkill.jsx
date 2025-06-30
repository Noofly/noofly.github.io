import React, { useState, useEffect } from 'react';
import Icon from '../../../../components/AppIcon';
import CodePreview from '../CodePreview';

const CodeSkill = ({ skill, currentLanguage }) => {
  const [output, setOutput] = useState('');

  // Reset output when skill changes (i.e., when tab changes)
  useEffect(() => {
    setOutput('');
  }, [skill]);

  const handleRunCode = () => {
    setOutput(skill.output || 'No output for this example.');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Column: Description and Runner */}
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
        
        {/* Code Runner */}
        <div className="mt-4">
          <button
            onClick={handleRunCode}
            className="w-full btn-primary flex items-center justify-center space-x-2 mb-2"
          >
            <Icon name="Play" size={16} />
            <span>{currentLanguage === 'en' ? `Run ${skill.name} Code*` : `Exécuter le code ${skill.name}*`}</span>
          </button>
          <p className="text-xs text-center text-text-secondary mb-4">
            {currentLanguage === 'en' ? '*Simulated execution' : '*Exécution simulée'}
          </p>
          {output && (
            <div className="bg-secondary-800 rounded-lg p-4">
              <pre className="text-secondary-100 font-mono text-sm whitespace-pre-wrap">
                <code>{output}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
      {/* Right Column: Code */}
      <div>
        <CodePreview code={skill.code} language={skill.language} />
      </div>
    </div>
  );
};

export default CodeSkill; 