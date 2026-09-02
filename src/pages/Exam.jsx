import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { StandardOptions, CombinationOptions, MatchingOptions, TypeBadge } from "../components/QuestionOptions";
import SegmentedProgress from "../components/SegmentedProgress";
import HintBox from "../components/HintBox";
import ConceptBadge from "../components/ConceptBadge";
import AppTour from "../components/AppTour";
import { useExam } from "../context/ExamContext";
import { getQuestionType, isAnswerCorrect, isAnswerEmpty } from "../services/answerUtils";
import { fireConfetti } from "../utils/confetti";
import { useBeforeUnloadWarning } from "../hooks/useBeforeUnloadWarning";
import { useSwipeNav } from "../hooks/useSwipeNav";
import { OnboardingService } from "../services/onboardingService";

const EXAM_SECONDS = 60 * 60; // 60 minutes for timed mode

const EXAM_TOUR_STEPS = [
  { selector: "[data-tour=exam-header]", title: "Keep track as you go", text: "Timer (on timed exams), help, and bookmark button live here — your progress bar is just below." },
  { selector: "[data-tour=exam-badges]", title: "Question types", text: "Watch for these badges — some questions are multi-select or ask you to match pairs, not just pick one answer." },
  { selector: "[data-tour=exam-options]", title: "Answer the question", text: "In practice mode you'll get instant feedback and an explanation right after you answer." },
  { selector: "[data-tour=exam-dots]", title: "Jump to any question", text: "Click a number to jump straight there. Green means answered." },
];

