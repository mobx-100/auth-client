import React from "react";
import { Link } from "react-router-dom";

function Welcome({ darkMode, setDarkMode }) {
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
    <div className="container">
      <h1>Stopwatch</h1>

      <p
        style={{
          textAlign: "center",
          margin: "20px 0",
          color: "#666",
          lineHeight: "1.6",
        }}
      >
        Secure authentication using JWT.
        <br />
    </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link to="/login" style={{ width: "100%" }}>
          <button>Login</button>
        </Link>

        <Link to="/signup" style={{ width: "100%" }}>
          <button>Signup</button>
        </Link>
      </div>
    </div></>
  );
}

export default Welcome;