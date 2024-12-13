import React, { useState, useEffect } from "react";
import "./App.css";
import SubtitleTimeline from "./components/SubtitleTimeline";
import SubtitleDisplay from "./components/SubtitleDisplay";

function App() {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isAnimationOn, setIsAnimationOn] = useState(false); // State for animation toggle

  useEffect(() => {
    // Fetch subtitle JSON data
    fetch("/subtitle.json")
      .then((response) => response.json())
      .then((data) => {
        // Set the initial subtitle
        if (data.length > 0) {
          setCurrentSubtitle(data[0].subtitle);
        }
      })
      .catch((error) => console.error("Error loading subtitles:", error));
  }, []);

  // Handle toggle
  const handleToggleChange = (e) => {
    setIsAnimationOn(e.target.checked);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="toggle-container">
          <label htmlFor="animationToggle">Animation</label>
          <input
            type="checkbox"
            id="animationToggle"
            onChange={handleToggleChange}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Video Panel */}
        <section className="video-panel">
          <div className="video-display">
            <div className="video-gradient" />
          </div>
          <div className="video-controls">
            <button>⟲</button>
            <button>▶</button>
            <button>⟳</button>
          </div>
          <div className="export-button-container">
            <button className="export-button">Export</button>
          </div>
        </section>

        {/* Subtitle Display */}
        <section className="subtitle-display">
          <SubtitleDisplay
            text={currentSubtitle}
            isAnimationOn={isAnimationOn} // Pass the toggle state as a prop
          />
        </section>

        {/* Timeline */}
        <section className="timeline">
          <SubtitleTimeline setCurrentSubtitle={setCurrentSubtitle} />
        </section>
      </main>
    </div>
  );
}

export default App;
