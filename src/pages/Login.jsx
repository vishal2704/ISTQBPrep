import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email || "learner@example.com");
    navigate("/foundation");
  }

  return (
    <PageShell>
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="max-w-md w-full">
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">🦉</div>
            <h1 className="font-heading text-2xl font-extrabold">Welcome back</h1>
            <p className="text-inkSoft mt-1">Sign in to pick up where you left off.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign in
            </Button>
          </form>

          <div className="text-center mt-5 text-sm">
            <span className="text-inkSoft">New here? </span>
            <Link to="/register" className="font-bold text-skyDark hover:underline">
              Create a free account
            </Link>
          </div>
          <Link
            to="/foundation"
            className="block text-center mt-2 text-sm text-inkSoft hover:underline"
          >
            Continue as guest instead →
          </Link>

          <p className="text-center text-xs text-inkSoft mt-5 bg-black/5 rounded-xl p-3">
            🔒 Demo mode: this is a local sign-in only — your password isn't checked or sent
            anywhere. Everything is stored in your browser, not a server.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
