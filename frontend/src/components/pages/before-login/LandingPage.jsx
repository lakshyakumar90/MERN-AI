import React from "react";
import Navbar from "./Navbar";
import First from "./pages/First";
import Features from "./pages/features";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Features />
    </div>
  );
};

export default LandingPage;
