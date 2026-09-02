import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import ChapterCard from "../components/ChapterCard";
import StreakWidget from "../components/StreakWidget";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import AppTour from "../components/AppTour";
import QuickActionRow from "../components/QuickActionRow";
import DonationModal from "../components/DonationModal";
import OnboardingChecklist from "../components/OnboardingChecklist";
import ReadinessCard from "../components/ReadinessCard";
import CommunityInsights from "../components/CommunityInsights";
import FeaturesRoadmap from "../components/FeaturesRoadmap";
import DashboardOverview from "../components/DashboardOverview";
import BadgesSummaryCard from "../components/BadgesSummaryCard";
import { useExam } from "../context/ExamContext";
import { useTheme } from "../context/ThemeContext";
import { RevisionService } from "../services/revisionService";
import { StorageService } from "../services/storageService";

const CHAPTERS = [
  { id: "chapter1", title: "Chapter 1 – Fundamentals of Testing", description: "Testing principles, objectives, psychology and fundamentals." },
  { id: "chapter2", title: "Chapter 2 – Testing Throughout Lifecycle", description: "Test levels, test types, maintenance testing and SDLC." },
  { id: "chapter3", title: "Chapter 3 – Static Testing", description: "Reviews, inspections, walkthroughs and static analysis." },
  { id: "chapter4", title: "Chapter 4 – Test Analysis & Design", description: "Test techniques, coverage and design." },
  { id: "chapter5", title: "Chapter 5 – Managing Test Activities", description: "Planning, monitoring and reporting." },
  { id: "chapter6", title: "Chapter 6 – Test Tools", description: "Tool support and automation." },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { startExam, startRetry } = useExam();
  const { openSettings } = useTheme();
  const [revisionCount, setRevisionCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [hasResumable, setHasResumable] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [chapterProgress, setChapterProgress] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    setRevisionCount(RevisionService.size());
    setBookmarkCount(StorageService.loadBookmarks().length);
    setHasResumable(!!StorageService.loadExam());

    const allResults = StorageService.loadResults().filter(
      (r) => r.chapter?.startsWith("chapter") || r.chapter === "mock-foundation"
    );
    setResults(allResults);

    const progress = {};
    allResults.forEach((r) => {
      if (!CHAPTERS.some((c) => c.id === r.chapter)) return; // skip mock/wrong/retry attempts
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

  const tourSteps = [
    { selector: "[data-tour=header]", title: "Welcome to ISTQB 4.0 👋", text: "This is your dashboard — start exams, track your streak and manage your account from here." },
    { selector: "[data-tour=overview]", title: "Your progress at a glance", text: "Real stats from your own attempts: scores, coverage, weak areas, and recent results." },
    { selector: "[data-tour=chapters]", title: "Choose a chapter", text: "All six chapters are free to practice — pick any one to begin." },
    { selector: "[data-tour=quick-actions]", title: "Quick Actions", text: "Mock exams, focused revision, bookmarks and your results — all one tap away." },
  ];

  return (
    <PageShell>
      <div data-tour="header" className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold flex items-center gap-3">
            🦉 ISTQB 4.0 Foundation
            <Badge color="green">Free</Badge>
          </h1>
          <p className="text-inkSoft mt-1">Real exam experience, chapter-wise practice, and progress that's actually yours.</p>
        </div>
      </div>

      <OnboardingChecklist onTakeTour={() => setTourActive(true)} onOpenSettings={openSettings} />

      <div data-tour="overview">
        <DashboardOverview results={results} program="foundation" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <StreakWidget />
        <ReadinessCard results={results} />
      </div>

      <BadgesSummaryCard />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4" data-tour="chapters">
          {CHAPTERS.map((c) => (
            <ChapterCard
              key={c.id}
              id={c.id}
              title={c.title}
              description={c.description}
              progress={chapterProgress[c.id]}
            />
          ))}
        </div>

        <div className="space-y-6">
          <Card data-tour="quick-actions" className="!p-3">
            <h3 className="font-heading font-extrabold text-lg px-2.5 pt-2 pb-1">🎯 Quick Actions</h3>

            <QuickActionRow
              icon="🧭"
              iconBg="bg-sky/15"
              title="Take the App Tour"
              subtitle="A 60-second walkthrough"
              onClick={() => setTourActive(true)}
            />

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
              title="Full ISTQB Mock Exam"
              subtitle="40 questions · 60 minutes · timed"
              onClick={() => handleStart("mock-foundation", "timed")}
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
                revisionCount > 0 ? handleStart("wrong", "practice") : handleStart("mock-foundation", "timed")
              }
            />

            <QuickActionRow
              icon="⭐"
              iconBg="bg-mint/15"
              title="Bookmarked Questions"
              subtitle={
                bookmarkCount > 0
                  ? `${bookmarkCount} saved for later`
                  : "Tap ☆ next to any question while practicing to save it here"
              }
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

          <Card data-tour="support">
            <h3 className="font-heading font-extrabold text-lg mb-2">💚 Free, Always</h3>
            <p className="text-inkSoft text-sm mb-3">
              Every chapter, every mode, every feature — free for everyone. If this app helps
              your studying, you can support its development.
            </p>
            <Button variant="outline" className="w-full" onClick={() => setShowDonate(true)}>
              💚 Support this project
            </Button>
          </Card>
        </div>
      </div>

      <CommunityInsights results={results} />
      <FeaturesRoadmap />

      <DonationModal open={showDonate} onClose={() => setShowDonate(false)} />
      <AppTour steps={tourSteps} active={tourActive} onEnd={() => setTourActive(false)} />
    </PageShell>
  );
}
