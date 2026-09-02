const COLORS = {
  green: "bg-feather/10 text-featherDark border-feather/30",
  blue: "bg-sky/10 text-skyDark border-sky/30",
  plum: "bg-plum/10 text-plumDark border-plum/30",
  gold: "bg-bee/10 text-beeDark border-bee/40",
  red: "bg-cardinal/10 text-cardinalDark border-cardinal/30",
  gray: "bg-black/5 text-inkSoft border-border",
};

export default function Badge({ children, color = "gray", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide border ${COLORS[color]} ${className}`}
    >
      {children}
    </span>
  );
}
