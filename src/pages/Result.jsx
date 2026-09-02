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

const RESULT_TOUR_STEPS = [
  { selector: "[data-tour=result-score]", title: "Your score at a glance", text: "The ring shows your overall score, plus how long the attempt took." },
  { selector: "[data-tour=result-actions]", title: "Retry just the wrong ones", text: "This button relaunches only the questions you missed — perfect for quick, focused review." },
  { selector: "[data-tour=result-filters]", title: "Filter the review", text: "Switch between all, wrong, correct, or bookmarked questions to review exactly what you need." },
];

function ScoreRing({ score }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = score >= 70 ? "#58CC02" : score >= 40 ? "#1CB0F6" : "#FF9600";

  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle cx="70" cy="70" r={r} stroke="#00000014" strokeWidth="14" fill="none" />
      <circle
        cx="70"
        cy="70"
        r={r}
        stroke={color}
        strokeWidth="14"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        style={{ transition: "stroke-dashoffset .6s ease" }}
      />
      <text x="70" y="78" textAnchor="middle" fontSize="30" fontWeight="800" fill="var(--ink)">
        {score}%
      </text>
    </svg>
  );
}

function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function ChapterBreakdown({ byChapter }) {
  if (!byChapter) return null;
  const entries = Object.entries(byChapter);
  if (entries.length <= 1) return null;

  return (
    <Card className="mb-6 shadow-elevated">
      <h3 className="font-heading font-extrabold text-lg mb-3">📚 By Chapter</h3>
      <div className="space-y-3">
        {entries.map(([chapter, s]) => {
          const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
          return (
            <div key={chapter}>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>{chapter}</span>
                <span className="text-inkSoft">{s.correct}/{s.total}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-black/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${pct >= 70 ? "bg-feather" : pct >= 40 ? "bg-brand-gradient" : "bg-fox"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function DifficultyBreakdown({ byDifficulty }) {
  if (!byDifficulty) return null;
  const order = ["easy", "medium", "hard"];
  const colors = { easy: "green", medium: "blue", hard: "plum" };

  return (
    <Card className="mb-6 shadow-elevated">
      <h3 className="font-heading font-extrabold text-lg mb-3">🎚️ By Difficulty</h3>
      <div className="grid grid-cols-3 gap-3">
        {order.map((d) => {
          const s = byDifficulty[d] || { correct: 0, total: 0 };
          const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
          return (
            <div key={d} className="text-center p-3 rounded-2xl bg-black/5">
              <Badge color={colors[d]}>{d}</Badge>
              <div className="font-heading text-2xl font-extrabold mt-2">{s.total ? `${pct}%` : "—"}</div>
              <div className="text-inkSoft text-xs">{s.correct}/{s.total} correct</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function QuestionDetailRow({ d, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 p-4 ${
        d.isCorrect ? "border-feather/40 bg-feather/5" : "border-cardinal/40 bg-cardinal/5"
      }`}
    >
      <button className="w-full text-left flex items-start gap-3" onClick={() => setOpen((o) => !o)}>
        <span className={`text-xl shrink-0 ${d.isCorrect ? "" : ""}`}>{d.isCorrect ? "✅" : "❌"}</span>
        <div className="flex-1">
          <div className="font-bold text-sm">
            Q{index + 1}. {d.question}
          </div>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            <Badge color="gray">{d.chapter}</Badge>
            <Badge color={d.difficulty === "hard" ? "plum" : d.difficulty === "medium" ? "blue" : "green"}>
              {d.difficulty}
            </Badge>
            {d.bookmarked && <Badge color="gold">⭐ Bookmarked</Badge>}
          </div>
        </div>
        <span className="text-inkSoft">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-3 pl-8 space-y-2 text-sm">
          <div>
            <span className="font-bold text-inkSoft">Your answer: </span>
            <span className={d.isCorrect ? "text-featherDark font-semibold" : "text-cardinalDark font-semibold"}>
              {d.userAnswer}
            </span>
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

function ResultBreakdown({ result, onBack, isFresh = false }) {
  const navigate = useNavigate();
  const { startRetry } = useExam();
  const [filter, setFilter] = useState("all"); // all | wrong | correct | bookmarked
  const [tourActive, setTourActive] = useState(false);
  const pass = result.score >= 70;
  const duration = formatDuration(result.durationSeconds);

  useEffect(() => {
    if (!OnboardingService.hasSeenTour("result")) {
      const t = setTimeout(() => setTourActive(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  const filtered = useMemo(() => {
    if (!result.details) return [];
    if (filter === "wrong") return result.details.filter((d) => !d.isCorrect);
    if (filter === "correct") return result.details.filter((d) => d.isCorrect);
    if (filter === "bookmarked") return result.details.filter((d) => d.bookmarked);
    return result.details;
  }, [result, filter]);

  function retryWrong() {
    if (!result.wrongIds?.length) return;
    startRetry(result.wrongIds, `Retry: ${result.chapter}`);
    navigate("/exam");
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        {onBack ? (
          <button onClick={onBack} className="text-sm font-bold text-brand-600 hover:underline">
            ← Back to all attempts
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={() => setTourActive(true)}
          className="text-sm font-bold text-inkSoft hover:text-ink w-7 h-7 rounded-full border-2 border-border grid place-items-center"
          title="Show help for this page"
          aria-label="Show a guided walkthrough of the results page"
        >
          ?
        </button>
      </div>

      {isFresh && <AchievementCelebration result={result} />}

      <Card data-tour="result-score" className="text-center mb-6 shadow-elevated relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-brand-gradient opacity-[0.06] rounded-full blur-2xl" />
        <div className="flex justify-center mb-3 relative">
          <ScoreRing score={result.score} />
        </div>
        <div className="text-4xl mb-2 relative">{pass ? "🎉" : "💪"}</div>
        <h2 className="font-heading text-2xl font-extrabold mb-1 relative">
          {pass ? "Great job!" : "Keep practicing!"}
        </h2>
        <p className="text-inkSoft mb-4 relative">
          You got {result.correct} of {result.total} correct
          {result.timed ? " on a timed exam" : ""}
          {duration ? ` in ${duration}` : ""}.
        </p>
        <div className="flex justify-center gap-2 flex-wrap relative">
          <Badge color={pass ? "green" : "blue"}>{pass ? "Pass" : "Below target"}</Badge>
          <Badge color="gray">{result.chapter}</Badge>
          <Badge color="gray">{new Date(result.date).toLocaleString()}</Badge>
          {result.bookmarkCount > 0 && <Badge color="gold">⭐ {result.bookmarkCount} bookmarked</Badge>}
        </div>
      </Card>

      <div data-tour="result-actions" className="flex flex-wrap gap-3 justify-center mb-6">
        <Button variant="brand" onClick={() => navigate("/foundation")}>🏠 Back to Dashboard</Button>
        {result.wrongIds?.length > 0 && (
          <Button variant="plum" onClick={retryWrong}>
            🔁 Retry {result.wrongIds.length} Wrong Question{result.wrongIds.length > 1 ? "s" : ""}
          </Button>
        )}
      </div>

      <ChapterBreakdown byChapter={result.byChapter} />
      <DifficultyBreakdown byDifficulty={result.byDifficulty} />

      {result.details?.length > 0 && (
        <Card className="shadow-elevated">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h3 className="font-heading font-extrabold text-lg">🔍 Question-by-Question Review</h3>
            <div data-tour="result-filters" className="flex gap-2 flex-wrap">
              {[
                { id: "all", label: `All (${result.details.length})` },
                { id: "wrong", label: `Wrong (${result.details.filter((d) => !d.isCorrect).length})` },
                { id: "correct", label: `Correct (${result.details.filter((d) => d.isCorrect).length})` },
                { id: "bookmarked", label: `⭐ Bookmarked (${result.details.filter((d) => d.bookmarked).length})` },
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
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <p className="text-inkSoft text-sm text-center py-4">Nothing here.</p>
            ) : (
              filtered.map((d, i) => <QuestionDetailRow key={d.id + i} d={d} index={result.details.indexOf(d)} />)
            )}
          </div>
        </Card>
      )}

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
          <Card className="shadow-elevated">
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
                        r.score >= 70 ? "bg-feather/15 text-featherDark" : "bg-brand-500/15 text-brand-600"
                      }`}
                    >
                      {r.score}%
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm truncate">{r.chapter}</div>
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
            </div>
          )}
        </>
      )}
    </PageShell>
  );
}
