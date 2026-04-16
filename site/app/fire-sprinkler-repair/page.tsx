import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Sprinkler Repair in Texas | Leak & System Repair | E&R Ibukun LLC",
  description:
    "Fire sprinkler repair across all of Texas. Leaks, broken heads, corroded pipes, and system failures. 24/7 emergency response available. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  keywords: [
    "fire sprinkler repair Texas",
    "fire sprinkler repair near me Texas",
    "fire sprinkler system repair Texas",
    "fire sprinkler leak repair Houston",
    "broken fire sprinkler head repair Texas",
    "fire sprinkler pipe repair Texas",
    "emergency fire sprinkler repair Texas",
  ],
  alternates: {
    canonical: "/fire-sprinkler-repair",
  },
  openGraph: {
    title: "Fire Sprinkler Repair in Texas | E&R Ibukun LLC",
    description:
      "Fast fire sprinkler repair across Texas. Leaks, broken heads, corroded pipes, and post-fire restoration. 24/7 emergency available. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/fire-sprinkler-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What fire sprinkler repairs in Texas do you handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle leaking pipes and fittings, broken or corroded sprinkler heads, frozen or burst pipes, valve failures, backflow preventer repairs, pressure gauge replacement, and full system restoration after a fire activation. We also repair systems that failed an NFPA 25 inspection anywhere in Texas.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you respond to a fire sprinkler leak in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For emergency situations, we dispatch 24 hours a day, 7 days a week across Texas. Call (832) 961-8372. A burst pipe or active leak is treated as an emergency. We can also isolate the zone while repair is scheduled to minimize water damage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you repair a system that was damaged after a fire activation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After a sprinkler activates, the system needs to be drained, inspected, and any activated heads replaced before the system can be reset and put back into service. We handle post-fire restoration and get the system back online as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "My sprinkler system failed an inspection in Texas. Can you fix it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair deficiencies found during NFPA 25 inspections by us or any other licensed inspector in Texas. We review the inspection report, provide a written scope of work and pricing, and schedule the repair. After the fix, we can re-inspect and update your documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What causes fire sprinkler pipes to corrode or leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corrosion is usually caused by oxygen trapped in the pipe. Dry pipe systems are especially vulnerable because they cycle between wet and dry states. Water chemistry, pH levels, and microbially influenced corrosion (MIC) also accelerate pipe deterioration. We can assess corrosion severity and recommend the right repair approach.",
      },
    },
    {
      "@type": "Question",
      name: "Do you replace individual sprinkler heads or the entire system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. A single damaged or corroded head can be replaced without touching the rest of the system. If the system has systemic corrosion or aging pipe throughout, we assess whether a full pipe replacement or partial relining makes more sense than ongoing spot repairs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair residential fire sprinkler systems across Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair residential fire sprinkler systems in single-family homes and multifamily buildings across Texas. Common residential repairs include replacing damaged heads, repairing freeze-related breaks, and fixing alarm connections.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Fire Sprinkler Repair", item: "https://texasfiresprinklers.com/fire-sprinkler-repair" },
  ],
};

const repairTypes = [
  {
    title: "Leaking Pipes and Fittings",
    desc: "A small drip can become a major water event fast. We locate the source, isolate the zone, and make the repair properly instead of patching over it.",
    svgPath: "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-2-5.5l1.41-1.41 2.09 2.09 4.59-4.59L19.5 12l-6 6-3.5-3.5z",
  },
  {
    title: "Broken or Corroded Sprinkler Heads",
    desc: "Heads that are corroded, painted over, loaded, or physically damaged must be replaced. We stock common head types on our trucks for same-day replacement.",
    svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
  },
  {
    title: "Freeze and Burst Pipe Repair",
    desc: "Texas winters catch buildings off guard. Frozen or burst pipes in unheated spaces need fast repair to restore system integrity before the next storm.",
    svgPath: "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z",
  },
  {
    title: "Post-Fire System Restoration",
    desc: "After a sprinkler activates, every head in the zone must be replaced and the system re-pressurized before it provides protection again. We restore systems quickly.",
    svgPath: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z",
  },
  {
    title: "Valve and Alarm Device Repair",
    desc: "Stuck control valves, failed waterflow switches, and supervisory devices all need repair quickly. A failed valve in the closed position leaves your building unprotected.",
    svgPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.67V11c0 3.86-2.65 7.47-6 8.93-3.35-1.46-6-5.07-6-8.93V7.67L12 5z",
  },
  {
    title: "Backflow Preventer Repair",
    desc: "A malfunctioning backflow preventer can cause a failed inspection and put your water supply at risk. We test, repair, and certify backflow preventers to keep your system compliant.",
    svgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  },
];

