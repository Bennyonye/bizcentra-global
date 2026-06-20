"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#quote", label: "Get a Quote" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 section-padding hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+2349027458826" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span>+234 902 745 8826</span>
            </a>
            <a href="mailto:admin@bizcentra.com.ng" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span>admin@bizcentra.com.ng</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-secondary font-medium">38, Bayo Osinowo, Ogudu, Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="section-padding py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/bizcentra-logo.png"
              alt="BizCentra Global Limited"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
              loading="eager"  // ← Add this
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#quote"
              className="btn-primary text-sm"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="section-padding py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-primary font-medium py-2 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
