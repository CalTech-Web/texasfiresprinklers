"use client";

import { useState } from "react";

const faqs = [
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
    q: "What types of fire suppression systems do you install and service?",
    a: "We install and service wet and dry fire sprinkler systems, kitchen hood suppression systems, FM-200 clean agent systems for electronics and server rooms, CO2 systems for industrial machinery, and dry chemical systems for paint booths and flammable liquid storage.",
  },
  {
    q: "Do you offer emergency service outside of business hours?",
    a: "Yes. We offer 24-hour emergency dispatch across Texas, 7 days a week. Save our emergency hotline: (832) 961-8372. We handle burst pipe repair, alarm silencing, system restoration after a fire, and on-site fire watch services while systems are down.",
  },
  {
    q: "Do you handle the paperwork for fire marshal compliance?",
    a: "Yes. We handle all required state documentation and local fire marshal reports to keep your business in good standing so you do not have to manage that administrative burden yourself.",
  },
  {
    q: "How does your process work?",
    a: "Our four-step process starts with a site evaluation to assess your current fire safety status and identify compliance gaps. We then design a customized protection plan, execute installation or maintenance with minimal disruption, and close out with full digital documentation and state-required tagging proving your property is 100% compliant.",
  },
  {
    q: "What fire extinguisher services do you provide?",
    a: "We perform annual inspections with professional tagging and certification, 6-year internal examinations, hydrostatic pressure testing, and on-site recharging. We also provide PASS training (Pull, Aim, Squeeze, Sweep) for your employees.",
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
