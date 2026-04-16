import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24/7 Emergency Fire Sprinkler Service in Texas | E&R Ibukun LLC",
  description:
    "24/7 emergency fire sprinkler repair and service across all of Texas. Burst pipes, system failures, post-fire restoration, and fire watch. Licensed contractor SCR-G-3451926. Call (832) 961-8372 now.",
  keywords: [
    "emergency fire sprinkler service Texas",
    "24/7 fire sprinkler repair Texas",
    "fire sprinkler emergency Houston",
    "burst fire sprinkler pipe repair Texas",
    "emergency fire protection service Texas",
    "fire watch service Texas",
    "after hours fire sprinkler repair Texas",
  ],
  alternates: {
    canonical: "/emergency-fire-sprinkler-service",
  },
  openGraph: {
    title: "24/7 Emergency Fire Sprinkler Service in Texas | E&R Ibukun LLC",
    description:
      "Around-the-clock emergency fire sprinkler dispatch across all of Texas. Burst pipes, post-fire restoration, fire watch, and system failures. Call (832) 961-8372.",
    url: "https://texasfiresprinklers.com/emergency-fire-sprinkler-service",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to a fire sprinkler emergency in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We dispatch 24 hours a day, 7 days a week across all of Texas. Response time depends on your location and the crew nearest to you. Call (832) 961-8372 immediately. Our dispatch team takes the call around the clock, not a voicemail.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as a fire sprinkler emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any situation that leaves a building unprotected or causes active water damage is an emergency. This includes burst or leaking pipes, a sprinkler head that has discharged without a fire, a system that is offline after a fire event, a fire alarm panel in trouble mode, and any loss of water pressure to the system.",
      },
    },
    {
      "@type": "Question",
      name: "What is fire watch service and when is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fire watch is a required safety measure when a fire suppression system is impaired for more than 4 hours. A fire watch attendant physically patrols the building on a timed schedule, watching for fire and ready to alert occupants. NFPA 25 requires fire watch any time a system is taken offline for repair, testing, or after a major failure. We provide licensed fire watch personnel across Texas.",
      },
    },
    {
      "@type": "Question",
      name: "My sprinkler system discharged without a fire. What do I do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shut off the system water supply at the main control valve to stop the discharge, then call (832) 961-8372. Do not leave the system shut off without arranging fire watch coverage. We will come out, identify why the system activated, repair the cause, replace any activated heads, drain the system, and return it to full service.",
      },
    },
    {
      "@type": "Question",
      name: "Can you restore a fire sprinkler system after a fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After a fire, every sprinkler head that activated must be replaced. The system must be inspected for heat or smoke damage, drained and dried, re-pressurized, and tested before it can provide protection again. We handle full post-fire system restoration and provide documentation for your insurance claim.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide emergency service outside of Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We dispatch emergency crews statewide. Houston is our base, but we have crews that cover Dallas, Austin, San Antonio, and all surrounding Texas markets. Call (832) 961-8372 regardless of where you are in Texas.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a fire sprinkler pipe freezes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A frozen pipe in a wet system is an emergency waiting to happen. When the pipe thaws, it will discharge wherever it is cracked or burst. Call us immediately if you suspect a frozen section. We can isolate the zone, safely thaw the pipe with controlled heat, and repair any damage before water floods the building.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texasfiresprinklers.com" },
    { "@type": "ListItem", position: 2, name: "Emergency Fire Sprinkler Service", item: "https://texasfiresprinklers.com/emergency-fire-sprinkler-service" },
  ],
};

const emergencyTypes = [
  {
    title: "Burst Pipe Repair",
    desc: "A burst sprinkler pipe floods a building fast. We isolate the zone, stop the flow, and repair the break. Call immediately to minimize water damage.",
    svgPath: "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z",
  },
  {
    title: "Accidental Discharge",
    desc: "A sprinkler that activates without a fire means something failed. We identify the cause, replace the head, and get the system back in service with documentation of the event.",
    svgPath: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  },
  {
    title: "Fire Watch Coverage",
    desc: "When a system goes offline, Texas fire code and NFPA 25 require a fire watch within four hours. We provide licensed fire watch personnel who patrol your building until the system is restored.",
    svgPath: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
  },
  {
    title: "Post-Fire Restoration",
    desc: "After a fire activates the system, every head in the zone must be replaced, the system drained and inspected, and the protection restored before the building is occupied again. We prioritize post-fire jobs.",
    svgPath: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z",
  },
  {
    title: "Alarm Panel Trouble",
    desc: "A fire alarm panel in trouble or supervisory mode means something in the system needs attention. We diagnose and resolve alarm faults at any hour to silence the panel and address the root cause.",
    svgPath: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z",
  },
  {
    title: "Frozen Pipe Emergency",
    desc: "Texas winters cause frozen sprinkler pipes in unheated spaces. A frozen pipe that thaws unattended becomes a flood. We respond quickly to isolate, thaw, and repair before the pipe lets go.",
    svgPath: "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z",
  },
];

