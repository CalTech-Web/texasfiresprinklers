import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Extinguisher Services in Texas | Inspection, Recharge & Testing | E&R Ibukun LLC",
  description:
    "Fire extinguisher inspection, recharging, hydrostatic testing, and PASS training across all of Texas. Annual certification and 6-year service. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  keywords: [
    "fire extinguisher inspection Texas",
    "fire extinguisher service Texas",
    "fire extinguisher recharge Texas",
    "fire extinguisher testing Texas",
    "fire extinguisher certification Houston",
    "fire extinguisher maintenance Texas",
    "annual fire extinguisher inspection Texas",
  ],
  alternates: {
    canonical: "/fire-extinguisher-services",
  },
  openGraph: {
    title: "Fire Extinguisher Services in Texas | E&R Ibukun LLC",
    description:
      "Annual inspection, hydrostatic testing, recharging, and 6-year maintenance for fire extinguishers across all of Texas. Certified technicians. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/fire-extinguisher-services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often do fire extinguishers need to be inspected in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFPA 10 requires an annual fire extinguisher inspection in Texas by a certified professional. In addition, your staff should perform a quick visual check monthly to confirm the extinguisher is in place, the pin is intact, and the gauge is in the green. After any use or discharge, the extinguisher must be inspected and recharged before being returned to service.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 6-year fire extinguisher maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every six years, stored pressure extinguishers must have an internal examination and all mechanical parts replaced as needed. We disassemble the unit, inspect the internal cylinder walls, replace the o-rings, valve stem, and any worn components, then reassemble and recharge. The 6-year service tag documents that this was completed.",
      },
    },
    {
      "@type": "Question",
      name: "What is hydrostatic testing and when is it required for Texas fire extinguishers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hydrostatic testing fills the cylinder with water under pressure to verify the shell can handle its rated working pressure without failure. Most portable extinguishers require hydrostatic testing every 5 or 12 years depending on the extinguisher type. Cartridge-operated dry chemical units require 12-year testing. We perform testing on-site or at our facility.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recharge a fire extinguisher after it was used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We recharge fire extinguishers on-site with the correct agent and pressure. After a discharge, we also inspect the unit before recharging to confirm the cylinder and valve are still serviceable. A discharged extinguisher returned to service without recharging provides no protection.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fire extinguishers do you service across Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service ABC dry chemical, CO2, wet chemical (Class K for commercial kitchens), halon replacement clean agents, and water-based extinguishers across Texas. We also service wheeled units and fixed suppression systems with portable backup extinguishers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide PASS training for employees at Texas businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer on-site PASS training for your staff at Texas businesses. PASS stands for Pull, Aim, Squeeze, Sweep. Most employees have never actually operated a fire extinguisher. Training takes about 30 minutes and gives your staff the confidence to respond to a small fire before it grows.",
      },
    },
    {
      "@type": "Question",
      name: "How many fire extinguishers does my Texas building need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFPA 10 sets minimum requirements based on occupancy class and floor area. A light hazard office needs one extinguisher for roughly every 3,000 square feet. A commercial kitchen with Class K hazards needs a wet chemical unit within 30 feet of the cooking equipment. We assess your building and tell you exactly what you need to be compliant with Texas fire code.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Fire Extinguisher Services", item: "https://texasfiresprinklers.com/fire-extinguisher-services" },
  ],
};

