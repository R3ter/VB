import React from "react";

export default function TopLabel({ text = "TopLabel", color = "white" }) {
  return (
    <div>
      <h1 style={{ color }}>{text}</h1>
    </div>
  );
}
