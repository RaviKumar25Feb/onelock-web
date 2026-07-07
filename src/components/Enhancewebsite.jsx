import React from "react";
import enhance from '../assets/enhance.png'
export default function EnhanceWebsite() {
  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <span className="text-blue-500 font-semibold tracking-wide text-sm">
            HANDLING WITH EASE
          </span>
          <h2 className="text-4xl md:text-4xl font-semibold text-slate-700 mt-3 mb-8 leading-tight">
            Enhance your website design with ONELOCK
          </h2>

          <p className="text-slate-600 leading-relaxed mb-8">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at odio velna vitae auctor integer congue magna at pretium
            purus pretium ligula rutrum luctus risus ultrice luctus in ligula
            blandit congue magna undo impedit
          </p>

          <blockquote className="border-l-4 border-blue-400 pl-6 italic text-slate-500 mb-8 leading-relaxed">
            "Lorem ipsum dolor sit amet, lectus laoreet impedit gestas. Aenean
            magna ligula eget dolor suscipit egestas viverra dolor iaculis
            luctus magna suscipit egestas "
          </blockquote>

          <div className="flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/james/56/56"
              alt="James Paterson"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-slate-800">James Paterson</p>
              <p className="text-slate-400 text-sm">CEO of ONELOCK</p>
            </div>
          </div>
        </div>

        {/* Right: image placeholder — drop your own image here */}
        <div className="relative min-h-[420px] lg:left-60 flex items-center justify-center">
          
            {/* Replace this whole block with your image, e.g.: */}
            <img src={enhance} alt="Dashboard preview" className="w-full max-w-lg scale-190 object-contain" />
         
        </div>
      </div>
    </section>
  );
}
