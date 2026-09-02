import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import BadgeGrid from "../components/BadgeGrid";
import { AchievementService } from "../services/achievementService";

export default function Achievements() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setBadges(AchievementService.getAllWithStatus());
  }, []);

  const unlocked = badges.filter((b) => b.unlocked);
  const stats = AchievementService.computeStats();

  return (
    <PageShell bg="result">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm">
          🏅
        </div>
        <h1 className="font-heading text-3xl font-extrabold mb-2">Achievements</h1>
        <p className="text-inkSoft max-w-lg mx-auto">
          {unlocked.length} of {badges.length} badges unlocked — keep practicing to earn the rest.
        </p>
      </div>

      <Card className="mb-8 shadow-elevated">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-heading text-2xl font-extrabold text-brand-600">{stats.totalQuestionsAnswered}</div>
            <div className="text-inkSoft text-xs font-semibold">Questions answered</div>
          </div>
          <div>
            <div className="font-heading text-2xl font-extrabold text-featherDark">{stats.bestScore}%</div>
            <div className="text-inkSoft text-xs font-semibold">Best score</div>
          </div>
          <div>
            <div className="font-heading text-2xl font-extrabold text-foxDark">{stats.longestStreak}</div>
            <div className="text-inkSoft text-xs font-semibold">Longest streak (days)</div>
          </div>
          <div>
            <div className="font-heading text-2xl font-extrabold text-plumDark">{stats.mockExamsCompleted}</div>
            <div className="text-inkSoft text-xs font-semibold">Mock exams finished</div>
          </div>
        </div>
      </Card>

      <BadgeGrid badges={badges} />
    </PageShell>
  );
}
