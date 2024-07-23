import React, { useState } from "react";
import "../styles/Menu.css";

const Menu = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };
  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isopen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Menu;
