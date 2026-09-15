import { StorageService } from "./storageService";

// Lifetime stats persist independently of the RESULTS history array, so
// that "Clear Results"/"Clear History" (which only ever removes RESULTS)
// never resets badges, best score, average score, or other earned progress.
// See storageService.js loadLifetimeStats/saveLifetimeStats.

function detectProgram(chapter) {
  if (!chapter) return null;
  if (chapter.startsWith("tm") || chapter === "mock-tm") return "tm";
  if (chapter.startsWith("chapter") || chapter === "mock-foundation") return "foundation";
  return null;
}

function applyResult(stats, result) {
  stats.totalQuestionsAnswered += result.total || 0;
  stats.sumScores += result.score || 0;
  stats.countScores += 1;
  stats.bestScore = Math.max(stats.bestScore, result.score || 0);

  if (result.chapter?.startsWith("mock-")) stats.mockExamsCompleted += 1;

  if (result.chapter?.startsWith("Retry:") || result.chapter === "Bookmarked Questions") {
    stats.retriesCompleted += 1;
    if (result.score >= 100) stats.perfectRetries += 1;
  }

  const program = detectProgram(result.chapter);
  if (program && !stats.programsAttempted.includes(program)) {
    stats.programsAttempted.push(program);
  }
}

// One-time backfill from existing history — important for anyone who
// already has results saved from before this feature existed. Without
// this, their lifetime stats would incorrectly start at zero the first
// time this code runs, even though nothing was actually cleared.
function backfillFromHistory() {
  const stats = StorageService.loadLifetimeStats();
  const results = StorageService.loadResults();
  results.forEach((r) => applyResult(stats, r));
  stats.initialized = true;
  StorageService.saveLifetimeStats(stats);
  return stats;
}

export const LifetimeStatsService = {
  get() {
    const stats = StorageService.loadLifetimeStats();
    if (!stats.initialized) return backfillFromHistory();
    return stats;
  },

  // Call once, right after a new result is saved to history.
  recordResult(result) {
    let stats = StorageService.loadLifetimeStats();

    if (!stats.initialized) {
      // First time ever recording. Backfill from any pre-existing history
      // for users upgrading from before this feature existed — but exclude
      // this exact result, since the caller may have already saved it to
      // history before calling recordResult(), which would otherwise count
      // it twice (once via backfill, once via the applyResult call below).
      const priorResults = StorageService.loadResults().filter((r) => r.id !== result.id);
      priorResults.forEach((r) => applyResult(stats, r));
      stats.initialized = true;
    }

    applyResult(stats, result);
    StorageService.saveLifetimeStats(stats);
    return stats;
  },

  averageScore() {
    const s = this.get();
    return s.countScores > 0 ? Math.round(s.sumScores / s.countScores) : null;
  },
};
