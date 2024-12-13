import React, { useEffect, useState } from "react";
import SubtitleBar from "./SubtitleBar";
import "./SubtitleTimeline.css";

const SubtitleTimeline = ({ setCurrentSubtitle }) => {
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
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);

    // Find the current subtitle based on the new time
    const currentSubtitle = subtitles.find(
      (subtitle) =>
        newTime >= subtitle.start_time && newTime <= subtitle.end_time
    );

    // Update the current subtitle text
    if (currentSubtitle) {
      setCurrentSubtitle(currentSubtitle.subtitle);
    } else {
      setCurrentSubtitle("");
    }
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
      <div className="subtitle-container">
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
