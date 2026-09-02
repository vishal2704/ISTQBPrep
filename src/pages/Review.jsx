import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { useExam } from "../context/ExamContext";
import { isAnswerEmpty, formatUserAnswer } from "../services/answerUtils";
import { fireConfetti } from "../utils/confetti";
import { useBeforeUnloadWarning } from "../hooks/useBeforeUnloadWarning";

export default function Review() {
  const { examData, setCurrentIndex, finishExam } = useExam();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // all | unanswered | bookmarked

  useBeforeUnloadWarning(!!examData);

  useEffect(() => {
    if (!examData) navigate("/");
    // Only guard on mount — examData legitimately becomes null the instant
    // finishExam() runs, right when we're already navigating to /result.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!examData) return null;

  const answeredCount = examData.answers.filter((a) => !isAnswerEmpty(a)).length;
  const unansweredCount = examData.questions.length - answeredCount;

  function handleSubmit() {
    const result = finishExam();
    if (result) {
      if (result.score >= 70) fireConfetti();
      navigate("/result", { state: { result } });
    }
  }

  function goToQuestion(i) {
    setCurrentIndex(i);
    navigate("/exam");
  }

  const rows = examData.questions
    .map((q, i) => ({
      q,
      i,
      answer: examData.answers[i],
      isAnswered: !isAnswerEmpty(examData.answers[i]),
      bookmarked: examData.bookmarks.includes(q.id),
    }))
    .filter((row) => {
      if (filter === "unanswered") return !row.isAnswered;
      if (filter === "bookmarked") return row.bookmarked;
      return true;
    });

  return (
    <PageShell homePath={examData.chapter?.startsWith("tm") ? "/test-manager" : "/foundation"}>
      <h1 className="font-heading text-2xl font-extrabold mb-1">📝 Review Before Submission</h1>
      <p className="text-inkSoft mb-5">
        {answeredCount} of {examData.questions.length} answered
        {unansweredCount > 0 && (
          <span className="text-beeDark font-bold"> · {unansweredCount} still unanswered</span>
        )}
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {[
          { id: "all", label: `All (${examData.questions.length})` },
          { id: "unanswered", label: `Unanswered (${unansweredCount})` },
          { id: "bookmarked", label: `⭐ Bookmarked (${examData.bookmarks.length})` },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`text-xs font-extrabold px-3 py-1.5 rounded-full border-2 transition-all ${
              filter === f.id
                ? "border-transparent bg-brand-gradient text-white"
                : "border-border bg-surfaceAlt text-inkSoft hover:border-brand-400"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <Card className="!p-0 overflow-hidden shadow-elevated">
        {rows.length === 0 ? (
          <p className="text-inkSoft text-sm text-center py-8">Nothing matches this filter.</p>
        ) : (
          <div className="divide-y divide-border">
            {rows.map(({ q, i, answer, isAnswered, bookmarked }) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(i)}
                className="w-full flex items-start gap-4 p-4 text-left hover:bg-black/5 transition-colors"
              >
                <span
                  className={`w-8 h-8 shrink-0 rounded-full grid place-items-center font-extrabold text-xs ${
                    isAnswered ? "bg-feather/15 text-featherDark" : "bg-bee/20 text-beeDark"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{q.question}</div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {isAnswered ? (
                      <span className="text-xs text-inkSoft">
                        Your answer: <span className="font-bold text-ink">{formatUserAnswer(q, answer)}</span>
                      </span>
                    ) : (
                      <Badge color="gold">Not answered</Badge>
                    )}
                    {bookmarked && <span className="text-sm">⭐</span>}
                  </div>
                </div>
                <span className="text-brand-600 font-bold text-xs shrink-0">Edit →</span>
              </button>
            ))}
          </div>
        )}
      </Card>

      <div className="flex items-center justify-between mt-6">
        <Button variant="outline" onClick={() => navigate("/exam")}>
          ← Return To Exam
        </Button>
        <Button variant="brand" onClick={handleSubmit}>
          Submit Final Exam 🏁
        </Button>
      </div>
    </PageShell>
  );
}
