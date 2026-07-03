export function fact(term, definition, use, statement, area) {
  return { term, definition, use, statement, area };
}

function hashString(value) {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createSeededRandom(seed) {
  let state = hashString(String(seed)) || 1;

  return () => {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, seed) {
  const random = createSeededRandom(seed);
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function buildOptions(correct, distractors, seed) {
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

  return shuffle(unique.slice(0, 4), seed);
}

function makeQuestion(question, correct, distractors, seed) {
  return {
    question,
    options: buildOptions(correct, distractors, seed),
    answer: correct,
  };
}

function assertUniqueQuestions(questions, dayTitle) {
  const seen = new Set();

  for (const item of questions) {
    if (seen.has(item.question)) {
      throw new Error(`Duplicate MCQ question detected in ${dayTitle}: ${item.question}`);
    }

    seen.add(item.question);
  }
}

function pickVariant(variants, seed) {
  return variants[seed % variants.length];
}

export function buildQuestions(dayTitle, facts, dayNumber) {
  const prefix = String(dayNumber).padStart(2, '0');

  const questions = facts.flatMap((item, index) => {
    const otherDefinitions = facts.filter((_, i) => i !== index).map((f) => f.definition);
    const otherUses = facts.filter((_, i) => i !== index).map((f) => f.use);
    const otherStatements = facts.filter((_, i) => i !== index).map((f) => f.statement);
    const otherAreas = facts.filter((_, i) => i !== index).map((f) => f.area);

    const meaningTemplates = [
      `${prefix}. What does \`${item.term}\` mean in ${dayTitle}?`,
      `${prefix}. Which description best matches \`${item.term}\` in ${dayTitle}?`,
      `${prefix}. In ${dayTitle}, what is the correct meaning of \`${item.term}\`?`,
      `${prefix}. Which option correctly explains \`${item.term}\`?`,
    ];
    const useTemplates = [
      `${prefix}. Which use best matches \`${item.term}\`?`,
      `${prefix}. Which practical use fits \`${item.term}\` most closely?`,
      `${prefix}. What is a good use case for \`${item.term}\`?`,
      `${prefix}. Which scenario best matches \`${item.term}\`?`,
    ];
    const statementTemplates = [
      `${prefix}. Which statement about \`${item.term}\` is correct?`,
      `${prefix}. Which fact about \`${item.term}\` is true?`,
      `${prefix}. Which line about \`${item.term}\` is accurate?`,
      `${prefix}. Which description of \`${item.term}\` is valid?`,
    ];
    const areaTemplates = [
      `${prefix}. Which topic area best fits \`${item.term}\`?`,
      `${prefix}. Which subject area is closest to \`${item.term}\`?`,
      `${prefix}. What topic bucket does \`${item.term}\` belong to?`,
      `${prefix}. Which study area is most relevant to \`${item.term}\`?`,
    ];

    return [
      makeQuestion(
        pickVariant(meaningTemplates, dayNumber * 17 + index),
        item.definition,
        otherDefinitions,
        index,
      ),
      makeQuestion(
        pickVariant(useTemplates, dayNumber * 17 + index + 1),
        item.use,
        otherUses,
        index + 1,
      ),
      makeQuestion(
        pickVariant(statementTemplates, dayNumber * 17 + index + 2),
        item.statement,
        otherStatements,
        index + 2,
      ),
      makeQuestion(
        pickVariant(areaTemplates, dayNumber * 17 + index + 3),
        item.area,
        otherAreas,
        index + 3,
      ),
    ];
  });

  const shuffled = shuffle(questions, `day-${dayNumber}`);
  assertUniqueQuestions(shuffled, dayTitle);
  return shuffled;
}
