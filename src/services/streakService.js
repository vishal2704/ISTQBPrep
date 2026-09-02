import { StorageService } from "./storageService";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export const StreakService = {
  getStatus() {
    const s = StorageService.loadStreak();
    return {
      current: s.current || 0,
      longest: Math.max(s.longest || 0, s.current || 0),
      practicedToday: s.lastDate === todayKey(),
    };
  },

  recordPractice() {
    const s = StorageService.loadStreak();
    const today = todayKey();

    if (s.lastDate === today) return; // already counted today

    if (s.lastDate === yesterdayKey()) {
      s.current = (s.current || 0) + 1;
    } else {
      s.current = 1;
    }

    s.longest = Math.max(s.longest || 0, s.current);
    s.lastDate = today;
    StorageService.saveStreak(s);
  },
};
