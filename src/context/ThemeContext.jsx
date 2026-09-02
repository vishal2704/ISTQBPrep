import { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  { id: "light", label: "Sunny Light", icon: "☀️", swatch: "#58CC02" },
  { id: "dark", label: "Night Owl", icon: "🌙", swatch: "#1CB0F6" },
  { id: "sunset", label: "Sunset", icon: "🌅", swatch: "#FF9600" },
  { id: "ocean", label: "Ocean", icon: "🌊", swatch: "#1CB0F6" },
  { id: "candy", label: "Candy", icon: "🍬", swatch: "#FF4B81" },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (id) => setThemeState(id);
  const openSettings = () => setSettingsOpen(true);
  const closeSettings = () => setSettingsOpen(false);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themes: THEMES, settingsOpen, openSettings, closeSettings }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
