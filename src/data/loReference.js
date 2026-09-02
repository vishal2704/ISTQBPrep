// Official ISTQB CTFL v4.0.1 Learning Objectives (64 LOs total: 14 K1, 42 K2, 8 K3).
// Source: uploaded ISTQB CTFL v4.0.1 Study Checklist (syllabus-derived).
// Used to (a) tag which concept a question covers, shown in practice mode,
// and (b) verify/track question-bank coverage against the real syllabus.
export const LO_REFERENCE = [
  // Chapter 1 — Fundamentals of Testing (14 LOs, weight ~20%)
  { code: "FL-1.1.1", chapter: "chapter1", k: "K1", objective: "Identify typical test objectives" },
  { code: "FL-1.1.2", chapter: "chapter1", k: "K2", objective: "Differentiate testing from debugging" },
  { code: "FL-1.2.1", chapter: "chapter1", k: "K2", objective: "Exemplify why testing is necessary" },
  { code: "FL-1.2.2", chapter: "chapter1", k: "K1", objective: "Recall the relation between testing and quality assurance" },
  { code: "FL-1.2.3", chapter: "chapter1", k: "K2", objective: "Distinguish between root cause, error, defect, and failure" },
  { code: "FL-1.3.1", chapter: "chapter1", k: "K2", objective: "Explain the seven testing principles" },
  { code: "FL-1.4.1", chapter: "chapter1", k: "K2", objective: "Explain the different test activities and related tasks" },
  { code: "FL-1.4.2", chapter: "chapter1", k: "K2", objective: "Explain the impact of context on the test process" },
  { code: "FL-1.4.3", chapter: "chapter1", k: "K2", objective: "Differentiate the testware that supports the test activities" },
  { code: "FL-1.4.4", chapter: "chapter1", k: "K2", objective: "Explain the value of maintaining traceability" },
  { code: "FL-1.4.5", chapter: "chapter1", k: "K2", objective: "Compare the different roles in testing" },
  { code: "FL-1.5.1", chapter: "chapter1", k: "K2", objective: "Give examples of the generic skills required for testing" },
  { code: "FL-1.5.2", chapter: "chapter1", k: "K1", objective: "Recall the advantages of the whole team approach" },
  { code: "FL-1.5.3", chapter: "chapter1", k: "K2", objective: "Distinguish the benefits and drawbacks of independence of testing" },

  // Chapter 2 — Testing Throughout the SDLC (10 LOs, weight ~12.5%)
  { code: "FL-2.1.1", chapter: "chapter2", k: "K2", objective: "Explain the impact of the chosen software development lifecycle on testing" },
  { code: "FL-2.1.2", chapter: "chapter2", k: "K1", objective: "Recall good testing practices that apply to all software development lifecycles" },
  { code: "FL-2.1.3", chapter: "chapter2", k: "K1", objective: "Recall examples of test-first approaches to development" },
  { code: "FL-2.1.4", chapter: "chapter2", k: "K2", objective: "Summarize how DevOps might have an impact on testing" },
  { code: "FL-2.1.5", chapter: "chapter2", k: "K2", objective: "Explain shift left" },
  { code: "FL-2.1.6", chapter: "chapter2", k: "K2", objective: "Explain how retrospectives can be used as a mechanism for process improvement" },
  { code: "FL-2.2.1", chapter: "chapter2", k: "K2", objective: "Distinguish the different test levels" },
  { code: "FL-2.2.2", chapter: "chapter2", k: "K2", objective: "Distinguish the different test types" },
  { code: "FL-2.2.3", chapter: "chapter2", k: "K2", objective: "Distinguish confirmation testing from regression testing" },
  { code: "FL-2.3.1", chapter: "chapter2", k: "K2", objective: "Summarize maintenance testing and its triggers" },

  // Chapter 3 — Static Testing (8 LOs, weight ~10%)
  { code: "FL-3.1.1", chapter: "chapter3", k: "K1", objective: "Recognize types of work products that can be examined by static testing" },
  { code: "FL-3.1.2", chapter: "chapter3", k: "K2", objective: "Explain the value of static testing" },
  { code: "FL-3.1.3", chapter: "chapter3", k: "K2", objective: "Compare and contrast static testing and dynamic testing" },
  { code: "FL-3.2.1", chapter: "chapter3", k: "K1", objective: "Identify the benefits of early and frequent stakeholder feedback" },
  { code: "FL-3.2.2", chapter: "chapter3", k: "K2", objective: "Summarize the activities of the review process" },
  { code: "FL-3.2.3", chapter: "chapter3", k: "K1", objective: "Recall which responsibilities are assigned to the principal roles when performing reviews" },
  { code: "FL-3.2.4", chapter: "chapter3", k: "K2", objective: "Compare and contrast the different review types" },
  { code: "FL-3.2.5", chapter: "chapter3", k: "K1", objective: "Recall the factors that contribute to a successful review" },

  // Chapter 4 — Test Analysis and Design (14 LOs, weight ~27.5%, highest weight)
  { code: "FL-4.1.1", chapter: "chapter4", k: "K2", objective: "Distinguish black-box, white-box, and experience-based test techniques" },
  { code: "FL-4.2.1", chapter: "chapter4", k: "K3", objective: "Use equivalence partitioning to derive test cases" },
  { code: "FL-4.2.2", chapter: "chapter4", k: "K3", objective: "Use boundary value analysis to derive test cases" },
  { code: "FL-4.2.3", chapter: "chapter4", k: "K3", objective: "Use decision table testing to derive test cases" },
  { code: "FL-4.2.4", chapter: "chapter4", k: "K3", objective: "Use state transition testing to derive test cases" },
  { code: "FL-4.3.1", chapter: "chapter4", k: "K2", objective: "Explain statement testing" },
  { code: "FL-4.3.2", chapter: "chapter4", k: "K2", objective: "Explain branch testing" },
  { code: "FL-4.3.3", chapter: "chapter4", k: "K2", objective: "Explain the value of white-box testing" },
  { code: "FL-4.4.1", chapter: "chapter4", k: "K2", objective: "Explain error guessing" },
  { code: "FL-4.4.2", chapter: "chapter4", k: "K2", objective: "Explain exploratory testing" },
  { code: "FL-4.4.3", chapter: "chapter4", k: "K2", objective: "Explain checklist-based testing" },
  { code: "FL-4.5.1", chapter: "chapter4", k: "K2", objective: "Explain how to write user stories in collaboration with developers and business representatives" },
  { code: "FL-4.5.2", chapter: "chapter4", k: "K2", objective: "Classify the different options for writing acceptance criteria" },
  { code: "FL-4.5.3", chapter: "chapter4", k: "K3", objective: "Use acceptance test-driven development (ATDD) to derive test cases" },

  // Chapter 5 — Managing the Test Activities (16 LOs, weight ~22.5%)
  { code: "FL-5.1.1", chapter: "chapter5", k: "K2", objective: "Exemplify the purpose and content of a test plan" },
  { code: "FL-5.1.2", chapter: "chapter5", k: "K1", objective: "Recognize how a tester adds value to iteration and release planning" },
  { code: "FL-5.1.3", chapter: "chapter5", k: "K2", objective: "Compare and contrast entry criteria and exit criteria" },
  { code: "FL-5.1.4", chapter: "chapter5", k: "K3", objective: "Use estimation techniques to calculate the required test effort" },
  { code: "FL-5.1.5", chapter: "chapter5", k: "K3", objective: "Apply test case prioritization" },
  { code: "FL-5.1.6", chapter: "chapter5", k: "K1", objective: "Recall the concepts of the test pyramid" },
  { code: "FL-5.1.7", chapter: "chapter5", k: "K2", objective: "Summarize the testing quadrants and their relationships with test levels and test types" },
  { code: "FL-5.2.1", chapter: "chapter5", k: "K1", objective: "Identify risk level by using risk likelihood and risk impact" },
  { code: "FL-5.2.2", chapter: "chapter5", k: "K2", objective: "Distinguish between project risks and product risks" },
  { code: "FL-5.2.3", chapter: "chapter5", k: "K2", objective: "Explain how product risk analysis may influence thoroughness and test scope" },
  { code: "FL-5.2.4", chapter: "chapter5", k: "K2", objective: "Explain what measures can be taken in response to analyzed product risks" },
  { code: "FL-5.3.1", chapter: "chapter5", k: "K1", objective: "Recall metrics used for testing" },
  { code: "FL-5.3.2", chapter: "chapter5", k: "K2", objective: "Summarize the purposes, content, and audiences for test reports" },
  { code: "FL-5.3.3", chapter: "chapter5", k: "K2", objective: "Exemplify how to communicate the status of testing" },
  { code: "FL-5.4.1", chapter: "chapter5", k: "K2", objective: "Summarize how configuration management supports testing" },
  { code: "FL-5.5.1", chapter: "chapter5", k: "K3", objective: "Prepare a defect report" },

  // Chapter 6 — Test Tools (2 LOs, weight ~7.5%)
  { code: "FL-6.1.1", chapter: "chapter6", k: "K2", objective: "Explain how different types of test tools support testing" },
  { code: "FL-6.2.1", chapter: "chapter6", k: "K1", objective: "Recall the benefits and risks of test automation" },
];

