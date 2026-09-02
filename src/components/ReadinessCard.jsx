import Card from "./Card";

function computeReadiness(results) {
  if (!results || results.length === 0) return null;

  const mockResults = results.filter((r) => r.chapter === "mock-foundation");
  const basis = (mockResults.length > 0 ? mockResults : results).slice(0, 5);
  const avg = Math.round(basis.reduce((sum, r) => sum + r.score, 0) / basis.length);

  let label, emoji, color;
  if (avg >= 80) {
    label = "Exam ready";
    emoji = "🎉";
    color = "text-featherDark";
  } else if (avg >= 65) {
    label = "Almost there";
    emoji = "💪";
    color = "text-skyDark";
  } else if (avg >= 40) {
    label = "Keep practicing";
    emoji = "📚";
    color = "text-plumDark";
  } else {
    label = "Just getting started";
    emoji = "🌱";
    color = "text-inkSoft";
  }

  return {
    avg,
    label,
    emoji,
    color,
    basedOnMock: mockResults.length > 0,
    count: basis.length,
  };
}

export default function ReadinessCard({ results }) {
  const readiness = computeReadiness(results);

  if (!readiness) {
    return (
      <Card className="mb-6">
        <h3 className="font-heading font-extrabold text-lg mb-1">🧭 Exam Readiness</h3>
        <p className="text-inkSoft text-sm">
          Finish a few practice sets and we'll estimate how ready you are for the real exam.
        </p>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <div className="flex items-center gap-4">
        <div className="text-4xl">{readiness.emoji}</div>
        <div className="flex-1">
          <h3 className="font-heading font-extrabold text-lg">
            🧭 Exam Readiness: <span className={readiness.color}>{readiness.label}</span>
          </h3>
          <p className="text-inkSoft text-xs mt-0.5">
            {readiness.avg}% average across your last {readiness.count}{" "}
            {readiness.basedOnMock ? "mock exam" : "attempt"}
            {readiness.count > 1 ? "s" : ""}
            {!readiness.basedOnMock && " — take a full mock exam for a more accurate read"}
          </p>
        </div>
      </div>
    </Card>
  );
}
