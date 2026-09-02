import { CATEGORY_ORDER } from "../data/achievements";

export default function BadgeGrid({ badges, showCategories = true }) {
  if (!showCategories) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map((b) => (
          <BadgeTile key={b.id} b={b} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {CATEGORY_ORDER.map((cat) => {
        const items = badges.filter((b) => b.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wide text-inkSoft mb-3">
              {cat}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((b) => (
                <BadgeTile key={b.id} b={b} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BadgeTile({ b }) {
  return (
    <div
      className={`rounded-2xl border-2 p-4 text-center transition-all ${
        b.unlocked
          ? "border-bee/40 bg-bee/10 shadow-card"
          : "border-border bg-black/[0.02] opacity-60"
      }`}
      title={b.description}
    >
      <div className={`text-3xl mb-2 ${b.unlocked ? "" : "grayscale opacity-50"}`}>{b.icon}</div>
      <div className="font-heading font-extrabold text-xs leading-tight">{b.title}</div>
      <div className="text-inkSoft text-[10px] mt-1 leading-tight">{b.description}</div>
      {!b.unlocked && <div className="text-[10px] font-bold text-inkSoft mt-1.5">🔒 Locked</div>}
    </div>
  );
}
