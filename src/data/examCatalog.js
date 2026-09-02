// Metadata for ISTQB certifications beyond the two we have full question
// banks for (Foundation, Test Manager). Organized the same way the official
// scheme is (stream + level), but this is our own data structure/content —
// topic lists are directional summaries of well-known syllabus areas, not
// transcribed from an official PDF (none was provided for these certs).
export const EXAM_CATALOG = {
  "test-analyst": {
    title: "Advanced Level — Test Analyst",
    stream: "Core", level: "Advanced",
    emoji: "🔬", color: "bg-plum/15",
    blurb: "Deep black-box test design, technique-heavy and specification-focused.",
    topics: [
      "Advanced black-box techniques (classification trees, pairwise, use-case testing)",
      "Defect-based and experience-based testing at an advanced level",
      "Reviewing requirements, user stories, and acceptance criteria critically",
      "Advanced testing for domains: usability, accessibility, and more",
      "Collaboration-based testing approaches (ATDD/BDD in depth)",
    ],
  },
  "technical-test-analyst": {
    title: "Advanced Level — Technical Test Analyst",
    stream: "Core", level: "Advanced",
    emoji: "🧠", color: "bg-sky/15",
    blurb: "White-box, structural, and technically-oriented test design.",
    topics: [
      "Advanced white-box techniques (condition, MC/DC coverage)",
      "Static and dynamic code analysis in depth",
      "Quality characteristics: performance, security, reliability testing",
      "Test automation architecture and technical enablement",
      "Component-level and API-level test design",
    ],
  },
  "expert-tm": {
    title: "Expert Level — Test Management",
    stream: "Core", level: "Expert",
    emoji: "🏛️", color: "bg-brand-500/15",
    blurb: "Strategic and operational leadership of testing at scale.",
    topics: [
      "Managing the test team: hiring, coaching, performance",
      "Operational test management: day-to-day execution leadership",
      "Strategic test management: aligning testing with business strategy",
      "Organizational test process ownership across multiple projects",
    ],
  },
  "expert-improve": {
    title: "Expert Level — Improving the Test Process",
    stream: "Core", level: "Expert",
    emoji: "📈", color: "bg-plum/15",
    blurb: "Assessing and driving test process maturity across an organization.",
    topics: [
      "Assessing test processes against reference models (TMMi, TPI)",
      "Designing and running a process improvement initiative",
      "Change management for process adoption",
      "Measuring and sustaining improvement over time",
    ],
  },
  "agile-tester": {
    title: "Agile Tester (Foundation)",
    stream: "Agile", level: "Foundation",
    emoji: "🔄", color: "bg-feather/15",
    blurb: "The tester's role and practices within Agile/Scrum teams.",
    topics: [
      "Agile fundamentals: Scrum, Kanban, and testing's role in each",
      "Agile testing methods: TDD, ATDD, BDD, exploratory testing",
      "Assessing quality risks and estimating effort in Agile",
      "Agile tester skills, tasks, and team collaboration",
    ],
  },
  "agile-technical-tester": {
    title: "Agile Technical Tester (Advanced)",
    stream: "Agile", level: "Advanced",
    emoji: "⚙️", color: "bg-sky/15",
    blurb: "Hands-on technical practices for testers embedded in Agile teams.",
    topics: [
      "Building and maintaining test automation within sprints",
      "Continuous integration and testing in CI/CD pipelines",
      "Technical risk analysis in an Agile context",
      "Pairing with developers on test-first practices",
    ],
  },
  "agile-leadership": {
    title: "Agile Test Leadership at Scale (Advanced)",
    stream: "Agile", level: "Advanced",
    emoji: "🧭", color: "bg-mint/15",
    blurb: "Leading quality practices across multiple Agile teams at scale.",
    topics: [
      "Scaling testing practices across teams (SAFe, LeSS, etc.)",
      "Coaching and influencing without formal authority",
      "Coordinating quality strategy across a program of teams",
      "Metrics and reporting for leadership at scale",
    ],
  },
  "automation": {
    title: "Test Automation Engineer (Specialist)",
    stream: "Specialist", level: "Specialist",
    emoji: "🛠️", color: "bg-sky/15",
    blurb: "Designing and maintaining scalable automated test suites.",
    topics: [
      "Automation architecture and the test automation pyramid",
      "Selecting and evaluating automation tools and frameworks",
      "Maintainability: page objects, data-driven and keyword-driven design",
      "Integrating automation into CI/CD pipelines",
      "ROI and metrics for automation initiatives",
    ],
  },
  "performance": {
    title: "Performance Testing (Specialist)",
    stream: "Specialist", level: "Specialist",
    emoji: "⚡", color: "bg-feather/15",
    blurb: "Load, stress, and performance test strategy.",
    topics: [
      "Types of performance testing: load, stress, soak, spike",
      "Defining performance test objectives and acceptance criteria",
      "Performance test environments and monitoring",
      "Analyzing results and identifying bottlenecks",
    ],
  },
  "security": {
    title: "Security Tester (Specialist)",
    stream: "Specialist", level: "Specialist",
    emoji: "🔒", color: "bg-plum/15",
    blurb: "Testing for security vulnerabilities and risk.",
    topics: [
      "Security testing principles and common vulnerability classes",
      "Security risk analysis and threat modeling",
      "Security test techniques and tools",
      "Security testing throughout the SDLC",
    ],
  },
  "ai-testing": {
    title: "AI Testing (Specialist)",
    stream: "Specialist", level: "Specialist",
    emoji: "🤖", color: "bg-brand-500/15",
    blurb: "Testing AI/ML-based systems — a newer, fast-evolving specialty.",
    topics: [
      "Characteristics unique to testing AI/ML systems",
      "Data quality and bias considerations in testing",
      "Testing model performance, robustness, and explainability",
      "Using AI to support the testing process itself",
    ],
  },
  "usability": {
    title: "Usability Testing (Specialist)",
    stream: "Specialist", level: "Specialist",
    emoji: "🖱️", color: "bg-bee/15",
    blurb: "Evaluating real-world usability and user experience.",
    topics: [
      "Usability test planning and participant recruitment",
      "Usability evaluation techniques and heuristics",
      "Accessibility testing fundamentals",
      "Analyzing and reporting usability findings",
    ],
  },
};

export function getExamMeta(id) {
  return EXAM_CATALOG[id] || null;
}
