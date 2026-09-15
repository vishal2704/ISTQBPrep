// Question bank — test-manager/tm4
// 24 questions
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
    "explanation": "Risk mitigation can include design or process changes that reduce the risk directly, not only increased testing.",
    "questionVariations": [
      "Of the options listed, which of these is a valid strategy for managing an identified high-priority risk, beyond just testing more?"
    ]
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
    "explanation": "A risk register gives ongoing visibility into what risks exist, their current status, and what's being done about them.",
    "questionVariations": [
      "In ISTQB terms, why might a Test Manager maintain a formal risk register throughout a project?"
    ]
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
    "explanation": "Impact concerns the consequences/severity if the risk materializes; likelihood is a separate factor about probability of occurrence.",
    "questionVariations": [
      "Of the options listed, which factor most directly affects a risk's IMPACT, as opposed to its likelihood?"
    ]
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
    "explanation": "Effective risk identification draws on multiple perspectives — business, technical, and end-user — not just the testing team alone.",
    "questionVariations": [
      "Of the options listed, which of these roles typically contributes valuable input during product risk identification?"
    ]
  },
  {
    "id": "tm4_v2_1",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why is risk identification usually more valuable when performed early in a project?",
    "options": [
      "Early awareness allows mitigation while changes are still inexpensive",
      "Risks only exist at the start of a project",
      "It removes the need for later risk reviews",
      "Early identification guarantees no risks will occur"
    ],
    "correct": 0,
    "explanation": "Identifying risk early gives the team time and cheaper options to mitigate before designs and code harden.",
    "questionVariations": [
      "In ISTQB terms, why is risk identification usually more valuable when performed early in a project?"
    ]
  },
  {
    "id": "tm4_v2_2",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "A product risk is identified as high likelihood but very low impact. What is a proportionate response?",
    "options": [
      "Apply light mitigation or accept it, reserving deep testing for higher-impact risks",
      "Apply the maximum possible test effort",
      "Ignore risk analysis entirely",
      "Treat it identically to a high-impact risk"
    ],
    "correct": 0,
    "explanation": "Risk response should be proportionate — likelihood alone does not justify heavy investment when impact is minimal."
  },
  {
    "id": "tm4_v2_3",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "What distinguishes risk mitigation from risk contingency?",
    "options": [
      "Mitigation reduces likelihood or impact beforehand; contingency is the plan if the risk occurs anyway",
      "They are synonyms",
      "Contingency always precedes mitigation",
      "Mitigation applies only to project risks"
    ],
    "correct": 0,
    "explanation": "Mitigation acts in advance to reduce risk; contingency prepares the response should the risk materialize regardless.",
    "questionVariations": [
      "In ISTQB terminology, what distinguishes risk mitigation from risk contingency?"
    ]
  },
  {
    "id": "tm4_v2_4",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why should the risk register be reviewed periodically rather than written once?",
    "options": [
      "Risks change as the project evolves, and new risks emerge while others become irrelevant",
      "Reviewing wastes project time",
      "The initial analysis is always complete and final",
      "Registers are only needed for audits"
    ],
    "correct": 0,
    "explanation": "Risk is dynamic; a register reviewed only once quickly becomes an inaccurate picture of actual project exposure.",
    "questionVariations": [
      "In ISTQB terms, why should the risk register be reviewed periodically rather than written once?"
    ]
  },
  {
    "id": "tm4_v2_5",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "In risk-based testing, what should happen to test effort if a high-risk area passes all tests early and consistently?",
    "options": [
      "The risk assessment can be revisited, potentially reallocating effort to areas still carrying risk",
      "Effort must remain fixed regardless of evidence",
      "All testing should stop immediately",
      "The area should be removed from the risk register permanently"
    ],
    "correct": 0,
    "explanation": "Evidence from testing legitimately updates the risk picture, allowing effort to be redirected where uncertainty remains."
  },
  {
    "id": "tm4_v2_6",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which stakeholder perspective is most valuable for assessing a risk's business IMPACT?",
    "options": [
      "Business representatives who understand the consequences to users and revenue",
      "The automation engineer",
      "The build server administrator",
      "The office facilities team"
    ],
    "correct": 0,
    "explanation": "Business impact is best judged by those who understand user and commercial consequences, not purely technical roles.",
    "questionVariations": [
      "Of the options listed, which stakeholder perspective is most valuable for assessing a risk's business IMPACT?"
    ]
  },
  {
    "id": "tm4_v2_7",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "A Test Manager identifies a risk outside their authority to resolve. What is the appropriate action?",
    "options": [
      "Escalate it to the person or group who does have the authority to act",
      "Ignore it because it is not their responsibility",
      "Remove it from the risk register",
      "Attempt to fix it without informing anyone"
    ],
    "correct": 0,
    "explanation": "Risks beyond one's authority should be escalated promptly to whoever can actually act on them."
  },
  {
    "id": "tm4_v2_8",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "How does product risk analysis typically influence the CHOICE of test techniques?",
    "options": [
      "Higher-risk areas may justify more rigorous or formal techniques than lower-risk areas",
      "Technique choice is unrelated to risk",
      "All areas must use identical techniques",
      "Risk analysis only affects scheduling"
    ],
    "correct": 0,
    "explanation": "Risk level informs not just how much testing to do, but how rigorous the techniques applied should be."
  },
  {
    "id": "tm4_v4_1",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "Two risks share the same calculated risk level, but one is far easier and cheaper to mitigate. How should this influence the response?",
    "options": [
      "The easily-mitigated risk should generally be addressed first for better return on effort",
      "Risk level alone must determine all sequencing",
      "The harder risk should always be ignored",
      "Mitigation cost is irrelevant to prioritization"
    ],
    "correct": 0,
    "explanation": "Cost of mitigation is a legitimate factor — equal-risk items are best sequenced by achievable risk reduction per unit of effort."
  },
  {
    "id": "tm4_v4_2",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the danger of a risk register maintained solely by the Test Manager?",
    "options": [
      "It reflects a single perspective and is likely to miss business and technical risks others would see",
      "It becomes too accurate",
      "It cannot be version controlled",
      "Single ownership is always ideal"
    ],
    "correct": 0,
    "explanation": "Risk identification benefits from diverse perspectives; sole ownership narrows the range of risks captured.",
    "questionVariations": [
      "In ISTQB terminology, what is the danger of a risk register maintained solely by the Test Manager?"
    ]
  },
  {
    "id": "tm4_v4_3",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "How does risk-based testing help when requirements are incomplete?",
    "options": [
      "It directs limited effort toward areas of greatest potential harm despite incomplete information",
      "It generates the missing requirements",
      "It guarantees complete coverage",
      "It removes the need for requirements"
    ],
    "correct": 0,
    "explanation": "Risk provides a rational basis for prioritizing when complete information is unavailable."
  },
  {
    "id": "tm4_v4_4",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "easy",
    "marks": 1,
    "question": "What does it mean to 'transfer' a risk?",
    "options": [
      "Shifting responsibility for the risk's consequences to another party, such as via a supplier contract",
      "Eliminating the risk entirely",
      "Ignoring the risk",
      "Increasing the risk deliberately"
    ],
    "correct": 0,
    "explanation": "Transfer moves the consequence to another party; it does not remove the underlying possibility.",
    "questionVariations": [
      "In ISTQB terminology, what does it mean to 'transfer' a risk?"
    ]
  },
  {
    "id": "tm4_v4_5",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why should risk analysis consider the cost of failure in production, not just likelihood?",
    "options": [
      "A rare failure with catastrophic consequences may warrant more testing than a frequent trivial one",
      "Likelihood is the only relevant factor",
      "Production costs are irrelevant to testing",
      "All failures cost the same"
    ],
    "correct": 0,
    "explanation": "Impact and likelihood must be weighed together; rare-but-catastrophic risks often justify disproportionate attention.",
    "questionVariations": [
      "In ISTQB terms, why should risk analysis consider the cost of failure in production, not just likelihood?"
    ]
  },
  {
    "id": "tm4_v4_6",
    "chapter": "tm4",
    "program": "tm",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which is an appropriate use of risk information during test reporting?",
    "options": [
      "Explaining which risks remain unmitigated so release decisions are informed",
      "Concealing risks to avoid alarming stakeholders",
      "Listing risks without any assessment",
      "Reporting risks only after release"
    ],
    "correct": 0,
    "explanation": "Communicating residual risk is central to enabling responsible release decisions.",
    "questionVariations": [
      "Of the options listed, which is an appropriate use of risk information during test reporting?"
    ]
  }
];
