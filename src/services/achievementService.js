import { StorageService } from "./storageService";
import { StreakService } from "./streakService";
import { ACHIEVEMENTS } from "../data/achievements";

function computeStats() {
  const results = StorageService.loadResults();
  const streak = StreakService.getStatus();

  const totalQuestionsAnswered = results.reduce((sum, r) => sum + (r.total || 0), 0);
  const bestScore = results.length > 0 ? Math.max(...results.map((r) => r.score)) : 0;
  const mockExamsCompleted = results.filter((r) => r.chapter?.startsWith("mock-")).length;
  const retries = results.filter((r) => r.chapter?.startsWith("Retry:") || r.chapter === "Bookmarked Questions");
  const retriesCompleted = retries.length;
  const perfectRetries = retries.filter((r) => r.score >= 100).length;

  const programs = new Set(
    results.map((r) => {
      if (r.chapter?.startsWith("tm") || r.chapter === "mock-tm") return "tm";
      if (r.chapter?.startsWith("chapter") || r.chapter === "mock-foundation") return "foundation";
      return null;
    }).filter(Boolean)
  );

  return {
    longestStreak: streak.longest,
    totalQuestionsAnswered,
    bestScore,
    mockExamsCompleted,
    retriesCompleted,
    perfectRetries,
    programsAttempted: programs.size,
  };
}

export const AchievementService = {
  computeStats,

  getAllWithStatus() {
    const stats = computeStats();
    return ACHIEVEMENTS.map((a) => ({ ...a, unlocked: a.check(stats) }));
  },

  // Call once per page view (e.g. Result page) to find badges that just
  // became unlocked since the last time we checked, then marks them seen.
  getNewlyUnlocked() {
    const stats = computeStats();
    const seen = new Set(StorageService.loadSeenBadges());
    const unlockedNow = ACHIEVEMENTS.filter((a) => a.check(stats));
    const fresh = unlockedNow.filter((a) => !seen.has(a.id));

    if (fresh.length > 0) {
      unlockedNow.forEach((a) => seen.add(a.id));
      StorageService.saveSeenBadges([...seen]);
    }
    return fresh;
  },

  // Call right after a result is saved. Returns which personal records (if
  // any) were just broken, and updates the stored bests.
  checkPersonalBests(result) {
    const pb = StorageService.loadPersonalBests();
    const broke = { score: false, session: false };

    if (result.score > pb.bestScore) {
      pb.bestScore = result.score;
      broke.score = true;
    }
    if (result.total > pb.mostQuestionsInSession) {
      pb.mostQuestionsInSession = result.total;
      broke.session = true;
    }

    StorageService.savePersonalBests(pb);
    return broke;
  },
};
