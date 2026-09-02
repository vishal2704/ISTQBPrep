import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { AchievementService } from "../services/achievementService";

export default function BadgesSummaryCard() {
  const navigate = useNavigate();
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setBadges(AchievementService.getAllWithStatus());
  }, []);

  const unlocked = badges.filter((b) => b.unlocked);

  return (
    <Card className="mb-6 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate("/achievements")}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading font-extrabold text-lg flex items-center gap-2">
            🏅 Achievements
            <span className="text-xs font-extrabold text-inkSoft bg-black/5 px-2 py-0.5 rounded-full">
              {unlocked.length}/{badges.length}
            </span>
          </h3>
          <p className="text-inkSoft text-xs mt-0.5">
            {unlocked.length === 0 ? "Start practicing to earn your first badge" : "Tap to see all badges"}
          </p>
        </div>
        <div className="flex -space-x-2">
          {(unlocked.length > 0 ? unlocked : badges).slice(0, 4).map((b) => (
            <span
              key={b.id}
              className={`w-10 h-10 rounded-full grid place-items-center text-lg border-2 border-surfaceAlt ${
                b.unlocked ? "bg-bee/20" : "bg-black/5 grayscale opacity-50"
              }`}
            >
              {b.icon}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
