import React from "react";
import Navbar from "./Navbar";
import First from "./pages/First";
import Features from "./pages/features";
import Working from "./pages/Working";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Features />
      <Working />
    </div>
  );
};

export default LandingPage;
