import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './pages/Landing/LandingPage';
import SignIn from './pages/Sign-in/SignIn';
import Login from './pages/Log-in/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Sign-up/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />


        {/* Rutas privadas */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;