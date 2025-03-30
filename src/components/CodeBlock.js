// src/components/CodeBlock.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language = 'python' }) => {
  return (
    <div style={{
      maxHeight: '400px',
      overflow: 'auto',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
    }}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          backgroundColor: '#2a303c',
          margin: 0,
          padding: '16px',
          fontSize: '14px',
          height: '100%',
        }}
        showLineNumbers={true}
        lineNumberStyle={{ color: '#6e7681', marginRight: '16px' }}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;