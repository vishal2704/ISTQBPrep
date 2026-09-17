import { useEffect, useState } from "react";
import { isAnswerEmpty } from "../services/answerUtils";

const PAGE_SIZE = 10;

// Compact by default — a single summary row with a toggle — so the exam
// view reads as a focused practice session rather than a control-heavy
// exam dashboard. Expanding reveals the full grid, paginated into pages of
// 10 for any question count (verified up to 100+) so it never wraps into
// an unwieldy block or causes horizontal overflow.
export default function QuestionNavigator({ questions, answers, currentIndex, bookmarks = [], onJump }) {
  const total = questions.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const [page, setPage] = useState(Math.floor(currentIndex / PAGE_SIZE));
  const [expanded, setExpanded] = useState(total <= PAGE_SIZE);

  useEffect(() => {
    setPage(Math.floor(currentIndex / PAGE_SIZE));
  }, [currentIndex]);

  const answeredCount = answers.filter((a) => !isAnswerEmpty(a)).length;
  const bookmarkedCount = questions.filter((q) => bookmarks.includes(q.id)).length;

  function jump(i) {
    onJump(i);
  }

  const buttonClass = (i, isAnswered) =>
    `relative aspect-square rounded-xl text-sm font-extrabold border-2 transition-all grid place-items-center ${
      i === currentIndex
        ? "border-brand-500 bg-brand-gradient text-white"
        : isAnswered
        ? "border-feather bg-feather/15 text-featherDark"
        : "border-border bg-surfaceAlt text-inkSoft hover:border-brand-400"
    }`;

  const pageStart = page * PAGE_SIZE;
  const pageEnd = Math.min(pageStart + PAGE_SIZE, total);
  const pageQuestions = questions.slice(pageStart, pageEnd);

  function renderButton(q, i) {
    const isAnswered = !isAnswerEmpty(answers[i]);
    const isBookmarked = bookmarks.includes(q.id);
    return (
      <button
        key={q.id}
        onClick={() => jump(i)}
        aria-label={`Go to question ${i + 1}${isAnswered ? " (answered)" : " (not answered)"}${
          isBookmarked ? ", bookmarked" : ""
        }${i === currentIndex ? ", current question" : ""}`}
        aria-current={i === currentIndex ? "true" : undefined}
        className={buttonClass(i, isAnswered)}
      >
        {i + 1}
        {isBookmarked && (
          <span className="absolute -top-1 -right-1 text-[10px] leading-none" aria-hidden="true">
            ⭐
          </span>
        )}
      </button>
    );
  }

  return (
    <div data-tour="exam-dots">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between text-xs font-bold text-inkSoft hover:text-ink py-1.5"
        aria-expanded={expanded}
      >
        <span>
          {answeredCount}/{total} answered
          {bookmarkedCount > 0 && ` · ⭐ ${bookmarkedCount}`}
        </span>
        <span className="flex items-center gap-1">
          {expanded ? "Hide question list" : "Show question list"}
          <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>⌄</span>
        </span>
      </button>

      {expanded && (
        <div className="mt-2">
          {total <= PAGE_SIZE ? (
            <div className="grid grid-cols-5 sm:flex sm:flex-wrap gap-2 justify-center">
              {questions.map((q, i) => (
                <div key={q.id} className="sm:w-9 sm:h-9">
                  {renderButton(q, i)}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous questions"
                className="shrink-0 w-9 h-9 rounded-xl border-2 border-border bg-surfaceAlt text-inkSoft grid place-items-center font-extrabold disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-400"
              >
                ‹
              </button>

              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {pageQuestions.map((q, idx) => renderButton(q, pageStart + idx))}
                </div>
                <div className="text-center text-inkSoft text-xs font-bold mt-2">
                  Questions {pageStart + 1}–{pageEnd} of {total} · Page {page + 1}/{totalPages}
                </div>
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                aria-label="Next questions"
                className="shrink-0 w-9 h-9 rounded-xl border-2 border-border bg-surfaceAlt text-inkSoft grid place-items-center font-extrabold disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-400"
              >
                ›
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
