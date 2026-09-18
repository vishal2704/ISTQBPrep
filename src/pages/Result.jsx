import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import AppTour from "../components/AppTour";
import { StorageService } from "../services/storageService";
import { useExam } from "../context/ExamContext";
import { fireConfetti } from "../utils/confetti";
import { OnboardingService } from "../services/onboardingService";
import AchievementCelebration from "../components/AchievementCelebration";
import { getChapterHeaderLabel } from "../data/loReference";

const RESULT_TOUR_STEPS = [
  { selector: "[data-tour=result-score]", title: "Your score at a glance", text: "See your accuracy, correct/incorrect/unanswered breakdown, and time taken here." },
  { selector: "[data-tour=result-tabs]", title: "Dig deeper", text: "Switch between Performance, Question Review, and Key Takeaways to understand exactly how you did." },
  { selector: "[data-tour=result-next]", title: "Keep going", text: "Retry what you missed, practice a weak chapter, or head back to your dashboard." },
];

function isRealChapterId(chapter) {
  return /^chapter\d/.test(chapter || "") || /^tm\d/.test(chapter || "") || chapter === "mock-foundation" || chapter === "mock-tm";
}

function chapterLaunchPath(chapter) {
  const program = chapter?.startsWith("tm") ? "test-manager" : "foundation";
  return `/${program}/chapter/${chapter}`;
}

function dashboardPath(chapter) {
  return chapter?.startsWith("tm") || chapter === "mock-tm" ? "/test-manager" : "/foundation";
}

function getExamLabel(chapter) {
  if (!chapter) return "Practice Session";
  if (chapter === "mock-foundation") return "CTFL Foundation · Mock Exam";
  if (chapter === "mock-tm") return "Test Manager · Mock Exam";
  if (/^chapter\d/.test(chapter)) return `CTFL Foundation · ${getChapterHeaderLabel(chapter)}`;
  if (/^tm\d/.test(chapter)) return `Test Manager · ${getChapterHeaderLabel(chapter)}`;
  if (chapter === "Bookmarked Questions") return "Bookmarked Questions";
  if (chapter.startsWith("Retry:") || chapter === "wrong") return "Focused Revision";
  return chapter;
}

function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function ScoreRing({ score }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = score >= 70 ? "#58CC02" : score >= 40 ? "#1CB0F6" : "#FF9600";

  return (
    <svg width="128" height="128" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r={r} stroke="var(--border)" strokeWidth="12" fill="none" />
      <circle
        cx="64"
        cy="64"
        r={r}
        stroke={color}
        strokeWidth="12"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 64 64)"
        style={{ transition: "stroke-dashoffset .6s ease" }}
      />
      <text x="64" y="72" textAnchor="middle" fontSize="28" fontWeight="800" fill="var(--ink)">
        {score}%
      </text>
    </svg>
  );
}

function StatTile({ label, value, accent }) {
  return (
    <div className="text-center px-2">
      <div className={`font-heading text-xl font-extrabold ${accent || ""}`}>{value}</div>
      <div className="text-inkSoft text-[11px] font-semibold mt-0.5">{label}</div>
    </div>
  );
}

function DistributionBar({ correct, incorrect, unanswered, total }) {
  if (!total) return null;
  const pct = (n) => (n / total) * 100;
  return (
    <div>
      <div className="flex h-2.5 rounded-full overflow-hidden bg-black/10">
        {correct > 0 && <div style={{ width: `${pct(correct)}%` }} className="bg-feather" />}
        {incorrect > 0 && <div style={{ width: `${pct(incorrect)}%` }} className="bg-cardinal" />}
        {unanswered > 0 && <div style={{ width: `${pct(unanswered)}%` }} className="bg-border" />}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-inkSoft mt-2">
        <span><span className="inline-block w-2 h-2 rounded-full bg-feather mr-1.5" />Correct {correct}</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-cardinal mr-1.5" />Incorrect {incorrect}</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-border mr-1.5" />Unanswered {unanswered}</span>
      </div>
    </div>
  );
}

