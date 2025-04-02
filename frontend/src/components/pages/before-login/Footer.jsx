import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
// import { ArrowRight } from "@/components/icons";

const Footer = () => {
  const navigationLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: FaXTwitter, href: "https://twitter.com" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="w-full border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="font-[poppins] font-bold text-2xl md:text-3xl mb-4">
            Ready to Transform How You Code?
          </h2>
          <Button
            variant="default"
            className="bg-[#774BE5] group hover:bg-[#774BE5]/90 transition-all duration-300"
            asChild
          >
            <Link to="/register" className="flex items-center justify-center gap-2">
              Sign Up Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex justify-between w-3/4 mx-auto mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center text-gray-500">
          <p>© 2025 CodeTogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
