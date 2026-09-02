import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { OnboardingService } from "../services/onboardingService";

export default function AppTour({ steps, active, onEnd, page = "dashboard" }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);
  const [targetRect, setTargetRect] = useState(null);

  useEffect(() => {
    if (!active) return;
    setStepIndex(0);
    OnboardingService.markTourSeen(page);
    // eslint-disable-next-line
  }, [active]);

  useEffect(() => {
    if (!active) return;
    function handleKey(e) {
      if (e.key === "Escape") onEnd();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [active, stepIndex]);

  useLayoutEffect(() => {
    if (!active) return;
    const step = steps[stepIndex];
    if (!step) return;
    const el = document.querySelector(step.selector);
    if (!el) {
      if (stepIndex < steps.length - 1) setStepIndex((i) => i + 1);
      else onEnd();
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    const rect = el.getBoundingClientRect();
    setTargetRect(rect);

    requestAnimationFrame(() => {
      const tRect = tooltipRef.current?.getBoundingClientRect();
      if (!tRect) return;
      let top = rect.bottom + 16 + window.scrollY;
      let left = rect.left + window.scrollX;
      if (top + tRect.height > window.scrollY + window.innerHeight) {
        top = rect.top + window.scrollY - tRect.height - 16;
      }
      const maxLeft = window.scrollX + document.documentElement.clientWidth - tRect.width - 16;
      left = Math.max(16, Math.min(left, maxLeft));
      setPos({ top, left });
    });
    // eslint-disable-next-line
  }, [active, stepIndex]);

  if (!active) return null;

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  function next() {
    if (isLast) onEnd();
    else setStepIndex((i) => i + 1);
  }
  function prev() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  return (
    <>
      <div className="fixed inset-0 z-[9990] bg-black/55 pointer-events-none" />
      {targetRect && (
        <div
          className="fixed z-[9991] rounded-2xl pointer-events-none transition-all duration-200"
          style={{
            top: targetRect.top - 6,
            left: targetRect.left - 6,
            width: targetRect.width + 12,
            height: targetRect.height + 12,
            boxShadow: "0 0 0 4px #58CC02, 0 0 0 9999px rgba(0,0,0,0.55)",
          }}
        />
      )}
      <div
        ref={tooltipRef}
        role="dialog"
        aria-modal="true"
        aria-label={`App tour, step ${stepIndex + 1} of ${steps.length}`}
        className="fixed z-[9992] w-[300px] max-w-[88vw] card-pop shadow-card p-5"
        style={{ top: pos.top, left: pos.left }}
      >
        <div className="text-xs font-extrabold uppercase tracking-wide text-feather mb-1">
          Step {stepIndex + 1} of {steps.length}
        </div>
        <h4 className="font-heading font-extrabold text-lg mb-1">{step?.title}</h4>
        <p className="text-inkSoft text-sm mb-4">{step?.text}</p>
        <div className="flex items-center justify-between gap-2">
          <button
            className="text-inkSoft text-sm font-bold hover:text-ink"
            onClick={onEnd}
          >
            Skip
          </button>
          <div className="flex gap-2">
            {stepIndex > 0 && (
              <button
                className="btn-pop bg-surfaceAlt border-2 border-border text-ink text-sm px-4 py-2 rounded-xl"
                onClick={prev}
              >
                ← Back
              </button>
            )}
            <button
              className="btn-pop bg-feather text-white shadow-popSm text-sm px-4 py-2 rounded-xl"
              onClick={next}
            >
              {isLast ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
