"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", details: ["admin@bizcentraglobal.com.ng"] },
    { icon: Phone, title: "Call Us", details: ["+234 905 208 2134"] },
    { icon: MapPin, title: "Visit Us", details: ["BizCentra Global Limited", "38 Bayo Osinowo Ogudu,", "Lagos, Nigeria"] },
    { icon: Clock, title: "Business Hours", details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"] },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is ready to help you with your logistics and trade needs.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 text-sm">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.4!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzggQmF5byBPc2lub3dvIE9ndWR1LCBMYWdvcywgTmlnZXJpYQ!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BizCentra Global Limited Location"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. We will respond to your inquiry as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input type="text" id="contact-name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="contact-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="contact-phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+234 905 208 2134" />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                    <input type="text" id="contact-subject" name="subject" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea id="contact-message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us more about your inquiry..." />
                </div>
                <button type="submit" className="w-full mt-6 btn-primary justify-center text-lg py-4">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}