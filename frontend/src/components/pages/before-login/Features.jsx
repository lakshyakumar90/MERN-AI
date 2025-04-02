import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Play, Users, Brain, Box, Kanban, GraduationCap, Building2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Features = () => {
  const featureCategories = [
    {
      icon: Users,
      headline: "Code Together in Real Time",
      description: "Bring your team together with seamless, real-time collaboration features designed for productivity and creativity.",
      features: [
        "See multiple cursors and edits live, just like Google Docs for code",
        "Discuss ideas with built-in chat rooms and video calls for pair programming",
        "Integrate with Git for easy branching, merging, and visual diffs",
        "Add notes directly on code for feedback or documentation",
        "Know who's working on what with real-time user tracking",
      ],
      visual: "collaboration",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587738/Njk2NjI1NjQx_kipunw.png"
    },
    {
      icon: Brain,
      headline: "Your Intelligent Coding Assistant",
      description: "Let AI supercharge your workflow with smart suggestions, fixes, and automation tailored to your code.",
      features: [
        "Get real-time autocompletion and best-practice recommendations",
        "Spot and fix errors with AI-driven insights",
        "Understand complex code with plain-language breakdowns",
        "Turn ideas into code with simple English prompts",
        "Auto-create docs from your codebase",
        "Generate unit tests to ensure quality",
      ],
      visual: "ai",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587808/Yz0_d6smnn.jpg"
    },
    {
      icon: Box,
      headline: "Run Code Anywhere, Instantly",
      description: "Execute and test your projects in secure, browser-based environments – no setup required.",
      features: [
        "Support for multiple languages and frameworks in the cloud",
        "Save your environment state between sessions",
        "Full-featured terminal right in your browser",
        "Track CPU and memory usage in real time",
        "Install dependencies with npm, pip, and more",
        "See your app running alongside your code",
      ],
      visual: "containers",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743588032/webcontainer_api-logo-light-blackwhite_cpr6st.svg"
    },
    {
      icon: Kanban,
      headline: "Stay Organized, Ship Faster",
      description: "Keep your projects on track with integrated tools for planning, tracking, and reporting.",
      features: [
        "Visualize tasks and workflows with drag-and-drop ease",
        "Sync with GitHub Issues or Jira for seamless bug tracking",
        "Log hours to monitor progress and productivity",
        "Set deadlines and celebrate achievements",
        "Get automated insights into project status",
      ],
      visual: "management",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743588123/cT03NQ_a4eeb8.jpg"
    },
    {
      icon: GraduationCap,
      headline: "Level Up Your Skills",
      description: "Whether you're a beginner or a pro, grow your coding expertise with tailored tools and resources.",
      features: [
        "Practice with real-world coding exercises",
        "Get recommendations based on your activity",
        "Save and reuse your favorite solutions",
        "Track your progress with detailed metrics",
        "Learn from experienced developers in the community",
      ],
      visual: "learning",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743588152/MGpqRWFPMC1Ubz0_asofcq.jpg"
    },
    {
      icon: Building2,
      headline: "Scale with Confidence",
      description: "Secure, customizable options for large teams and organizations.",
      features: [
        "Streamline access with enterprise authentication",
        "Host the platform on your own servers",
        "Maintain compliance with detailed activity records",
        "Tailor the UI to match your organization",
        "Monitor usage and performance across teams",
      ],
      visual: "enterprise",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743588247/RmdXOD0_kpa8mi.jpg"
    },
  ];

  const benefits = [
    {
      title: "For Developers",
      description: "Code faster with AI and instant runtimes.",
    },
    {
      title: "For Teams",
      description: "Collaborate effortlessly and manage projects in one place.",
    },
    {
      title: "For Learners",
      description: "Build skills with guided tools and challenges.",
    },
    {
      title: "For Enterprises",
      description: "Deploy securely at scale with full control.",
    },
  ];

  return (
    <section className="relative">
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[5%] min-h-screen px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-[poppins] font-bold text-3xl md:text-4xl mb-4">
            Everything You Need to Code, Collaborate, and Create
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the powerful features that make CodeTogether the ultimate coding environment – enhanced by AI and built for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5]" asChild>
              <Link to="/register">Start Free</Link>
            </Button>
            <Button variant="outline" className="group" asChild>
              <Link to="/demo">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="w-full max-w-7xl mx-auto space-y-24">
          {featureCategories.map((category, index) => (
            <div
              key={category.headline}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-purple-500" />
                  <h2 className="text-2xl font-bold">{category.headline}</h2>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  {/* Placeholder for feature visual */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <img src={category.image} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Summary */}
        <div className="max-w-3xl mx-auto w-full my-24 text-center">
          <h2 className="text-2xl font-bold mb-12">Why Choose CodeTogether?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <Button variant="default" className="bg-[#774BE5] mt-8" asChild>
            <Link to="/pricing">See Pricing</Link>
          </Button>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Future of Coding?</h2>
          <p className="text-gray-600 mb-8">
            Join a community of developers building smarter, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5]" asChild>
              <Link to="/register">Start Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Request Enterprise Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Features;