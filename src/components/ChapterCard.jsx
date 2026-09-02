import { useNavigate } from "react-router-dom";

const DEFAULT_EMOJI = {
  chapter1: "🧪", chapter2: "🔄", chapter3: "🔍", chapter4: "🎯", chapter5: "📋", chapter6: "🛠️",
};

export default function ChapterCard({ id, title, description, progress, linkTo, emoji }) {
  const navigate = useNavigate();
  const hasProgress = progress && progress.attempts > 0;

  return (
    <button
      onClick={() => navigate(linkTo || `/foundation/chapter/${id}`)}
      className="card-pop shadow-card p-5 text-left w-full flex items-start gap-4 transition-transform hover:-translate-y-1"
    >
      <div className="w-14 h-14 shrink-0 rounded-2xl grid place-items-center text-2xl bg-feather/15 relative">
        {emoji || DEFAULT_EMOJI[id] || "📘"}
        {hasProgress && progress.best >= 70 && (
          <span className="absolute -top-1.5 -right-1.5 text-sm" title="Passing score achieved">
            ✅
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-heading font-extrabold text-lg">{title}</div>
        <p className="text-inkSoft text-sm mt-0.5">{description}</p>

        {hasProgress ? (
          <div className="mt-2.5">
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="text-inkSoft">
                Best: <span className={progress.best >= 70 ? "text-featherDark" : "text-ink"}>{progress.best}%</span>
              </span>
              <span className="text-inkSoft">
                {progress.attempts} attempt{progress.attempts > 1 ? "s" : ""}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
              <div
                className={`h-full rounded-full ${progress.best >= 70 ? "bg-feather" : "bg-sky"}`}
                style={{ width: `${Math.min(progress.best, 100)}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="mt-2.5 text-xs font-bold text-inkSoft">Not attempted yet</div>
        )}
      </div>
    </button>
  );
}