const processSteps = [
  { num: "01", title: "Assessment", desc: "We inspect the damaged area, identify root cause, and document the full scope. You get a written repair recommendation before any work starts." },
  { num: "02", title: "Isolation", desc: "We isolate the affected zone to stop any active water loss while the repair is made. Your other zones stay in service where possible." },
  { num: "03", title: "Repair", desc: "Licensed technicians make the repair with the right parts. We do not patch and hope. The fix is done correctly the first time." },
  { num: "04", title: "Test and Document", desc: "We pressure test the repaired section, restore the system, and provide updated documentation. Your inspection record reflects the repair." },
];

export default function FireSprinklerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">24/7 Emergency Available</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Fire Sprinkler Repair in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            E&R Ibukun LLC handles fire sprinkler repair in Texas for all system types, including leaking pipes, broken heads, frozen systems, and post-fire restoration. We provide 24/7 emergency response when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8329618372"
              style={{ backgroundColor: "#C3071F" }}
              className="px-8 py-4 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Emergency Line: (832) 961-8372
            </a>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Schedule a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-medium text-center">
            <span>24/7 Emergency Dispatch</span>
            <span className="hidden sm:block">|</span>
            <span>Reg. No. SCR-G-3451926</span>
            <span className="hidden sm:block">|</span>
            <span>All Repair Types</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas</span>
          </div>
        </div>
      </section>

      {/* Repair types */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Texas Fire Sprinkler Repair: What We Fix</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a single corroded head to a system-wide pipe failure, fire sprinkler repair across Texas covers all system types and sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#EFF6F9" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: "#800A03" }}>
                    <path d={r.svgPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full min-h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/emergency-service-worker-night.png"
                alt="Fire sprinkler repair technician in Texas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: "#C3071F" }}>Our Repair Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Texas Fire Sprinkler Repair Process</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We do not guess and we do not patch. Every fire sprinkler repair in Texas starts with a site assessment, a written scope, and your sign-off before any work begins. Then we fix it right and document it so your records are complete.
              </p>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: "#800A03" }}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency callout */}
      <section style={{ backgroundColor: "#111827" }} className="py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Fire Sprinkler Emergency Across Texas?</h2>
          <p className="text-gray-300 text-lg mb-6">
            A burst pipe or active sprinkler leak cannot wait until morning. We dispatch emergency fire sprinkler repair crews across Texas around the clock. Call now.
          </p>
          <a href="tel:8329618372" style={{ backgroundColor: "#C3071F" }} className="inline-block px-10 py-4 rounded font-bold text-xl hover:opacity-90 transition-opacity">
            (832) 961-8372 — 24/7
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Sprinkler Repair FAQ</h2>
            <p className="text-gray-600">Common questions about fire sprinkler repair in Texas.</p>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#800A03" }}>{item.name}</h3>
                <p className="text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fire-sprinkler-installation" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Installation
            </Link>
            <Link href="/fire-sprinkler-inspection" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Inspection
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Texas Fire Sprinkler System Repaired</h2>
          <p className="text-red-200 text-lg mb-8">
            Serving all of Texas for fire sprinkler repair, from Houston and Dallas to San Antonio and beyond. We come to your property, assess the damage, give you a written quote, and fix it right.
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
