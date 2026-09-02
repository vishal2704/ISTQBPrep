// Question bank — Advanced Level Test Manager (CTAL-TM) — Defect Management
// 10 questions. First-pass content (no official syllabus PDF
// was provided for this cert, unlike Foundation) — solid starting coverage,
// meant to grow over time.
export const tm5Questions = [
  {
    "id": "tm5_q1",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "As a Test Manager, why would you establish a standardized defect management process across a project?",
    "options": [
      "To ensure defects are consistently recorded, triaged, tracked, and resolved",
      "To make it harder for developers to find defect reports",
      "Because defect management is legally required only in some countries",
      "To eliminate the need for any severity or priority classification"
    ],
    "correct": 0,
    "explanation": "A standardized process ensures nothing falls through the cracks and gives everyone a shared, predictable way to handle defects."
  },
  {
    "id": "tm5_q2",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A Test Manager notices defects are frequently reopened after being marked 'Fixed.' What might this indicate?",
    "options": [
      "A gap in confirmation testing or unclear reproduction steps",
      "That testing is entirely unnecessary",
      "That the defect management tool is broken",
      "That severity levels are irrelevant"
    ],
    "correct": 0,
    "explanation": "Frequent reopens often point to inadequate confirmation testing, or reports that didn't give developers what they needed to fully fix the issue."
  },
  {
    "id": "tm5_q3",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Who typically has the authority to decide a defect's PRIORITY, as opposed to its severity?",
    "options": [
      "Often a cross-functional decision involving product/business stakeholders, balancing urgency against other work",
      "Only the original tester who found the defect",
      "Only the QA automation tool",
      "Priority is always identical to severity"
    ],
    "correct": 0,
    "explanation": "Severity is a more technical/objective measure of impact; priority often involves business judgment about what to fix first, typically decided collaboratively."
  },
  {
    "id": "tm5_q4",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why might a Test Manager track defect metrics like 'average time to resolution'?",
    "options": [
      "To identify process bottlenecks and improve how quickly defects get fixed",
      "To publicly shame individual developers",
      "Because it has no practical management use",
      "To determine which programming language to use next"
    ],
    "correct": 0,
    "explanation": "Time-to-resolution trends can reveal process bottlenecks — like slow triage or unclear ownership — worth addressing."
  },
  {
    "id": "tm5_q5",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A high volume of low-severity, cosmetic defects is reported near release. What is a reasonable Test Manager response?",
    "options": [
      "Triage and prioritize based on risk and release goals, deferring low-impact ones if appropriate",
      "Automatically fix every defect regardless of severity before release",
      "Ignore the defect management process entirely",
      "Cancel the release outright"
    ],
    "correct": 0,
    "explanation": "Not every defect blocks release — sound triage weighs severity, priority, and release goals to make a reasonable call."
  },
  {
    "id": "tm5_q6",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What value does a well-defined defect lifecycle (e.g., New → Assigned → Fixed → Retest → Closed) provide?",
    "options": [
      "Clear visibility into where each defect stands and who owns the next step",
      "It guarantees defects are fixed within 24 hours",
      "It removes the need for a defect report's content fields",
      "It only applies to critical-severity defects"
    ],
    "correct": 0,
    "explanation": "A defined lifecycle gives everyone a shared, unambiguous view of a defect's current state and next owner."
  },
  {
    "id": "tm5_q7",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of these would a Test Manager most likely raise as a process concern: many defects are marked 'Cannot Reproduce.' What's a likely root cause?",
    "options": [
      "Defect reports lacking sufficiently precise steps to reproduce or environment details",
      "Testers are too skilled at finding defects",
      "The application has too few features",
      "The defect management tool doesn't support severity fields"
    ],
    "correct": 0,
    "explanation": "Vague reproduction steps or missing environment details are the most common cause of 'cannot reproduce' outcomes."
  },
  {
    "id": "tm5_q8",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "How might a Test Manager use defect data from a previous release to inform the CURRENT project's test strategy?",
    "options": [
      "By focusing extra attention on modules that historically clustered the most defects",
      "By ignoring all historical data on principle",
      "Historical defect data has no bearing on new projects",
      "By testing every module with exactly equal effort regardless of history"
    ],
    "correct": 0,
    "explanation": "This directly applies the defect clustering principle — past hot-spots are a reasonable signal for where to focus renewed attention."
  },
  {
    "id": "tm5_q9",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the Test Manager's typical role in defect triage meetings?",
    "options": [
      "Facilitating discussion and helping the team reach prioritization decisions",
      "Making every technical fix decision personally",
      "Being excluded from triage entirely",
      "Approving every defect without discussion"
    ],
    "correct": 0,
    "explanation": "Test Managers often facilitate triage, ensuring the right information and stakeholders are present to make good prioritization calls."
  },
  {
    "id": "tm5_q10",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why is it valuable for a defect management tool to integrate with the test management tool?",
    "options": [
      "It enables traceability between test cases, executions, and the defects they uncovered",
      "It has no real benefit over using two disconnected spreadsheets",
      "It replaces the need for any human judgment in triage",
      "Integration is only useful for automated tests"
    ],
    "correct": 0,
    "explanation": "Integration preserves traceability — connecting a defect back to the specific test case and execution that found it — supporting analysis and reporting."
  }
];
