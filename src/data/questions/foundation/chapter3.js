// Question bank — chapter3
// 99 questions (8 tagged to official ISTQB v4.0.1
// Learning Objectives — see src/data/loReference.js)
export const chapter3Questions = [
  {
    "id": "ch3_q1",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the main objective of static testing?",
    "hint": "Static testing examines work products WITHOUT doing what to the software?",
    "options": [
      "Execute software to find failures",
      "Find defects without executing software",
      "Perform performance testing",
      "Validate production environments"
    ],
    "correct": 1,
    "explanation": "Static testing identifies defects in work products without executing the software."
  },
  {
    "id": "ch3_q2",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is an example of static testing?",
    "hint": "Static techniques don't execute code — think reviews and tool-based analysis, not running test cases.",
    "options": [
      "System testing",
      "Code execution",
      "Requirements review",
      "Performance testing"
    ],
    "correct": 2,
    "explanation": "Reviews are static testing activities because the software is not executed."
  },
  {
    "id": "ch3_q3",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type is the least formal?",
    "hint": "Review types range from informal to inspection — which one has virtually no defined process?",
    "options": [
      "Inspection",
      "Technical Review",
      "Walkthrough",
      "Informal Review"
    ],
    "correct": 3,
    "explanation": "Informal reviews have little or no defined process."
  },
  {
    "id": "ch3_q4",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Who typically leads an inspection meeting?",
    "hint": "This role runs the meeting, keeps it on track, and is specifically trained for inspections.",
    "options": [
      "Author",
      "Moderator",
      "Developer",
      "Customer"
    ],
    "correct": 1,
    "explanation": "The moderator manages the inspection process and meetings."
  },
  {
    "id": "ch3_q5",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a key benefit of static testing?",
    "hint": "Static testing catches defects before which activity even begins?",
    "options": [
      "Eliminates all defects",
      "Finds defects earlier",
      "Replaces dynamic testing",
      "Guarantees software quality"
    ],
    "correct": 1,
    "explanation": "Static testing helps detect defects early when they are cheaper to fix."
  },
  {
    "id": "ch3_q6",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which role records defects found during a formal review?",
    "hint": "This role's whole job during the review is logging issues, not judging them.",
    "options": [
      "Moderator",
      "Scribe",
      "Manager",
      "Customer"
    ],
    "correct": 1,
    "explanation": "The scribe documents issues and findings during reviews."
  },
  {
    "id": "ch3_q7",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type often involves the author explaining the work product?",
    "hint": "In this review type, the author walks colleagues through the work, scenario by scenario.",
    "options": [
      "Walkthrough",
      "Inspection",
      "Audit",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "Walkthroughs are commonly led by the author."
  },
  {
    "id": "ch3_q8",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type has the highest level of formality?",
    "hint": "This is the most rigorous, most defined review type — with metrics and formal roles.",
    "options": [
      "Informal Review",
      "Walkthrough",
      "Technical Review",
      "Inspection"
    ],
    "correct": 3,
    "explanation": "Inspections follow a formal and structured process."
  },
  {
    "id": "ch3_q9",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is static analysis?",
    "options": [
      "Manual review only",
      "Execution of source code",
      "Automated examination of work products",
      "Performance testing"
    ],
    "correct": 2,
    "explanation": "Static analysis tools automatically detect potential defects."
  },
  {
    "id": "ch3_q10",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which defect can static analysis detect?",
    "options": [
      "Slow response under load",
      "Memory leak risks",
      "Incorrect business workflow execution",
      "User confusion"
    ],
    "correct": 1,
    "explanation": "Static analysis can identify code issues such as memory leaks."
  },
  {
    "id": "ch3_q11",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review objective focuses on improving maintainability?",
    "options": [
      "Finding defects only",
      "Knowledge sharing",
      "Improving work products",
      "Reducing execution time"
    ],
    "correct": 2,
    "explanation": "Reviews improve overall quality and maintainability."
  },
  {
    "id": "ch3_q12",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a common entry criterion for a formal review?",
    "options": [
      "Work product is available",
      "All defects are fixed",
      "System testing completed",
      "User training completed"
    ],
    "correct": 0,
    "explanation": "The work product must be available and ready for review."
  },
  {
    "id": "ch3_q13",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about reviews is TRUE?",
    "options": [
      "Only testers participate",
      "Reviews can identify missing requirements",
      "Reviews require software execution",
      "Reviews replace testing"
    ],
    "correct": 1,
    "explanation": "Reviews often uncover ambiguities and missing requirements."
  },
  {
    "id": "ch3_q14",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which role is responsible for fixing defects found during a review?",
    "options": [
      "Moderator",
      "Scribe",
      "Reviewer",
      "Author"
    ],
    "correct": 3,
    "explanation": "The author updates the work product based on review findings."
  },
  {
    "id": "ch3_q15",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a major benefit of reviews?",
    "options": [
      "Improved communication",
      "Knowledge sharing",
      "Early defect detection",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Reviews provide multiple benefits beyond defect detection."
  },
  {
    "id": "ch3_q16",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review type is most suitable for discussing technical solutions?",
    "options": [
      "Technical Review",
      "Inspection",
      "Audit",
      "Acceptance Review"
    ],
    "correct": 0,
    "explanation": "Technical reviews focus on evaluating technical approaches."
  },
  {
    "id": "ch3_q17",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is an audit?",
    "options": [
      "A review led by the author",
      "A formal assessment against standards",
      "A code walkthrough",
      "A performance test"
    ],
    "correct": 1,
    "explanation": "Audits verify compliance with standards and regulations."
  },
  {
    "id": "ch3_q18",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity occurs after review defects are fixed?",
    "options": [
      "Rework",
      "Review Planning",
      "Review Kickoff",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "Rework addresses the defects identified during the review."
  },
  {
    "id": "ch3_q19",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of a review checklist?",
    "options": [
      "Execute test cases",
      "Guide reviewers",
      "Automate testing",
      "Replace requirements"
    ],
    "correct": 1,
    "explanation": "Checklists help reviewers focus on common defect types."
  },
  {
    "id": "ch3_q20",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which work products can be reviewed?",
    "options": [
      "Requirements",
      "Design Documents",
      "Source Code",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Static reviews can be applied to many types of work products."
  },
  {
    "id": "ch3_q21",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review type has the primary goal of detecting defects and improving quality using a highly structured process?",
    "options": [
      "Walkthrough",
      "Informal Review",
      "Inspection",
      "Brainstorming Session"
    ],
    "correct": 2,
    "explanation": "Inspections are the most formal review type and focus heavily on defect detection."
  },
  {
    "id": "ch3_q22",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A moderator schedules meetings, ensures process compliance, and follows up on actions. Which review role is being described?",
    "options": [
      "Reviewer",
      "Author",
      "Scribe",
      "Moderator"
    ],
    "correct": 3,
    "explanation": "The moderator is responsible for managing the review process."
  },
  {
    "id": "ch3_q23",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review metric measures the number of defects found per page reviewed?",
    "options": [
      "Defect Density",
      "Review Coverage",
      "Defect Leakage",
      "Test Effectiveness"
    ],
    "correct": 0,
    "explanation": "Defect density is often measured as defects per page, KLOC, or function point."
  },
  {
    "id": "ch3_q24",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A review identified 30 defects. After rework, reviewers verify that all issues were corrected. What activity is being performed?",
    "options": [
      "Follow-up",
      "Planning",
      "Kick-off",
      "Logging"
    ],
    "correct": 0,
    "explanation": "Follow-up ensures review findings have been addressed."
  },
  {
    "id": "ch3_q25",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is most likely to be detected by static analysis?",
    "options": [
      "Incorrect business process",
      "Memory leak risk",
      "Missing functionality",
      "Poor user experience"
    ],
    "correct": 1,
    "explanation": "Static analysis tools can identify memory leaks and resource management issues."
  },
  {
    "id": "ch3_q26",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a common output of a formal review?",
    "options": [
      "Defect Log",
      "Source Code",
      "Performance Report",
      "Release Note"
    ],
    "correct": 0,
    "explanation": "Formal reviews produce documented findings and defect logs."
  },
  {
    "id": "ch3_q27",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review activity determines whether review objectives have been achieved?",
    "options": [
      "Review Planning",
      "Individual Preparation",
      "Review Meeting",
      "Review Closure"
    ],
    "correct": 3,
    "explanation": "Closure evaluates whether objectives were met and lessons learned captured."
  },
  {
    "id": "ch3_q28",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about review preparation is TRUE?",
    "options": [
      "Preparation is unnecessary",
      "Preparation improves review effectiveness",
      "Only moderators prepare",
      "Preparation occurs after the review meeting"
    ],
    "correct": 1,
    "explanation": "Individual preparation significantly increases review effectiveness."
  },
  {
    "id": "ch3_q29",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A static analysis tool identifies code that can never be executed. What has it found?",
    "options": [
      "Dead Code",
      "Defect Clustering",
      "Regression Risk",
      "Missing Requirement"
    ],
    "correct": 0,
    "explanation": "Dead code refers to unreachable code segments."
  },
  {
    "id": "ch3_q30",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review role should avoid dominating technical discussions?",
    "options": [
      "Moderator",
      "Author",
      "Scribe",
      "Reviewer"
    ],
    "correct": 0,
    "explanation": "Moderators facilitate discussions rather than drive technical decisions."
  },
  {
    "id": "ch3_q31",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of individual review preparation?",
    "options": [
      "Fix defects",
      "Execute tests",
      "Identify potential issues before meetings",
      "Approve deployment"
    ],
    "correct": 2,
    "explanation": "Preparation allows reviewers to identify issues efficiently before discussions."
  },
  {
    "id": "ch3_q32",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which static testing technique is best suited for verifying compliance with coding standards?",
    "options": [
      "System Testing",
      "Static Analysis",
      "Acceptance Testing",
      "Usability Testing"
    ],
    "correct": 1,
    "explanation": "Static analysis tools are often used to verify coding standard compliance."
  },
  {
    "id": "ch3_q33",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following is NOT typically an objective of reviews?",
    "options": [
      "Finding defects",
      "Improving quality",
      "Building team understanding",
      "Executing software"
    ],
    "correct": 3,
    "explanation": "Reviews do not involve executing software."
  },
  {
    "id": "ch3_q34",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a common risk when reviews are poorly moderated?",
    "options": [
      "Improved efficiency",
      "Personal criticism and conflict",
      "Better defect detection",
      "Increased coverage"
    ],
    "correct": 1,
    "explanation": "Poor moderation can lead to personal criticism and ineffective meetings."
  },
  {
    "id": "ch3_q35",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review metric can help determine review effectiveness?",
    "options": [
      "Defects Found",
      "Review Rate",
      "Preparation Time",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Multiple metrics help evaluate review effectiveness."
  },
  {
    "id": "ch3_q36",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "A review team finds that requirements are ambiguous and inconsistent. What benefit of reviews does this demonstrate?",
    "options": [
      "Early Defect Detection",
      "Performance Improvement",
      "Automation Coverage",
      "Regression Prevention"
    ],
    "correct": 0,
    "explanation": "Reviews identify defects before implementation begins."
  },
  {
    "id": "ch3_q37",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which static analysis finding is most likely related to maintainability?",
    "options": [
      "Duplicated Code",
      "Incorrect Workflow",
      "Slow Database Query",
      "Missing Test Case"
    ],
    "correct": 0,
    "explanation": "Duplicated code increases maintenance complexity."
  },
  {
    "id": "ch3_q38",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review type is most likely to include management participation?",
    "options": [
      "Inspection",
      "Technical Review",
      "Management Review",
      "Walkthrough"
    ],
    "correct": 2,
    "explanation": "Management reviews evaluate progress, status, and project decisions."
  },
  {
    "id": "ch3_q39",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of review entry criteria?",
    "options": [
      "Ensure readiness for review",
      "Execute test cases",
      "Measure defect density",
      "Close defects"
    ],
    "correct": 0,
    "explanation": "Entry criteria help determine whether a work product is ready for review."
  },
  {
    "id": "ch3_q40",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "A static analysis tool reports variables that are declared but never used. What type of issue is this?",
    "options": [
      "Unused Code",
      "Regression Defect",
      "Requirement Gap",
      "Functional Failure"
    ],
    "correct": 0,
    "explanation": "Unused variables are common maintainability issues detected through static analysis."
  },
  {
    "id": "ch3_q41",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review role is responsible for creating the work product being reviewed?",
    "options": [
      "Moderator",
      "Author",
      "Scribe",
      "Reviewer"
    ],
    "correct": 1,
    "explanation": "The author creates the work product."
  },
  {
    "id": "ch3_q42",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review activity involves examining a work product individually?",
    "options": [
      "Planning",
      "Kick-off",
      "Individual Preparation",
      "Closure"
    ],
    "correct": 2,
    "explanation": "Reviewers examine the work product during preparation."
  },
  {
    "id": "ch3_q43",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a major advantage of inspections over informal reviews?",
    "options": [
      "Less preparation",
      "Higher defect detection effectiveness",
      "No documentation",
      "No moderator needed"
    ],
    "correct": 1,
    "explanation": "Inspections are highly structured and effective."
  },
  {
    "id": "ch3_q44",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Static analysis tools are most useful for detecting:",
    "options": [
      "Missing requirements",
      "Coding standard violations",
      "Usability issues",
      "Performance bottlenecks"
    ],
    "correct": 1,
    "explanation": "Static analysis excels at code quality checks."
  },
  {
    "id": "ch3_q45",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review type focuses on compliance with standards and regulations?",
    "options": [
      "Walkthrough",
      "Inspection",
      "Audit",
      "Technical Review"
    ],
    "correct": 2,
    "explanation": "Audits verify compliance with standards and regulations."
  },
  {
    "id": "ch3_q46",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the main objective of static testing?",
    "options": [
      "Execute software to find failures",
      "Find defects without executing software",
      "Perform performance testing",
      "Validate production environments"
    ],
    "correct": 1,
    "explanation": "The core objective of static testing is to identify defects within documentation or code by evaluating them without running the software application."
  },
  {
    "id": "ch3_q47",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is an example of static testing?",
    "options": [
      "System testing",
      "Code execution",
      "Requirements review",
      "Performance testing"
    ],
    "correct": 2,
    "explanation": "Requirements reviews are a static testing activity because they involve analyzing textual specifications without compiling or executing code."
  },
  {
    "id": "ch3_q48",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type is the least formal?",
    "options": [
      "Inspection",
      "Technical Review",
      "Walkthrough",
      "Informal Review"
    ],
    "correct": 3,
    "explanation": "Informal reviews lack structured procedural criteria, formal documentation checklists, or mandatory logging meetings, making them the lowest formality type."
  },
  {
    "id": "ch3_q49",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Who typically leads an inspection meeting?",
    "options": [
      "Author",
      "Moderator",
      "Developer",
      "Customer"
    ],
    "correct": 1,
    "explanation": "Inspections are highly formal reviews led by a trained moderator or facilitator who manages the agenda and ensures compliance with standard procedures."
  },
  {
    "id": "ch3_q50",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a key benefit of static testing?",
    "options": [
      "Eliminates all defects",
      "Finds defects earlier",
      "Replaces dynamic testing",
      "Guarantees software quality"
    ],
    "correct": 1,
    "explanation": "Static testing detects errors early in the lifecycle before development begins, making resolution significantly less costly."
  },
  {
    "id": "ch3_q51",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which role records defects found during a formal review?",
    "options": [
      "Moderator",
      "Scribe",
      "Manager",
      "Customer"
    ],
    "correct": 1,
    "explanation": "The scribe (or recorder) is responsible for logging each defect and tracking action items raised during formal review meetings."
  },
  {
    "id": "ch3_q52",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type often involves the author explaining the work product?",
    "options": [
      "Walkthrough",
      "Inspection",
      "Audit",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "Walkthroughs are characterized by the author guiding participants through a document or code segment to explain its design and logic."
  },
  {
    "id": "ch3_q53",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review type has the highest level of formality?",
    "options": [
      "Informal Review",
      "Walkthrough",
      "Technical Review",
      "Inspection"
    ],
    "correct": 3,
    "explanation": "Inspections follow a strict, formal process that includes defined entry/exit criteria, individual preparation phases, mandatory roles, and formal defect logs."
  },
  {
    "id": "ch3_q54",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is static analysis?",
    "options": [
      "Manual review only",
      "Execution of source code",
      "Automated examination of work products",
      "Performance testing"
    ],
    "correct": 2,
    "explanation": "Static analysis uses automated tools to examine code or models without executing them, checking for syntax violations, security gaps, or architectural issues."
  },
  {
    "id": "ch3_q55",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which defect can static analysis detect?",
    "options": [
      "Slow response under load",
      "Memory leak risks",
      "Incorrect business workflow execution",
      "User confusion"
    ],
    "correct": 1,
    "explanation": "Static analysis tools examine code structures to identify programming risks such as uninitialized variables, syntax anomalies, or memory leak risks."
  },
  {
    "id": "ch3_q56",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which review objective focuses on improving maintainability?",
    "options": [
      "Finding defects only",
      "Knowledge sharing",
      "Improving work products",
      "Reducing execution time"
    ],
    "correct": 2,
    "explanation": "Reviews aim to improve work products by evaluating design consistency and adherence to style guides, which directly enhances long-term maintainability."
  },
  {
    "id": "ch3_q57",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a common entry criterion for a formal review?",
    "options": [
      "Work product is available",
      "All defects are fixed",
      "System testing completed",
      "User training completed"
    ],
    "correct": 0,
    "explanation": "Entry criteria define the readiness requirements for a review, with the fundamental requirement being that a complete, clean version of the work product is available."
  },
  {
    "id": "ch3_q58",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about reviews is TRUE?",
    "options": [
      "Only testers participate",
      "Reviews can identify missing requirements",
      "Reviews require software execution",
      "Reviews replace testing"
    ],
    "correct": 1,
    "explanation": "By evaluating documents from a broader perspective, reviews can uncover gaps, logical contradictions, or missing requirements before development begins."
  },
  {
    "id": "ch3_q59",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which role is responsible for fixing defects found during a review?",
    "options": [
      "Moderator",
      "Scribe",
      "Reviewer",
      "Author"
    ],
    "correct": 3,
    "explanation": "The author created the work product and remains responsible for performing rework to resolve any logged defects."
  },
  {
    "id": "ch3_q60",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a major benefit of reviews?",
    "options": [
      "Improved communication",
      "Knowledge sharing",
      "Early defect detection",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Reviews facilitate cross-functional alignment, spread technical knowledge across the team, and find defects early in the lifecycle."
  },
  {
    "id": "ch3_q61",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review type is most suitable for discussing technical solutions?",
    "options": [
      "Technical Review",
      "Inspection",
      "Audit",
      "Acceptance Review"
    ],
    "correct": 0,
    "explanation": "Technical reviews are designed to evaluate technical alternatives, build consensus among technical experts, and resolve architectural issues."
  },
  {
    "id": "ch3_q62",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is an audit?",
    "options": [
      "A review led by the author",
      "A formal assessment against standards",
      "A code walkthrough",
      "A performance test"
    ],
    "correct": 1,
    "explanation": "An audit is an independent evaluation conducted to verify compliance with specified standards, internal processes, guidelines, or regulatory constraints."
  },
  {
    "id": "ch3_q63",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity occurs after review defects are fixed?",
    "options": [
      "Rework",
      "Review Planning",
      "Review Kickoff",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "The lifecycle of a formal review process dictates that once defects are captured, the author performs 'rework' to correct those flaws, which is followed by verification."
  },
  {
    "id": "ch3_q64",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of a review checklist?",
    "options": [
      "Execute test cases",
      "Guide reviewers",
      "Automate testing",
      "Replace requirements"
    ],
    "correct": 1,
    "explanation": "A checklist acts as a guide for reviewers during their individual preparation, ensuring they focus on historical defect types and common errors."
  },
  {
    "id": "ch3_q65",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which work products can be reviewed?",
    "options": [
      "Requirements",
      "Design Documents",
      "Source Code",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Static testing can be applied to any legible engineering artifact, including requirements specifications, design schemas, source code, and test cases."
  },
  {
    "id": "ch3_q66",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review type has the primary goal of detecting defects and improving quality using a highly structured process?",
    "options": [
      "Walkthrough",
      "Informal Review",
      "Inspection",
      "Brainstorming Session"
    ],
    "correct": 2,
    "explanation": "Inspections utilize a strictly defined, multi-stage structure (planning, preparation, logging, rework, follow-up) specifically optimized for high-efficiency defect detection."
  },
  {
    "id": "ch3_q67",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A moderator schedules meetings, ensures process compliance, and follows up on actions. Which review role is being described?",
    "options": [
      "Reviewer",
      "Author",
      "Scribe",
      "Moderator"
    ],
    "correct": 3,
    "explanation": "The moderator (or facilitator) administers the review process, runs meetings, and coordinates activities between authors and reviewers."
  },
  {
    "id": "ch3_q68",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review metric measures the number of defects found per page reviewed?",
    "options": [
      "Defect Density",
      "Review Coverage",
      "Defect Leakage",
      "Test Effectiveness"
    ],
    "correct": 0,
    "explanation": "Defect density tracks the ratio of found defects against a physical metric of work product size, such as defects per page or defects per thousand lines of code (KLOC)."
  },
  {
    "id": "ch3_q69",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A review identified 30 defects. After rework, reviewers verify that all issues were corrected. What activity is being performed?",
    "options": [
      "Follow-up",
      "Planning",
      "Kick-off",
      "Logging"
    ],
    "correct": 0,
    "explanation": "The follow-up phase involves checking data metrics and confirming that the author's rework effectively resolved all logged issues before closing the review."
  },
  {
    "id": "ch3_q70",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is most likely to be detected by static analysis?",
    "options": [
      "Incorrect business process",
      "Memory leak risk",
      "Missing functionality",
      "Poor user experience"
    ],
    "correct": 1,
    "explanation": "Static analysis tools evaluate structural code paths, allowing them to identify potential runtime issues like pointer deviations or memory leak risks."
  },
  {
    "id": "ch3_q71",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a common output of a formal review?",
    "options": [
      "Defect Log",
      "Source Code",
      "Performance Report",
      "Release Note"
    ],
    "correct": 0,
    "explanation": "Formal reviews produce documented logs of findings, issue lists, process summaries, and defect records."
  },
  {
    "id": "ch3_q72",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review activity determines whether review objectives have been achieved?",
    "options": [
      "Review Planning",
      "Individual Preparation",
      "Review Meeting",
      "Review Closure"
    ],
    "correct": 3,
    "explanation": "Review closure checks exit criteria, collects process metrics, and formally determines whether the review objectives have been successfully met."
  },
  {
    "id": "ch3_q73",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about review preparation is TRUE?",
    "options": [
      "Preparation is unnecessary",
      "Preparation improves review effectiveness",
      "Only moderators prepare",
      "Preparation occurs after the review meeting"
    ],
    "correct": 1,
    "explanation": "Individual preparation allows reviewers to thoroughly examine the work product independently, which significantly increases the efficiency of defect detection during the subsequent review meeting."
  },
  {
    "id": "ch3_q74",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "A static analysis tool identifies code that can never be executed. What has it found?",
    "options": [
      "Dead Code",
      "Defect Clustering",
      "Regression Risk",
      "Missing Requirement"
    ],
    "correct": 0,
    "explanation": "Dead code (or unreachable code) refers to code segments that cannot be executed during runtime under any input conditions, which increases maintenance complexity."
  },
  {
    "id": "ch3_q75",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review role should avoid dominating technical discussions?",
    "options": [
      "Moderator",
      "Author",
      "Scribe",
      "Reviewer"
    ],
    "correct": 0,
    "explanation": "The moderator is responsible for facilitating the process and ensuring an objective atmosphere without driving technical design decisions or dominating discussions."
  },
  {
    "id": "ch3_q76",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of individual review preparation?",
    "options": [
      "Fix defects",
      "Execute tests",
      "Identify potential issues before meetings",
      "Approve deployment"
    ],
    "correct": 2,
    "explanation": "Individual preparation ensures reviewers evaluate work products thoroughly before meetings, which helps keep team discussions focused and efficient."
  },
  {
    "id": "ch3_q77",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which static testing technique is best suited for verifying compliance with coding standards?",
    "options": [
      "System Testing",
      "Static Analysis",
      "Acceptance Testing",
      "Usability Testing"
    ],
    "correct": 1,
    "explanation": "Static analysis tools automatically enforce compliance with defined rules and coding standards across large codebases."
  },
  {
    "id": "ch3_q78",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following is NOT typically an objective of reviews?",
    "options": [
      "Finding defects",
      "Improving quality",
      "Building team understanding",
      "Executing software"
    ],
    "correct": 3,
    "explanation": "Static testing techniques, including reviews, evaluate work products without executing software."
  },
  {
    "id": "ch3_q79",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a common risk when reviews are poorly moderated?",
    "options": [
      "Improved efficiency",
      "Personal criticism and conflict",
      "Better defect detection",
      "Increased coverage"
    ],
    "correct": 1,
    "explanation": "Without a skilled moderator to maintain objective focus, reviews can degenerate into personal criticism, damaging team dynamics and reducing review effectiveness."
  },
  {
    "id": "ch3_q80",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review metric can help determine review effectiveness?",
    "options": [
      "Defects Found",
      "Review Rate",
      "Preparation Time",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Review effectiveness is evaluated using a combination of metrics, including prep time, the rate at which pages are reviewed, and the volume of valid defects found."
  },
  {
    "id": "ch3_q81",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "A review team finds that requirements are ambiguous and inconsistent. What benefit of reviews does this demonstrate?",
    "options": [
      "Early Defect Detection",
      "Performance Improvement",
      "Automation Coverage",
      "Regression Prevention"
    ],
    "correct": 0,
    "explanation": "Identifying ambiguities in requirement documents before implementation is a key example of early defect detection."
  },
  {
    "id": "ch3_q82",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review finding is most likely related to maintainability?",
    "options": [
      "Duplicated Code",
      "Incorrect Workflow",
      "Slow Database Query",
      "Missing Test Case"
    ],
    "correct": 0,
    "explanation": "Duplicated code (copy-paste blocks) directly complicates maintenance efforts, making it a key maintainability finding for static analysis tools."
  },
  {
    "id": "ch3_q83",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review type is most likely to include management participation?",
    "options": [
      "Inspection",
      "Technical Review",
      "Management Review",
      "Walkthrough"
    ],
    "correct": 2,
    "explanation": "Management reviews involve leaders evaluating project progress, monitoring status, and making strategic planning decisions."
  },
  {
    "id": "ch3_q84",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of review entry criteria?",
    "options": [
      "Ensure readiness for review",
      "Execute test cases",
      "Measure defect density",
      "Close defects"
    ],
    "correct": 0,
    "explanation": "Entry criteria ensure that a work product is complete and ready for review, preventing the team from wasting time on substandard source files."
  },
  {
    "id": "ch3_q85",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "A static analysis tool reports variables that are declared but never used. What type of issue is this?",
    "options": [
      "Unused Code",
      "Regression Defect",
      "Requirement Gap",
      "Functional Failure"
    ],
    "correct": 0,
    "explanation": "Variables that are declared but never referenced represent unused code, which can clutter source files and reduce code maintainability."
  },
  {
    "id": "ch3_q86",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review role is responsible for creating the work product being reviewed?",
    "options": [
      "Moderator",
      "Author",
      "Scribe",
      "Reviewer"
    ],
    "correct": 1,
    "explanation": "The author is the creator of the work product under review."
  },
  {
    "id": "ch3_q87",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which review activity involves examining a work product individually?",
    "options": [
      "Planning",
      "Kick-off",
      "Individual Preparation",
      "Closure"
    ],
    "correct": 2,
    "explanation": "During individual preparation, reviewers independently examine the work product to identify potential issues before the review meeting."
  },
  {
    "id": "ch3_q88",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a major advantage of inspections over informal reviews?",
    "options": [
      "Less preparation",
      "Higher defect detection effectiveness",
      "No documentation",
      "No moderator needed"
    ],
    "correct": 1,
    "explanation": "Inspections are highly formal and structured, making them significantly more effective at detecting defects than informal reviews."
  },
  {
    "id": "ch3_q89",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "question": "Static analysis tools are most useful for detecting:",
    "options": [
      "Missing requirements",
      "Coding standard violations",
      "Usability issues",
      "Performance bottlenecks"
    ],
    "correct": 1,
    "explanation": "Static analysis excels at enforcing syntax guidelines and verifying compliance with coding standards."
  },
  {
    "id": "ch3_q90",
    "chapter": "chapter3",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which review type focuses on compliance with standards and regulations?",
    "options": [
      "Walkthrough",
      "Inspection",
      "Audit",
      "Technical Review"
    ],
    "correct": 2,
    "explanation": "An audit is an independent check conducted to verify compliance with specified standards, internal processes, or regulatory constraints."
  },
  {
    "id": "ch3_match1",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 3,
    "type": "matching",
    "question": "Match each static testing technique with its correct description.",
    "hint": "Order them by formality: informal → walkthrough → technical review → inspection, from least to most structured.",
    "leftItems": [
      "Walkthrough",
      "Technical review",
      "Inspection",
      "Informal review"
    ],
    "rightItems": [
      "A formal review led by a trained moderator, using defined entry/exit criteria and metrics",
      "The author leads colleagues through a document, scenario by scenario",
      "A peer-driven review focused on technical accuracy, usually without a formal process",
      "A low-cost review with no formal process, often just a colleague reading over the work"
    ],
    "correctPairs": {
      "0": 1,
      "1": 2,
      "2": 0,
      "3": 3
    },
    "explanation": "Walkthroughs are author-led sessions, technical reviews focus on technical content among peers, inspections are the most formal type with defined roles and metrics, and informal reviews have no defined process."
  },
  {
    "id": "chapter3_lo_311",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-3.1.1",
    "kLevel": "K1",
    "question": "Which of the following can be examined by static testing?",
    "options": [
      "Requirements specifications and source code, without executing them",
      "Only running, deployed applications",
      "Only compiled binaries",
      "Only user acceptance test results"
    ],
    "correct": 0,
    "explanation": "Static testing examines work products like requirements, designs, and code at the specification/implementation level, without executing them."
  },
  {
    "id": "chapter3_lo_312",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-3.1.2",
    "kLevel": "K2",
    "question": "What is a key value of static testing?",
    "options": [
      "It finds defects early, before dynamic testing begins, reducing the cost of fixing them",
      "It replaces the need for dynamic testing entirely",
      "It can only be performed by automated tools",
      "It requires the software to be fully executable first"
    ],
    "correct": 0,
    "explanation": "Because static testing doesn't require execution, it can catch defects very early — in requirements or design — long before dynamic testing is even possible."
  },
  {
    "id": "chapter3_lo_313",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-3.1.3",
    "kLevel": "K2",
    "question": "What is the key difference between static and dynamic testing?",
    "options": [
      "Static testing examines a work product without executing it; dynamic testing requires executing the software",
      "Static testing always finds more defects than dynamic testing",
      "Dynamic testing is performed only by automated tools",
      "Static testing can only be done after release"
    ],
    "correct": 0,
    "explanation": "The defining difference is execution: static testing never runs the code, while dynamic testing observes the software's behavior as it executes."
  },
  {
    "id": "chapter3_lo_321",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-3.2.1",
    "kLevel": "K1",
    "question": "What is a key benefit of getting early and frequent stakeholder feedback via reviews?",
    "options": [
      "Misunderstandings and defects are caught before they propagate into later, costlier stages",
      "It eliminates the need for any dynamic testing",
      "It removes the need for a defined review process",
      "It guarantees zero defects in the final product"
    ],
    "correct": 0,
    "explanation": "Early feedback through reviews surfaces misunderstandings and defects while they're still cheap and easy to fix."
  },
  {
    "id": "chapter3_lo_322",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-3.2.2",
    "kLevel": "K2",
    "question": "Which of the following correctly orders the main activities of a formal review process?",
    "options": [
      "Planning → Initiate review → Individual preparation → Communication/analysis → Fixing and reporting",
      "Fixing and reporting → Planning → Initiate review",
      "Individual preparation → Planning → Fixing",
      "Communication/analysis → Initiate review → Planning"
    ],
    "correct": 0,
    "explanation": "The formal review process flows: plan the review, kick it off, let reviewers prepare individually, discuss and analyze findings together, then fix and report."
  },
  {
    "id": "chapter3_lo_323",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-3.2.3",
    "kLevel": "K1",
    "question": "In a formal review, who is responsible for recording issues, defects, and decisions raised during the meeting?",
    "options": [
      "The scribe",
      "The author",
      "The manager",
      "The moderator"
    ],
    "correct": 0,
    "explanation": "The scribe (recorder) logs all issues, defects, and decisions during the review meeting, distinct from the moderator who facilitates it."
  },
  {
    "id": "chapter3_lo_324",
    "chapter": "chapter3",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-3.2.4",
    "kLevel": "K2",
    "question": "Which review type is led step-by-step by the document's own author, typically as an open, informal discussion?",
    "options": [
      "Walkthrough",
      "Inspection",
      "Informal review",
      "Technical review"
    ],
    "correct": 0,
    "explanation": "A walkthrough is author-led, guiding colleagues scenario-by-scenario through the work product, distinct from the more formal, moderator-led inspection."
  },
  {
    "id": "chapter3_lo_325",
    "chapter": "chapter3",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-3.2.5",
    "kLevel": "K1",
    "question": "Which of the following contributes to a successful review?",
    "options": [
      "Clear objectives and defined entry/exit criteria agreed upon in advance",
      "Skipping individual preparation to save time",
      "Avoiding any moderator or facilitator role",
      "Reviewing only the final, already-released product"
    ],
    "correct": 0,
    "explanation": "Successful reviews have clear objectives, appropriate entry/exit criteria, and reviewers who prepare individually before the meeting."
  }
];
