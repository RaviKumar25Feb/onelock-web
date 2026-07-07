import React from "react";
import { Apple, PlayCircle } from "lucide-react";
import heroImg from "../assets/heroImg.png";

export default function Hero() {
  const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30,70,95,0.75), rgba(30,70,95,0.85)), url('https://picsum.photos/seed/office-blur/1600/1000')",
      }}
    >
      {/* Inline transparent header — only visible thing at top by default */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-24 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[2px]">
            <span className="block w-[3px] h-6 bg-white rounded-full" />
            <span className="block w-[3px] h-8 bg-white rounded-full -skew-x-12" />
          </div>
          <span className="text-xl font-bold text-white">ONELOCK</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex flex-col items-center text-white/90 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="hidden md:block border-2 border-white/70 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-white hover:text-slate-800 transition-colors">
          Download App
        </button>
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: copy */}
        <div>
          <h1 className="text-5xl md:text-5xl font-semibold text-white leading-[1.1] mb-6">
            Best editor for
            <br />
            your media files
          </h1>
          <p className="text-white/80 text-lg max-w-md mb-8 leading-relaxed">
            Feugiat primis ligula risus auctor egestas augue mauri viverra
            tortor in iaculis placerat magna feugiat mauris ipsum in viverra
            tortor gravida purus pretium
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl">
              <Apple size={28} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] text-white/70">
                  Download on the
                </span>
                <span className="block text-base font-semibold">App Store</span>
              </span>
            </button>

            {/* Google Play button */}
            <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl">
              <svg width="24" height="24" viewBox="0 0 512 512">
                <path
                  fill="#00d2ff"
                  d="M99.6 21.4C93.3 27.5 90 36.9 90 49.1v413.8c0 12.2 3.3 21.6 9.6 27.7l2.4 2.1 231.9-231.9v-5.4L102 23.3l-2.4-1.9z"
                />
                <path
                  fill="#00e676"
                  d="M405.7 331.5l-77.3-77.3v-5.4l77.4-77.4 1.7 1L497 226.6c26.5 15.1 26.5 39.6 0 54.7l-91.3 50.2z"
                  transform="translate(-73)"
                />
                <path
                  fill="#ff3d00"
                  d="M334.1 254.2 100 20.1c9-9.5 24-10.6 40.7-1.1L410.9 168l-76.8 86.2z"
                  transform="translate(0 0)"
                />
                <path
                  fill="#ffea00"
                  d="M334.1 258.8 140.7 452.9c-16.1 9.1-30.9 8.4-40.1-1l193.5-193.1z"
                />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px] text-white/70">
                  GET IT ON
                </span>
                <span className="block text-base font-semibold">
                  Google Play
                </span>
              </span>
            </button>
          </div>

          <p className="text-white/50 text-sm">
            Current Release: ONELOCK 3.0.14
          </p>
        </div>

        {/* Right: phone mockups */}
        <div className="relative hidden lg:block">
          {/* Right: hero image */}
          <div className="relative hidden lg:flex lg:left-20 lg:top-15 justify-center items-center">
            <img
              src={heroImg}
              alt="App preview"
              className="w-full scale-190 max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