const processSteps = [
  { num: "01", title: "Call Immediately", desc: "Call (832) 961-8372 any time of day or night. A live person takes your call, not a voicemail. Describe the situation so we can dispatch the right crew with the right equipment." },
  { num: "02", title: "Dispatch and Arrival", desc: "We dispatch the nearest available licensed crew. While they are en route, we will advise you on any immediate actions you can take to reduce damage, such as locating the main shutoff." },
  { num: "03", title: "Contain and Repair", desc: "Technicians isolate the problem, contain any active water damage, and make the repair. Where fire watch is needed, we arrange coverage while repair is in progress." },
  { num: "04", title: "System Restoration", desc: "After the repair, we pressure test the system, restore full coverage, and provide documentation of the event and the work completed. Your system is back in service." },
];

export default function EmergencyFireSprinklerServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#800A03" }} className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-4 text-red-200">24 Hours a Day, 7 Days a Week</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Emergency Fire Sprinkler Service in Texas
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Burst pipes, system failures, post-fire restoration, and fire watch. We dispatch emergency crews across all of Texas around the clock. Call now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8329618372"
              style={{ backgroundColor: "#C3071F" }}
              className="px-8 py-4 rounded font-bold text-xl hover:opacity-90 transition-opacity"
            >
              Call Now: (832) 961-8372
            </a>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us Online
            </Link>
          </div>
          <p className="text-red-200 text-sm mt-6">Live dispatch, not a voicemail. Call any time.</p>
        </div>
      </section>

      {/* Stat bar */}
      <section style={{ backgroundColor: "#111827" }} className="py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-extrabold mb-1" style={{ color: "#C3071F" }}>24/7</p>
              <p className="text-sm text-gray-300">Live Dispatch</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-1" style={{ color: "#C3071F" }}>254</p>
              <p className="text-sm text-gray-300">Texas Counties Covered</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-1" style={{ color: "#C3071F" }}>SCR</p>
              <p className="text-sm text-gray-300">G-3451926 Licensed</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-1" style={{ color: "#C3071F" }}>0</p>
              <p className="text-sm text-gray-300">Voicemail Boxes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency types */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Emergency Situations We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If your fire protection system is offline, damaged, or flooding your building, call us. We handle every type of fire sprinkler emergency in Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((e) => (
              <div key={e.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#EFF6F9" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: "#800A03" }}>
                    <path d={e.svgPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{e.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action strip */}
      <section style={{ backgroundColor: "#C3071F" }} className="py-10 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl font-bold mb-2">Fire system down right now?</p>
          <a href="tel:8329618372" className="text-3xl font-extrabold hover:underline">(832) 961-8372</a>
          <p className="text-red-200 text-sm mt-2">Live dispatch. Any hour. All of Texas.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: "#C3071F" }}>What Happens When You Call</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Emergency Response Process</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                When you call our emergency line, a technician or dispatcher answers. Not a machine. We get the details, dispatch the right crew, and talk you through any immediate actions while help is on the way.
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
            <div className="relative h-80 lg:h-full min-h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/emergency-service-truck.png"
                alt="Emergency fire sprinkler service truck Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Emergency Service FAQ</h2>
            <p className="text-gray-600">Common questions about our 24/7 emergency fire sprinkler service in Texas.</p>
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
            <Link href="/fire-sprinkler-repair" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Sprinkler Repair
            </Link>
            <Link href="/fire-suppression-systems" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Suppression Systems
            </Link>
            <Link href="/fire-extinguisher-services" style={{ backgroundColor: "#800A03" }} className="px-6 py-3 rounded text-white font-semibold hover:opacity-90 transition-opacity text-sm">
              Fire Extinguisher Services
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire System Emergency in Texas?</h2>
          <p className="text-red-200 text-lg mb-8">
            Do not wait. A system that is offline or leaking puts people and property at risk. Call our 24/7 emergency line now.
          </p>
          <a href="tel:8329618372" style={{ backgroundColor: "#C3071F" }} className="inline-block px-10 py-5 rounded font-bold text-2xl hover:opacity-90 transition-opacity">
            Call (832) 961-8372
          </a>
          <p className="text-red-200 text-sm mt-4">24 hours a day, 7 days a week, all of Texas</p>
        </div>
      </section>
    </>
  );
}
