import React from "react";
import { Apple, PlayCircle } from "lucide-react";
import mobile from "../assets/mobile.png";

export default function WorkSmarter() {
  return (
    <section
      className="relative py-25 lg:top-10"
      style={{
        background: "linear-gradient(120deg, #6d5bf5 0%, #8b5cf6 100%)",
      }}
    >
      {/* Background decorative image placeholder — drop your own bg pattern/graphic here */}
      <div className="absolute inset-0 overflow-hidden">
        {/*
          Replace this whole block with your background image, e.g.:
          <img src={yourBgImage} alt="" className="w-full h-full object-cover opacity-40" />
        */}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <h2 className="text-4xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Work smarter with powerful tools
          </h2>
          <p className="text-white/80 leading-relaxed mb-8 max-w-md">
            Feugiat eros, ac ligula massa in faucibus orci luctus et ultrices
            posuere cubilia curae integer congue leo metus, eu mollis lorem
            primis in orci integer metus mollis
          </p>

          <div className="flex flex-wrap gap-4 mb-5">
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

          <p className="text-white/70 text-sm">
            * Available on iPhone, iPad and all Android devices from 5.5
          </p>
        </div>

        {/* Right: phone image — pokes out above the section, like the reference */}
        <div className="relative hidden lg:block">
          <img
            src={mobile}
            alt="App preview"
            className="absolute top-[-330px] right-0 w-full max-w-2xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}