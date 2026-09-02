import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { questionBank } from "../data/questionBank";
import { StorageService } from "../services/storageService";

const CHAPTER_LABELS = {
  chapter1: "Fundamentals of Testing",
  chapter2: "Testing Throughout Lifecycle",
  chapter3: "Static Testing",
  chapter4: "Test Analysis & Design",
  chapter5: "Managing Test Activities",
  chapter6: "Test Tools",
  tm1: "Test Manager Fundamentals",
  tm2: "Test Management Documentation",
  tm3: "Planning, Monitoring & Control",
  tm4: "Risk Management",
  tm5: "Defect Management",
  tm6: "Improving the Test Process",
};

function formatDuration(seconds) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  return `${m}m`;
}

export default function DashboardOverview({ results, program = "foundation" }) {
  const navigate = useNavigate();
  const programQuestions = useMemo(
    () => questionBank.filter((q) => (q.program || "foundation") === program),
    [program]
  );

  const stats = useMemo(() => {
    const mockCount = results.filter((r) => r.chapter === `mock-${program}`).length;
    const avg =
      results.length > 0 ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length) : null;
    const best = results.length > 0 ? Math.max(...results.map((r) => r.score)) : null;

    const exposure = StorageService.loadQuestionExposure();
    const programIds = new Set(programQuestions.map((q) => q.id));
    const seenCount = Object.keys(exposure).filter((id) => exposure[id] > 0 && programIds.has(id)).length;
    const coverage = programQuestions.length ? Math.round((seenCount / programQuestions.length) * 100) : 0;

    const byChapter = {};
    results.forEach((r) => {
      if (!r.byChapter) return;
      Object.entries(r.byChapter).forEach(([ch, s]) => {
        if (!byChapter[ch]) byChapter[ch] = { correct: 0, total: 0 };
        byChapter[ch].correct += s.correct;
        byChapter[ch].total += s.total;
      });
    });
    const weakAreas = Object.entries(byChapter)
      .map(([ch, s]) => ({ chapter: ch, pct: s.total ? Math.round((s.correct / s.total) * 100) : 0, total: s.total }))
      .filter((w) => w.total >= 3)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);

    const recent = [...results].slice(0, 4);

    let nextGoal;
    if (results.length === 0) {
      nextGoal = { text: "Finish your first practice set", progress: 0 };
    } else if (best !== null && best < 90) {
      nextGoal = { text: "Score 90%+ on a mock exam", progress: Math.min(100, Math.round((best / 90) * 100)) };
    } else {
      nextGoal = { text: "Keep your streak alive today", progress: 100 };
    }

    return { mockCount, avg, best, coverage, weakAreas, recent, nextGoal, totalAttempts: results.length };
  }, [results, program, programQuestions]);

  const hasData = stats.totalAttempts > 0;

  return (
    <div className="card-pop shadow-elevated p-5 md:p-6 mb-6 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-gradient opacity-[0.06] rounded-full blur-2xl" />

      <div className="flex items-center justify-between mb-5 relative">
        <h2 className="font-heading font-extrabold text-lg">📊 Your Progress</h2>
        {hasData && (
          <button
            onClick={() => navigate("/results")}
            className="text-xs font-extrabold text-brand-600 hover:underline"
          >
            View all results →
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 relative">
        {[
          { label: "Practice Sessions", value: stats.totalAttempts, accent: "text-ink" },
          { label: "Average Score", value: stats.avg !== null ? `${stats.avg}%` : "—", accent: "text-brand-600" },
          { label: "Best Score", value: stats.best !== null ? `${stats.best}%` : "—", accent: "text-featherDark" },
          { label: "Total Questions", value: programQuestions.length, accent: "text-plumDark" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-black/[0.03] p-3.5">
            <div className={`font-heading text-xl font-extrabold ${s.accent}`}>{s.value}</div>
            <div className="text-inkSoft text-[11px] font-semibold mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 relative">
        {/* Overall progress ring */}
        <div className="rounded-2xl border border-border p-4 flex items-center gap-4">
          <svg width="72" height="72" viewBox="0 0 72 72" className="shrink-0">
            <circle cx="36" cy="36" r="30" stroke="var(--border)" strokeWidth="8" fill="none" />
            <circle
              cx="36"
              cy="36"
              r="30"
              stroke="url(#dashGrad)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={2 * Math.PI * 30}
              strokeDashoffset={2 * Math.PI * 30 * (1 - stats.coverage / 100)}
              strokeLinecap="round"
              transform="rotate(-90 36 36)"
              style={{ transition: "stroke-dashoffset .6s ease" }}
            />
            <defs>
              <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <text x="36" y="41" textAnchor="middle" fontSize="16" fontWeight="800" fill="var(--ink)">
              {stats.coverage}%
            </text>
          </svg>
          <div>
            <div className="font-heading font-extrabold text-sm">Question Bank Coverage</div>
            <div className="text-inkSoft text-xs mt-0.5">
              You've seen {stats.coverage}% of all {programQuestions.length} questions at least once.
            </div>
          </div>
        </div>

        {/* Weak areas */}
        <div className="rounded-2xl border border-border p-4">
          <div className="font-heading font-extrabold text-sm mb-3">Weak Areas</div>
          {stats.weakAreas.length === 0 ? (
            <p className="text-inkSoft text-xs">
              {hasData ? "Not enough attempts per chapter yet to spot weak areas." : "Practice a few chapters to see this."}
            </p>
          ) : (
            <div className="space-y-2.5">
              {stats.weakAreas.map((w) => (
                <div key={w.chapter}>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="truncate">{CHAPTER_LABELS[w.chapter] || w.chapter}</span>
                    <span className={w.pct < 50 ? "text-cardinalDark" : "text-inkSoft"}>{w.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${w.pct < 50 ? "bg-fox" : "bg-sky"}`}
                      style={{ width: `${w.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 relative">
        {/* Recent tests */}
        <div className="rounded-2xl border border-border p-4">
          <div className="font-heading font-extrabold text-sm mb-3">Recent Attempts</div>
          {stats.recent.length === 0 ? (
            <p className="text-inkSoft text-xs">Nothing yet — your first attempt will show up here.</p>
          ) : (
            <div className="space-y-1">
              {stats.recent.map((r) => (
                <button
                  key={r.id}
                  onClick={() => navigate(`/result/${r.id}`)}
                  className="w-full flex items-center justify-between text-xs py-2 px-2 -mx-2 rounded-lg hover:bg-black/5 transition-colors text-left"
                >
                  <span className="font-bold truncate flex-1">{r.chapter}</span>
                  <span className="text-inkSoft mx-2 shrink-0">
                    {formatDuration(r.durationSeconds) || "—"}
                  </span>
                  <span
                    className={`font-extrabold shrink-0 ${r.score >= 70 ? "text-featherDark" : "text-inkSoft"}`}
                  >
                    {r.score}%
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Next goal */}
        <div className="rounded-2xl border border-border p-4 bg-brand-gradient-soft">
          <div className="font-heading font-extrabold text-sm mb-2">🎯 Next Goal</div>
          <div className="text-sm font-bold mb-2">{stats.nextGoal.text}</div>
          <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
            <div
              className="h-full bg-brand-gradient rounded-full transition-all duration-500"
              style={{ width: `${stats.nextGoal.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
