import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";

function Home({ darkMode, setDarkMode }) {
    console.log({
  darkMode,
  setDarkMode,
  type: typeof setDarkMode,
});
  const [loggedInUser, setLoggedInUser] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "");
  }, []);

  useEffect(() => {
    if (running) {
      startTimeRef.current = performance.now() - time;

      intervalRef.current = setInterval(() => {
        setTime(performance.now() - startTimeRef.current);
      }, 1);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running,time]);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(
      3,
      "0"
    )}`;
  };

  const handleStart = () => {
    if (!running) setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (running) {
      setLaps((prev) => [...prev, formatTime(time)]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    handleSuccess("Logged Out Successfully");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (<>
    <div className="theme-toggle">
  <label className="switch">
    <input
      type="checkbox"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
    />
    <span className="slider"></span>
  </label>
</div>
    <div className="home-page">
      <div
        style={{
          width: "500px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2>Welcome, {loggedInUser}</h2>

        <h1
          style={{
            fontSize: "48px",
            fontFamily: "monospace",
            margin: "30px 0",
          }}
        >
          {formatTime(time)}
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
        <button className="start-btn" onClick={handleStart}>Start</button>
        <button className="stop-btn" onClick={handleStop}>Stop</button>
        <button className="lap-btn" onClick={handleLap}>Lap</button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Logout
        </button>

        <h3>Laps</h3>

        <div
          style={{
            maxHeight: "220px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {laps.length === 0 ? (
            <p>No laps recorded.</p>
          ) : (
            laps.map((lap, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span>Lap {index + 1}</span>
                <span>{lap}</span>
              </div>
            ))
          )}
        </div>

        <ToastContainer />
      </div>
    </div>
    </>
  );
}

export default Home;