import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Sprinkler Inspection in Texas | NFPA 25 Testing | E&R Ibukun LLC",
  description:
    "NFPA 25 fire sprinkler inspection and testing across all of Texas. Annual, semi-annual, and quarterly inspections with full state documentation. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  keywords: [
    "fire sprinkler inspection Texas",
    "fire sprinkler inspection Houston",
    "NFPA 25 inspection Texas",
    "fire sprinkler system inspection Texas",
    "annual fire sprinkler inspection Texas",
    "fire sprinkler inspection companies Texas",
    "fire sprinkler testing Texas",
  ],
  alternates: {
    canonical: "/fire-sprinkler-inspection",
  },
  openGraph: {
    title: "Fire Sprinkler Inspection in Texas | NFPA 25 | E&R Ibukun LLC",
    description:
      "NFPA 25 compliant fire sprinkler inspections across all of Texas. Annual, quarterly, and semi-annual testing with fire marshal documentation. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/fire-sprinkler-inspection",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does fire sprinkler inspection in Texas cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of fire sprinkler inspection in Texas varies by building size, system type, and inspection interval. Most commercial annual inspections are priced per zone or per building square footage. Call (832) 961-8372 for a quote specific to your property. We provide written pricing before any inspection begins.",
      },
    },
    {
      "@type": "Question",
      name: "How often is a fire sprinkler inspection required in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFPA 25 requires quarterly, semi-annual, and annual inspections depending on which components are being tested. Most commercial properties need a full annual inspection, with quarterly inspections of control valves and alarm devices. Texas also requires inspections after any system modification or fire event.",
      },
    },
    {
      "@type": "Question",
      name: "What does a fire sprinkler inspection in Texas include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full NFPA 25 inspection covers sprinkler heads (looking for corrosion, paint, or damage), control valves, alarm valves, water supply tests, pressure gauges, hangers and bracing, backflow preventers, and the fire pump if present. We document every component and note anything out of compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide the fire marshal report after inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every inspection includes a full written report and all required state documentation. We handle the local fire marshal report so you have everything on file when an inspector comes.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my system fails the inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We document the deficiency and give you a clear repair recommendation. If the issue is minor and we have the parts on the truck, we can often fix it the same day. For larger repairs, we schedule a follow-up and provide a written scope of work with pricing before any repair starts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you inspect dry pipe, pre-action, and deluge systems across Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We inspect all water-based suppression system types across Texas: wet pipe, dry pipe, pre-action, and deluge systems. Each system type has its own NFPA 25 testing requirements, and our technicians are trained on all of them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do sprinkler inspections for residential properties in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We inspect residential fire sprinkler systems for single-family homes and multifamily buildings across Texas. Residential systems follow NFPA 13D or 13R inspection intervals depending on the system type.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Fire Sprinkler Inspection", item: "https://texasfiresprinklers.com/fire-sprinkler-inspection" },
  ],
};

const inspectionItems = [
  "Sprinkler heads: corrosion, paint, physical damage",
  "Control valves: open/close operation and supervisory signals",
  "Alarm valves and water flow devices",
  "Pressure gauges on wet and dry systems",
  "Water supply and flow tests per NFPA 25",
  "Hangers, bracing, and pipe integrity",
  "Backflow preventer testing and certification",
  "Fire pump inspection and flow test",
  "Inspector test valve and drain testing",
  "Full written report and state documentation",
];

const inspectionFrequency = [
  {
    title: "Quarterly",
    items: ["Control valve position", "Alarm devices", "Fire department connections"],
  },
  {
    title: "Semi-Annual",
    items: ["Gauges (wet/dry systems)", "Alarm valves", "Deluge and pre-action valves"],
  },
  {
    title: "Annual",
    items: ["Full system inspection", "Internal inspection of sprinkler heads", "Water supply test", "Fire pump annual test"],
  },
  {
    title: "5-Year / As Required",
    items: ["Internal pipe inspection", "Obstruction investigation", "Sprinkler head replacement (50-year heads)"],
  },
];

const processSteps = [
  { num: "01", title: "Schedule", desc: "Call or text to book. We confirm your property address, system type, and inspection scope. We work around your operating hours." },
  { num: "02", title: "Inspect", desc: "Certified technicians arrive and conduct a full NFPA 25 inspection of every component required at your inspection interval." },
  { num: "03", title: "Document", desc: "We produce a written inspection report covering every tested component. Deficiencies are noted with a recommended repair action." },
  { num: "04", title: "File", desc: "State documentation and any required local fire marshal reports are filed. You receive digital copies of everything." },
];

export default function FireSprinklerInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">NFPA 25 Certified Inspections</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Fire Sprinkler Inspection in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            E&R Ibukun LLC provides professional fire sprinkler inspection in Texas for commercial, industrial, and residential properties statewide. Every inspection follows NFPA 25 and Texas state code. We handle the reports and file the paperwork.
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
              Schedule an Inspection
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
            <span>NFPA 25 Compliant</span>
            <span className="hidden sm:block">|</span>
            <span>State Documentation Included</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas</span>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: "#C3071F" }}>What We Check</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">What a Fire Sprinkler Inspection in Texas Covers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                NFPA 25 fire sprinkler inspection in Texas covers more than just the sprinkler heads. Every component that affects system performance gets tested at the required interval. We check the whole system, not just the parts that are easy to reach.
              </p>
              <ul className="space-y-3">
                {inspectionItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-full min-h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/fire-sprinkler-ceiling-office.png"
                alt="Fire sprinkler inspection in Texas office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Frequency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">NFPA 25 Inspections Across Texas: Required Intervals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The frequency of each inspection item is set by NFPA 25. Here is what is required at each interval for a typical commercial wet pipe system in Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionFrequency.map((freq) => (
              <div key={freq.title} className="border-2 rounded-xl p-6" style={{ borderColor: "#800A03" }}>
                <h3 className="font-bold text-xl mb-4 text-center" style={{ color: "#800A03" }}>{freq.title}</h3>
                <ul className="space-y-2">
                  {freq.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-700">
                      <span style={{ color: "#C3071F" }} className="font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              Texas properties with high-piled storage, large occupancy loads, or systems that have exceeded their service intervals often require additional testing beyond the NFPA 25 minimums. Our inspectors flag those situations and provide a clear written recommendation so you stay ahead of enforcement.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Our Texas Fire Sprinkler Inspection Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule, inspect, document, file. We handle every step and leave you with a clean record.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Sprinkler Inspection FAQ</h2>
            <p className="text-gray-600">Common questions about fire sprinkler inspection requirements in Texas.</p>
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
            <Link href="/fire-sprinkler-repair" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Repair
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get a Texas-Licensed Fire Sprinkler Inspector</h2>
          <p className="text-red-200 text-lg mb-8">
            Serving all of Texas, from Houston to the Panhandle. We come to you, inspect to NFPA 25, and file the state paperwork. Call or text to get on the schedule.
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
