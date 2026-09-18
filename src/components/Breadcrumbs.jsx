import { Link, useLocation, matchPath } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import { getChapterHeaderLabel } from "../data/loReference";
import { getPostBySlug } from "../data/blogPosts";
import { getExamMeta } from "../data/examCatalog";

// Route → breadcrumb trail. Defined once, driven by the same path patterns
// used in App.jsx's <Routes>, rather than hardcoded per page. Dynamic
// segments (chapter ids, blog slugs, exam preview ids) resolve to real
// labels via the app's existing data lookups.
const RULES = [
  { path: "/", build: () => [{ label: "Home" }] },
  { path: "/practice", build: () => [{ label: "Practice" }] },
  { path: "/foundation", build: () => [{ label: "Practice", to: "/practice" }, { label: "CTFL Foundation" }] },
  {
    path: "/foundation/chapter/:chapterId",
    build: (m) => [
      { label: "Practice", to: "/practice" },
      { label: "CTFL Foundation", to: "/foundation" },
      { label: getChapterHeaderLabel(m.params.chapterId) },
    ],
  },
  { path: "/test-manager", build: () => [{ label: "Practice", to: "/practice" }, { label: "Test Manager" }] },
  {
    path: "/test-manager/chapter/:chapterId",
    build: (m) => [
      { label: "Practice", to: "/practice" },
      { label: "Test Manager", to: "/test-manager" },
      { label: getChapterHeaderLabel(m.params.chapterId) },
    ],
  },
  { path: "/blog", build: () => [{ label: "Blog" }] },
  {
    path: "/blog/:slug",
    build: (m) => [{ label: "Blog", to: "/blog" }, { label: getPostBySlug(m.params.slug)?.title || "Post" }],
  },
  { path: "/glossary", build: () => [{ label: "Glossary" }] },
  { path: "/achievements", build: () => [{ label: "Achievements" }] },
  { path: "/bookmarks", build: () => [{ label: "Bookmarks" }] },
  { path: "/results", build: () => [{ label: "Practice", to: "/practice" }, { label: "Past Attempts" }] },
  {
    path: "/preview/:examId",
    build: (m) => [{ label: "All Exams", to: "/" }, { label: getExamMeta(m.params.examId)?.title || "Coming Soon" }],
  },
  { path: "/login", build: () => [{ label: "Sign In" }] },
  { path: "/register", build: () => [{ label: "Create Account" }] },
  { path: "/admin", build: () => [{ label: "Admin" }] },
];

// These routes have no param of their own to identify the active
// program/mode — that lives in the in-progress exam session instead.
function examAwareCrumbs(pathname, examChapter, timed) {
  const isTM = examChapter?.startsWith("tm");
  const section = timed ? "Timed Exam" : "Practice";
  const sectionTo = timed ? null : "/practice";
  const program = isTM ? "Test Manager" : "CTFL Foundation";
  const programTo = isTM ? "/test-manager" : "/foundation";

  const base = [
    ...(sectionTo ? [{ label: section, to: sectionTo }] : [{ label: section }]),
    ...(timed ? [] : [{ label: program, to: programTo }]),
  ];

  if (pathname === "/exam") return [...base, { label: "Question" }];
  if (pathname === "/review") return [...base, { label: "Review Answers" }];
  if (pathname === "/result") return [...base, { label: "Result" }];
  return base;
}

export default function Breadcrumbs({ forceDark = false }) {
  const location = useLocation();
  const { examData } = useExam();
  const pathname = location.pathname;

  if (pathname === "/") return null; // Landing is the root; no trail above it

  let crumbs;
  if (pathname === "/exam" || pathname === "/review" || pathname === "/result") {
    crumbs = examAwareCrumbs(pathname, examData?.chapter, examData?.timed);
  } else {
    const rule = RULES.find((r) => matchPath({ path: r.path, end: true }, pathname));
    crumbs = rule ? rule.build(matchPath({ path: rule.path, end: true }, pathname)) : null;
  }

  if (!crumbs || crumbs.length === 0) return null;

  const softText = forceDark ? "text-white/60 hover:text-white" : "text-inkSoft hover:text-ink";
  const currentText = forceDark ? "text-white" : "text-ink";
  const separator = forceDark ? "text-white/30" : "text-inkSoft/50";

  return (
    <nav aria-label="Breadcrumb" className={`border-t ${forceDark ? "border-white/10" : "border-border"}`}>
      <ol className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto no-scrollbar py-2 text-xs">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1 shrink-0">
              {i > 0 && (
                <span className={`mx-0.5 ${separator}`} aria-hidden="true">
                  ›
                </span>
              )}
              {!isLast && c.to ? (
                <Link
                  to={c.to}
                  className={`font-semibold transition-colors truncate max-w-[120px] sm:max-w-[220px] ${softText}`}
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  className={`truncate max-w-[140px] sm:max-w-[260px] font-semibold ${
                    isLast ? `font-extrabold ${currentText}` : softText
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
