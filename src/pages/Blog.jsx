import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { BLOG_POSTS } from "../data/blogPosts";

const CATEGORY_BG = {
  Fundamentals: "bg-brand-500/15",
  Techniques: "bg-sky/10",
  "Practical Skills": "bg-mint/10",
  Strategy: "bg-plum/10",
  "Exam Prep": "bg-bee/15",
};

export default function Blog() {
  return (
    <PageShell homePath="/foundation">
      <div className="text-center mb-10 relative">
        <div className="absolute inset-x-0 -top-6 flex justify-center -z-10">
          <div className="w-64 h-64 bg-brand-gradient opacity-[0.07] rounded-full blur-3xl" />
        </div>
        <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-gradient grid place-items-center text-3xl mb-4 shadow-glowSm">
          📚
        </div>
        <h1 className="font-heading text-3xl font-extrabold mb-2">Software Testing Blog</h1>
        <p className="text-inkSoft max-w-lg mx-auto">
          Short, practical reads on testing concepts, techniques, and exam prep — no fluff.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="h-full shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className={`w-11 h-11 rounded-2xl grid place-items-center text-xl mb-3 ${CATEGORY_BG[post.category] || "bg-brand-500/15"}`}>
                {post.emoji}
              </div>
              <Badge color="blue" className="mb-2">{post.category}</Badge>
              <h2 className="font-heading font-extrabold text-lg mb-2">{post.title}</h2>
              <p className="text-inkSoft text-sm mb-3">{post.excerpt}</p>
              <div className="text-xs text-inkSoft font-semibold flex items-center gap-2">
                <span>{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
