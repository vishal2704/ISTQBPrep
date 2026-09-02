import Card from "./Card";
import Button from "./Button";

export default function DonationModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Support this project"
    >
      <Card className="max-w-md w-full text-center animate-pop max-h-[85vh] overflow-y-auto">
        <div className="text-5xl mb-3">💚</div>
        <h2 className="font-heading text-2xl font-extrabold mb-2">Support this project</h2>
        <p className="text-inkSoft mb-5">
          This app is 100% free — no paywalls, no locked chapters. If it's helped you study,
          consider chipping in to keep it running and growing.
        </p>

        <div className="grid grid-cols-3 gap-2 mb-5">
          {["☕ $3", "🍕 $5", "🚀 $10"].map((label) => (
            <button
              key={label}
              className="btn-pop bg-surfaceAlt border-2 border-border rounded-2xl py-3 font-extrabold text-sm hover:border-feather"
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-xs text-inkSoft mb-4">
          🔧 Developer note: wire this button up to your own Buy&nbsp;Me&nbsp;a&nbsp;Coffee /
          Ko-fi / UPI link.
        </p>

        <Button variant="outline" className="w-full" onClick={onClose}>
          Maybe later
        </Button>
      </Card>
    </div>
  );
}
