import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/pages/before-login/Navbar";

const Terms = () => {
  return (
    <section className="relative">
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[5%] px-4 md:px-8 py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[poppins] font-bold text-3xl mb-4">Terms and Conditions</h1>
            <p className="text-gray-600">Last updated: April 02, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-2xl shadow-sm space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to CodeCollab! These Terms and Conditions ("Terms") govern your use of our collaborative
                coding platform, including our website, services, and features (collectively, "the Service").
                By accessing or using the Service, you agree to be bound by these Terms and our{" "}
                <Link to="/privacy" className="text-purple-600 hover:text-purple-500 hover:underline">
                  Privacy Policy
                </Link>. If you do not agree, please do not use the Service.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">1. Acceptance of Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must be at least 13 years old (or 16 in some regions) to use the Service.</li>
                <li>By creating an account or using the Service, you confirm that you have the legal capacity to enter into this agreement.</li>
                <li>We may update these Terms from time to time. Continued use after changes constitutes acceptance of the updated Terms.</li>
              </ul>
            </div>

            {/* Account Responsibilities */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">2. Account Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Registration:</strong> You must provide accurate information when creating an account and keep it updated.</li>
                <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
                <li><strong>Usage:</strong> You agree not to share your account or use it for illegal purposes.</li>
              </ul>
            </div>

            {/* Use of the Service */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">3. Use of the Service</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">a. Permitted Use</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You may use the Service to create, edit, share, and run code, collaborate with others, and access AI tools as intended.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">b. Prohibited Use</h3>
                  <p className="text-gray-700 mb-2">You may not:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violate laws, infringe on others' rights, or harm the Service.</li>
                    <li>Upload malicious code, viruses, or harmful content.</li>
                    <li>Attempt to reverse-engineer, hack, or disrupt the Service.</li>
                    <li>Use the Service to harass, spam, or mislead others.</li>
                    <li>Scrape or extract data without permission.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">c. Content Ownership</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Your Content:</strong> You retain ownership of code, projects, and other content you create or upload.</li>
                    <li><strong>Our Content:</strong> The Service, including its design, AI models, and documentation, is owned by CodeCollab.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Subscriptions and Payments */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">4. Subscriptions and Payments</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Plans:</strong> We offer free and paid plans as outlined on our{" "}
                  <Link to="/pricing" className="text-purple-600 hover:text-purple-500 hover:underline">
                    Pricing Page
                  </Link>.
                </li>
                <li><strong>Billing:</strong> You agree to pay fees on time via the provided payment method.</li>
                <li><strong>Refunds:</strong> We offer a 30-day money-back guarantee for paid plans.</li>
                <li><strong>Changes:</strong> We may adjust pricing with notice.</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">5. Termination</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>By You:</strong> You may delete your account at any time via your settings.</li>
                <li><strong>By Us:</strong> We may suspend or terminate your access if you violate these Terms.</li>
                <li><strong>Effect:</strong> Upon termination, your right to use the Service ends.</li>
              </ul>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">6. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>As-Is:</strong> The Service is provided "as is" and "as available" without warranties.</li>
                <li><strong>Performance:</strong> We do not guarantee uninterrupted access or error-free operation.</li>
                <li><strong>AI Tools:</strong> AI-generated suggestions are for assistance only.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the fullest extent permitted by law, CodeCollab, its affiliates, and partners are not liable
                for indirect, incidental, or consequential damages arising from your use of the Service.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">8. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold CodeCollab, its officers, and employees harmless from claims,
                losses, or damages arising from your use of the Service.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">9. Governing Law and Disputes</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Law:</strong> These Terms are governed by the laws of Delaware, USA.</li>
                <li><strong>Disputes:</strong> Any disputes will be resolved in the courts of Delaware.</li>
              </ul>
            </div>

            {/* Miscellaneous */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">10. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Entire Agreement:</strong> These Terms, along with the Privacy Policy, constitute the full agreement.</li>
                <li><strong>Severability:</strong> If any provision is unenforceable, the remaining Terms remain in effect.</li>
                <li><strong>Waiver:</strong> Our failure to enforce a right does not waive it.</li>
                <li><strong>Assignment:</strong> We may assign these Terms in a business transfer.</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">11. Contact Us</h2>
              <p className="text-gray-700">For questions about these Terms:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Email:</strong> legal@codecollab.com</li>
                <li><strong>Mail:</strong> CodeCollab, 123 Tech Street, San Francisco, CA 94105, United States</li>
              </ul>
            </div>

            {/* Back to Home Button */}
            <div className="pt-8">
              <Button asChild className="w-full bg-[#774BE5] hover:bg-[#774BE5]/90">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Terms;