import React from "react";
import "./arrow.css";

export default function Arrow({ arrow }) {
  let text;
  switch (arrow) {
    case "left":
      text = "⬅";
      break;
    case "right":
      text = "➡";
      break;
    case "up":
      text = "⬆";
      break;
    case "down":
      text = "⬇";
      break;
    default:
      console.log("err");
  }

  return <div className="arrow">{text}</div>;
}
