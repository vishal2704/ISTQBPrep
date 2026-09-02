import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const STATIC_NAV_LINKS = [
  { to: "/blog", label: "Blog" },
  { to: "/glossary", label: "Glossary" },
  { to: "/achievements", label: "Achievements" },
  { to: "/", label: "All Exams" },
];

export default function Header({ forceDark = false, homePath = "/foundation" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { openSettings, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDarkLook = forceDark || theme === "dark";

  const textClass = isDarkLook ? "text-white" : "text-ink";
  const softTextClass = isDarkLook ? "text-white/70" : "text-inkSoft";
  const wrapClass = forceDark
    ? "bg-white/5 border-white/10"
    : "bg-[var(--header-bg)] border-border";

  // "Practice" always points at whichever program's dashboard is contextually
  // relevant (Foundation vs. Test Manager) rather than assuming Foundation.
  const NAV_LINKS = [{ to: homePath, label: "Practice" }, ...STATIC_NAV_LINKS];

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b ${wrapClass}`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-9 h-9 rounded-xl bg-brand-gradient grid place-items-center text-lg shadow-glowSm">
            🛡️
          </span>
          <span className="leading-tight">
            <span className={`block font-heading font-extrabold text-sm tracking-wide ${textClass}`}>
              ISTQB PRACTICE
            </span>
            <span className={`block text-[10px] font-bold tracking-widest ${softTextClass}`}>
              MASTER · PRACTICE · PASS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-colors ${
                  active
                    ? isDarkLook
                      ? "bg-white/10 text-white"
                      : "bg-brand-500/15 text-brand-600"
                    : `${softTextClass} hover:${isDarkLook ? "text-white" : "text-ink"}`
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={openSettings}
            aria-label="Open settings and themes"
            title="Settings & Themes"
            className={`w-10 h-10 rounded-full grid place-items-center transition-colors ${
              isDarkLook ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-ink hover:bg-black/10"
            }`}
          >
            ⚙️
          </button>

          {user ? (
            <button
              onClick={() => navigate(homePath)}
              className={`hidden sm:flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border font-bold text-sm ${
                isDarkLook ? "border-white/15 text-white bg-white/5" : "border-border text-ink bg-surfaceAlt"
              }`}
            >
              <span className="w-7 h-7 rounded-full bg-brand-gradient text-white grid place-items-center text-xs font-extrabold">
                {user.firstName[0]}
              </span>
              {user.firstName}
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full font-extrabold text-sm text-white bg-brand-gradient shadow-glowSm hover:brightness-110 transition-all"
            >
              Sign In
            </Link>
          )}

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`md:hidden w-10 h-10 rounded-full grid place-items-center ${
              isDarkLook ? "bg-white/10 text-white" : "bg-black/5 text-ink"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t px-4 py-3 flex flex-col gap-1 ${wrapClass}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl font-bold text-sm ${textClass}`}
            >
              {l.label}
            </Link>
          ))}
          {!user && (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-1 text-center px-4 py-2.5 rounded-xl font-extrabold text-sm text-white bg-brand-gradient"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
