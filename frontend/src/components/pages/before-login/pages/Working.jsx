import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Working = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress based on scroll position
      const progress = Math.min(
        Math.max((windowHeight - containerTop) / containerHeight, 0),
        1.3
      );
      console.log(progress);
      setProgress(progress);
      

      // Set active step based on progress
      if (progress < 0.33) setActiveStep(0);
      else if (progress < 0.66) setActiveStep(1);
      else setActiveStep(2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "Collaborate Seamlessly",
      text: "Invite your team, share projects, and code together in real time.",
      image:
        "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575217/MGRiNGQwOWE_viqptq.jpg",
    },
    {
      title: "Leverage AI Assistance",
      text: "Get instant code suggestions, explanations, and optimizations from our AI.",
      image:
        "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575238/VXQ2OFBrPQ_o7ziot.jpg",
    },
    {
      title: "Run & Test Instantly",
      text: "Execute your code in web containers with built-in terminals and previews.",
      image:
        "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743575251/MS5zdmc_rltj4r.png",
    },
  ];

  return (
    <section ref={containerRef}  className="flex flex-col w-full md:w-4/5 mx-auto items-center px-4 md:px-5 py-10 relative overflow-clip">
      <h1 className={`font-[poppins] font-bold text-2xl md:text-4xl mb-6 md:mb-10 text-center ${progress >= 1.2 ? 'block' : 'sticky'} top-10`}>
        From Idea to Execution in One Place
      </h1>

      {/* Steps */}
      <div className="relative w-full mt-[20%]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`sticky top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
              activeStep === index
                ? "opacity-100 scale-100"
                : "scale-95"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-full md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                <p className="text-gray-600 mb-6">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="relative w-full flex items-center justify-center">
        <Button variant="default" className="bg-[#774BE5] absolute bottom-[5rem]" asChild>
          <Link to="/register">Try It Now</Link>
        </Button>
        </div>
      </div>
    </section>
  );
};

export default Working;
