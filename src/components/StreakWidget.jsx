import { useEffect, useState } from "react";
import { StreakService } from "../services/streakService";

export default function StreakWidget() {
  const [status, setStatus] = useState({ current: 0, practicedToday: false });

  useEffect(() => {
    setStatus(StreakService.getStatus());
  }, []);

  const empty = status.current === 0 && !status.practicedToday;

  return (
    <div className="card-pop shadow-card p-4 flex items-center gap-4 mb-6">
      <div className={`text-4xl ${status.current > 0 ? "animate-floaty" : ""}`}>🔥</div>
      <div>
        <div className="font-heading font-extrabold text-lg">
          {empty ? "Start your streak" : `${status.current}-day streak`}
        </div>
        <div className="text-inkSoft text-sm">
          {empty
            ? "Finish an exam today to begin"
            : status.practicedToday
            ? "Nice work today — keep it going!"
            : "Finish a question set today to keep it alive"}
        </div>
      </div>
    </div>
  );
}
