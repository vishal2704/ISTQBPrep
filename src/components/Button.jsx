const VARIANTS = {
  primary: "bg-feather text-white shadow-pop",
  brand: "bg-brand-gradient text-white shadow-glowSm",
  sky: "bg-sky text-white shadow-[0_4px_0_0_#0F8FCB]",
  plum: "bg-plum text-white shadow-[0_4px_0_0_#6D28D9]",
  mint: "bg-mint text-white shadow-[0_4px_0_0_#0B8A85]",
  highlight: "bg-bee text-beetle shadow-[0_4px_0_0_#C99A00]",
  danger: "bg-cardinal text-white shadow-[0_4px_0_0_#C93434]",
  outline: "bg-surfaceAlt text-ink border-2 border-border shadow-[0_3px_0_0_var(--border)]",
  ghost: "bg-transparent text-inkSoft hover:bg-black/5",
};

const SIZES = {
  sm: "text-sm px-4 py-2 rounded-xl",
  md: "text-base px-6 py-3 rounded-2xl",
  lg: "text-lg px-8 py-4 rounded-2xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`btn-pop ${VARIANTS[variant]} ${SIZES[size]} ${className} ${
        disabled ? "" : "hover:brightness-105"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
