import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { GLOSSARY, CHAPTER_LABELS } from "../data/glossary";

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [chapterFilter, setChapterFilter] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      const matchesChapter = chapterFilter === "all" || g.chapter === chapterFilter;
      const matchesQuery =
        !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q);
      return matchesChapter && matchesQuery;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [query, chapterFilter]);

  return (
    <PageShell>
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm">
          📖
        </div>
        <h1 className="font-heading text-3xl font-extrabold mb-2">ISTQB Glossary</h1>
        <p className="text-inkSoft max-w-lg mx-auto">
          Official CTFL v4.0.1 terminology, organized by chapter — {GLOSSARY.length} terms.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a term or definition…"
          className="flex-1 p-3 rounded-2xl border-2 border-border bg-surfaceAlt font-semibold"
        />
        <select
          value={chapterFilter}
          onChange={(e) => setChapterFilter(e.target.value)}
          className="p-3 rounded-2xl border-2 border-border bg-surfaceAlt font-semibold"
        >
          <option value="all">All chapters</option>
          {Object.entries(CHAPTER_LABELS).map(([id, label]) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <Card className="text-center py-10 shadow-elevated">
          <div className="text-4xl mb-2">🤔</div>
          <p className="text-inkSoft">No terms match "{query}".</p>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((g) => (
            <Card key={g.term} className="shadow-card">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="font-heading font-extrabold text-base">{g.term}</h3>
                <Badge color="blue" className="shrink-0">{CHAPTER_LABELS[g.chapter]}</Badge>
              </div>
              <p className="text-inkSoft text-sm">{g.definition}</p>
            </Card>
          ))}
        </div>
      )}
    </PageShell>
  );
}
