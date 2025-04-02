import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Handshake, Globe, Star, Twitter, Linkedin } from "lucide-react";
import Navbar from "./Navbar";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI and web technology.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe great ideas come from working together, not in isolation.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We're committed to making coding tools available to everyone, everywhere.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive to deliver a platform that's powerful, reliable, and delightful to use.",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Co-Founder & CEO",
      bio: "Leading the charge to revolutionize coding.",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587738/Njk2NjI1NjQx_kipunw.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Architecting the tech that powers our platform.",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587808/Yz0_d6smnn.jpg",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Mike Johnson",
      role: "Head of AI",
      bio: "Building the brains behind our intelligent tools.",
      image: "https://res.cloudinary.com/dkfvy12i6/image/upload/v1743588032/webcontainer_api-logo-light-blackwhite_cpr6st.svg",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "50,000+", label: "Projects Created" },
    { value: "100+", label: "Countries Represented" },
  ];

  return (
    <section className="relative">
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[5%] min-h-screen px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-[poppins] font-bold text-3xl md:text-4xl mb-4">
            Empowering Developers to Build the Future
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            At CodeTogether, we're redefining how people code, collaborate, and learn – with AI and innovation at our core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5] hover:bg-[#774BE5]/90" asChild>
              <Link to="/register">Join Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Our Story */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8 font-[poppins]">Who We Are</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-gray-600">
                CodeTogether was born from a simple idea: coding should be seamless, collaborative, and accessible to everyone. Founded in 2023 by a team of passionate developers and AI enthusiasts, we set out to create a platform that combines the power of real-time collaboration, cutting-edge AI, and browser-based development environments. Today, we're proud to serve a growing community of developers, teams, and learners worldwide, helping them turn ideas into reality faster and smarter.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587738/Njk2NjI1NjQx_kipunw.png"
                  alt="Team brainstorming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8 font-[poppins]">What Drives Us</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <p className="text-gray-600">
                Our mission is to break down barriers in software development. We believe coding should be a collaborative, creative, and inclusive experience – not a solitary struggle. By integrating AI assistance, web containers, and intuitive tools, we're empowering developers of all levels to work together, solve problems, and build extraordinary things. Whether you're a solo coder, a startup team, or an enterprise, we're here to help you succeed.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dkfvy12i6/image/upload/v1743587808/Yz0_d6smnn.jpg"
                  alt="Collaboration illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-12 font-[poppins]">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <value.icon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8 font-[poppins]">The People Behind CodeTogether</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team is a mix of developers, AI experts, and dreamers dedicated to making your coding experience exceptional. Here are some of the faces driving our vision forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-purple-600 mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" className="bg-[#774BE5] hover:bg-[#774BE5]/90" asChild>
              <Link to="/careers">Want to join us? Check out our careers page!</Link>
            </Button>
          </div>
        </div>

        {/* Our Impact */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-center mb-8 font-[poppins]">Making a Difference, One Line of Code at a Time</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Since launching, we've empowered thousands of developers to collaborate on projects, learn new skills, and ship code faster. From open-source contributors to enterprise teams, we're proud to be part of a global movement to make software development more efficient and inclusive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 font-[poppins]">Be Part of Our Journey</h2>
          <p className="text-gray-600 mb-8">
            Whether you're here to code, collaborate, or grow, we're excited to have you with us. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-[#774BE5] hover:bg-[#774BE5]/90" asChild>
              <Link to="/register">Start Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;