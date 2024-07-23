import { useState } from "react";
import "../styles/ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1>Color Picker App</h1>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="input-picker"
      />
      <h2 style={{ color: color }}>Current Color is {color}</h2>
    </div>
  );
};

export default ColorPicker;
