import React from "react";
import LandingPage from "./components/pages/before-login/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pricing from "./components/pages/before-login/Pricing";

const App = () => {
  return (
    <div className="text-black bg-[#F0F8FF] max-w-7xl mx-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
