import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Custom Software", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Terms of Service", href: "#" },
    // { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/triobyte-technology/", label: "LinkedIn" },
  // { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="glow-orb-cyan w-[300px] h-[300px] -left-20 -bottom-20 opacity-10" />
      <div className="glow-orb-purple w-[200px] h-[200px] right-20 -bottom-10 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img
                src="/TrioBytelogo-cutout.png"
                alt="TrioByte Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-foreground">TrioByte</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Delivering innovative, scalable, and secure digital solutions for
              businesses of all sizes. Your trusted technology partner.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          {/* <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TrioByte. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with precision. Built for performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
