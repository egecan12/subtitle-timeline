import React from "react";
import "./SubtitleBar.css";

const SubtitleBar = ({ start, end, text, currentTime }) => {
  const visible = currentTime >= start && currentTime <= end;

  return visible ? (
    <div className="subtitle-bar">
      <span className="subtitle-text">{text}</span>
    </div>
  ) : null;
};

export default SubtitleBar;
