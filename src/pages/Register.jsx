import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    register(firstName || "Learner", email || "learner@example.com");
    navigate("/foundation");
  }

  return (
    <PageShell>
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="max-w-md w-full">
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">🎉</div>
            <h1 className="font-heading text-2xl font-extrabold">Create your account</h1>
            <p className="text-inkSoft mt-1">Track streaks, bookmarks and your progress.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-bold block mb-1">First name</label>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-border bg-surface"
              />
            </div>
            <div>
              <label className="text-sm font-bold block mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-border bg-surface"
              />
            </div>
            <div>
              <label className="text-sm font-bold block mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-border bg-surface"
              />
            </div>
            <Button type="submit" variant="brand" className="w-full">
              Create account
            </Button>
          </form>

          <div className="text-center mt-5 text-sm">
            <span className="text-inkSoft">Already have an account? </span>
            <Link to="/login" className="font-bold text-skyDark hover:underline">
              Sign in
            </Link>
          </div>

          <p className="text-center text-xs text-inkSoft mt-5 bg-black/5 rounded-xl p-3">
            🔒 Demo mode: no real account is created on a server — your name and email are
            only saved in this browser so streaks and progress can greet you by name.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
