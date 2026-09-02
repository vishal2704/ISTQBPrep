import { Link, useParams, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { BLOG_POSTS, getPostBySlug } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PageShell homePath="/foundation">
        <Card className="max-w-md mx-auto text-center">
          <div className="text-5xl mb-3">🤔</div>
          <h1 className="font-heading text-xl font-extrabold mb-2">Post not found</h1>
          <Button onClick={() => navigate("/blog")}>← Back to Blog</Button>
        </Card>
      </PageShell>
    );
  }

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell homePath="/foundation">
      <Link to="/blog" className="text-sm font-bold text-brand-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>

      <Card className="max-w-3xl mx-auto shadow-elevated relative overflow-hidden">
        <div className="absolute -top-14 -right-14 w-48 h-48 bg-brand-gradient opacity-[0.06] rounded-full blur-2xl" />
        <div className="flex items-center gap-3 mb-3 relative">
          <span className="w-12 h-12 rounded-2xl bg-brand-500/15 grid place-items-center text-2xl">{post.emoji}</span>
          <Badge color="blue">{post.category}</Badge>
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-extrabold mb-2 relative">{post.title}</h1>
        <div className="text-xs text-inkSoft font-semibold flex items-center gap-2 mb-6 relative">
          <span>
            {new Date(post.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose-like space-y-4 relative">
          {post.content.map((block, i) =>
            block.type === "h" ? (
              <h2 key={i} className="font-heading font-extrabold text-lg mt-6 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-gradient rounded-full" />
                {block.text}
              </h2>
            ) : (
              <p key={i} className="text-ink leading-relaxed">
                {block.text}
              </p>
            )
          )}
        </div>
      </Card>

      {more.length > 0 && (
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="font-heading font-extrabold text-lg mb-3">Keep reading</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>
                <Card className="transition-transform hover:-translate-y-1">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <div className="font-heading font-extrabold text-sm">{p.title}</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
