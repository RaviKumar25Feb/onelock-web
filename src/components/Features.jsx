import React from "react";
import {
  Fingerprint,
  Wrench,
  Share2,
  Megaphone,
  Key,
  Globe,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Fingerprint,
      title: "Quick Access",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
    {
      icon: Wrench,
      title: "Powerful Settings",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
    {
      icon: Share2,
      title: "Multiple Widgets",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
    {
      icon: Megaphone,
      title: "Smart Notifications",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
    {
      icon: Key,
      title: "Concrete Security",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      desc: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit",
    },
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-slate-700 mb-5">
            What Makes ONELOCK Different
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero at tempus, blandit posuere ligula varius congue cursus
            porta feugiat
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5">
              <div className="shrink-0">
                <Icon size={46} strokeWidth={1.25} className="text-slate-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
