import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(()=> {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== null ? storedTheme : 'light'
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
