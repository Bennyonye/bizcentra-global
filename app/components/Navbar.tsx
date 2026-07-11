"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
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
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-slate-600 font-medium hover:text-primary hover:bg-slate-100"
                }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/quote"
              className="btn-primary text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="section-padding py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2 py-3"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}