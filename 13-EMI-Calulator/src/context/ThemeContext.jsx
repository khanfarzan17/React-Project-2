import React, { useState, createContext } from "react";

const Themecontext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <Themecontext.Provider value={{ toggleTheme, theme }}>
      {children}
    </Themecontext.Provider>
  );
};

export { Themecontext, ThemeProvider };
