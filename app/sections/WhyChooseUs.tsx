"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Headphones, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Your cargo is handled with the highest standards of care and security throughout its journey.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand the importance of deadlines. Our network ensures your shipments arrive on schedule.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with your logistics needs.",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Competitive pricing without compromising on quality. We optimize routes to save you money.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            We combine industry expertise with innovative solutions to deliver unmatched logistics services.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}