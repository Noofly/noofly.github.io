import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

const CodePreview = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className="bg-secondary-900 rounded-lg overflow-hidden">
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodePreview; 