"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#quote", label: "Get a Quote" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Freight Forwarding",
  "Air Freight",
  "Sea Freight",
  "Customs Clearance",
  "Procurement",
  "Supply Chain",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo/bizcentra-logo.png" alt="BizCentra Global Limited" width={160} height={50} className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              BizCentra Global Limited is your trusted partner for logistics, procurement, and global trade solutions across Africa and international markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-secondary transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-secondary transition-colors text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-slate-400 text-sm">38 Bayo Osinowo Ogudu,<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a href="tel:+2348134904208" className="text-slate-400 hover:text-secondary transition-colors text-sm">+234 813 490 4208</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:admin@bizcentraglobal.com.ng" className="text-slate-400 hover:text-secondary transition-colors text-sm">admin@bizcentraglobal.com.ng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} BizCentra Global Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-secondary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-12 h-12 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-secondary-dark transition-colors z-40" aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}