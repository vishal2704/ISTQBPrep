import { useMemo } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { questionBank } from "../data/questionBank";

const TYPE_ICON = { standard: "📝", combination: "☑️", matching: "🔗", scenario: "🧩" };

export default function Admin() {
  const stats = useMemo(() => {
    const chapters = {};
    let missingDifficulty = 0;
    let missingExplanation = 0;
    let withHints = 0;
    const typeCounts = {};

    questionBank.forEach((q) => {
      chapters[q.chapter] = (chapters[q.chapter] || 0) + 1;
      if (!q.difficulty) missingDifficulty++;
      if (!q.explanation) missingExplanation++;
      if (q.hint) withHints++;
      const t = q.type || "standard";
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    });

    return { chapters, missingDifficulty, missingExplanation, withHints, typeCounts, total: questionBank.length };
  }, []);

  return (
    <PageShell>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-12 rounded-2xl bg-brand-gradient grid place-items-center text-xl shadow-glowSm">🛠️</span>
        <h1 className="font-heading text-2xl font-extrabold">Admin Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-elevated">
          <h3 className="font-heading font-extrabold text-lg mb-3">📚 Question Bank Health</h3>
          <div className="space-y-1.5 text-sm">
            {Object.entries(stats.chapters).map(([ch, count]) => (
              <div key={ch} className="flex justify-between items-center">
                <span className="text-inkSoft">{ch}</span>
                <span className="font-bold px-2 py-0.5 rounded-lg bg-brand-500/15 text-brand-600">{count}</span>
              </div>
            ))}
            <hr className="my-2 border-border" />
            <div className="flex justify-between font-extrabold">
              <span>Total Questions</span>
              <span>{stats.total}</span>
            </div>
          </div>
        </Card>

        <Card className="shadow-elevated">
          <h3 className="font-heading font-extrabold text-lg mb-3">🧩 Question Types</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.typeCounts).map(([type, count]) => (
              <Badge key={type} color="blue">
                {TYPE_ICON[type] || "📝"} {type}: {count}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="shadow-elevated">
          <h3 className="font-heading font-extrabold text-lg mb-3">💡 Hints Coverage</h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-bee/15 grid place-items-center font-heading font-extrabold text-beeDark">
              {Math.round((stats.withHints / stats.total) * 100)}%
            </div>
            <div className="text-sm text-inkSoft">
              <span className="font-bold text-ink">{stats.withHints}</span> of {stats.total} questions have a
              hand-written hint. The rest fall back to a safe generic study-strategy hint.
            </div>
          </div>
        </Card>

        <Card className="shadow-elevated">
          <h3 className="font-heading font-extrabold text-lg mb-3">✅ Validation</h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-inkSoft">Missing difficulty</span>
              <span className={`font-bold ${stats.missingDifficulty > 0 ? "text-cardinalDark" : "text-featherDark"}`}>
                {stats.missingDifficulty}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-inkSoft">Missing explanation</span>
              <span className={`font-bold ${stats.missingExplanation > 0 ? "text-cardinalDark" : "text-featherDark"}`}>
                {stats.missingExplanation}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
