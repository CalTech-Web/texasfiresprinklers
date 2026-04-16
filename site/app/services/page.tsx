import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Sprinkler & Suppression Services in Texas",
  description:
    "E&R Ibukun LLC offers fire sprinkler installation and inspection, fire extinguisher services, fire suppression systems, and 24/7 emergency service across all of Texas. NFPA 25 compliant.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-3 text-red-200">What We Do</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fire Protection Services in Texas</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Sprinkler systems, extinguisher service, suppression systems, and 24/7 emergency dispatch. Every property type. Every Texas zip code.
          </p>
        </div>
      </section>

      {/* Fire Sprinkler Systems */}
      <section id="FireSprinklerSystems" style={{ backgroundColor: "#EFF6F9" }} className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: "#C3071F" }}>Service 01</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Sprinkler Systems</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A sprinkler system that fails inspection costs more than one installed correctly the first time. We design, install, inspect, and repair to NFPA 25 standards and Texas state code, and we file all required documentation when the job is done.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Routine Inspections: Annual, semi-annual, and quarterly testing per NFPA 25",
                  "System Repairs: Fixing leaks, pipe corrosion, and mechanical failures",
                  "Backflow Prevention: Certified testing to keep your water supply safe",
                  "Design and Installation: Custom sprinkler layouts for new Texas builds",
                  "Handles all required state documentation and local fire marshal reports",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:8329618372"
                style={{ backgroundColor: "#C3071F" }}
                className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity"
              >
                Call (832) 961-8372
              </a>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/fire-sprinkler-ceiling-office.png"
                alt="Fire sprinkler system ceiling installation in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fire Extinguisher Services */}
      <section id="FireExtinguisherServices" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/fire-extinguishers-wall.jpeg"
                alt="Fire extinguishers mounted on wall, inspected and certified in Texas"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: "#C3071F" }}>Service 02</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Extinguisher Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most facilities schedule the annual inspection and forget about it until a fire marshal shows up. We do the annual tagging and certification, the 6-year internal examination, and the hydrostatic test. We also train your staff on how to actually use them.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Annual Inspections: Professional tagging and certification",
                  "6-Year Maintenance: Internal examination and parts replacement",
                  "Hydrostatic Testing: Ensuring tank integrity for high-pressure units",
                  "On-Site Recharging: Immediate refilling after use or pressure loss",
                  "PASS Training for employees (Pull, Aim, Squeeze, Sweep)",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:8329618372"
                style={{ backgroundColor: "#C3071F" }}
                className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity"
              >
                Call (832) 961-8372
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Suppression Systems */}
      <section id="FireSuppressionSystems" style={{ backgroundColor: "#EFF6F9" }} className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: "#C3071F" }}>Service 03</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fire Suppression Systems</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A sprinkler head over a commercial range will destroy a kitchen. FM-200 in a server room stops a fire without water damage. The right suppression system depends on what is actually at risk. We spec and install the correct one for your environment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Kitchen Hood Systems: Protecting restaurants from grease fires",
                  "Clean Agent Systems (FM-200): Fire protection for electronics and server rooms",
                  "CO2 Systems: Heavy-duty suppression for industrial machinery",
                  "Dry Chemical Systems: Ideal for paint booths and flammable liquid storage",
                  "Designed for commercial kitchens, data centers, and industrial facilities",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:8329618372"
                style={{ backgroundColor: "#C3071F" }}
                className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity"
              >
                Call (832) 961-8372
              </a>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/commercial-kitchen-suppression.png"
                alt="Commercial kitchen fire suppression system in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section id="EmergencyService" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/emergency-service-worker-night.png"
                alt="24/7 emergency fire protection service in Texas"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: "#C3071F" }}>Service 04</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">24/7 Emergency Service</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A burst pipe in a sprinkler system can flood a building fast. A tripped suppression system in a server room can destroy equipment. Fire system failures do not wait for business hours. We run 24/7 dispatch across all of Texas. Call (832) 961-8372 any time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Burst Pipe Repair: Rapid response to minimize water damage",
                  "Fire Alarm Silencing: Troubleshooting malfunctioning panels at any hour",
                  "System Restoration: Getting protection back online after a fire",
                  "Fire Watch Services: On-site safety monitoring while systems are down",
                  "24-hour emergency dispatch across all of Texas",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#800A03" }} className="font-bold mt-0.5">&#10003;</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:8329618372"
                style={{ backgroundColor: "#C3071F" }}
                className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity text-lg"
              >
                Emergency Hotline: (832) 961-8372
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Industries We Serve</h2>
            <p className="text-red-200 max-w-2xl mx-auto text-sm">
              Restaurants, data centers, warehouses, offices, and homes. Each occupancy type has different code requirements. We handle them all.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {[
              {
                label: "Commercial Offices & Retail",
                svgPath: "M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2zM20 8h-4v12h4V8zm-2 10v-8h2v8h-2z",
              },
              {
                label: "Industrial Facilities",
                svgPath: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 4H3V7h14v8z",
              },
              {
                label: "Restaurants & Commercial Kitchens",
                svgPath: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
              },
              {
                label: "Data Centers & Server Rooms",
                svgPath: "M20 2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 6H4V4h16v4zM4 14h16c1.1 0 2-.9 2-2v-1H2v1c0 1.1.9 2 2 2zm16 2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H4v-4h16v4zM6 5h2v2H6zm0 10h2v2H6zm0-5h2v2H6z",
              },
              {
                label: "Residential Properties",
                svgPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
              },
            ].map((ind) => (
              <div key={ind.label} className="bg-red-900 rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-red-800 transition-colors">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(195,7,31,0.35)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-200">
                    <path d={ind.svgPath} />
                  </svg>
                </div>
                <p className="font-semibold text-sm leading-snug">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get a Free Site Evaluation</h2>
          <p className="text-gray-600 mb-8">
            Call or text. We go to any Texas zip code and handle the compliance paperwork so you do not have to.
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
