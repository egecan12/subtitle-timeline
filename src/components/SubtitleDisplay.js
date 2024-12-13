import React from "react";
import "./SubtitleDisplay.css";

const SubtitleDisplay = ({ text, isAnimationOn }) => {
  return <p className={isAnimationOn ? "animated-text" : ""}>{text}</p>;
};

export default SubtitleDisplay;
