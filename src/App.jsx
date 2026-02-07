import "./App.css";
import Landing from "./Landing";
import Message from "./Message";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [maximize, setMaximize] = useState(false);
  return (
    <div className="app">
      <div className={`${maximize ? "max-window" : "window"}`}>
        {/* Title Bar */}
        <div className="title-bar">
          <span className="title">LOVE.exe</span>
          <div className="controls">
            <span className="btn">
              <img
                src="/images/minimize.png"
                height={20}
                width={20}
                onClick={() => setMaximize(false)}
              />
            </span>
            <span className="btn">
              <img
                src="/images/fullscrn.png"
                height={20}
                width={20}
                onClick={() => setMaximize(true)}
              />
            </span>
            <span className="btn">
              <img
                src="/images/close.png"
                onClick={() => setCurrentPage("landing")}
                height={20}
                width={20}
              />
            </span>
          </div>
        </div>
        {currentPage === "landing" ? (
          <Landing setCurrentPage={setCurrentPage} maximize={maximize} />
        ) : (
          <Message />
        )}
      </div>
    </div>
  );
}
