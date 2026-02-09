import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative technology solutions",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Building lasting partnerships with transparent communication",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging cutting-edge tech to solve complex challenges",
  },
  {
    icon: TrendingUp,
    title: "Growth Partners",
    description: "Committed to your success at every stage of development",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="glow-orb-cyan w-[500px] h-[500px] -left-60 top-1/2 opacity-20" />
      <div className="glow-orb-blue w-[300px] h-[300px] right-0 bottom-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              About TrioByte
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Your Trusted</span>{" "}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              TrioByte is a passionate startup delivering innovative, scalable,
              and secure digital solutions. We bring fresh perspectives and
              cutting-edge expertise to every project we undertake.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We specialize in Web Application Development, IoT-based Solutions,
              AI Development, and Machine Learning services that help organizations
              innovate and grow. Our dedicated team transforms your vision into
              powerful digital reality.
            </p>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Partner With Us
            </a>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-container mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
