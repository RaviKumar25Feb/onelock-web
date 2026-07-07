import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;

    // Still within hero area -> keep hidden
    if (currentY < 400) {
      setVisible(false);
    } else {
      // Past hero -> sticky visible, no matter which direction you scroll
      setVisible(true);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] shadow-md transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[2px]">
            <span className="block w-[3px] h-6 bg-slate-800 rounded-full" />
            <span className="block w-[3px] h-8 bg-slate-800 rounded-full -skew-x-12" />
          </div>
          <span className="text-xl font-bold text-slate-800">ONELOCK</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex flex-col items-center text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="border-2 border-slate-800 text-slate-800 font-semibold px-6 py-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
            Download App
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 font-medium"
            >
              {link.label}
            </a>
          ))}
          <button className="border-2 border-slate-800 text-slate-800 font-semibold px-6 py-2.5 rounded-xl w-full">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
}