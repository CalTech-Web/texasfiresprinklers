import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Houston Fire Sprinkler Contractor",
  description:
    "E&R Ibukun LLC is a Houston-based, Texas-licensed fire protection company serving all of Texas. Learn about our mission, licensing, and commitment to fire life safety.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-3 text-red-200">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About E&R Ibukun LLC</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Certified experts dedicated to your protection. Houston-based, Texas-licensed, and serving every zip code in the Lone Star State.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                E&R Ibukun LLC began with a simple but vital goal: to provide Texas property owners with a higher standard of fire life safety. We recognized that Texas businesses needed a partner who understands both the technical complexities of fire suppression and the specifics of state fire codes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Starting locally in Houston, we expanded statewide with specialists who treat each building as their own. Our team brings a zero-fail performance standard to every inspection, installation, and emergency call.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are fully licensed and insured, holding Texas Fire Sprinkler Certificate of Registration No. SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal&apos;s Office.
              </p>
            </div>
            <div className="relative h-80 lg:h-[420px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/emergency-service-truck.png"
                alt="E&R Ibukun LLC fire protection service team in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership</h2>
          <div className="mt-10 bg-gray-50 rounded-xl p-8 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-1" style={{ color: "#800A03" }}>Edwin Ibukun</h3>
            <p className="text-gray-500 mb-4">Owner / Founder</p>
            <p className="text-gray-700 leading-relaxed">
              Edwin Ibukun founded E&R Ibukun LLC with a commitment to providing Texas property owners with certified, reliable fire protection. Under his leadership, the company has grown from a Houston-based operation to a statewide service provider, covering every Texas zip code with the same standard of expert care.
            </p>
            <blockquote className="mt-6 border-l-4 pl-4 italic text-gray-600" style={{ borderColor: "#800A03" }}>
              &ldquo;Certified experts dedicated to your protection.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* License & Compliance */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logos/certificate.png"
                alt="Texas Department of Insurance State Fire Marshal's Office Certificate SCR-G-3451926"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Licensed &amp; Compliant in Texas</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our state registration ensures every job meets Texas standards. We handle all required documentation so you never have to worry about compliance.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Registration Number", value: "SCR-G-3451926" },
                  { label: "Registration Type", value: "Fire Sprinkler Certificate of Registration, General" },
                  { label: "Issuing Authority", value: "Texas Department of Insurance State Fire Marshal's Office" },
                  { label: "Compliance Standard", value: "NFPA 25" },
                  { label: "Insurance", value: "Fully Licensed and Insured" },
                  { label: "Service Area", value: "All of Texas (every zip code)" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-semibold text-gray-900 sm:w-44 flex-shrink-0">{item.label}:</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Statewide Coverage", desc: "Every Texas zip code, including Gulf Coast, North Texas, and surrounding rural areas." },
              { title: "Digital Diagnostics", desc: "Advanced system diagnostics and modern technology for faster, more accurate service." },
              { title: "No Mess Left Behind", desc: "Clean work guarantee on every installation and maintenance job." },
              { title: "Real Expert Access", desc: "Direct communication with certified technicians, not call center representatives." },
            ].map((item) => (
              <div key={item.title} className="bg-red-900 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-red-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8">
            Contact E&R Ibukun LLC for a free site evaluation. We serve all of Texas and manage every step of compliance documentation for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8329618372"
              style={{ backgroundColor: "#C3071F" }}
              className="px-8 py-4 rounded text-white font-bold hover:opacity-90 transition-opacity"
            >
              Call (832) 961-8372
            </a>
            <Link
              href="/contact-us"
              style={{ backgroundColor: "#800A03" }}
              className="px-8 py-4 rounded text-white font-bold hover:opacity-90 transition-opacity"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
