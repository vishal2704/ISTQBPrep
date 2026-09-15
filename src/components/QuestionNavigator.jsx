import { useEffect, useState } from "react";
import { isAnswerEmpty } from "../services/answerUtils";

const PAGE_SIZE = 10;

// For 10 or fewer questions, a single row works fine as-is. Beyond that,
// paginate into pages of 10 with Prev/Next controls — auto-jumping to
// whichever page contains the current question — instead of letting the
// grid wrap into an unwieldy multi-row block.
export default function QuestionNavigator({ questions, answers, currentIndex, onJump }) {
  const total = questions.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const [page, setPage] = useState(Math.floor(currentIndex / PAGE_SIZE));

  useEffect(() => {
    setPage(Math.floor(currentIndex / PAGE_SIZE));
  }, [currentIndex]);

  function jump(i) {
    onJump(i);
  }

  const pageStart = page * PAGE_SIZE;
  const pageEnd = Math.min(pageStart + PAGE_SIZE, total);
  const pageQuestions = questions.slice(pageStart, pageEnd);

  const buttonClass = (i, isAnswered) =>
    `aspect-square rounded-xl text-sm font-extrabold border-2 transition-all grid place-items-center ${
      i === currentIndex
        ? "border-brand-500 bg-brand-gradient text-white"
        : isAnswered
        ? "border-feather bg-feather/15 text-featherDark"
        : "border-border bg-surfaceAlt text-inkSoft hover:border-brand-400"
    }`;

  if (total <= PAGE_SIZE) {
    return (
      <div data-tour="exam-dots" className="grid grid-cols-5 sm:flex sm:flex-wrap gap-2 justify-center">
        {questions.map((q, i) => {
          const isAnswered = !isAnswerEmpty(answers[i]);
          return (
            <button
              key={q.id}
              onClick={() => jump(i)}
              aria-label={`Go to question ${i + 1}${isAnswered ? " (answered)" : " (not answered)"}${i === currentIndex ? ", current question" : ""}`}
              aria-current={i === currentIndex ? "true" : undefined}
              className={`sm:w-9 sm:h-9 ${buttonClass(i, isAnswered)}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div data-tour="exam-dots" className="flex items-center gap-2">
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
          {pageQuestions.map((q, idx) => {
            const i = pageStart + idx;
            const isAnswered = !isAnswerEmpty(answers[i]);
            return (
              <button
                key={q.id}
                onClick={() => jump(i)}
                aria-label={`Go to question ${i + 1}${isAnswered ? " (answered)" : " (not answered)"}${i === currentIndex ? ", current question" : ""}`}
                aria-current={i === currentIndex ? "true" : undefined}
                className={buttonClass(i, isAnswered)}
              >
                {i + 1}
              </button>
            );
          })}
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
  );
}
