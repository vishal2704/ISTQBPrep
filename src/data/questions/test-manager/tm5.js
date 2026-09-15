// Question bank — test-manager/tm5
// 24 questions
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
    "explanation": "Time-to-resolution trends can reveal process bottlenecks — like slow triage or unclear ownership — worth addressing.",
    "questionVariations": [
      "In ISTQB terms, why might a Test Manager track defect metrics like 'average time to resolution'?"
    ]
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
    "explanation": "A defined lifecycle gives everyone a shared, unambiguous view of a defect's current state and next owner.",
    "questionVariations": [
      "In ISTQB terminology, what value does a well-defined defect lifecycle (e.g., New → Assigned → Fixed → Retest → Closed) provide?"
    ]
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
    "explanation": "Vague reproduction steps or missing environment details are the most common cause of 'cannot reproduce' outcomes.",
    "questionVariations": [
      "Of the options listed, which of these would a Test Manager most likely raise as a process concern: many defects are marked 'Cannot Reproduce.' What's a likely root cause?"
    ]
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
    "explanation": "Test Managers often facilitate triage, ensuring the right information and stakeholders are present to make good prioritization calls.",
    "questionVariations": [
      "In ISTQB terminology, what is the Test Manager's typical role in defect triage meetings?"
    ]
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
    "explanation": "Integration preserves traceability — connecting a defect back to the specific test case and execution that found it — supporting analysis and reporting.",
    "questionVariations": [
      "In ISTQB terms, why is it valuable for a defect management tool to integrate with the test management tool?"
    ]
  },
  {
    "id": "tm5_v2_1",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why is it valuable to distinguish defect severity from defect priority?",
    "options": [
      "Severity measures technical impact; priority reflects business urgency, and they can legitimately differ",
      "They always have identical values",
      "Severity is assigned only by managers",
      "Priority is a purely technical measure"
    ],
    "correct": 0,
    "explanation": "A cosmetic bug on a flagship demo screen can be low severity but high priority — the distinction enables sensible triage.",
    "questionVariations": [
      "In ISTQB terms, why is it valuable to distinguish defect severity from defect priority?"
    ]
  },
  {
    "id": "tm5_v2_2",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A defect is reported but the team cannot agree whether the behavior is wrong. What does this most likely indicate?",
    "options": [
      "An ambiguity or gap in the requirements or acceptance criteria",
      "That the tester was careless",
      "That the defect should be deleted",
      "That severity levels are miscalibrated"
    ],
    "correct": 0,
    "explanation": "Disagreement about whether behavior is defective usually traces back to unclear or missing specification of expected behavior."
  },
  {
    "id": "tm5_v2_3",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the purpose of a defect's 'root cause' field being captured over time?",
    "options": [
      "It enables process improvement by revealing patterns in why defects are introduced",
      "It assigns blame to individuals",
      "It is required before a defect may be closed",
      "It replaces reproduction steps"
    ],
    "correct": 0,
    "explanation": "Aggregated root cause data reveals systemic patterns, feeding process improvement rather than individual blame.",
    "questionVariations": [
      "In ISTQB terminology, what is the purpose of a defect's 'root cause' field being captured over time?"
    ]
  },
  {
    "id": "tm5_v2_4",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which metric best helps a Test Manager judge whether a product is stabilizing near release?",
    "options": [
      "The trend of new defects found over time relative to defects resolved",
      "The total lines of code written",
      "The number of meetings held",
      "The size of the test team"
    ],
    "correct": 0,
    "explanation": "A converging trend between defects found and resolved is a classic indicator of approaching stability.",
    "questionVariations": [
      "Of the options listed, which metric best helps a Test Manager judge whether a product is stabilizing near release?"
    ]
  },
  {
    "id": "tm5_v2_5",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What risk arises if defect reports routinely lack environment details?",
    "options": [
      "Defects that occur only in specific configurations become very hard to reproduce and fix",
      "Defects get fixed faster",
      "Severity becomes easier to assess",
      "No risk arises"
    ],
    "correct": 0,
    "explanation": "Configuration-specific defects are common; without environment detail, they often end up incorrectly closed as irreproducible.",
    "questionVariations": [
      "In ISTQB terminology, what risk arises if defect reports routinely lack environment details?"
    ]
  },
  {
    "id": "tm5_v2_6",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why might a Test Manager formally defer a known defect rather than fix it before release?",
    "options": [
      "Its risk is acceptable relative to the cost and schedule impact of fixing it now",
      "Deferring defects is never acceptable",
      "To hide it from stakeholders",
      "Because all low-severity defects must be deferred"
    ],
    "correct": 0,
    "explanation": "Deferral is a legitimate, documented risk-based decision — quite different from concealing a known problem.",
    "questionVariations": [
      "In ISTQB terms, why might a Test Manager formally defer a known defect rather than fix it before release?"
    ]
  },
  {
    "id": "tm5_v2_7",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "What does a consistently high defect rejection rate most likely signal?",
    "options": [
      "A possible gap in tester understanding of requirements, or unclear reporting",
      "That testers are performing excellently",
      "That the product has no defects",
      "That severity should be removed from reports"
    ],
    "correct": 0,
    "explanation": "High rejection rates usually point to misunderstood requirements or insufficiently clear defect reports, both addressable.",
    "questionVariations": [
      "In ISTQB terminology, what does a consistently high defect rejection rate most likely signal?"
    ]
  },
  {
    "id": "tm5_v2_8",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why should defect data be retained after a project closes?",
    "options": [
      "It informs future risk analysis, estimation, and process improvement",
      "Retention is legally forbidden",
      "It has no value once a project ends",
      "Only open defects have any future value"
    ],
    "correct": 0,
    "explanation": "Historical defect data is a key input to future estimation, defect clustering analysis, and process improvement efforts.",
    "questionVariations": [
      "In ISTQB terms, why should defect data be retained after a project closes?"
    ]
  },
  {
    "id": "tm5_v4_1",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why should a defect report separate observed behaviour from the reporter's interpretation of the cause?",
    "options": [
      "Observations are factual and verifiable; a speculated cause may mislead the investigation",
      "Interpretation is more valuable than observation",
      "Causes should never be discussed",
      "Reports should contain only opinions"
    ],
    "correct": 0,
    "explanation": "Mixing speculation with observation can send developers down the wrong diagnostic path.",
    "questionVariations": [
      "In ISTQB terms, why should a defect report separate observed behaviour from the reporter's interpretation of the cause?"
    ]
  },
  {
    "id": "tm5_v4_2",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the value of defining a defect workflow with explicit states?",
    "options": [
      "Everyone understands a defect's current status and who owns the next action",
      "It slows resolution deliberately",
      "It makes reports longer",
      "Workflows apply only to automated tests"
    ],
    "correct": 0,
    "explanation": "Explicit states remove ambiguity about status and ownership, which is the core of defect management.",
    "questionVariations": [
      "In ISTQB terminology, what is the value of defining a defect workflow with explicit states?"
    ]
  },
  {
    "id": "tm5_v4_3",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "A defect is fixed but the fix breaks two other features. What does this most clearly demonstrate the need for?",
    "options": [
      "Regression testing after defect fixes",
      "Removing confirmation testing",
      "Fewer defect reports",
      "Larger test teams"
    ],
    "correct": 0,
    "explanation": "Fixes carry regression risk, which is precisely what regression testing after changes is designed to catch."
  },
  {
    "id": "tm5_v4_4",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why might a Test Manager analyse defects by the phase in which they were introduced versus detected?",
    "options": [
      "The gap reveals how long defects survive undetected, highlighting where earlier detection would pay off",
      "Phase data has no analytical value",
      "It determines tester salaries",
      "Only detection phase matters"
    ],
    "correct": 0,
    "explanation": "A large introduction-to-detection gap identifies where earlier quality activities would deliver the most benefit.",
    "questionVariations": [
      "In ISTQB terms, why might a Test Manager analyse defects by the phase in which they were introduced versus detected?"
    ]
  },
  {
    "id": "tm5_v4_5",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What does a sudden spike in defects reported against a single module most likely warrant?",
    "options": [
      "Investigation of that module's complexity, recent changes or test coverage",
      "Immediate removal of the module",
      "Ignoring the spike as random variation",
      "Reassigning the whole test team permanently"
    ],
    "correct": 0,
    "explanation": "Concentrated defects usually signal an underlying cause — complexity, churn or previously weak coverage — worth investigating.",
    "questionVariations": [
      "In ISTQB terminology, what does a sudden spike in defects reported against a single module most likely warrant?"
    ]
  },
  {
    "id": "tm5_v4_6",
    "chapter": "tm5",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why should defect priority be revisited as a release approaches?",
    "options": [
      "Business urgency shifts as the release window narrows, changing what must be fixed first",
      "Priority should never change once set",
      "Severity and priority always move together",
      "Priority is irrelevant near release"
    ],
    "correct": 0,
    "explanation": "Priority reflects business urgency, which legitimately changes as constraints and deadlines evolve.",
    "questionVariations": [
      "In ISTQB terms, why should defect priority be revisited as a release approaches?"
    ]
  }
];
