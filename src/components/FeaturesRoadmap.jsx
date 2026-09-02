import { useState } from "react";
import Card from "./Card";
import Badge from "./Badge";

const LIVE_FEATURES = [
  { icon: "🧩", text: "4 question types: standard, combination, matching & scenario" },
  { icon: "🎯", text: "Practice mode (instant feedback) and timed mock exams" },
  { icon: "📊", text: "Full question-by-question result breakdown, filterable" },
  { icon: "🔁", text: "One-tap retry of just the questions you got wrong" },
  { icon: "⭐", text: "Bookmark questions to revisit later" },
  { icon: "🔥", text: "Daily streak tracking" },
  { icon: "🎚️", text: "Choose how many questions per session, incl. adaptive \"Standard\" mode" },
  { icon: "🎨", text: "5 selectable themes" },
  { icon: "🧭", text: "Guided app tour on every major page" },
  { icon: "📚", text: "Software testing blog" },
  { icon: "🆓", text: "Everything free — no paywalls" },
];

const UPCOMING_FEATURES = [
  { icon: "🏆", text: "Real cross-user leaderboards (needs a backend)" },
  { icon: "🎓", text: "More ISTQB certifications: Agile Tester, Test Analyst, Test Manager…" },
  { icon: "📱", text: "Offline / installable app support" },
  { icon: "🧑‍🤝‍🧑", text: "Real accounts synced across devices" },
  { icon: "📈", text: "Deeper analytics: time-per-question, trend charts" },
];

export default function FeaturesRoadmap() {
  const [tab, setTab] = useState("live");
  const list = tab === "live" ? LIVE_FEATURES : UPCOMING_FEATURES;

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-extrabold text-lg">✨ Features</h3>
        <div className="flex gap-1 bg-black/5 rounded-full p-1">
          <button
            onClick={() => setTab("live")}
            className={`text-xs font-extrabold px-3 py-1.5 rounded-full transition-all ${
              tab === "live" ? "bg-surfaceAlt shadow-sm" : "text-inkSoft"
            }`}
          >
            Available now
          </button>
          <button
            onClick={() => setTab("upcoming")}
            className={`text-xs font-extrabold px-3 py-1.5 rounded-full transition-all ${
              tab === "upcoming" ? "bg-surfaceAlt shadow-sm" : "text-inkSoft"
            }`}
          >
            Coming soon
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
        {list.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <span className="shrink-0">{f.icon}</span>
            <span className={tab === "upcoming" ? "text-inkSoft" : ""}>{f.text}</span>
            {tab === "upcoming" && <Badge color="gray" className="ml-auto shrink-0">Planned</Badge>}
          </div>
        ))}
      </div>
    </Card>
  );
}
