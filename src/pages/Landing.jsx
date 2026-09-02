import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SettingsModal from "../components/SettingsModal";
import Badge from "../components/Badge";
import { useTheme } from "../context/ThemeContext";
import { questionBank } from "../data/questionBank";

// Grouped to mirror the real ISTQB scheme (Core / Agile / Specialist streams,
// each with Foundation → Advanced → Expert levels) — organized as our own
// card layout, not a copy of ISTQB's official pathway diagram.
const STREAMS = [
  {
    id: "core",
    label: "Core",
    blurb: "The main testing certification track",
    programs: [
      { id: "foundation", level: "Foundation", title: "CTFL — Foundation Level", emoji: "🧪", color: "bg-brand-500/15", status: "active", to: "/foundation", detail: "6 chapters · 437 questions" },
      { id: "test-analyst", level: "Advanced", title: "Test Analyst", emoji: "🔬", color: "bg-plum/10", status: "soon" },
      { id: "technical-test-analyst", level: "Advanced", title: "Technical Test Analyst", emoji: "🧠", color: "bg-sky/10", status: "soon" },
      { id: "test-manager", level: "Advanced", title: "Test Manager", emoji: "📋", color: "bg-mint/15", status: "active", to: "/test-manager", detail: "6 chapters · 61 questions" },
      { id: "expert-tm", level: "Expert", title: "Test Management (Strategic/Operational)", emoji: "🏛️", color: "bg-brand-500/15", status: "soon" },
      { id: "expert-improve", level: "Expert", title: "Improving the Test Process", emoji: "📈", color: "bg-plum/10", status: "soon" },
    ],
  },
  {
    id: "agile",
    label: "Agile",
    blurb: "Testing within Agile & Scrum teams",
    programs: [
      { id: "agile-tester", level: "Foundation", title: "Agile Tester", emoji: "🔄", color: "bg-feather/15", status: "soon" },
      { id: "agile-technical-tester", level: "Advanced", title: "Agile Technical Tester", emoji: "⚙️", color: "bg-sky/10", status: "soon" },
      { id: "agile-leadership", level: "Advanced", title: "Agile Test Leadership at Scale", emoji: "🧭", color: "bg-mint/15", status: "soon" },
    ],
  },
  {
    id: "specialist",
    label: "Specialist",
    blurb: "Focused, single-topic certifications",
    programs: [
      { id: "automation", level: "Specialist", title: "Test Automation Engineer", emoji: "🛠️", color: "bg-sky/10", status: "soon" },
      { id: "performance", level: "Specialist", title: "Performance Testing", emoji: "⚡", color: "bg-feather/10", status: "soon" },
      { id: "security", level: "Specialist", title: "Security Tester", emoji: "🔒", color: "bg-plum/10", status: "soon" },
      { id: "ai-testing", level: "Specialist", title: "AI Testing", emoji: "🤖", color: "bg-brand-500/15", status: "soon" },
      { id: "usability", level: "Specialist", title: "Usability Testing", emoji: "🖱️", color: "bg-bee/15", status: "soon" },
    ],
    footnote: "Plus mobile, model-based, gambling/game, and automotive specialist tracks — more coming.",
  },
];

const ALL_PROGRAMS = STREAMS.flatMap((s) => s.programs.map((p) => ({ ...p, stream: s.label })));

