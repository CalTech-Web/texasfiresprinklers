import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fire Protection Process in Texas",
  description:
    "See how E&R Ibukun LLC's four-step fire protection process delivers NFPA 25 compliant installations and inspections across Texas, from site evaluation to final certification.",
};

const steps = [
  {
    num: "01",
    title: "Site Evaluation",
    desc: "We walk the property before anything else. Every zone, every head, every pipe run. If something does not meet Texas state code or NFPA 25, we flag it in the report before a fire marshal does.",
    img: "/gallery/fire-sprinkler-ceiling-office.png",
    imgAlt: "Fire sprinkler system ceiling evaluation",
  },
  {
    num: "02",
    title: "System Design",
    desc: "A restaurant hood system and a server room suppression system are completely different designs. We spec the right system for your occupancy type, square footage, and hazard class. NFPA 25 and Texas state code are built into every layout.",
    img: "/gallery/commercial-kitchen-suppression.png",
    imgAlt: "Fire suppression system design for commercial kitchen",
  },
  {
    num: "03",
    title: "Precision Implementation",
    desc: "We show up with everything the job requires. Technicians work around your schedule where possible. When we leave, the space is clean and the system is live.",
    img: "/gallery/emergency-service-truck.png",
    imgAlt: "E&R Ibukun LLC technicians executing fire protection installation",
  },
  {
    num: "04",
    title: "Final Certification",
    desc: "You get the full paperwork package: digital records, state-required tagging, and any fire marshal reports the job requires. File it, forget it. Your property is covered.",
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
            Evaluation, design, installation, certification. Four steps, full documentation, and zero forms for you to chase down.
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
            Texas state law is specific. Licensed contractors have to document every job and keep records the fire marshal can pull. One missing form can mean a failed inspection and real liability. Our process handles the documentation so that is never your problem.
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
                a: "All of it. Houston is our base, but we run mobile teams to every Texas zip code. Gulf Coast, North Texas, rural counties. Wherever the property is.",
              },
              {
                q: "Are you licensed and insured in Texas?",
                a: "Yes. Registration number SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal's Office. Every technician on a job is licensed and insured.",
              },
              {
                q: "What fire sprinkler inspection standards do you follow?",
                a: "NFPA 25 sets the baseline for water-based fire protection inspection and testing. We follow it on every job. We also track Texas state codes and local fire marshal requirements and handle all required documentation.",
              },
              {
                q: "Do you offer emergency service outside of business hours?",
                a: "Yes. (832) 961-8372 is a 24/7 line, any day. Burst pipes, alarm faults, post-fire system restoration, and on-site fire watch while a system is offline. If it is urgent, call.",
              },
              {
                q: "Do you handle the paperwork for fire marshal compliance?",
                a: "Yes. State documentation and local fire marshal reports are part of every job. You should not have to track down paperwork after the technician leaves.",
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
            Call or text (832) 961-8372 to get scheduled. We walk the property, build the plan, do the work, and file the paperwork.
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
