import React from "react";
import Navbar from "./Navbar";
import First from "./pages/First";
import Features from "./pages/features";
import Working from "./pages/Working";
import Benefits from "./pages/Benefits";
import SocialProof from "./pages/SocialProof";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Features />
      <Working />
      <Benefits />
      <SocialProof />
    </div>
  );
};

export default LandingPage;
