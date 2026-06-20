"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  ShoppingBag,
  HardHat,
  Wheat,
  Package,
  Cpu,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Supporting manufacturers with raw material sourcing, component procurement, and finished goods distribution across global supply chains.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "End-to-end logistics for retail and e-commerce businesses, from inventory management to last-mile delivery and returns processing.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Heavy equipment logistics, building material sourcing, and project cargo management for construction companies across Africa.",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description:
      "Specialized handling of agricultural products, farm equipment logistics, and export support for agribusinesses.",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Fast-moving consumer goods logistics with temperature-controlled storage, rapid distribution, and retail replenishment services.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Secure handling and transportation of electronics, tech components, and sensitive equipment with specialized packaging and tracking.",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-20 bg-primary-dark" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Sectors We Support
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We provide specialized logistics and trade solutions tailored to the
            unique requirements of diverse industries.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <industry.icon className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
