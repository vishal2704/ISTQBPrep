import { useRef } from "react";

// Simple horizontal swipe detector for mobile question navigation.
// Ignores near-vertical drags (scrolling) and short/accidental touches.
export function useSwipeNav(onSwipeLeft, onSwipeRight, enabled = true) {
  const start = useRef(null);

  function onTouchStart(e) {
    if (!enabled) return;
    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e) {
    if (!enabled || !start.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;
    start.current = null;

    const THRESHOLD = 60;
    if (Math.abs(dx) < THRESHOLD || Math.abs(dx) < Math.abs(dy) * 1.5) return;

    if (dx < 0) onSwipeLeft?.();
    else onSwipeRight?.();
  }

  return { onTouchStart, onTouchEnd };
}
