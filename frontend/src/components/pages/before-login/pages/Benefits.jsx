import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "For Individuals",
      description: "Master coding with AI guidance and interactive challenges.",
      icon: User,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "For Teams",
      description: "Streamline workflows with collaboration and project tools.",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "For Enterprises",
      description: "Scale securely with SSO, analytics, and custom deployments.",
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="flex flex-col w-full md:w-4/5 mx-auto items-center mb-10 px-4 md:px-5 py-10 relative">
      <h1 className="font-[poppins] font-bold text-2xl md:text-4xl mb-6 md:mb-10 text-center">
        Built for Developers, Teams, and Learners
      </h1>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`p-4 rounded-full ${benefit.bgColor} mb-4`}>
              <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
            </div>
            <h2 className="text-xl font-bold mb-3 text-center">{benefit.title}</h2>
            <p className="text-gray-600 text-center mb-4">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <Button variant="default" className="bg-[#774BE5]" asChild>
          <Link to="/pricing">Choose Your Plan</Link>
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
