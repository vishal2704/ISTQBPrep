import { useEffect, useState } from "react";
import { AchievementService } from "../services/achievementService";
import { fireFlowers } from "../utils/confetti";

// Checks for newly-unlocked badges and freshly-broken personal records for
// the exam that was JUST finished, celebrates with a flower burst, and
// renders a small summary banner. Runs its check exactly once, on mount.
export default function AchievementCelebration({ result }) {
  const [newBadges, setNewBadges] = useState([]);
  const [records, setRecords] = useState({ score: false, session: false });

  useEffect(() => {
    if (!result) return;
    const broke = AchievementService.checkPersonalBests(result);
    const fresh = AchievementService.getNewlyUnlocked();

    setRecords(broke);
    setNewBadges(fresh);

    if (fresh.length > 0 || broke.score || broke.session) {
      fireFlowers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasAnything = newBadges.length > 0 || records.score || records.session;
  if (!hasAnything) return null;

  return (
    <div className="rounded-3xl border-2 border-bee/40 bg-bee/10 p-5 mb-6 animate-fadeUp">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">🎉</span>
        <h3 className="font-heading font-extrabold text-lg">New achievement{newBadges.length + (records.score ? 1 : 0) + (records.session ? 1 : 0) > 1 ? "s" : ""}!</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {records.score && (
          <div className="flex items-center gap-2 bg-surfaceAlt rounded-2xl px-3.5 py-2 shadow-card">
            <span className="text-xl">🏆</span>
            <span className="text-sm font-bold">New personal best score!</span>
          </div>
        )}
        {records.session && (
          <div className="flex items-center gap-2 bg-surfaceAlt rounded-2xl px-3.5 py-2 shadow-card">
            <span className="text-xl">📈</span>
            <span className="text-sm font-bold">Most questions in a single session!</span>
          </div>
        )}
        {newBadges.map((b) => (
          <div key={b.id} className="flex items-center gap-2 bg-surfaceAlt rounded-2xl px-3.5 py-2 shadow-card">
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="text-sm font-bold leading-tight">{b.title}</div>
              <div className="text-inkSoft text-[11px] leading-tight">{b.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
