import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const Splash = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Add any necessary cleanup code here
  //   return () => {
  //     // Cleanup code
  //   };
  // }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 animate-fade-in">
          Welcome to Note Maker
        </h1>
        <p className="mb-8 text-xl text-gray-600 max-w-md mx-auto animate-fade-in animation-delay-200">
          Organize your thoughts beautifully with our intuitive note-taking platform.
        </p>
        <div className="space-y-4 animate-fade-in animation-delay-400">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
          >
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Join thousands of users who trust Note Maker
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 text-gray-400 text-sm">
        <span>Simple</span>
        <span>•</span>
        <span>Secure</span>
        <span>•</span>
        <span>Powerful</span>
      </div>
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
