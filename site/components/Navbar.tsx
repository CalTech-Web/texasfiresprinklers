"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "Fire Sprinkler Installation", href: "/fire-sprinkler-installation" },
  { label: "Fire Sprinkler Inspection", href: "/fire-sprinkler-inspection" },
  { label: "Fire Sprinkler Repair", href: "/fire-sprinkler-repair" },
  { label: "Fire Suppression Systems", href: "/fire-suppression-systems" },
  { label: "Fire Extinguisher Services", href: "/fire-extinguisher-services" },
  { label: "Emergency Service", href: "/emergency-fire-sprinkler-service" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#800A03" }} className="text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logos/logo.jpeg"
              alt="E&R Ibukun LLC Logo"
              width={44}
              height={44}
              className="rounded"
            />
            <span className="font-bold text-lg leading-tight">
              <span className="sm:hidden">E&R Ibukun</span>
              <span className="hidden sm:inline">E&R Ibukun LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-red-200 transition-colors">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="hover:text-red-200 transition-colors flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute top-full left-0 mt-1 w-64 bg-white text-black rounded shadow-lg py-2 transition-all ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about-us" className="hover:text-red-200 transition-colors">
              About Us
            </Link>
            <Link href="/our-process" className="hover:text-red-200 transition-colors">
              Our Process
            </Link>
            <Link href="/contact-us" className="hover:text-red-200 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8329618372"
              style={{ backgroundColor: "#C3071F" }}
              className="px-4 py-2 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Call (832) 961-8372
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-900 border-t border-red-700 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-red-200">Home</Link>
            <div>
              <p className="font-semibold mb-1">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="block pl-3 py-1 hover:text-red-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-red-200">About Us</Link>
            <Link href="/our-process" onClick={() => setMenuOpen(false)} className="hover:text-red-200">Our Process</Link>
            <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-red-200">Contact Us</Link>
            <a href="tel:8329618372" style={{ backgroundColor: "#C3071F" }} className="mt-2 px-4 py-2 rounded text-center font-semibold">
              Call (832) 961-8372
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
