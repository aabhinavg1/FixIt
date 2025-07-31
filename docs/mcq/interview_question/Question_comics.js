import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ComicQuestion.css';

export const ComicQA = ({ question, answer, code, example, whenToUse }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="comic-panel">
      {/* Question Section */}
      <div className="speech-bubble question-bubble">
        <h3>Question</h3>
        <p>{question?.replace(/\?/g, '')}</p>
        <button
          className="show-answer-button"
          onClick={() => setShowAnswer(prev => !prev)}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>

      {/* Animated Answer Section */}
      <div className={`speech-bubble answer-bubble ${showAnswer ? 'show' : ''}`}>
        <div className="speaker-header">
          <div className="css-monkey">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <h4>Answer</h4>
        </div>
        <p>{answer?.replace(/\?/g, '')}</p>

        {/* Syntax */}
        {code && (
          <div className="nested-code-block">
            <h5>Syntax</h5>
            <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
              {code}
            </SyntaxHighlighter>
          </div>
        )}

        {/* Example */}
        {example && (
          <div className="nested-code-block">
            <h5>Example</h5>
            <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
              {example}
            </SyntaxHighlighter>
          </div>
        )}

        {/* When to Use */}
        {whenToUse && (
          <div className="nested-note-block">
            <h5>When to use</h5>
            <p>{whenToUse?.replace(/\?/g, '')}</p>
          </div>
        )}
      </div>

      <div className="comic-divider"></div>
    </div>
  );
};
