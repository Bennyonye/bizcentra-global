"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Package, Truck, MapPin, Clock } from "lucide-react";

export default function Tracking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Shipment Tracking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Track Your Shipment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated on your shipment status. Enter your tracking number to
            get real-time updates on your cargo.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number (e.g., BZ-2024-001)"
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
              />
            </div>
            <button className="btn-primary px-8 py-4 text-lg whitespace-nowrap">
              <Search size={20} />
              Track Now
            </button>
          </div>
          <p className="text-center text-slate-500 text-sm mt-3">
            Tracking integration coming soon. Contact us for shipment updates in the meantime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Package, title: "Order Received", desc: "Your shipment details have been logged into our system." },
            { icon: Truck, title: "In Transit", desc: "Your cargo is on the move via the selected transport mode." },
            { icon: MapPin, title: "Customs Clearance", desc: "Navigating customs procedures at the destination port." },
            { icon: Clock, title: "Out for Delivery", desc: "Final leg of the journey — your shipment is almost there!" },
          ].map((step, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-primary" size={28} />
              </div>
              <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}