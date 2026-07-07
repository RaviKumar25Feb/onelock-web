import React from "react";
import primelocker from "../assets/primelocker.png"

export default function FeatureIntegration() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text blocks */}
        <div className="flex flex-col gap-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-blue-500 text-xl font-bold mb-3">
              Feature Integration
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Semper lacus cursus porta, feugiat primis in luctus ultrice tellus
              potenti neque dolor in primis congue
            </p>
          </div>

          <div>
            <h3 className="text-slate-700 text-xl font-bold mb-3">
              Comments and Mentions
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Lacus cursus porta, feugiat primis congue magna purus at pretium
              ligula rutrum luctus and ultrice tellus
            </p>
          </div>

          <div>
            <h3 className="text-slate-700 text-xl font-bold mb-3">
              Elegant User Interface
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Luctus congue magna at pretium purus pretium ligula rutrum neque
              incidunt tempor laoreet ipsum rhoncus, tempor posuere ligula
              varius donec purus feugiat
            </p>
          </div>
        </div>

        {/* Right: empty placeholder — drop your own image here */}
        <div className="relative w-full min-h-[420px] flex items-center justify-center">
          
            {/* Replace this whole block with your image, e.g.: */}
            <img src={primelocker} alt="Feature preview" className="w-full max-w-lg object-contain" />
         
        </div>
      </div>
    </section>
  );
}
