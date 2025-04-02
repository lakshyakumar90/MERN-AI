import React from "react";
import Navbar from "./Navbar";
import First from "./pages/First";
import FeaturesSummary from "./pages/FeaturesSummary";
import Working from "./pages/Working";
import Benefits from "./pages/Benefits";
import SocialProof from "./pages/SocialProof";
import PricingTeaser from "./pages/PricingTeaser";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <FeaturesSummary />
      <Working />
      <Benefits />
      <SocialProof />
      <PricingTeaser />
      <Footer />
    </div>
  );
};

export default LandingPage;
