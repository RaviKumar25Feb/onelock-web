import React from "react";
import { Circle } from "lucide-react";
import showcaseimg from '../assets/showcaseimg.png'
export default function DesignShowcase() {
  const bullets = [
    "Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien",
    "Sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus pretium ligula rutrum luctus ultrice aliquam a augue suscipit sapien",
    "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus ligula rutrum tempor",
  ];

  const techs = [
    { label: "HTML5", bg: "bg-orange-500" },
    { label: "CSS3", bg: "bg-blue-500" },
    { label: "JS", bg: "bg-yellow-400", text: "text-slate-900" },
    {
      label: "PHP",
      bg: "bg-white border-2 border-indigo-400",
      text: "text-indigo-500",
    },
    { label: "MC", bg: "bg-yellow-500" },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: image placeholder — drop your own image here */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          
            {/* Replace this whole block with your image, e.g.: */}
            <img src={showcaseimg} alt="Design preview" className="w-full max-w-md object-contain" />
         
        </div>

        {/* Right: copy */}
        <div>
          <span className="text-blue-500 font-semibold tracking-wide text-xs">
            BEAUTY OF SIMPLICITY
          </span>
          <h2 className="text-4xl md:text-4xl font-semibold text-slate-700 mt-3 mb-8 leading-tight">
            We are making design better for everyone
          </h2>

          <ul className="space-y-5 mb-10">
            {bullets.map((text) => (
              <li key={text} className="flex gap-4">
                <Circle
                  size={18}
                  strokeWidth={2}
                  className="text-slate-400 mt-1 shrink-0"
                />
                <span className="text-slate-600 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <p className="font-semibold text-slate-800 mb-4">
            Technologies We Use:
          </p>
          <div className="flex items-center gap-4">
            {techs.map((t) => (
              <div
                key={t.label}
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-[10px] font-bold ${t.bg} ${
                  t.text || "text-white"
                }`}
              >
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
