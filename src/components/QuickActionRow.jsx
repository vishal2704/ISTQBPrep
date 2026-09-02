export default function QuickActionRow({ icon, iconBg, title, subtitle, badge, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-4 p-3.5 rounded-2xl text-left transition-all ${
        disabled ? "cursor-not-allowed opacity-80" : "hover:bg-black/5"
      }`}
    >
      <div
        className={`w-11 h-11 shrink-0 rounded-xl grid place-items-center text-xl ${
          disabled ? "bg-black/5 grayscale" : iconBg
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-bold text-sm flex items-center gap-2 ${disabled ? "text-inkSoft" : ""}`}>
          {title}
          {badge}
        </div>
        {subtitle && <div className="text-inkSoft text-xs mt-0.5">{subtitle}</div>}
      </div>
      {!disabled && <span className="text-inkSoft shrink-0">→</span>}
    </button>
  );
}
