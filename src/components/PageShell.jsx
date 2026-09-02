import Header from "./Header";
import SettingsModal from "./SettingsModal";
import { useTheme } from "../context/ThemeContext";

const BG = {
  default: "bg-surface",
  exam:
    "bg-surface bg-[radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.08),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(14,165,233,0.08),transparent_45%)]",
  result:
    "bg-surface bg-[radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.10),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(255,200,0,0.08),transparent_40%),radial-gradient(circle_at_75%_100%,rgba(88,204,2,0.08),transparent_45%)]",
  landing: "",
};

export default function PageShell({
  children,
  homePath = "/foundation",
  bg = "default",
  forceDarkHeader = false,
  className = "",
}) {
  const { settingsOpen, closeSettings } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${BG[bg] || BG.default} ${className}`}>
      <Header forceDark={forceDarkHeader} homePath={homePath} />
      <div className="max-w-5xl mx-auto px-4 py-6">{children}</div>
      <SettingsModal open={settingsOpen} onClose={closeSettings} />
    </div>
  );
}
