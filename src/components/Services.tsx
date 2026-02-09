import { Globe, Cpu, Brain, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies to deliver exceptional user experiences and drive business growth.",
  },
  {
    icon: Cpu,
    title: "IoT-Based Solutions",
    description:
      "Smart IoT solutions connecting devices, sensors, and systems to automate processes and unlock real-time data insights.",
  },
  {
    icon: Brain,
    title: "AI Development",
    description:
      "Custom artificial intelligence solutions including chatbots, automation, and intelligent systems to transform your operations.",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning",
    description:
      "Advanced ML models for predictive analytics, pattern recognition, and data-driven decision making to give you a competitive edge.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="glow-orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Solutions That</span>{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive IT services tailored to transform your business and
            accelerate growth in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
