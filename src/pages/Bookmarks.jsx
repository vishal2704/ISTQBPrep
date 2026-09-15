import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { StorageService } from "../services/storageService";
import { questionBank } from "../data/questionBank";
import { useExam } from "../context/ExamContext";
import { getConceptInfo } from "../data/loReference";

const PROGRAM_LABEL = { foundation: "Foundation", tm: "Test Manager" };

export default function Bookmarks() {
  const navigate = useNavigate();
  const { startRetry } = useExam();
  const [bookmarkIds, setBookmarkIds] = useState([]);

  useEffect(() => {
    setBookmarkIds(StorageService.loadBookmarks());
  }, []);

  const bookmarkedQuestions = useMemo(() => {
    const byId = new Map(questionBank.map((q) => [q.id, q]));
    return bookmarkIds
      .map((id) => byId.get(id))
      .filter(Boolean); // guard against ids referencing questions removed from the bank
  }, [bookmarkIds]);

  function removeBookmark(id) {
    // Update immediately (optimistic UI), then persist.
    const next = bookmarkIds.filter((bId) => bId !== id);
    setBookmarkIds(next);
    StorageService.saveBookmarks(next);
  }

  function practiceAll() {
    if (bookmarkedQuestions.length === 0) return;
    startRetry(bookmarkIds, "Bookmarked Questions");
    navigate("/exam");
  }

  return (
    <PageShell>
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm">
          ⭐
        </div>
        <h1 className="font-heading text-3xl font-extrabold mb-2">Bookmarked Questions</h1>
        <p className="text-inkSoft max-w-lg mx-auto">
          Questions you starred while practicing — review, remove, or practice them again here.
        </p>
      </div>

      {bookmarkedQuestions.length > 0 && (
        <div className="flex justify-center mb-6">
          <Button variant="brand" onClick={practiceAll}>
            🎯 Practice all {bookmarkedQuestions.length} bookmarked questions
          </Button>
        </div>
      )}

      {bookmarkedQuestions.length === 0 ? (
        <Card className="text-center py-10 shadow-elevated">
          <div className="text-4xl mb-3">☆</div>
          <p className="text-inkSoft mb-1">No bookmarks yet.</p>
          <p className="text-inkSoft text-sm">
            Tap the ☆ next to any question while practicing to save it here.
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {bookmarkedQuestions.map((q) => {
            const info = getConceptInfo(q);
            return (
              <Card key={q.id} className="shadow-card flex items-start gap-4">
                <span className="text-xl shrink-0 mt-0.5">⭐</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold mb-2">{q.question}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge color="blue">{PROGRAM_LABEL[q.program || "foundation"]}</Badge>
                    <Badge color="gray">{info.chapterLabel}</Badge>
                    {q.difficulty && <Badge color="gray">{q.difficulty}</Badge>}
                  </div>
                </div>
                <button
                  onClick={() => removeBookmark(q.id)}
                  className="shrink-0 text-xs font-extrabold text-cardinalDark hover:underline px-2 py-1"
                  aria-label={`Remove bookmark for: ${q.question}`}
                >
                  ✕ Remove
                </button>
              </Card>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
