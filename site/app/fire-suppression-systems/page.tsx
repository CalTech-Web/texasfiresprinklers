import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Suppression Systems in Texas | Kitchen Hood, FM-200, CO2 | E&R Ibukun LLC",
  description:
    "Fire suppression system installation and service in Texas. Kitchen hood systems, FM-200 clean agent, CO2, and dry chemical for restaurants, data centers, and industrial facilities. Call (832) 961-8372.",
  keywords: [
    "fire suppression systems Texas",
    "kitchen hood suppression system Texas",
    "FM-200 clean agent system Texas",
    "commercial fire suppression Houston",
    "restaurant fire suppression Texas",
    "data center fire suppression Texas",
    "CO2 fire suppression system Texas",
  ],
  alternates: {
    canonical: "/fire-suppression-systems",
  },
  openGraph: {
    title: "Fire Suppression Systems in Texas | E&R Ibukun LLC",
    description:
      "Kitchen hood, FM-200 clean agent, CO2, and dry chemical fire suppression systems for Texas restaurants, data centers, and industrial facilities. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/fire-suppression-systems",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of fire suppression systems do you install in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install kitchen hood suppression systems for restaurants, FM-200 clean agent systems for data centers and server rooms, CO2 suppression for industrial machinery and engine rooms, and dry chemical systems for paint booths and flammable liquid storage areas.",
      },
    },
    {
      "@type": "Question",
      name: "Why do Texas restaurants need a kitchen hood suppression system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial cooking produces grease-laden vapors that accumulate in the hood and ductwork. If that grease ignites, a standard sprinkler head cannot control it effectively. A UL 300-listed kitchen hood suppression system uses a wet chemical agent that knocks down grease fires and saponifies the surface to prevent re-ignition. Texas fire code requires these systems in most commercial kitchens.",
      },
    },
    {
      "@type": "Question",
      name: "What is an FM-200 clean agent system and when is it used in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FM-200 is a waterless fire suppression agent stored as a compressed liquid. When it discharges it extinguishes fire by removing heat. It leaves no residue, which makes it ideal for protecting electronics, server rooms, and data centers where water damage would destroy equipment. It is also safe for occupied spaces.",
      },
    },
    {
      "@type": "Question",
      name: "How often do fire suppression systems in Texas need to be inspected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen hood suppression systems require semi-annual inspections per NFPA 96, typically every six months or more frequently depending on cooking volume. Clean agent and CO2 systems require annual inspections. We schedule and track all intervals so you do not miss a deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Can you service a suppression system that another company installed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We inspect and service most major brands of suppression systems regardless of who installed them. If you have documentation from the original installation, bring it along. If not, we can assess the system and build a compliance record from the current state.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a kitchen suppression system discharges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After a discharge, the agent must be cleaned up, the nozzles and piping must be inspected, and the system must be recharged and reset before cooking operations can resume. We handle full post-discharge restoration and get you back up and running.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install fire suppression systems outside of Houston across Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve all of Texas. Our mobile service teams travel statewide for both installation and ongoing service. Dallas, Austin, San Antonio, and every other Texas market.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Fire Suppression Systems", item: "https://texasfiresprinklers.com/fire-suppression-systems" },
  ],
};

