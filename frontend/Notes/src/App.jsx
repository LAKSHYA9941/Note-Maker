import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to Note Maker</h1>
      <p className="mb-6 text-gray-600">Organize your thoughts beautifully.</p>
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Get Started
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
