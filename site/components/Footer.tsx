import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#800A03" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3">E&R Ibukun LLC</h3>
            <p className="text-red-200 text-sm leading-relaxed">
              Premier Fire Protection Services Across the Lone Star State.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs tracking-wider text-red-200">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#FireSprinklerSystems" className="hover:text-red-200 transition-colors">Fire Sprinkler Systems</Link></li>
              <li><Link href="/services#FireExtinguisherServices" className="hover:text-red-200 transition-colors">Fire Extinguisher Services</Link></li>
              <li><Link href="/services#FireSuppressionSystems" className="hover:text-red-200 transition-colors">Fire Suppression Systems</Link></li>
              <li><Link href="/services#EmergencyService" className="hover:text-red-200 transition-colors">Emergency Service</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs tracking-wider text-red-200">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-200 transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-red-200 transition-colors">About Us</Link></li>
              <li><Link href="/our-process" className="hover:text-red-200 transition-colors">Our Process</Link></li>
              <li><Link href="/contact-us" className="hover:text-red-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs tracking-wider text-red-200">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>7961 Fields Street<br />Houston, TX 77028</p>
              <p>
                <a href="tel:8329618372" className="hover:text-red-200 transition-colors">(832) 961-8372</a>
              </p>
              <p>
                <a href="mailto:edwin_ibukun@outlook.com" className="hover:text-red-200 transition-colors">
                  edwin_ibukun@outlook.com
                </a>
              </p>
              <p className="text-red-200">Mon to Fri: 7:00am to 5:00pm<br />Sat to Sun: Closed</p>
            </address>
          </div>
        </div>

        {/* License notice */}
        <div className="mt-10 pt-6 border-t border-red-700">
          <p className="text-sm text-red-200 text-center leading-relaxed">
            Texas State Fire Sprinkler Contractor Registration No. SCR-G-3451926, Texas Department of Insurance, State Fire Marshal&apos;s Office
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-red-300">
          <p>&copy; 2026 E&R Ibukun LLC. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>
            <a href="https://caltechweb.com" className="hover:text-white transition-colors">Powered by CalTech Web</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
