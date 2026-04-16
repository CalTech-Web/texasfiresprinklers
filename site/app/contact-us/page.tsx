import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact a Texas Fire Sprinkler Contractor",
  description:
    "Contact E&R Ibukun LLC for fire sprinkler installation, inspection, and emergency service across Texas. Call (832) 961-8372 or email us. Houston-based, Texas statewide coverage.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#800A03" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="uppercase tracking-widest text-sm mb-3 text-red-200">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact E&R Ibukun LLC</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Call, text, or email. We run 24/7 emergency dispatch and cover every Texas zip code.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ backgroundColor: "#EFF6F9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: "#800A03" }}
                  >
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone / Text</p>
                    <a href="tel:8329618372" className="text-2xl font-bold hover:underline" style={{ color: "#C3071F" }}>
                      (832) 961-8372
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Emergency line available 24 hours a day, 7 days a week</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: "#800A03" }}
                  >
                    ✉
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <a href="mailto:edwin_ibukun@outlook.com" className="font-medium hover:underline" style={{ color: "#C3071F" }}>
                      edwin_ibukun@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: "#800A03" }}
                  >
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <address className="not-italic text-gray-700">
                      7961 Fields Street<br />
                      Houston, TX 77028
                    </address>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: "#800A03" }}
                  >
                    🕐
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Business Hours</p>
                    <p className="text-gray-700">Monday - Friday: 7:00am - 5:00pm</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                    <p className="text-sm text-gray-500 mt-1">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-lg" style={{ backgroundColor: "#800A03" }}>
                <h3 className="text-white font-bold text-lg mb-2">24/7 Emergency Line</h3>
                <p className="text-red-200 text-sm mb-4">
                  Burst pipe, system failure, alarm fault, fire watch. The line runs around the clock.
                </p>
                <a
                  href="tel:8329618372"
                  style={{ backgroundColor: "#C3071F" }}
                  className="inline-block px-6 py-3 rounded text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Emergency: (832) 961-8372
                </a>
              </div>
            </div>

            {/* Book online / form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Book a Service Online</h2>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Call or text to get on the schedule. Inspection, installation, or a maintenance visit. We work around your hours.
                </p>
                <a
                  href="tel:8329618372"
                  style={{ backgroundColor: "#C3071F" }}
                  className="block w-full text-center px-6 py-4 rounded text-white font-bold text-lg hover:opacity-90 transition-opacity mb-4"
                >
                  Call or Text to Book: (832) 961-8372
                </a>
                <a
                  href="mailto:edwin_ibukun@outlook.com"
                  style={{ borderColor: "#800A03", color: "#800A03" }}
                  className="block w-full text-center px-6 py-4 rounded font-bold text-lg border-2 hover:opacity-80 transition-opacity"
                >
                  Email Us
                </a>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Service Area</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Houston is our base. Mobile teams go to every Texas zip code. Gulf Coast, North Texas, rural counties. We come to the property, not the other way around.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-lg bg-white shadow-sm">
                <h3 className="font-bold mb-3" style={{ color: "#800A03" }}>Texas License Information</h3>
                <p className="text-gray-700 text-sm">
                  Fire Sprinkler Certificate of Registration No. SCR-G-3451926, issued by the Texas Department of Insurance State Fire Marshal&apos;s Office. Fully licensed and insured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What types of fire suppression systems do you install and service?",
                a: "Wet and dry sprinkler systems, kitchen hood systems, FM-200 clean agent for server rooms and electronics, CO2 for industrial machinery, and dry chemical for paint booths and flammable storage. If it suppresses fire, we install and service it.",
              },
              {
                q: "How does your process work?",
                a: "Four steps. Site evaluation first, then a custom protection plan, then installation or maintenance, then full digital documentation and state-required tagging. You get the records, we handle the filing.",
              },
              {
                q: "What fire extinguisher services do you provide?",
                a: "Annual inspections with professional tagging and certification, 6-year internal exams, hydrostatic pressure testing, and on-site recharging. We also run PASS training for your staff. Pull, Aim, Squeeze, Sweep.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: "#800A03" }}>{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
