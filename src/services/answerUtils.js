export function getQuestionType(q) {
  return (q && q.type) || "standard";
}

// Generic, answer-safe fallback hints — rotated deterministically per
// question so the "Show Hint" button always has something useful to say,
// even for the ~85% of the bank that doesn't have a hand-written hint yet.
const GENERIC_HINTS = [
  "Re-read the question stem slowly — in ISTQB questions, one precise word often decides which option is correct.",
  "Eliminate the options that are clearly extreme or absolute (\"always\", \"never\", \"proves\") — ISTQB rarely favors those.",
  "Think about which syllabus concept this question is really testing, not just the surface wording.",
  "If two options sound similar, look for the one that's more precise and specific to the scenario described.",
  "Consider the difficulty tag: harder questions usually test how a concept applies, not just its definition.",
  "Try answering in your own words first, then match your answer to the closest option.",
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getHint(q) {
  if (q && q.hint) return q.hint;
  const idx = hashString(q?.id || "") % GENERIC_HINTS.length;
  return GENERIC_HINTS[idx];
}

export function hasAuthoredHint(q) {
  return !!(q && q.hint);
}

export function isAnswerEmpty(answer) {
  if (answer === null || answer === undefined) return true;
  if (Array.isArray(answer)) return answer.length === 0;
  if (typeof answer === "object") return Object.keys(answer).length === 0;
  return false;
}

export function isAnswerCorrect(q, answer) {
  if (isAnswerEmpty(answer)) return false;
  const type = getQuestionType(q);

  if (type === "combination") {
    const correct = [...(q.correct || [])].sort();
    const given = [...answer].sort();
    return (
      correct.length === given.length &&
      correct.every((v, i) => v === given[i])
    );
  }

  if (type === "matching") {
    const pairs = q.correctPairs || {};
    const keys = Object.keys(pairs);
    return keys.length > 0 && keys.every((k) => String(answer[k]) === String(pairs[k]));
  }

  return answer === q.correct;
}

export function formatUserAnswer(q, answer) {
  if (isAnswerEmpty(answer)) return "Not Answered";
  const type = getQuestionType(q);

  if (type === "combination") {
    return answer.map((i) => q.options[i]).join(", ");
  }

  if (type === "matching") {
    return (q.leftItems || [])
      .map((left, i) => {
        const chosen = answer[i];
        const rightLabel =
          chosen !== undefined && chosen !== null && q.rightItems[chosen]
            ? q.rightItems[chosen]
            : "—";
        return `${left} → ${rightLabel}`;
      })
      .join(" | ");
  }

  return q.options[answer];
}

export function formatCorrectAnswer(q) {
  const type = getQuestionType(q);

  if (type === "combination") {
    return (q.correct || []).map((i) => q.options[i]).join(", ");
  }

  if (type === "matching") {
    return (q.leftItems || [])
      .map((left, i) => {
        const rightIndex = q.correctPairs ? q.correctPairs[i] : undefined;
        const rightLabel =
          rightIndex !== undefined && q.rightItems[rightIndex] ? q.rightItems[rightIndex] : "—";
        return `${left} → ${rightLabel}`;
      })
      .join(" | ");
  }

  return q.options[q.correct];
}
