import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { getExamMeta } from "../data/examCatalog";

const LEVEL_COLOR = { Foundation: "green", Advanced: "blue", Expert: "plum", Specialist: "gold" };

export default function ExamPreview() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const meta = getExamMeta(examId);
  const [notified, setNotified] = useState(false);

  if (!meta) {
    return (
      <PageShell>
        <Card className="max-w-md mx-auto text-center shadow-elevated">
          <div className="text-5xl mb-3">🤔</div>
          <h1 className="font-heading text-xl font-extrabold mb-2">Exam not found</h1>
          <Button variant="brand" onClick={() => navigate("/")}>← See all exams</Button>
        </Card>
      </PageShell>
    );
  }

  return (
    <PageShell bg="landing">
      <Link to="/" className="text-sm font-bold text-inkSoft hover:text-ink flex items-center gap-1 mb-4">
        ← All ISTQB Exams
      </Link>

      <Card className="shadow-elevated relative overflow-hidden mb-6">
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-gradient opacity-[0.06] rounded-full blur-2xl" />
        <div className="flex items-start gap-4 relative">
          <div className={`w-16 h-16 rounded-3xl ${meta.color} grid place-items-center text-3xl shrink-0`}>
            {meta.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge color={LEVEL_COLOR[meta.level] || "gray"}>{meta.level} Level</Badge>
              <Badge color="gray">{meta.stream} stream</Badge>
              <Badge color="gray">🚧 In development</Badge>
            </div>
            <h1 className="font-heading text-2xl font-extrabold mb-1">{meta.title}</h1>
            <p className="text-inkSoft text-sm">{meta.blurb}</p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-elevated">
          <h2 className="font-heading font-extrabold text-lg mb-1">📚 What this exam will cover</h2>
          <p className="text-inkSoft text-xs mb-4">
            A directional preview of the syllabus areas — practice questions for this
            certification haven't been built yet, unlike Foundation and Test Manager.
          </p>
          <div className="space-y-2.5">
            {meta.topics.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-black/[0.03]">
                <span className="w-6 h-6 shrink-0 rounded-full bg-brand-500/15 text-brand-600 grid place-items-center text-xs font-extrabold">
                  {i + 1}
                </span>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-elevated">
            <h3 className="font-heading font-extrabold text-base mb-2">🔔 Get notified</h3>
            <p className="text-inkSoft text-xs mb-3">
              We'll build out full practice for this certification the same way we did for
              Foundation and Test Manager. Let us know you're interested.
            </p>
            {notified ? (
              <div className="text-center p-3 rounded-2xl bg-feather/10 text-featherDark font-bold text-sm">
                ✓ Thanks — noted locally on this device!
              </div>
            ) : (
              <Button variant="brand" className="w-full" onClick={() => setNotified(true)}>
                Notify me when it's ready
              </Button>
            )}
          </Card>

          <Card className="shadow-elevated">
            <h3 className="font-heading font-extrabold text-base mb-2">✅ Available now instead</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full" onClick={() => navigate("/foundation")}>
                🧪 CTFL Foundation Level
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate("/test-manager")}>
                📋 Test Manager
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
