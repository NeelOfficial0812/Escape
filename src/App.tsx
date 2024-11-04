import React from "react";
import Timer from "./components/timer";
import "./App.css";

const App: React.FC = () => {
  const targetDate = "2025-08-15T12:00:00+05:30"; // August 15, 2025, 12:00 PM IST

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
        gap: "20px",
      }}
    >
      <h1>Escape Timer</h1>
      <Timer targetDate={targetDate} />
      <p>For Neel!</p>
    </div>
  );
};

export default App;
