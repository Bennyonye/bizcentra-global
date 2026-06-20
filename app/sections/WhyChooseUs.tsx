"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Handshake,
  Users,
  TrendingDown,
  Globe,
  Eye,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    description:
      "We have built strong relationships with trusted carriers, suppliers, and logistics providers worldwide to ensure consistent, dependable service.",
  },
  {
    icon: Users,
    title: "Customer-Focused Service",
    description:
      "Your success is our priority. We assign dedicated account managers and provide personalized support tailored to your specific business needs.",
  },
  {
    icon: TrendingDown,
    title: "Cost-Effective Solutions",
    description:
      "We leverage our network and expertise to negotiate the best rates and optimize routes, helping you reduce logistics costs without compromising quality.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Our extensive network spans across Africa, Asia, Europe, and the Americas, enabling seamless international trade and logistics operations.",
  },
  {
    icon: Eye,
    title: "End-to-End Visibility",
    description:
      "Track your shipments in real-time with our advanced tracking systems. Stay informed at every stage of the logistics process.",
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Support",
    description:
      "Our experienced team is available to assist you with expert advice, problem-solving, and proactive communication throughout your logistics journey.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            The BizCentra Advantage
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover why businesses across Africa and beyond trust BizCentra
            Global for their logistics and trade needs.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon
                  className="text-primary group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
