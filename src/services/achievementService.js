import { StorageService } from "./storageService";
import { StreakService } from "./streakService";
import { LifetimeStatsService } from "./lifetimeStatsService";
import { ACHIEVEMENTS } from "../data/achievements";

function computeStats() {
  const lifetime = LifetimeStatsService.get();
  const streak = StreakService.getStatus();

  return {
    longestStreak: streak.longest,
    totalQuestionsAnswered: lifetime.totalQuestionsAnswered,
    bestScore: lifetime.bestScore,
    mockExamsCompleted: lifetime.mockExamsCompleted,
    retriesCompleted: lifetime.retriesCompleted,
    perfectRetries: lifetime.perfectRetries,
    programsAttempted: lifetime.programsAttempted.length,
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
