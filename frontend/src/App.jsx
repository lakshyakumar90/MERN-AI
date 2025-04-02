import React from "react";
import LandingPage from "./components/pages/before-login/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pricing from "./components/pages/before-login/Pricing";
import Features from "./components/pages/before-login/Features";
import About from "./components/pages/before-login/About";

const App = () => {
  return (
    <div className="text-black bg-[#F0F8FF] max-w-7xl mx-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