const services = [
  {
    title: "Annual Inspection",
    desc: "Full NFPA 10 annual inspection with professional tagging and certification. We verify gauge pressure, agent weight, pin and tamper seal, and physical condition. You get a tag dated and signed by a certified technician.",
    svgPath: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  },
  {
    title: "6-Year Internal Examination",
    desc: "Disassembly, internal inspection, parts replacement, and reassembly. Required every 6 years for stored pressure extinguishers under NFPA 10. Ensures the cylinder and internal components are still serviceable.",
    svgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  },
  {
    title: "Hydrostatic Testing",
    desc: "Pressure testing the cylinder to verify structural integrity. Required every 5 or 12 years depending on extinguisher type. Prevents catastrophic failures from cylinder fatigue or corrosion.",
    svgPath: "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z",
  },
  {
    title: "On-Site Recharging",
    desc: "Same-day recharging at your location after a discharge or pressure loss. We carry the most common agents on our trucks. No need to drop off equipment at a shop.",
    svgPath: "M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z",
  },
  {
    title: "PASS Employee Training",
    desc: "On-site hands-on training for your staff. Pull, Aim, Squeeze, Sweep. 30 minutes of training that gives your team confidence to stop a small fire before it spreads.",
    svgPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  {
    title: "Compliance Assessment",
    desc: "We assess your building against NFPA 10 requirements: correct extinguisher types for each hazard class, proper placement and spacing, mounting height compliance, and signage.",
    svgPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
];

const serviceIntervals = [
  { interval: "Monthly", desc: "Visual check by your staff (no technician required)", action: "Verify in place, gauge in green, pin intact, no visible damage" },
  { interval: "Annual", desc: "Professional inspection and certification", action: "Full NFPA 10 inspection, certified tag, pressure check, agent weight" },
  { interval: "6 Years", desc: "Internal examination", action: "Disassembly, internal inspection, parts replacement, reassembly, recharge" },
  { interval: "5 or 12 Years", desc: "Hydrostatic testing", action: "Cylinder pressure test to rated working pressure (varies by extinguisher type)" },
];

const processSteps = [
  { num: "01", title: "Schedule", desc: "Call or text. We confirm your location, unit count, and what service is needed. We can often fit annual inspections into a single site visit." },
  { num: "02", title: "Inspect and Service", desc: "Certified technician inspects every unit on site. Recharges, parts replacements, and hydrostatic testing are completed the same day where possible." },
  { num: "03", title: "Tag and Certify", desc: "Every serviced unit gets a dated certification tag. Deficient units are documented with a recommended action and timeline." },
  { num: "04", title: "Documentation", desc: "You receive a full service report listing every unit, its serial number, service completed, and next service due date. File it for your fire marshal records." },
];

export default function FireExtinguisherServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">NFPA 10 Certified Service</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Fire Extinguisher Inspection in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            E&R Ibukun LLC provides certified fire extinguisher inspection in Texas, covering annual inspections, 6-year internal examinations, hydrostatic testing, on-site recharging, and employee PASS training across all of Texas. Every unit tagged and certified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8329618372"
              style={{ backgroundColor: "#C3071F" }}
              className="px-8 py-4 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Call or Text (832) 961-8372
            </a>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-medium text-center">
            <span>Reg. No. SCR-G-3451926</span>
            <span className="hidden sm:block">|</span>
            <span>NFPA 10 Compliant</span>
            <span className="hidden sm:block">|</span>
            <span>On-Site Recharging</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas</span>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Texas Fire Extinguisher Inspection Includes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just a tag. Fire extinguisher inspection in Texas covers every service interval required by NFPA 10, with documentation for every unit at your facility.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#EFF6F9" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: "#800A03" }}>
                    <path d={s.svgPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service intervals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full min-h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/products/fire-extinguishers-inspection.png"
                alt="Fire extinguisher inspection and certification Texas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: "#C3071F" }}>NFPA 10 Service Schedule</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Texas Fire Extinguisher Inspection Intervals</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                NFPA 10 sets required service intervals that most Texas facility managers do not have time to track. We manage the schedule for fire extinguisher inspection in Texas and remind you when service is due, so you are never out of compliance.
              </p>
              <div className="space-y-4">
                {serviceIntervals.map((item) => (
                  <div key={item.interval} className="border-l-4 pl-4" style={{ borderColor: "#800A03" }}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-lg" style={{ color: "#800A03" }}>{item.interval}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Our Texas Fire Extinguisher Service Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule, inspect, certify, and document. We come to your Texas facility and handle everything on-site.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{ backgroundColor: "#800A03" }}>
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Extinguisher Inspection in Texas: FAQ</h2>
            <p className="text-gray-600">Common questions about fire extinguisher inspection and maintenance in Texas.</p>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#800A03" }}>{item.name}</h3>
                <p className="text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fire-sprinkler-installation" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Installation
            </Link>
            <Link href="/fire-sprinkler-inspection" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Inspection
            </Link>
            <Link href="/fire-sprinkler-repair" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Repair
            </Link>
            <Link href="/fire-suppression-systems" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Suppression Systems
            </Link>
            <Link href="/emergency-fire-sprinkler-service" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get a Texas-Certified Fire Extinguisher Inspector</h2>
          <p className="text-red-200 text-lg mb-8">
            Serving all of Texas for fire extinguisher inspection, from Houston to Dallas to El Paso. We come to your facility, inspect and service every unit, and leave you with certified tags and full documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8329618372" style={{ backgroundColor: "#C3071F" }} className="px-8 py-4 rounded font-bold text-lg hover:opacity-90 transition-opacity">
              Call or Text (832) 961-8372
            </a>
            <Link href="/contact-us" className="px-8 py-4 rounded font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-colors">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
