import React from "react";
import Navbar from "./Navbar";
import First from "./pages/First";
import Features from "./pages/features";
import Working from "./pages/Working";
import Benefits from "./pages/Benefits";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Features />
      <Working />
      <Benefits />
    </div>
  );
};

export default LandingPage;
