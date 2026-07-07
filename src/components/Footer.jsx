import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const productLinks = [
    "How It Works?",
    "Integrations",
    "Product Updates",
    "Our Pricing",
    "FAQs",
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Press & Media",
    "Our Blog",
    "Advertising",
  ];

  return (
    <footer id="contact" className="bg-white pt-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16">
          {/* Logo + contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-end gap-[2px]">
                <span className="block w-[3px] h-6 bg-slate-800 rounded-full" />
                <span className="block w-[3px] h-8 bg-slate-800 rounded-full -skew-x-12" />
              </div>
              <span className="text-xl font-bold text-slate-800">
                ONELOCK<sup className="text-xs">®</sup>
              </span>
            </div>

            <p className="text-slate-500 text-sm mb-1">
              E:{" "}
              <a
                href="mailto:hello@yourdomain.com"
                className="text-slate-500 underline hover:text-slate-700"
              >
                hello@yourdomain.com
              </a>
            </p>
            <p className="text-slate-500 text-sm mb-5">P: +12 9 8765 4321</p>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.44 2.89h-2.28v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.9c-.77.35-1.6.58-2.46.68a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.15 12.15 0 0 1 2.9 4.72a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 18.57a12.1 12.1 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18l-.01-.55A8.7 8.7 0 0 0 22 5.9z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Google Plus"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 text-xs font-bold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
              >
                G+
              </a>
              <a
                href="#"
                aria-label="Tumblr"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 text-sm font-bold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
              >
                t
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-slate-800 font-bold text-lg mb-5">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-800 font-bold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-slate-800 font-bold text-lg mb-5">
              Subscribe Us:
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Stay up to date with our latest news, updates and our new products
            </p>
            <div className="flex border border-slate-300 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-sm text-slate-700 outline-none min-w-0"
              />
              <button
                aria-label="Subscribe"
                className="px-4 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-8">
          <p className="text-slate-400 text-sm">
            © 2026 <span className="font-bold text-slate-600">ONELOCK</span>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
