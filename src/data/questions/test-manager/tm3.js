// Question bank — test-manager/tm3
// 23 questions
export const tm3Questions = [
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
    "explanation": "Execution percentage against the plan is a classic, directly relevant leading indicator of testing progress.",
    "questionVariations": [
      "Of the options listed, which of these is a leading indicator a Test Manager might track during test execution?"
    ]
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
    "explanation": "As a project progresses, more is known — re-estimating periodically keeps planning realistic rather than anchored to early assumptions.",
    "questionVariations": [
      "In ISTQB terms, why is test estimation often revisited throughout a project rather than done only once at the start?"
    ]
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
    "explanation": "Re-prioritizing based on risk is a practical, common control action that focuses limited remaining time where it matters most.",
    "questionVariations": [
      "Which option is a common test control action in response to schedule slippage?",
      "From the choices below, which is a common test control action in response to schedule slippage?"
    ]
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
    "explanation": "Without scope and risk understanding, any estimate is little more than a guess — these are essential inputs.",
    "questionVariations": [
      "In ISTQB terminology, what is a key input a Test Manager needs before producing a realistic test estimate?"
    ]
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
    "explanation": "Test control is an ongoing cycle — monitor, compare, adjust — not a one-time, end-of-project activity.",
    "questionVariations": [
      "Which option best reflects healthy test control practice?",
      "From the options below, which best reflects healthy test control practice?"
    ]
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
  },
  {
    "id": "tm3_v2_1",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A Test Manager notices that test execution progress looks healthy but defect detection has dropped sharply. What is a reasonable interpretation to investigate?",
    "options": [
      "Tests may be passing because they are no longer challenging the product, not because quality improved",
      "The product is definitively defect-free",
      "Monitoring should be stopped",
      "Execution percentage is the only metric that matters"
    ],
    "correct": 0,
    "explanation": "Falling defect detection alongside high execution can indicate the pesticide paradox — suites that no longer find new problems."
  },
  {
    "id": "tm3_v2_2",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the relationship between test monitoring and test control?",
    "options": [
      "Monitoring gathers the information that control actions are based upon",
      "They are unrelated activities",
      "Control always precedes monitoring",
      "Monitoring replaces the need for control"
    ],
    "correct": 0,
    "explanation": "Monitoring supplies the data; control is the corrective action taken in response to what the data reveals.",
    "questionVariations": [
      "In ISTQB terminology, what is the relationship between test monitoring and test control?"
    ]
  },
  {
    "id": "tm3_v2_3",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which situation most clearly calls for a test control action?",
    "options": [
      "Actual progress has diverged significantly from the plan",
      "Testing is proceeding exactly as planned",
      "The project has not yet started",
      "All exit criteria have already been met"
    ],
    "correct": 0,
    "explanation": "Control actions are triggered by meaningful deviations between actual progress and the plan.",
    "questionVariations": [
      "Of the options listed, which situation most clearly calls for a test control action?"
    ]
  },
  {
    "id": "tm3_v2_4",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why can 'number of test cases executed' be a misleading measure of progress on its own?",
    "options": [
      "It says nothing about the importance, risk coverage, or pass rate of those tests",
      "It is impossible to measure accurately",
      "It only applies to automated tests",
      "It is forbidden by ISTQB"
    ],
    "correct": 0,
    "explanation": "Volume alone ignores whether the executed tests covered high-risk areas or whether they actually passed.",
    "questionVariations": [
      "In ISTQB terms, why can 'number of test cases executed' be a misleading measure of progress on its own?"
    ]
  },
  {
    "id": "tm3_v2_5",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A Test Manager must estimate effort for a project with genuinely novel technology and no historical analogue. Which approach is most defensible?",
    "options": [
      "Expert-based estimation with explicitly documented assumptions and uncertainty",
      "Analogy-based estimation using an unrelated project",
      "Refusing to provide any estimate",
      "Parametric estimation based on unavailable historical data"
    ],
    "correct": 0,
    "explanation": "With no comparable history, expert judgment with stated assumptions is most defensible — and the uncertainty should be made explicit."
  },
  {
    "id": "tm3_v2_6",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the value of re-estimating after the first iteration of a project?",
    "options": [
      "Actual measured velocity replaces assumptions, improving forecast accuracy",
      "It demonstrates the original estimate was dishonest",
      "It is required before any testing may begin",
      "Re-estimation has no effect on planning"
    ],
    "correct": 0,
    "explanation": "Early actuals are far better predictors than pre-project assumptions, so re-estimating materially improves forecasts.",
    "questionVariations": [
      "In ISTQB terminology, what is the value of re-estimating after the first iteration of a project?"
    ]
  },
  {
    "id": "tm3_v2_7",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of these is a legitimate test control action when a critical environment becomes unavailable?",
    "options": [
      "Re-sequencing test execution to cover work that does not require that environment",
      "Marking untested cases as passed",
      "Cancelling the project",
      "Ignoring the blocker until it resolves itself"
    ],
    "correct": 0,
    "explanation": "Re-sequencing preserves productive progress while the blocker is addressed, without compromising test integrity.",
    "questionVariations": [
      "Of the options listed, which of these is a legitimate test control action when a critical environment becomes unavailable?"
    ]
  },
  {
    "id": "tm3_v2_8",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why should a Test Manager track blocked test cases separately from failed ones?",
    "options": [
      "Blocked tests indicate an impediment, not a product defect, and require different action",
      "There is no meaningful difference between them",
      "Blocked tests should simply be deleted",
      "Only failed tests need reporting"
    ],
    "correct": 0,
    "explanation": "Blocked and failed tests have different causes and remedies — conflating them distorts both the quality picture and the impediment list.",
    "questionVariations": [
      "In ISTQB terms, why should a Test Manager track blocked test cases separately from failed ones?"
    ]
  },
  {
    "id": "tm3_v4_1",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A burndown shows testing tasks are on schedule, but most remaining work is concentrated in the highest-risk area. What should the Test Manager conclude?",
    "options": [
      "Schedule adherence masks concentrated late risk that warrants attention now",
      "Everything is fine because the schedule is met",
      "Risk analysis should be abandoned",
      "Progress metrics are useless"
    ],
    "correct": 0,
    "explanation": "Aggregate schedule health can conceal that the riskiest work — and therefore the greatest uncertainty — remains outstanding."
  },
  {
    "id": "tm3_v4_2",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why is it useful to track the age of open defects?",
    "options": [
      "Long-lived open defects may signal triage bottlenecks or unresolved ownership",
      "Defect age has no diagnostic value",
      "It determines test case count",
      "Older defects are always less severe"
    ],
    "correct": 0,
    "explanation": "Ageing defects typically indicate process friction such as unclear ownership or stalled triage.",
    "questionVariations": [
      "In ISTQB terms, why is it useful to track the age of open defects?"
    ]
  },
  {
    "id": "tm3_v4_3",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the main purpose of a daily stand-up from a test management perspective?",
    "options": [
      "Surfacing blockers quickly so control actions can be taken before they compound",
      "Formally reporting metrics to executives",
      "Replacing the test plan",
      "Assigning blame for failures"
    ],
    "correct": 0,
    "explanation": "Rapid blocker visibility enables timely control actions, which is the stand-up's main value to test management.",
    "questionVariations": [
      "What is the main aim of a daily stand-up from a test management perspective?",
      "What is a daily stand-up from a test management perspective mainly intended to achieve?"
    ]
  },
  {
    "id": "tm3_v4_4",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A Test Manager forecasts completion based only on average past velocity. What important factor might this miss?",
    "options": [
      "Remaining work may differ in complexity or risk from the work already completed",
      "Velocity is always irrelevant",
      "Forecasting is impossible",
      "Past data should never inform forecasts"
    ],
    "correct": 0,
    "explanation": "Simple velocity extrapolation assumes homogeneous work; concentrated complexity or risk ahead breaks that assumption."
  },
  {
    "id": "tm3_v4_5",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which control action best addresses a discovery that a major feature is far less stable than expected?",
    "options": [
      "Reallocate test effort toward that feature and re-communicate the revised risk picture",
      "Continue exactly as planned",
      "Reduce testing on that feature",
      "Stop all reporting until it stabilizes"
    ],
    "correct": 0,
    "explanation": "New evidence about instability should drive both reallocation of effort and updated stakeholder communication.",
    "questionVariations": [
      "Of the options listed, which control action best addresses a discovery that a major feature is far less stable than expected?"
    ]
  },
  {
    "id": "tm3_v4_6",
    "chapter": "tm3",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why should test monitoring include qualitative input as well as quantitative metrics?",
    "options": [
      "Numbers alone can miss context such as tester confidence or emerging concerns",
      "Qualitative input is always unreliable",
      "Metrics are forbidden in Agile",
      "Only qualitative input matters"
    ],
    "correct": 0,
    "explanation": "Experienced testers often sense problems before they appear in metrics, making qualitative signals genuinely valuable.",
    "questionVariations": [
      "In ISTQB terms, why should test monitoring include qualitative input as well as quantitative metrics?"
    ]
  }
];
