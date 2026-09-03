import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { StorageService } from "../services/storageService";

// The two exams that actually have practice content today. Kept as a small
// local list (rather than pulling from Landing's stream data) to avoid
// coupling this page to Landing's internal structure — Landing is
// marketing-oriented and covers 12+ not-yet-built certs; Practice only
// needs the ones a session can actually be started for.
const PRACTICE_EXAMS = [
  {
    id: "foundation",
    title: "CTFL — Foundation Level",
    emoji: "🧪",
    color: "bg-brand-500/15",
    description: "6 chapters, 4 question types, 500+ questions.",
    dashboardPath: "/foundation",
  },
  {
    id: "tm",
    title: "Advanced Level — Test Manager",
    emoji: "📋",
    color: "bg-plum/15",
    description: "6 chapters covering leadership, planning, and risk.",
    dashboardPath: "/test-manager",
  },
];

function detectExamProgram(chapter) {
  if (!chapter) return null;
  if (chapter.startsWith("tm") || chapter === "mock-tm") return "tm";
  if (chapter.startsWith("chapter") || chapter === "mock-foundation") return "foundation";
  return null;
}

export default function Practice() {
  const navigate = useNavigate();
  const [inProgressProgram, setInProgressProgram] = useState(null);
  const [lastExam, setLastExam] = useState(null);

  useEffect(() => {
    const activeExam = StorageService.loadExam();
    setInProgressProgram(detectExamProgram(activeExam?.chapter));
    setLastExam(StorageService.loadLastExam());
  }, []);

  function selectExam(examId, dashboardPath) {
    StorageService.saveLastExam(examId);
    navigate(dashboardPath);
  }

  const resumableMeta = inProgressProgram ? PRACTICE_EXAMS.find((e) => e.id === inProgressProgram) : null;
  const lastExamMeta = !resumableMeta && lastExam ? PRACTICE_EXAMS.find((e) => e.id === lastExam) : null;

  return (
    <PageShell>
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm">
          🎯
        </div>
        <h1 className="font-heading text-3xl font-extrabold mb-2">Practice</h1>
        <p className="text-inkSoft max-w-lg mx-auto">
          Pick an exam to practice — we'll remember where you left off.
        </p>
      </div>

      {resumableMeta && (
        <Card className="mb-6 shadow-elevated !border-feather/40 bg-feather/5">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl ${resumableMeta.color} grid place-items-center text-2xl shrink-0`}>
              {resumableMeta.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <Badge color="green">In progress</Badge>
              <h2 className="font-heading font-extrabold text-lg mt-1">
                Resume your {resumableMeta.title} session
              </h2>
              <p className="text-inkSoft text-sm">You have an exam in progress — pick up right where you left off.</p>
            </div>
            <Button variant="brand" onClick={() => navigate("/exam")}>
              Resume →
            </Button>
          </div>
        </Card>
      )}

      {lastExamMeta && (
        <Card className="mb-6 shadow-elevated !border-sky/40 bg-sky/5">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl ${lastExamMeta.color} grid place-items-center text-2xl shrink-0`}>
              {lastExamMeta.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <Badge color="blue">Last visited</Badge>
              <h2 className="font-heading font-extrabold text-lg mt-1">Continue with {lastExamMeta.title}</h2>
              <p className="text-inkSoft text-sm">Jump back into this exam's dashboard.</p>
            </div>
            <Button variant="outline" onClick={() => selectExam(lastExamMeta.id, lastExamMeta.dashboardPath)}>
              Continue →
            </Button>
          </div>
        </Card>
      )}

      <div className="mb-4">
        <h3 className="font-heading font-extrabold text-sm uppercase tracking-wide text-inkSoft">
          {resumableMeta || lastExamMeta ? "Or choose a different exam" : "Choose an exam"}
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {PRACTICE_EXAMS.map((exam) => (
          <button
            key={exam.id}
            onClick={() => selectExam(exam.id, exam.dashboardPath)}
            className="card-pop shadow-card p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className={`w-14 h-14 rounded-2xl ${exam.color} grid place-items-center text-2xl mb-4`}>
              {exam.emoji}
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading font-extrabold text-lg">{exam.title}</h3>
              <Badge color="green">Available</Badge>
            </div>
            <p className="text-inkSoft text-sm mb-3">{exam.description}</p>
            <div className="text-sm font-extrabold text-brand-600">Start practicing →</div>
          </button>
        ))}
      </div>
    </PageShell>
  );
}
