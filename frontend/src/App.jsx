import React from "react";
import LandingPage from "./components/pages/before-login/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="text-black bg-[#F0F8FF] max-w-7xl mx-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
