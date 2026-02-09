import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="icon-container w-16 h-16">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how TrioByte Technology collects, uses, and protects your information.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Last updated: February 9, 2026
          </div>
        </div>

        <div className="glass-card space-y-8 text-foreground">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-cyan-400" />
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TrioByte Technology ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-cyan-400" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-cyan-400">Personal Information</h3>
                <p className="text-muted-foreground mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and professional details</li>
                  <li>Project requirements and business needs</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-cyan-400">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-400" />
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To deliver and improve our services</li>
              <li>To communicate with you about projects, updates, and services</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-cyan-400" />
              Information Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> When you have given explicit consent to share your information</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website performance and user behavior</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure website security and functionality</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to third-party websites or integrate with external services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
            </p>
            <p className="text-muted-foreground">
              We may use third-party services such as Google Analytics, EmailJS, and other tools to improve our services. These services have their own privacy policies governing their use of your information.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Object:</strong> Object to certain processing of your information</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground">
              As TrioByte Technology is based in India, your information is primarily processed and stored in India. If we transfer your information to other countries, we ensure appropriate safeguards are in place to protect your privacy rights.
            </p>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="space-y-3">
                <div>
                  <strong className="text-foreground">TrioByte Technology</strong>
                </div>
                <div>
                  <strong className="text-cyan-400">Email:</strong>{" "}
                  <a href="mailto:info@triobytetechnology.in" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    info@triobytetechnology.in
                  </a>
                </div>
                <div>
                  <strong className="text-cyan-400">Phone:</strong>{" "}
                  <span className="text-foreground">+91 93139 41992</span>
                </div>
                <div>
                  <strong className="text-cyan-400">Address:</strong>{" "}
                  <span className="text-foreground">VV Nagar, Anand, Gujarat, India</span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-sm text-muted-foreground border-t border-white/10 pt-6">
            <p>
              This privacy policy is designed to be compliant with applicable privacy laws and regulations.
              For specific legal advice, please consult with a qualified legal professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};