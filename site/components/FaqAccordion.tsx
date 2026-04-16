"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas of Texas do you serve?",
    a: "All of Texas. Houston is our base, but we run mobile teams to every zip code in the state. Gulf Coast, North Texas, rural counties. If it is in Texas, we can get there.",
  },
  {
    q: "Are you licensed and insured in Texas?",
    a: "Yes. Registration SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal's Office. Every technician who shows up on a job is licensed and insured.",
  },
  {
    q: "What fire sprinkler inspection standards do you follow?",
    a: "NFPA 25 on every job. That is the national standard for water-based fire protection inspection and testing. We also track Texas state codes and local fire marshal requirements, and we handle all the documentation that comes with it.",
  },
  {
    q: "What types of fire suppression systems do you install and service?",
    a: "Wet and dry sprinkler systems, kitchen hood systems, FM-200 clean agent for electronics and server rooms, CO2 for industrial machinery, and dry chemical for paint booths and flammable storage.",
  },
  {
    q: "Do you offer emergency service outside of business hours?",
    a: "Yes. The line is (832) 961-8372 and it runs 24 hours a day, 7 days a week. Burst pipe repair, alarm faults, post-fire system restoration, and on-site fire watch while a system is offline.",
  },
  {
    q: "Do you handle the paperwork for fire marshal compliance?",
    a: "Yes. State documentation and local fire marshal reports are part of every job. You should not have to track down paperwork after the technician leaves.",
  },
  {
    q: "How does your process work?",
    a: "Four steps: site evaluation, custom protection plan, installation or maintenance, and final certification with full digital documentation. We handle the state-required tagging and fire marshal paperwork at the end.",
  },
  {
    q: "What fire extinguisher services do you provide?",
    a: "Annual inspections with professional tagging and certification, 6-year internal exams, hydrostatic pressure testing, and on-site recharging. We also offer PASS training for your staff. Pull, Aim, Squeeze, Sweep.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Common questions about fire protection services, licensing, and how we work across Texas.
          </p>
        </div>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-5 gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base sm:text-lg text-black group-hover:text-[#800A03] transition-colors"
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors"
                    style={{ backgroundColor: isOpen ? "#800A03" : "#C3071F" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
