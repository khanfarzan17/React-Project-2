import React, { useState, useContext, useEffect } from "react";
import "../styles/Greeting.css";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  const handleGreeting = () => {
    setGreeting(`Hello ${name}`);
  };

  const handleClear = () => {
    setName("");
    setGreeting("");
  };

  useEffect(() => {
    document.body.className = theme ? "DarkMode" : "LightMode";
  }, [theme]);

  return (
    <div className={`container ${theme ? "DarkMode" : "LightMode"}`}>
      <h1 className="app-title">Greeting App</h1>
      <div className="toggle-btn">
        {theme ? (
          <CiDark style={{ color: "white" }} onClick={toggleTheme} />
        ) : (
          <CiLight style={{ color: "black" }} onClick={toggleTheme} />
        )}
      </div>

      <input
        type="text"
        className="input-field"
        value={name}
        onChange={handleName}
        placeholder="Enter your name"
      />
      <div className="button-container">
        <button
          className="button"
          onClick={handleGreeting}
          disabled={name.trim() === ""}
        >
          Greet
        </button>
        <button className="button" onClick={handleClear}>
          Clear
        </button>
      </div>

      <h2 className="greeting">{greeting}</h2>
    </div>
  );
};

export default Greeting;
