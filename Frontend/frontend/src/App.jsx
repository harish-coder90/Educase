import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/profie.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center  justify-center p-4">
      
      <div className="w-[361.607px] h-[783px] bg-white rounded-3xl border border-black shadow-lg p-6">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} /> 
             <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Profile />} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
