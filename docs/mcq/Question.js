import { useState } from 'react';
import './Question.module.css';  // Assuming you will add custom styles in this CSS file

export const Question = ({ question, options, answer, code }) => {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
  };

  return (
    <div className="mcq-question">
      <h3>{question}</h3>

      {/* Display code if provided */}
      {code && (
        <pre className="code-block">
          {code}
        </pre>
      )}

      <div className="mcq-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`mcq-option ${selected === option ? 'selected' : ''} ${showAnswer && selected !== option && option === answer ? 'correct' : ''}`}
            onClick={() => handleSelect(option)}
            style={{ cursor: 'pointer' }}
          >
            {index + 1}) {option}
          </div>
        ))}
      </div>

      {/* Answer Section */}
      {showAnswer && (
        <div className="mcq-answer">
          <strong>Your selected answer: </strong>{selected}<br />
          <strong className={selected === answer ? 'correct-answer' : 'incorrect-answer'}>
            {selected === answer ? 'Correct!' : 'Incorrect, try again!'}
          </strong>
        </div>
      )}

      {/* Line after the answer */}
      <hr className="answer-divider" />
    </div>
  );
};
