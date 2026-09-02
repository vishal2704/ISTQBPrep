// Question bank — chapter5
// 102 questions (LO-tagged expansion — see
// src/data/loReference.js for the official ISTQB v4.0.1 Learning Objectives)
export const chapter5Questions = [
  {
    "id": "ch5_q1",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary purpose of test planning?",
    "hint": "Test planning defines the 'what, who, how, and when' before testing starts.",
    "options": [
      "Execute test cases",
      "Define objectives, scope and approach",
      "Fix defects",
      "Prepare release notes"
    ],
    "correct": 1,
    "explanation": "Test planning defines scope, objectives, resources, schedule and approach."
  },
  {
    "id": "ch5_q2",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which document typically describes the testing approach?",
    "hint": "This document formalizes scope, approach, resources and schedule for testing.",
    "options": [
      "Defect Report",
      "Test Plan",
      "User Manual",
      "Source Code"
    ],
    "correct": 1,
    "explanation": "The test plan documents objectives, scope and strategy."
  },
  {
    "id": "ch5_q3",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a test strategy?",
    "hint": "A test strategy is usually higher-level and more organization-wide than a test plan.",
    "options": [
      "Detailed test cases",
      "High-level description of testing approach",
      "Defect list",
      "Release schedule"
    ],
    "correct": 1,
    "explanation": "A test strategy defines the overall testing approach."
  },
  {
    "id": "ch5_q4",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the purpose of test monitoring?",
    "hint": "Monitoring is about gathering information — comparing actual progress against what?",
    "options": [
      "Track progress against plan",
      "Execute tests",
      "Fix defects",
      "Review code"
    ],
    "correct": 0,
    "explanation": "Monitoring compares actual progress against planned progress."
  },
  {
    "id": "ch5_q5",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which activity takes corrective actions when deviations occur?",
    "hint": "Control activities happen AFTER monitoring detects a deviation — think corrective action.",
    "options": [
      "Test Analysis",
      "Test Monitoring",
      "Test Control",
      "Test Closure"
    ],
    "correct": 2,
    "explanation": "Test control responds to information gathered through monitoring."
  },
  {
    "id": "ch5_q6",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which metric measures completed test cases?",
    "hint": "Look for a metric tied to progress against the planned test cases.",
    "options": [
      "Test Execution Progress",
      "Defect Density",
      "Requirement Coverage",
      "Risk Exposure"
    ],
    "correct": 0,
    "explanation": "Execution progress indicates how much testing has been completed."
  },
  {
    "id": "ch5_q7",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is risk-based testing?",
    "hint": "Risk-based testing prioritizes effort based on two factors: likelihood and...?",
    "options": [
      "Testing only high-risk areas",
      "Prioritizing testing based on risk",
      "Skipping low-risk tests",
      "Testing without planning"
    ],
    "correct": 1,
    "explanation": "Risk-based testing allocates effort according to identified risks."
  },
  {
    "id": "ch5_q8",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Risk exposure is commonly calculated using:",
    "hint": "Risk exposure is typically a product of two factors — probability times what?",
    "options": [
      "Probability × Impact",
      "Time × Cost",
      "Coverage × Defects",
      "Effort × Duration"
    ],
    "correct": 0,
    "explanation": "Risk exposure combines likelihood and impact."
  },
  {
    "id": "ch5_q9",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which risk has the highest priority?",
    "options": [
      "Low probability, low impact",
      "High probability, low impact",
      "Low probability, high impact",
      "High probability, high impact"
    ],
    "correct": 3,
    "explanation": "High probability and high impact risks are prioritized."
  },
  {
    "id": "ch5_q10",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is a product risk?",
    "options": [
      "Tester unavailable",
      "Payment processing failure",
      "Budget reduction",
      "Schedule delay"
    ],
    "correct": 1,
    "explanation": "Product risks affect software quality and operation."
  },
  {
    "id": "ch5_q11",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which is an example of a project risk?",
    "options": [
      "Application crash",
      "Incorrect calculation",
      "Insufficient test resources",
      "Security vulnerability"
    ],
    "correct": 2,
    "explanation": "Project risks affect project success rather than product quality."
  },
  {
    "id": "ch5_q12",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is an entry criterion?",
    "options": [
      "Condition required before starting an activity",
      "Condition required to finish testing",
      "Defect report",
      "Risk metric"
    ],
    "correct": 0,
    "explanation": "Entry criteria determine readiness to begin an activity."
  },
  {
    "id": "ch5_q13",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is an exit criterion?",
    "options": [
      "Condition required before testing",
      "Condition required to stop testing",
      "Project milestone",
      "Defect priority"
    ],
    "correct": 1,
    "explanation": "Exit criteria determine when testing can be completed."
  },
  {
    "id": "ch5_q14",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which metric helps evaluate test effectiveness?",
    "options": [
      "Defects found",
      "Code size",
      "Number of meetings",
      "Team size"
    ],
    "correct": 0,
    "explanation": "Defect metrics help assess testing effectiveness."
  },
  {
    "id": "ch5_q15",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "question": "Defect density measures:",
    "options": [
      "Defects per unit size",
      "Defects per tester",
      "Defects per release",
      "Defects per project"
    ],
    "correct": 0,
    "explanation": "Defect density is commonly measured per KLOC or function point."
  },
  {
    "id": "ch5_q16",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which document records details of a defect?",
    "options": [
      "Test Plan",
      "Defect Report",
      "Risk Register",
      "Review Checklist"
    ],
    "correct": 1,
    "explanation": "Defect reports document observed failures and related information."
  },
  {
    "id": "ch5_q17",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "A good defect report should be:",
    "options": [
      "Clear and reproducible",
      "Short and vague",
      "Technical only",
      "Confidential only"
    ],
    "correct": 0,
    "explanation": "Defects should be described clearly so they can be reproduced."
  },
  {
    "id": "ch5_q18",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is defect triage?",
    "options": [
      "Fixing defects",
      "Prioritizing and evaluating defects",
      "Executing tests",
      "Reviewing code"
    ],
    "correct": 1,
    "explanation": "Defect triage determines severity, priority and ownership."
  },
  {
    "id": "ch5_q19",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Configuration management helps:",
    "options": [
      "Control work product versions",
      "Execute tests",
      "Improve performance",
      "Create defects"
    ],
    "correct": 0,
    "explanation": "Configuration management ensures consistency and traceability."
  },
  {
    "id": "ch5_q20",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a configuration item?",
    "options": [
      "A managed work product",
      "A defect",
      "A test case",
      "A requirement only"
    ],
    "correct": 0,
    "explanation": "Configuration items include code, documents, testware and environments."
  },
  {
    "id": "ch5_q21",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which factor influences test effort estimation?",
    "options": [
      "Complexity",
      "Risk",
      "Resources",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Many factors influence estimation accuracy."
  },
  {
    "id": "ch5_q22",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is test completion?",
    "options": [
      "Executing tests",
      "Finalizing testing activities",
      "Fixing defects",
      "Planning tests"
    ],
    "correct": 1,
    "explanation": "Completion activities close testing and capture lessons learned."
  },
  {
    "id": "ch5_q23",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity occurs during test closure?",
    "options": [
      "Archiving testware",
      "Writing requirements",
      "Coding",
      "Deploying software"
    ],
    "correct": 0,
    "explanation": "Testware is archived for future reuse."
  },
  {
    "id": "ch5_q24",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of lessons learned sessions?",
    "options": [
      "Identify improvements",
      "Execute tests",
      "Fix defects",
      "Measure coverage"
    ],
    "correct": 0,
    "explanation": "Lessons learned help improve future projects."
  },
  {
    "id": "ch5_q25",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which report summarizes testing activities and results?",
    "options": [
      "Test Summary Report",
      "Defect Report",
      "Risk Log",
      "Requirements Document"
    ],
    "correct": 0,
    "explanation": "Test summary reports communicate testing outcomes."
  },
  {
    "id": "ch5_q26",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which stakeholder is most interested in test status?",
    "options": [
      "Project Manager",
      "Customer",
      "Developer",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Many stakeholders rely on testing information."
  },
  {
    "id": "ch5_q27",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "A defect causing system outage should likely have:",
    "options": [
      "Low priority",
      "Medium priority",
      "High priority",
      "No priority"
    ],
    "correct": 2,
    "explanation": "Critical business impact typically results in high priority."
  },
  {
    "id": "ch5_q28",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Severity describes:",
    "options": [
      "Business urgency",
      "Impact of the defect",
      "Fix effort",
      "Test coverage"
    ],
    "correct": 1,
    "explanation": "Severity reflects technical/business impact."
  },
  {
    "id": "ch5_q29",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Priority describes:",
    "options": [
      "When a defect should be fixed",
      "Impact only",
      "Root cause",
      "Risk exposure"
    ],
    "correct": 0,
    "explanation": "Priority determines urgency of fixing."
  },
  {
    "id": "ch5_q30",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which metric can help identify defect trends?",
    "options": [
      "Defect Arrival Rate",
      "Team Size",
      "Code Comments",
      "Meeting Count"
    ],
    "correct": 0,
    "explanation": "Defect trends help assess product quality and readiness."
  },
  {
    "id": "ch5_q31",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which factor should influence testing priority?",
    "options": [
      "Risk",
      "Business importance",
      "Usage frequency",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Multiple factors contribute to prioritization."
  },
  {
    "id": "ch5_q32",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is test control most likely to do?",
    "options": [
      "Adjust schedules",
      "Add resources",
      "Re-prioritize testing",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Control activities respond to project realities."
  },
  {
    "id": "ch5_q33",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why is traceability important?",
    "options": [
      "Links requirements, tests and defects",
      "Improves performance",
      "Reduces coding effort",
      "Eliminates risk"
    ],
    "correct": 0,
    "explanation": "Traceability supports impact analysis and coverage assessment."
  },
  {
    "id": "ch5_q34",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a common test completion criterion?",
    "options": [
      "Required coverage achieved",
      "All defects fixed",
      "All requirements changed",
      "All risks eliminated"
    ],
    "correct": 0,
    "explanation": "Coverage targets are common exit criteria."
  },
  {
    "id": "ch5_q35",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which activity supports impact analysis?",
    "options": [
      "Traceability",
      "Exploratory Testing",
      "Static Analysis",
      "Error Guessing"
    ],
    "correct": 0,
    "explanation": "Traceability helps identify affected items."
  },
  {
    "id": "ch5_q36",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the purpose of a risk register?",
    "options": [
      "Track identified risks",
      "Execute tests",
      "Store defects",
      "Manage environments"
    ],
    "correct": 0,
    "explanation": "Risk registers document and monitor project/product risks."
  },
  {
    "id": "ch5_q37",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which testing activity benefits most from historical data?",
    "options": [
      "Estimation",
      "Coding",
      "Deployment",
      "Debugging"
    ],
    "correct": 0,
    "explanation": "Past project data improves estimation accuracy."
  },
  {
    "id": "ch5_q38",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which report helps stakeholders make release decisions?",
    "options": [
      "Test Summary Report",
      "Code Review Report",
      "Design Document",
      "Training Plan"
    ],
    "correct": 0,
    "explanation": "Test summary reports provide quality information for decisions."
  },
  {
    "id": "ch5_q39",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of quality metrics?",
    "options": [
      "Provide objective information",
      "Replace testing",
      "Reduce communication",
      "Guarantee quality"
    ],
    "correct": 0,
    "explanation": "Metrics support informed decision-making."
  },
  {
    "id": "ch5_q40",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which statement about risk-based testing is TRUE?",
    "options": [
      "Low-risk areas are never tested",
      "Testing effort is aligned with risk",
      "Only product risks matter",
      "Risk cannot change during projects"
    ],
    "correct": 1,
    "explanation": "Risk-based testing prioritizes effort according to risk exposure."
  },
  {
    "id": "ch5_q41",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity compares actual progress against planned progress?",
    "options": [
      "Test Control",
      "Test Monitoring",
      "Test Closure",
      "Defect Triage"
    ],
    "correct": 1,
    "explanation": "Monitoring tracks project status."
  },
  {
    "id": "ch5_q42",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a major purpose of a test plan?",
    "options": [
      "Fix defects",
      "Define testing approach",
      "Execute tests",
      "Deploy software"
    ],
    "correct": 1,
    "explanation": "The test plan defines scope and strategy."
  },
  {
    "id": "ch5_q43",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which metric indicates testing progress?",
    "options": [
      "Defect Severity",
      "Executed Test Cases",
      "Team Size",
      "Code Coverage Only"
    ],
    "correct": 1,
    "explanation": "Execution progress is a key testing metric."
  },
  {
    "id": "ch5_q44",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which risk is a project risk?",
    "options": [
      "Incorrect tax calculation",
      "Login failure",
      "Lack of skilled testers",
      "Broken payment gateway"
    ],
    "correct": 2,
    "explanation": "Resource issues are project risks."
  },
  {
    "id": "ch5_q45",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary goal of defect triage?",
    "options": [
      "Fix defects",
      "Prioritize and assign defects",
      "Execute tests",
      "Review code"
    ],
    "correct": 1,
    "explanation": "Triage determines priority and ownership."
  },
  {
    "id": "ch5_q46",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which document tracks identified risks?",
    "options": [
      "Defect Report",
      "Risk Register",
      "Test Script",
      "Release Note"
    ],
    "correct": 1,
    "explanation": "The risk register stores project and product risks."
  },
  {
    "id": "ch5_q47",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which factor is used in risk exposure calculation?",
    "options": [
      "Probability",
      "Impact",
      "Both Probability and Impact",
      "Coverage"
    ],
    "correct": 2,
    "explanation": "Risk exposure is Probability × Impact."
  },
  {
    "id": "ch5_q48",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of configuration management?",
    "options": [
      "Execute tests",
      "Manage versions of work products",
      "Create test cases",
      "Fix defects"
    ],
    "correct": 1,
    "explanation": "Configuration management ensures version control and traceability."
  },
  {
    "id": "ch5_q49",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which report helps stakeholders decide whether to release software?",
    "options": [
      "Risk Register",
      "Defect Log",
      "Test Summary Report",
      "User Guide"
    ],
    "correct": 2,
    "explanation": "Test summary reports support release decisions."
  },
  {
    "id": "ch5_q50",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which activity archives testware and captures lessons learned?",
    "options": [
      "Test Analysis",
      "Test Monitoring",
      "Test Closure",
      "Test Execution"
    ],
    "correct": 2,
    "explanation": "Closure finalizes testing activities."
  },
  {
    "id": "chapter5_lo_511",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.1",
    "kLevel": "K2",
    "question": "What does a test plan typically describe?",
    "options": [
      "The scope, approach, resources, and schedule of intended test activities",
      "Only the final test results",
      "Only the defect list",
      "Only the source code structure"
    ],
    "correct": 0,
    "explanation": "A test plan documents the scope, approach, resources, and schedule for the testing to be performed."
  },
  {
    "id": "chapter5_lo_512",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.2",
    "kLevel": "K1",
    "question": "How can a tester add value during iteration and release planning?",
    "options": [
      "By identifying testability risks and estimating the testing effort needed for planned work",
      "By writing all the production code",
      "By skipping planning meetings entirely",
      "By only getting involved after release"
    ],
    "correct": 0,
    "explanation": "Testers contribute to planning by spotting testability concerns early and estimating how much test effort upcoming work will require."
  },
  {
    "id": "chapter5_lo_513",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.3",
    "kLevel": "K2",
    "question": "What is the difference between entry criteria and exit criteria?",
    "options": [
      "Entry criteria must be met before testing can start; exit criteria must be met before testing is considered complete",
      "They are the same thing with different names",
      "Exit criteria are defined before entry criteria are met",
      "Entry criteria apply only to acceptance testing"
    ],
    "correct": 0,
    "explanation": "Entry criteria gate the start of a test activity or level; exit criteria gate when it can be considered finished."
  },
  {
    "id": "chapter5_lo_514",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.1.4",
    "kLevel": "K3",
    "question": "A test manager estimates effort by comparing the current project to a similar, already-completed project with known actual effort. Which estimation technique is this?",
    "options": [
      "Analogy-based estimation",
      "Expert-based estimation",
      "Parametric estimation",
      "Risk-based estimation"
    ],
    "correct": 0,
    "explanation": "Analogy-based estimation compares the current project to a similar past one; expert-based relies on individual judgment, and parametric estimation uses a formula from measurable characteristics."
  },
  {
    "id": "chapter5_lo_515",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.1.5",
    "kLevel": "K3",
    "question": "With limited time before release, a team runs the test cases covering the highest-risk features first. What prioritization approach is this?",
    "options": [
      "Risk-based prioritization",
      "Random prioritization",
      "Alphabetical prioritization",
      "No prioritization — all tests run in original order"
    ],
    "correct": 0,
    "explanation": "Prioritizing by risk ensures the most critical checks happen even if time runs out before every test case can be executed."
  },
  {
    "id": "chapter5_lo_516",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.6",
    "kLevel": "K1",
    "question": "What does the test pyramid recommend regarding the proportion of test types?",
    "options": [
      "A broad base of many fast, low-level automated tests, and progressively fewer higher-level tests",
      "An equal number of tests at every level",
      "Only end-to-end UI tests, with no unit tests",
      "No automated tests at any level"
    ],
    "correct": 0,
    "explanation": "The test pyramid favors many fast, cheap low-level tests at the base, with fewer slow, expensive high-level tests near the top."
  },
  {
    "id": "chapter5_lo_517",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.7",
    "kLevel": "K2",
    "question": "The testing quadrants model relates test types to two dimensions. What are they?",
    "options": [
      "Whether tests support the team (technology/business-facing) and whether they critique the product or guide development",
      "Test cost and test duration only",
      "Manual vs. automated only",
      "Chapter number and difficulty level"
    ],
    "correct": 0,
    "explanation": "The quadrants classify tests by audience (technology-facing vs. business-facing) and purpose (guiding development vs. critiquing the finished product)."
  },
  {
    "id": "chapter5_lo_521",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.2.1",
    "kLevel": "K3",
    "question": "A risk has a HIGH likelihood and a HIGH impact. Using the standard formula (risk level = likelihood × impact), what is the resulting risk level?",
    "options": [
      "High — both factors being high compounds into an overall high risk level",
      "Low — high likelihood cancels out high impact",
      "Risk level cannot be determined from likelihood and impact",
      "Medium, regardless of the individual factor values"
    ],
    "correct": 0,
    "explanation": "Risk level is typically calculated as a function of likelihood × impact — when both are high, the resulting risk level is high."
  },
  {
    "id": "chapter5_lo_522",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.2.2",
    "kLevel": "K2",
    "question": "A key team member unexpectedly resigns mid-project, threatening the schedule. What type of risk is this?",
    "options": [
      "A project risk",
      "A product risk",
      "A test technique",
      "A test type"
    ],
    "correct": 0,
    "explanation": "Project risks concern project management factors like staffing, schedule, and budget. Product risks concern the quality of the deliverable itself."
  },
  {
    "id": "chapter5_lo_523",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.3",
    "kLevel": "K2",
    "question": "How does product risk analysis typically influence testing?",
    "options": [
      "Higher-risk areas receive more thorough testing and are prioritized earlier",
      "All features get exactly equal testing regardless of risk",
      "Risk analysis only affects the development team, not testing",
      "Product risk analysis is performed only after release"
    ],
    "correct": 0,
    "explanation": "Product risk analysis directly shapes test scope and thoroughness — higher-risk areas justify more testing effort, prioritized earlier."
  },
  {
    "id": "chapter5_lo_524",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.4",
    "kLevel": "K2",
    "question": "Which of the following is a typical response to a high product risk?",
    "options": [
      "Selecting a more rigorous test technique or increasing test coverage for that area",
      "Ignoring the risk and hoping it doesn't materialize",
      "Removing all testing from that feature",
      "Deferring the risk analysis until after release"
    ],
    "correct": 0,
    "explanation": "In response to high product risk, teams typically apply more rigorous techniques or increase coverage in that area to reduce the risk."
  },
  {
    "id": "chapter5_lo_531",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.3.1",
    "kLevel": "K1",
    "question": "Which of the following is a commonly used test metric?",
    "options": [
      "Percentage of test cases executed and passed",
      "Number of developers on the team",
      "Office location of the QA team",
      "Company's annual revenue"
    ],
    "correct": 0,
    "explanation": "Common test metrics include percentage of test cases executed/passed, defect density, and test coverage — measurements tied directly to testing progress and quality."
  },
  {
    "id": "chapter5_lo_532",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.3.2",
    "kLevel": "K2",
    "question": "Who is a typical audience for a test summary report?",
    "options": [
      "Project stakeholders and management who need to make release decisions",
      "Only the individual tester who wrote it",
      "External customers with no involvement in the project",
      "No one — reports are archived unread"
    ],
    "correct": 0,
    "explanation": "Test reports are written for stakeholders and management, giving them the information needed to make informed release decisions."
  },
  {
    "id": "chapter5_lo_533",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.3.3",
    "kLevel": "K2",
    "question": "Which is an effective way to communicate ongoing test status to stakeholders?",
    "options": [
      "Regular, concise progress updates highlighting risks, blockers, and metrics",
      "Waiting until the very end of the project to share any information",
      "Sharing only raw, unfiltered log files",
      "Communicating status verbally with no documentation at all"
    ],
    "correct": 0,
    "explanation": "Effective status communication is regular, concise, and focused on what stakeholders need — progress, risks, and blockers — not raw data dumps."
  },
  {
    "id": "chapter5_lo_541",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.4.1",
    "kLevel": "K2",
    "question": "How does configuration management support testing?",
    "options": [
      "It ensures test items, tools, and testware are uniquely identified, versioned, and traceable",
      "It replaces the need for a test plan",
      "It automatically writes test cases",
      "It is unrelated to testing activities"
    ],
    "correct": 0,
    "explanation": "Configuration management keeps test items and testware under version control, ensuring traceability and reproducibility of test results."
  },
  {
    "id": "chapter5_lo_551",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.5.1",
    "kLevel": "K3",
    "question": "Which set of elements should a well-written defect report include?",
    "options": [
      "ID, summary, environment, steps to reproduce, expected vs. actual result, severity, and priority",
      "Only the tester's name and the date",
      "Only a screenshot, with no other information",
      "Only the defect's severity, with no reproduction steps"
    ],
    "correct": 0,
    "explanation": "A complete defect report lets anyone reproduce and understand the issue: a unique ID, clear summary, environment, precise reproduction steps, expected vs. actual results, and severity/priority for triage."
  },
  {
    "id": "ch5_ex1",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.1",
    "kLevel": "K2",
    "question": "Which of the following would you typically NOT expect to find inside a test plan?",
    "options": [
      "The full production source code",
      "The scope and objectives of testing",
      "The test approach and resource allocation",
      "The schedule and milestones for test activities"
    ],
    "correct": 0,
    "explanation": "A test plan documents scope, approach, resources, and schedule — it references the software under test, but never contains the actual source code itself."
  },
  {
    "id": "ch5_ex2",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.3",
    "kLevel": "K2",
    "question": "A test level's exit criteria include \"95% of planned test cases executed and no open critical defects.\" What is the purpose of this criteria?",
    "options": [
      "To define when that test level can be considered complete",
      "To define when testing is allowed to begin",
      "To replace the need for a test report",
      "To assign roles to testers"
    ],
    "correct": 0,
    "explanation": "Exit criteria define the conditions under which a test level (or the whole test effort) can be considered finished."
  },
  {
    "id": "ch5_ex3",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.1.4",
    "kLevel": "K3",
    "question": "Which TWO of the following are recognized test estimation techniques? (Select 2)",
    "options": [
      "Expert-based estimation",
      "Parametric estimation",
      "Alphabetical estimation",
      "Random estimation"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Expert-based estimation relies on the judgment of experienced individuals; parametric estimation uses a formula from measurable project characteristics. \"Alphabetical\" and \"random\" are not real estimation techniques."
  },
  {
    "id": "ch5_ex4",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-5.1.5",
    "kLevel": "K3",
    "question": "A team prioritizes test cases so that tests covering the most frequently used features run first, on the assumption those areas matter most to users. What is this an example of?",
    "options": [
      "Test case prioritization based on requirement/feature importance",
      "Random prioritization",
      "State transition testing",
      "Confirmation testing"
    ],
    "correct": 0,
    "explanation": "Test case prioritization can be based on several factors — risk, coverage, regression likelihood, or (as here) how important/frequently-used a requirement is."
  },
  {
    "id": "ch5_ex5",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.6",
    "kLevel": "K1",
    "question": "In the test pyramid metaphor, which level typically has the FEWEST tests?",
    "options": [
      "The top level (e.g., end-to-end UI tests)",
      "The bottom level (e.g., unit tests)",
      "All levels have an equal number",
      "The pyramid does not define relative counts"
    ],
    "correct": 0,
    "explanation": "The test pyramid narrows toward the top — fewer, slower, more expensive tests at higher levels, and many fast, cheap tests at the base."
  },
  {
    "id": "ch5_ex6",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.7",
    "kLevel": "K2",
    "question": "A performance test that helps the team understand acceptable response times BEFORE the feature is built would sit in which testing quadrant?",
    "options": [
      "Q1 — technology-facing, supporting the team",
      "Q3 — business-facing, critiquing the product",
      "Q4 — technology-facing, critiquing the product",
      "None — performance tests aren't part of the quadrants model"
    ],
    "correct": 0,
    "explanation": "Tests that are technology-facing and guide/support development (like defining performance targets up front) belong in Quadrant 1 of the testing quadrants model."
  },
  {
    "id": "ch5_ex7",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.2.1",
    "kLevel": "K1",
    "question": "A risk is rated 4 out of 5 for likelihood and 3 out of 5 for impact. Using risk level = likelihood × impact, what numeric risk level results?",
    "options": [
      "12",
      "7",
      "43",
      "1"
    ],
    "correct": 0,
    "explanation": "Risk level = likelihood × impact = 4 × 3 = 12. This kind of numeric scoring lets teams rank and prioritize risks consistently."
  },
  {
    "id": "ch5_ex8",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.2.2",
    "kLevel": "K2",
    "question": "Which TWO of the following are examples of PRODUCT risks, not project risks? (Select 2)",
    "options": [
      "The checkout feature may fail under high load",
      "The application may have poor usability for new users",
      "The test team may be understaffed for the deadline",
      "The project budget may be cut mid-development"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Product risks concern the quality of the deliverable itself — like performance or usability issues. Staffing and budget concerns are project risks, about managing the project."
  },
  {
    "id": "ch5_ex9",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.3",
    "kLevel": "K2",
    "question": "A feature is flagged as very high product risk. What is the most likely effect on test scope for that feature?",
    "options": [
      "It receives deeper, more thorough test coverage than lower-risk features",
      "It is excluded from testing entirely to save time",
      "It is tested with exactly the same depth as every other feature",
      "Testing is deferred until after release"
    ],
    "correct": 0,
    "explanation": "Higher product risk typically justifies more thorough testing, since the potential cost of a defect slipping through is greater."
  },
  {
    "id": "ch5_ex10",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.4",
    "kLevel": "K2",
    "question": "Besides increasing test effort, what is another valid response to a high product risk?",
    "options": [
      "Introducing redundancy or safety mechanisms in the design to reduce the risk's impact",
      "Ignoring the risk until a defect is reported in production",
      "Removing the risk register from the project entirely",
      "Assigning the risk to marketing instead of engineering"
    ],
    "correct": 0,
    "explanation": "Risk responses aren't limited to testing more — they can include design changes, redundancy, or safety mechanisms that reduce the risk's likelihood or impact directly."
  },
  {
    "id": "ch5_ex11",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.3.1",
    "kLevel": "K1",
    "question": "Which TWO of the following are commonly used as test metrics? (Select 2)",
    "options": [
      "Defect density",
      "Percentage of test cases executed",
      "The tester's favorite programming language",
      "The office's coffee consumption"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Defect density and test-case execution percentage are standard test metrics tied to progress and quality; the other options aren't meaningful measurements of testing."
  },
  {
    "id": "ch5_ex12",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.3.2",
    "kLevel": "K2",
    "question": "What is a primary purpose of a test completion report?",
    "options": [
      "To summarize testing activities and results so stakeholders can make a release decision",
      "To replace the original test plan",
      "To list only the passing test cases",
      "To document the source code architecture"
    ],
    "correct": 0,
    "explanation": "A test report (or completion report) summarizes what was tested, the results, and outstanding risks, giving stakeholders what they need to decide on release."
  },
  {
    "id": "ch5_ex13",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.3.3",
    "kLevel": "K2",
    "question": "During a project, testing falls significantly behind schedule. What is the best way for a tester to communicate this?",
    "options": [
      "Proactively flag it with concrete numbers (e.g., % complete, blockers) as soon as it's identified",
      "Wait until the final report to mention it",
      "Say nothing and hope the schedule recovers on its own",
      "Only mention it if directly asked in a meeting"
    ],
    "correct": 0,
    "explanation": "Effective status communication is proactive and concrete — surfacing schedule risk early gives the team time to respond, rather than waiting until it's too late."
  },
  {
    "id": "ch5_ex14",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.4.1",
    "kLevel": "K2",
    "question": "Without configuration management, what problem is a test team most likely to encounter?",
    "options": [
      "Difficulty reproducing a defect because it's unclear which version of the software and testware was used",
      "Automatic generation of test cases",
      "Faster defect resolution times",
      "Reduced need for test environments"
    ],
    "correct": 0,
    "explanation": "Configuration management keeps versions of the software and testware identified and traceable — without it, reproducing an issue reliably becomes very difficult."
  },
  {
    "id": "ch5_ex15",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "matching",
    "lo": "FL-5.5.1",
    "kLevel": "K3",
    "question": "Match each defect report field with what it's meant to capture.",
    "leftItems": [
      "Severity",
      "Priority",
      "Steps to reproduce",
      "Expected vs. actual result"
    ],
    "rightItems": [
      "How urgently the defect should be fixed relative to other work",
      "How serious the defect's impact is on the system",
      "The precise sequence of actions needed to trigger the defect",
      "What should have happened, compared to what actually happened"
    ],
    "correctPairs": {
      "0": 1,
      "1": 0,
      "2": 2,
      "3": 3
    },
    "explanation": "Severity measures impact; priority measures urgency of fixing; steps to reproduce let anyone trigger the defect; expected vs. actual pinpoints exactly what's wrong."
  },
  {
    "id": "ch5_ex16",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.2",
    "kLevel": "K1",
    "question": "During release planning, a tester raises a concern that a proposed feature will be very difficult to test in isolation. What value is the tester adding?",
    "options": [
      "Identifying a testability risk early, before development effort is committed",
      "Writing the feature's production code",
      "Approving the project budget",
      "Replacing the product owner's role"
    ],
    "correct": 0,
    "explanation": "Testers add value in planning by flagging testability concerns and estimating test effort — well before code is written, when it's cheapest to address."
  },
  {
    "id": "ch5_ex17",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.1.4",
    "kLevel": "K3",
    "question": "A test manager asks three senior testers to independently estimate the effort for a new module, then averages their answers. Which estimation technique does this best represent?",
    "options": [
      "Expert-based estimation",
      "Parametric estimation",
      "Analogy-based estimation",
      "This isn't a recognized estimation technique"
    ],
    "correct": 0,
    "explanation": "Relying on the judgment of experienced individuals — even multiple experts averaged together — is expert-based estimation."
  },
  {
    "id": "ch5_ex18",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.1",
    "kLevel": "K1",
    "question": "Two risks have the same likelihood, but Risk A has a higher impact than Risk B. According to risk level = likelihood × impact, which is true?",
    "options": [
      "Risk A has a higher risk level than Risk B",
      "Risk B has a higher risk level than Risk A",
      "Both risks always have equal risk level",
      "Impact doesn't affect risk level"
    ],
    "correct": 0,
    "explanation": "With likelihood held equal, a higher impact directly produces a higher risk level, since risk level is the product of the two factors."
  },
  {
    "id": "ch5_ex19",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.3.1",
    "kLevel": "K1",
    "question": "A dashboard shows \"Defect density: 2.3 defects per 100 lines of code.\" What kind of information is this?",
    "options": [
      "A test metric",
      "A test case",
      "A risk level",
      "A test technique"
    ],
    "correct": 0,
    "explanation": "Defect density is a classic test metric — a measurement of a product attribute used to track and communicate quality."
  },
  {
    "id": "ch5_ex20",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.1.7",
    "kLevel": "K2",
    "question": "Which TWO statements about the testing quadrants model are correct? (Select 2)",
    "options": [
      "It classifies tests as either technology-facing or business-facing",
      "It classifies tests as either guiding development or critiquing the product",
      "It replaces the need for any test levels",
      "It only applies to manual testing, never automation"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The testing quadrants model relates tests along two axes: audience (technology-facing vs. business-facing) and purpose (supporting the team vs. critiquing the product)."
  },
  {
    "id": "ch5_ex21",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.1",
    "kLevel": "K2",
    "question": "Who is typically the primary audience for a detailed test plan?",
    "options": [
      "Project stakeholders, test managers, and the test team coordinating the effort",
      "End users of the final product only",
      "External auditors with no project involvement",
      "Marketing teams preparing a launch campaign"
    ],
    "correct": 0,
    "explanation": "A test plan is an internal coordination document, primarily read by those planning, managing, and executing testing, and by stakeholders tracking progress."
  },
  {
    "id": "ch5_ex22",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.1.3",
    "kLevel": "K2",
    "question": "A test level defines an entry criterion of \"requirements have been reviewed and approved.\" What happens if this criterion isn't met?",
    "options": [
      "Testing at that level should not begin until the criterion is satisfied",
      "Testing proceeds anyway, since entry criteria are optional",
      "The exit criteria are automatically waived",
      "The test plan must be discarded"
    ],
    "correct": 0,
    "explanation": "Entry criteria gate the start of a test activity — if unmet, the team should either wait or make a risk-based decision to proceed, but the gate exists precisely to prevent premature starts."
  },
  {
    "id": "ch5_ex23",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.1.4",
    "kLevel": "K3",
    "question": "A test manager uses a formula based on the number of requirements and average historical effort per requirement to calculate the needed test effort. Which estimation technique is this?",
    "options": [
      "Parametric estimation",
      "Expert-based estimation",
      "Analogy-based estimation",
      "Guessing"
    ],
    "correct": 0,
    "explanation": "Parametric estimation applies a formula derived from measurable project characteristics — like requirement count and historical effort per requirement — to calculate an estimate."
  },
  {
    "id": "ch5_ex24",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.1.5",
    "kLevel": "K3",
    "question": "Which TWO factors commonly drive test case prioritization? (Select 2)",
    "options": [
      "Risk level of the feature",
      "Likelihood of regression in that area",
      "The tester's personal favorite features",
      "Alphabetical order of test case names"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Risk and regression likelihood are both recognized, meaningful bases for prioritization. Personal preference and alphabetical order are not systematic prioritization criteria."
  },
  {
    "id": "ch5_ex25",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.6",
    "kLevel": "K1",
    "question": "Which test level sits at the base of the test pyramid, typically with the most tests?",
    "options": [
      "Unit/component-level tests",
      "End-to-end system tests",
      "Manual exploratory sessions",
      "User acceptance tests"
    ],
    "correct": 0,
    "explanation": "The pyramid's wide base is made up of many fast, cheap, low-level tests — typically unit or component tests."
  },
  {
    "id": "ch5_ex26",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.1.7",
    "kLevel": "K2",
    "question": "A usability test session with real users, conducted to validate the finished feature, best fits which testing quadrant?",
    "options": [
      "Q3 — business-facing, critiquing the product",
      "Q1 — technology-facing, supporting the team",
      "Q2 — business-facing, supporting the team",
      "Q4 — technology-facing, critiquing the product"
    ],
    "correct": 0,
    "explanation": "Usability validation with real users is business-facing (about real user experience) and critiques the finished product, placing it in Quadrant 3."
  },
  {
    "id": "ch5_ex27",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.2.1",
    "kLevel": "K1",
    "question": "A risk is rated 2 out of 5 for likelihood and 5 out of 5 for impact. What is the resulting risk level (likelihood × impact)?",
    "options": [
      "10",
      "7",
      "25",
      "2"
    ],
    "correct": 0,
    "explanation": "Risk level = likelihood × impact = 2 × 5 = 10."
  },
  {
    "id": "ch5_ex28",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.2",
    "kLevel": "K2",
    "question": "A required third-party API turns out to be poorly documented, threatening the accuracy of an integration feature. What type of risk is this?",
    "options": [
      "A product risk",
      "A project risk",
      "A test technique",
      "A test metric"
    ],
    "correct": 0,
    "explanation": "This threatens the quality/correctness of the deliverable itself (the integration feature), making it a product risk rather than a project management concern."
  },
  {
    "id": "ch5_ex29",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.3",
    "kLevel": "K2",
    "question": "Two features have equal development effort, but Feature A is rated much higher risk than Feature B. How should test scope typically differ between them?",
    "options": [
      "Feature A should generally receive more thorough test coverage than Feature B",
      "Both should get identical, minimal testing",
      "Feature B should get more testing since it's \"safer\" to test",
      "Risk rating has no bearing on test scope"
    ],
    "correct": 0,
    "explanation": "Product risk analysis directly informs test scope — higher-risk features justify deeper, more thorough coverage regardless of development effort."
  },
  {
    "id": "ch5_ex30",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.2.4",
    "kLevel": "K2",
    "question": "Which of the following is a valid risk response for a high-risk area, besides testing more?",
    "options": [
      "Assigning a more experienced developer or reviewer to that area",
      "Removing all documentation for that feature",
      "Publicly announcing the risk to competitors",
      "Ignoring the risk if the deadline is tight"
    ],
    "correct": 0,
    "explanation": "Risk responses can include process changes like assigning more experienced people, not just increasing test effort — both reduce the chance or impact of the risk."
  },
  {
    "id": "ch5_ex31",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.3.1",
    "kLevel": "K1",
    "question": "Which pairing correctly matches a metric with what it measures?",
    "options": [
      "Defect density — defects found per unit of code size",
      "Test plan — a measurement of code complexity",
      "Entry criteria — a count of executed test cases",
      "Configuration item — a percentage of test coverage"
    ],
    "correct": 0,
    "explanation": "Defect density measures how many defects were found relative to a unit of code size (e.g. per KLOC), a genuine test metric."
  },
  {
    "id": "ch5_ex32",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.3.2",
    "kLevel": "K2",
    "question": "Which of these would you expect a good test summary report to include?",
    "options": [
      "A summary of what was tested, key results, and any outstanding risks",
      "The complete git commit history of the project",
      "Every individual keystroke made by testers",
      "The personal opinions of unrelated team members"
    ],
    "correct": 0,
    "explanation": "A test summary report focuses on what stakeholders need: scope tested, results achieved, and risks remaining — concise, decision-relevant information."
  },
  {
    "id": "ch5_ex33",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-5.4.1",
    "kLevel": "K2",
    "question": "A test case references \"App v2.3, build 114\" and links to the exact test data file used. What does this best illustrate?",
    "options": [
      "Configuration management supporting traceability and reproducibility",
      "A defect report",
      "A risk-based testing strategy",
      "The testing quadrants model"
    ],
    "correct": 0,
    "explanation": "Precisely identifying which version and build was tested, and with which data, is exactly what configuration management enables — reproducible, traceable results."
  },
  {
    "id": "ch5_ex34",
    "chapter": "chapter5",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-5.5.1",
    "kLevel": "K3",
    "question": "A defect report says only: \"Login is broken.\" What is the biggest problem with this report?",
    "options": [
      "It lacks steps to reproduce, environment, and expected vs. actual results, making it hard to act on",
      "It is too long and detailed",
      "It includes too many screenshots",
      "It correctly follows the standard defect report format"
    ],
    "correct": 0,
    "explanation": "Without reproduction steps, environment details, and a clear expected-vs-actual description, a defect report gives the developer almost nothing to act on."
  },
  {
    "id": "ch5_ex35",
    "chapter": "chapter5",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-5.1.2",
    "kLevel": "K1",
    "question": "During sprint planning, a tester estimates that a proposed story will require significant test data setup. How does sharing this help the team?",
    "options": [
      "It lets the team account for that extra effort when committing to the sprint's scope",
      "It has no effect on planning decisions",
      "It obligates the tester to write the code themselves",
      "It automatically removes the story from the sprint"
    ],
    "correct": 0,
    "explanation": "Surfacing testing effort and complexity during planning helps the team make a realistic commitment, rather than discovering the extra work mid-sprint."
  },
  {
    "id": "ch5_ex36",
    "chapter": "chapter5",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-5.2.1",
    "kLevel": "K1",
    "question": "Which TWO factors are combined to calculate a risk's level? (Select 2)",
    "options": [
      "Likelihood",
      "Impact",
      "Team size",
      "Programming language used"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Risk level is a function of likelihood and impact (risk level = likelihood × impact) — team size and programming language aren't part of the standard formula."
  }
];
