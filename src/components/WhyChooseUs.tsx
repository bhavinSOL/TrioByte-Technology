import { Award, Clock, Headphones, Zap, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Fresh Expertise",
    description: "Passionate startup bringing innovative solutions with cutting-edge technologies.",
  },
  {
    icon: Zap,
    title: "Agile Development",
    description: "Fast iterations, continuous delivery, and adaptive planning for optimal results.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security practices embedded in every solution we build.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Commitment to deadlines with transparent progress tracking.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Expert professionals assigned exclusively to your project's success.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="glow-orb-cyan w-[500px] h-[500px] -left-40 top-0 opacity-20" />
      <div className="glow-orb-purple w-[400px] h-[400px] right-20 bottom-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The TrioByte</span>{" "}
            <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine technical excellence with a client-centric approach
            to deliver solutions that exceed expectations.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card group flex items-start gap-4"
            >
              <div className="icon-container shrink-0 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 glass-card-strong text-center relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          
          <div className="relative z-10 py-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how TrioByte can help you achieve your technology goals
              and drive sustainable growth.
            </p>
            <a href="#contact" className="btn-primary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
