import { useState } from "react";

const GenerateRandomColor = () => {
  const [color, setColor] = useState("#FFFFFF");

  const generateColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = `#${randomColor.padStart(6, "0")}`;
    setColor(randomColor);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={generateColor}
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          borderRadius: "20px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Generate Random Color
      </button>
      <h2 style={{ color: "#ffffff", marginTop: "20px" }}>Color: {color}</h2>
    </div>
  );
};

export default GenerateRandomColor;
