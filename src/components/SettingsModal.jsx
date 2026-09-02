import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { OnboardingService } from "../services/onboardingService";

export default function SettingsModal({ open, onClose }) {
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    if (open) OnboardingService.markSettingsOpened();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Settings and themes"
    >
      <div className="card-pop shadow-card w-full max-w-md p-6 animate-pop max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-heading text-2xl font-extrabold">⚙️ Settings</h3>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="w-9 h-9 rounded-full hover:bg-black/5 text-inkSoft text-lg"
          >
            ✕
          </button>
        </div>
        <p className="text-inkSoft mb-4">Pick a theme for the whole app.</p>

        <div className="grid grid-cols-2 gap-3">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              aria-pressed={theme === t.id}
              className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all ${
                theme === t.id
                  ? "border-feather ring-2 ring-feather/30"
                  : "border-border hover:border-feather/50"
              }`}
            >
              <span
                className="w-5 h-5 rounded-full shrink-0"
                style={{ background: t.swatch }}
                aria-hidden="true"
              />
              <span className="text-sm font-bold">
                {t.icon} {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
