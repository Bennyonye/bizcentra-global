"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Move Your Business Forward?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Get a customized logistics solution tailored to your needs. Our team is ready to help you streamline your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}