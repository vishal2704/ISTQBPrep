const KEYS = {
  EXAM: "istqb_exam",
  RESULTS: "istqb_results",
  BOOKMARKS: "istqb_bookmarks",
  EXPOSURE: "istqb_exposure",
  WRONG_POOL: "istqb_wrong_pool",
  STREAK: "istqb_streak",
  USER: "istqb_user",
  THEME: "theme",
  PLAN: "istqb_plan",
  BADGES_SEEN: "istqb_badges_seen",
  PERSONAL_BESTS: "istqb_personal_bests",
  LAST_EXAM: "istqb_last_exam",
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const StorageService = {
  KEYS,

  saveExam: (examData) => write(KEYS.EXAM, examData),
  loadExam: () => read(KEYS.EXAM, null),
  clearExam: () => localStorage.removeItem(KEYS.EXAM),

  saveResult: (result) => {
    const all = read(KEYS.RESULTS, []);
    all.unshift(result);
    write(KEYS.RESULTS, all.slice(0, 50));
  },
  loadResults: () => read(KEYS.RESULTS, []),
  clearResults: () => localStorage.removeItem(KEYS.RESULTS),

  loadBookmarks: () => read(KEYS.BOOKMARKS, []),
  saveBookmarks: (list) => write(KEYS.BOOKMARKS, list),
  clearBookmarks: () => localStorage.removeItem(KEYS.BOOKMARKS),

  loadQuestionExposure: () => read(KEYS.EXPOSURE, {}),
  saveQuestionExposure: (exp) => write(KEYS.EXPOSURE, exp),

  loadWrongPool: () => read(KEYS.WRONG_POOL, []),
  saveWrongPool: (pool) => write(KEYS.WRONG_POOL, pool),

  loadStreak: () => read(KEYS.STREAK, { current: 0, lastDate: null }),
  saveStreak: (s) => write(KEYS.STREAK, s),

  loadUser: () => read(KEYS.USER, null),
  saveUser: (u) => write(KEYS.USER, u),
  clearUser: () => localStorage.removeItem(KEYS.USER),

  loadPlan: () => read(KEYS.PLAN, "free"),
  savePlan: (p) => write(KEYS.PLAN, p),

  loadSeenBadges: () => read(KEYS.BADGES_SEEN, []),
  saveSeenBadges: (ids) => write(KEYS.BADGES_SEEN, ids),

  loadPersonalBests: () => read(KEYS.PERSONAL_BESTS, { bestScore: 0, mostQuestionsInSession: 0 }),
  savePersonalBests: (pb) => write(KEYS.PERSONAL_BESTS, pb),

  loadLastExam: () => read(KEYS.LAST_EXAM, null),
  saveLastExam: (examId) => write(KEYS.LAST_EXAM, examId),
};