const systems = [
  {
    title: "Kitchen Hood Suppression Systems",
    badge: "Restaurants & Commercial Kitchens",
    desc: "UL 300-listed wet chemical systems for commercial cooking equipment. Required by Texas fire code in most commercial kitchens. Protects ranges, fryers, griddles, and hoods with automatic agent discharge and gas shutoff on activation.",
    items: [
      "UL 300-listed wet chemical agent",
      "Automatic gas line shutoff on activation",
      "Nozzle placement engineered to your equipment layout",
      "Semi-annual inspection and certification",
      "Post-discharge restoration and recharge",
    ],
    img: "/gallery/commercial-kitchen-suppression.png",
    imgAlt: "Commercial kitchen fire suppression system Texas",
  },
  {
    title: "FM-200 Clean Agent Systems",
    badge: "Data Centers & Server Rooms",
    desc: "Waterless fire suppression that extinguishes fire in seconds without damaging electronics or leaving residue. Safe for occupied spaces. Used in server rooms, data centers, telecommunications equipment rooms, and any space where water damage is unacceptable.",
    items: [
      "No water, no residue, no equipment damage",
      "Safe for occupied spaces",
      "Engineered to NFPA 2001 clean agent standards",
      "Integrated with smoke detection and alarm panels",
      "Annual inspection and cylinder weight checks",
    ],
    img: "/products/fire-suppression-server.png",
    imgAlt: "FM-200 clean agent fire suppression system server room Texas",
  },
  {
    title: "CO2 Suppression Systems",
    badge: "Industrial Facilities",
    desc: "Total-flooding CO2 systems for heavy industrial applications where a large volume of suppressant is needed quickly. Used in enclosed machinery areas, engine rooms, and industrial equipment spaces. Not for occupied spaces due to oxygen displacement.",
    items: [
      "High-concentration CO2 for rapid suppression",
      "Engineered for enclosed machine rooms and engine bays",
      "Pre-discharge alarms for personnel evacuation",
      "Designed to NFPA 12 standards",
      "Annual system inspection and testing",
    ],
    img: "/gallery/emergency-service-worker-night.png",
    imgAlt: "CO2 fire suppression system industrial Texas",
  },
  {
    title: "Dry Chemical Suppression Systems",
    badge: "Paint Booths & Flammable Storage",
    desc: "Dry chemical systems for Class B and C hazards including paint spray booths, flammable liquid storage rooms, and dip tank areas. Fast knock-down of flammable liquid fires with no water that would spread the hazard.",
    items: [
      "ABC or Purple K dry chemical agent",
      "Designed for Class B and Class C hazards",
      "Meets NFPA 17 dry chemical standards",
      "Automatic or manual activation options",
      "Annual inspection and system certification",
    ],
    img: "/gallery/fire-extinguishers-compartment.jpeg",
    imgAlt: "Dry chemical fire suppression system Texas",
  },
];

const processSteps = [
  { num: "01", title: "Hazard Assessment", desc: "We evaluate your occupancy, equipment layout, and fire hazard class. The right system depends on what is actually at risk and what Texas code requires." },
  { num: "02", title: "System Design", desc: "Engineering calculations, nozzle placement, agent quantity, and control panel integration. Designed to the correct NFPA standard for your system type." },
  { num: "03", title: "Installation", desc: "Licensed technicians install piping, nozzles, cylinders, detection, and control equipment. We coordinate with your kitchen or facilities team to minimize downtime." },
  { num: "04", title: "Testing and Certification", desc: "Full operational test, documentation, and any required local fire marshal sign-off. You get a certificate of compliance and a service schedule." },
];

export default function FireSuppressionSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">Licensed Texas Fire Protection Contractor</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Fire Suppression Systems in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            E&R Ibukun LLC designs and installs fire suppression systems in Texas for restaurants, data centers, and industrial facilities statewide. Kitchen hood, FM-200 clean agent, CO2, and dry chemical: the right agent for your specific hazard.
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
              Get a Free Assessment
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
            <span>All Suppression Types</span>
            <span className="hidden sm:block">|</span>
            <span>NFPA Compliant</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Texas Facilities Need the Right Suppression System</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A sprinkler head over a commercial range will destroy a kitchen when water hits burning grease. FM-200 in a server room stops a fire without soaking expensive equipment. CO2 in an engine room handles a fuel fire that water cannot touch. Fire suppression systems in Texas must match the specific hazard in each space. We specify and install the right solution for what is actually at risk in your building, whether you are in Houston, Dallas, San Antonio, or anywhere else across the state.
          </p>
        </div>
      </section>

      {/* System types */}
      <section className="py-4 bg-white">
        {systems.map((system, i) => (
          <div
            key={system.title}
            style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#EFF6F9" }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "#EFF6F9", color: "#800A03" }}>
                    {system.badge}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{system.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{system.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {system.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:8329618372" style={{ backgroundColor: "#C3071F" }} className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity">
                    Call (832) 961-8372
                  </a>
                </div>
                <div className={`relative h-72 lg:h-full min-h-[320px] rounded-lg overflow-hidden shadow-lg ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image src={system.img} alt={system.imgAlt} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Install Fire Suppression Systems Across Texas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From hazard assessment to final certification. Every step is engineered and documented to Texas fire code.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Suppression Systems in Texas: FAQ</h2>
            <p className="text-gray-600">Common questions about fire suppression systems in Texas.</p>
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
            <Link href="/fire-extinguisher-services" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Extinguisher Services
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Protect Your Texas Facility with the Right Suppression System</h2>
          <p className="text-red-200 text-lg mb-8">
            Serving all of Texas for fire suppression systems, including Houston, Dallas, Austin, and San Antonio. We assess your hazard, spec the right system, install it, and handle all compliance documentation.
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
