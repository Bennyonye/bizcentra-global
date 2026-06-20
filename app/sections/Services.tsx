"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Truck,
  Plane,
  Ship,
  FileCheck,
  ShoppingCart,
  Network,
  ArrowLeftRight,
  Store,
  Boxes,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Freight Forwarding",
    description:
      "Comprehensive freight forwarding services managing the entire transportation process from pickup to delivery, ensuring your cargo reaches its destination safely and on time.",
    image: "/images/cargo-loading.jpg",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air freight solutions for time-sensitive shipments. We partner with major airlines to provide competitive rates and express delivery options worldwide.",
    image: "/images/air-freight.jpg",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective sea freight services including FCL (Full Container Load) and LCL (Less than Container Load) options for bulk shipments across international waters.",
    image: "/images/port.jpg",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance Support",
    description:
      "Expert customs clearance services to navigate complex regulations, documentation, and compliance requirements, ensuring smooth import and export processes.",
    image: "/images/warehouse.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Global Sourcing",
    description:
      "Strategic procurement and sourcing services connecting you with verified suppliers worldwide. We handle negotiations, quality checks, and supplier management.",
    image: "/images/global-trade.jpg",
  },
  {
    icon: Network,
    title: "Supply Chain Solutions",
    description:
      "End-to-end supply chain management solutions designed to optimize your operations, reduce costs, and improve efficiency from sourcing to final delivery.",
    image: "/images/warehouse.jpg",
  },
  {
    icon: ArrowLeftRight,
    title: "Import & Export Support",
    description:
      "Comprehensive import and export support services including documentation, regulatory compliance, duty calculations, and logistics coordination.",
    image: "/images/cargo-loading.jpg",
  },
  {
    icon: Store,
    title: "General Merchandise Trading",
    description:
      "We facilitate the trading of general merchandise across borders, leveraging our network and expertise to connect buyers and sellers in diverse markets.",
    image: "/images/port.jpg",
  },
  {
    icon: Boxes,
    title: "Project Logistics",
    description:
      "Specialized logistics solutions for large-scale projects, including heavy lift cargo, oversized shipments, and complex multi-modal transportation requirements.",
    image: "/images/air-freight.jpg",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            Comprehensive logistics and trade solutions tailored to meet your
            business needs across Africa and global markets.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
