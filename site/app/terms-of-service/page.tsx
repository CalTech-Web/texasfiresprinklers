import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for E&R Ibukun LLC, fire sprinkler contractor serving all of Texas.",
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#800A03" }}>Terms of Service</h1>
        <p className="text-gray-500 mb-8">Effective Date: April 15, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the texasfiresprinklers.com website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Services</h2>
            <p className="text-gray-700 leading-relaxed">
              E&R Ibukun LLC provides fire sprinkler installation, inspection, repair, and related fire protection services in Texas. All services are subject to a separate service agreement entered into at the time of scheduling. Content on this website is for informational purposes only and does not constitute a binding service contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. Licensing</h2>
            <p className="text-gray-700 leading-relaxed">
              E&R Ibukun LLC holds Texas Fire Sprinkler Certificate of Registration No. SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal&apos;s Office. All work is performed by or under the supervision of licensed technicians.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, images, and design, is the property of E&R Ibukun LLC or its licensors. You may not reproduce, distribute, or use any content without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              This website and its content are provided &ldquo;as is&rdquo; without warranty of any kind. E&R Ibukun LLC makes no representations or warranties regarding the accuracy or completeness of the information on this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, E&R Ibukun LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our liability for any claim arising from our fire protection services is limited to the amount paid for those specific services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service are governed by the laws of the State of Texas. Any disputes arising under these terms shall be resolved in the courts of Harris County, Texas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions about these Terms of Service may be directed to:
              <br />E&R Ibukun LLC
              <br />7961 Fields Street, Houston, TX 77028
              <br /><a href="tel:8329618372" className="underline" style={{ color: "#800A03" }}>(832) 961-8372</a>
              <br /><a href="mailto:edwin_ibukun@outlook.com" className="underline" style={{ color: "#800A03" }}>edwin_ibukun@outlook.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
