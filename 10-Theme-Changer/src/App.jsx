import React from "react";
import { ThemeContext } from "./Context/Theme";

import "./Context/Theme.css";
import { useContext } from "react";
const App = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={` container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleTheme} className="toggle-btn">
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default App;
