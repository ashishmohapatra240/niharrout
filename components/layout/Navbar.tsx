"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#works", label: "WORKS" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact", label: "CONTACT" },
  ];

  // Function to handle smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-24 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-24 h-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-body-16 text-neutral-60 hover:text-neutral-100 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button href="https://calendly.com/niharrout/call" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-8">
            {" "}
            {/* Increased margin vertically */}
            <div className="flex flex-col items-center gap-8">
              {" "}
              {/* Increased gap between items */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-body-16 text-neutral-60 hover:text-neutral-100 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button href="https://calendly.com/niharrout/call" variant="secondary">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
