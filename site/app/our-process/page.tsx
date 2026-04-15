import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Fire Protection Process | Texas NFPA 25 Compliance",
  description:
    "See how E&R Ibukun LLC's four-step fire protection process delivers NFPA 25 compliant installations and inspections across Texas, from site evaluation to final certification.",
};

const steps = [
  {
    num: "01",
    title: "Site Evaluation",
    desc: "We begin with a comprehensive audit of your current fire safety status, identifying any gaps in Texas code compliance. Our technicians assess every aspect of your property to build a complete picture of what is needed.",
    img: "/gallery/fire-sprinkler-ceiling-office.png",
    imgAlt: "Fire sprinkler system ceiling evaluation",
  },
  {
    num: "02",
    title: "System Design",
    desc: "Our team creates a customized protection plan, selecting the right sprinklers, suppressants, or extinguishers for your specific layout and occupancy type. Every design meets NFPA 25 standards and Texas state fire codes.",
    img: "/gallery/commercial-kitchen-suppression.png",
    imgAlt: "Fire suppression system design for commercial kitchen",
  },
  {
    num: "03",
    title: "Precision Implementation",
    desc: "Certified technicians execute the installation or maintenance with minimal disruption to your daily operations. We bring all required equipment to your location and leave no mess behind.",
    img: "/gallery/emergency-service-truck.png",
    imgAlt: "E&R Ibukun LLC technicians executing fire protection installation",
  },
  {
    num: "04",
    title: "Final Certification",
    desc: "We provide full digital documentation and state-required tagging to prove your property is 100% compliant. We handle all required state documentation and local fire marshal reports, so you have nothing to manage on your end.",
    img: "/gallery/process-fire-hose.jpeg",
    imgAlt: "Fire protection certification and compliance documentation",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-3 text-red-200">How It Works</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Fire Protection Process</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            A proven four-step approach that gets your fire protection system installed, inspected, and certified to Texas state code with zero hassle on your end.
          </p>
        </div>
      </section>

      {/* Overview strip */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
                  style={{ backgroundColor: "#800A03" }}
                >
                  {s.num}
                </div>
                <p className="font-semibold text-sm">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step details */}
      {steps.map((step, idx) => (
        <section
          key={step.num}
          className="py-20"
          style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#EFF6F9" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <div
                  className="inline-flex w-14 h-14 rounded-full items-center justify-center text-white font-bold text-xl mb-6"
                  style={{ backgroundColor: "#800A03" }}
                >
                  {step.num}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{step.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{step.desc}</p>
              </div>
              <div className={`relative h-72 lg:h-[380px] rounded-lg overflow-hidden shadow-lg ${idx % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                <Image
                  src={step.img}
                  alt={step.imgAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why it matters */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Our Process Matters</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-8">
            Texas state law requires licensed fire sprinkler contractors to maintain compliance documentation for every job. Our process ensures your property meets every requirement from the Texas Department of Insurance State Fire Marshal&apos;s Office, so you are protected from liability and always ready for inspection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "NFPA 25", desc: "Every inspection follows the national standard for water-based fire protection systems." },
              { title: "Texas State Code", desc: "We keep up with Texas-specific requirements and handle all local fire marshal reports." },
              { title: "Digital Records", desc: "Full digital documentation provided after every job for your permanent records." },
            ].map((item) => (
              <div key={item.title} className="bg-red-900 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-red-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What areas of Texas do you serve?",
                a: "E&R Ibukun LLC serves all of Texas, including Houston and every surrounding zip code. Our mobile service teams travel to any location statewide, from the Gulf Coast to North Texas, for both residential and commercial properties.",
              },
              {
                q: "Are you licensed and insured in Texas?",
                a: "Yes. E&R Ibukun LLC holds Texas Fire Sprinkler Certificate of Registration number SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal's Office. All technicians are fully licensed and insured.",
              },
              {
                q: "What fire sprinkler inspection standards do you follow?",
                a: "We follow NFPA 25, the standard for inspection, testing, and maintenance of water-based fire protection systems. We also ensure compliance with Texas state fire codes and local fire marshal requirements, and we handle all required documentation.",
              },
              {
                q: "Do you offer emergency service outside of business hours?",
                a: "Yes. We offer 24-hour emergency dispatch across Texas, 7 days a week. Save our emergency hotline: (832) 961-8372. We handle burst pipe repair, alarm silencing, system restoration after a fire, and on-site fire watch services while systems are down.",
              },
              {
                q: "Do you handle the paperwork for fire marshal compliance?",
                a: "Yes. We handle all required state documentation and local fire marshal reports to keep your business in good standing so you do not have to manage that administrative burden yourself.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start with a Free Site Evaluation</h2>
          <p className="text-gray-600 mb-8">
            Contact E&R Ibukun LLC to begin Step 1 of our process. We serve all of Texas and handle every document from start to finish.
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
