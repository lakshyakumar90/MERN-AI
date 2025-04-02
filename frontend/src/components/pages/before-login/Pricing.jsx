import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "./Navbar";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      name: "Starter",
      price: 0,
      annualPrice: 0,
      tagline: "Perfect for learning and small personal projects.",
      features: [
        "Real-time collaboration (up to 2 users per project)",
        "Basic AI code suggestions",
        "Web containers (limited to 1GB storage, 1 CPU core)",
        "5 projects max",
        "Community support",
      ],
      cta: "Get Started",
      ctaLink: "/register",
      popular: false,
    },
    {
      name: "Pro",
      price: 15,
      annualPrice: 12,
      tagline: "Ideal for freelancers and solo developers who want more power.",
      features: [
        "Everything in Starter, plus:",
        "Unlimited projects",
        "Advanced AI features (code explanation, bug fixing)",
        "Web containers (5GB storage, 2 CPU cores)",
        "Version control integration",
        "Priority email support",
        "Access to coding challenges and snippets library",
      ],
      cta: "Start Pro Trial",
      ctaLink: "/register",
      popular: true,
    },
    {
      name: "Team",
      price: 35,
      annualPrice: 28,
      tagline: "Built for teams to collaborate and ship code faster.",
      features: [
        "Everything in Pro, plus:",
        "Unlimited collaborators per project",
        "Full AI suite (test case generation, optimization suggestions)",
        "Web containers (10GB storage, 4 CPU cores per user)",
        "Project management tools (Kanban, issue tracking)",
        "Team chat and video calls",
        "Role-based permissions",
        "24/7 chat support",
      ],
      cta: "Start Team Trial",
      ctaLink: "/register",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Contact Sales",
      annualPrice: "Contact Sales",
      tagline: "Custom solutions for large organizations and advanced needs.",
      features: [
        "Everything in Team, plus:",
        "Single sign-on (SSO)",
        "On-premise deployment option",
        "Custom AI model training",
        "Unlimited web container resources (customizable)",
        "Audit logs and compliance tools",
        "Dedicated account manager",
        "Custom integrations and branding",
        "SLA with 99.9% uptime guarantee",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer:
        "The Starter plan includes basic collaboration, AI suggestions, and web containers – perfect for trying out the platform.",
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! Upgrade or downgrade anytime from your account dashboard.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes, save 20% by choosing annual billing on Pro and Team plans.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "You'll automatically move to the Starter plan unless you upgrade.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We provide a 30-day money-back guarantee on paid plans – no questions asked.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[10%] min-h-screen px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-[poppins] font-bold text-3xl md:text-4xl mb-4">
            Pricing That Fits Your Coding Needs
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Start for free, scale as you grow – unlock powerful AI tools and
            collaboration features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${
                !isAnnual ? "text-purple-600 font-semibold" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <div
                className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform duration-300 ${
                  isAnnual ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual ? "text-purple-600 font-semibold" : "text-gray-500"
              }`}
            >
              Annual <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-2xl bg-white shadow-lg ${
                tier.popular
                  ? "border-2 border-purple-500"
                  : "border border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h2 className="text-xl font-bold mb-2">{tier.name}</h2>
              <div className="mb-4">
                <span className="text-3xl font-bold">
                  {typeof tier.price === "number" ? "$" : ""}
                  {isAnnual ? tier.annualPrice : tier.price}
                </span>
                {typeof tier.price === "number" && (
                  <span className="text-gray-500">/month</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{tier.tagline}</p>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                className={`w-full ${
                  tier.popular ? "bg-[#774BE5] hover:bg-[#774BE5]/90" : ""
                }`}
                asChild
              >
                <Link to={tier.ctaLink}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto w-full mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Got Questions? We've Got Answers
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Accordion
                type="single"
                collapsible
                className="border-b-1"
                key={index}
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Code Smarter?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of developers already using CodeTogether to build
            better, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5]" asChild>
              <Link to="/register">Start Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Sales for Enterprise</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
