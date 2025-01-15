"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "https://www.linkedin.com/in/niharrout/", label: "LINKEDIN" },
    { href: "tel:+917608844995", label: "PHONE" },
    { href: "mailto:nihar@creuto.com", label: "EMAIL" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-24 py-4">
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
              <Link
                key={link.label}
                href={link.href}
                className="text-body-16 text-neutral-60 hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" variant="secondary">
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
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-16 text-neutral-60 hover:text-neutral-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="#contact" variant="secondary">
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
