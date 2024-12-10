import React from "react";
import "./App.css";
import Timer from "./components/Timer";

const targetDate = "2025-08-15T12:00:00+05:30";

const App: React.FC = () => {
  return (
    <div className="App-Main">
      <div className="App-Title">Escape Timer</div>
      <Timer targetDate={targetDate} />
    </div>
  );
};

export default App;
