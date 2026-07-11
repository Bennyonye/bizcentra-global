import { motion } from "framer-motion";
import { Globe, Target, Eye, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "500+", label: "Shipments Delivered" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide seamless logistics and trade solutions that empower businesses to thrive in global markets.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become Africa's most trusted partner for end-to-end supply chain and procurement services.",
  },
  {
    icon: Award,
    title: "Our Values",
    description: "Integrity, reliability, innovation, and customer-centricity guide everything we do.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About BizCentra Global</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Your trusted partner for logistics, procurement, and global trade solutions across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded with a vision to bridge the gap between African businesses and global markets, BizCentra Global Limited has grown into a comprehensive logistics and trade solutions provider.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We understand the unique challenges of doing business across borders — from complex customs regulations to unreliable supply chains. That's why we've built a team of experts dedicated to making international trade simple, efficient, and cost-effective.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we serve clients across manufacturing, technology, construction, healthcare, and retail sectors — helping them move goods, source products, and grow their businesses with confidence.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Why Choose BizCentra?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">End-to-end supply chain management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Expert customs clearance support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Competitive freight rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Real-time shipment tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Dedicated account management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                <stat.icon className="text-secondary mx-auto mb-4" size={32} />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">What Drives Us</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}