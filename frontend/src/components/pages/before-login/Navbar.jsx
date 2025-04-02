import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 w-full px-10 py-3 flex justify-between items-center gap-8 z-10 backdrop-blur-xl">
      <section className="w-1/3 flex-shrink-0">
        <img className="h-12 w-12" src="/logo.png" />
      </section>
      <section className="w-1/3 flex gap-2 flex-grow justify-center">
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
      </section>
      <section className="w-1/3 flex justify-end space-x-4 flex-shrink-0">
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="default" asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
