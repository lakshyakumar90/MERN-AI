import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../pages/before-login/Navbar";

const Privacy = () => {
  return (
    <section className="relative">
      <Navbar />
      <section className="flex flex-col w-full items-center pt-[5%] px-4 md:px-8 py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[poppins] font-bold text-3xl mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: April 02, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-2xl shadow-sm space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At CodeCollab, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use 
                our collaborative coding platform, including our website, services, and features (collectively, "the Service"). 
                By using the Service, you agree to the terms outlined in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect information to provide and improve the Service. This may include:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">a. Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Account Information:</strong> Name, email address, and password when you sign up.</li>
                    <li><strong>Profile Information:</strong> Optional details like display name, bio, or profile picture.</li>
                    <li><strong>Content:</strong> Code, projects, comments, messages, or other data you upload or create.</li>
                    <li><strong>Communications:</strong> Information you share when contacting us (e.g., support requests).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">b. Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent, and interactions with the Service.</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                    <li><strong>Cookies & Tracking:</strong> Data from cookies and similar technologies to enhance your experience.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">c. Third-Party Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Integrations:</strong> Information from connected services (e.g., GitHub, SSO providers) when you link them.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide and maintain the Service (e.g., collaboration tools, AI features, web containers).</li>
                <li>Personalize your experience (e.g., tailored AI suggestions, learning paths).</li>
                <li>Process payments and manage subscriptions.</li>
                <li>Communicate with you (e.g., updates, support responses).</li>
                <li>Analyze usage to improve the Service and develop new features.</li>
                <li>Ensure security and prevent fraud or abuse.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            {/* How We Share Your Information */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">3. How We Share Your Information</h2>
              <p className="text-gray-700 mb-4">We do not sell your personal data. We may share it in these cases:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>With Your Consent:</strong> When you explicitly agree (e.g., sharing a project publicly).</li>
                <li><strong>Service Providers:</strong> With trusted partners who help us operate the Service.</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or to protect our rights and users.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </div>

            {/* Data Storage and Security */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">4. Data Storage and Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Storage:</strong> Your data is stored on secure servers in the United States.</li>
                <li><strong>Security Measures:</strong> We use encryption, access controls, and regular audits to protect your information.</li>
                <li><strong>Retention:</strong> We keep your data as long as needed for the Service or legal purposes.</li>
              </ul>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have control over your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access & Update:</strong> View or edit your account info in your profile settings.</li>
                <li><strong>Delete:</strong> Request deletion of your account and data.</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails via the link in each message.</li>
                <li><strong>Region-Specific Rights:</strong> Additional rights based on your location (e.g., GDPR, CCPA).</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar tools to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Authenticate users and maintain sessions.</li>
                <li>Analyze usage and improve performance.</li>
                <li>Personalize content and ads (if applicable).</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Managing Cookies:</strong> You can adjust your browser settings to block cookies, though this may limit some features.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">7. Third-Party Links and Services</h2>
              <p className="text-gray-700">
                The Service may link to external sites or integrate with third-party tools (e.g., GitHub). 
                We're not responsible for their privacy practices. Review their policies before use.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700">
                The Service is not intended for users under 13 (or 16 in some regions). We do not knowingly collect 
                data from children. If we learn of such data, we will delete it promptly.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
                We'll notify you of significant updates via email or a notice on the Service.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-[poppins] font-semibold text-xl mb-4">10. Contact Us</h2>
              <p className="text-gray-700">Questions or concerns? Reach out:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Email:</strong> privacy@codecollab.com</li>
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

export default Privacy; 