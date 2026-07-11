"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ship, Plane, Anchor, FileCheck, ShoppingCart, Network } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Freight Forwarding",
    description: "Comprehensive freight solutions tailored to your timeline and budget.",
    href: "/services",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable air cargo services for time-sensitive shipments.",
    href: "/services",
  },
  {
    icon: Anchor,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping for bulk cargo with full container management.",
    href: "/services",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage for smooth clearance at all ports.",
    href: "/services",
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description: "Strategic sourcing from global suppliers at competitive prices.",
    href: "/services",
  },
  {
    icon: Network,
    title: "Supply Chain",
    description: "End-to-end supply chain optimization from warehousing to delivery.",
    href: "/services",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            What We Offer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive logistics and trade solutions designed to move your business forward.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={service.href}
                className="group block bg-slate-50 rounded-2xl p-8 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}