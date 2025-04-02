import React from "react";
import LandingPage from "./components/pages/before-login/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pricing from "./components/pages/before-login/Pricing";
import Features from "./components/pages/before-login/Features";
import About from "./components/pages/before-login/About";
import Contact from "./components/pages/before-login/Contact";
import Login from "./components/signup-login/Login";
import Register from "./components/signup-login/Register";
import Privacy from "./components/terms-policy/Privacy";
import Terms from "./components/terms-policy/Terms";

const App = () => {
  return (
    <div className="text-black bg-[#F0F8FF] max-w-7xl mx-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
