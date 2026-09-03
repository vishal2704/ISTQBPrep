// Question bank — Advanced Level Test Manager (CTAL-TM) — Test Management Documentation
// 10 questions. First-pass content (no official syllabus PDF
// was provided for this cert, unlike Foundation) — solid starting coverage,
// meant to grow over time.
export const tm2Questions = [
  {
    "id": "tm2_q1",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary purpose of a test policy?",
    "options": [
      "To define the organization's overall objectives and approach to testing",
      "To list every individual test case in detail",
      "To replace the need for a test plan on each project",
      "To document a single project's schedule only"
    ],
    "correct": 0,
    "explanation": "A test policy is a high-level, organization-wide document defining testing's purpose and general approach — not project-specific detail."
  },
  {
    "id": "tm2_q2",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "How does a test strategy typically relate to a test plan?",
    "options": [
      "The strategy provides a generalized, higher-level approach that individual test plans implement",
      "They are identical documents with different names",
      "A test plan is always broader than a test strategy",
      "Test strategies apply only to Agile projects"
    ],
    "correct": 0,
    "explanation": "Test strategy is a more generalized, often organization- or program-level document; project test plans implement it with specific detail."
  },
  {
    "id": "tm2_q3",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which document would you expect to define entry and exit criteria for a specific project's test level?",
    "options": [
      "The test plan",
      "The test policy",
      "The defect report",
      "The retrospective notes"
    ],
    "correct": 0,
    "explanation": "Entry/exit criteria are typically defined at the level of a test plan, tied to a specific project or test level's context."
  },
  {
    "id": "tm2_q4",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A 'master test plan' in a multi-level testing effort typically does what?",
    "options": [
      "Coordinates and aligns test plans across multiple test levels (e.g., component, integration, system)",
      "Replaces the need for level-specific test plans entirely",
      "Applies only to acceptance testing",
      "Is written after testing is already complete"
    ],
    "correct": 0,
    "explanation": "A master test plan sits above level-specific plans, ensuring consistency and coordination across component, integration, system, and acceptance testing."
  },
  {
    "id": "tm2_q5",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why might a test strategy specify a risk-based testing approach as the organizational default?",
    "options": [
      "To ensure limited test resources are consistently directed at the highest-risk areas across projects",
      "Because it is legally required in every jurisdiction",
      "Because it eliminates the need for any test planning",
      "Because it only applies to safety-critical software"
    ],
    "correct": 0,
    "explanation": "A risk-based default in the strategy institutionalizes smart prioritization of limited testing resources across the organization."
  },
  {
    "id": "tm2_q6",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following would typically NOT belong in a project-level test plan?",
    "options": [
      "The company's five-year business roadmap",
      "The scope of testing for this project",
      "The resources allocated to this project's testing",
      "The schedule and milestones for this project's testing"
    ],
    "correct": 0,
    "explanation": "A test plan is scoped to its project — long-range business strategy belongs elsewhere, not in a specific test plan."
  },
  {
    "id": "tm2_q7",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "What role does a test plan template play across an organization?",
    "options": [
      "It standardizes structure and content, making plans more consistent and easier to review",
      "It eliminates the need for a Test Manager to think about planning",
      "It guarantees zero defects will be found",
      "It is only used once and then discarded"
    ],
    "correct": 0,
    "explanation": "Templates promote consistency, making test plans easier to write, review, and compare across projects."
  },
  {
    "id": "tm2_q8",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A regulated industry (e.g., medical devices) often requires additional test documentation. Why?",
    "options": [
      "To provide auditable evidence of testing rigor for compliance purposes",
      "Because regulations forbid any testing at all",
      "Because automation is banned in regulated industries",
      "Because test plans are optional elsewhere but mandatory here"
    ],
    "correct": 0,
    "explanation": "Regulated industries often require documented, auditable evidence that adequate testing rigor was applied, driving extra documentation needs."
  },
  {
    "id": "tm2_q9",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which best describes the relationship between a test policy and quality objectives?",
    "options": [
      "The test policy typically expresses how testing supports the organization's broader quality objectives",
      "They are unrelated concepts",
      "Quality objectives are defined only by developers",
      "Test policy replaces quality objectives entirely"
    ],
    "correct": 0,
    "explanation": "Test policy usually articulates how the testing function contributes to the organization's overarching quality goals."
  },
  {
    "id": "tm2_q10",
    "chapter": "tm2",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "In an Agile context, how does test management documentation often differ from a traditional plan-heavy approach?",
    "options": [
      "It tends to be lighter-weight and more frequently updated, reflecting iterative planning",
      "Agile teams are prohibited from having any documentation",
      "Documentation becomes more extensive and rigid than in Waterfall",
      "There is no difference at all"
    ],
    "correct": 0,
    "explanation": "Agile approaches favor lighter, evolving documentation updated each iteration, rather than one large upfront plan."
  }
];
