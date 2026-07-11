import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Ship, 
  Plane, 
  Anchor, 
  FileCheck, 
  ShoppingCart, 
  Network, 
  ArrowRightLeft, 
  Store, 
  Briefcase 
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Freight Forwarding",
    description: "Comprehensive freight solutions tailored to your timeline and budget. We handle the complexities so you can focus on your business.",
    features: ["Door-to-door delivery", "Multi-modal transport", "Cargo insurance", "Documentation handling"],
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable air cargo services for time-sensitive shipments. Global coverage with competitive rates.",
    features: ["Express delivery", "Charter services", "Temperature-controlled cargo", "Real-time tracking"],
  },
  {
    icon: Anchor,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping for bulk cargo. FCL and LCL options with full container management.",
    features: ["FCL & LCL shipping", "Container tracking", "Port-to-port & door-to-door", "Customs brokerage"],
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage to ensure smooth clearance at all Nigerian and international ports.",
    features: ["Import/export documentation", "Duty calculation", "Regulatory compliance", "Tariff classification"],
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Sourcing",
    description: "Strategic sourcing from global suppliers. We find quality products at competitive prices.",
    features: ["Supplier vetting", "Quality inspection", "Price negotiation", "Order management"],
  },
  {
    icon: Network,
    title: "Supply Chain Solutions",
    description: "End-to-end supply chain optimization. From warehousing to last-mile delivery.",
    features: ["Inventory management", "Warehousing", "Distribution", "Demand planning"],
  },
  {
    icon: ArrowRightLeft,
    title: "Import & Export Support",
    description: "Full support for international trade operations. Regulatory guidance and documentation.",
    features: ["Trade consulting", "Export licensing", "Import permits", "Compliance audits"],
  },
  {
    icon: Store,
    title: "General Merchandise Trading",
    description: "Trading of quality goods across multiple categories. Reliable supply for retailers and distributors.",
    features: ["Product sourcing", "Bulk purchasing", "Quality assurance", "Market analysis"],
  },
  {
    icon: Briefcase,
    title: "Project Logistics",
    description: "Specialized logistics for oversized and heavy cargo. Engineering and construction project support.",
    features: ["Route surveys", "Heavy lift coordination", "Permit acquisition", "On-site supervision"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive logistics and trade solutions designed to move your business forward.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Every business is unique. Let us create a tailored logistics plan that fits your specific needs.
          </p>
          <Link href="/quote" className="btn-secondary text-lg px-8 py-4">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}