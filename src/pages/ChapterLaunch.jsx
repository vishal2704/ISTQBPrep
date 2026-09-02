import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import { useExam } from "../context/ExamContext";
import { questionBank } from "../data/questionBank";
import { computeStandardCount } from "../services/questionUtils";

const TITLES = {
  chapter1: "Chapter 1 – Fundamentals of Testing",
  chapter2: "Chapter 2 – Testing Throughout Lifecycle",
  chapter3: "Chapter 3 – Static Testing",
  chapter4: "Chapter 4 – Test Analysis & Design",
  chapter5: "Chapter 5 – Managing Test Activities",
  chapter6: "Chapter 6 – Test Tools",
  tm1: "Test Manager Fundamentals",
  tm2: "Test Management Documentation",
  tm3: "Test Planning, Monitoring & Control",
  tm4: "Risk Management",
  tm5: "Defect Management",
  tm6: "Improving the Test Process",
};

const EMOJI = {
  chapter1: "🧪", chapter2: "🔄", chapter3: "🔍", chapter4: "🎯", chapter5: "📋", chapter6: "🛠️",
  tm1: "🧑‍💼", tm2: "📄", tm3: "📆", tm4: "⚠️", tm5: "🐞", tm6: "📈",
};

export default function ChapterLaunch() {
  const { chapterId } = useParams();
  const [mode, setMode] = useState("practice");
  const [countChoice, setCountChoice] = useState("standard");
  const { startExam } = useExam();
  const navigate = useNavigate();
  const isTM = chapterId?.startsWith("tm");
  const homePath = isTM ? "/test-manager" : "/foundation";

  const poolSize = useMemo(
    () => questionBank.filter((q) => q.chapter === chapterId).length,
    [chapterId]
  );
  const standardCount = useMemo(
    () => computeStandardCount(chapterId, poolSize),
    [chapterId, poolSize]
  );

  const countOptions = [
    { id: "standard", label: "Standard", detail: `${standardCount} questions — grows as you practice` },
    { id: "5", label: "5", detail: "Quick round" },
    { id: "10", label: "10", detail: "Short session" },
    { id: "20", label: "20", detail: "Solid session" },
    { id: "all", label: "All", detail: `${poolSize} questions — everything in this chapter` },
  ].filter((o) => o.id === "standard" || o.id === "all" || Number(o.id) < poolSize);

  function launch() {
    startExam(chapterId, mode, countChoice);
    navigate("/exam");
  }

  return (
    <PageShell bg="exam" homePath={homePath}>
      <Card className="max-w-2xl mx-auto text-center shadow-elevated relative overflow-hidden">
        <div className="absolute -top-14 -right-14 w-48 h-48 bg-brand-gradient opacity-[0.08] rounded-full blur-2xl" />

        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm relative">
          {EMOJI[chapterId] || "📘"}
        </div>
        <h1 className="font-heading text-2xl font-extrabold mb-1 relative">
          {TITLES[chapterId] || chapterId}
        </h1>
        <p className="text-inkSoft mb-7 relative">Select how you want to study</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-7 relative">
          <button
            onClick={() => setMode("practice")}
            className={`p-5 rounded-2xl border-2 text-left transition-all ${
              mode === "practice" ? "border-brand-500 bg-brand-500/15 shadow-glowSm" : "border-border hover:border-brand-400"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-feather/15 grid place-items-center text-lg mb-2">📖</div>
            <div className="font-heading font-extrabold">Practice Mode</div>
            <div className="text-inkSoft text-sm mt-1">
              Instant feedback, hints, and explanations after every question. No timer.
            </div>
          </button>

          <button
            onClick={() => setMode("timed")}
            className={`p-5 rounded-2xl border-2 text-left transition-all ${
              mode === "timed" ? "border-plum bg-plum/10 shadow-glowSm" : "border-border hover:border-plum/50"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-plum/15 grid place-items-center text-lg mb-2">⏱️</div>
            <div className="font-heading font-extrabold">Timed Exam Mode</div>
            <div className="text-inkSoft text-sm mt-1">
              Simulates the real exam. Feedback only at the end.
            </div>
          </button>
        </div>

        <div className="text-left mb-7 relative">
          <div className="font-heading font-extrabold text-sm mb-3 text-center">
            How many questions?
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {countOptions.map((o) => (
              <button
                key={o.id}
                onClick={() => setCountChoice(o.id)}
                title={o.detail}
                className={`px-4 py-2.5 rounded-2xl border-2 text-sm font-extrabold transition-all ${
                  countChoice === o.id
                    ? "border-transparent bg-brand-gradient text-white shadow-glowSm"
                    : "border-border bg-surfaceAlt text-ink hover:border-brand-400"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <p className="text-inkSoft text-xs text-center mt-3">
            {countOptions.find((o) => o.id === countChoice)?.detail}
          </p>
          <p className="text-inkSoft text-xs text-center mt-2 flex items-center justify-center gap-1.5">
            <span>💡</span>
            Every set mixes in combination, matching &amp; scenario questions when available
          </p>
        </div>

        <Button variant="brand" className="w-full relative" onClick={launch}>
          Start {mode === "timed" ? "Timed Exam" : "Practice"} →
        </Button>
      </Card>
    </PageShell>
  );
}
