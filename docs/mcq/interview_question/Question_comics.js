import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ComicQuestion.css';

export const ComicQA = ({ question, answer, code, example, whenToUse }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const renderParagraphs = (text) => {
    if (typeof text !== 'string') return text;
    return text
      .split('\n')
      .filter(line => line.trim() !== '')
      .map((line, idx) => <p key={idx}>{line.trim()}</p>);
  };

  return (
    <div className="comic-panel">
      {/* Question Bubble */}
      <div className="speech-bubble question-bubble">
        <h3 className="bubble-header">Question</h3>
        {renderParagraphs(question)}
        <button
          className="show-answer-button"
          onClick={() => setShowAnswer(prev => !prev)}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>

      {/* Answer Bubble */}
      <div className={`speech-bubble answer-bubble ${showAnswer ? 'show' : ''}`}>
        <div className="speaker-header">
          <h4>Answer</h4>
        </div>

        <div className="rich-answer">
          {typeof answer === 'string' ? renderParagraphs(answer) : answer}
        </div>

        {code && (
          <div className="nested-code-block">
            <h5>Syntax</h5>
            <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
              {code}
            </SyntaxHighlighter>
          </div>
        )}

        {example && (
          <div className="nested-code-block">
            <h5>Example</h5>
            <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
              {example}
            </SyntaxHighlighter>
          </div>
        )}

        {whenToUse && (
          <div className="nested-note-block">
            <h5>When to use</h5>
            {renderParagraphs(whenToUse)}
          </div>
        )}
      </div>

      <div className="comic-divider"></div>
    </div>
  );
};
