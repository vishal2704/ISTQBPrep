// Question bank — chapter6
// 62 questions (2 tagged to official ISTQB v4.0.1
// Learning Objectives — see src/data/loReference.js)
export const chapter6Questions = [
  {
    "id": "ch6_q1",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary purpose of test tools?",
    "hint": "Tools generally support testing in two ways: making it more efficient, or making it possible at all — which is the PRIMARY purpose?",
    "options": [
      "Replace testers",
      "Support testing activities",
      "Eliminate defects",
      "Reduce requirements"
    ],
    "correct": 1,
    "explanation": "Test tools support and improve testing activities but do not replace testers."
  },
  {
    "id": "ch6_q2",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool category is used to manage test cases and test execution?",
    "hint": "This tool category manages test cases, execution, and often traceability.",
    "options": [
      "Static Analysis Tool",
      "Test Management Tool",
      "Performance Tool",
      "Build Tool"
    ],
    "correct": 1,
    "explanation": "Test management tools help plan, execute and monitor testing activities."
  },
  {
    "id": "ch6_q3",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool is primarily used for defect tracking?",
    "hint": "This tool logs, tracks status, and helps manage the lifecycle of bugs.",
    "options": [
      "Jira",
      "JMeter",
      "SonarQube",
      "Git"
    ],
    "correct": 0,
    "explanation": "Jira is commonly used for defect and issue tracking."
  },
  {
    "id": "ch6_q4",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool category supports automated execution of tests?",
    "hint": "This tool category replays scripted test steps without manual intervention.",
    "options": [
      "Test Automation Tool",
      "Review Tool",
      "Requirement Tool",
      "Configuration Tool"
    ],
    "correct": 0,
    "explanation": "Automation tools execute predefined test scripts."
  },
  {
    "id": "ch6_q5",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which testing activity benefits most from automation?",
    "hint": "Repetitive, stable tests run many times are the best automation candidates — think regression.",
    "options": [
      "Repetitive Regression Testing",
      "Exploratory Testing",
      "Ad-hoc Testing",
      "Informal Reviews"
    ],
    "correct": 0,
    "explanation": "Regression testing is highly repetitive and suitable for automation."
  },
  {
    "id": "ch6_q6",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool category helps identify coding standard violations?",
    "hint": "This tool analyzes source code without executing it — think style/rule violations.",
    "options": [
      "Static Analysis Tool",
      "Performance Tool",
      "Defect Tool",
      "Test Management Tool"
    ],
    "correct": 0,
    "explanation": "Static analysis tools identify code quality issues without execution."
  },
  {
    "id": "ch6_q7",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool is commonly used for static code analysis?",
    "hint": "Same idea as the tool above — analyzing code without running it.",
    "options": [
      "JMeter",
      "SonarQube",
      "Selenium",
      "Postman"
    ],
    "correct": 1,
    "explanation": "SonarQube performs static code quality analysis."
  },
  {
    "id": "ch6_q8",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool category measures system response times and throughput?",
    "hint": "This tool category is about performance — response time and throughput under load.",
    "options": [
      "Static Analysis Tool",
      "Defect Management Tool",
      "Performance Testing Tool",
      "Review Tool"
    ],
    "correct": 2,
    "explanation": "Performance tools evaluate speed, scalability and stability."
  },
  {
    "id": "ch6_q9",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool is widely used for performance testing?",
    "options": [
      "Selenium",
      "JMeter",
      "Git",
      "Jira"
    ],
    "correct": 1,
    "explanation": "Apache JMeter is a popular performance testing tool."
  },
  {
    "id": "ch6_q10",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a common benefit of automation?",
    "options": [
      "Faster execution",
      "Repeatability",
      "Reduced manual effort",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Automation improves efficiency, consistency and speed."
  },
  {
    "id": "ch6_q11",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a potential risk of test automation?",
    "options": [
      "High maintenance costs",
      "Script instability",
      "False confidence",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Automation introduces maintenance and reliability challenges."
  },
  {
    "id": "ch6_q12",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which activity should be performed before adopting a new test tool?",
    "options": [
      "Pilot Project",
      "Full Rollout",
      "Production Deployment",
      "Code Freeze"
    ],
    "correct": 0,
    "explanation": "A pilot project helps evaluate tool suitability and risks."
  },
  {
    "id": "ch6_q13",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a key success factor for tool adoption?",
    "options": [
      "Training",
      "Management Support",
      "Defined Objectives",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Successful tool adoption requires planning, support and training."
  },
  {
    "id": "ch6_q14",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which tool category supports Continuous Integration pipelines?",
    "options": [
      "CI/CD Tools",
      "Defect Tools",
      "Review Tools",
      "Checklist Tools"
    ],
    "correct": 0,
    "explanation": "CI/CD tools automate build, test and deployment activities."
  },
  {
    "id": "ch6_q15",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is a CI/CD tool?",
    "options": [
      "Jenkins",
      "Jira",
      "Excel",
      "Word"
    ],
    "correct": 0,
    "explanation": "Jenkins is widely used for Continuous Integration and Delivery."
  },
  {
    "id": "ch6_q16",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about tools is TRUE?",
    "options": [
      "Tools guarantee quality",
      "Tools replace testers",
      "Tools support testing activities",
      "Tools eliminate defects"
    ],
    "correct": 2,
    "explanation": "Tools assist testing but do not guarantee quality."
  },
  {
    "id": "ch6_q17",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Why is Return on Investment (ROI) important for tool adoption?",
    "options": [
      "Measures financial benefit",
      "Measures code coverage",
      "Measures defect density",
      "Measures review effectiveness"
    ],
    "correct": 0,
    "explanation": "ROI helps justify the cost and benefits of a tool."
  },
  {
    "id": "ch6_q18",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which tool category supports requirement traceability?",
    "options": [
      "Requirements Management Tool",
      "Performance Tool",
      "Static Analysis Tool",
      "Monitoring Tool"
    ],
    "correct": 0,
    "explanation": "Requirements tools help manage traceability and coverage."
  },
  {
    "id": "ch6_q19",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is one benefit of integrating testing tools?",
    "options": [
      "Improved information flow",
      "Reduced traceability",
      "More manual work",
      "Fewer reports"
    ],
    "correct": 0,
    "explanation": "Tool integration improves collaboration and visibility."
  },
  {
    "id": "ch6_q20",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary objective of test tool selection?",
    "options": [
      "Choose the most expensive tool",
      "Choose a tool that meets organizational needs",
      "Choose the most popular tool",
      "Choose a tool with the most features"
    ],
    "correct": 1,
    "explanation": "Tool selection should align with business and testing objectives."
  },
  {
    "id": "ch6_q21",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which type of tool supports automated execution of test cases?",
    "options": [
      "Static Analysis Tool",
      "Performance Tool",
      "Test Execution Tool",
      "Defect Management Tool"
    ],
    "correct": 2,
    "explanation": "Execution tools automate running tests."
  },
  {
    "id": "ch6_q22",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a key benefit of test automation?",
    "options": [
      "Eliminates testing",
      "Faster execution",
      "Guarantees quality",
      "Removes defects automatically"
    ],
    "correct": 1,
    "explanation": "Automation provides faster execution and feedback."
  },
  {
    "id": "ch6_q23",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which tool category helps identify coding standard violations?",
    "options": [
      "Performance Tool",
      "Static Analysis Tool",
      "Defect Management Tool",
      "CI Tool"
    ],
    "correct": 1,
    "explanation": "Static analysis tools detect coding issues."
  },
  {
    "id": "ch6_q24",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which tool is commonly used for continuous integration?",
    "options": [
      "JMeter",
      "Jira",
      "Jenkins",
      "Postman"
    ],
    "correct": 2,
    "explanation": "Jenkins is a popular CI/CD tool."
  },
  {
    "id": "ch6_q25",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which risk can result from poor automation design?",
    "options": [
      "Maintainability problems",
      "Better coverage",
      "Improved feedback",
      "Reduced effort"
    ],
    "correct": 0,
    "explanation": "Poor automation can become expensive to maintain."
  },
  {
    "id": "ch6_q26",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which activity should occur before introducing a new testing tool?",
    "options": [
      "Tool Evaluation",
      "Tool Removal",
      "Test Closure",
      "Deployment"
    ],
    "correct": 0,
    "explanation": "Organizations should evaluate tools before adoption."
  },
  {
    "id": "ch6_q27",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a proof of concept (PoC)?",
    "options": [
      "Final deployment",
      "Small-scale evaluation of a tool",
      "Regression testing",
      "Defect review"
    ],
    "correct": 1,
    "explanation": "PoCs validate whether a tool meets needs."
  },
  {
    "id": "ch6_q28",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which factor should be considered when selecting a tool?",
    "options": [
      "Cost",
      "Training Needs",
      "Integration Support",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Multiple factors influence tool selection."
  },
  {
    "id": "ch6_q29",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which tool category supports performance testing?",
    "options": [
      "JMeter",
      "Git",
      "Jira",
      "Confluence"
    ],
    "correct": 0,
    "explanation": "JMeter is widely used for performance testing."
  },
  {
    "id": "ch6_q30",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary goal of tool support in testing?",
    "options": [
      "Replace testers",
      "Support and improve testing efficiency",
      "Guarantee defect-free software",
      "Eliminate manual testing"
    ],
    "correct": 1,
    "explanation": "Tools assist testers and improve effectiveness."
  },
  {
    "id": "ch6_q31",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following is considered a significant risk when introducing a test automation tool into an organization?",
    "options": [
      "The tool will instantly make all manual testers redundant.",
      "Underestimating the time and effort required to maintain the test assets generated by the tool.",
      "The tool automatically correcting errors in the source code without notifying the team.",
      "An immediate and permanent reduction in the overall test execution time from day one."
    ],
    "correct": 1,
    "explanation": "One of the major risks of tool support is unrealistic expectations, including underestimating the effort required to maintain automated test scripts over the long term as the software evolves."
  },
  {
    "id": "ch6_q32",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the primary purpose of conducting a pilot project before deploying a new testing tool across an entire organization?",
    "options": [
      "To fully automate the entire regression test suite for all legacy systems.",
      "To assess whether the tool can guarantee 100% defect-free software deployment.",
      "To learn more about the tool, evaluate its fit with existing processes, and define usage standards.",
      "To reduce the training budget by avoiding training for the rest of the staff."
    ],
    "correct": 2,
    "explanation": "A pilot project is a small-scale implementation used to gain deep understanding of the tool, discover how it integrates with the existing lifecycle, and establish guidelines before a broad rollout."
  },
  {
    "id": "ch6_q33",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which type of test tool is most likely to be used directly by developers during unit and component testing to measure code thoroughness?",
    "options": [
      "Test management tool",
      "Configuration management tool",
      "Coverage measurement tool",
      "Defect management tool"
    ],
    "correct": 2,
    "explanation": "Coverage tools (or static/dynamic analysis tools used for code coverage) analyze which parts of the code structure have been executed by a suite of tests, which is a common task during developer-led component testing."
  },
  {
    "id": "ch6_q34",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is a potential benefit of using test execution tools?",
    "options": [
      "The tool can easily identify structural flaws and ambiguities within the requirement documents.",
      "Reduction of repetitive manual work, allowing testers to focus on more complex scenarios.",
      "Elimination of the need for any test analysis or test design phases.",
      "Ensuring that test data is generated completely free of human bias or error."
    ],
    "correct": 1,
    "explanation": "Test execution tools automate repetitive tasks like running regression tests, which frees up human testers to execute exploratory or creative test scenarios."
  },
  {
    "id": "ch6_q35",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "When managing the rollout of a tool within an organization, which of the following is considered a key success factor?",
    "options": [
      "Providing training and coaching only to the development managers.",
      "Defining usage guidelines and standards for everyone using the tool.",
      "Ensuring the tool is immediately used on the largest and most critical project available.",
      "Allowing each individual tester to use the tool in whatever way they prefer without restrictions."
    ],
    "correct": 1,
    "explanation": "Defining clear standards, guidelines, and providing adequate training/coaching to all tool users ensures consistency, alignment with processes, and long-term tool adoption success."
  },
  {
    "id": "ch6_q36",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following tools is most useful for verifying that data transmitted across a network is properly encrypted?",
    "options": [
      "Dynamic analysis tool",
      "Security testing tool",
      "Static code analyzer",
      "Data preparation tool"
    ],
    "correct": 1,
    "explanation": "Security testing tools (such as vulnerability scanners and network sniffers) inspect traffic, encryption protocols, and certificates to ensure data privacy and prevent unauthorized intercept leaks."
  },
  {
    "id": "ch6_q37",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a main benefit of using a test data preparation tool?",
    "options": [
      "It eliminates the need for any expected results definitions",
      "It allows tests to run without an underlying environment layout",
      "It creates realistic, structured database states for test scenarios quickly",
      "It automatically repairs broken test execution scripts"
    ],
    "correct": 2,
    "explanation": "Test data preparation tools speed up execution setup by populating databases, files, or message queues with valid or invalid datasets needed for comprehensive test scenarios."
  },
  {
    "id": "ch6_q38",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "When configuring test execution tools, why is it critical to ensure the tool interacts with application elements via robust object properties rather than coordinate paths?",
    "options": [
      "Coordinate paths are too fast for modern servers to interpret",
      "Object properties require completely resetting the repository after every individual build",
      "Coordinate paths fail instantly if screen resolution or window layouts change dynamically",
      "Object properties make the tests completely independent of the operating system code structure"
    ],
    "correct": 2,
    "explanation": "Using absolute pixel coordinate maps makes test scripts highly fragile; a minor UI repositioning breaks the execution flow. Sticking to unique object attributes (like ID or text values) ensures long-term test stability."
  },
  {
    "id": "ch6_q39",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which type of framework separates test steps into generic data files, enabling the same execution scripts to run across varying input variations?",
    "options": [
      "Linear scripting framework",
      "Data-driven testing framework",
      "Model-based testing framework",
      "Keyword-driven framework"
    ],
    "correct": 1,
    "explanation": "Data-driven frameworks read variables from spreadsheets, CSV files, or database arrays, driving a single testing script loop with unique parameter setups per iteration."
  },
  {
    "id": "ch6_q40",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is meant by the phrase 'the pesticide paradox' when applied specifically to automated test scripts?",
    "options": [
      "The script loses execution speed over time due to compiler overhead changes",
      "Automated scripts will consistently overlook new defect categories since they only repeat programmed instructions",
      "The system under test eventually blocks automated login paths out of dynamic security adjustments",
      "The tool's license validation system demands frequent database maintenance updates to keep working"
    ],
    "correct": 1,
    "explanation": "Automated scripts execute precise, hardcoded workflows. Once the defects along those targeted paths are cleared, the script will pass indefinitely without ever unearthing alternative bugs hiding outside its scope."
  },
  {
    "id": "ch6_q41",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following activities is best supported by a requirements management tool?",
    "options": [
      "Executing automated test scripts",
      "Generating test input data values",
      "Establishing traceability between requirements and test cases",
      "Analyzing code coverage percentages"
    ],
    "correct": 2,
    "explanation": "Requirements management tools help track user stories and requirements, allowing teams to establish direct traceability to the respective test cases that validate them."
  },
  {
    "id": "ch6_q42",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a major risk when deploying a test tool across an entire organization without a pilot phase?",
    "options": [
      "The tool might automatically delete the developer's source code repositories",
      "Broad resistance from teams due to unexpected process shifts, bugs, or lack of training guidelines",
      "The tool finding zero defects during system integration testing cycles",
      "A sudden decrease in required server hosting configurations"
    ],
    "correct": 1,
    "explanation": "Deploying a tool universally without a pilot project increases risk because unique team dynamics, stack compatibility issues, and training gaps aren't identified early."
  },
  {
    "id": "ch6_q43",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool type is designed to monitor and check if a web page complies with visual standard laws for users with visual impairments?",
    "options": [
      "Performance simulation tool",
      "Accessibility testing tool",
      "Static structural compiler linter",
      "Unit assertion framework"
    ],
    "correct": 1,
    "explanation": "Accessibility tools evaluate software interfaces against compliance standard frameworks (like WCAG) to ensure readability, contrast, screen-reader compatibility, and overall inclusivity."
  },
  {
    "id": "ch6_q44",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a potential negative consequence of using a test execution tool with a highly volatile graphical user interface (GUI)?",
    "options": [
      "The tool will refuse to launch on development operating systems",
      "High maintenance overhead because test scripts frequently break when element locators change",
      "An increase in code statement coverage metrics with no structural benefit",
      "The complete elimination of the need for configuration management processes"
    ],
    "correct": 1,
    "explanation": "When an application's GUI changes frequently, automated scripts that reference specific UI elements break. This leads to high maintenance effort, which can cancel out the time-saving benefits of automation."
  },
  {
    "id": "ch6_q45",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is typically a goal of a tool pilot project?",
    "options": [
      "To complete all testing for the largest company project available",
      "To assess whether the tool fits within existing technical frameworks and define usage standards",
      "To completely replace the test manager role within the agile squad",
      "To find every residual bug remaining in production legacy systems"
    ],
    "correct": 1,
    "explanation": "A pilot project evaluates a tool on a smaller scale to learn its detailed capabilities, figure out how it fits into workflows, and establish standard usage templates before a full rollout."
  },
  {
    "id": "ch6_q46",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool type allows testers to configure virtual system attributes and run identical scenarios on multiple operating system configurations?",
    "options": [
      "Configuration management tool",
      "Test environment virtualization or containerization tool",
      "Dynamic structural analysis tool",
      "Requirements traceability tool"
    ],
    "correct": 1,
    "explanation": "Virtualization and containerization tools (like Docker or VMs) let teams simulate, duplicate, and clean various environment configurations rapidly for consistent execution conditions."
  },
  {
    "id": "ch6_q47",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a core advantage of using a keyword-driven automation framework?",
    "options": [
      "It requires zero knowledge of the system under test to operate",
      "It enables non-technical stakeholders to write test scenarios using descriptive action words",
      "It makes scripts run significantly faster than linear hardcoded execution routines",
      "It eliminates the necessity of designing expected results for test steps"
    ],
    "correct": 1,
    "explanation": "Keyword-driven frameworks isolate execution code from the script definitions using action keywords (e.g., 'Click', 'Verify'). This allows business analysts or manual testers to construct scenarios without writing raw code."
  },
  {
    "id": "ch6_q48",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "When evaluates an open-source tool library against a commercial proprietary suite, what long-term risk must be carefully managed?",
    "options": [
      "Open-source tools are legally barred from integrating into continuous integration tools",
      "Potential lack of formal vendor support and reliance on community forums for bug fixes",
      "Open-source tools automatically publicizing all internal corporate databases by default",
      "Commercial tools completely refusing to validate cloud-native server setups"
    ],
    "correct": 1,
    "explanation": "While open-source tools don't have upfront licensing fees, they lack dedicated, contractual commercial support lines. The engineering team must rely on community support or resolve internal tool issues themselves."
  },
  {
    "id": "ch6_q49",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which tool metrics are most appropriate for a test manager tracking the overall progress of a live testing cycle?",
    "options": [
      "Lines of code written per developer per shift",
      "Test case execution status trends over time and unresolved defect distributions",
      "The total clock cycles consumed by database engines during queries",
      "The absolute number of spelling fixes made within requirement text fields"
    ],
    "correct": 1,
    "explanation": "Test management tools provide real-time dashboards tracking test metrics, such as pass/fail rates, blockades, and defect severity levels, which help guide release readiness decisions."
  },
  {
    "id": "ch6_q50",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary role of a tool scribe during a formal review process tool setup?",
    "options": [
      "To write the functional source code under review",
      "To record findings, comments, and identified discrepancies in the review log",
      "To moderate and resolve technical debates between authors",
      "To authorize the final code deployment steps into production systems"
    ],
    "correct": 1,
    "explanation": "The scribe (or recorder) uses the review management tool to log defects, action items, and structural feedback generated by participants during formal meetings."
  },
  {
    "id": "ch6_q51",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "What does 'tool-driven instrumentation' mean in the context of code coverage analysis tools?",
    "options": [
      "Using a mechanical probe directly on the physical host servers",
      "Inserting tracking code hooks into the source software to monitor which lines execute during tests",
      "Rewriting the user specifications into different foreign languages",
      "Encrypting all the script assets so developers cannot view the assertions"
    ],
    "correct": 1,
    "explanation": "Coverage tools instrument code by adding hidden counters or log lines to the application build. This tracks exactly which statements, branches, or functions are executed during a test run."
  },
  {
    "id": "ch6_q52",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why is it important to include training and coaching as part of a new testing tool rollout strategy?",
    "options": [
      "Without it, the tool license keys will automatically deactivate within thirty days",
      "To ensure users understand the tool's features and adhere to consistent scripting practices",
      "Because training completely prevents developers from introducing future regression defects",
      "To enable the test tool to write human-readable documentation without supervision"
    ],
    "correct": 1,
    "explanation": "Buying a tool is only part of the process. Without proper training, mentoring, and clear guidelines, team members will use inconsistent styles, resulting in fragile, unmaintainable test suites."
  },
  {
    "id": "ch6_q53",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is an example of an aspect evaluated by a dynamic analysis tool?",
    "options": [
      "Compliance with code layout indentation guidelines",
      "Memory allocation leaks and pointer violations while the program is running",
      "Ambiguities within the business requirement documentation",
      "The layout positioning consistency of buttons on a mobile layout"
    ],
    "correct": 1,
    "explanation": "Dynamic analysis requires the application to be running. It identifies operational runtime flaws, such as unassigned memory blocks, system thread deadlocks, or memory leaks."
  },
  {
    "id": "ch6_q54",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which tool group is most useful for automated continuous deployment and delivery pipelines?",
    "options": [
      "Static review checklists",
      "CI/CD and build automation tools",
      "Accessibility visual screen scanners",
      "Equivalence partition math tables"
    ],
    "correct": 1,
    "explanation": "CI/CD tools (like Jenkins, GitHub Actions, or GitLab CI) coordinate code updates, run compilation sequences, and trigger automated test suites as part of the deployment pipeline."
  },
  {
    "id": "ch6_q55",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is a major risk of evaluating team performance solely based on automated test metrics (e.g., number of tests created)?",
    "options": [
      "Teams may write low-quality or superficial tests just to hit numerical targets",
      "The automation tool framework will slow down execution speeds out of protest",
      "Developers will stop checking their code additions into version repositories",
      "The application under test will become incompatible with database connections"
    ],
    "correct": 0,
    "explanation": "Relying on vanity metrics can lead to poor testing practices. Teams might write hundreds of superficial assertions to meet targets, creating a false sense of security while missing complex defects."
  },
  {
    "id": "ch6_q56",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which type of tool is designed to mimic system interactions and inject high numbers of database queries to evaluate limits?",
    "options": [
      "Static component linters",
      "Load and performance testing tools",
      "Requirements traceability metrics",
      "Configuration backup utilities"
    ],
    "correct": 1,
    "explanation": "Performance and load testing tools simulate heavy multi-user workloads or high transaction volumes to help identify system bottlenecks and database response limits."
  },
  {
    "id": "ch6_q57",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary purpose of an incident management tool?",
    "options": [
      "To automatically correct syntax errors inside the code repository",
      "To log, trace, and monitor the life cycle of defects and issues from discovery to resolution",
      "To generate automated user stories directly from customer phone logs",
      "To replace the need for conducting code reviews completely"
    ],
    "correct": 1,
    "explanation": "Incident management (bug tracking) systems serve as a central database to document defects, assign ownership, track fix statuses, and maintain a clear audit trail."
  },
  {
    "id": "ch6_q58",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "What design strategy best ensures that automated test scripts remain usable when data structures (like product catalogs) change?",
    "options": [
      "Hardcoding specific data strings directly inside every conditional loop block",
      "Separating test data from the script logic using an external database or file source",
      "Re-recording the entire end-to-end user scenario every single morning",
      "Stopping all future inventory adjustments within the production application environment"
    ],
    "correct": 1,
    "explanation": "Isolating test data from script code ensures that when data parameters change, only the external file needs updates. The core test scripts remain untouched, which lowers maintenance effort."
  },
  {
    "id": "ch6_q59",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following is a primary benefit of using a configuration management system alongside test tools?",
    "options": [
      "It eliminates the need to run any regression tests across the build lines",
      "It provides secure versioning and tracking for test scripts, environments, and source code files",
      "It automatically translates test cases into multiple languages",
      "It guarantees that all requirements are completely free of logical contradictions"
    ],
    "correct": 1,
    "explanation": "Configuration management ensures that test code, test data files, and infrastructure scripts are version-controlled alongside the application source files they validate."
  },
  {
    "id": "ch6_q60",
    "chapter": "chapter6",
    "difficulty": "hard",
    "marks": 1,
    "question": "Why can an automated test suite fail to find new types of defects over an extended period?",
    "options": [
      "Automated suites inherently follow identical, pre-programmed execution pathways with every run",
      "The underlying server processors automatically build up an immunity to automated scripts",
      "The tools naturally lose their mathematical precision as the framework files age",
      "Continuous integration runners block scripts that fail more than three times sequentially"
    ],
    "correct": 0,
    "explanation": "This demonstrates the Pesticide Paradox in automation: automated scripts only check the specific steps and assertions they are programmed to verify. They do not explore new paths on their own, meaning manual exploratory testing is still essential to discover new types of bugs."
  },
  {
    "id": "chapter6_lo_611",
    "chapter": "chapter6",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-6.1.1",
    "kLevel": "K2",
    "question": "Which of the following best describes how test tools support testing?",
    "options": [
      "By automating repetitive tasks, managing test assets, and enabling activities otherwise impractical to do manually",
      "By writing all requirements automatically",
      "By replacing the need for any human tester",
      "By eliminating the need for test planning"
    ],
    "correct": 0,
    "explanation": "Test tools support testing by automating repetitive work, managing artifacts like test cases and defects, and making some activities (like large-scale regression) practical at all."
  },
  {
    "id": "chapter6_lo_621",
    "chapter": "chapter6",
    "difficulty": "easy",
    "marks": 1,
    "lo": "FL-6.2.1",
    "kLevel": "K1",
    "question": "Which of the following is a genuine risk of test automation, not a benefit?",
    "options": [
      "Automated tests can create a false sense of confidence if they don't actually cover the right risks",
      "Automated tests execute faster than manual tests",
      "Automated regression tests can be repeated consistently",
      "Automation reduces manual effort for repetitive checks"
    ],
    "correct": 0,
    "explanation": "A well-known risk of automation is a false sense of security — passing automated tests can mask the fact that they aren't actually covering the risks that matter."
  }
];
