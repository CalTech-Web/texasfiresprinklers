import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensed Texas Fire Sprinkler Contractor",
  description:
    "E&R Ibukun LLC is a Houston-based, Texas-licensed fire protection company serving all of Texas. License SCR-G-3451926 issued by the Texas Department of Insurance State Fire Marshal's Office.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About E&R Ibukun LLC | Licensed Texas Fire Sprinkler Contractor",
    description:
      "Houston-based fire protection company serving all of Texas. Texas Fire Sprinkler Certificate of Registration SCR-G-3451926 issued by the Texas Department of Insurance State Fire Marshal's Office.",
    url: "https://texasfiresprinklers.com/about-us",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://texasfiresprinklers.com/about-us" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edwin Ibukun",
  jobTitle: "Owner / Founder",
  worksFor: {
    "@type": "Organization",
    name: "E&R Ibukun LLC",
    url: "https://texasfiresprinklers.com",
  },
  url: "https://texasfiresprinklers.com/about-us",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      {/* Header */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-3 text-red-200">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About E&R Ibukun LLC</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Houston-based, Texas-licensed, statewide dispatch. Mobile teams cover every zip code in the Lone Star State.
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
                Texas property owners have a specific problem. The state requires licensed fire sprinkler contractors, fire codes vary by city and occupancy type, and documentation errors mean failed inspections. Most contractors stay close to their home metro and pass on rural or outlying jobs. E&R Ibukun LLC was built to fill that gap.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in Houston, we now cover every Texas zip code. The same NFPA 25 standard that applies to an office tower in Midtown applies to a distribution center three hours away. We show up to both.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Texas Fire Sprinkler Certificate of Registration No. SCR-G-3451926. Issued by the Texas Department of Insurance State Fire Marshal&apos;s Office. Fully licensed and insured.
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
              Edwin Ibukun started E&R Ibukun LLC because fire protection in Texas needed someone willing to go where the property was, handle the documentation, and do the job right. He built it out of Houston, committed to going wherever the job was and completing every job without shortcuts on compliance. That standard still holds.
            </p>
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
                That registration covers every job we take on. We handle all required documentation and local fire marshal filings before we leave the property.
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
              { title: "Statewide Coverage", desc: "Houston base, statewide reach. Gulf Coast, North Texas, rural counties. Wherever the job is, we go." },
              { title: "Digital Diagnostics", desc: "System diagnostics run on modern equipment, not paper logs. Faster reads, fewer missed defects." },
              { title: "No Mess Left Behind", desc: "We stage equipment, do the work, and restore the site. Tools go back in the truck. The space looks like we were never there." },
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
            Call or text (832) 961-8372 to schedule a site visit. We cover all of Texas and file every compliance document when the job is done.
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
