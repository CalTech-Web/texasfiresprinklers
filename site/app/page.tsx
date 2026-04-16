import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Fire Sprinkler Installation & Service in Texas | E&R Ibukun LLC",
  },
  description:
    "E&R Ibukun LLC delivers expert fire sprinkler installation, inspection, and 24/7 emergency services across all of Texas. Licensed contractor SCR-G-3451926. Serving Houston and every Texas zip code.",
  keywords: [
    "fire sprinkler installation Texas",
    "fire sprinkler contractor Texas",
    "fire sprinkler inspection Texas",
    "fire sprinkler Houston",
    "NFPA 25 Texas",
    "fire protection services Texas",
    "fire extinguisher service Texas",
    "fire suppression systems Texas",
    "24/7 emergency fire service Texas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fire Sprinkler Installation & Service in Texas | E&R Ibukun LLC",
    description:
      "E&R Ibukun LLC delivers expert fire sprinkler installation, inspection, and 24/7 emergency services across all of Texas. Licensed contractor SCR-G-3451926.",
    url: "https://texasfiresprinklers.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas of Texas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of Texas. Houston is our base, but we run mobile teams to every zip code in the state. Gulf Coast, North Texas, rural counties. If it is in Texas, we can get there.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Registration SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal's Office. Every technician who shows up on a job is licensed and insured.",
      },
    },
    {
      "@type": "Question",
      name: "What fire sprinkler inspection standards do you follow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFPA 25 on every job. That is the national standard for water-based fire protection inspection and testing. We also track Texas state codes and local fire marshal requirements, and we handle all the documentation that comes with it.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fire suppression systems do you install and service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wet and dry sprinkler systems, kitchen hood systems, FM-200 clean agent for electronics and server rooms, CO2 for industrial machinery, and dry chemical for paint booths and flammable storage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency service outside of business hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The line is (832) 961-8372 and it runs 24 hours a day, 7 days a week. Burst pipe repair, alarm faults, post-fire system restoration, and on-site fire watch while a system is offline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle the paperwork for fire marshal compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. State documentation and local fire marshal reports are part of every job. You should not have to track down paperwork after the technician leaves.",
      },
    },
    {
      "@type": "Question",
      name: "How does your process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four steps: site evaluation, custom protection plan, installation or maintenance, and final certification with full digital documentation. We handle the state-required tagging and fire marshal paperwork at the end.",
      },
    },
    {
      "@type": "Question",
      name: "What fire extinguisher services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual inspections with professional tagging and certification, 6-year internal exams, hydrostatic pressure testing, and on-site recharging. We also offer PASS training for your staff. Pull, Aim, Squeeze, Sweep.",
      },
    },
  ],
};

const services = [
  {
    id: "FireSprinklerSystems",
    title: "Fire Sprinkler Systems",
    desc: "Custom design, installation, and NFPA 25 inspections. State documentation and fire marshal reports filed on every job.",
    img: "/products/fire-sprinkler-spraying.png",
  },
  {
    id: "FireExtinguisherServices",
    title: "Fire Extinguisher Services",
    desc: "Annual inspections, 6-year maintenance, hydrostatic testing, on-site recharging, and PASS training for your staff.",
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
    desc: "Burst pipe at 2 a.m. System down after a fire. We run 24/7 dispatch across Texas and take the call.",
    img: "/gallery/emergency-service-worker-night.png",
  },
];

const differentiators = [
  {
    svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    title: "All of Texas",
    desc: "Statewide dispatch covering every Texas zip code, not limited to a single metro area.",
  },
  {
    svgPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
    title: "Licensed & Insured",
    desc: "Certified technicians holding Texas Fire Sprinkler Registration SCR-G-3451926.",
  },
  {
    svgPath: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    title: "NFPA 25 Compliant",
    desc: "Every job meets NFPA and Texas state code. We handle all state documentation and fire marshal reports.",
  },
  {
    svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "24/7 Emergency",
    desc: "Fire system failures do not wait for business hours. We dispatch around the clock.",
  },
  {
    svgPath: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    title: "Clean Work Guarantee",
    desc: "Tools go back in the truck when the job is done. No debris, no cleanup left for you.",
  },
  {
    svgPath: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    title: "Mobile Service Teams",
    desc: "We come to the property. You do not have to shut down operations or move anything out to get service.",
  },
];

const processSteps = [
  { num: "01", title: "Site Evaluation", desc: "Every zone, every head, every pipe run. We find what does not meet Texas code before the fire marshal does." },
  { num: "02", title: "System Design", desc: "Your occupancy type and hazard class determine the system. We design to NFPA 25 and Texas state code from the start." },
  { num: "03", title: "Precision Implementation", desc: "Technicians arrive with what the job needs and work around your schedule where possible. When we leave, the system is live and the space is clean." },
  { num: "04", title: "Final Certification", desc: "You get digital records, state-required tagging, and any fire marshal reports the job requires. File it and forget it." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/gallery/er-ibukun-hero.jpeg"
          alt="E&R Ibukun LLC fire protection services Texas"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
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
            We cover every zip code in Texas. Sprinkler installation, inspections, suppression systems, and emergency dispatch from a fully licensed contractor based in Houston.
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
              Whether you need a new sprinkler system designed or a burst pipe fixed at 3 a.m., we handle it. Every property type, every Texas county.
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
                  <Image src={s.img} alt={s.title} fill quality={60} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
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

      {/* Credentials strip */}
      <section style={{ backgroundColor: "#111827" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: "#C3071F" }}>24/7</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-300">Emergency Dispatch</span>
              <span className="text-xs text-gray-500 mt-1">Any Hour. Any Day.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: "#C3071F" }}>254</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-300">Texas Counties</span>
              <span className="text-xs text-gray-500 mt-1">Every Zip Code Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: "#C3071F" }}>NFPA</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-300">25 Compliant</span>
              <span className="text-xs text-gray-500 mt-1">Every Job, Every Time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold mb-2 leading-tight" style={{ color: "#C3071F" }}>SCR&#8209;G&#8209;3451926</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-300">State Licensed</span>
              <span className="text-xs text-gray-500 mt-1">Texas Dept. of Insurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Texas Chooses E&R Ibukun LLC</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State license SCR-G-3451926. NFPA 25 compliance on every job. 254 counties covered. That is what you are hiring when you call.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EFF6F9" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: "#800A03" }}>
                    <path d={d.svgPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
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
              Site visit, custom plan, installation, and full state documentation. No surprises, no paperwork left for you to chase.
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
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Work Across Texas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Restaurants, offices, server rooms, warehouses. Each one has a different system. Each one has to work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/gallery/fire-sprinkler-ceiling-office.png", alt: "Fire sprinkler ceiling installation", caption: "Sprinkler Installation" },
              { src: "/gallery/fire-extinguishers-compartment.jpeg", alt: "Fire extinguisher compartment", caption: "Extinguisher Service" },
              { src: "/gallery/commercial-kitchen-suppression.png", alt: "Commercial kitchen fire suppression", caption: "Kitchen Suppression" },
              { src: "/gallery/emergency-service-truck.png", alt: "Emergency fire protection service truck", caption: "24/7 Emergency Response" },
            ].map((photo) => (
              <div key={photo.src} className="relative h-52 rounded overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end" style={{ background: "linear-gradient(to top, rgba(128,10,3,0.85) 0%, transparent 60%)" }}>
                  <span className="text-white text-sm font-semibold px-3 pb-3">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion />

      {/* CTA Banner */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Protect Your Texas Property?
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Call or text to schedule a site visit. We come to you, handle the paperwork, and leave your property compliant.
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
