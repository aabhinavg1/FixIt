import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Question.module.css';

export const Question = ({ question, options, answer, code }) => {
  const [selected, setSelected] = useState(null); // State to store single selected option
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle answer visibility

  const handleSelect = (option) => {
    setSelected(option); // Update the selected option
    setShowAnswer(true); // Show the answer section
  };

  return (
    <div className="mcq-question">
      <h3>{question}</h3>

      {/* Display code with syntax highlighting */}
      {code && (
        <SyntaxHighlighter language="cpp" style={vscDarkPlus} className="code-block">
          {code}
        </SyntaxHighlighter>
      )}

      <div className="mcq-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`mcq-option 
              ${selected === option ? 'selected' : ''} 
              ${showAnswer && option === answer ? 'correct' : ''}`}
            onClick={() => handleSelect(option)}
            style={{ cursor: 'pointer' }}
            tabIndex="0" // Ensures keyboard accessibility
          >
            {index + 1}) {option}
          </div>
        ))}
      </div>

      {/* Answer Section */}
      {showAnswer && (
        <div className="mcq-answer">
          <strong>Your selected answer: </strong>{selected || 'None'}<br />
          {selected === answer ? (
            <strong className="correct-answer">Correct!</strong>
          ) : (
            <>
              <strong className="incorrect-answer">Incorrect!</strong><br />
              The correct answer is: <strong>{answer}</strong>.
            </>
          )}
        </div>
      )}

      {/* Line after the answer */}
      <hr className="answer-divider" />
    </div>
  );
};
