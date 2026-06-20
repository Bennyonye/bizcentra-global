"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, CheckCircle } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreValues = [
    { icon: Target, title: "Integrity", desc: "We operate with transparency and honesty in all our dealings." },
    { icon: Award, title: "Excellence", desc: "We strive for the highest standards in every service we deliver." },
    { icon: CheckCircle, title: "Reliability", desc: "We keep our promises and deliver on time, every time." },
    { icon: Eye, title: "Innovation", desc: "We embrace technology to provide smarter logistics solutions." },
  ];

  const reasons = [
    "Deep understanding of African and global markets",
    "End-to-end supply chain management expertise",
    "Strong network of international partners and carriers",
    "Personalized service tailored to each client",
    "Competitive pricing without compromising quality",
    "Real-time tracking and transparent communication",
  ];

  return (
    <section id="about" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Your Strategic Partner in Global Trade
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              BizCentra Global Limited is a Nigerian-based company providing
              comprehensive logistics and supply chain solutions. We specialize
              in freight forwarding, procurement services, import and export
              support, sourcing, general merchandise trading, and business
              support services for clients across Africa and global markets.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              With our headquarters in Lagos, Nigeria — the commercial hub of
              West Africa — we are strategically positioned to serve businesses
              looking to import into, export from, or trade within the African
              continent and beyond.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our team of experienced professionals brings deep industry
              knowledge and a commitment to excellence, ensuring that every
              shipment, every procurement, and every business transaction is
              handled with the utmost care and efficiency.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/global-trade.jpg"
                alt="Global Business Partnership"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-secondary">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-secondary" size={28} />
              <h3 className="text-xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To simplify global trade for businesses by providing reliable,
              efficient, and cost-effective logistics, procurement, and supply
              chain solutions that drive growth and create lasting value for our
              clients across Africa and the world.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-primary" size={28} />
              <h3 className="text-xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted and preferred logistics and trade
              partner for businesses operating in Africa, recognized for our
              innovation, reliability, and commitment to customer success in the
              global marketplace.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-10">
            Why Choose BizCentra Global
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
