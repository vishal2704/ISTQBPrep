// Question bank — chapter1
// 121 questions (14 tagged to official ISTQB v4.0.1
// Learning Objectives — see src/data/loReference.js)
export const chapter1Questions = [
  {
    "id": "ch1_q1",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is a primary objective of testing?",
    "hint": "Recall the seven testing principles — one says testing can only reduce risk and find defects, never prove their absence.",
    "options": [
      "To prove software is defect-free",
      "To find defects and reduce risk",
      "To eliminate all project risks",
      "To replace code reviews"
    ],
    "correct": 1,
    "explanation": "Testing aims to uncover defects, reduce the level of risk, and provide information about software quality. It cannot prove that software is entirely defect-free or eliminate all risk."
  },
  {
    "id": "ch1_q2",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which testing principle states that exhaustive testing is not feasible?",
    "hint": "This is one of the seven principles — think about why you can't test every possible input/path combination.",
    "options": [
      "Defect clustering",
      "Testing shows presence of defects",
      "Exhaustive testing is impossible",
      "Pesticide paradox"
    ],
    "correct": 2,
    "explanation": "Testing all combinations of inputs and preconditions is mathematically and temporally impossible except for trivial cases. Risk analysis and optimization are used to guide test effort instead."
  },
  {
    "id": "ch1_q3",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What does testing primarily demonstrate?",
    "hint": "Testing principle #1: what testing CAN show vs. what it CANNOT show.",
    "options": [
      "Software is defect-free",
      "Software is ready for production",
      "Presence of defects",
      "Developers made mistakes"
    ],
    "correct": 2,
    "explanation": "According to testing principles, testing shows the presence of defects but cannot prove their absence. Finding no defects does not mean none exist."
  },
  {
    "id": "ch1_q4",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which principle suggests that defects tend to be concentrated in a few areas?",
    "hint": "Sometimes called the 'defect clustering' principle — think Pareto (80/20) rule.",
    "options": [
      "Defect clustering",
      "Pesticide paradox",
      "Early testing",
      "Absence-of-errors fallacy"
    ],
    "correct": 0,
    "explanation": "Defect clustering states that a small number of modules or areas usually contain the majority of the defects discovered during testing, mirroring the Pareto principle (80/20 rule)."
  },
  {
    "id": "ch1_q5",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the purpose of confirmation testing?",
    "hint": "Confirmation testing (a.k.a. re-testing) always follows a fix — what is it confirming?",
    "options": [
      "Find new defects",
      "Verify a fix works correctly",
      "Assess system performance",
      "Check user acceptance"
    ],
    "correct": 1,
    "explanation": "Confirmation testing (or re-testing) specifically executes test cases that previously failed to verify whether the underlying defect has been successfully fixed."
  },
  {
    "id": "ch1_q6",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the purpose of regression testing?",
    "hint": "Regression testing runs after ANY change, not just bug fixes — what is it protecting against?",
    "options": [
      "Verify fixes only",
      "Check performance",
      "Ensure changes have not introduced unintended effects",
      "Test usability"
    ],
    "correct": 2,
    "explanation": "Regression testing involves executing tests on unchanged areas of the software to ensure that recent modifications, fixes, or enhancements have not inadvertently broken existing functional components."
  },
  {
    "id": "ch1_q7",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Why is early testing beneficial?",
    "hint": "Think in terms of cost — how much cheaper is it to catch a defect in a requirements review vs. in production?",
    "options": [
      "It guarantees quality",
      "It reduces the cost of fixing defects",
      "It removes the need for reviews",
      "It eliminates regression testing"
    ],
    "correct": 1,
    "explanation": "The earlier an issue is detected in the software development lifecycle (SDLC), the easier and significantly cheaper it is to fix before it propagates into subsequent phases."
  },
  {
    "id": "ch1_q8",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which statement best describes a test basis?",
    "hint": "A test basis is what you derive test cases FROM — think documents/requirements, not the code itself.",
    "options": [
      "A defect report",
      "A source of information used to derive test cases",
      "A test execution log",
      "A bug tracking tool"
    ],
    "correct": 1,
    "explanation": "The test basis consists of any documentation or source of information from which the requirements of a component or system can be inferred, such as specifications, user stories, architecture designs, or code."
  },
  {
    "id": "ch1_q9",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which activity involves comparing actual and expected results?",
    "options": [
      "Test planning",
      "Test design",
      "Test execution",
      "Test monitoring"
    ],
    "correct": 2,
    "explanation": "During test execution, actual outputs from the running system are observed and directly compared against the predetermined expected results to log passes or failures."
  },
  {
    "id": "ch1_q10",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a test condition?",
    "options": [
      "A defect",
      "A test case",
      "An item or event that can be verified by one or more test cases",
      "A test script"
    ],
    "correct": 2,
    "explanation": "A test condition is an aspect of the test basis that can be verified, such as a business rule, a functional requirement, or a structural component."
  },
  {
    "id": "ch1_q11",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which role is most commonly responsible for fixing defects?",
    "options": [
      "Tester",
      "Business analyst",
      "Developer",
      "Product owner"
    ],
    "correct": 2,
    "explanation": "While testers detect and log failures, developers are responsible for isolating the root cause via debugging and introducing the code change necessary to resolve the defect."
  },
  {
    "id": "ch1_q12",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is a product risk?",
    "options": [
      "Tester unavailable",
      "Schedule delay",
      "Application crashes during payment processing",
      "Insufficient budget"
    ],
    "correct": 2,
    "explanation": "Product risks relate directly to the quality characteristics of the software asset itself (e.g., failure, instability, performance). Schedule delays, budget problems, and resource unavailability are *project* risks."
  },
  {
    "id": "ch1_q13",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which statement is true about testing and debugging?",
    "options": [
      "They are identical activities",
      "Testing identifies failures, debugging identifies causes and fixes",
      "Debugging is performed only by testers",
      "Testing fixes defects"
    ],
    "correct": 1,
    "explanation": "Testing exposes dynamic failures without modifying code. Debugging is a developmental activity that investigates the system state to find the fault cause, isolate it, and fix it."
  },
  {
    "id": "ch1_q14",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which principle warns that repeating the same tests may become ineffective over time?",
    "options": [
      "Defect clustering",
      "Pesticide paradox",
      "Early testing",
      "Testing is context dependent"
    ],
    "correct": 1,
    "explanation": "The pesticide paradox states that if the same tests are repeated over and over, eventually those tests will no longer find new defects. Test cases must be regularly reviewed, updated, or rewritten to target new areas."
  },
  {
    "id": "ch1_q15",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the absence-of-errors fallacy?",
    "options": [
      "Assuming no defects exist",
      "Believing software is useful simply because few defects were found",
      "Thinking testing is unnecessary",
      "Believing developers make no mistakes"
    ],
    "correct": 1,
    "explanation": "Finding and fixing a high percentage of defects does not guarantee a successful system. If the system is built against incorrect requirements, or fails to satisfy operational business needs, it remains unusable."
  },
  {
    "id": "ch1_q16",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test activity produces test cases?",
    "options": [
      "Test planning",
      "Test analysis",
      "Test design",
      "Test completion"
    ],
    "correct": 2,
    "explanation": "Test analysis defines *what* to test (test conditions). Test design takes those conditions and defines *how* to test them by creating concrete test cases and specifying test data."
  },
  {
    "id": "ch1_q17",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which document often contains expected results?",
    "options": [
      "Requirements specification",
      "Defect report",
      "Incident log",
      "Source code"
    ],
    "correct": 0,
    "explanation": "Expected outcomes should ideally be derived from an authoritative oracle or test basis document—most commonly the requirements or user story specification—prior to test execution."
  },
  {
    "id": "ch1_q18",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a failure?",
    "options": [
      "A human action producing an incorrect result",
      "Deviation between expected and actual behavior",
      "A defect in code",
      "A missing requirement"
    ],
    "correct": 1,
    "explanation": "A failure is an event where the running system behaves incorrectly or departs from its required performance. It is caused by an underlying defect activated during execution."
  },
  {
    "id": "ch1_q19",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is an error?",
    "options": [
      "A flaw in documentation",
      "A human action producing an incorrect result",
      "A software failure",
      "A test execution issue"
    ],
    "correct": 1,
    "explanation": "An error (or mistake) is a human action or mental slip that produces an incorrect result—such as typing a wrong conditional block or missing an edge case during requirement writing."
  },
  {
    "id": "ch1_q20",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following best describes quality assurance?",
    "options": [
      "Executing tests only",
      "Activities focused on providing confidence that quality requirements will be fulfilled",
      "Debugging software",
      "Fixing defects"
    ],
    "correct": 1,
    "explanation": "Quality Assurance (QA) focuses on procedural correctness and process improvements across the entire lifecycle to guarantee confidence that quality standards will be reached. It is distinct from Quality Control (QC), which tests the actual product."
  },
  {
    "id": "ch1_q21",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is most likely to be a stakeholder interested in test results?",
    "options": [
      "Customers",
      "Developers",
      "Project managers",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Different stakeholders use test data for unique reasons: project managers look at release readiness, developers seek defect paths to fix code, and customers require validation that business objectives are satisfied."
  },
  {
    "id": "ch1_q22",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which test activity involves determining what to test?",
    "options": [
      "Test execution",
      "Test planning",
      "Test analysis",
      "Test completion"
    ],
    "correct": 2,
    "explanation": "Test analysis answers the question 'what to test' by reviewing the test basis to establish measurable test conditions."
  },
  {
    "id": "ch1_q23",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of a test oracle?",
    "options": [
      "Execute tests automatically",
      "Predict future defects",
      "Determine expected results",
      "Generate test data"
    ],
    "correct": 2,
    "explanation": "A test oracle acts as a source to determine expected results to compare against the actual result of the software under test (e.g., an existing system, manual, user documentation)."
  },
  {
    "id": "ch1_q24",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is an example of static testing?",
    "options": [
      "Running a test script",
      "Executing automated tests",
      "Reviewing requirements",
      "Performing regression testing"
    ],
    "correct": 2,
    "explanation": "Static testing involves checking work products without running code. This is accomplished via manual reviews (e.g., requirement walkthroughs) or automated static analysis tools."
  },
  {
    "id": "ch1_q25",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the main purpose of test monitoring?",
    "options": [
      "Create test cases",
      "Track progress against the test plan",
      "Execute test scripts",
      "Fix defects"
    ],
    "correct": 1,
    "explanation": "Test monitoring collects metrics and checks actual progress against the original milestones outlined within the test plan, enabling transparent reporting and corrective actions."
  },
  {
    "id": "ch1_q26",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which principle states that testing depends on context?",
    "options": [
      "Testing is context dependent",
      "Pesticide paradox",
      "Defect clustering",
      "Early testing"
    ],
    "correct": 0,
    "explanation": "Testing is context dependent because safety-critical embedded systems (like automotive software) require fundamentally different approaches, techniques, and intensities compared to an e-commerce mobile application."
  },
  {
    "id": "ch1_q27",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following best describes risk-based testing?",
    "options": [
      "Testing only critical defects",
      "Prioritizing testing based on risk levels",
      "Skipping low-risk functionality",
      "Testing without planning"
    ],
    "correct": 1,
    "explanation": "Risk-based testing uses the identified level of product risk to focus testing activities during planning, design, and execution phases, ensuring highest-risk elements are covered first."
  },
  {
    "id": "ch1_q28",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a common outcome of test execution?",
    "options": [
      "Defect report",
      "Source code update",
      "Requirement specification",
      "Test strategy"
    ],
    "correct": 0,
    "explanation": "When actual outcomes differ from expected parameters during execution, discrepancies are captured and logged as formal defect or incident reports."
  },
  {
    "id": "ch1_q29",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about quality control is correct?",
    "options": [
      "It focuses on process improvement",
      "It focuses on evaluating work products",
      "It replaces testing",
      "It eliminates risk"
    ],
    "correct": 1,
    "explanation": "Quality Control (QC) represents a product-oriented approach aimed at testing and evaluating the actual work products to uncover flaws and measure current quality."
  },
  {
    "id": "ch1_q30",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity can help prevent defects?",
    "options": [
      "Reviews",
      "Debugging",
      "Regression testing",
      "Acceptance testing"
    ],
    "correct": 0,
    "explanation": "Reviews (a form of static testing) evaluate requirements or design artifacts *before* software implementation. Catching ambiguities at this stage prevents developers from programming defects into the code."
  },
  {
    "id": "ch1_q31",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the relationship between errors and defects?",
    "options": [
      "Defects cause human errors",
      "Errors can introduce defects",
      "They are identical",
      "Defects prevent errors"
    ],
    "correct": 1,
    "explanation": "A human error or mistake made during documentation or coding introduces a physical flaw into the asset, which is formally designated as a defect or bug."
  },
  {
    "id": "ch1_q32",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement best describes testing?",
    "options": [
      "It guarantees quality",
      "It reduces uncertainty about quality",
      "It proves software is correct",
      "It replaces inspections"
    ],
    "correct": 1,
    "explanation": "Testing provides data and transparency. Running an optimized set of test scenarios helps reduce uncertainty regarding quality levels and systemic risks for deployment stakeholders."
  },
  {
    "id": "ch1_q33",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why is communication important in testing?",
    "options": [
      "To increase execution speed",
      "To ensure stakeholders understand risks and results",
      "To reduce documentation",
      "To avoid test planning"
    ],
    "correct": 1,
    "explanation": "Testers must communicate defect details neutrally and construct objective quality reports so business stakeholders can accurately evaluate operational risks."
  },
  {
    "id": "ch1_q34",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which work product can be reviewed during static testing?",
    "options": [
      "Requirements",
      "Design documents",
      "Source code",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Static testing is highly versatile; it is applicable to specifications, high-level architectures, functional documentation, deployment scripts, or raw uncompiled source code."
  },
  {
    "id": "ch1_q35",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of test completion activities?",
    "options": [
      "Design new tests",
      "Prepare test environments",
      "Collect lessons learned and archive testware",
      "Execute regression tests"
    ],
    "correct": 2,
    "explanation": "Test completion activities occur at milestones like releases. This phase involves archiving valuable test scripts, cleaning environments, and gathering process feedback via retrospectives."
  },
  {
    "id": "ch1_q36",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following statements correctly describes the relationship between software testing and quality risk?",
    "options": [
      "Exhaustive testing eliminates all operational risks before deployment.",
      "Testing provides information that helps identify and mitigate quality risks.",
      "Rigorous risk management activities completely replace the need for dynamic testing.",
      "Testing activities inherently increase overall project risk by introducing code changes."
    ],
    "correct": 1,
    "explanation": "Testing is a risk-mitigation activity that provides awareness of product quality, allowing stakeholders to make informed release decisions. Option A is incorrect because ISTQB Principle 2 states that exhaustive testing is impossible; hence, testing reduces risk but can never remove it entirely. Option B is incorrect because risk analysis and risk management activities guide and prioritize testing efforts rather than replacing the need for dynamic execution. Option D is incorrect because testing activities themselves do not introduce source code modifications (code changes are a development activity during debugging)."
  },
  {
    "id": "ch1_q37",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "According to ISTQB terminology, which of the following best defines a test case?",
    "options": [
      "A set of preconditions, inputs, actions, expected results, and postconditions developed for a specific test condition.",
      "A formal defect report documenting an anomaly observed during the dynamic execution of software.",
      "A comprehensive high-level project document outlining the overall testing strategy and resource constraints.",
      "An isolated, compile-ready source code module designed to automate specific structural paths."
    ],
    "correct": 0,
    "explanation": "This matches the formal ISTQB Glossary definition of a test case. Option A describes a Test Plan or Test Strategy, which handles high-level scheduling and resource allocation. Option B describes an automated component test script, unit test, or stub, which is an implementation item rather than the conceptual definition of a test case itself. Option D describes an incident, anomaly, or defect report, which logs observed system failures during test execution."
  },
  {
    "id": "ch1_q38",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following statements is true based on the fundamental principles of software testing?",
    "options": [
      "A comprehensive test suite can prove that software is entirely defect-free.",
      "Testing can show that defects are present, but cannot prove that there are no defects.",
      "Automating all test levels eliminates the need for static analysis and formal reviews.",
      "Achieving 100% test coverage guarantees absolute customer and user satisfaction."
    ],
    "correct": 1,
    "explanation": "This directly tests ISTQB Principle 1 ('Testing shows the presence of defects, not their absence'). Even if no defects are found, it is not proof of absolute correctness. Option D ignores the 'Absence-of-errors fallacy' (Principle 7), which states that fixing defects is useless if the system is unusable or fails to meet user needs."
  },
  {
    "id": "ch1_q39",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a primary benefit of utilizing independent testing teams within an organization?",
    "options": [
      "It removes the responsibility of component-level testing from the software developers.",
      "Independent testers bring different cognitive biases, making them more effective at finding unique defects.",
      "It makes developer code reviews and static analysis activities entirely unnecessary.",
      "It transfers all business risk to the test team, eliminating project delivery failures."
    ],
    "correct": 1,
    "explanation": "Independent testers look at a system from a different perspective (cognitive bias) than the author, allowing them to spot flaws that developers might overlook due to familiarity. Option A is false because developers must still test their own code. Option D is a trap; testing measures and mitigates risk but can never completely eliminate it."
  },
  {
    "id": "ch1_q40",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "From an ISTQB perspective, what is considered a primary objective of software testing?",
    "options": [
      "To execute every possible input combination to guarantee a zero-defect product.",
      "To focus exclusively on demonstrating compliance with strict regulatory checklists.",
      "To provide sufficient, reliable information to stakeholders to support quality-driven decision-making.",
      "To replace independent quality assurance processes with automated execution tools."
    ],
    "correct": 2,
    "explanation": "A core objective of testing is to evaluate work products and provide sufficient information to stakeholders so they can make informed decisions, making B the correct answer."
  },
  {
    "id": "ch1_q41",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which testing principle states that testing can show the presence of defects but not their absence?",
    "options": [
      "Defect clustering",
      "Pesticide paradox",
      "Testing shows presence of defects",
      "Testing is context dependent"
    ],
    "correct": 2,
    "explanation": "This principle underscores that regardless of how extensively a product is tested, running additional scenarios might still reveal undiscovered defects."
  },
  {
    "id": "ch1_q42",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is most likely a project risk?",
    "options": [
      "Incorrect tax calculation",
      "System crash during payment",
      "Key tester leaves the project",
      "Security vulnerability"
    ],
    "correct": 2,
    "explanation": "Project risks threaten the project's execution capacity, constraints, and resources (such as staff departures). Functional bugs or security vulnerabilities are product risks."
  },
  {
    "id": "ch1_q43",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "In risk management, what is the primary purpose of executing risk mitigation activities?",
    "options": [
      "To eliminate the need for dynamic execution and static analysis testing phases.",
      "To implement proactive measures that reduce the likelihood or impact of potential failures.",
      "To intentionally increase the project budget to accommodate unvetted scope changes.",
      "To systematically delay product releases until all non-critical anomalies are resolved."
    ],
    "correct": 1,
    "explanation": "Risk mitigation involves taking actions to lower the probability of a risk occurring, its negative consequences (impact), or both."
  },
  {
    "id": "ch1_q44",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity provides information for release decisions?",
    "options": [
      "Debugging",
      "Testing",
      "Coding",
      "Deployment"
    ],
    "correct": 1,
    "explanation": "Testing supplies objective data about residual defects, requirements coverage, and verification results, which is used to evaluate whether the application is fit for deployment."
  },
  {
    "id": "ch1_q45",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which stakeholder group is primarily impacted by and concerned with business (product) risks, such as an application failing to meet critical user needs?",
    "options": [
      "Customers, business analysts, and product owners.",
      "Compilers and automated static analysis tools.",
      "Relational database management systems.",
      "Target runtime environments and operating systems."
    ],
    "correct": 0,
    "explanation": "Business risks affect the viability of the product from a user, commercial, or operational perspective. Therefore, human stakeholders like customers and product owners care deeply about them. Options B, C, and D are technical components or software tools, not stakeholders capable of possessing business interests."
  },
  {
    "id": "ch1_q46",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following statements best describes the difference between testing and debugging?",
    "options": [
      "Testing identifies the source code error, while debugging fixes the resulting system failure.",
      "Testing shows failures caused by defects, while debugging investigates, analyzes, and removes the causes of failures.",
      "Testing is performed exclusively by independent teams, while debugging is performed exclusively by automated pipelines.",
      "Testing ensures a system is entirely free of errors, while debugging is used to assess overall product risk."
    ],
    "correct": 1,
    "explanation": "Dynamic testing shows failures caused by defects. Debugging is the development activity that finds, analyzes, and fixes those defects to prevent the failures from recurring."
  },
  {
    "id": "ch1_q47",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A programmer makes a mistake in the logic of a calculation module, which results in an incorrect line of code. When the program is compiled and executed, the system displays an incorrect invoice total to the user. According to ISTQB terminology, what represents the incorrect total displayed to the user?",
    "options": [
      "An error",
      "A defect",
      "A failure",
      "A mistake"
    ],
    "correct": 2,
    "explanation": "A failure is an event in which a component or system does not perform a required function within specified limits. The incorrect total seen during runtime is the failure; the underlying code issue is a defect/fault, and the human action was the error/mistake."
  },
  {
    "id": "ch1_q48",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "An organization is building a medical device control application. The test team must determine how much testing is sufficient before product release. Which factor should be given the highest priority when making this decision?",
    "options": [
      "The total number of test cases written by the test analyst.",
      "The specific level of product, safety, and business risk associated with a failure.",
      "The expiration date of the project budget allocation.",
      "The density of comments inside the source code modules."
    ],
    "correct": 1,
    "explanation": "Deciding how much testing is enough depends on project constraints, but primarily on the level of risk (product risk, safety risk, and business risk) as well as time and budget realities."
  },
  {
    "id": "ch1_q49",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following is a recognized, standard objective of software testing?",
    "options": [
      "To prove that the software contains absolutely no remaining defects.",
      "To provide sufficient information to stakeholders to build confidence and support decision-making.",
      "To completely eliminate the need for future maintenance activities.",
      "To assign blame to the development team for code quality issues."
    ],
    "correct": 1,
    "explanation": "One of the core objectives of testing is to provide sufficient information to stakeholders, especially regarding the level of quality and the risk of releasing a component or system."
  },
  {
    "id": "ch1_q50",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A test manager states: 'Our automated test suite has run smoothly for the past six months without finding any new defects. Therefore, our software is stable and ready for continuous deployment.' Which ISTQB testing principle is this statement violating?",
    "options": [
      "Defect clustering",
      "Absence-of-errors fallacy",
      "Pesticide paradox",
      "Early testing"
    ],
    "correct": 2,
    "explanation": "The Pesticide Paradox principle states that if the same tests are repeated over and over again, eventually they will no longer find any new defects. To detect new defects, test cases need to be regularly reviewed and updated."
  },
  {
    "id": "ch1_q51",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "During a project's requirement review phase, a tester notices that the acceptance criteria for a user login story are ambiguous. The tester requests clarification, preventing an incorrect implementation. This scenario is an example of which testing concept?",
    "options": [
      "Defect correction during dynamic execution",
      "The defect-prevention benefit of early testing activities",
      "Automated verification within a continuous pipeline",
      "The structural analysis of code elements"
    ],
    "correct": 1,
    "explanation": "ISTQB Principle 3 (Early Testing) emphasizes that testing activities should start as early as possible in the lifecycle. Reviewing requirements allows defects to be caught and prevented before they are ever compiled into code."
  },
  {
    "id": "ch1_q52",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following statements regarding the relationship between QA, QC, and testing is correct?",
    "options": [
      "Testing and Quality Control (QC) are identical proactive concepts focused entirely on process improvement.",
      "Quality Assurance (QA) is a subset of software testing concerned only with defect detection.",
      "Software testing is a part of Quality Control (QC), which itself is a part of a broader Quality Assurance (QA) approach.",
      "Quality Assurance focuses entirely on executing software, while Quality Control focuses on writing test plans."
    ],
    "correct": 2,
    "explanation": "Quality Assurance (QA) is process-oriented and covers the entire lifecycle. Quality Control (QC) is product-oriented. Software testing is an essential part of QC, making it nested under the umbrella of QA."
  },
  {
    "id": "ch1_q53",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A major accounting software release works flawlessly according to all written functional design parameters. However, when deployed, users reject it because the interface is frustratingly slow and confusing to their real-world day-to-day workflow. Which testing principle does this highlight?",
    "options": [
      "Testing is context dependent",
      "Absence-of-errors fallacy",
      "Exhaustive testing is impossible",
      "Defect clustering"
    ],
    "correct": 1,
    "explanation": "Principle 7 (Absence-of-errors fallacy) states that finding and fixing defects does not help if the system built is unusable or does not match user expectations and business needs."
  },
  {
    "id": "ch1_q54",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A tester is working on a high-security banking app. They focus a significant portion of their efforts on the payment gateway because historical data shows that a small percentage of modules usually contain the majority of operational defects. What principle is being utilized?",
    "options": [
      "Pesticide paradox",
      "Defect clustering",
      "Testing shows the presence of defects",
      "Absence-of-errors fallacy"
    ],
    "correct": 1,
    "explanation": "Defect Clustering (Principle 4) states that a small number of modules usually contain most of the defects discovered during pre-release testing or are responsible for the operational failures."
  },
  {
    "id": "ch1_q55",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following is considered a cognitive skill that a software tester must possess to communicate defects constructively?",
    "options": [
      "The ability to write complex SQL script statements.",
      "An understanding of multiple object-oriented programming frameworks.",
      "The capacity to see things from the perspective of other stakeholders and communicate objectively.",
      "Expertise in configuring automated deployment orchestration tools."
    ],
    "correct": 2,
    "explanation": "Good communication and psychological skills involve presenting findings neutrally, collaborating constructively, and understanding the perspectives of developers and project stakeholders without creating friction."
  },
  {
    "id": "ch1_q56",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "During which activity of the fundamental test process are test conditions identified, prioritized, and transformed into high-level test cases based on test basis analysis?",
    "options": [
      "Test Analysis",
      "Test Design",
      "Test Implementation",
      "Test Monitoring and Control"
    ],
    "correct": 0,
    "explanation": "Test Analysis involves evaluating the test basis (requirements, specs) to identify testable features and define and prioritize associated test conditions."
  },
  {
    "id": "ch1_q57",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "What is the primary distinction between Test Design and Test Implementation within the ISTQB test process?",
    "options": [
      "Test Design allocates the financial budget, while Test Implementation hires the contract testers.",
      "Test Design creates high-level test cases, while Test Implementation develops detailed test procedures, sequences them, and creates test data.",
      "Test Design is an exclusively manual process, while Test Implementation is completely automated.",
      "Test Design occurs before development, while Test Implementation occurs after the product is in production."
    ],
    "correct": 1,
    "explanation": "During Test Design, test conditions are elaborated into test cases. During Test Implementation, the testing artifacts are prepared and arranged into test procedures, checking that everything is ready for execution."
  },
  {
    "id": "ch1_q58",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which document or artifact represents the 'test basis' for an application?",
    "options": [
      "The code coverage metrics report generated by a unit test framework.",
      "The requirements specifications, user stories, or architecture design documents from which test cases are derived.",
      "The database schema logs collected during an overnight performance run.",
      "The finalized defect status reports presented during test closure."
    ],
    "correct": 1,
    "explanation": "The test basis is defined as all information sources from which the requirements of a component or system can be inferred. It is what testers analyze to create tests."
  },
  {
    "id": "ch1_q59",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A test team is verifying bidirectional traceability between user requirements and specific test cases. What is the primary benefit of maintaining this traceability matrix?",
    "options": [
      "It allows developers to automatically rewrite failing test scripts.",
      "It provides a clear measure of requirement coverage and helps assess the impact of requirement changes.",
      "It guarantees that all executing automated tests run twice as fast.",
      "It eliminates the need to record test execution results."
    ],
    "correct": 1,
    "explanation": "Traceability allows for an accurate analysis of impact when requirements change, provides a clear view of test coverage, and helps verify that business goals are properly validated."
  },
  {
    "id": "ch1_q60",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following statements best illustrates a risk-based approach to software testing?",
    "options": [
      "Testing every possible combination of inputs starting from alphabetically arranged requirements.",
      "Using risk analysis to identify, prioritize, and focus testing efforts on areas most vulnerable to high-impact failures.",
      "Delaying all testing activities until the product risk has fallen to absolute zero.",
      "Letting developers decide what to test based on which sections of code were easiest to write."
    ],
    "correct": 1,
    "explanation": "Risk-based testing uses risk analysis to guide the test process, ensuring that test effort is proportional to the probability and impact of potential product quality risks."
  },
  {
    "id": "ch1_q61",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "When writing a formal defect report, which piece of information is most critical to include to ensure a developer can effectively analyze and resolve the problem?",
    "options": [
      "The estimated cost penalty to the business if the defect is not resolved.",
      "The explicit, unambiguous steps to reproduce the failure alongside expected and actual results.",
      "The personal opinion of the tester regarding why the developer made the error.",
      "A complete historical list of all previous revisions of the code module."
    ],
    "correct": 1,
    "explanation": "An effective defect report must provide precise details (steps to reproduce, logs, expected vs actual results) so developers can isolate the defect and perform debugging."
  },
  {
    "id": "ch1_q62",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which testing principle directly addresses the constraint that testing a system using every possible valid and invalid input sequence is practically impossible?",
    "options": [
      "Testing shows the presence of defects",
      "Exhaustive testing is impossible",
      "Defect clustering",
      "Pesticide paradox"
    ],
    "correct": 1,
    "explanation": "Principle 2 (Exhaustive testing is impossible) explicitly states that testing everything is unfeasible except in trivial cases. Testing must use risk analysis and prioritization instead."
  },
  {
    "id": "ch1_q63",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "An independent tester finds a major flaw in a newly developed feature. How should the tester communicate this finding to the developer to maintain a collaborative relationship?",
    "options": [
      "By sending a generic email stating that the module's quality is completely unacceptable.",
      "By presenting the facts about the failure neutrally and objectively in a written report, focusing on the system behavior.",
      "By waiting until the end of the project to present a combined list of failures to the project manager.",
      "By fixing the source code themselves without notifying the development team."
    ],
    "correct": 1,
    "explanation": "Communicating constructively means providing objective feedback, avoiding personal criticism, and focusing on technical facts to foster a strong team dynamic."
  },
  {
    "id": "ch1_q64",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "In what way does software testing contribute to a project's overall success?",
    "options": [
      "By ensuring that no code changes are allowed after the first draft of requirements.",
      "By uncovering defects early, which reduces risk and lowers the overall cost of quality and remediation.",
      "By taking full responsibility for writing the technical architecture specifications.",
      "By guaranteeing that users will never experience a system crash in production under any workload."
    ],
    "correct": 1,
    "explanation": "Tester involvement in review and testing processes reduces the risk of introducing defects, leading to cheaper fixes and a higher-quality final release."
  },
  {
    "id": "ch1_q65",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following is a key task performed during the 'Test Planning' activity of the fundamental test process?",
    "options": [
      "Executing automated test scripts within the staging environment.",
      "Defining the overall testing strategy, scope, objectives, and exit criteria.",
      "Analyzing the database tables to find structural data corruption anomalies.",
      "Writing detailed steps to reproduce a newly discovered crash defect."
    ],
    "correct": 1,
    "explanation": "Test planning is the activity of defining the objectives of testing and the specification of steps for achieving them within the defined constraints."
  },
  {
    "id": "ch1_q66",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "An environmental factor, such as cosmic radiation or a sudden hardware power surge, corrupts a server's memory block. This causes an executed program to crash. In ISTQB terminology, what is the sequence of events?",
    "options": [
      "An error caused a defect, which resulted in a failure.",
      "An environmental condition caused a defect, which manifested as a failure when executed.",
      "A human mistake caused a bug, which triggered an operational error.",
      "A system failure created a human error, resulting in an architectural defect."
    ],
    "correct": 1,
    "explanation": "Defects can be caused by human errors, but they can also be introduced by environmental conditions (radiation, magnetic fields). When executed, this defect causes a failure."
  },
  {
    "id": "ch1_q67",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Why should software testing be tailored depending on the context of the application under test?",
    "options": [
      "Because safety-critical software requires identical testing techniques to an e-commerce website.",
      "Because the type of application, regulatory standards, and business risks dictate the appropriate test strategies and techniques.",
      "Because testing must always follow an exact, fixed checklist regardless of project type.",
      "Because automated testing can only be performed on simple, low-risk websites."
    ],
    "correct": 1,
    "explanation": "Principle 6 (Testing is context dependent) states that testing is done differently in different contexts. For example, safety-critical industrial software is tested differently than a mobile gaming application."
  },
  {
    "id": "ch1_q68",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "A test engineer is evaluating the exit criteria of a test plan. They check whether the actual execution metrics match the targets defined before the cycle began. Which test process activity is this?",
    "options": [
      "Test Design",
      "Test Implementation",
      "Test Monitoring and Control",
      "Test Closure"
    ],
    "correct": 2,
    "explanation": "Test Monitoring and Control involves the ongoing comparison of actual progress against planned targets, which includes evaluating whether exit criteria have been met."
  },
  {
    "id": "ch1_q69",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following scenarios describes an example of static testing?",
    "options": [
      "Running an automated functional test suite against a compiled web service.",
      "Conducting an exploratory testing session on a prototype build.",
      "Reviewing draft user stories and requirement specifications with stakeholders.",
      "Executing a performance stress test on a database cluster."
    ],
    "correct": 2,
    "explanation": "Static testing does not involve the execution of the software under test. It relies on manual reviews or automated tool analysis of documents, models, or code."
  },
  {
    "id": "ch1_q70",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "What does the ISTQB principle 'Testing shows the presence of defects, not their absence' mean for a test team?",
    "options": [
      "If a comprehensive testing cycle completes with zero found defects, the software is guaranteed to be bug-free.",
      "Testing can prove that software works correctly under every imaginable scenario.",
      "Finding defects confirms their presence, but a clean test run does not absolute prove that no hidden bugs remain.",
      "Testers should stop executing tests as soon as the first defect is detected."
    ],
    "correct": 2,
    "explanation": "Principle 1 states that testing reduces the probability of undiscovered defects remaining in the software, but even if no defects are found, it is not a proof of absolute correctness."
  },
  {
    "id": "ch1_q71",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "During the 'Test Execution' phase, a tester notices that an automated test case has failed. What should be the very next logical step for the tester?",
    "options": [
      "Log a defect immediately without checking anything else.",
      "Rerun the test to confirm if the anomaly is reproducible, and analyze if the failure was caused by a test setup environment issue.",
      "Delete the test case from the regression suite so it does not skew metrics.",
      "Rewrite the source code of the feature to force the test to pass."
    ],
    "correct": 1,
    "explanation": "When a test fails, the tester must verify whether the failure was caused by a defect in the software, an issue with the test data/environment, or an error in the test script itself before logging it."
  },
  {
    "id": "ch1_q72",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following is a task typically performed during the 'Test Closure' phase of the fundamental test process?",
    "options": [
      "Drafting the high-level project quality risk matrix.",
      "Archiving reusable test artifacts, creating a test summary report, and finalizing defect statuses.",
      "Executing structural branch coverage analysis tools.",
      "Translating abstract test conditions into explicit concrete data."
    ],
    "correct": 1,
    "explanation": "Test closure activities occur at project milestones (like releases) and involve archiving assets, checking statuses of logged defects, and summarizing the outcome for stakeholders."
  },
  {
    "id": "ch1_q73",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "Which of the following options represents a true benefit of using independent testers to validate an application?",
    "options": [
      "Independent testers are immune to making errors during their test execution activities.",
      "Independent testers do not require access to documentation or requirement definitions.",
      "Independent testers bring an unbiased perspective, allowing them to verify assumptions made by developers.",
      "Independent testers completely eliminate the project manager's responsibility for quality."
    ],
    "correct": 2,
    "explanation": "Independence brings objectivity and a different cognitive bias to the project, making independent testers highly effective at finding assumptions or blind spots left by the original author."
  },
  {
    "id": "ch1_q74",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "What is a primary risk of relying *exclusively* on developer testing for an entire software project?",
    "options": [
      "Developers will write too many automated unit tests, stalling the pipeline.",
      "Developers may struggle to objectively find defects in their own work due to confirmation bias.",
      "Developers will intentionally introduce defects to prolong their employment contracts.",
      "Developer testing eliminates the ability to track test case metrics completely."
    ],
    "correct": 1,
    "explanation": "Authors often have a hard time seeing flaws in their own creations due to cognitive bias. Independent eyes are needed to supplement developer component testing."
  },
  {
    "id": "ch1_q75",
    "chapter": "chapter1",
    "difficulty": "medium",
    "question": "An organization adopts a 'Shift-Left' approach within its development lifecycle. How does this strategy impact the testing process?",
    "options": [
      "Testing activities are moved completely out of the sprint phase and into production monitoring.",
      "Testing is initialized earlier in the lifecycle, involving testers in requirement reviews and architectural validation.",
      "Manual exploratory testing is banned, replacing it exclusively with static analysis tools.",
      "The test team is downsized because developers take over all system-level acceptance steps."
    ],
    "correct": 1,
    "explanation": "Shift-left emphasizes moving testing earlier in the lifecycle (to the left on a timeline chart). This means starting static validation, code reviews, and test planning as early as possible to prevent defect propagation."
  },
  {
    "id": "ch1_q76",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "According to ISTQB terminology, what is a human action that produces an incorrect result called?",
    "options": [
      "An error (mistake)",
      "A defect (bug)",
      "A failure",
      "An anomaly"
    ],
    "correct": 0,
    "explanation": "A human makes an error or mistake, which can introduce a defect (bug) into the software code or documentation."
  },
  {
    "id": "ch1_q77",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is a flaw or fault in software code that can cause the system to fail to perform its required function called?",
    "options": [
      "An error",
      "A mistake",
      "A defect",
      "An operational requirement"
    ],
    "correct": 2,
    "explanation": "A defect (also known as a bug or fault) is an imperfection or deficiency in a work product where it does not meet its requirements."
  },
  {
    "id": "ch1_q78",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "When a system or component executes and deviates from its specified delivery behavior, what is this event called?",
    "options": [
      "An error",
      "A mistake",
      "A fault",
      "A failure"
    ],
    "correct": 3,
    "explanation": "A failure is an event in which a component or system does not perform a required function within specified limits."
  },
  {
    "id": "ch1_q79",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which testing principle states that it is not possible to test all combinations of inputs and preconditions?",
    "options": [
      "Defect clustering",
      "Exhaustive testing is impossible",
      "Pesticide paradox",
      "Absence-of-errors fallacy"
    ],
    "correct": 1,
    "explanation": "ISTQB Principle 2 states that testing everything (all combinations of inputs and preconditions) is impossible except in trivial cases."
  },
  {
    "id": "ch1_q80",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which testing principle states that finding and fixing defects is useless if the system built does not satisfy user expectations?",
    "options": [
      "Testing is context dependent",
      "Absence-of-errors fallacy",
      "Early testing",
      "Defect clustering"
    ],
    "correct": 1,
    "explanation": "Principle 7 (Absence-of-errors fallacy) states that fixing defects does not help if the system is unusable or fails to meet user needs."
  },
  {
    "id": "ch1_q81",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which testing principle suggests that software testing should start as soon as possible in the software development lifecycle?",
    "options": [
      "Early testing",
      "Pesticide paradox",
      "Exhaustive testing is impossible",
      "Testing is context dependent"
    ],
    "correct": 0,
    "explanation": "Principle 3 (Early testing) states that testing activities should start as early as possible in the lifecycle to detect and prevent defects early."
  },
  {
    "id": "ch1_q82",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "If the same tests are repeated over and over, eventually they will no longer find new defects. Which principle does this represent?",
    "options": [
      "Defect clustering",
      "Pesticide paradox",
      "Absence-of-errors fallacy",
      "Testing shows the presence of defects"
    ],
    "correct": 1,
    "explanation": "Principle 5 (Pesticide paradox) states that if the same tests are repeated, they eventually stop finding new bugs, meaning test suites must be updated."
  },
  {
    "id": "ch1_q83",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which testing principle states that a small number of software modules usually contain most of the defects?",
    "options": [
      "Defect clustering",
      "Pesticide paradox",
      "Testing is context dependent",
      "Exhaustive testing is impossible"
    ],
    "correct": 0,
    "explanation": "Principle 4 (Defect clustering) states that a small number of modules usually contain the majority of defects discovered during testing."
  },
  {
    "id": "ch1_q84",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the primary difference between static testing and dynamic testing?",
    "options": [
      "Static testing executes the software, while dynamic testing does not.",
      "Static testing does not execute the software, while dynamic testing involves executing the code.",
      "Static testing is only done by managers, while dynamic testing is only done by tools.",
      "Static testing is completely automated, while dynamic testing is strictly manual."
    ],
    "correct": 1,
    "explanation": "Static testing relies on examining work products without running code (reviews, static analysis), whereas dynamic testing requires software execution."
  },
  {
    "id": "ch1_q85",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following is an example of an activity belonging to Quality Assurance (QA)?",
    "options": [
      "Executing automated regression tests on a build.",
      "Defining and improving development and testing processes to prevent defects.",
      "Debugging a memory leak found in code.",
      "Writing defect logs into a bug tracking system."
    ],
    "correct": 1,
    "explanation": "Quality Assurance is process-oriented and focuses on preventing defects by establishing appropriate practices and workflows."
  },
  {
    "id": "ch1_q86",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following is considered a primary objective of software testing?",
    "options": [
      "To show that the software contains zero bugs.",
      "To build confidence in the level of quality of the software.",
      "To rewrite the functional requirements document.",
      "To fix the source code errors directly in production."
    ],
    "correct": 1,
    "explanation": "One of the fundamental goals of testing is to evaluate quality and build confidence that the software is ready for use."
  },
  {
    "id": "ch1_q87",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the collective term for any source information used to derive and design test cases?",
    "options": [
      "Test execution log",
      "Test basis",
      "Test summary report",
      "Test schedule"
    ],
    "correct": 1,
    "explanation": "The test basis refers to all work products (like requirements, user stories, designs) from which the requirements of a system can be inferred."
  },
  {
    "id": "ch1_q88",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "In the fundamental test process, during which activity are test suites organized and test procedures sequenced?",
    "options": [
      "Test Analysis",
      "Test Design",
      "Test Implementation",
      "Test Execution"
    ],
    "correct": 2,
    "explanation": "Test Implementation is the activity where test procedures are created, ordered, and transformed into runnable test suites."
  },
  {
    "id": "ch1_q89",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "During which test process activity is the software executed and actual results compared against expected results?",
    "options": [
      "Test Analysis",
      "Test Implementation",
      "Test Execution",
      "Test Planning"
    ],
    "correct": 2,
    "explanation": "Test Execution is the phase where tests are run on the system, logging results and comparing them to expected outcomes."
  },
  {
    "id": "ch1_q90",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the document called that reports on the testing activities performed and the final quality metrics at the end of a cycle?",
    "options": [
      "Test Case",
      "Test Basis",
      "Test Summary Report",
      "Test Progress Report"
    ],
    "correct": 2,
    "explanation": "A test summary report provides an overview of the testing performed, results achieved, and evaluation against exit criteria at test completion."
  },
  {
    "id": "ch1_q91",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the relationship between testing and debugging?",
    "options": [
      "Testing reveals failures, while debugging locates and fixes the underlying defect.",
      "Testing and debugging are the exact same development activity.",
      "Debugging always takes place before any testing can begin.",
      "Testing fixes the software code, while debugging verifies the test metrics."
    ],
    "correct": 0,
    "explanation": "Testing displays failures caused by bugs. Debugging is the process of finding, analyzing, and removing the cause of those failures."
  },
  {
    "id": "ch1_q92",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which testing principle highlights that an e-commerce website should be tested differently than an industrial safety control system?",
    "options": [
      "Testing is context dependent",
      "Defect clustering",
      "Pesticide paradox",
      "Absence-of-errors fallacy"
    ],
    "correct": 0,
    "explanation": "Principle 6 (Testing is context dependent) states that testing is done differently depending on the nature and environment of the software system."
  },
  {
    "id": "ch1_q93",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the key benefit of achieving bidirectional traceability between requirements and test cases?",
    "options": [
      "It allows developers to stop unit testing entirely.",
      "It helps analyze the impact of changes to requirements and verify test coverage.",
      "It ensures that test cases require no actual inputs.",
      "It automatically corrects compilation errors in the code."
    ],
    "correct": 1,
    "explanation": "Traceability allows stakeholders to determine which requirements are tested, measure coverage accuracy, and track the impact of changes."
  },
  {
    "id": "ch1_q94",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following describes a key quality risk associated with a software application?",
    "options": [
      "The test manager leaving the company during a sprint.",
      "The application failing to respond to user requests within an acceptable timeframe.",
      "The project running out of budget before delivery.",
      "A developer needing additional training on a programming language."
    ],
    "correct": 1,
    "explanation": "A product or quality risk is a potential failure area that directly impacts the software product's quality (like poor performance or instability)."
  },
  {
    "id": "ch1_q95",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the primary role of an independent tester on a software project?",
    "options": [
      "To manage the development schedule and timeline.",
      "To provide an unbiased view of the software quality, separate from the authors.",
      "To rewrite the application using a different language.",
      "To eliminate the need for project managers."
    ],
    "correct": 1,
    "explanation": "Testing independence helps avoid author confirmation bias and brings an objective perspective to software evaluation."
  },
  {
    "id": "ch1_q96",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following is a direct benefit of testing early in the software development lifecycle?",
    "options": [
      "It extends the time required to build the software product.",
      "It helps reduce the overall cost of fixing defects.",
      "It ensures that requirements can never be altered.",
      "It replaces the need for any customer feedback sessions."
    ],
    "correct": 1,
    "explanation": "Finding and fixing defects early in the lifecycle prevents them from multiplying and reduces the overall cost of rework."
  },
  {
    "id": "ch1_q97",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the term used to describe a set of conditions or variables under which a tester determines whether a system satisfies requirements?",
    "options": [
      "Defect Log",
      "Test Case",
      "Test Policy",
      "Test Charter"
    ],
    "correct": 1,
    "explanation": "A test case consists of preconditions, inputs, actions, expected results, and postconditions developed to verify compliance with a specification."
  },
  {
    "id": "ch1_q98",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following statements is true regarding the principle 'Testing shows the presence of defects, not their absence'?",
    "options": [
      "If you run enough tests, you can prove the code is 100% bug-free.",
      "Testing can show that bugs exist, but it cannot prove that no hidden bugs remain.",
      "Testing is only useful if every test case fails during execution.",
      "A successful project is one where testing activities find no defects at all."
    ],
    "correct": 1,
    "explanation": "Principle 1 states that testing reduces the probability of undiscovered bugs, but it is not absolute proof of correctness."
  },
  {
    "id": "ch1_q99",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "When should a tester log a formal defect report?",
    "options": [
      "As soon as a developer writes a new line of code.",
      "When an actual result during test execution deviates from the expected result.",
      "Only after the product has been shipped to real customers.",
      "Whenever a test case executes completely successfully."
    ],
    "correct": 1,
    "explanation": "A defect report is logged when an anomaly or failure is observed during testing, indicating a difference between actual and expected behavior."
  },
  {
    "id": "ch1_q100",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What approach uses risk analysis to prioritize testing activities and focus effort on high-risk areas?",
    "options": [
      "Random testing",
      "Risk-based testing",
      "Exhaustive testing",
      "Ad-hoc development"
    ],
    "correct": 1,
    "explanation": "Risk-based testing uses product risk assessment to prioritize when, where, and how deeply to test a system."
  },
  {
    "id": "ch1_q101",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which mindset is most effective for a software tester during dynamic execution testing?",
    "options": [
      "A completely uncritical and passive mindset.",
      "A curious, professional, and attention-to-detail oriented mindset.",
      "An aggressive, blaming mindset aimed at criticizing developers.",
      "A mindset focused purely on writing new product source code."
    ],
    "correct": 1,
    "explanation": "Testers need a mindset that includes curiosity, professional pessimism, critical evaluation, and attention to detail to find defects effectively."
  },
  {
    "id": "ch1_q102",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following activities is performed during the 'Test Planning' phase of the test process?",
    "options": [
      "Writing detailed steps for test script execution.",
      "Defining the scope, goals, and approach of testing.",
      "Analyzing a code snippet for syntax errors.",
      "Fixing a broken database configuration file."
    ],
    "correct": 1,
    "explanation": "Test planning involves determining the high-level objectives, scoping boundaries, and selecting the appropriate strategies for the testing lifecycle."
  },
  {
    "id": "ch1_q103",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is an example of an artifact reviewed during static testing?",
    "options": [
      "A running database server instance.",
      "A compiled mobile application binary.",
      "A requirements specification document.",
      "A deployed web service endpoint."
    ],
    "correct": 2,
    "explanation": "Static testing involves evaluating work products (like requirements documents, user stories, or code) without executing them."
  },
  {
    "id": "ch1_q104",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "What is the primary value of shifting testing 'left' in a development cycle?",
    "options": [
      "It pushes all testing responsibilities to operations teams.",
      "It ensures defects are identified early, avoiding cost escalation.",
      "It mandates that all testing must be performed manually.",
      "It stops any documentation activities from taking place."
    ],
    "correct": 1,
    "explanation": "Shifting left means performing validation and test activities early in the project timeline, which helps catch defects when they are least expensive to resolve."
  },
  {
    "id": "ch1_q105",
    "chapter": "chapter1",
    "difficulty": "simple",
    "question": "Which of the following statements about testing outcomes is true?",
    "options": [
      "Testing removes all forms of human error from the organization.",
      "Testing reduces product risk and provides information on product quality.",
      "Testing guarantees that the project budget will never be exceeded.",
      "Testing acts as a replacement for software design models."
    ],
    "correct": 1,
    "explanation": "Testing cannot fix human processes or budgets, but it successfully identifies defects, reducing product risk and giving visibility into software health."
  },
  {
    "id": "ch1_combo1",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 2,
    "type": "combination",
    "question": "Which TWO of the following are among the seven testing principles defined by ISTQB? (Select 2)",
    "hint": "Two of the seven principles apply here — think about what testing CAN show, and what's impossible to achieve completely.",
    "options": [
      "Testing shows the presence of defects",
      "Testing proves software has no defects",
      "Exhaustive testing is impossible",
      "Automated testing replaces the need for test planning"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Two of the seven ISTQB testing principles are 'Testing shows the presence of defects' and 'Exhaustive testing is impossible'. Testing can never prove the absence of defects, and automation does not remove the need for planning."
  },
  {
    "id": "ch1_scenario1",
    "chapter": "chapter1",
    "difficulty": "hard",
    "marks": 2,
    "type": "scenario",
    "question": "A team ships a feature after all planned test cases pass with zero defects found. Two weeks later, users report a critical bug in that exact feature. Based on the seven testing principles, what is the most accurate explanation?",
    "hint": "This is testing the 'absence-of-errors fallacy' — passing tests were never a guarantee, only a risk reducer.",
    "options": [
      "The testers were negligent, since passing tests should guarantee no defects remain",
      "Absence of defects found during testing does not prove the software is defect-free — testing only reduces risk, it cannot eliminate it",
      "The bug must have been introduced by the deployment pipeline, not by a gap in testing",
      "This proves exhaustive testing should always be performed before release"
    ],
    "correct": 1,
    "explanation": "This is an applied-logic (K3) question testing the 'absence-of-errors fallacy' principle: finding no defects does not mean none exist. Testing reduces the probability of undiscovered defects but can never guarantee their total absence."
  },
  {
    "id": "chapter1_lo_111",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-1.1.1",
    "kLevel": "K1",
    "question": "Which of the following is NOT a valid objective of testing?",
    "options": [
      "Preventing defects by providing information early",
      "Gaining confidence about the level of quality",
      "Guaranteeing that the software contains zero defects",
      "Providing information for decision-making, particularly regarding quality level"
    ],
    "correct": 2,
    "explanation": "Testing can find defects, build confidence, prevent defects via early activities, and inform decisions — but it can never guarantee zero defects, since testing shows the presence of defects, not their absence."
  },
  {
    "id": "chapter1_lo_112",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.1.2",
    "kLevel": "K2",
    "question": "A developer receives a failure report from a tester, locates the faulty line of code, and fixes it. Which activity did the developer perform?",
    "options": [
      "Testing",
      "Debugging",
      "Static analysis",
      "Confirmation testing"
    ],
    "correct": 1,
    "explanation": "Debugging is the development activity that finds, analyzes, and removes the cause of a failure. Testing is the activity of detecting defects; debugging is a distinct activity that typically follows."
  },
  {
    "id": "chapter1_lo_121",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.2.1",
    "kLevel": "K2",
    "question": "Which of the following best illustrates why testing is necessary at a business level, not just to catch bugs?",
    "options": [
      "It provides information that helps stakeholders make informed decisions about release readiness",
      "It guarantees the software has no defects before release",
      "It replaces the need for requirements documentation",
      "It eliminates the need for code reviews"
    ],
    "correct": 0,
    "explanation": "Beyond finding defects, testing is necessary because it gives stakeholders the information they need to make sound release and business decisions."
  },
  {
    "id": "chapter1_lo_122",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-1.2.2",
    "kLevel": "K1",
    "question": "How does testing relate to quality assurance (QA)?",
    "options": [
      "Testing is a form of quality control; QA is a broader, process-oriented set of activities that testing contributes to",
      "Testing and QA are exactly the same activity",
      "QA is a subset of testing focused only on final acceptance",
      "Testing replaces the need for QA entirely"
    ],
    "correct": 0,
    "explanation": "QA is process-oriented, aiming to ensure quality is engineered into the product; testing (quality control) is one of the activities that feeds into and supports QA."
  },
  {
    "id": "chapter1_lo_123",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.2.3",
    "kLevel": "K2",
    "question": "A developer misunderstands a requirement (root cause) and writes incorrect code (defect). When the system runs and produces a wrong result, what has occurred?",
    "options": [
      "A failure",
      "A root cause",
      "An error",
      "A test condition"
    ],
    "correct": 0,
    "explanation": "An error (human mistake) leads to a defect (flaw in the work product), which — when executed — may cause a failure (deviation from expected behavior). The misunderstanding was the root cause."
  },
  {
    "id": "chapter1_lo_131",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.3.1",
    "kLevel": "K2",
    "question": "A regression suite has used the exact same test cases for three years and stopped finding new defects. What does this best illustrate?",
    "options": [
      "The pesticide paradox — repeated tests lose their ability to find new defects unless varied",
      "The absence-of-errors fallacy",
      "Exhaustive testing is impossible",
      "Defect clustering"
    ],
    "correct": 0,
    "explanation": "The pesticide paradox states that running the same tests repeatedly eventually stops finding new bugs; test suites need to be reviewed and varied over time."
  },
  {
    "id": "chapter1_lo_141",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.4.1",
    "kLevel": "K2",
    "question": "Which of these is a core test activity within the fundamental test process?",
    "options": [
      "Test analysis and design",
      "Sprint planning",
      "Code compilation",
      "Product backlog grooming"
    ],
    "correct": 0,
    "explanation": "The fundamental test process includes activities such as test planning, analysis and design, implementation, execution, completion, and monitoring/control."
  },
  {
    "id": "chapter1_lo_142",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.4.2",
    "kLevel": "K2",
    "question": "Why might two organizations testing similar applications adopt very different test processes?",
    "options": [
      "Because the test process must be tailored to context such as risk, domain, and constraints",
      "Because ISTQB certification requires different processes per country",
      "Because test processes are fixed by law",
      "Because only Agile teams may customize their process"
    ],
    "correct": 0,
    "explanation": "Context — including domain, risk, regulations, team maturity, and constraints — shapes how the test process is applied in practice."
  },
  {
    "id": "chapter1_lo_143",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.4.3",
    "kLevel": "K2",
    "question": "Which of the following is an example of testware?",
    "options": [
      "A test plan and a set of test cases",
      "The production database",
      "The end-user manual",
      "The project charter"
    ],
    "correct": 0,
    "explanation": "Testware refers to artifacts produced during testing: test plans, test cases, test data, and test reports, among others."
  },
  {
    "id": "chapter1_lo_144",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.4.4",
    "kLevel": "K2",
    "question": "What is the main value of maintaining traceability between requirements and test cases?",
    "options": [
      "It allows impact analysis and helps ensure every requirement has adequate test coverage",
      "It replaces the need for a test plan",
      "It automatically fixes defects",
      "It eliminates the need for regression testing"
    ],
    "correct": 0,
    "explanation": "Traceability creates a bidirectional link between the test basis and test cases, supporting coverage verification and impact analysis when requirements change."
  },
  {
    "id": "chapter1_lo_145",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.4.5",
    "kLevel": "K2",
    "question": "Which statement best compares the test manager and tester roles?",
    "options": [
      "The test manager focuses on leadership and management of testing; the tester focuses on test analysis, design, and execution",
      "Both roles are identical and interchangeable at all times",
      "The tester manages the budget; the test manager writes test cases",
      "Only the test manager is allowed to log defects"
    ],
    "correct": 0,
    "explanation": "ISTQB distinguishes the test manager (planning, leading, monitoring/controlling testing) from the tester (analyzing, designing, implementing, and executing tests)."
  },
  {
    "id": "chapter1_lo_151",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.5.1",
    "kLevel": "K2",
    "question": "Which of the following is a generic skill valuable for testers, beyond testing-specific knowledge?",
    "options": [
      "Effective communication and analytical thinking",
      "Expertise in a single programming language only",
      "Authority to approve project budgets",
      "Formal legal training"
    ],
    "correct": 0,
    "explanation": "Generic skills like communication, analytical thinking, and attention to detail are valuable for testers across any domain."
  },
  {
    "id": "chapter1_lo_152",
    "chapter": "chapter1",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-1.5.2",
    "kLevel": "K1",
    "question": "What is a key advantage of the whole-team approach?",
    "options": [
      "Quality-related skills are shared across the team, integrating testing throughout development",
      "Only testers are responsible for quality",
      "Developers no longer need to write any tests",
      "It removes the need for a dedicated test phase entirely in all contexts"
    ],
    "correct": 0,
    "explanation": "The whole-team approach spreads responsibility for quality across all roles, embedding testing activities throughout development rather than isolating them."
  },
  {
    "id": "chapter1_lo_153",
    "chapter": "chapter1",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-1.5.3",
    "kLevel": "K2",
    "question": "What is a potential drawback of high test independence (e.g., a fully separate, external test team)?",
    "options": [
      "Isolation from the development team and potential delays in communication or feedback",
      "Increased likelihood of confirmation bias",
      "Reduced objectivity in defect detection",
      "Testers become less able to notice defects the author overlooked"
    ],
    "correct": 0,
    "explanation": "Independence reduces author bias and often finds different defects, but a real drawback is that isolated testers can become a bottleneck and lack context, slowing feedback."
  }
];
