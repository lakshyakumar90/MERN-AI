import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Users, FolderGit2, Activity } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "This platform saved us hours with its AI code reviews and real-time collaboration!",
      author: "Sarah K.",
      role: "Lead Developer",
      company: "TechCorp",
    },
    {
      quote: "The web containers are a game-changer – no more local setup headaches.",
      author: "Mike R.",
      role: "Freelancer",
      company: "Independent",
    },
    {
      quote: "Perfect for teaching coding – my students love the interactive tools.",
      author: "Prof. James T.",
      role: "Educator",
      company: "University",
    },
  ];

  const stats = [
    {
      value: "10,000+",
      label: "Active Users",
      icon: Users,
    },
    {
      value: "50,000+",
      label: "Projects Created",
      icon: FolderGit2,
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: Activity,
    },
  ];

  return (
    <section className="flex flex-col w-full md:w-4/5 mx-auto items-center min-h-screen px-4 md:px-5 py-10 relative">
      <h1 className="font-[poppins] font-bold text-2xl md:text-4xl mb-6 md:mb-10 text-center">
        Trusted by Developers Worldwide
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg"
          >
            <div className="p-4 rounded-full bg-purple-50 mb-4">
              <stat.icon className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 text-center">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-purple-500 mb-4" />
            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
            <div className="mt-auto">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">
                {testimonial.role} at {testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Button variant="default" className="bg-[#774BE5]" asChild>
          <Link to="/register">Join Our Community</Link>
        </Button>
      </div>
    </section>
  );
};

export default SocialProof;