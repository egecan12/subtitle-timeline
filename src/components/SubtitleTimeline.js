import React, { useEffect, useState } from "react";
import SubtitleBar from "./SubtitleBar";
import "./SubtitleTimeline.css";

const SubtitleTimeline = () => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Fetch subtitle JSON data
    fetch("/subtitle.json")
      .then((response) => response.json())
      .then((data) => setSubtitles(data))
      .catch((error) => console.error("Error loading subtitles:", error));
  }, []);

  const handleSliderChange = (event) => {
    setCurrentTime(parseFloat(event.target.value));
  };

  return (
    <div className="timeline-container">
      <input
        type="range"
        min="0"
        max="100"
        step="0.01"
        value={currentTime}
        onChange={handleSliderChange}
        className="timeline-slider"
      />
      <div className="timeline">
        {subtitles.map((subtitle, index) => (
          <SubtitleBar
            key={index}
            start={subtitle.start_time}
            end={subtitle.end_time}
            text={subtitle.subtitle}
            currentTime={currentTime}
          />
        ))}
      </div>
    </div>
  );
};

export default SubtitleTimeline;
