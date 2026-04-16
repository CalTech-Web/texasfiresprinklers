import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Sprinkler Installation in Texas | E&R Ibukun LLC",
  description:
    "Professional fire sprinkler system installation across Texas. E&R Ibukun LLC designs and installs wet, dry, and residential sprinkler systems to NFPA standards. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  keywords: [
    "fire sprinkler installation Texas",
    "fire sprinkler system installation Texas",
    "commercial fire sprinkler installation Houston",
    "residential fire sprinkler installation Texas",
    "fire sprinkler installation near me Texas",
    "fire sprinkler system design Texas",
  ],
  alternates: {
    canonical: "/fire-sprinkler-installation",
  },
  openGraph: {
    title: "Fire Sprinkler Installation in Texas | E&R Ibukun LLC",
    description:
      "Licensed fire sprinkler installation for commercial and residential properties across all of Texas. NFPA compliant. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/fire-sprinkler-installation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is fire sprinkler installation required by Texas law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Texas law requires fire sprinkler installation in most new commercial buildings, high-rise structures, and certain multifamily developments. Requirements vary by occupancy type, building height, and local jurisdiction. E&R Ibukun LLC assesses your building against current Texas state code and local fire marshal requirements before any design work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fire sprinkler systems do you install in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install wet pipe, dry pipe, pre-action, and deluge systems. Wet pipe is the most common for offices and retail. Dry pipe is used in freezers or unheated warehouses where pipes cannot hold standing water. Pre-action systems are common in data centers. We spec the right system for your occupancy type and building layout.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a commercial fire sprinkler installation in Texas take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most commercial installations take one to five days depending on the square footage and system complexity. A small retail space may be done in a single day. A multi-floor warehouse will take longer. We give you a project timeline before any work begins so you can plan around it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle the design as well as the installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete design-and-install service. Our team assesses your building layout, occupancy classification, and hazard level, then produces a system design that meets NFPA 13 and Texas state code requirements. You do not need a separate engineer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you file the fire marshal paperwork after installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. State documentation and local fire marshal reports are included with every installation job. When we leave, you have a fully permitted and documented system. You do not have to track down paperwork after the technicians are gone.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed to install fire sprinkler systems in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. E&R Ibukun LLC holds Texas Fire Sprinkler Certificate of Registration No. SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal's Office. Every technician on our crews is licensed and insured.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Texas do you serve for sprinkler installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of Texas. We are based in Houston but dispatch mobile installation crews statewide. Houston, Dallas, Austin, San Antonio, Fort Worth, and every zip code in between.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Fire Sprinkler Installation", item: "https://texasfiresprinklers.com/fire-sprinkler-installation" },
  ],
};

const processSteps = [
  {
    num: "01",
    title: "Site Evaluation",
    desc: "We assess your building layout, occupancy classification, ceiling heights, and hazard level. Every zone gets reviewed before a head count or pipe run is calculated.",
  },
  {
    num: "02",
    title: "System Design",
    desc: "Our engineers produce a full hydraulic design to NFPA 13 and Texas state code. We select the right system type (wet, dry, pre-action) based on what your building actually needs.",
  },
  {
    num: "03",
    title: "Installation",
    desc: "Licensed technicians execute the installation with proper pipe sizing, head placement, and flow testing. We work around your schedule where possible and leave the space clean.",
  },
  {
    num: "04",
    title: "Certification",
    desc: "Final flow test, inspector sign-off, state-required tagging, and full digital documentation. You get everything filed before we close the job.",
  },
];

const benefits = [
  {
    title: "Licensed Texas Contractor",
    desc: "SCR-G-3451926 from the Texas Department of Insurance. Every installation meets state code and local fire marshal requirements.",
    svgPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
  {
    title: "Full Design-and-Install",
    desc: "We design the system and install it. No need to hire a separate engineer or coordinate between vendors.",
    svgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  },
  {
    title: "Paperwork Included",
    desc: "State documentation, fire marshal reports, and as-built drawings come with every job. You file it and forget it.",
    svgPath: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
  },
  {
    title: "All of Texas Covered",
    desc: "Mobile installation crews deploy statewide. Houston base, Texas reach. Every zip code.",
    svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
];

const systemTypes = [
  {
    title: "Wet Pipe Systems",
    desc: "The standard for most commercial buildings. Pipes stay filled with pressurized water at all times. Fast response when a head activates. Best for climate-controlled spaces.",
  },
  {
    title: "Dry Pipe Systems",
    desc: "Used in unheated warehouses, parking garages, and freezer rooms. Pipes hold pressurized air instead of water. Water releases when the air pressure drops at activation.",
  },
  {
    title: "Pre-Action Systems",
    desc: "A double-interlock system for data centers and server rooms where an accidental discharge would cause catastrophic equipment loss. Both a smoke detector and a sprinkler head must activate before water releases.",
  },
  {
    title: "Residential Systems",
    desc: "Designed to NFPA 13D. Smaller pipe sizes and lower flow rates suited to single-family homes and small multifamily buildings. Often required in new Texas construction by local codes.",
  },
];

export default function FireSprinklerInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">Licensed Texas Fire Sprinkler Contractor</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Fire Sprinkler Installation in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            E&R Ibukun LLC provides professional fire sprinkler installation in Texas for commercial buildings, warehouses, restaurants, and homes statewide. Every installation is NFPA 13 compliant with full state documentation included.
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
              Request a Free Quote
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
            <span>NFPA 13 Compliant</span>
            <span className="hidden sm:block">|</span>
            <span>Design + Install</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Texas Properties Choose E&R Ibukun for Sprinkler Installation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A licensed Texas contractor, a complete design-and-install team, and paperwork handled from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#EFF6F9" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: "#800A03" }}>
                    <path d={b.svgPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: "#C3071F" }}>What We Install</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Texas Fire Sprinkler Installation: System Types</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Not every building needs the same system. Occupancy type, temperature range, and what is being protected all drive the right choice. Fire sprinkler installation in Texas must account for the state&apos;s climate extremes, from coastal humidity in Houston to cold snaps in the Panhandle. We spec the correct system for your building on the first visit.
              </p>
              <div className="space-y-5">
                {systemTypes.map((s) => (
                  <div key={s.title} className="flex gap-4">
                    <span style={{ color: "#800A03" }} className="font-bold text-xl mt-0.5">&#10003;</span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: "#800A03" }}>{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/products/fire-sprinkler-spraying.png"
                alt="Fire sprinkler system installation in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Texas Fire Sprinkler Installation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four steps from site evaluation to final certification. No surprises and no paperwork left for you to chase across Texas.
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
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              Texas fire sprinkler installation projects range from a single-story restaurant in Houston to a multi-building industrial campus in the Permian Basin. Our crews are equipped and licensed to handle the full spectrum. Every job, large or small, follows the same four-step process so nothing gets skipped.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Sprinkler Installation FAQ</h2>
            <p className="text-gray-600">Common questions about fire sprinkler installation in Texas.</p>
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
            <Link href="/fire-sprinkler-inspection" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Sprinkler Inspection
            </Link>
            <Link href="/fire-sprinkler-repair" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Sprinkler Repair
            </Link>
            <Link href="/fire-suppression-systems" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Suppression Systems
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get a Texas-Licensed Fire Sprinkler Installer</h2>
          <p className="text-red-200 text-lg mb-8">
            Serving all of Texas, from Houston to El Paso. We come to your property, design the right system, install it to code, and file the paperwork. Call or text to schedule your free site evaluation.
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
