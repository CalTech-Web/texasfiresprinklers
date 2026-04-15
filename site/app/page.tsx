import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Sprinkler Installation & Inspection in Texas | E&R Ibukun LLC",
  description:
    "E&R Ibukun LLC delivers expert fire sprinkler installation, inspection, and 24/7 emergency services across all of Texas. Licensed contractor SCR-G-3451926. Serving Houston and every Texas zip code.",
};

const services = [
  {
    id: "FireSprinklerSystems",
    title: "Fire Sprinkler Systems",
    desc: "Custom design, installation, and NFPA 25 inspections for residential and commercial properties across Texas.",
    img: "/products/fire-sprinkler-spraying.png",
  },
  {
    id: "FireExtinguisherServices",
    title: "Fire Extinguisher Services",
    desc: "Annual inspections, hydrostatic testing, recharging, and PASS training so your team is always prepared.",
    img: "/products/fire-extinguishers-inspection.png",
  },
  {
    id: "FireSuppressionSystems",
    title: "Fire Suppression Systems",
    desc: "Kitchen hood, FM-200 clean agent, CO2, and dry chemical systems for restaurants, data centers, and industrial facilities.",
    img: "/products/fire-suppression-server.png",
  },
  {
    id: "EmergencyService",
    title: "24/7 Emergency Service",
    desc: "Round-the-clock dispatch for burst pipes, alarm silencing, system restoration, and fire watch across Texas.",
    img: "/gallery/emergency-service-worker-night.png",
  },
];

const differentiators = [
  { icon: "🗺️", title: "All of Texas", desc: "Statewide dispatch covering every Texas zip code, not limited to a single metro area." },
  { icon: "📋", title: "Licensed & Insured", desc: "Certified technicians holding Texas Fire Sprinkler Registration SCR-G-3451926." },
  { icon: "✅", title: "NFPA 25 Compliant", desc: "Every job meets NFPA and Texas state code. We handle all state documentation and fire marshal reports." },
  { icon: "⚡", title: "24/7 Emergency", desc: "Fire system failures do not wait for business hours. We dispatch around the clock." },
  { icon: "🔧", title: "Clean Work Guarantee", desc: "No mess left behind. Direct communication with real expert technicians, not call centers." },
  { icon: "📱", title: "Mobile Service Teams", desc: "Our technicians come to your location. No need to transport equipment or leave your facility." },
];

const processSteps = [
  { num: "01", title: "Site Evaluation", desc: "Comprehensive audit of your current fire safety status, identifying any gaps in Texas code compliance." },
  { num: "02", title: "System Design", desc: "We create a customized protection plan, selecting the right sprinklers, suppressants, or extinguishers for your layout." },
  { num: "03", title: "Precision Implementation", desc: "Certified technicians execute installation or maintenance with minimal disruption to daily operations." },
  { num: "04", title: "Final Certification", desc: "Full digital documentation and state-required tagging provided to prove your property is 100% compliant." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/gallery/er-ibukun-hero.jpeg"
          alt="E&R Ibukun LLC fire protection services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm mb-4" style={{ color: "#C3071F" }}>
            Texas Licensed Fire Sprinkler Contractor
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Fire Sprinkler Installation &amp; Service Across Texas
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Houston-based fire protection company serving all of Texas with expert fire sprinkler installation, inspection, and emergency services for residential and commercial properties.
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
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ backgroundColor: "#800A03" }} className="text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-medium text-center">
            <span>Texas Licensed &amp; Insured</span>
            <span className="hidden sm:block">|</span>
            <span>Reg. No. SCR-G-3451926</span>
            <span className="hidden sm:block">|</span>
            <span>NFPA 25 Compliant</span>
            <span className="hidden sm:block">|</span>
            <span>24/7 Emergency Dispatch</span>
            <span className="hidden sm:block">|</span>
            <span>All of Texas Served</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Fire Protection Services in Texas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From routine inspections to emergency response, E&R Ibukun LLC provides comprehensive fire protection for every property type across Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              style={{ backgroundColor: "#C3071F" }}
              className="inline-block px-8 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Texas Chooses E&R Ibukun LLC</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A higher standard of fire life safety, backed by state licensing, NFPA compliance, and statewide coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4">
                <span className="text-3xl flex-shrink-0">{d.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#800A03" }}>{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Our Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven four-step approach that gets your fire protection system installed, certified, and compliant with Texas state code.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                  style={{ backgroundColor: "#800A03" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-process"
              style={{ color: "#800A03" }}
              className="font-semibold hover:underline"
            >
              Learn More About Our Process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-52 rounded overflow-hidden">
              <Image src="/gallery/fire-sprinkler-ceiling-office.png" alt="Fire sprinkler ceiling installation" fill className="object-cover" />
            </div>
            <div className="relative h-52 rounded overflow-hidden">
              <Image src="/gallery/fire-extinguishers-compartment.jpeg" alt="Fire extinguisher compartment" fill className="object-cover" />
            </div>
            <div className="relative h-52 rounded overflow-hidden">
              <Image src="/gallery/commercial-kitchen-suppression.png" alt="Commercial kitchen fire suppression" fill className="object-cover" />
            </div>
            <div className="relative h-52 rounded overflow-hidden">
              <Image src="/gallery/emergency-service-truck.png" alt="Emergency fire protection service truck" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Protect Your Texas Property?
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Contact E&R Ibukun LLC today for a site evaluation. We serve every Texas zip code and handle all state documentation for you.
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
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
