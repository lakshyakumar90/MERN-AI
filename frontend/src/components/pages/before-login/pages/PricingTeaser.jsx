import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, CreditCard, ArrowRight } from "lucide-react";

const PricingTeaser = () => {
  return (
    <section className="flex flex-col w-full md:w-4/5 mx-auto items-center px-4 md:px-5 py-10 relative my-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Icon */}
        <div className="p-4 rounded-full bg-purple-50 mb-6">
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>

        {/* Headline */}
        <h1 className="font-[poppins] font-bold text-3xl md:text-5xl mb-6 text-center">
          Start Coding for Free
        </h1>

        {/* Description */}
        <div className="flex flex-col items-center gap-4 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-500" />
            <span>No credit card required</span>
          </div>
          <p className="text-lg">
            Begin with our free tier. Upgrade for advanced AI features, team tools, and enterprise support.
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          variant="default" 
          className="bg-[#774BE5] group hover:bg-[#774BE5]/90 transition-all duration-300" 
          asChild
        >
          <Link to="/pricing" className="flex items-center gap-2">
            View Pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default PricingTeaser;