const FEATURES = [
  {
    icon: "📝",
    color: "bg-brand-500/15 text-brand-600",
    title: "Real Exam Experience",
    text: "60 minutes, 40 questions, same pattern as the real ISTQB exam with a timer and instant results.",
  },
  {
    icon: "📖",
    color: "bg-mint/15 text-mintDark",
    title: "Chapter-Wise Practice",
    text: "Practice questions by chapter from the official syllabus to strengthen concepts one topic at a time.",
  },
  {
    icon: "🧩",
    color: "bg-plum/15 text-plumDark",
    title: "4 Question Types",
    text: "Standard, combination, matching & scenario-based questions — not just single-choice recall.",
  },
  {
    icon: "⭐",
    color: "bg-bee/20 text-beeDark",
    title: "Bookmark & Review",
    text: "Bookmark tricky questions, review wrong answers, and get explanations for every question.",
  },
  {
    icon: "💡",
    color: "bg-sky/15 text-skyDark",
    title: "Hints When Stuck",
    text: "Optional hints in practice mode nudge you toward the concept without giving away the answer.",
  },
  {
    icon: "🔥",
    color: "bg-fox/15 text-foxDark",
    title: "Streaks & Readiness",
    text: "Daily streaks, focused revision of weak spots, and an exam-readiness estimate as you go.",
  },
];

function HeroBlobs() {
  return (
    <>
      <div className="blob w-72 h-72 bg-brand-500 -top-10 -left-10 animate-blob" />
      <div className="blob w-80 h-80 bg-sky -top-20 right-10 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="blob w-64 h-64 bg-violet-500 bottom-0 left-1/3 animate-blob" style={{ animationDelay: "4s" }} />
    </>
  );
}

// Small decorative "moving earth" — pure CSS animation (rotation + gentle
// bob + orbiting dot), no heavy 3D library needed.
function OrbitingEarth() {
  return (
    <div
      className="hidden md:block absolute top-10 right-8 lg:right-16 select-none pointer-events-none animate-floaty"
      aria-hidden="true"
    >
      <div className="relative w-20 h-20 lg:w-24 lg:h-24">
        <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-30 blur-xl" />
        <div className="relative w-full h-full rounded-full grid place-items-center text-5xl lg:text-6xl animate-spin-slow drop-shadow-[0_0_18px_rgba(99,102,241,0.5)]">
          🌍
        </div>
        <div className="absolute inset-[-14px] animate-spin-reverse-slow">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky shadow-[0_0_8px_2px_rgba(56,189,248,0.7)]" />
        </div>
        <div className="absolute inset-[-24px] animate-spin-slow" style={{ animationDuration: "18s" }}>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_2px_rgba(167,139,250,0.7)]" />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative glass-panel rounded-3xl p-5 shadow-glow animate-fadeUp" style={{ animationDelay: ".2s" }}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-gradient grid place-items-center text-sm">🛡️</span>
          <span className="text-white font-heading font-extrabold text-sm">ISTQB PRACTICE</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10" />
      </div>

      <div className="text-white/60 text-xs font-bold uppercase tracking-wide mb-2">Your Progress</div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Questions", value: "500+" },
          { label: "Certifications", value: "2" },
          { label: "Question Types", value: "4" },
          { label: "Cost", value: "Free" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-3">
            <div className="text-white font-heading text-xl font-extrabold">{s.value}</div>
            <div className="text-white/50 text-[11px] font-semibold">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-4 mb-4">
        <svg width="64" height="64" viewBox="0 0 64 64" className="shrink-0">
          <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.1)" strokeWidth="7" fill="none" />
          <circle
            cx="32"
            cy="32"
            r="26"
            stroke="url(#heroGrad)"
            strokeWidth="7"
            fill="none"
            strokeDasharray={2 * Math.PI * 26}
            strokeDashoffset={2 * Math.PI * 26 * 0.22}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <div className="text-white font-heading text-lg font-extrabold">Ready when you are</div>
          <div className="text-white/50 text-xs">Every chapter, every mode, unlocked from day one.</div>
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <div className="text-white/60 text-xs font-bold uppercase tracking-wide mb-2">This preview is illustrative</div>
        <div className="text-white/80 text-sm">Sign in isn't required — your real stats appear here after your first practice set.</div>
      </div>
    </div>
  );
}

