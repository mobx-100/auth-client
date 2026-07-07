import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RefrshHandler from './RefrshHandler';
import Welcome from "./pages/Welcome";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
  return (
    <div className="App">
  <RefrshHandler setIsAuthenticated={setIsAuthenticated} />

  <Routes>
    <Route
  path="/"
  element={
    <Welcome
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

    <Route
      path="/login"
      element={
        <Login
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      }
    />

    <Route
      path="/signup"
      element={
        <Signup
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      }
    />

    <Route
      path="/home"
      element={
        <PrivateRoute
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
      }
    />
  </Routes>
</div>
  );
}

export default App;
