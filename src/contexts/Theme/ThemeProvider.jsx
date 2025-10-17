import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  function handleChangeTheme(newTheme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const value = { theme, handleChangeTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
