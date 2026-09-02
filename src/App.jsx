import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TestManagerDashboard from "./pages/TestManagerDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChapterLaunch from "./pages/ChapterLaunch";
import Exam from "./pages/Exam";
import Review from "./pages/Review";
import Result from "./pages/Result";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Glossary from "./pages/Glossary";
import ExamPreview from "./pages/ExamPreview";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/foundation" element={<Dashboard />} />
      <Route path="/foundation/chapter/:chapterId" element={<ChapterLaunch />} />
      <Route path="/test-manager" element={<TestManagerDashboard />} />
      <Route path="/test-manager/chapter/:chapterId" element={<ChapterLaunch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/review" element={<Review />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:id" element={<Result />} />
      <Route path="/results" element={<Result />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/preview/:examId" element={<ExamPreview />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
