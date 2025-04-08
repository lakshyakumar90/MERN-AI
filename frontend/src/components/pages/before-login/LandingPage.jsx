import React from "react";
import Navbar from "./Navbar";
import First from "./before-partials/First";
import FeaturesSummary from "./before-partials/FeaturesSummary";
import Working from "./before-partials/Working";
import Benefits from "./before-partials/Benefits";
import SocialProof from "./before-partials/SocialProof";
import PricingTeaser from "./before-partials/PricingTeaser";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
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
