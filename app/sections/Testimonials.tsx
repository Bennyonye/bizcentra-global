"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Procurement Director",
    role: "Manufacturing Sector",
    content:
      "BizCentra Global has transformed our import operations. Their customs clearance support and freight forwarding services are top-notch. We have reduced our shipping delays by 70% since partnering with them.",
    rating: 5,
  },
  {
    name: "Supply Chain Manager",
    role: "Technology Industry",
    content:
      "The procurement and sourcing team at BizCentra found us reliable suppliers in Asia at competitive prices. Their attention to quality control and documentation saved us significant time and money.",
    rating: 5,
  },
  {
    name: "Operations Director",
    role: "Construction & Engineering",
    content:
      "Handling heavy equipment and construction materials requires expertise. BizCentra's project logistics team delivered our machinery from Europe to Lagos seamlessly. Highly professional and reliable.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Hear from businesses that have experienced the BizCentra Global
            difference.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative"
            >
              <Quote
                className="text-secondary/40 absolute top-6 right-6"
                size={32}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-secondary fill-secondary"
                    size={18}
                  />
                ))}
              </div>
              <p className="text-slate-200 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}