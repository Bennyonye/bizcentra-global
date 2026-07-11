import { Factory, Cpu, HardHat, HeartPulse, ShoppingBag, Wheat } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Raw material sourcing, component procurement, and finished goods distribution for manufacturing operations.",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Electronics sourcing, tech component logistics, and sensitive equipment handling with full traceability.",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Heavy equipment logistics, building material procurement, and project cargo management.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Medical equipment import, pharmaceutical logistics, and temperature-controlled supply chain.",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Consumer goods sourcing, inventory management, and omnichannel distribution solutions.",
  },
  {
    icon: Wheat,
    name: "Agriculture",
    description: "Farm equipment import, agro-chemical sourcing, and produce export logistics.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Specialized logistics solutions tailored to the unique demands of your industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 hover:bg-primary hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <industry.icon className="text-primary group-hover:text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-4 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}