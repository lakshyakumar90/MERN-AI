import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 w-full px-6 py-4 flex justify-between items-center bg-[#F0F8FF] z-10">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-10 w-10" src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex-1 pl-[10%] flex justify-center gap-4">
        <Button variant="link" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/pricing">Pricing</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/features">Features</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="default" asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
