import React from "react";
import "./shapes.css";

export function CreateBox({
  text,
  style = {}, // pass any custom styles
  className = "", // optional extra class
}) {
  const defaultStyle = {
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
    fontSize: "1rem",
    color: "#333",
    backgroundColor: "#fff",
    padding: "16px 20px",
    borderRadius: "12px",
    border: "2px solid #444",
    maxWidth: "600px",
    minWidth: "200px",
    width: "90%",
    lineHeight: 1.5,
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    margin: "10px auto",
  };

  return (
    <div className={`shape-box ${className}`} style={{ ...defaultStyle, ...style }}>
      {text.split(/\n/).map((line, i) => (
        <p key={i} style={{ margin: 0 }}>
          {line}
        </p>
      ))}
    </div>
  );
}
export function CreateCircle({ label }) {
  return <div className="shape circle">{label}</div>;
}

export function CreateTriangle() {
  return <div className="shape triangle"></div>;
}