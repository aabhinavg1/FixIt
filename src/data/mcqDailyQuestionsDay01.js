function fact(term, definition, use, statement, area) {
  return { term, definition, use, statement, area };
}

function rotateOptions(correct, distractors, seed) {
  const pool = [correct, ...distractors];
  const unique = [];

  for (const item of pool) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  while (unique.length < 4) {
    unique.push(`Distractor ${unique.length}`);
  }

  const rotated = unique.slice(0, 4);
  const shift = seed % 4;
  return rotated.slice(shift).concat(rotated.slice(0, shift));
}

function makeQuestion(question, correct, distractors, seed) {
  return {
    question,
    options: rotateOptions(correct, distractors, seed),
    answer: correct,
  };
}

function buildDay01Questions() {
  const dayTitle = 'C++ Foundations';
  const facts = [
    fact('std::cout', 'the standard output stream', 'printing formatted text to the console', 'It comes from the <iostream> header.', 'C++ I/O'),
    fact('const', 'a qualifier that makes an object read-only after initialization', 'preventing accidental modification', 'A const variable cannot be reassigned after it is initialized.', 'C++ type qualifiers'),
    fact('reference', 'an alias for an existing object', 'passing or returning objects without copying them', 'A reference must bind to a valid object.', 'C++ references'),
    fact('scope resolution operator', 'the :: operator used to qualify a name', 'accessing namespace or class members', 'It helps name things such as std::vector and class methods.', 'C++ namespaces'),
    fact('vector', 'a resizable contiguous sequence container', 'storing elements with random access', 'Its elements are stored contiguously in memory.', 'STL containers'),
  ];

  return facts.flatMap((item, index) => {
    const otherDefinitions = facts.filter((_, i) => i !== index).map((f) => f.definition);
    const otherUses = facts.filter((_, i) => i !== index).map((f) => f.use);
    const otherStatements = facts.filter((_, i) => i !== index).map((f) => f.statement);
    const otherAreas = facts.filter((_, i) => i !== index).map((f) => f.area);
    const baseQuestionNumber = index * 4;

    return [
      makeQuestion(
        `${String(baseQuestionNumber + 1).padStart(2, '0')}. What does \`${item.term}\` mean in ${dayTitle}?`,
        item.definition,
        otherDefinitions,
        index,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 2).padStart(2, '0')}. Which use best matches \`${item.term}\`?`,
        item.use,
        otherUses,
        index + 1,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 3).padStart(2, '0')}. Which statement about \`${item.term}\` is correct?`,
        item.statement,
        otherStatements,
        index + 2,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 4).padStart(2, '0')}. Which topic area best fits \`${item.term}\`?`,
        item.area,
        otherAreas,
        index + 3,
      ),
    ];
  });
}

export const DAY_01_QUESTIONS = buildDay01Questions();
