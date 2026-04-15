import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for E&R Ibukun LLC, fire sprinkler contractor serving all of Texas.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#800A03" }}>Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Effective Date: April 15, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              When you contact E&R Ibukun LLC via phone, email, or our website, we may collect your name, email address, phone number, and information about your property and fire protection needs. We do not collect payment information directly on this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information you provide solely to respond to your inquiry, schedule services, and fulfill our obligations as your fire protection contractor. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or misuse. Customer service data is managed through Housecall Pro, a professional field service management platform with its own security protocols.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may use standard cookies and analytics tools to understand how visitors use our site. These cookies do not collect personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We use Housecall Pro for service scheduling and customer management. Their privacy policy governs any data you submit through their booking portal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
              <br />E&R Ibukun LLC
              <br />7961 Fields Street, Houston, TX 77028
              <br /><a href="tel:8329618372" className="underline" style={{ color: "#800A03" }}>(832) 961-8372</a>
              <br /><a href="mailto:edwin_ibukun@outlook.com" className="underline" style={{ color: "#800A03" }}>edwin_ibukun@outlook.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