function ChapterBreakdown({ byChapter }) {
  const entries = Object.entries(byChapter || {});
  if (entries.length <= 1) return null;

  return (
    <div>
      <h4 className="font-heading font-bold text-sm mb-3">Chapter-wise performance</h4>
      <div className="space-y-3">
        {entries.map(([chapter, s]) => {
          const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
          return (
            <div key={chapter}>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="truncate">{getChapterHeaderLabel(chapter)}</span>
                <span className="text-inkSoft shrink-0 ml-2">{s.correct}/{s.total}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${pct >= 70 ? "bg-feather" : pct >= 40 ? "bg-sky" : "bg-fox"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DifficultyBreakdown({ byDifficulty }) {
  const order = ["easy", "medium", "hard"];
  const colors = { easy: "green", medium: "blue", hard: "plum" };

  return (
    <div>
      <h4 className="font-heading font-bold text-sm mb-3">By difficulty</h4>
      <div className="grid grid-cols-3 gap-3">
        {order.map((d) => {
          const s = (byDifficulty || {})[d] || { correct: 0, total: 0 };
          const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
          return (
            <div key={d} className="text-center p-3 rounded-xl bg-black/[0.03]">
              <Badge color={colors[d]}>{d}</Badge>
              <div className="font-heading text-lg font-extrabold mt-1.5">{s.total ? `${pct}%` : "—"}</div>
              <div className="text-inkSoft text-[11px]">{s.correct}/{s.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuestionDetailRow({ d, index }) {
  const [open, setOpen] = useState(false);
  const statusColor = d.isCorrect ? "border-feather/40 bg-feather/5" : !d.wasAnswered ? "border-border bg-black/[0.02]" : "border-cardinal/40 bg-cardinal/5";
  const icon = d.isCorrect ? "✅" : !d.wasAnswered ? "⭘" : "❌";

  return (
    <div className={`rounded-2xl border-2 p-4 ${statusColor}`}>
      <button className="w-full text-left flex items-start gap-3" onClick={() => setOpen((o) => !o)}>
        <span className="text-lg shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm">
            Q{index + 1}. {d.question}
          </div>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            <Badge color="gray">{getChapterHeaderLabel(d.chapter)}</Badge>
            <Badge color={d.difficulty === "hard" ? "plum" : d.difficulty === "medium" ? "blue" : "green"}>
              {d.difficulty}
            </Badge>
            {d.bookmarked && <Badge color="gold">⭐ Bookmarked</Badge>}
          </div>
        </div>
        <span className="text-inkSoft shrink-0">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-3 pl-8 space-y-2 text-sm">
          <div>
            <span className="font-bold text-inkSoft">Your answer: </span>
            {d.wasAnswered ? (
              <span className={d.isCorrect ? "text-featherDark font-semibold" : "text-cardinalDark font-semibold"}>
                {d.userAnswer}
              </span>
            ) : (
              <span className="text-inkSoft italic">Not answered</span>
            )}
          </div>
          {!d.isCorrect && (
            <div>
              <span className="font-bold text-inkSoft">Correct answer: </span>
              <span className="text-featherDark font-semibold">{d.correctAnswer}</span>
            </div>
          )}
          {d.explanation && (
            <div className="bg-black/5 rounded-xl p-3 text-ink">
              <span className="font-bold">💡 Explanation: </span>
              {d.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "performance", label: "Performance" },
  { id: "review", label: "Question Review" },
  { id: "takeaways", label: "Key Takeaways" },
];

function ResultBreakdown({ result, onBack, isFresh = false }) {
  const navigate = useNavigate();
  const { startExam, startRetry } = useExam();
  const [tab, setTab] = useState("performance");
  const [filter, setFilter] = useState("all"); // all | wrong | correct | unanswered | bookmarked
  const [tourActive, setTourActive] = useState(false);

  useEffect(() => {
    if (!OnboardingService.hasSeenTour("result")) {
      const t = setTimeout(() => setTourActive(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  const details = useMemo(() => result.details || [], [result.details]);
  const unansweredCount = details.filter((d) => !d.wasAnswered).length;
  const incorrectCount = details.filter((d) => d.wasAnswered && !d.isCorrect).length;
  const duration = formatDuration(result.durationSeconds);
  const pass = result.score >= 70;

  const filtered = useMemo(() => {
    if (filter === "wrong") return details.filter((d) => d.wasAnswered && !d.isCorrect);
    if (filter === "correct") return details.filter((d) => d.isCorrect);
    if (filter === "unanswered") return details.filter((d) => !d.wasAnswered);
    if (filter === "bookmarked") return details.filter((d) => d.bookmarked);
    return details;
  }, [details, filter]);

  const weakestChapter = useMemo(() => {
    const entries = Object.entries(result.byChapter || {}).filter(([, s]) => s.total >= 2);
    if (entries.length < 2) return null;
    return entries
      .map(([chapter, s]) => ({ chapter, pct: s.total ? Math.round((s.correct / s.total) * 100) : 0 }))
      .sort((a, b) => a.pct - b.pct)[0];
  }, [result]);

  const takeaways = useMemo(() => {
    const items = [];
    if (result.score >= 90) items.push({ icon: "🎯", text: "Excellent accuracy — this material looks exam-ready." });
    else if (result.score >= 70) items.push({ icon: "👍", text: "Solid score. Reviewing the incorrect answers below will close the remaining gap." });
    else items.push({ icon: "📘", text: "This is a good area to spend more focused practice time before your next attempt." });

    if (incorrectCount > 0) {
      items.push({ icon: "🔁", text: `${incorrectCount} question${incorrectCount > 1 ? "s" : ""} answered incorrectly — reviewing these is the fastest way to improve.` });
    }
    if (unansweredCount > 0) {
      items.push({ icon: "⏳", text: `${unansweredCount} question${unansweredCount > 1 ? "s" : ""} left unanswered — practicing under timed conditions can help with pacing.` });
    }
    if (weakestChapter) {
      items.push({ icon: "📊", text: `Weakest area: ${getChapterHeaderLabel(weakestChapter.chapter)} at ${weakestChapter.pct}% — worth focused practice.` });
    }
    return items;
  }, [result.score, incorrectCount, unansweredCount, weakestChapter]);

  function retryWrong() {
    if (!result.wrongIds?.length) return;
    startRetry(result.wrongIds, `Retry: ${result.chapter}`);
    navigate("/exam");
  }

  function practiceAgain(mode) {
    startExam(result.chapter, mode);
    navigate("/exam");
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        {onBack ? (
          <button onClick={onBack} className="text-sm font-bold text-accentText hover:underline">
            ← Back to all attempts
          </button>
        ) : (
          <button onClick={() => navigate(dashboardPath(result.chapter))} className="text-sm font-bold text-accentText hover:underline">
            ← Back to Practice
          </button>
        )}
        <button
          onClick={() => setTourActive(true)}
          className="text-sm font-bold text-inkSoft hover:text-ink w-7 h-7 rounded-full border-2 border-border grid place-items-center shrink-0"
          title="Show help for this page"
          aria-label="Show a guided walkthrough of the results page"
        >
          ?
        </button>
      </div>

      <h1 className="font-heading text-2xl font-extrabold mb-1">Practice Result</h1>
      <p className="text-inkSoft text-sm mb-5">
        {pass ? "Nice work — here's the full breakdown." : "Here's the full breakdown — see what to focus on next."}
      </p>

      {isFresh && <AchievementCelebration result={result} />}

      {/* ===== Score summary — the primary visual focus ===== */}
      <Card data-tour="result-score" className="mb-4">
        <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="flex justify-center">
            <ScoreRing score={result.score} />
          </div>
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-4">
              <StatTile label="Correct" value={result.correct} accent="text-featherDark" />
              <StatTile label="Incorrect" value={incorrectCount} accent="text-cardinalDark" />
              <StatTile label="Unanswered" value={unansweredCount} accent="text-inkSoft" />
              <StatTile label="Time Taken" value={duration || "—"} />
              <StatTile label="Total Questions" value={result.total} />
            </div>
          </div>
        </div>
      </Card>

      {/* ===== Exam details — a slim metadata strip, not a card ===== */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-inkSoft mb-6 px-1">
        <span className="font-bold text-ink">{getExamLabel(result.chapter)}</span>
        <span>·</span>
        <span>{result.timed ? "Timed Exam" : "Practice"}</span>
        <span>·</span>
        <span>{result.total} questions</span>
        <span>·</span>
        <span>{new Date(result.date).toLocaleString()}</span>
        {result.bookmarkCount > 0 && (
          <>
            <span>·</span>
            <span>⭐ {result.bookmarkCount} bookmarked</span>
          </>
        )}
      </div>

      {/* ===== Tabs ===== */}
      <div data-tour="result-tabs" className="flex gap-1.5 mb-5 overflow-x-auto no-scrollbar border-b border-border">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 px-4 py-2.5 text-sm font-bold border-b-2 -mb-px transition-colors ${
              tab === t.id ? "border-accentText text-accentText" : "border-transparent text-inkSoft hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "performance" && (
        <Card className="mb-6 space-y-6">
          <div>
            <h4 className="font-heading font-bold text-sm mb-3">Overall score</h4>
            <DistributionBar correct={result.correct} incorrect={incorrectCount} unanswered={unansweredCount} total={result.total} />
          </div>
          <ChapterBreakdown byChapter={result.byChapter} />
          <DifficultyBreakdown byDifficulty={result.byDifficulty} />
        </Card>
      )}

      {tab === "review" && (
        <Card className="mb-6">
          <div className="flex gap-2 flex-wrap mb-4 overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: `All (${details.length})` },
              { id: "correct", label: `Correct (${details.filter((d) => d.isCorrect).length})` },
              { id: "wrong", label: `Incorrect (${incorrectCount})` },
              { id: "unanswered", label: `Unanswered (${unansweredCount})` },
              { id: "bookmarked", label: `⭐ Bookmarked (${details.filter((d) => d.bookmarked).length})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 text-xs font-extrabold px-3 py-1.5 rounded-full border-2 transition-all ${
                  filter === f.id
                    ? "border-accentText bg-accentText/10 text-accentText"
                    : "border-border bg-surfaceAlt text-inkSoft hover:border-accentText/50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <p className="text-inkSoft text-sm text-center py-4">Nothing here.</p>
            ) : (
              filtered.map((d, i) => <QuestionDetailRow key={d.id + i} d={d} index={details.indexOf(d)} />)
            )}
          </div>
        </Card>
      )}

      {tab === "takeaways" && (
        <Card className="mb-6">
          <h4 className="font-heading font-bold text-sm mb-4">What this result tells you</h4>
          <div className="space-y-3">
            {takeaways.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/[0.03]">
                <span className="text-lg shrink-0">{t.icon}</span>
                <span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ===== Next steps ===== */}
      <div data-tour="result-next" className="flex flex-wrap gap-3">
        {incorrectCount > 0 && (
          <Button variant="plum" onClick={retryWrong}>
            🔁 Retry Incorrect
          </Button>
        )}
        {weakestChapter && (
          <Button variant="outline" onClick={() => navigate(chapterLaunchPath(weakestChapter.chapter))}>
            📘 Practice Weak Chapter
          </Button>
        )}
        {isRealChapterId(result.chapter) && (
          <>
            <Button variant="outline" onClick={() => practiceAgain("practice")}>
              🔄 Practice Again
            </Button>
            {!result.timed && (
              <Button variant="outline" onClick={() => practiceAgain("timed")}>
                ⏱️ Start Timed Exam
              </Button>
            )}
          </>
        )}
        <Button variant="brand" onClick={() => navigate(dashboardPath(result.chapter))}>
          🏠 Return to Dashboard
        </Button>
      </div>

      <AppTour steps={RESULT_TOUR_STEPS} active={tourActive} onEnd={() => setTourActive(false)} page="result" />
    </>
  );
}

export default function Result() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const all = StorageService.loadResults();
    setHistory(all);

    if (id) {
      setSelected(all.find((r) => r.id === id) || null);
    } else if (state?.result) {
      setSelected(state.result);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (state?.result?.score >= 70) fireConfetti();
    // eslint-disable-next-line
  }, []);

  return (
    <PageShell bg="result">
      {selected ? (
        <ResultBreakdown result={selected} onBack={!id ? null : () => navigate("/results")} isFresh={!id} />
      ) : (
        <>
          <h1 className="font-heading text-2xl font-extrabold mb-6">📊 Past Attempts</h1>
          <Card>
            {history.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">🤔</div>
                <p className="text-inkSoft mb-4">No results yet. Finish an exam to see it here.</p>
                <Button variant="brand" onClick={() => navigate("/foundation")}>Back to Dashboard</Button>
              </div>
            ) : (
              <div className="space-y-1.5">
                {history.slice(0, 30).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => navigate(`/result/${r.id}`)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-colors text-left"
                  >
                    <span
                      className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center text-sm font-extrabold ${
                        r.score >= 70 ? "bg-feather/15 text-featherDark" : "bg-brand-500/15 text-accentText"
                      }`}
                    >
                      {r.score}%
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm truncate">{getExamLabel(r.chapter)}</div>
                      <div className="text-inkSoft text-xs">
                        {new Date(r.date).toLocaleDateString()} · {r.timed ? "Timed" : "Practice"}
                        {r.durationSeconds ? ` · ${formatDuration(r.durationSeconds)}` : ""}
                      </div>
                    </div>
                    <span className="text-inkSoft shrink-0">→</span>
                  </button>
                ))}
              </div>
            )}
          </Card>

          {history.length > 0 && (
            <div className="text-center mt-4">
              <button
                className="text-inkSoft text-sm font-bold hover:text-ink hover:underline"
                onClick={() => {
                  StorageService.clearResults();
                  setHistory([]);
                }}
              >
                🗑️ Clear History
              </button>
              <p className="text-inkSoft text-xs mt-1.5">
                Only clears your attempt history. Your badges, best score, and average stay put.
              </p>
            </div>
          )}
        </>
      )}
    </PageShell>
  );
}
