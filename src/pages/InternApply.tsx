import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import {
  GraduationCap,
  Send,
  Loader2,
  User,
  Mail,
  Phone,
  FileText,
  Briefcase,
  Link as LinkIcon,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration (same as Contact)
const EMAILJS_SERVICE_ID = "service_xgd40zo";
const EMAILJS_TEMPLATE_ID = "template_miljfbx";
const EMAILJS_PUBLIC_KEY = "eZp2-CoCvY6LDe4ij";

// Google Sheets Web App URL (replace with your deployed Apps Script URL)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwJJrUK7pm3yjTrBgPBJWF8Yc1oZoNMgxJDR4MG7BEDBFzmIWWKYBgk8gjjrYDKKh0/exec";

const positionOptions = [
  "AI / ML Intern",
  "Web Development Intern",
  "Full Stack Development Intern",
  "Python API Development Intern",
  "DevOps Intern",
];

const InternApply = () => {
  const [searchParams] = useSearchParams();
  const preselectedRole = searchParams.get("role") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: preselectedRole,
    college: "",
    graduationYear: "",
    portfolio: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Google Sheets
      const sheetPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        college: formData.college,
        graduationYear: formData.graduationYear,
        portfolio: formData.portfolio || "Not provided",
        coverLetter: formData.coverLetter,
      };

      const sheetPromise = fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(sheetPayload),
      }).catch((err) => console.error("Google Sheets Error:", err));

      // Send email via EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        to_name: "TrioByte Hiring Team",
        company: `Phone: ${formData.phone} | College: ${formData.college} | Graduation: ${formData.graduationYear}`,
        message: `
Internship Application
━━━━━━━━━━━━━━━━━━━━━
Position: ${formData.position}
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
College / University: ${formData.college}
Graduation Year: ${formData.graduationYear}
Portfolio / LinkedIn: ${formData.portfolio || "Not provided"}

Cover Letter:
${formData.coverLetter}
        `.trim(),
      };

      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        ),
        sheetPromise,
      ]);

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        college: "",
        graduationYear: "",
        portfolio: "",
        coverLetter: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Sorry, there was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="relative pt-36 pb-24 section-padding">
        {/* Background */}
        <div className="glow-orb-cyan w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="glow-orb-purple w-[300px] h-[300px] top-40 right-0 opacity-15" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                Internship Application
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for an{" "}
              <span className="gradient-text">Internship</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill out the form below and our team will review your application.
              We typically respond within 3–5 business days.
            </p>
          </div>

          {/* Success State */}
          {isSubmitted ? (
            <div className="glass-card text-center py-16 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Application Submitted!
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thank you for your interest in joining TrioByte. We'll review
                your application and get back to you soon.
              </p>
              <a href="/careers" className="btn-primary inline-flex items-center gap-2">
                Back to Careers
              </a>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="glass-card space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone & Position */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    Position <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-background">
                      Select a position
                    </option>
                    {positionOptions.map((pos) => (
                      <option key={pos} value={pos} className="bg-background">
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* College & Graduation */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    College / University <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    placeholder="Your college name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    Graduation Year <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 2026"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-cyan-400" />
                  Portfolio / LinkedIn / GitHub
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Why do you want to intern at TrioByte?{" "}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about yourself, your motivation, and what excites you about this role..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternApply;
