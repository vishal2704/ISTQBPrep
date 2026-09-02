import { useEffect } from "react";

/**
 * Warns the user with the browser's native "leave site?" dialog if they try
 * to close/refresh the tab while `when` is true. Doesn't guard in-app SPA
 * navigation — exam progress is autosaved to localStorage, so switching
 * pages inside the app is always safe to resume from; this only covers the
 * one truly destructive action (closing/refreshing the tab).
 */
export function useBeforeUnloadWarning(when) {
  useEffect(() => {
    if (!when) return;

    function handler(e) {
      e.preventDefault();
      e.returnValue = "";
      return "";
    }

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [when]);
}
