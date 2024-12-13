import React from "react";
import "./App.css";
import SubtitleTimeline from "./components/SubtitleTimeline";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="toggle-container">
          <label htmlFor="animationToggle">Animation</label>
          <input type="checkbox" id="animationToggle" />
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
          <button className="export-button">EXPORT →</button>
        </section>

        {/* Subtitle Display */}
        <section className="subtitle-display">
          <p>Lorem Ipsum</p>
        </section>

        {/* Timeline */}
        <section className="timeline">
          <SubtitleTimeline />
        </section>
      </main>
    </div>
  );
}

export default App;
