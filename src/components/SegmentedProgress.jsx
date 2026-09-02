import { isAnswerEmpty, isAnswerCorrect } from "../services/answerUtils";

// Duolingo-style per-question progress track. Shows a ✓/✕ above each
// answered segment in practice mode (correctness is known immediately);
// in timed mode we only show answered-vs-not, never correctness, so the
// bar doesn't spoil results mid-exam. Falls back to a plain bar for long
// sets (mock exams etc.) where 40 tiny segments would be unreadable.
export default function SegmentedProgress({ questions, answers, currentIndex, timed }) {
  const total = questions.length;

  if (total > 20) {
    const answeredCount = answers.filter((a) => !isAnswerEmpty(a)).length;
    const pct = total === 0 ? 0 : Math.round((answeredCount / total) * 100);
    return (
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2.5 rounded-full bg-black/10 overflow-hidden">
          <div
            className="h-full bg-brand-gradient rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-extrabold text-inkSoft shrink-0">
          {currentIndex + 1} / {total}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-end gap-1">
        {questions.map((q, i) => {
          const answer = answers[i];
          const answered = !isAnswerEmpty(answer);
          const known = !timed && answered;
          const correct = known ? isAnswerCorrect(q, answer) : null;

          return (
            <div key={q.id} className="flex-1 flex flex-col items-center gap-1 min-w-0">
              <div className="h-3.5 flex items-end justify-center leading-none">
                {known &&
                  (correct ? (
                    <span className="text-[11px] font-extrabold text-featherDark">✓</span>
                  ) : (
                    <span className="text-[11px] font-extrabold text-cardinalDark">✕</span>
                  ))}
              </div>
              <div
                className={`w-full h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-brand-gradient"
                    : answered
                    ? "bg-brand-500"
                    : "bg-[var(--border)]"
                }`}
              />
            </div>
          );
        })}
      </div>
      <span className="text-xs font-extrabold text-inkSoft shrink-0">
        {currentIndex + 1} / {total}
      </span>
    </div>
  );
}
