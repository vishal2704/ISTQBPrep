// Question bank — chapter2
// 72 questions (LO-tagged expansion — see
// src/data/loReference.js for the official ISTQB v4.0.1 Learning Objectives)
export const chapter2Questions = [
  {
    "id": "ch2_q1",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test level focuses on verifying interactions between integrated components?",
    "hint": "This level sits between component testing and system testing — think 'components talking to each other'.",
    "options": [
      "Component Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "correct": 1,
    "explanation": "Integration testing verifies interfaces and interactions between components or systems."
  },
  {
    "id": "ch2_q2",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test level is usually performed by developers?",
    "hint": "This is the lowest test level, closest to the code — who writes the code?",
    "options": [
      "Acceptance Testing",
      "System Testing",
      "Component Testing",
      "Operational Testing"
    ],
    "correct": 2,
    "explanation": "Component testing is commonly performed by developers to verify individual units or modules."
  },
  {
    "id": "ch2_q3",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary objective of System Testing?",
    "hint": "System testing looks at the whole integrated system against what kind of requirements?",
    "options": [
      "Verify individual components",
      "Verify interfaces",
      "Evaluate the complete integrated system",
      "Verify user acceptance"
    ],
    "correct": 2,
    "explanation": "System testing evaluates the behavior of the complete integrated system."
  },
  {
    "id": "ch2_q4",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Who is typically responsible for User Acceptance Testing (UAT)?",
    "hint": "UAT is the last test level before release — who actually uses the software day to day?",
    "options": [
      "Developers",
      "Test Managers",
      "End Users or Customers",
      "System Administrators"
    ],
    "correct": 2,
    "explanation": "Acceptance testing is often performed by customers, users, or business representatives."
  },
  {
    "id": "ch2_q5",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test type focuses on system performance under load?",
    "hint": "This is a non-functional test type — think about 'how well' the system behaves, not 'what' it does.",
    "options": [
      "Usability Testing",
      "Performance Testing",
      "Functional Testing",
      "Security Testing"
    ],
    "correct": 1,
    "explanation": "Performance testing evaluates responsiveness, scalability, and stability under load."
  },
  {
    "id": "ch2_q6",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test type verifies what the system does?",
    "hint": "Functional vs. non-functional — this one checks the system's behavior/output, not its speed or usability.",
    "options": [
      "Functional Testing",
      "Performance Testing",
      "Security Testing",
      "Compatibility Testing"
    ],
    "correct": 0,
    "explanation": "Functional testing verifies system functionality against requirements."
  },
  {
    "id": "ch2_q7",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a key benefit of the V-Model?",
    "hint": "The V-Model pairs each development phase with a test level — what does that pairing encourage doing early?",
    "options": [
      "No testing activities are needed",
      "Testing activities are linked to development activities",
      "Testing starts after deployment",
      "Only developers perform testing"
    ],
    "correct": 1,
    "explanation": "The V-Model aligns testing activities with corresponding development phases."
  },
  {
    "id": "ch2_q8",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which SDLC model emphasizes iterative development and continuous feedback?",
    "hint": "Agile-style SDLC models favor short cycles — which model gets frequent stakeholder feedback?",
    "options": [
      "Waterfall",
      "V-Model",
      "Agile",
      "Big Bang"
    ],
    "correct": 2,
    "explanation": "Agile promotes iterative development, collaboration, and rapid feedback."
  },
  {
    "id": "ch2_q9",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which testing practice supports early defect detection?",
    "options": [
      "Shift-right Testing",
      "Shift-left Testing",
      "Maintenance Testing",
      "Exploratory Testing"
    ],
    "correct": 1,
    "explanation": "Shift-left testing moves testing activities earlier in the lifecycle."
  },
  {
    "id": "ch2_q10",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which statement about DevOps is TRUE?",
    "options": [
      "Testing occurs only at the end",
      "Development and Operations work collaboratively",
      "Testing is optional",
      "Only automation engineers are involved"
    ],
    "correct": 1,
    "explanation": "DevOps promotes collaboration between development and operations teams."
  },
  {
    "id": "ch2_q11",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is regression testing primarily intended to do?",
    "options": [
      "To detect unintended side effects in unchanged areas of the system after a modification",
      "To confirm that a previously detected defect has been successfully corrected.",
      "To ensure that the system meets its specified performance and reliability requirements.",
      "To verify that a newly developed feature functions correctly according to its specifications."
    ],
    "correct": 1,
    "explanation": "According to the official ISTQB glossary, regression testing is the testing of a previously tested program following a modification to ensure that defects have not been introduced or uncovered in unchanged areas of the software as a result of the changes made. Option B perfectly captures this core intent."
  },
  {
    "id": "ch2_q12",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which maintenance activity may require testing?",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All maintenance changes require testing to verify correctness and identify side effects."
  },
  {
    "id": "ch2_q13",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test level validates business processes and user needs?",
    "options": [
      "Component Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Unit Testing"
    ],
    "correct": 2,
    "explanation": "Acceptance testing confirms the system satisfies business requirements."
  },
  {
    "id": "ch2_q14",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which type of testing is most likely to evaluate ease of use?",
    "options": [
      "Usability Testing",
      "Performance Testing",
      "Security Testing",
      "Compatibility Testing"
    ],
    "correct": 0,
    "explanation": "Usability testing evaluates user experience and ease of use."
  },
  {
    "id": "ch2_q15",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test type evaluates protection against unauthorized access?",
    "options": [
      "Performance Testing",
      "Usability Testing",
      "Security Testing",
      "Portability Testing"
    ],
    "correct": 2,
    "explanation": "Security testing evaluates confidentiality, integrity, and access controls."
  },
  {
    "id": "ch2_q16",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which environment most closely resembles production?",
    "options": [
      "Development",
      "Test",
      "Acceptance",
      "Production-like Test Environment"
    ],
    "correct": 3,
    "explanation": "A production-like environment provides realistic validation of system behavior."
  },
  {
    "id": "ch2_q17",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the main purpose of Alpha Testing?",
    "options": [
      "Internal acceptance testing by users within the organization",
      "Performance testing",
      "Security testing",
      "Component testing"
    ],
    "correct": 0,
    "explanation": "Alpha testing is typically performed internally before external release."
  },
  {
    "id": "ch2_q18",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the purpose of Beta Testing?",
    "options": [
      "Internal testing only",
      "Testing by selected external users",
      "Unit testing",
      "Integration testing"
    ],
    "correct": 1,
    "explanation": "Beta testing gathers feedback from real users in real-world conditions."
  },
  {
    "id": "ch2_q19",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity is commonly automated in Continuous Integration pipelines?",
    "options": [
      "Requirement Reviews",
      "Build Verification Tests",
      "User Training",
      "Contract Reviews"
    ],
    "correct": 1,
    "explanation": "CI pipelines commonly execute automated build verification and regression tests."
  },
  {
    "id": "ch2_q20",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement best describes Continuous Testing?",
    "options": [
      "Testing only before release",
      "Testing only in production",
      "Automated testing integrated into delivery pipelines",
      "Manual testing performed daily"
    ],
    "correct": 2,
    "explanation": "Continuous testing integrates automated testing into the software delivery process."
  },
  {
    "id": "ch2_q21",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which test level focuses on verifying communication between integrated systems?",
    "options": [
      "Component Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Maintenance Testing"
    ],
    "correct": 1,
    "explanation": "Integration testing verifies interactions between components or systems."
  },
  {
    "id": "ch2_q22",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is a non-functional test type?",
    "options": [
      "Boundary Value Testing",
      "Performance Testing",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    "correct": 1,
    "explanation": "Performance testing evaluates non-functional quality characteristics."
  },
  {
    "id": "ch2_q23",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the primary objective of maintenance testing?",
    "options": [
      "Verify new requirements only",
      "Test changes and identify unintended side effects",
      "Perform acceptance testing",
      "Replace regression testing"
    ],
    "correct": 1,
    "explanation": "Maintenance testing validates modifications and checks for regressions."
  },
  {
    "id": "ch2_q24",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which test type focuses on how well the system protects information?",
    "options": [
      "Usability Testing",
      "Compatibility Testing",
      "Security Testing",
      "Accessibility Testing"
    ],
    "correct": 2,
    "explanation": "Security testing evaluates confidentiality, integrity and availability."
  },
  {
    "id": "ch2_q25",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is often a trigger for maintenance testing?",
    "options": [
      "Code changes",
      "Environment changes",
      "Operating system upgrades",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Any change to software or its environment may require maintenance testing."
  },
  {
    "id": "ch2_q26",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which approach aims to move testing activities earlier in development?",
    "options": [
      "Shift-right",
      "Shift-left",
      "Big Bang Testing",
      "Beta Testing"
    ],
    "correct": 1,
    "explanation": "Shift-left encourages earlier testing to reduce defect costs."
  },
  {
    "id": "ch2_q27",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which approach emphasizes testing in production-like environments?",
    "options": [
      "Shift-left",
      "Shift-right",
      "Static Testing",
      "Review-based Testing"
    ],
    "correct": 1,
    "explanation": "Shift-right focuses on monitoring and testing in production environments."
  },
  {
    "id": "ch2_q28",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a key objective of Continuous Integration?",
    "options": [
      "Delay testing until release",
      "Frequently integrate code changes",
      "Eliminate automation",
      "Reduce communication"
    ],
    "correct": 1,
    "explanation": "Continuous Integration encourages frequent integration and automated verification."
  },
  {
    "id": "ch2_q29",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement best describes Continuous Delivery?",
    "options": [
      "Every build is automatically deployed to production",
      "Software can be released at any time",
      "Testing is skipped",
      "Only manual deployment is allowed"
    ],
    "correct": 1,
    "explanation": "Continuous Delivery ensures software is always in a releasable state."
  },
  {
    "id": "ch2_q30",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is often included in a CI pipeline?",
    "options": [
      "Automated Build",
      "Automated Tests",
      "Code Quality Checks",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Modern CI pipelines typically include builds, tests and quality checks."
  },
  {
    "id": "ch2_q31",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which test level is primarily responsible for validating complete, end-to-end business workflows across the entire integrated system?",
    "options": [
      "Component Testing",
      "Integration Testing",
      "System Testing",
      "Code Review / Static Review"
    ],
    "correct": 2,
    "explanation": "System testing focuses on the behavior and capabilities of a whole system or product. While Integration Testing looks at interactions between components, full end-to-end business scenarios are typically validated at the System (or System Acceptance) testing level."
  },
  {
    "id": "ch2_q32",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which testing activity or approach is most characteristic of a typical iterative-incremental (Agile) sprint development cycle?",
    "options": [
      "Continuous testing integrated throughout the short development iteration.",
      "Beta testing conducted by end-users in a production-like environment.",
      "Operational Acceptance Testing performed by system administrators.",
      "Maintenance Testing triggered by post-release environmental modifications."
    ],
    "correct": 0,
    "explanation": "In Agile methodologies, testing is not a distinct phase but an ongoing, continuous activity integrated within every sprint. Options B and C describe later, formal acceptance stages. Option D refers to testing performed on already deployed, live software systems."
  },
  {
    "id": "ch2_q33",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which quality characteristic is evaluated when a test team checks how easily a user can learn, operate, and understand a software application?",
    "options": [
      "Performance efficiency",
      "Security and vulnerability",
      "Usability",
      "Portability Testing"
    ],
    "correct": 2,
    "explanation": "This aligns with ISO/IEC 25010 product quality characteristics used by ISTQB. Usability specifically measures appropriateness recognizability, learnability, and operability."
  },
  {
    "id": "ch2_q34",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary objective of performing a smoke test on a new build?",
    "options": [
      "To verify that the critical, core functionalities of the system work well enough to justify further testing.",
      "To thoroughly execute all regression test cases to find deep structural defects.",
      "To simulate extreme user loads and ensure the system does not crash under stress.",
      "To validate that the system adheres to strict organizational security and encryption policies."
    ],
    "correct": 0,
    "explanation": "Smoke testing (or build verification testing) checks the absolute basics. If it fails, the build is rejected, saving time."
  },
  {
    "id": "ch2_q35",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a key benefit of integrating automated test suites into a Continuous Integration / Continuous Deployment (CI/CD) pipeline?",
    "options": [
      "It guarantees the complete elimination of all critical software defects.",
      "It removes the need for human stakeholders to perform any exploratory or usability testing.",
      "It automatically corrects identified code defects without developer intervention.",
      "It provides rapid feedback on software quality while reducing manual execution effort and increasing consistency."
    ],
    "correct": 3,
    "explanation": "Automation improves speed, consistency and efficiency."
  },
  {
    "id": "ch2_q36",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which activity helps identify regressions after a software update?",
    "options": [
      "Exploratory Testing",
      "Regression Testing",
      "Acceptance Testing",
      "Walkthrough"
    ],
    "correct": 1,
    "explanation": "Regression testing ensures existing functionality still works."
  },
  {
    "id": "ch2_q37",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which statement is TRUE about Agile testing?",
    "options": [
      "Testing is integrated throughout the development lifecycle, emphasizing continuous feedback and a whole-team approach.",
      "Independent testing is completely eliminated in Agile teams to maximize collaboration and delivery speed.",
      "Agile teams prioritize working software, meaning that formal test strategies and test plans are not utilized.",
      "Test execution for a user story can only begin once the developer has fully completed the coding for that story."
    ],
    "correct": 1,
    "explanation": "Agile teams perform testing continuously throughout development."
  },
  {
    "id": "ch2_q38",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is Operational Acceptance Testing (OAT) primarily concerned with?",
    "options": [
      "Evaluating the system's readiness for release regarding administration, recovery, and supportability.",
      "Verifying that the system satisfies the defined business requirements and user stories.",
      "Checking the structural integrity of individual code components prior to integration.",
      "Measuring code quality metrics such as cyclomatic complexity and statement coverage."
    ],
    "correct": 1,
    "explanation": "OAT focuses on non-functional requirements like backup/restore, disaster recovery, and maintenance tasks. Option A describes User Acceptance Testing (UAT). Options C and D are component/static testing concepts."
  },
  {
    "id": "ch2_q39",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following test activities are commonly performed as automated gates in a continuous delivery pipeline before a build is deployed to production?",
    "options": [
      "Build Verification Testing and Smoke Testing only.",
      "Regression Testing and Performance Testing only.",
      "Smoke Testing and User Acceptance Testing only.",
      "Build Verification Testing, Regression Testing, and Smoke Testing."
    ],
    "correct": 3,
    "explanation": "Organizations commonly execute all of these activities before release."
  },
  {
    "id": "ch2_q40",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which statement best describes the approach to testing within a DevOps framework?",
    "options": [
      "Testing is a continuous activity integrated into the automated software delivery pipeline.",
      "Testing is a separate, distinct phase performed exclusively by independent testing teams.",
      "Testing is primarily shifted to post-production monitoring to reduce delivery times.",
      "Testing relies predominantly on manual exploratory sessions to maximize defect detection."
    ],
    "correct": 1,
    "explanation": "DevOps emphasizes Continuous Testing where testing is deeply woven into the CI/CD pipeline."
  },
  {
    "id": "ch2_q41",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which testing activity is typically performed first?",
    "options": [
      "System Testing",
      "Acceptance Testing",
      "Component Testing",
      "Regression Testing"
    ],
    "correct": 2,
    "explanation": "Component testing is usually the first test level."
  },
  {
    "id": "ch2_q42",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which test level verifies interfaces between modules?",
    "options": [
      "System Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Beta Testing"
    ],
    "correct": 1,
    "explanation": "Integration testing focuses on interfaces and interactions."
  },
  {
    "id": "ch2_q43",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which Agile practice is most essential for supporting continuous quality by frequently merging code changes into a shared repository for automated testing?",
    "options": [
      "Big Bang Integration",
      "Continuous Integration",
      "Retrospective Planning",
      "Sequential Code Reviews"
    ],
    "correct": 1,
    "explanation": "Continuous Integration (CI) involves frequent code merges followed by automated builds and tests."
  },
  {
    "id": "ch2_q44",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which maintenance type adapts software to a new operating system?",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "correct": 1,
    "explanation": "Adaptive maintenance handles environmental changes."
  },
  {
    "id": "ch2_q45",
    "chapter": "chapter2",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which testing approach or paradigm involves activities commonly performed after a build has been deployed to the production environment?",
    "options": [
      "Shift-right testing",
      "Shift-left testing",
      "Static Testing",
      "Technical walkthroughs"
    ],
    "correct": 1,
    "explanation": "Shift-right testing extends testing into production (e.g., A/B testing, canary deployments, production monitoring). Shift-left happens early in the lifecycle. Static testing done before code execution."
  },
  {
    "id": "ch2_combo1",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 2,
    "type": "combination",
    "question": "Which TWO test levels are typically associated with verifying interactions between integrated components? (Select 2)",
    "hint": "Both correct answers involve integration — the difference is WITHIN one system vs. ACROSS multiple systems/interfaces.",
    "options": [
      "Component integration testing",
      "System integration testing",
      "Component testing",
      "Acceptance testing"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Component integration testing checks interactions between integrated components, while system integration testing checks interactions between different systems or with external interfaces."
  },
  {
    "id": "chapter2_lo_211",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.1",
    "kLevel": "K2",
    "question": "How does choosing a sequential (V-model) SDLC typically affect testing, compared to an iterative model?",
    "options": [
      "Testing activities are typically deferred until after the corresponding development phase, while iterative models test each increment as it's built",
      "Sequential models eliminate the need for a test plan",
      "Iterative models forbid regression testing",
      "SDLC choice has no impact on testing whatsoever"
    ],
    "correct": 0,
    "explanation": "In a sequential model each test level maps to a development phase and largely follows it; iterative/incremental models weave testing into every short cycle."
  },
  {
    "id": "chapter2_lo_212",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-2.1.2",
    "kLevel": "K1",
    "question": "Which good testing practice applies regardless of which SDLC model is used?",
    "options": [
      "For every development activity, there is a corresponding test activity",
      "Testing only occurs after the entire system is complete",
      "Test levels can be skipped if the deadline is tight",
      "Only developers may execute tests"
    ],
    "correct": 0,
    "explanation": "Across all SDLC models, good practice pairs each development activity with a corresponding test activity, and each test level has specific objectives."
  },
  {
    "id": "chapter2_lo_213",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-2.1.3",
    "kLevel": "K1",
    "question": "Which of the following is an example of a test-first approach to development?",
    "options": [
      "Test-Driven Development (TDD)",
      "Waterfall development",
      "Big-bang integration",
      "Ad hoc testing after release"
    ],
    "correct": 0,
    "explanation": "TDD, along with ATDD and BDD, are test-first approaches where tests are defined before or alongside the code that implements them."
  },
  {
    "id": "chapter2_lo_214",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.4",
    "kLevel": "K2",
    "question": "How does DevOps typically impact testing?",
    "options": [
      "It encourages continuous testing integrated into CI/CD pipelines for fast feedback",
      "It removes the need for automated tests",
      "It delays testing until after deployment only",
      "It requires a fully separate, siloed test team"
    ],
    "correct": 0,
    "explanation": "DevOps combines development and operations practices to shorten delivery cycles, relying heavily on continuous, automated testing within CI/CD pipelines."
  },
  {
    "id": "chapter2_lo_215",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.5",
    "kLevel": "K2",
    "question": "What does 'shift left' mean in testing?",
    "options": [
      "Performing testing activities earlier in the software development lifecycle",
      "Moving all testing to after release",
      "Shifting responsibility for testing entirely to end users",
      "Reducing the number of test levels"
    ],
    "correct": 0,
    "explanation": "Shift left means moving testing activities as early as possible in the lifecycle, catching defects when they're cheapest to fix."
  },
  {
    "id": "chapter2_lo_216",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.6",
    "kLevel": "K2",
    "question": "How can retrospectives help improve the test process?",
    "options": [
      "By reflecting on what went well and what didn't after an iteration, enabling continuous process improvement",
      "By assigning blame for missed defects",
      "By replacing the need for test planning",
      "They apply only to Waterfall projects"
    ],
    "correct": 0,
    "explanation": "Retrospectives are a mechanism for the whole team, including testers, to reflect and continuously improve their process after each iteration or release."
  },
  {
    "id": "chapter2_lo_221",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.1",
    "kLevel": "K2",
    "question": "Which test level focuses on interactions between two or more integrated components?",
    "options": [
      "Integration testing",
      "Component testing",
      "Acceptance testing",
      "Maintenance testing"
    ],
    "correct": 0,
    "explanation": "Integration testing checks the interfaces and interactions between integrated components or systems, distinct from testing a single component in isolation."
  },
  {
    "id": "chapter2_lo_222",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.2",
    "kLevel": "K2",
    "question": "Testing a system's response time under load is an example of which test type?",
    "options": [
      "Non-functional testing",
      "Functional testing",
      "White-box testing",
      "Confirmation testing"
    ],
    "correct": 0,
    "explanation": "Non-functional testing evaluates attributes like performance, usability, and security — 'how well' the system behaves — rather than 'what' it does."
  },
  {
    "id": "chapter2_lo_223",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.3",
    "kLevel": "K2",
    "question": "After a defect is fixed, the team re-runs the previously failing test case to confirm the fix worked. What is this called?",
    "options": [
      "Confirmation testing",
      "Regression testing",
      "Exploratory testing",
      "Acceptance testing"
    ],
    "correct": 0,
    "explanation": "Confirmation testing (re-testing) specifically re-runs the test that previously failed to confirm the defect is now fixed."
  },
  {
    "id": "chapter2_lo_231",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.3.1",
    "kLevel": "K2",
    "question": "Which of the following is a typical trigger for maintenance testing?",
    "options": [
      "A planned upgrade to the production environment, such as an OS or database migration",
      "Writing the initial set of user stories",
      "The first component test of a brand-new module",
      "Sprint planning at the start of a new project"
    ],
    "correct": 0,
    "explanation": "Maintenance testing is triggered by modifications, migrations, or retirements of a system already in production — not by initial development activities."
  },
  {
    "id": "ch2_ex1",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.1",
    "kLevel": "K2",
    "question": "A team switches from a V-model to Scrum. What is the most likely impact on testing?",
    "options": [
      "Testing becomes integrated into each short sprint instead of a single late phase",
      "Testing is no longer required",
      "All test levels are combined into one",
      "Test cases must be written only in machine code"
    ],
    "correct": 0,
    "explanation": "Iterative/Agile models like Scrum weave testing into every sprint, rather than deferring it to a dedicated phase at the end as in a sequential V-model."
  },
  {
    "id": "ch2_ex2",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-2.1.2",
    "kLevel": "K1",
    "question": "Which practice is considered good testing practice across ALL software development lifecycle models?",
    "options": [
      "Defining test levels with clear objectives for each",
      "Testing only after the software is fully released",
      "Skipping test planning for small projects",
      "Letting only end users find defects"
    ],
    "correct": 0,
    "explanation": "Regardless of SDLC model, good practice pairs each development activity with a test activity and gives each test level clear objectives."
  },
  {
    "id": "ch2_ex3",
    "chapter": "chapter2",
    "difficulty": "easy",
    "marks": 1,
    "type": "combination",
    "lo": "FL-2.1.3",
    "kLevel": "K1",
    "question": "Which TWO of the following are test-first approaches to development? (Select 2)",
    "options": [
      "Test-Driven Development (TDD)",
      "Behavior-Driven Development (BDD)",
      "Waterfall development",
      "Big-bang integration"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "TDD and BDD both define tests before or alongside the code. Waterfall and big-bang integration are not test-first approaches."
  },
  {
    "id": "ch2_ex4",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.4",
    "kLevel": "K2",
    "question": "In a DevOps environment with continuous deployment, what role does test automation typically play?",
    "options": [
      "It provides fast, repeatable feedback within the CI/CD pipeline before every deployment",
      "It is optional and rarely used",
      "It replaces the need for any manual exploratory testing",
      "It only runs once a year during a scheduled review"
    ],
    "correct": 0,
    "explanation": "DevOps relies on automated tests running continuously within CI/CD pipelines to give fast feedback on every change before it reaches production."
  },
  {
    "id": "ch2_ex5",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-2.1.5",
    "kLevel": "K2",
    "question": "A team starts writing acceptance criteria and running static reviews during requirements gathering, instead of waiting until coding is done. What does this best illustrate?",
    "options": [
      "Shift left",
      "Regression testing",
      "Confirmation testing",
      "Maintenance testing"
    ],
    "correct": 0,
    "explanation": "Shift left means moving testing-related activities — like defining acceptance criteria and reviewing requirements — as early as possible in the lifecycle."
  },
  {
    "id": "ch2_ex6",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.6",
    "kLevel": "K2",
    "question": "After a difficult release, the team holds a meeting to discuss what went well, what didn't, and what to change next time. What is this called?",
    "options": [
      "A retrospective",
      "A test plan",
      "A defect report",
      "A confirmation test"
    ],
    "correct": 0,
    "explanation": "A retrospective is a dedicated meeting for the team to reflect on the past iteration or release and identify concrete process improvements."
  },
  {
    "id": "ch2_ex7",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "type": "matching",
    "lo": "FL-2.2.1",
    "kLevel": "K2",
    "question": "Match each test level to its primary focus.",
    "leftItems": [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    "rightItems": [
      "Individual components in isolation",
      "Interactions between integrated components",
      "The fully integrated system against requirements",
      "Whether the system meets business/user needs"
    ],
    "correctPairs": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3
    },
    "explanation": "Each test level has a distinct focus: component (isolated units), integration (interactions), system (the whole integrated product), and acceptance (business/user validation)."
  },
  {
    "id": "ch2_ex8",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-2.2.2",
    "kLevel": "K2",
    "question": "Which TWO of the following are examples of non-functional testing? (Select 2)",
    "options": [
      "Usability testing",
      "Performance testing",
      "Testing that a login form accepts correct credentials",
      "Testing that a calculator adds two numbers correctly"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Usability and performance testing evaluate attributes of the system (non-functional). The other two options check specific functional behavior — what the system does."
  },
  {
    "id": "ch2_ex9",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-2.2.3",
    "kLevel": "K2",
    "question": "A defect in the payment module is fixed. The team re-runs the previously failing test AND re-runs a broader set of unrelated tests to make sure nothing else broke. What are these two activities called, respectively?",
    "options": [
      "Confirmation testing, then regression testing",
      "Regression testing, then confirmation testing",
      "Both are the same activity",
      "Neither is a recognized testing activity"
    ],
    "correct": 0,
    "explanation": "Confirmation testing re-checks that the specific fix worked; regression testing then checks that unrelated, previously-working areas weren't broken by the change."
  },
  {
    "id": "ch2_ex10",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.3.1",
    "kLevel": "K2",
    "question": "A production system is scheduled for a database migration next month. What kind of testing should be planned around this event?",
    "options": [
      "Maintenance testing",
      "Component testing",
      "ATDD",
      "Static testing only"
    ],
    "correct": 0,
    "explanation": "Planned production changes like migrations, upgrades, or retirements are classic triggers for maintenance testing."
  },
  {
    "id": "ch2_ex11",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.1",
    "kLevel": "K2",
    "question": "Which SDLC characteristic is most associated with the Agile family of models?",
    "options": [
      "Short, iterative cycles with frequent customer collaboration and feedback",
      "A single long phase with no intermediate releases",
      "Testing performed only once, right before final release",
      "Requirements frozen permanently at project kickoff"
    ],
    "correct": 0,
    "explanation": "Agile models are defined by short iterative cycles, continuous customer collaboration, and the flexibility to adapt as feedback comes in."
  },
  {
    "id": "ch2_ex12",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.1",
    "kLevel": "K2",
    "question": "Which of the following is typically validated during acceptance testing?",
    "options": [
      "Whether the system meets business needs and is ready for the user",
      "Whether an individual function returns the correct value",
      "Whether two specific components exchange data correctly",
      "Whether the code compiles without errors"
    ],
    "correct": 0,
    "explanation": "Acceptance testing sits at the end of the test-level sequence, validating the system against real business and user needs rather than technical correctness alone."
  },
  {
    "id": "ch2_ex13",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.2",
    "kLevel": "K2",
    "question": "A security test attempting to access an admin page without valid credentials is an example of which test type?",
    "options": [
      "Non-functional testing (security)",
      "Functional testing",
      "Confirmation testing",
      "Component testing"
    ],
    "correct": 0,
    "explanation": "Security is a non-functional quality characteristic — this test evaluates how well the system protects itself, not what a feature does."
  },
  {
    "id": "ch2_ex14",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.1.4",
    "kLevel": "K2",
    "question": "Which of these is a typical DevOps practice that supports faster, safer releases?",
    "options": [
      "Continuous Integration/Continuous Deployment (CI/CD) with automated test gates",
      "Manually testing the entire system once a year",
      "Deploying directly to production with no automated checks",
      "Disabling all automated tests to speed up builds"
    ],
    "correct": 0,
    "explanation": "CI/CD pipelines with automated test gates let teams release frequently while catching regressions before they reach users."
  },
  {
    "id": "ch2_ex15",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.3.1",
    "kLevel": "K2",
    "question": "Besides planned upgrades, which of the following can also trigger maintenance testing?",
    "options": [
      "An emergency patch fixing a production defect",
      "Writing the first draft of a user story",
      "The initial component test of a new feature",
      "Sprint planning for an upcoming release"
    ],
    "correct": 0,
    "explanation": "Maintenance testing is triggered by any change to a system already in production — planned or emergency — including hotfixes and patches."
  },
  {
    "id": "ch2_ex16",
    "chapter": "chapter2",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-2.2.3",
    "kLevel": "K2",
    "question": "Which statement about regression testing is correct?",
    "options": [
      "It aims to detect defects introduced in previously working, unchanged areas after a change",
      "It only re-runs the exact test case that previously failed",
      "It is only performed once, at the very end of a project",
      "It replaces the need for confirmation testing"
    ],
    "correct": 0,
    "explanation": "Regression testing casts a wider net than confirmation testing — checking that a change hasn't broken anything else that used to work."
  }
];
