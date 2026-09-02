import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Card from "../components/Card";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <PageShell bg="landing">
      <div className="min-h-[70vh] flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <div className="text-6xl mb-4">🧭</div>
          <h1 className="font-heading text-2xl font-extrabold mb-2">Page not found</h1>
          <p className="text-inkSoft mb-6">
            That page doesn't exist — it may have moved, or the link might be off.
          </p>
          <div className="flex flex-col gap-2">
            <Link to="/foundation">
              <Button className="w-full">🦉 Go to Foundation Dashboard</Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                See all ISTQB exams
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
