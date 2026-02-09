import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="glow-orb-cyan w-[600px] h-[600px] -top-40 -left-40 animate-float" />
      <div className="glow-orb-purple w-[500px] h-[500px] top-1/2 -right-40 animate-float-delayed" />
      <div className="glow-orb-blue w-[400px] h-[400px] bottom-0 left-1/3 animate-pulse-slow" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-muted-foreground">
            Innovative Digital Solutions
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-foreground">Transforming Ideas into</span>
          <br />
          <span className="gradient-text-glow">Digital Excellence</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          TrioByte is a dynamic startup delivering innovative digital solutions
          including Web Applications, IoT-based Solutions, AI Development, and
          Machine Learning services to accelerate your business growth.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#contact" className="btn-primary flex items-center gap-2">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "3+", label: "Projects Delivered" },
            { value: "3+", label: "Happy Clients" },
            { value: "1+", label: "Year Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="glass-card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