function ProgramCard({ p, navigate, large = false, compact = false }) {
  const isActive = p.status === "active";

  if (compact) {
    return (
      <button
        onClick={() => navigate(isActive ? p.to : `/preview/${p.id}`)}
        className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-colors hover:bg-black/5 ${
          isActive ? "bg-feather/5" : ""
        }`}
      >
        <div className={`w-9 h-9 rounded-xl ${p.color} grid place-items-center text-base shrink-0`}>{p.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm truncate">{p.title}</div>
        </div>
        {isActive ? <Badge color="green">Available</Badge> : <span className="text-inkSoft text-xs shrink-0">→</span>}
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate(isActive ? p.to : `/preview/${p.id}`)}
      className={`card-pop shadow-card text-left w-full transition-transform hover:-translate-y-1 hover:shadow-elevated ${
        large ? "p-6" : "p-5"
      } ${isActive && large ? "!border-feather/30" : ""}`}
    >
      <div className={`flex items-center gap-3 ${large ? "mb-4" : "mb-3"}`}>
        <div className={`${large ? "w-14 h-14 text-2xl" : "w-11 h-11 text-xl"} rounded-2xl ${p.color} grid place-items-center shrink-0`}>
          {p.emoji}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-inkSoft">{p.level} · {p.stream || ""}</div>
          <h3 className={`font-heading font-extrabold leading-tight ${large ? "text-lg" : "text-sm"}`}>{p.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        {isActive ? <Badge color="green">Available</Badge> : <Badge color="gray">Coming soon</Badge>}
        {p.detail && <span className="text-[11px] text-inkSoft font-semibold">{p.detail}</span>}
      </div>
      <div className="mt-2 text-xs font-extrabold text-brand-600">
        {isActive ? "Start practicing →" : "Preview syllabus →"}
      </div>
    </button>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const { settingsOpen, closeSettings } = useTheme();

  return (
    <div className="min-h-screen bg-surface">
      {/* ============ HERO (always dark, regardless of app theme) ============ */}
      <div className="relative overflow-hidden bg-hero-dark">
        <Header forceDark homePath="/foundation" />
        <HeroBlobs />
        <OrbitingEarth />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 md:pt-16 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-fadeUp">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold mb-6">
                🛡️ ISTQB® Certification Practice
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-5">
                Practice Smarter.
                <br />
                Pass with <span className="text-gradient">Confidence.</span>
              </h1>

              <p className="text-white/60 text-lg mb-7 max-w-lg">
                Real exam experience, chapter-wise practice, hints when you're stuck, and
                in-depth analytics — across multiple ISTQB certifications, completely free.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { icon: "🎯", label: "Exam-like experience" },
                  { icon: "📖", label: "Chapter-wise practice" },
                  { icon: "📊", label: "Detailed analytics" },
                  { icon: "⭐", label: "Bookmark & review" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-white/70 text-xs font-bold">
                    <span>{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/foundation")}
                  className="btn-pop bg-brand-gradient text-white px-6 py-3.5 rounded-2xl font-extrabold shadow-glow hover:brightness-110 transition-all"
                >
                  🚀 Start Practicing Now
                </button>
                <Link
                  to="/blog"
                  className="btn-pop bg-white/5 border border-white/15 text-white px-6 py-3.5 rounded-2xl font-extrabold hover:bg-white/10 transition-all"
                >
                  ▷ Read the Blog
                </Link>
              </div>
            </div>

            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* ============ PROGRAMS (moved above Features) ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <span className="text-brand-600 text-xs font-extrabold uppercase tracking-widest">
            Certification Path
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2">
            Pick Your Certification
          </h2>
          <div className="w-14 h-1 bg-brand-gradient rounded-full mx-auto mt-4" />
        </div>

        {/* Available now — the two real, playable certs get top billing */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-feather" />
          <h3 className="font-heading font-extrabold text-sm uppercase tracking-wide text-inkSoft">
            Available now
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {ALL_PROGRAMS.filter((p) => p.status === "active").map((p) => (
            <ProgramCard key={p.id} p={p} navigate={navigate} large />
          ))}
        </div>

        {/* Full roadmap, organized by the real ISTQB stream structure */}
        <div className="mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-inkSoft" />
          <h3 className="font-heading font-extrabold text-sm uppercase tracking-wide text-inkSoft">
            Full certification roadmap
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {STREAMS.map((stream) => {
            const byLevel = {};
            stream.programs.forEach((p) => {
              (byLevel[p.level] ||= []).push(p);
            });

            return (
              <div key={stream.id} className="card-pop shadow-card p-5">
                <div className="mb-4 pb-4 border-b border-border">
                  <h4 className="font-heading font-extrabold text-lg flex items-center gap-2">
                    {stream.label}
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-inkSoft bg-black/5 px-2 py-0.5 rounded-full">
                      {stream.programs.filter((p) => p.status === "active").length > 0 ? "Active now" : "Roadmap"}
                    </span>
                  </h4>
                  <p className="text-inkSoft text-xs mt-0.5">{stream.blurb}</p>
                </div>

                <div className="space-y-5">
                  {Object.entries(byLevel).map(([level, programs]) => (
                    <div key={level}>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-inkSoft mb-2">
                        {level} Level
                      </div>
                      <div className="space-y-2">
                        {programs.map((p) => (
                          <ProgramCard key={p.id} p={p} navigate={navigate} compact />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {stream.footnote && <p className="text-inkSoft text-[11px] mt-4 italic">{stream.footnote}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ============ FEATURES ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="text-center mb-12">
          <span className="text-brand-600 text-xs font-extrabold uppercase tracking-widest">
            Powerful Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2">
            Everything You Need to Succeed
          </h2>
          <div className="w-14 h-1 bg-brand-gradient rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-pop shadow-elevated p-6 transition-transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl grid place-items-center text-xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="font-heading font-extrabold text-base mb-1.5">{f.title}</h3>
              <p className="text-inkSoft text-sm">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 rounded-3xl border border-border bg-surfaceAlt p-6 shadow-card">
          {[
            { icon: "🎓", value: `${questionBank.length}+`, label: "Practice Questions" },
            { icon: "📜", value: "2", label: "Certifications" },
            { icon: "🧩", value: "4", label: "Question Types" },
            { icon: "🆓", value: "100%", label: "Free, Always" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="font-heading font-extrabold text-lg leading-tight">{s.value}</div>
                <div className="text-inkSoft text-xs font-semibold">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ ABOUT + WHY ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid md:grid-cols-2 gap-6">
        <div className="card-pop shadow-card p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl shrink-0">ℹ️</div>
            <div>
              <h3 className="font-heading font-extrabold text-lg mb-3">
                About the CTFL Foundation Level exam
              </h3>
              <div className="grid grid-cols-1 gap-y-2 text-sm text-inkSoft">
                <div>📝 <span className="font-bold text-ink">40 questions</span>, multiple choice</div>
                <div>⏱️ <span className="font-bold text-ink">60 minutes</span> (75 min if not in your native language)</div>
                <div>✅ <span className="font-bold text-ink">65% pass mark</span> — 26 out of 40 correct</div>
                <div>🎓 No prerequisites — open to anyone</div>
                <div>♾️ Certificate doesn't expire once earned</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-pop shadow-card p-6">
          <h3 className="font-heading font-extrabold text-lg mb-4">Why this app?</h3>
          <div className="space-y-4">
            {[
              { icon: "🎯", title: "Realistic practice", text: "Standard, combination, matching & scenario questions." },
              { icon: "🔥", title: "Stay consistent", text: "Daily streaks and focused revision of weak spots." },
              { icon: "🆓", title: "100% free", text: "No paywalls. Ever. Support us if you'd like to." },
            ].map((w) => (
              <div key={w.title} className="flex items-start gap-3">
                <span className="text-xl">{w.icon}</span>
                <div>
                  <div className="font-bold text-sm">{w.title}</div>
                  <div className="text-inkSoft text-xs">{w.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-inkSoft text-xs">
        Built for learners, not paywalls. · {questionBank.length} questions and counting.
      </footer>

      <SettingsModal open={settingsOpen} onClose={closeSettings} />
    </div>
  );
}
