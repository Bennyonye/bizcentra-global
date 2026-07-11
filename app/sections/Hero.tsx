"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Global Logistics & Trade Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Connecting Businesses Through{" "}
              <span className="text-secondary">Smart Logistics</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              Reliable freight forwarding, procurement, and supply chain solutions 
              that help your business move goods efficiently across borders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
              >
                Our Services
                <Play size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                    <div className="text-slate-300 text-sm">Shipments</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">200+</div>
                    <div className="text-slate-300 text-sm">Clients</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">30+</div>
                    <div className="text-slate-300 text-sm">Countries</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                    <div className="text-slate-300 text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}