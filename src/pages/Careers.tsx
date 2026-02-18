import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Briefcase, Brain, Globe, Layers, Code2, Server, ArrowRight, MapPin, Clock } from "lucide-react";

const internships = [
  {
    title: "AI / ML Intern",
    icon: Brain,
    description:
      "Work on cutting-edge machine learning models, NLP pipelines, and computer vision projects. Gain hands-on experience with TensorFlow, PyTorch, and real-world datasets.",
    skills: ["Python", "TensorFlow / PyTorch", "Data Analysis", "NLP"],
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 – 6 months",
  },
  {
    title: "Web Development Intern",
    icon: Globe,
    description:
      "Build responsive, performant web applications using modern frameworks. Collaborate with designers and backend engineers to deliver polished user experiences.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 – 6 months",
  },
  {
    title: "Full Stack Development Intern",
    icon: Layers,
    description:
      "Own features end-to-end — from database design to pixel-perfect UI. Learn industry best practices for authentication, state management, and deployment.",
    skills: ["React", "Node.js", "PostgreSQL", "Git"],
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 – 6 months",
  },
  {
    title: "Python API Development Intern",
    icon: Code2,
    description:
      "Design and develop robust RESTful & GraphQL APIs with Python. Work with microservices architecture, testing frameworks, and CI/CD pipelines.",
    skills: ["Python", "FastAPI / Django", "PostgreSQL", "Docker"],
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 – 6 months",
  },
  {
    title: "DevOps Intern",
    icon: Server,
    description:
      "Automate infrastructure, manage CI/CD workflows, and monitor production systems. Get real exposure to cloud platforms, containers, and observability tools.",
    skills: ["Docker", "Kubernetes", "AWS / GCP", "Terraform"],
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 – 6 months",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 section-padding text-center">
        <div className="glow-orb-cyan w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="glow-orb-purple w-[300px] h-[300px] top-20 right-10 opacity-15" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Careers at TrioByte
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Tech Career{" "}
            <span className="gradient-text">With Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join our internship programme and work on real projects alongside
            experienced engineers. We're looking for passionate learners ready to
            make an impact.
          </p>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="section-padding max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Open <span className="gradient-text">Internship Positions</span>
        </h2>

        <div className="grid gap-8">
          {internships.map((role) => (
            <div
              key={role.title}
              className="glass-card group md:flex md:items-start md:gap-8"
            >
              {/* Icon */}
              <div className="icon-container shrink-0 mb-4 md:mb-0">
                <role.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {role.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> {role.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {role.duration}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <a
                href={`/intern-apply?role=${encodeURIComponent(role.title)}`}
                className="btn-primary mt-6 md:mt-0 shrink-0 inline-flex items-center gap-2 text-sm"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Intern */}
      <section className="section-padding max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Intern at <span className="gradient-text">TrioByte?</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 mt-10">
          {[
            { title: "Real Projects", desc: "Work on production-grade products used by real clients." },
            { title: "Mentorship", desc: "Get 1-on-1 guidance from senior engineers throughout your journey." },
            { title: "Certificate", desc: "Earn an industry-recognised certificate." },
          ].map((item) => (
            <div key={item.title} className="glass-card text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
          
      <Footer />
      
    </div>
  );
};

export default Careers;
