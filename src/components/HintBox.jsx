import { useState, useEffect } from "react";
import { getHint, hasAuthoredHint } from "../services/answerUtils";

export default function HintBox({ q }) {
  const [open, setOpen] = useState(false);

  // Reset when the question changes
  useEffect(() => setOpen(false), [q?.id]);

  return (
    <div className="mb-4">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1 text-xs font-bold text-inkSoft hover:text-beeDark transition-colors"
        >
          💡 Show hint
        </button>
      ) : (
        <div className="rounded-2xl border-2 border-bee/40 bg-bee/10 p-3.5 flex items-start gap-2.5 animate-fadeUp">
          <span className="text-lg shrink-0">💡</span>
          <div className="text-sm text-ink">
            {getHint(q)}
            {!hasAuthoredHint(q) && (
              <span className="block text-[11px] text-inkSoft mt-1">General strategy tip for this question.</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