export default function Exam() {
  const { examData, currentIndex, setCurrentIndex, setAnswer, toggleBookmark, setLocked, finishExam } = useExam();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const [tourActive, setTourActive] = useState(false);

  useBeforeUnloadWarning(!!examData);

  useEffect(() => {
    if (!examData) navigate("/");
    // Only guard on mount — examData legitimately becomes null the instant
    // finishExam() runs, right when we're already navigating to /result.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (examData && !OnboardingService.hasSeenTour("exam")) {
      const t = setTimeout(() => setTourActive(true), 600);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line
  }, [!!examData]);

  useEffect(() => {
    if (!examData?.timed) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          handleFinish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line
  }, [examData?.timed]);

  const q = examData?.questions?.[currentIndex];
  const answer = examData?.answers?.[currentIndex];
  const type = q ? getQuestionType(q) : "standard";
  const locked = !examData?.timed && examData?.combinationLocked && (type === "combination" || type === "matching");
  const answered = !isAnswerEmpty(answer);
  const showFeedback = !examData?.timed && answered && (type === "standard" || type === "scenario" || locked);

  const handleFinish = useCallback(() => {
    const result = finishExam();
    if (result) {
      if (result.score >= 70) fireConfetti();
      navigate("/result", { state: { result } });
    }
  }, [finishExam, navigate]);

  useEffect(() => {
    if (!examData || !q || tourActive) return;

    function handleKey(e) {
      const tag = document.activeElement?.tagName;
      if (tag === "SELECT" || tag === "INPUT" || tag === "TEXTAREA") return; // don't hijack matching dropdowns

      const canAnswer = (type === "standard" || type === "scenario") && (examData.timed || !answered);
      if (canAnswer) {
        const map = { "1": 0, "2": 1, "3": 2, "4": 3 };
        if (map[e.key] !== undefined && map[e.key] < q.options.length) {
          setAnswer(currentIndex, map[e.key]);
          return;
        }
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setLocked(false);
        if (currentIndex < examData.questions.length - 1) setCurrentIndex((i) => i + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setLocked(false);
        setCurrentIndex((i) => Math.max(0, i - 1));
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [examData, q, type, answered, currentIndex, tourActive, setAnswer, setCurrentIndex, setLocked]);

  const swipeHandlers = useSwipeNav(
    () => !tourActive && goNext(),
    () => !tourActive && goPrev(),
    !!examData && !tourActive
  );

  if (!examData || !q) return null;

  const isLast = currentIndex === examData.questions.length - 1;

  function goNext() {
    setLocked(false);
    if (isLast) {
      if (examData.timed) handleFinish();
      else navigate("/review");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function goPrev() {
    setLocked(false);
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  function selectStandard(i) {
    if (!examData.timed && answered) return;
    setAnswer(currentIndex, i);
  }

  function toggleCombo(i) {
    if (locked) return;
    const cur = Array.isArray(answer) ? [...answer] : [];
    const pos = cur.indexOf(i);
    if (pos >= 0) cur.splice(pos, 1);
    else cur.push(i);
    setAnswer(currentIndex, cur);
  }

  function confirmCombo() {
    if (!examData.timed) setLocked(true);
  }

  function changeMatch(leftIndex, value) {
    const cur = answer && typeof answer === "object" && !Array.isArray(answer) ? { ...answer } : {};
    if (value === "") delete cur[leftIndex];
    else cur[leftIndex] = Number(value);
    setAnswer(currentIndex, cur);
  }

  function confirmMatch() {
    if (Object.keys(answer || {}).length < q.leftItems.length) return;
    if (!examData.timed) setLocked(true);
  }

  const bookmarked = examData.bookmarks.includes(q.id);
  const correct = showFeedback ? isAnswerCorrect(q, answer) : null;

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const secs = String(secondsLeft % 60).padStart(2, "0");

  return (
    <PageShell bg="exam" homePath={examData.chapter?.startsWith("tm") ? "/test-manager" : "/foundation"}>
      <div data-tour="exam-header" className="flex items-center justify-end gap-3 mb-3">
        {examData.timed && (
          <Badge color={secondsLeft < 60 ? "gold" : "blue"}>⏱️ {mins}:{secs}</Badge>
        )}
        <button
          onClick={() => setTourActive(true)}
          className="text-sm font-bold text-inkSoft hover:text-ink w-9 h-9 rounded-full border-2 border-border grid place-items-center shrink-0"
          title="Show help for this page"
          aria-label="Show a guided walkthrough of the exam page"
        >
          ?
        </button>
        <button
          onClick={() => toggleBookmark(q.id)}
          className={`text-2xl transition-transform hover:scale-110 ${bookmarked ? "" : "opacity-40"}`}
          title={bookmarked ? "Remove bookmark" : "Bookmark this question"}
          aria-label={bookmarked ? "Remove bookmark from this question" : "Bookmark this question"}
          aria-pressed={bookmarked}
        >
          {bookmarked ? "⭐" : "☆"}
        </button>
      </div>

      <SegmentedProgress
        questions={examData.questions}
        answers={examData.answers}
        currentIndex={currentIndex}
        timed={examData.timed}
      />

      <Card className="mt-5" {...swipeHandlers}>
        <div data-tour="exam-badges" className="flex items-center gap-2 flex-wrap mb-3">
          <Badge color="blue">{q.chapter?.toUpperCase()}</Badge>
          <Badge color={q.difficulty === "hard" ? "plum" : q.difficulty === "medium" ? "blue" : "green"}>
            {q.difficulty}
          </Badge>
          <TypeBadge q={q} />
        </div>

        <h2 className="font-heading text-xl font-bold mb-4">{q.question}</h2>

        {!examData.timed && <ConceptBadge q={q} />}

        {!examData.timed && !answered && !locked && <HintBox q={q} />}

        <div data-tour="exam-options">
          {type === "combination" ? (
            <CombinationOptions q={q} answer={answer} onToggle={toggleCombo} onConfirm={confirmCombo} locked={locked} />
          ) : type === "matching" ? (
            <MatchingOptions q={q} answer={answer} onChange={changeMatch} onConfirm={confirmMatch} locked={locked} />
          ) : (
            <StandardOptions
              q={q}
              answer={answer}
              onSelect={selectStandard}
              locked={!examData.timed && answered}
            />
          )}
        </div>

        {showFeedback && (
          <div
            className={`mt-5 p-4 rounded-2xl border-2 ${
              correct ? "border-feather bg-feather/10" : "border-cardinal bg-cardinal/10"
            }`}
          >
            <div className="font-heading font-extrabold mb-1">
              {correct ? "✅ Correct!" : "❌ Not quite"}
            </div>
            <p className="text-sm text-ink">{q.explanation}</p>
          </div>
        )}
      </Card>

      <div className="flex items-center justify-between mt-5">
        <Button variant="outline" onClick={goPrev} disabled={currentIndex === 0}>
          ← Back
        </Button>
        <Button onClick={goNext}>
          {isLast ? (examData.timed ? "Finish Exam 🏁" : "Review Answers 📝") : "Next →"}
        </Button>
      </div>

      <div data-tour="exam-dots" className="flex flex-wrap gap-2 mt-6 justify-center">
        {examData.questions.map((qq, i) => {
          const a = examData.answers[i];
          const isAnswered = !isAnswerEmpty(a);
          return (
            <button
              key={qq.id}
              onClick={() => {
                setLocked(false);
                setCurrentIndex(i);
              }}
              aria-label={`Go to question ${i + 1}${isAnswered ? " (answered)" : " (not answered)"}${i === currentIndex ? ", current question" : ""}`}
              aria-current={i === currentIndex ? "true" : undefined}
              className={`w-9 h-9 rounded-xl text-sm font-extrabold border-2 transition-all ${
                i === currentIndex
                  ? "border-brand-500 bg-brand-gradient text-white"
                  : isAnswered
                  ? "border-feather bg-feather/15 text-featherDark"
                  : "border-border bg-surfaceAlt text-inkSoft"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <p className="text-center text-inkSoft text-xs mt-3 hidden sm:block">
        Tip: press <kbd className="px-1.5 py-0.5 rounded bg-black/10 font-bold">1</kbd>–
        <kbd className="px-1.5 py-0.5 rounded bg-black/10 font-bold">4</kbd> to answer, and{" "}
        <kbd className="px-1.5 py-0.5 rounded bg-black/10 font-bold">←</kbd>
        <kbd className="px-1.5 py-0.5 rounded bg-black/10 font-bold">→</kbd> to move between questions
      </p>
      <p className="text-center text-inkSoft text-xs mt-3 sm:hidden">
        👆 Swipe left/right on the question card to move between questions
      </p>

      <AppTour steps={EXAM_TOUR_STEPS} active={tourActive} onEnd={() => setTourActive(false)} page="exam" />
    </PageShell>
  );
}
