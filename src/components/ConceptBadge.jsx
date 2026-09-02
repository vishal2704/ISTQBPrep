import { getConceptInfo } from "../data/loReference";

const K_LABEL = { K1: "K1 · Remember", K2: "K2 · Understand", K3: "K3 · Apply" };
const K_COLOR = { K1: "bg-mint/15 text-mintDark", K2: "bg-sky/15 text-skyDark", K3: "bg-plum/15 text-plumDark" };

export default function ConceptBadge({ q }) {
  const info = getConceptInfo(q);

  return (
    <div className="rounded-2xl border border-border bg-black/[0.03] p-3.5 mb-4 flex items-start gap-3">
      <span className={`shrink-0 text-[11px] font-extrabold px-2.5 py-1 rounded-full ${K_COLOR[info.kLevel]}`}>
        {K_LABEL[info.kLevel]}
      </span>
      <div className="text-sm flex-1 min-w-0">
        {info.precise ? (
          <>
            <span className="font-bold">{info.code}</span>
            <span className="text-inkSoft"> — {info.objective}</span>
          </>
        ) : (
          <span className="text-inkSoft">
            General concept from <span className="font-bold text-ink">{info.chapterLabel}</span>
          </span>
        )}
      </div>
    </div>
  );
}
