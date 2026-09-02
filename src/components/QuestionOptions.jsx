import { getQuestionType } from "../services/answerUtils";

const LETTERS = "ABCDEFGH";

export function StandardOptions({ q, answer, onSelect, locked }) {
  return (
    <div className="space-y-3">
      {q.options.map((opt, i) => {
        const selected = answer === i;
        const isCorrectOption = i === q.correct;
        const isWrongSelection = locked && selected && !isCorrectOption;
        const revealCorrect = locked && isCorrectOption;

        let stateClasses = "border-border bg-surfaceAlt hover:border-brand-400";
        let letterClasses = "bg-black/5 text-inkSoft";
        let icon = null;

        if (locked) {
          if (revealCorrect) {
            stateClasses = "border-feather bg-feather/10";
            letterClasses = "bg-feather text-white";
            icon = "✓";
          } else if (isWrongSelection) {
            stateClasses = "border-cardinal bg-cardinal/10";
            letterClasses = "bg-cardinal text-white";
            icon = "✕";
          } else {
            stateClasses = "border-border bg-surfaceAlt opacity-60";
          }
        } else if (selected) {
          stateClasses = "border-brand-500 bg-brand-500/15";
          letterClasses = "bg-brand-gradient text-white";
        }

        return (
          <button
            key={i}
            disabled={locked}
            onClick={() => onSelect(i)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left font-semibold transition-all ${stateClasses} ${
              locked ? "cursor-not-allowed" : ""
            }`}
          >
            <span
              className={`w-8 h-8 shrink-0 rounded-full grid place-items-center font-extrabold text-sm ${letterClasses}`}
            >
              {icon || LETTERS[i]}
            </span>
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

export function CombinationOptions({ q, answer, onToggle, onConfirm, locked }) {
  const selected = Array.isArray(answer) ? answer : [];
  const correctSet = new Set(q.correct || []);

  return (
    <div className="space-y-3">
      <p className="text-inkSoft text-sm font-semibold">
        Select all statements that apply, then confirm.
      </p>
      {q.options.map((opt, i) => {
        const isSelected = selected.includes(i);
        const isCorrectOption = correctSet.has(i);
        const isWrongSelection = locked && isSelected && !isCorrectOption;
        const revealCorrect = locked && isCorrectOption;

        let stateClasses = "border-border bg-surfaceAlt hover:border-feather/50";
        let boxClasses = "border-border text-transparent";
        let icon = "✓";

        if (locked) {
          if (revealCorrect) {
            stateClasses = "border-feather bg-feather/10";
            boxClasses = "bg-feather border-feather text-white";
          } else if (isWrongSelection) {
            stateClasses = "border-cardinal bg-cardinal/10";
            boxClasses = "bg-cardinal border-cardinal text-white";
            icon = "✕";
          } else {
            stateClasses = "border-border bg-surfaceAlt opacity-60";
          }
        } else if (isSelected) {
          stateClasses = "border-feather bg-feather/10";
          boxClasses = "bg-feather border-feather text-white";
        }

        return (
          <button
            key={i}
            disabled={locked}
            onClick={() => onToggle(i)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left font-semibold transition-all ${stateClasses} ${
              locked ? "cursor-not-allowed" : ""
            }`}
          >
            <span
              className={`w-7 h-7 shrink-0 rounded-lg grid place-items-center font-extrabold text-sm border-2 ${boxClasses}`}
            >
              {icon}
            </span>
            <span>{opt}</span>
          </button>
        );
      })}
      {!locked && (
        <button
          onClick={onConfirm}
          disabled={selected.length === 0}
          className="btn-pop bg-feather text-white shadow-popSm px-6 py-3 rounded-2xl mt-2 disabled:opacity-40"
        >
          ✅ Confirm Selection
        </button>
      )}
    </div>
  );
}

export function MatchingOptions({ q, answer, onChange, onConfirm, locked }) {
  const current = answer && typeof answer === "object" && !Array.isArray(answer) ? answer : {};

  return (
    <div className="space-y-3">
      <p className="text-inkSoft text-sm font-semibold">
        Match each item on the left with the correct item on the right.
      </p>
      {q.leftItems.map((left, i) => {
        const isCorrect =
          locked && current[i] !== undefined && String(current[i]) === String(q.correctPairs[i]);
        const isWrong = locked && current[i] !== undefined && !isCorrect;

        return (
          <div
            key={i}
            className={`flex items-center gap-3 p-4 rounded-2xl border-2 ${
              isCorrect
                ? "border-feather bg-feather/10"
                : isWrong
                ? "border-cardinal bg-cardinal/10"
                : "border-border bg-surfaceAlt"
            }`}
          >
            <span className="font-bold flex-1">{left}</span>
            <span className="text-inkSoft">→</span>
            <div className="flex-1">
              <select
                disabled={locked}
                value={current[i] ?? ""}
                onChange={(e) => onChange(i, e.target.value)}
                className="w-full p-2.5 rounded-xl border-2 border-border bg-surface font-semibold"
              >
                <option value="">Choose a match…</option>
                {q.rightItems.map((right, j) => (
                  <option key={j} value={j}>
                    {right}
                  </option>
                ))}
              </select>
              {isWrong && (
                <div className="text-featherDark text-xs font-bold mt-1.5">
                  ✓ Correct: {q.rightItems[q.correctPairs[i]]}
                </div>
              )}
            </div>
          </div>
        );
      })}
      {!locked && (
        <button
          onClick={onConfirm}
          className="btn-pop bg-feather text-white shadow-popSm px-6 py-3 rounded-2xl mt-2"
        >
          ✅ Confirm Matches
        </button>
      )}
    </div>
  );
}

export function TypeBadge({ q }) {
  const type = getQuestionType(q);
  if (type === "standard") return null;

  const map = {
    scenario: { label: "🧩 Scenario", color: "bg-bee/20 text-beeDark" },
    combination: { label: "☑️ Combination", color: "bg-feather/20 text-featherDark" },
    matching: { label: "🔗 Matching", color: "bg-sky/20 text-skyDark" },
  };
  const cfg = map[type];
  if (!cfg) return null;

  return (
    <span className={`text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}
