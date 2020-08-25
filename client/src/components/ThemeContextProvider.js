import React, { useContext, useState } from "react";
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useDarkTheme() {
  return useContext(ThemeContext);
}
export function useDarkThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider({ children }) {
  // true false if dark theme is enabled
  const [darkTheme, setDarkTheme] = useState(true);
  // function to update theme
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
