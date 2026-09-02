import { questionBank } from "../data/questionBank";
import { getQuestionType } from "./answerUtils";
import { StorageService } from "./storageService";

export function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Options like "All of the above" / "None of the above" / "Both A and C" only
// make sense at their originally-authored position. Shuffling them produces
// nonsense (e.g. "All of the above" ending up as option A with nothing above
// it). Detect these and skip shuffling entirely for that question.
const POSITIONAL_OPTION_PATTERN =
  /\b(all|none)\s+of\s+the\s+above\b|\ball\s+the\s+above\b|\bboth\b.*\band\b|\bnone\s+of\s+these\b/i;

function hasPositionalOptions(options) {
  return options.some((opt) => POSITIONAL_OPTION_PATTERN.test(opt));
}

function shuffleStandardQuestion(q) {
  if (hasPositionalOptions(q.options)) return q;

  const options = q.options.map((opt, idx) => ({ text: opt, original: idx }));
  shuffleArray(options);
  const correct = options.findIndex((o) => o.original === q.correct);
  q.options = options.map((o) => o.text);
  q.correct = correct;
  return q;
}

function shuffleCombinationQuestion(q) {
  if (hasPositionalOptions(q.options)) return q;

  const options = q.options.map((opt, idx) => ({ text: opt, original: idx }));
  shuffleArray(options);
  const correctSet = new Set(q.correct || []);
  const newCorrect = [];
  options.forEach((o, newIdx) => {
    if (correctSet.has(o.original)) newCorrect.push(newIdx);
  });
  q.options = options.map((o) => o.text);
  q.correct = newCorrect;
  return q;
}

export function buildExamQuestion(question) {
  const q = structuredClone(question);
  const type = getQuestionType(q);

  if (type === "matching") return q;
  if (type === "combination") return shuffleCombinationQuestion(q);

  if (hasPositionalOptions(q.options)) return q;

  if (q.options.length <= 4) return shuffleStandardQuestion(q);

  const correctAnswer = q.options[q.correct];
  const distractors = q.options.filter((_, index) => index !== q.correct);
  shuffleArray(distractors);
  q.options = [correctAnswer, ...distractors.slice(0, 3)];
  shuffleArray(q.options);
  q.correct = q.options.indexOf(correctAnswer);
  return q;
}

export function pickRandom(chapter, count) {
  const questions = questionBank.filter((q) => q.chapter === chapter);
  shuffleArray(questions);
  return questions.slice(0, count);
}

export function getQuestionExposure() {
  return StorageService.loadQuestionExposure();
}

export function increaseQuestionExposure(questions) {
  const exposure = getQuestionExposure();
  questions.forEach((q) => {
    exposure[q.id] = (exposure[q.id] || 0) + 1;
  });
  StorageService.saveQuestionExposure(exposure);
}

const MAX_EXPOSURE = 3;

export function prioritizeLessSeenQuestions(questions, limit) {
  const exposure = getQuestionExposure();

  const fresh = questions.filter((q) => (exposure[q.id] || 0) < MAX_EXPOSURE);
  shuffleArray(fresh);
  fresh.sort((a, b) => (exposure[a.id] || 0) - (exposure[b.id] || 0));

  if (fresh.length >= limit) return fresh.slice(0, limit);

  const used = questions.filter((q) => (exposure[q.id] || 0) >= MAX_EXPOSURE);
  shuffleArray(used);
  used.sort((a, b) => (exposure[a.id] || 0) - (exposure[b.id] || 0));

  return [...fresh, ...used].slice(0, limit);
}

// Guarantees at least one combination / matching / scenario question shows
// up in the set (when the chapter has any), instead of leaving it to chance
// — a chapter might have only a handful of each non-standard type, so a
// plain random pick could easily skip them entirely.
export function buildDiverseSet(pool, count) {
  if (count >= pool.length) return shuffleArray([...pool]);

  const byType = {};
  pool.forEach((q) => {
    const t = getQuestionType(q);
    byType[t] = byType[t] || [];
    byType[t].push(q);
  });

  const nonStandardTypes = Object.keys(byType).filter((t) => t !== "standard");
  const guaranteed = [];
  const usedIds = new Set();

  nonStandardTypes.forEach((t) => {
    if (guaranteed.length >= count) return;
    const [pick] = prioritizeLessSeenQuestions(byType[t], 1);
    if (pick) {
      guaranteed.push(pick);
      usedIds.add(pick.id);
    }
  });

  const remainingPool = pool.filter((q) => !usedIds.has(q.id));
  const remainingCount = Math.max(0, count - guaranteed.length);
  const rest = prioritizeLessSeenQuestions(remainingPool, remainingCount);

  return shuffleArray([...guaranteed, ...rest]);
}

// "Standard" question-count mode: starts small and grows with each attempt
// at that chapter, so new users aren't hit with a huge set on day one.
export const STANDARD_COUNT_STEPS = [5, 10, 15, 20, 25];

export function computeStandardCount(chapter, poolSize) {
  const attempts = StorageService.loadResults().filter((r) => r.chapter === chapter).length;
  const idx = Math.min(attempts, STANDARD_COUNT_STEPS.length - 1);
  return Math.min(STANDARD_COUNT_STEPS[idx], poolSize);
}

export function buildExamSet(chapter, mode, desiredCount) {
  let pool;
  const isMock = chapter?.startsWith("mock");

  if (isMock) {
    const program = chapter === "mock-tm" ? "tm" : "foundation";
    pool = questionBank.filter((q) => (q.program || "foundation") === program);
  } else if (chapter === "wrong") {
    const wrongIds = new Set(StorageService.loadWrongPool());
    pool = questionBank.filter((q) => wrongIds.has(q.id));
  } else {
    pool = questionBank.filter((q) => q.chapter === chapter);
  }

  let count;
  if (isMock) {
    count = Math.min(40, pool.length);
  } else if (chapter === "wrong") {
    count = pool.length;
  } else if (desiredCount === "all") {
    count = pool.length;
  } else if (!desiredCount || desiredCount === "standard") {
    count = computeStandardCount(chapter, pool.length);
  } else {
    count = Math.min(Number(desiredCount) || pool.length, pool.length);
  }

  const finalQuestions = buildDiverseSet(pool, count || pool.length);
  const built = finalQuestions.map(buildExamQuestion);
  increaseQuestionExposure(built);
  return built;
}
