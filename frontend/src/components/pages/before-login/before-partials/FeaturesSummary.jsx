import React from "react";
import SpotlightCard from "@/components/reactbits-components/SpotlightCard/SpotlightCard";

const FeaturesSummary = () => {
  const features = [
    {
      title: "Real-Time Collaboration",
      description:
        "Work together in real-time with multi-user editing, live chat, and video calls – perfect for teams and pair programming.",
      className:
        "rounded-tl-[1rem] md:rounded-tl-[2rem] rounded-br-[4rem] md:rounded-br-[9rem] md:pt-3.5 md:pr-7.5 md:pb-2.5 md:pl-2.5",
      spotlightColor: "rgba(145, 179, 182, 0.66)",
      image : "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575217/MGRiNGQwOWE_viqptq.jpg"
    },
    {
      title: "AI-Powered Coding",
      description:
        "Boost productivity with AI code suggestions, bug fixes, and auto-generated documentation – your intelligent coding companion.",
      className:
        "rounded-tr-[1rem] md:rounded-tr-[2rem] rounded-bl-[4rem] md:rounded-bl-[9rem] md:pt-3.5 md:pr-1.25 md:pb-2.5 md:pl-5",
      spotlightColor: "rgba(145, 179, 182, 0.68)",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575238/VXQ2OFBrPQ_o7ziot.jpg"
    },
    {
      title: "Web Containers",
      description:
        "Run code instantly in isolated, browser-based environments – no setup, just code.",
      className:
        "rounded-bl-[1rem] md:rounded-bl-[2rem] rounded-tr-[4rem] md:rounded-tr-[9rem]",
      spotlightColor: "rgba(145, 179, 182, 0.68)",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575251/MS5zdmc_rltj4r.png"
    },
    {
      title: "Project Tools",
      description:
        "Stay organized with built-in project management, version control, and progress tracking.",
      className:
        "rounded-br-[1rem] md:rounded-br-[2rem] rounded-tl-[4rem] md:rounded-tl-[9rem]",
      spotlightColor: "rgba(145, 179, 182, 0.68)",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575266/cGVn_syvvlh.jpg"
    },
  ];

  return (
    <section className="flex flex-col w-full md:w-4/5 mx-auto items-center min-h-screen px-4 md:px-5 py-10 relative">
      <h1 className="font-[poppins] font-bold text-2xl md:text-4xl mb-6 md:mb-10 text-center">
        Why Developers Love CodeTogether
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full relative">
        {/* Central Logo */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            className="h-20 md:h-32 w-20 md:w-32 rounded-full object-cover border-4 border-white shadow-lg"
            alt="Central Logo"
          />
        </div>

        {features.map((feature, index) => (
          <div key={index} className="relative">
            <SpotlightCard
              className={`custom-spotlight-card bg-[#C1DFEA] ${feature.className} border-2 border-white shadow-lg flex items-center flex-col h-[16rem] md:h-[20rem] p-2`}
              spotlightColor={feature.spotlightColor}
            >
              <img
                src={feature.image}
                className="h-24 md:h-32 w-24 md:w-32 rounded-full object-cover"
                alt={`Feature ${index + 1}`}
              />
              <h1 className="text-base md:text-lg font-medium mt-3">
                {feature.title}
              </h1>
              <p className="text-center text-xs md:text-sm w-full md:w-full mt-2">
                {feature.description}
              </p>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSummary;
