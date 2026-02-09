import { Building2, Rocket, ShoppingCart, Stethoscope, GraduationCap, Factory } from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    title: "Startups",
    description: "MVP development, rapid prototyping, and scalable architecture to launch your vision.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Large-scale solutions, legacy modernization, and enterprise-grade security.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Custom online stores, payment integrations, and inventory management systems.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "HIPAA-compliant solutions, patient portals, and medical data management.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems, virtual classrooms, and educational apps.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "IoT solutions, supply chain optimization, and process automation.",
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="glow-orb-purple w-[400px] h-[400px] right-0 top-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Tailored For</span>{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From startups to enterprises, we deliver specialized solutions
            designed for your industry's unique challenges and opportunities.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glass-card group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
