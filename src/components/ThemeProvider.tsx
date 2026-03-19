"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Read saved preference; default = dark
    const saved = localStorage.getItem("theme") as Theme;
    const resolved: Theme = saved === "light" ? "light" : "dark";
    setTheme(resolved);
    const root = document.documentElement;
    if (resolved === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#0a0a0f";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f4f4f5";
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#0a0a0f";
      document.body.style.backgroundColor = "#0a0a0f";
      document.body.style.color = "#e4e4e7";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f4f4f5";
      document.body.style.backgroundColor = "#f4f4f5";
      document.body.style.color = "#18181b";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
