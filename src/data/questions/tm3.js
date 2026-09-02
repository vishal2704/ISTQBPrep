// Question bank — Advanced Level Test Manager (CTAL-TM) — Test Planning, Monitoring and Control
// 10 questions. First-pass content (no official syllabus PDF
// was provided for this cert, unlike Foundation) — solid starting coverage,
// meant to grow over time.
export const tm3Questions = [
  {
    "id": "tm3_q1",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the main purpose of test monitoring?",
    "options": [
      "To gather information and compare actual progress against the plan",
      "To design new test cases",
      "To fix defects directly",
      "To write the final release notes"
    ],
    "correct": 0,
    "explanation": "Test monitoring is about tracking actual progress and comparing it to what was planned, providing the basis for control decisions."
  },
  {
    "id": "tm3_q2",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A test manager sees that test execution is falling behind schedule and reallocates testers to the highest-risk areas. What activity is this?",
    "options": [
      "Test control",
      "Test monitoring",
      "Test completion",
      "Test policy definition"
    ],
    "correct": 0,
    "explanation": "Taking corrective action in response to monitored deviations — like reallocating resources — is test control."
  },
  {
    "id": "tm3_q3",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of these is a leading indicator a Test Manager might track during test execution?",
    "options": [
      "Percentage of planned test cases executed so far",
      "The company's stock price",
      "The office's electricity bill",
      "The number of meetings held last quarter"
    ],
    "correct": 0,
    "explanation": "Execution percentage against the plan is a classic, directly relevant leading indicator of testing progress."
  },
  {
    "id": "tm3_q4",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A project's exit criteria specify 'no open critical defects.' Two critical defects remain open near the deadline. What should the Test Manager do?",
    "options": [
      "Escalate the situation and support a risk-based decision on release readiness",
      "Silently change the exit criteria without telling anyone",
      "Ignore the defects to hit the deadline",
      "Immediately cancel the entire project"
    ],
    "correct": 0,
    "explanation": "The Test Manager's role is to surface the situation transparently and support an informed, risk-based decision — not to unilaterally hide or ignore it."
  },
  {
    "id": "tm3_q5",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why is test estimation often revisited throughout a project rather than done only once at the start?",
    "options": [
      "Because scope, risk, and understanding evolve, making early estimates less accurate over time",
      "Because the first estimate is always wrong on purpose",
      "Because re-estimating is required by law",
      "Because it has no real value at any point"
    ],
    "correct": 0,
    "explanation": "As a project progresses, more is known — re-estimating periodically keeps planning realistic rather than anchored to early assumptions."
  },
  {
    "id": "tm3_q6",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following is a common test control action in response to schedule slippage?",
    "options": [
      "Re-prioritizing test cases based on risk",
      "Deleting the test plan entirely",
      "Removing all entry criteria retroactively",
      "Assigning zero testers to the project"
    ],
    "correct": 0,
    "explanation": "Re-prioritizing based on risk is a practical, common control action that focuses limited remaining time where it matters most."
  },
  {
    "id": "tm3_q7",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A Test Manager tracks 'defects found vs. defects fixed' over time on a chart. What is this commonly used for?",
    "options": [
      "Visualizing convergence trends to help judge release readiness",
      "Replacing the need for any test execution",
      "Setting the initial project budget",
      "Selecting which programming language to use"
    ],
    "correct": 0,
    "explanation": "Defect trend/convergence charts are a common monitoring tool to gauge whether quality is stabilizing as release approaches."
  },
  {
    "id": "tm3_q8",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a key input a Test Manager needs before producing a realistic test estimate?",
    "options": [
      "A reasonably defined scope and understanding of the product's risk areas",
      "The developers' personal preferences on frameworks",
      "The marketing team's launch date, with no other context",
      "Nothing — estimates should always be a fixed default number"
    ],
    "correct": 0,
    "explanation": "Without scope and risk understanding, any estimate is little more than a guess — these are essential inputs."
  },
  {
    "id": "tm3_q9",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following best reflects healthy test control practice?",
    "options": [
      "Continuously comparing actuals to plan and adjusting course as needed, not just once at the end",
      "Only checking progress on the final day of the project",
      "Refusing to ever change the original plan",
      "Ignoring metrics entirely and relying on intuition alone"
    ],
    "correct": 0,
    "explanation": "Test control is an ongoing cycle — monitor, compare, adjust — not a one-time, end-of-project activity."
  },
  {
    "id": "tm3_q10",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A stakeholder asks for a quick, honest view of testing status mid-sprint. What should a Test Manager prioritize sharing?",
    "options": [
      "Concise, current metrics and any risks or blockers",
      "A full historical archive of every test case ever written",
      "Unrelated details about other unrelated projects",
      "Nothing, until the sprint fully ends"
    ],
    "correct": 0,
    "explanation": "Stakeholders need timely, relevant, concise information — current status, risks, and blockers — not an unfiltered data dump."
  }
];