export function getLO(code) {
  return LO_REFERENCE.find((lo) => lo.code === code) || null;
}

export function getLOsByChapter(chapter) {
  return LO_REFERENCE.filter((lo) => lo.chapter === chapter);
}

const CHAPTER_LABELS = {
  chapter1: "Fundamentals of Testing",
  chapter2: "Testing Throughout the SDLC",
  chapter3: "Static Testing",
  chapter4: "Test Analysis and Design",
  chapter5: "Managing the Test Activities",
  chapter6: "Test Tools",
};

// Returns what to show as "which concept does this question cover" —
// the precise, official LO if the question is tagged with one, otherwise a
// transparent chapter-level fallback (never a guessed/fabricated LO code).
export function getConceptInfo(q) {
  if (q?.lo) {
    const lo = getLO(q.lo);
    if (lo) {
      return {
        precise: true,
        code: lo.code,
        kLevel: lo.k,
        objective: lo.objective,
        chapterLabel: CHAPTER_LABELS[lo.chapter] || lo.chapter,
      };
    }
  }
  return {
    precise: false,
    code: null,
    kLevel: q?.difficulty === "hard" ? "K3" : q?.difficulty === "medium" ? "K2" : "K1",
    objective: null,
    chapterLabel: CHAPTER_LABELS[q?.chapter] || q?.chapter,
  };
}
