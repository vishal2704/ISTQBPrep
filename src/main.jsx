import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ExamProvider } from "./context/ExamContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ExamProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ExamProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);

// Register the PWA service worker (production builds only — avoids caching
// interfering with Vite's dev server hot reload).
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
