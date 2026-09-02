import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import ChapterCard from "../components/ChapterCard";
import StreakWidget from "../components/StreakWidget";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import QuickActionRow from "../components/QuickActionRow";
import DonationModal from "../components/DonationModal";
import DashboardOverview from "../components/DashboardOverview";
import BadgesSummaryCard from "../components/BadgesSummaryCard";
import { useExam } from "../context/ExamContext";
import { RevisionService } from "../services/revisionService";
import { StorageService } from "../services/storageService";

const CHAPTERS = [
  { id: "tm1", emoji: "🧑‍💼", title: "Test Manager Fundamentals", description: "The role, responsibilities, and skills of a Test Manager." },
  { id: "tm2", emoji: "📄", title: "Test Management Documentation", description: "Test policy, test strategy, and test plans." },
  { id: "tm3", emoji: "📆", title: "Planning, Monitoring & Control", description: "Estimation, tracking progress, and steering testing." },
  { id: "tm4", emoji: "⚠️", title: "Risk Management", description: "Identifying, assessing, and responding to product risk." },
  { id: "tm5", emoji: "🐞", title: "Defect Management", description: "Triage, lifecycle, and process for handling defects." },
  { id: "tm6", emoji: "📈", title: "Improving the Test Process", description: "Assessment models and driving process maturity." },
];

export default function TestManagerDashboard() {
  const navigate = useNavigate();
  const { startExam, startRetry } = useExam();
  const [revisionCount, setRevisionCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [hasResumable, setHasResumable] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [chapterProgress, setChapterProgress] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    setRevisionCount(RevisionService.size());
    setBookmarkCount(StorageService.loadBookmarks().length);
    setHasResumable(!!StorageService.loadExam());

    const allResults = StorageService.loadResults().filter(
      (r) => r.chapter?.startsWith("tm") || r.chapter === "mock-tm"
    );
    setResults(allResults);

    const progress = {};
    allResults.forEach((r) => {
      if (!CHAPTERS.some((c) => c.id === r.chapter)) return;
      if (!progress[r.chapter]) progress[r.chapter] = { best: 0, attempts: 0 };
      progress[r.chapter].attempts += 1;
      progress[r.chapter].best = Math.max(progress[r.chapter].best, r.score);
    });
    setChapterProgress(progress);
  }, []);

  function handleStart(chapter, mode) {
    startExam(chapter, mode);
    navigate("/exam");
  }

  function handleBookmarkReview() {
    const ids = StorageService.loadBookmarks();
    if (ids.length === 0) return;
    startRetry(ids, "Bookmarked Questions");
    navigate("/exam");
  }

  return (
    <PageShell homePath="/test-manager">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <Link to="/" className="text-sm font-bold text-inkSoft hover:text-ink flex items-center gap-1">
          ← All ISTQB Exams
        </Link>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold flex items-center gap-3">
            📋 Advanced Level — Test Manager
            <Badge color="plum">New</Badge>
          </h1>
          <p className="text-inkSoft mt-1">
            CTAL-TM practice — leadership, planning, risk, and process improvement.
          </p>
        </div>
      </div>

      <Card className="mb-6 !border-plum/30 bg-plum/5">
        <p className="text-sm text-inkSoft">
          💡 This is a newer certification module — content is a solid first pass ({61} questions
          across 6 chapters) rather than exhaustive, and will keep growing the same way the
          Foundation bank did.
        </p>
      </Card>

      <DashboardOverview results={results} program="tm" />

      <StreakWidget />

      <BadgesSummaryCard />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {CHAPTERS.map((c) => (
            <ChapterCard
              key={c.id}
              id={c.id}
              emoji={c.emoji}
              title={c.title}
              description={c.description}
              linkTo={`/test-manager/chapter/${c.id}`}
              progress={chapterProgress[c.id]}
            />
          ))}
        </div>

        <div className="space-y-6">
          <Card className="!p-3">
            <h3 className="font-heading font-extrabold text-lg px-2.5 pt-2 pb-1">🎯 Quick Actions</h3>

            {hasResumable && (
              <QuickActionRow
                icon="▶️"
                iconBg="bg-feather/15"
                title="Resume Previous Attempt"
                subtitle="Pick up right where you left off"
                onClick={() => navigate("/exam")}
              />
            )}

            <QuickActionRow
              icon="🎯"
              iconBg="bg-plum/15"
              title="Full Mock Exam"
              subtitle="Timed, mixed across all chapters"
              onClick={() => handleStart("mock-tm", "timed")}
            />

            <QuickActionRow
              icon="📚"
              iconBg="bg-bee/20"
              title="Focused Revision"
              subtitle={
                revisionCount > 0
                  ? `${revisionCount} questions you got wrong before`
                  : "No weak questions yet — try a mock exam first"
              }
              badge={revisionCount > 0 && <Badge color="gold">{revisionCount}</Badge>}
              onClick={() =>
                revisionCount > 0 ? handleStart("wrong", "practice") : handleStart("mock-tm", "timed")
              }
            />

            <QuickActionRow
              icon="⭐"
              iconBg="bg-mint/15"
              title="Bookmarked Questions"
              subtitle={bookmarkCount > 0 ? `${bookmarkCount} saved for later` : "Tap ☆ while practicing to save one"}
              badge={bookmarkCount > 0 && <Badge color="blue">{bookmarkCount}</Badge>}
              disabled={bookmarkCount === 0}
              onClick={handleBookmarkReview}
            />

            <QuickActionRow
              icon="📊"
              iconBg="bg-sky/15"
              title="My Results"
              subtitle="Review every past attempt"
              onClick={() => navigate("/results")}
            />
          </Card>

          <Card>
            <h3 className="font-heading font-extrabold text-lg mb-2">💚 Free, Always</h3>
            <p className="text-inkSoft text-sm mb-3">
              Same as Foundation — every chapter, every mode, free for everyone.
            </p>
            <Button variant="outline" className="w-full" onClick={() => setShowDonate(true)}>
              💚 Support this project
            </Button>
          </Card>
        </div>
      </div>

      <DonationModal open={showDonate} onClose={() => setShowDonate(false)} />
    </PageShell>
  );
}
