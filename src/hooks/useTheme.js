import { useState, useEffect } from "react";

export const themes = {
  "MERN Dark": {
    bg: "#0a0f1a",
    surface: "#111827",
    card: "#1a2233",
    border: "#1e293b",
    accent: "#00ff9d",
    accentDim: "#00cc7d",
    text: "#e2e8f0",
    textMuted: "#64748b",
    highlight: "#00ff9d",
  },
  "React Blue": {
    bg: "#050d1a",
    surface: "#0d1b2e",
    card: "#102040",
    border: "#1a3050",
    accent: "#61dafb",
    accentDim: "#38b2e8",
    text: "#e0f0ff",
    textMuted: "#5b8ab0",
    highlight: "#61dafb",
  },
  "Node Green": {
    bg: "#050f0a",
    surface: "#0a1f12",
    card: "#0f2d1a",
    border: "#1a3d28",
    accent: "#68d391",
    accentDim: "#48bb78",
    text: "#e0ffe8",
    textMuted: "#4a8a5a",
    highlight: "#68d391",
  },
  Terminal: {
    bg: "#0d0d0d",
    surface: "#141414",
    card: "#1a1a1a",
    border: "#2a2a2a",
    accent: "#f0e040",
    accentDim: "#c0b020",
    text: "#d4d4d4",
    textMuted: "#555555",
    highlight: "#f0e040",
  },
};

export const useTheme = () => {
  const [themeName, setThemeName] = useState("MERN Dark");
  const theme = themes[themeName];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, v);
    });
  }, [theme]);

  return { themeName, setThemeName, theme, themeNames: Object.keys(themes) };
};
