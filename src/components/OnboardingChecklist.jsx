import { useEffect, useState } from "react";
import Card from "./Card";
import { OnboardingService } from "../services/onboardingService";

export default function OnboardingChecklist({ onTakeTour, onOpenSettings }) {
  const [dismissed, setDismissed] = useState(true); // start hidden until we know client state
  const [items, setItems] = useState([]);

  function refresh() {
    if (OnboardingService.isChecklistDismissed()) {
      setDismissed(true);
      return;
    }

    const list = [
      {
        id: "tour",
        label: "Take the 60-second app tour",
        done: OnboardingService.hasSeenTour("dashboard"),
        action: onTakeTour,
      },
      {
        id: "practice",
        label: "Practice your first set of questions",
        done: OnboardingService.hasPracticed(),
      },
      {
        id: "theme",
        label: "Pick a theme that feels like you",
        done: OnboardingService.hasOpenedSettings(),
        action: onOpenSettings,
      },
      {
        id: "bookmark",
        label: "⭐ Bookmark a question you want to revisit",
        done: OnboardingService.hasBookmarked(),
      },
    ];

    setItems(list);
    setDismissed(list.every((i) => i.done));
  }

  useEffect(() => {
    refresh();
    // Re-check whenever the tab regains focus (covers actions taken elsewhere)
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
    // eslint-disable-next-line
  }, []);

  if (dismissed) return null;

  const doneCount = items.filter((i) => i.done).length;

  return (
    <Card className="mb-6 !border-feather/30 bg-feather/5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-extrabold text-lg">👋 Getting started</h3>
        <button
          onClick={() => {
            OnboardingService.dismissChecklist();
            setDismissed(true);
          }}
          className="text-xs font-bold text-inkSoft hover:text-ink"
          aria-label="Dismiss getting started checklist"
        >
          Dismiss
        </button>
      </div>

      <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden mb-4">
        <div
          className="h-full bg-feather rounded-full transition-all duration-300"
          style={{ width: `${(doneCount / items.length) * 100}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <span
              className={`w-6 h-6 rounded-full grid place-items-center text-xs shrink-0 ${
                item.done ? "bg-feather text-white" : "border-2 border-border text-transparent"
              }`}
            >
              ✓
            </span>
            {item.action && !item.done ? (
              <button
                onClick={() => {
                  item.action();
                  setTimeout(refresh, 300);
                }}
                className="text-sm font-semibold text-skyDark hover:underline text-left"
              >
                {item.label}
              </button>
            ) : (
              <span className={`text-sm font-semibold ${item.done ? "text-inkSoft line-through" : ""}`}>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
