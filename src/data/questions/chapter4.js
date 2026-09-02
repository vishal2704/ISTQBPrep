// Question bank — chapter4
// 131 questions (LO-tagged expansion — see
// src/data/loReference.js for the official ISTQB v4.0.1 Learning Objectives)
export const chapter4Questions = [
  {
    "id": "ch4_q1",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the primary goal of Equivalence Partitioning?",
    "hint": "Equivalence Partitioning reduces the SIZE of what, while keeping good coverage?",
    "options": [
      "Test every possible value",
      "Reduce the number of test cases while maintaining coverage",
      "Measure code coverage",
      "Identify performance bottlenecks"
    ],
    "correct": 1,
    "explanation": "Equivalence Partitioning divides inputs into groups expected to behave similarly."
  },
  {
    "id": "ch4_q2",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which statement best describes an equivalence partition?",
    "hint": "A partition is a set of values the system should treat the same way — if one works, they all should.",
    "options": [
      "A group of test cases executed together",
      "A set of inputs expected to be processed similarly",
      "A group of defects",
      "A type of boundary value"
    ],
    "correct": 1,
    "explanation": "Values within the same partition are expected to produce similar results."
  },
  {
    "id": "ch4_q3",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "An age field accepts values from 18 to 60 inclusive. Which is a valid equivalence partition?",
    "hint": "The valid partition here is the range explicitly accepted by the field.",
    "options": [
      "15",
      "61",
      "18-60",
      "Negative numbers"
    ],
    "correct": 2,
    "explanation": "18–60 represents the valid partition."
  },
  {
    "id": "ch4_q4",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is Boundary Value Analysis based on?",
    "hint": "Boundary Value Analysis targets values right at the EDGES of a partition — where do defects love to hide?",
    "options": [
      "Most defects occur at boundaries",
      "Most defects occur in the middle of ranges",
      "Defects occur only in invalid data",
      "Defects occur during integration"
    ],
    "correct": 0,
    "explanation": "Many defects are found at the edges of input ranges."
  },
  {
    "id": "ch4_q5",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "For values accepted from 1 to 100, which boundary values should be tested?",
    "hint": "For a 1–100 range, think about the values just inside and just outside both ends.",
    "options": [
      "1 and 100 only",
      "0,1,2,99,100,101",
      "50 only",
      "All values"
    ],
    "correct": 1,
    "explanation": "Testing just below, on, and just above boundaries is recommended."
  },
  {
    "id": "ch4_q6",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which technique is most useful when combinations of conditions determine outcomes?",
    "hint": "This technique models combinations of conditions and their resulting actions in a grid.",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "State Transition Testing",
      "Error Guessing"
    ],
    "correct": 1,
    "explanation": "Decision tables are ideal for business rules with multiple conditions."
  },
  {
    "id": "ch4_q7",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "A decision table consists of:",
    "hint": "Think about the two main parts: what triggers a rule, and what happens as a result.",
    "options": [
      "Conditions and Actions",
      "Inputs and Outputs only",
      "Requirements and Defects",
      "States and Transitions"
    ],
    "correct": 0,
    "explanation": "Decision tables map conditions to resulting actions."
  },
  {
    "id": "ch4_q8",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test technique focuses on system states and transitions?",
    "hint": "This technique is about a system moving between different modes or statuses over time.",
    "options": [
      "Decision Table Testing",
      "Boundary Value Analysis",
      "State Transition Testing",
      "Use Case Testing"
    ],
    "correct": 2,
    "explanation": "State Transition Testing evaluates behavior based on state changes."
  },
  {
    "id": "ch4_q9",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "An ATM card becomes locked after three incorrect PIN attempts. Which technique is most suitable?",
    "options": [
      "Equivalence Partitioning",
      "State Transition Testing",
      "Boundary Value Analysis",
      "Checklist Testing"
    ],
    "correct": 1,
    "explanation": "The behavior depends on state changes and transitions."
  },
  {
    "id": "ch4_q10",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which technique derives test cases from user interactions?",
    "options": [
      "Decision Table Testing",
      "Use Case Testing",
      "Boundary Value Analysis",
      "State Testing"
    ],
    "correct": 1,
    "explanation": "Use Case Testing validates user workflows and interactions."
  },
  {
    "id": "ch4_q11",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a major benefit of Use Case Testing?",
    "options": [
      "Measures code coverage",
      "Focuses on realistic business scenarios",
      "Eliminates need for other testing",
      "Finds memory leaks"
    ],
    "correct": 1,
    "explanation": "Use cases represent real user activities."
  },
  {
    "id": "ch4_q12",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test technique is most suitable for validating discount rules?",
    "options": [
      "Decision Table Testing",
      "Boundary Value Analysis",
      "State Transition Testing",
      "Error Guessing"
    ],
    "correct": 0,
    "explanation": "Decision tables model combinations of business conditions."
  },
  {
    "id": "ch4_q13",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is the minimum number of test cases needed to cover one valid and one invalid partition?",
    "options": [
      "1",
      "2",
      "5",
      "All possible values"
    ],
    "correct": 1,
    "explanation": "Typically one representative value per partition is sufficient."
  },
  {
    "id": "ch4_q14",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which value is an invalid boundary value for a range 10-50?",
    "options": [
      "10",
      "50",
      "51",
      "25"
    ],
    "correct": 2,
    "explanation": "51 lies just outside the valid upper boundary."
  },
  {
    "id": "ch4_q15",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "State Transition Testing is particularly useful when:",
    "options": [
      "Output depends on previous events",
      "Inputs are numeric",
      "Business rules are simple",
      "Performance is critical"
    ],
    "correct": 0,
    "explanation": "State-dependent systems benefit from state transition testing."
  },
  {
    "id": "ch4_q16",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which black-box technique is best for workflow validation?",
    "options": [
      "Use Case Testing",
      "Boundary Value Analysis",
      "Statement Coverage",
      "Branch Coverage"
    ],
    "correct": 0,
    "explanation": "Use Case Testing focuses on complete workflows."
  },
  {
    "id": "ch4_q17",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "What is a decision rule in a decision table?",
    "options": [
      "A test case",
      "A unique combination of conditions and actions",
      "A defect",
      "A system state"
    ],
    "correct": 1,
    "explanation": "Each rule represents a unique business scenario."
  },
  {
    "id": "ch4_q18",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which technique can identify missing business rules?",
    "options": [
      "Decision Table Testing",
      "Boundary Value Analysis",
      "Use Case Testing",
      "Error Guessing"
    ],
    "correct": 0,
    "explanation": "Decision tables often reveal missing or inconsistent rules."
  },
  {
    "id": "ch4_q19",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "For a valid range of 5-20, which value belongs to an invalid partition?",
    "options": [
      "5",
      "10",
      "20",
      "21"
    ],
    "correct": 3,
    "explanation": "21 falls outside the valid range."
  },
  {
    "id": "ch4_q20",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which technique uses knowledge of user goals and system interactions?",
    "options": [
      "Use Case Testing",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "State Testing"
    ],
    "correct": 0,
    "explanation": "Use cases describe interactions between users and the system."
  },
  {
    "id": "ch4_q21",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "A login system locks after three failed attempts. Which test should be included?",
    "options": [
      "First failure",
      "Second failure",
      "Third failure causing lock",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All transitions and outcomes should be verified."
  },
  {
    "id": "ch4_q22",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Boundary Value Analysis focuses on:",
    "options": [
      "Input boundaries",
      "Internal code",
      "Database structure",
      "Project risks"
    ],
    "correct": 0,
    "explanation": "BVA concentrates on values around limits."
  },
  {
    "id": "ch4_q23",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique is best for validating tax calculation rules?",
    "options": [
      "Decision Table Testing",
      "State Testing",
      "Use Case Testing",
      "Error Guessing"
    ],
    "correct": 0,
    "explanation": "Tax calculations often depend on combinations of conditions."
  },
  {
    "id": "ch4_q24",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a valid partition?",
    "options": [
      "A group of invalid inputs",
      "A set of inputs expected to be accepted",
      "A defect category",
      "A state transition"
    ],
    "correct": 1,
    "explanation": "Valid partitions contain inputs expected to be processed successfully."
  },
  {
    "id": "ch4_q25",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique is most effective for testing membership status changes?",
    "options": [
      "State Transition Testing",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Checklist Testing"
    ],
    "correct": 0,
    "explanation": "Membership changes often involve state transitions."
  },
  {
    "id": "ch4_q26",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the primary objective of black-box testing?",
    "options": [
      "Evaluate internal code",
      "Test behavior against specifications",
      "Measure statement coverage",
      "Review source code"
    ],
    "correct": 1,
    "explanation": "Black-box testing focuses on external behavior."
  },
  {
    "id": "ch4_q27",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which black-box technique uses condition combinations?",
    "options": [
      "Decision Table Testing",
      "Boundary Value Analysis",
      "Use Case Testing",
      "Branch Coverage"
    ],
    "correct": 0,
    "explanation": "Decision tables evaluate condition combinations systematically."
  },
  {
    "id": "ch4_q28",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique would best test an online shopping checkout process?",
    "options": [
      "Use Case Testing",
      "Boundary Value Analysis",
      "Statement Coverage",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "Checkout is a user workflow and suits use case testing."
  },
  {
    "id": "ch4_q29",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "A field accepts values 100-500. Which is an upper boundary test value?",
    "options": [
      "250",
      "499",
      "500",
      "300"
    ],
    "correct": 2,
    "explanation": "500 is the upper boundary value."
  },
  {
    "id": "ch4_q30",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which black-box technique is most likely to reveal missing transitions?",
    "options": [
      "State Transition Testing",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Equivalence Partitioning"
    ],
    "correct": 0,
    "explanation": "State Transition Testing verifies valid and invalid transitions."
  },
  {
    "id": "ch4_q31",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is the primary objective of white-box testing?",
    "options": [
      "Validate business workflows",
      "Evaluate internal code structure",
      "Review requirements",
      "Test usability"
    ],
    "correct": 1,
    "explanation": "White-box testing uses knowledge of the internal implementation."
  },
  {
    "id": "ch4_q32",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Statement coverage measures:",
    "options": [
      "Executed statements",
      "Executed branches",
      "Executed requirements",
      "Executed test cases"
    ],
    "correct": 0,
    "explanation": "Statement coverage measures the percentage of executable statements exercised."
  },
  {
    "id": "ch4_q33",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which coverage type is generally stronger?",
    "options": [
      "Statement Coverage",
      "Branch Coverage",
      "They are equal",
      "Neither"
    ],
    "correct": 1,
    "explanation": "Branch coverage exercises decision outcomes and is generally stronger."
  },
  {
    "id": "ch4_q34",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "100% statement coverage guarantees:",
    "options": [
      "All branches tested",
      "No guarantee of branch coverage",
      "All defects found",
      "Complete testing"
    ],
    "correct": 1,
    "explanation": "Statement coverage does not ensure all decision outcomes are tested."
  },
  {
    "id": "ch4_q35",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Branch coverage requires:",
    "options": [
      "Every statement executed",
      "Every branch outcome executed",
      "Every path executed",
      "Every defect fixed"
    ],
    "correct": 1,
    "explanation": "Branch coverage requires both true and false outcomes to be exercised."
  },
  {
    "id": "ch4_q36",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique relies heavily on tester experience?",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Error Guessing",
      "State Transition Testing"
    ],
    "correct": 2,
    "explanation": "Error guessing depends on tester knowledge and experience."
  },
  {
    "id": "ch4_q37",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Error Guessing is classified as:",
    "options": [
      "Black-box",
      "White-box",
      "Experience-based",
      "Static"
    ],
    "correct": 2,
    "explanation": "Error guessing uses tester intuition and experience."
  },
  {
    "id": "ch4_q38",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which is an example of Error Guessing?",
    "options": [
      "Testing null values because defects often occur there",
      "Using decision tables",
      "Measuring branch coverage",
      "Reviewing source code"
    ],
    "correct": 0,
    "explanation": "Experienced testers often anticipate common defect-prone areas."
  },
  {
    "id": "ch4_q39",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Exploratory testing combines:",
    "options": [
      "Planning and coding",
      "Learning, test design and execution",
      "Reviews and inspections",
      "Development and deployment"
    ],
    "correct": 1,
    "explanation": "Exploratory testing involves simultaneous learning and execution."
  },
  {
    "id": "ch4_q40",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which statement about exploratory testing is TRUE?",
    "options": [
      "It requires no skill",
      "It is completely random",
      "It benefits from tester knowledge",
      "It replaces all scripted testing"
    ],
    "correct": 2,
    "explanation": "Exploratory testing is structured and benefits from expertise."
  },
  {
    "id": "ch4_q41",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Checklist-based testing uses:",
    "options": [
      "Business rules",
      "Coverage metrics",
      "Predefined checklists",
      "State diagrams"
    ],
    "correct": 2,
    "explanation": "Checklists guide testing activities and coverage."
  },
  {
    "id": "ch4_q42",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "A major benefit of checklist-based testing is:",
    "options": [
      "Consistency",
      "Automation",
      "Code coverage",
      "Performance improvement"
    ],
    "correct": 0,
    "explanation": "Checklists help ensure consistent coverage."
  },
  {
    "id": "ch4_q43",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which coverage level executes all statements?",
    "options": [
      "0%",
      "50%",
      "100%",
      "Depends on defects"
    ],
    "correct": 2,
    "explanation": "100% statement coverage means every statement was executed."
  },
  {
    "id": "ch4_q44",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "A decision with TRUE/FALSE outcomes requires how many branch outcomes?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "Both TRUE and FALSE outcomes must be exercised."
  },
  {
    "id": "ch4_q45",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is Behavior-Driven Development (BDD)?",
    "options": [
      "A deployment process",
      "A collaboration approach using examples",
      "A static testing technique",
      "A defect management method"
    ],
    "correct": 1,
    "explanation": "BDD promotes collaboration through examples and shared understanding."
  },
  {
    "id": "ch4_q46",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "BDD scenarios are commonly written using:",
    "options": [
      "Given-When-Then",
      "Arrange-Act-Assert",
      "If-Else",
      "Input-Output"
    ],
    "correct": 0,
    "explanation": "Given-When-Then is the standard BDD format."
  },
  {
    "id": "ch4_q47",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "What does 'Given' represent in a BDD scenario?",
    "options": [
      "Action",
      "Expected result",
      "Initial context",
      "Defect"
    ],
    "correct": 2,
    "explanation": "Given defines the starting state or context."
  },
  {
    "id": "ch4_q48",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "What does 'When' represent in BDD?",
    "options": [
      "Action performed",
      "Expected result",
      "Requirement",
      "Coverage"
    ],
    "correct": 0,
    "explanation": "When describes the event or action."
  },
  {
    "id": "ch4_q49",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "What does 'Then' represent?",
    "options": [
      "Action",
      "Condition",
      "Expected outcome",
      "Review"
    ],
    "correct": 2,
    "explanation": "Then specifies the expected result."
  },
  {
    "id": "ch4_q50",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Acceptance Test-Driven Development (ATDD) focuses on:",
    "options": [
      "Writing acceptance tests before implementation",
      "Writing code before tests",
      "System testing only",
      "Performance testing"
    ],
    "correct": 0,
    "explanation": "ATDD creates acceptance criteria before development begins."
  },
  {
    "id": "ch4_q51",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Who typically participates in ATDD discussions?",
    "options": [
      "Only developers",
      "Only testers",
      "Business, developers and testers",
      "Only managers"
    ],
    "correct": 2,
    "explanation": "ATDD encourages collaboration among key stakeholders."
  },
  {
    "id": "ch4_q52",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "The Three Amigos approach involves:",
    "options": [
      "Developer, Tester, Business Representative",
      "Developer, Manager, Customer",
      "Tester, Auditor, Reviewer",
      "Developer, Moderator, Scribe"
    ],
    "correct": 0,
    "explanation": "Three Amigos aligns business, testing and development perspectives."
  },
  {
    "id": "ch4_q53",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "The primary purpose of Three Amigos meetings is:",
    "options": [
      "Review defects",
      "Create shared understanding",
      "Execute tests",
      "Measure coverage"
    ],
    "correct": 1,
    "explanation": "The goal is shared understanding before implementation."
  },
  {
    "id": "ch4_q54",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which technique helps uncover misunderstandings early?",
    "options": [
      "Three Amigos",
      "Branch Coverage",
      "Statement Coverage",
      "Static Analysis"
    ],
    "correct": 0,
    "explanation": "Collaborative discussions identify misunderstandings before coding."
  },
  {
    "id": "ch4_q55",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which is an advantage of BDD?",
    "options": [
      "Improved communication",
      "Reduced collaboration",
      "Eliminates testing",
      "Guarantees quality"
    ],
    "correct": 0,
    "explanation": "BDD improves collaboration and shared understanding."
  },
  {
    "id": "ch4_q56",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which testing approach relies most on tester creativity?",
    "options": [
      "Decision Tables",
      "Exploratory Testing",
      "Boundary Values",
      "State Testing"
    ],
    "correct": 1,
    "explanation": "Exploratory testing leverages tester creativity and experience."
  },
  {
    "id": "ch4_q57",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "A tester uses previous defect history to design tests. Which technique is this?",
    "options": [
      "Boundary Value Analysis",
      "Error Guessing",
      "State Transition Testing",
      "Decision Table Testing"
    ],
    "correct": 1,
    "explanation": "Past defect knowledge is commonly used in error guessing."
  },
  {
    "id": "ch4_q58",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which technique is most useful when documentation is limited?",
    "options": [
      "Exploratory Testing",
      "Decision Tables",
      "Boundary Analysis",
      "Branch Coverage"
    ],
    "correct": 0,
    "explanation": "Exploratory testing is effective when documentation is incomplete."
  },
  {
    "id": "ch4_q59",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which coverage measure focuses on decision outcomes?",
    "options": [
      "Statement Coverage",
      "Branch Coverage",
      "Use Case Coverage",
      "Requirement Coverage"
    ],
    "correct": 1,
    "explanation": "Branch coverage verifies all decision outcomes."
  },
  {
    "id": "ch4_q60",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which ISTQB technique combines tester knowledge, intuition and previous experience?",
    "options": [
      "Boundary Value Analysis",
      "Error Guessing",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    "correct": 1,
    "explanation": "Error guessing relies heavily on tester expertise and intuition."
  },
  {
    "id": "ch4_q61",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which black-box technique divides data into groups expected to behave similarly?",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Equivalence Partitioning",
      "State Transition Testing"
    ],
    "correct": 2,
    "explanation": "Equivalence Partitioning divides inputs into representative groups."
  },
  {
    "id": "ch4_q62",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique is most useful for testing password length requirements?",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Checklist Testing",
      "Use Case Testing"
    ],
    "correct": 0,
    "explanation": "Password length limits are ideal for boundary testing."
  },
  {
    "id": "ch4_q63",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "A discount is applied only when a customer is premium and spends over £100. Which technique is best?",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Exploratory Testing",
      "Error Guessing"
    ],
    "correct": 1,
    "explanation": "Decision tables are ideal for multiple business rules."
  },
  {
    "id": "ch4_q64",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What does 100% branch coverage require?",
    "options": [
      "All statements executed",
      "All decision outcomes executed",
      "All paths executed",
      "All requirements covered"
    ],
    "correct": 1,
    "explanation": "Every branch outcome must be exercised."
  },
  {
    "id": "ch4_q65",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which technique is most dependent on tester experience?",
    "options": [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Error Guessing",
      "State Transition Testing"
    ],
    "correct": 2,
    "explanation": "Error guessing relies on tester knowledge and intuition."
  },
  {
    "id": "ch4_q66",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which technique helps identify missing business rules?",
    "options": [
      "Use Case Testing",
      "Decision Table Testing",
      "Branch Coverage",
      "Exploratory Testing"
    ],
    "correct": 1,
    "explanation": "Decision tables expose gaps in business logic."
  },
  {
    "id": "ch4_q67",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "What is the primary purpose of ATDD?",
    "options": [
      "Execute regression tests",
      "Create acceptance criteria before development",
      "Measure code coverage",
      "Perform reviews"
    ],
    "correct": 1,
    "explanation": "ATDD defines acceptance tests before implementation."
  },
  {
    "id": "ch4_q68",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which BDD keyword describes the action performed?",
    "options": [
      "Given",
      "When",
      "Then",
      "And"
    ],
    "correct": 1,
    "explanation": "'When' describes the action or event."
  },
  {
    "id": "ch4_q69",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which technique validates complete user workflows?",
    "options": [
      "Use Case Testing",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Error Guessing"
    ],
    "correct": 0,
    "explanation": "Use cases represent end-to-end user activities."
  },
  {
    "id": "ch4_q70",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which coverage metric is stronger than statement coverage?",
    "options": [
      "Requirement Coverage",
      "Checklist Coverage",
      "Branch Coverage",
      "Defect Coverage"
    ],
    "correct": 2,
    "explanation": "Branch coverage verifies all decision outcomes."
  },
  {
    "id": "ch4_q71",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "For a field that accepts values from 1 to 100 inclusive, using two-value boundary value analysis, which boundary values should be tested?",
    "options": [
      "0, 1, 100, 101",
      "1, 2, 99, 100",
      "0, 50, 100",
      "1, 100"
    ],
    "correct": 0,
    "explanation": "Two-value boundary value analysis tests the boundary value itself and its closest neighbor outside the boundary (just below minimum and just above maximum)."
  },
  {
    "id": "ch4_q72",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which of the following is a black-box test technique?",
    "options": [
      "Statement testing",
      "Decision testing",
      "Decision table testing",
      "Branch testing"
    ],
    "correct": 2,
    "explanation": "Decision table testing is a specification-based (black-box) technique, whereas the others are structure-based (white-box) techniques."
  },
  {
    "id": "ch4_q73",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test technique is most effective for system behavior governed by combinations of complex business rules?",
    "options": [
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    "correct": 2,
    "explanation": "Decision tables are designed to map out outcomes based on varied combinations of multiple conditions or inputs."
  },
  {
    "id": "ch4_q74",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which test technique maps valid and invalid sequence of events or statuses over time?",
    "options": [
      "Decision Table Testing",
      "State Transition Testing",
      "Use Case Testing",
      "Error Guessing"
    ],
    "correct": 1,
    "explanation": "State transition testing evaluates how software transitions through different states based on events or stimuli."
  },
  {
    "id": "ch4_q75",
    "chapter": "chapter4",
    "difficulty": "easy",
    "marks": 1,
    "question": "Which black-box technique evaluates software behavior from the perspective of user interactions and transactional workflows?",
    "options": [
      "Equivalence Partitioning",
      "Use Case Testing",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    "correct": 1,
    "explanation": "Use case testing maps out actors, workflows, and scenarios to design end-to-end user tests."
  },
  {
    "id": "ch4_q76",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which white-box technique measures the percentage of individual executable lines of code that have been run?",
    "options": [
      "Statement Testing",
      "Decision Testing",
      "Branch Testing",
      "Path Testing"
    ],
    "correct": 0,
    "explanation": "Statement testing calculates coverage based on executed executable statements over total statements."
  },
  {
    "id": "ch4_q77",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "If a function contains a single 'if' condition and no loops, what is the minimum number of test cases required to achieve 100% decision coverage?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "To satisfy decision coverage for a single conditional statement, both the TRUE and FALSE outcomes of that decision must be executed, which requires 2 distinct test cases."
  },
  {
    "id": "ch4_q78",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which of the following statements about the relationship between Statement and Decision coverage is TRUE?",
    "options": [
      "100% Statement coverage guarantees 100% Decision coverage.",
      "100% Decision coverage guarantees 100% Statement coverage.",
      "Statement coverage and Decision coverage are completely independent.",
      "Decision coverage is easier to achieve than Statement coverage."
    ],
    "correct": 1,
    "explanation": "Achieving 100% decision coverage implies that every branch outcome has been taken, which naturally guarantees that every executable statement within those paths has been run."
  },
  {
    "id": "ch4_q79",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What type of testing technique relies purely on a tester's knowledge, past experience, and intuition about where defects are likely to hide?",
    "options": [
      "Black-box testing",
      "White-box testing",
      "Experience-based testing",
      "Specification-based testing"
    ],
    "correct": 2,
    "explanation": "Experience-based testing relies heavily on human experience, intuition, and historical failure data."
  },
  {
    "id": "ch4_q80",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "Which experience-based testing technique involves a tester systematically listing potential failures, defects, or errors and designing tests specifically to target them?",
    "options": [
      "Exploratory Testing",
      "Error Guessing",
      "Checklist-based Testing",
      "Decision Table Testing"
    ],
    "correct": 1,
    "explanation": "Error guessing involves compiling or anticipating a list of common errors, mistakes, or failures to construct targeted test cases."
  },
  {
    "id": "ch4_q81",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "question": "What is a defining characteristic of Exploratory Testing?",
    "options": [
      "Test design and test execution occur simultaneously without predefined test cases.",
      "Tests are completely automated and executed overnight in a continuous pipeline.",
      "It requires a complete structural diagram of code architecture before starting.",
      "It avoids finding defects in favor of auditing documentation."
    ],
    "correct": 0,
    "explanation": "Exploratory testing combines learning, test design, execution, and documentation as concurrent activities during a testing session."
  },
  {
    "id": "ch4_q82",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "When applying Checklist-based testing, how should the high-level items on a checklist be treated?",
    "options": [
      "As a set of strict, rigid instructions that cannot be deviated from.",
      "As general guidance to dynamically design test cases during execution.",
      "As automation scripts written in javascript.",
      "They should replace all requirement documentation completely."
    ],
    "correct": 1,
    "explanation": "Checklist items provide targeted boundaries or reminders, but the actual steps can vary dynamically based on context during the test session."
  },
  {
    "id": "ch4_q83",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "question": "Which of the following is considered a primary advantage of experience-based testing?",
    "options": [
      "It provides exact, mathematical metrics of code coverage.",
      "It can identify hidden bugs that formal specification-based tests might miss.",
      "It completely eliminates the need for any requirement specifications.",
      "It guarantees uniform testing results across different testers."
    ],
    "correct": 1,
    "explanation": "Experience-based testing leverages intuition and can reveal unique scenarios or edge cases that specification-based or structure-based strategies overlook."
  },
  {
    "id": "chapter4_lo_411",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.1.1",
    "kLevel": "K2",
    "question": "Which category of test technique derives test cases purely from the system's specification, without knowledge of the internal code structure?",
    "options": [
      "Black-box technique",
      "White-box technique",
      "Experience-based technique",
      "Static technique"
    ],
    "correct": 0,
    "explanation": "Black-box techniques are based on an analysis of the specification, not the internal code; white-box techniques use the internal structure instead."
  },
  {
    "id": "chapter4_lo_421",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.1",
    "kLevel": "K3",
    "question": "An input field accepts an integer age from 18 to 65 (inclusive) as valid. Using equivalence partitioning, which set of values best represents three distinct partitions to test?",
    "options": [
      "10 (invalid-low), 40 (valid), 80 (invalid-high)",
      "18, 19, 20 (all valid)",
      "65, 65, 65 (all valid, same value)",
      "10, 11, 12 (all invalid-low)"
    ],
    "correct": 0,
    "explanation": "Equivalence partitioning divides the input domain into partitions expected to be handled the same way. For 18–65 valid, the three partitions are: below 18 (invalid), 18–65 (valid), and above 65 (invalid) — one representative value from each gives good coverage."
  },
  {
    "id": "chapter4_lo_422",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.2",
    "kLevel": "K3",
    "question": "For the same age field (valid range 18–65 inclusive), which set of values correctly applies Boundary Value Analysis at the lower boundary?",
    "options": [
      "17, 18, 19",
      "18, 40, 65",
      "1, 18, 100",
      "65, 66, 67"
    ],
    "correct": 0,
    "explanation": "Boundary Value Analysis tests values at and immediately around each boundary. For the lower boundary of 18, that's 17 (just below, invalid), 18 (the boundary, valid), and 19 (just above, valid)."
  },
  {
    "id": "chapter4_lo_423",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.3",
    "kLevel": "K3",
    "question": "A decision table has two binary conditions (C1, C2), producing every possible combination as a rule. How many distinct test cases are needed to cover every rule at least once?",
    "options": [
      "4",
      "2",
      "1",
      "8"
    ],
    "correct": 0,
    "explanation": "Two binary conditions produce 2×2 = 4 possible combinations (rules). Full decision table coverage needs at least one test case per rule — 4 in total."
  },
  {
    "id": "chapter4_lo_424",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.4",
    "kLevel": "K3",
    "question": "A login system has states Logged-Out and Logged-In. A valid password moves Logged-Out → Logged-In; logout moves Logged-In → Logged-Out. Which test targets an invalid transition?",
    "options": [
      "Attempting to log out while already in the Logged-Out state",
      "Entering a valid password from the Logged-Out state",
      "Logging out from the Logged-In state",
      "Entering an invalid password from the Logged-Out state (staying Logged-Out)"
    ],
    "correct": 0,
    "explanation": "State transition testing covers valid transitions, but also deliberately targets invalid transitions — like attempting to log out from a state where no logout transition is defined — to confirm the system handles them correctly."
  },
  {
    "id": "chapter4_lo_431",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.1",
    "kLevel": "K2",
    "question": "What does statement coverage measure?",
    "options": [
      "The percentage of executable statements that have been exercised by a test suite",
      "The percentage of requirements covered by test cases",
      "The number of defects found per test case",
      "The percentage of decision outcomes exercised"
    ],
    "correct": 0,
    "explanation": "Statement coverage is a white-box metric measuring how many executable statements in the code were run by the test suite."
  },
  {
    "id": "chapter4_lo_432",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.2",
    "kLevel": "K2",
    "question": "What does branch testing aim to exercise?",
    "options": [
      "Every branch/decision outcome (e.g., both True and False of an if-statement) at least once",
      "Every possible combination of input values",
      "Only the happy path through the code",
      "Only statements, never decisions"
    ],
    "correct": 0,
    "explanation": "Branch testing targets every decision outcome — both the True and False paths of each branch — which is a stronger criterion than plain statement coverage."
  },
  {
    "id": "chapter4_lo_433",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.3",
    "kLevel": "K2",
    "question": "What is a key value of white-box testing techniques?",
    "options": [
      "They can reveal code that is never executed by any black-box test, such as unreachable or dead code",
      "They eliminate the need for any specification-based testing",
      "They require no knowledge of the code at all",
      "They can only be applied at the acceptance test level"
    ],
    "correct": 0,
    "explanation": "Because white-box techniques examine the code's internal structure directly, they can expose dead code and untested paths that black-box testing alone would never reveal."
  },
  {
    "id": "chapter4_lo_441",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.1",
    "kLevel": "K2",
    "question": "A tester, based on past experience, specifically tests what happens when a form is submitted with an empty required field, without following any formal technique. What is this an example of?",
    "options": [
      "Error guessing",
      "Decision table testing",
      "State transition testing",
      "Statement testing"
    ],
    "correct": 0,
    "explanation": "Error guessing relies on a tester's experience and intuition about where defects are likely to occur, rather than a systematic, formal technique."
  },
  {
    "id": "chapter4_lo_442",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.2",
    "kLevel": "K2",
    "question": "Which technique involves simultaneous learning, test design, and test execution, typically without predefined test cases?",
    "options": [
      "Exploratory testing",
      "Decision table testing",
      "Boundary value analysis",
      "Statement testing"
    ],
    "correct": 0,
    "explanation": "Exploratory testing combines learning about the system, designing tests, and executing them all at once, guided by what the tester discovers as they go."
  },
  {
    "id": "chapter4_lo_443",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.3",
    "kLevel": "K2",
    "question": "A tester uses a predefined list of quality characteristics (e.g., 'all error messages are clear') to guide ad hoc test execution. What technique is this?",
    "options": [
      "Checklist-based testing",
      "State transition testing",
      "Equivalence partitioning",
      "Branch testing"
    ],
    "correct": 0,
    "explanation": "Checklist-based testing designs and executes tests guided by a checklist of items or quality characteristics the tester wants to cover."
  },
  {
    "id": "chapter4_lo_451",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.5.1",
    "kLevel": "K2",
    "question": "Which of the following best follows the standard user story format?",
    "options": [
      "As a registered user, I want to reset my password, so that I can regain access to my account",
      "The system shall support password reset functionality",
      "Password reset must comply with security standard XYZ-123",
      "Test that password reset works correctly"
    ],
    "correct": 0,
    "explanation": "The standard user story format is 'As a [role], I want [feature], so that [benefit]' — written collaboratively by the team, not as a formal system requirement."
  },
  {
    "id": "chapter4_lo_452",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.5.2",
    "kLevel": "K2",
    "question": "Which of the following is a common format for writing acceptance criteria?",
    "options": [
      "Given/When/Then (scenario-oriented)",
      "UML class diagrams only",
      "Source code comments only",
      "Database schema definitions only"
    ],
    "correct": 0,
    "explanation": "Given/When/Then is a widely used scenario-oriented format for expressing acceptance criteria clearly and testably."
  },
  {
    "id": "chapter4_lo_453",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.5.3",
    "kLevel": "K3",
    "question": "In Acceptance Test-Driven Development (ATDD), when are acceptance tests written relative to the code that implements the feature?",
    "options": [
      "Before the code is written, derived collaboratively from user stories and acceptance criteria",
      "After the code is fully implemented and deployed to production",
      "Only after a defect is found in production",
      "ATDD does not involve writing acceptance tests at all"
    ],
    "correct": 0,
    "explanation": "In ATDD, the whole team collaborates to write acceptance tests before development begins, using them to drive and validate the implementation."
  },
  {
    "id": "ch4_ex1",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.1.1",
    "kLevel": "K2",
    "question": "Exploratory testing, which relies on tester intuition and learning rather than a predefined specification, best fits which technique category?",
    "options": [
      "Experience-based technique",
      "Black-box technique only",
      "White-box technique",
      "Static technique"
    ],
    "correct": 0,
    "explanation": "Exploratory testing draws on the tester's knowledge and experience to guide test design in real time, placing it in the experience-based category rather than black-box or white-box."
  },
  {
    "id": "ch4_ex2",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-4.1.1",
    "kLevel": "K2",
    "question": "Which TWO statements correctly distinguish black-box from white-box techniques? (Select 2)",
    "options": [
      "Black-box techniques are based on the specification, not the code",
      "White-box techniques are based on the internal structure of the code",
      "Black-box techniques require full knowledge of the source code",
      "White-box techniques never require knowledge of the code"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Black-box techniques work from the specification alone, with no code knowledge required. White-box techniques work from internal structure — statements, branches, and paths."
  },
  {
    "id": "ch4_ex3",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.1",
    "kLevel": "K3",
    "question": "A discount code field only accepts codes that are EXACTLY 6 characters long. Using equivalence partitioning, which value best represents the \"too short\" invalid partition?",
    "options": [
      "ABC (3 characters)",
      "ABCDEF (6 characters)",
      "ABCDEFGHIJKL (12 characters)",
      "None of these test that partition"
    ],
    "correct": 0,
    "explanation": "Three partitions exist here: too-short (<6 chars, invalid), exactly-6 (valid), and too-long (>6 chars, invalid). A 3-character code represents the too-short partition."
  },
  {
    "id": "ch4_ex4",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.2",
    "kLevel": "K3",
    "question": "For the valid age range 18–65 (inclusive), which set of values correctly applies Boundary Value Analysis at the UPPER boundary?",
    "options": [
      "64, 65, 66",
      "17, 18, 19",
      "1, 18, 100",
      "60, 65, 70"
    ],
    "correct": 0,
    "explanation": "For the upper boundary of 65, BVA tests 64 (just inside, valid), 65 (the boundary itself, valid), and 66 (just outside, invalid)."
  },
  {
    "id": "ch4_ex5",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "matching",
    "lo": "FL-4.2.2",
    "kLevel": "K3",
    "question": "Match each boundary test value to its role when testing a valid range of 1–100.",
    "leftItems": [
      "0",
      "1",
      "100",
      "101"
    ],
    "rightItems": [
      "Just below the lower boundary (invalid)",
      "The lower boundary itself (valid)",
      "The upper boundary itself (valid)",
      "Just above the upper boundary (invalid)"
    ],
    "correctPairs": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3
    },
    "explanation": "Boundary Value Analysis always tests the value just outside a boundary, the boundary itself, and (often) the value just inside — for both the lower and upper edges of a range."
  },
  {
    "id": "ch4_ex6",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.3",
    "kLevel": "K3",
    "question": "A decision table has THREE independent binary conditions. How many rules (columns) exist in the full, un-collapsed table?",
    "options": [
      "8",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explanation": "With n binary conditions, the full decision table has 2^n rules. For 3 conditions, that's 2×2×2 = 8 rules."
  },
  {
    "id": "ch4_ex7",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-4.2.3",
    "kLevel": "K3",
    "question": "In a decision table, two rules produce the exact same action regardless of one particular condition's value. What technique is commonly used to simplify the table in this case?",
    "options": [
      "Collapsing the rules using a \"don't care\" value for that condition",
      "Deleting the action column entirely",
      "Adding a fourth condition to compensate",
      "This situation cannot occur in a valid decision table"
    ],
    "correct": 0,
    "explanation": "When a condition doesn't affect the outcome for certain rules, it can be marked \"don't care\" and those rules collapsed together, reducing the table's size without losing coverage."
  },
  {
    "id": "ch4_ex8",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.4",
    "kLevel": "K3",
    "question": "A traffic light cycles Red → Green → Yellow → Red. How many valid transitions exist in one full cycle?",
    "options": [
      "3",
      "4",
      "2",
      "6"
    ],
    "correct": 0,
    "explanation": "The cycle has exactly three defined valid transitions: Red→Green, Green→Yellow, and Yellow→Red."
  },
  {
    "id": "ch4_ex9",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-4.2.4",
    "kLevel": "K3",
    "question": "For the same traffic light (Red → Green → Yellow → Red only), which of these is an INVALID transition worth specifically testing?",
    "options": [
      "Red directly to Yellow",
      "Red to Green",
      "Green to Yellow",
      "Yellow to Red"
    ],
    "correct": 0,
    "explanation": "Only Red→Green, Green→Yellow, and Yellow→Red are valid. Red directly to Yellow skips a defined state and should be tested to confirm the system correctly prevents or ignores it."
  },
  {
    "id": "ch4_ex10",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.3.1",
    "kLevel": "K2",
    "question": "A test suite executes 80 out of 100 executable statements in a module. What is the statement coverage?",
    "options": [
      "80%",
      "100%",
      "20%",
      "Cannot be determined from this information"
    ],
    "correct": 0,
    "explanation": "Statement coverage = (statements executed ÷ total executable statements) × 100 = 80/100 × 100 = 80%."
  },
  {
    "id": "ch4_ex11",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.3.2",
    "kLevel": "K2",
    "question": "An IF-ELSE statement has two branches. A test suite only ever executes the IF path, never the ELSE. What is the branch coverage for this statement?",
    "options": [
      "50%",
      "100%",
      "0%",
      "Cannot be determined from this information"
    ],
    "correct": 0,
    "explanation": "Branch coverage counts each decision outcome. With only 1 of 2 branches (IF, ELSE) exercised, coverage for that statement is 1/2 = 50%."
  },
  {
    "id": "ch4_ex12",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.3",
    "kLevel": "K2",
    "question": "White-box testing is especially valuable for which of the following?",
    "options": [
      "Confirming that complex or safety-critical logic paths are actually exercised by tests",
      "Testing purely from the end-user's perspective",
      "Deriving tests only from user stories",
      "Replacing the need for any specification"
    ],
    "correct": 0,
    "explanation": "Because it examines internal structure directly, white-box testing can confirm that critical logic paths — including edge cases invisible from the outside — are genuinely exercised."
  },
  {
    "id": "ch4_ex13",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.1",
    "kLevel": "K2",
    "question": "Which of the following is a hallmark of error guessing as a technique?",
    "options": [
      "It relies on a tester's intuition about where defects commonly hide, such as boundary or null-input handling",
      "It requires a fully defined decision table before use",
      "It can only be applied to white-box testing",
      "It guarantees 100% defect detection"
    ],
    "correct": 0,
    "explanation": "Error guessing is informal by design — it leans on the tester's experience and pattern recognition rather than a formal, systematic technique."
  },
  {
    "id": "ch4_ex14",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.2",
    "kLevel": "K2",
    "question": "Which statement about exploratory testing is correct?",
    "options": [
      "Test design, execution, and learning happen simultaneously, guided by what's discovered",
      "Test cases must be fully scripted and approved before any execution",
      "It cannot be used alongside scripted testing",
      "It is only valid for performance testing"
    ],
    "correct": 0,
    "explanation": "Exploratory testing's defining trait is that learning, designing, and executing tests all happen together in real time, rather than in separate, sequential phases."
  },
  {
    "id": "ch4_ex15",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.3",
    "kLevel": "K2",
    "question": "A checklist used for checklist-based testing typically contains which of the following?",
    "options": [
      "A list of items or quality characteristics the tester wants to verify are covered",
      "A complete set of detailed, step-by-step scripted test cases",
      "Source code line numbers only",
      "A list of project stakeholders"
    ],
    "correct": 0,
    "explanation": "Checklist-based testing is guided by a high-level list of items or characteristics to check, not fully scripted test cases — the tester still exercises judgment in how to test each item."
  },
  {
    "id": "ch4_ex16",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.5.1",
    "kLevel": "K2",
    "question": "Why are user stories typically written collaboratively, involving both business and technical people?",
    "options": [
      "To build shared understanding between business, development, and testing on what's actually needed",
      "Because exactly three authors are required by the format",
      "Because developers are not allowed to read requirements otherwise",
      "Because collaboration replaces the need for any conversation about the feature"
    ],
    "correct": 0,
    "explanation": "Collaborative authorship surfaces misunderstandings early and ensures business intent, technical feasibility, and testability are all considered together."
  },
  {
    "id": "ch4_ex17",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-4.5.2",
    "kLevel": "K2",
    "question": "Which TWO are valid ways to express acceptance criteria? (Select 2)",
    "options": [
      "Given/When/Then scenarios",
      "Rule-based checklists of conditions",
      "Randomly generated numbers",
      "Raw binary machine code"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Acceptance criteria are commonly written as Given/When/Then scenarios or as rule-based checklists — both are testable, human-readable formats."
  },
  {
    "id": "ch4_ex18",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.5.3",
    "kLevel": "K3",
    "question": "In ATDD, who typically collaborates to define the acceptance tests before coding begins?",
    "options": [
      "Business representatives, developers, and testers together",
      "Only the test manager, working alone",
      "Only external auditors",
      "Only end users, after the release"
    ],
    "correct": 0,
    "explanation": "ATDD is inherently collaborative — the whole team defines acceptance tests together up front, building shared understanding of what 'done' means before any code is written."
  },
  {
    "id": "ch4_ex19",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.1.1",
    "kLevel": "K2",
    "question": "A tester writes test cases purely from the requirements document, having never looked at the source code. Which technique category is this?",
    "options": [
      "Black-box",
      "White-box",
      "Experience-based",
      "Static analysis"
    ],
    "correct": 0,
    "explanation": "Deriving tests solely from the specification, with no reference to the internal code, is the defining trait of a black-box technique."
  },
  {
    "id": "ch4_ex20",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "combination",
    "lo": "FL-4.2.1",
    "kLevel": "K3",
    "question": "A field accepts discount percentages from 0 to 50 (inclusive) as valid. Which TWO values fall in INVALID partitions? (Select 2)",
    "options": [
      "-5",
      "75",
      "25",
      "0"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "-5 is below the valid range (invalid-low) and 75 is above it (invalid-high). 25 and 0 both fall within the valid 0–50 partition."
  },
  {
    "id": "ch4_ex21",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-4.2.2",
    "kLevel": "K3",
    "question": "Why does Boundary Value Analysis specifically target the edges of a partition, rather than the middle?",
    "options": [
      "Because defects statistically cluster at boundaries, where off-by-one errors are common",
      "Because boundaries are easier to type than middle values",
      "Because ISTQB requires it arbitrarily",
      "Because middle values are never valid"
    ],
    "correct": 0,
    "explanation": "Boundary conditions are a common source of real defects (e.g. using > instead of >=), which is exactly why BVA focuses testing effort there."
  },
  {
    "id": "ch4_ex22",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "scenario",
    "lo": "FL-4.2.3",
    "kLevel": "K3",
    "question": "A decision table rule states: IF (isMember = True) AND (orderTotal > 100) THEN applyDiscount. If isMember is False, the discount never applies regardless of orderTotal. What can you do to simplify this in the table?",
    "options": [
      "Mark orderTotal as \"don't care\" for all rules where isMember = False",
      "Delete the isMember condition entirely",
      "Add a fourth condition to compensate",
      "This cannot be simplified"
    ],
    "correct": 0,
    "explanation": "When one condition's value makes another condition irrelevant to the outcome, it can be marked \"don't care,\" collapsing multiple rules into one without losing coverage."
  },
  {
    "id": "ch4_ex23",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-4.2.4",
    "kLevel": "K3",
    "question": "What does \"0-switch coverage\" mean in state transition testing?",
    "options": [
      "Testing each single valid transition between states at least once",
      "Testing every possible sequence of two consecutive transitions",
      "Testing only the initial state",
      "Testing that the system never changes state"
    ],
    "correct": 0,
    "explanation": "0-switch coverage means every individual (single) transition is exercised at least once. 1-switch coverage goes further, testing sequences of two consecutive transitions."
  },
  {
    "id": "ch4_ex23b",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.1",
    "kLevel": "K2",
    "question": "A test suite achieves 100% statement coverage. What can you conclude?",
    "options": [
      "Every executable statement ran, but some logic paths or branch combinations might still be untested",
      "The software is now guaranteed defect-free",
      "Branch coverage is automatically also 100%",
      "No further testing of any kind is needed"
    ],
    "correct": 0,
    "explanation": "100% statement coverage only guarantees every line executed at least once — it says nothing about every branch or combination of decisions being tested."
  },
  {
    "id": "ch4_ex24",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.2",
    "kLevel": "K2",
    "question": "Why is branch coverage generally considered a stronger coverage criterion than statement coverage?",
    "options": [
      "Achieving 100% branch coverage also guarantees 100% statement coverage, but not vice versa",
      "Branch coverage is always faster to achieve",
      "Statement coverage doesn't require running any code",
      "They are exactly equivalent in every case"
    ],
    "correct": 0,
    "explanation": "Every statement lies on some branch, so covering all branches covers all statements — but covering all statements can miss branches (e.g. an untested ELSE with no unique statements)."
  },
  {
    "id": "ch4_ex25",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.3.3",
    "kLevel": "K2",
    "question": "Why do teams often combine white-box and black-box techniques rather than relying on just one?",
    "options": [
      "They catch different kinds of defects — specification gaps vs. structural/logic issues",
      "White-box testing alone is always sufficient",
      "Black-box testing alone always achieves 100% code coverage",
      "Combining them is required by law"
    ],
    "correct": 0,
    "explanation": "Black-box techniques validate behavior against requirements; white-box techniques expose structural issues invisible from the outside. Together they cover more ground than either alone."
  },
  {
    "id": "ch4_ex26",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.1",
    "kLevel": "K2",
    "question": "Which of these areas is a classic target for error guessing, based on common defect patterns?",
    "options": [
      "Boundary conditions, empty inputs, and unusual character encodings",
      "The project's git commit history",
      "The company's HR policies",
      "The color scheme of the UI"
    ],
    "correct": 0,
    "explanation": "Experienced testers often specifically probe boundaries, empty/null inputs, and unusual data — areas that history shows are prone to defects."
  },
  {
    "id": "ch4_ex27",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.2",
    "kLevel": "K2",
    "question": "What is a \"test charter\" commonly used for in exploratory testing?",
    "options": [
      "Giving the tester a time-boxed mission or goal to guide their exploration",
      "Replacing the need for any test technique",
      "A formal legal document signed by stakeholders",
      "A fully scripted list of test steps"
    ],
    "correct": 0,
    "explanation": "A charter gives exploratory testing structure — a goal and time-box — without constraining the tester to a fully scripted path."
  },
  {
    "id": "ch4_ex28",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.4.3",
    "kLevel": "K2",
    "question": "What is a potential limitation of checklist-based testing?",
    "options": [
      "It can be less repeatable/precise than a technique with detailed, scripted steps",
      "It always takes longer than every other technique",
      "It cannot be used by experienced testers",
      "It requires full source code access"
    ],
    "correct": 0,
    "explanation": "Because checklist items are high-level, different testers may interpret and execute them differently — trading some repeatability for speed and flexibility."
  },
  {
    "id": "ch4_ex29",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.5.1",
    "kLevel": "K2",
    "question": "A well-written user story is often described using the INVEST mnemonic. What does the 'N' stand for?",
    "options": [
      "Negotiable — details can be discussed and refined by the team",
      "Numeric — must include a specific number",
      "National — must comply with local law",
      "Nested — must contain sub-stories"
    ],
    "correct": 0,
    "explanation": "INVEST stands for Independent, Negotiable, Valuable, Estimable, Small, and Testable — 'Negotiable' means the story's details are a starting point for conversation, not a fixed contract."
  },
  {
    "id": "ch4_ex30",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "lo": "FL-4.5.2",
    "kLevel": "K2",
    "question": "Besides the \"happy path,\" what should good acceptance criteria also cover?",
    "options": [
      "Negative and edge-case scenarios, such as invalid input or error handling",
      "Only the most common use case",
      "Only scenarios the developer finds convenient to implement",
      "Nothing beyond the primary success scenario"
    ],
    "correct": 0,
    "explanation": "Thorough acceptance criteria describe how the system should behave for errors and edge cases too, not just the ideal, everything-goes-right path."
  },
  {
    "id": "ch4_ex31",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "lo": "FL-4.5.3",
    "kLevel": "K3",
    "question": "How does ATDD relate to Behavior-Driven Development (BDD)?",
    "options": [
      "Both are test-first approaches that derive tests from collaboratively defined examples/criteria before coding",
      "They are unrelated and never used together",
      "ATDD replaces BDD entirely in the ISTQB syllabus",
      "BDD only applies to non-functional testing"
    ],
    "correct": 0,
    "explanation": "ATDD and BDD share the same core idea — defining concrete, testable examples collaboratively before implementation — though they emphasize slightly different notations and audiences."
  },
  {
    "id": "ch4_ex32",
    "chapter": "chapter4",
    "difficulty": "hard",
    "marks": 1,
    "type": "matching",
    "lo": "FL-4.2.1",
    "kLevel": "K3",
    "question": "A form field accepts whole numbers from 1 to 5 as valid. Match each test value to its correct partition.",
    "leftItems": [
      "-2",
      "3",
      "10",
      "0"
    ],
    "rightItems": [
      "Invalid — below the valid range",
      "Valid — within the range",
      "Invalid — above the valid range",
      "Invalid — below the valid range (boundary adjacent)"
    ],
    "correctPairs": {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3
    },
    "explanation": "Values below 1 (like -2 and 0) fall in the invalid-low partition, 3 falls within the valid 1–5 partition, and 10 falls in the invalid-high partition."
  },
  {
    "id": "ch4_ex33",
    "chapter": "chapter4",
    "difficulty": "medium",
    "marks": 1,
    "type": "combination",
    "lo": "FL-4.4.1",
    "kLevel": "K2",
    "question": "Which TWO of these are recognized experience-based test techniques? (Select 2)",
    "options": [
      "Error guessing",
      "Exploratory testing",
      "Decision table testing",
      "Boundary value analysis"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Error guessing and exploratory testing both rely primarily on tester experience and intuition. Decision tables and BVA are systematic black-box techniques."
  }
];
