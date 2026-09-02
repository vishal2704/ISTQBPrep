// Question bank — Advanced Level Test Manager (CTAL-TM) — Risk Management
// 10 questions. First-pass content (no official syllabus PDF
// was provided for this cert, unlike Foundation) — solid starting coverage,
// meant to grow over time.
export const tm4Questions = [
  {
    "id": "tm4_q1",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "As a Test Manager, why would you facilitate a risk workshop with cross-functional stakeholders rather than assess risk alone?",
    "options": [
      "Different stakeholders surface risks and perspectives a single person would likely miss",
      "It is faster to do it alone",
      "Cross-functional input is prohibited in risk analysis",
      "Workshops replace the need for any test planning"
    ],
    "correct": 0,
    "explanation": "Risk identification benefits from diverse perspectives — business, technical, and operational — which a single assessor is unlikely to fully capture alone."
  },
  {
    "id": "tm4_q2",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A Test Manager assigns numeric scores to likelihood and impact for each identified risk. What is this process called?",
    "options": [
      "Risk assessment / risk analysis",
      "Test estimation",
      "Defect triage",
      "Configuration management"
    ],
    "correct": 0,
    "explanation": "Scoring risks by likelihood and impact to determine their overall level is the core of risk assessment/analysis."
  },
  {
    "id": "tm4_q3",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of these is a valid strategy for managing an identified high-priority risk, beyond just testing more?",
    "options": [
      "Mitigating it through a design change that reduces its likelihood or impact",
      "Deleting the risk register so it's no longer visible",
      "Assuming it will resolve itself with no action",
      "Assigning it to a department with no authority to act on it"
    ],
    "correct": 0,
    "explanation": "Risk mitigation can include design or process changes that reduce the risk directly, not only increased testing."
  },
  {
    "id": "tm4_q4",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "In risk-based testing, how does the Test Manager typically use the resulting risk levels?",
    "options": [
      "To prioritize test effort and depth of coverage across features",
      "To assign blame for past defects",
      "To set the company's stock price target",
      "To determine employee salaries"
    ],
    "correct": 0,
    "explanation": "Risk levels directly drive prioritization — where to test first, and how deeply — under time and resource constraints."
  },
  {
    "id": "tm4_q5",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A previously low-risk feature is suddenly flagged as high-risk after a major architecture change. What should the Test Manager do?",
    "options": [
      "Re-assess and update the risk register, adjusting the test approach accordingly",
      "Ignore the change since the original risk assessment is final",
      "Cancel testing on that feature entirely",
      "Wait until the next project to update anything"
    ],
    "correct": 0,
    "explanation": "Risk is not static — significant changes should trigger a re-assessment and corresponding adjustment to the test approach."
  },
  {
    "id": "tm4_q6",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why might a Test Manager maintain a formal risk register throughout a project?",
    "options": [
      "To track identified risks, their status, and mitigation actions transparently over time",
      "Because it is purely a bureaucratic formality with no practical use",
      "To replace the need for a test plan",
      "Because risk registers are only used in Waterfall projects"
    ],
    "correct": 0,
    "explanation": "A risk register gives ongoing visibility into what risks exist, their current status, and what's being done about them."
  },
  {
    "id": "tm4_q7",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which factor most directly affects a risk's IMPACT, as opposed to its likelihood?",
    "options": [
      "The severity of consequences if the risk actually occurs",
      "How frequently the underlying condition tends to occur",
      "The probability of the risk occurring at all",
      "How many testers are available"
    ],
    "correct": 0,
    "explanation": "Impact concerns the consequences/severity if the risk materializes; likelihood is a separate factor about probability of occurrence."
  },
  {
    "id": "tm4_q8",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A Test Manager decides to accept a low-impact, low-likelihood risk without further mitigation. What is this response called?",
    "options": [
      "Risk acceptance",
      "Risk avoidance",
      "Risk transfer",
      "Risk escalation"
    ],
    "correct": 0,
    "explanation": "Deliberately choosing not to act further on a minor risk, while remaining aware of it, is risk acceptance."
  },
  {
    "id": "tm4_q9",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "How can product risk analysis results best inform communication with project stakeholders?",
    "options": [
      "By clearly explaining which areas carry the most risk and why testing is focused there",
      "By hiding all risk information from stakeholders",
      "By presenting risks only after the project has already failed",
      "Risk analysis has no communication value"
    ],
    "correct": 0,
    "explanation": "Risk analysis gives the Test Manager a clear, defensible narrative for why testing effort is allocated the way it is."
  },
  {
    "id": "tm4_q10",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of these roles typically contributes valuable input during product risk identification?",
    "options": [
      "Business analysts, developers, and users/customers, alongside testers",
      "Only the Test Manager, working in isolation",
      "Only external auditors, after release",
      "No one — risk identification should be fully automated"
    ],
    "correct": 0,
    "explanation": "Effective risk identification draws on multiple perspectives — business, technical, and end-user — not just the testing team alone."
  }
];
