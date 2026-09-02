import Card from "./Card";
import Badge from "./Badge";
import { SAMPLE_LEADERBOARD, COMMUNITY_STATS } from "../data/communityStats";

const MEDALS = ["🥇", "🥈", "🥉"];

export default function CommunityInsights({ results }) {
  const bestScore = results && results.length > 0 ? Math.max(...results.map((r) => r.score)) : null;

  const beatCount = bestScore !== null ? SAMPLE_LEADERBOARD.filter((r) => bestScore >= r.score).length : 0;
  const percentile =
    bestScore !== null ? Math.round((beatCount / SAMPLE_LEADERBOARD.length) * 100) : null;

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-heading font-extrabold text-lg">🌍 Community Insights</h3>
        <Badge color="gray">Sample data</Badge>
      </div>
      <p className="text-inkSoft text-xs mb-4">
        This app doesn't have a live backend yet, so these are illustrative numbers — not real
        cross-user stats. A nice next step if you want this to be real!
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <div className="text-center p-3 rounded-2xl bg-black/5">
          <div className="font-heading text-xl font-extrabold text-featherDark">
            {COMMUNITY_STATS.averageScore}%
          </div>
          <div className="text-inkSoft text-xs">Community average</div>
        </div>
        <div className="text-center p-3 rounded-2xl bg-black/5">
          <div className="font-heading text-xl font-extrabold text-skyDark">
            {COMMUNITY_STATS.improvedWithin3Attempts}%
          </div>
          <div className="text-inkSoft text-xs">Improve within 3 attempts</div>
        </div>
        <div className="text-center p-3 rounded-2xl bg-black/5">
          <div className="font-heading text-xl font-extrabold text-plumDark">
            {COMMUNITY_STATS.activeLearnersThisWeek.toLocaleString()}
          </div>
          <div className="text-inkSoft text-xs">Active this week</div>
        </div>
      </div>

      <div className="space-y-1.5 mb-2">
        {SAMPLE_LEADERBOARD.map((r, i) => (
          <div key={r.name} className="flex items-center gap-3 text-sm p-2 rounded-xl">
            <span className="w-6 text-center">{MEDALS[i] || `#${i + 1}`}</span>
            <span className="flex-1 font-semibold">{r.name}</span>
            <span className="text-inkSoft text-xs">{r.chapter}</span>
            <span className="font-extrabold text-featherDark">{r.score}%</span>
          </div>
        ))}
      </div>

      {bestScore !== null && (
        <div className="mt-3 p-3 rounded-2xl bg-feather/10 text-center">
          <span className="font-bold text-sm">
            Your best score ({bestScore}%) beats {percentile}% of this sample list 🎉
          </span>
        </div>
      )}
    </Card>
  );
}
