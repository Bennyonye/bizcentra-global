"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Freight Forwarding",
  "Air Freight",
  "Sea Freight",
  "Customs Clearance Support",
  "Procurement & Global Sourcing",
  "Supply Chain Solutions",
  "Import & Export Support",
  "General Merchandise Trading",
  "Project Logistics",
];

export default function Quote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Request a Quote
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tell us about your logistics needs and our team will get back to
            you with a customized solution and competitive pricing.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Quote Request Submitted!
              </h3>
              <p className="text-green-700">
                Thank you for reaching out. Our team will review your request
                and get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+234 902 745 8826"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message / Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your shipment, timeline, origin, destination, etc."
                  />
                </div>
              </div>
              <button type="submit" className="w-full mt-6 btn-primary justify-center text-lg py-4">
                <Send size={20} />
                Submit Quote Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}