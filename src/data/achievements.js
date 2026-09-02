// Achievement/badge definitions. Each badge's `check(stats)` receives the
// aggregated stats object built by achievementService.js and returns true
// once earned. Badges never "un-earn" — once true, always shown as unlocked.
export const ACHIEVEMENTS = [
  // ===== Streaks =====
  { id: "streak-3", category: "Streaks", title: "Getting Started", description: "Practice 3 days in a row", icon: "🔥", check: (s) => s.longestStreak >= 3 },
  { id: "streak-7", category: "Streaks", title: "On a Roll", description: "Practice 7 days in a row", icon: "🔥", check: (s) => s.longestStreak >= 7 },
  { id: "streak-30", category: "Streaks", title: "Unstoppable", description: "Practice 30 days in a row", icon: "🔥", check: (s) => s.longestStreak >= 30 },

  // ===== Volume =====
  { id: "vol-10", category: "Volume", title: "First Steps", description: "Answer 10 questions", icon: "🌱", check: (s) => s.totalQuestionsAnswered >= 10 },
  { id: "vol-100", category: "Volume", title: "Century Club", description: "Answer 100 questions", icon: "💯", check: (s) => s.totalQuestionsAnswered >= 100 },
  { id: "vol-500", category: "Volume", title: "500 Club", description: "Answer 500 questions", icon: "🏆", check: (s) => s.totalQuestionsAnswered >= 500 },
  { id: "vol-1000", category: "Volume", title: "Question Marathoner", description: "Answer 1,000 questions", icon: "🚀", check: (s) => s.totalQuestionsAnswered >= 1000 },

  // ===== Score =====
  { id: "score-80", category: "Score", title: "Breaking 80", description: "Score 80% or higher on any attempt", icon: "🎯", check: (s) => s.bestScore >= 80 },
  { id: "score-100", category: "Score", title: "Perfectionist", description: "Score a perfect 100%", icon: "⭐", check: (s) => s.bestScore >= 100 },

  // ===== Consistency =====
  { id: "mock-finish", category: "Consistency", title: "Mock Exam Finisher", description: "Complete a full timed mock exam", icon: "🏁", check: (s) => s.mockExamsCompleted >= 1 },
  { id: "comeback", category: "Consistency", title: "Comeback Kid", description: "Retry your wrong answers at least once", icon: "🔁", check: (s) => s.retriesCompleted >= 1 },
  { id: "comeback-perfect", category: "Consistency", title: "Redemption Arc", description: "Score 100% on a retry of your wrong answers", icon: "🎖️", check: (s) => s.perfectRetries >= 1 },
  { id: "multi-cert", category: "Consistency", title: "Multi-Certified Mindset", description: "Practice questions from more than one certification", icon: "🎓", check: (s) => s.programsAttempted >= 2 },
];

export const CATEGORY_ORDER = ["Streaks", "Volume", "Score", "Consistency"];
