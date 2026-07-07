import React from "react";
import { Calendar, Settings, Workflow } from "lucide-react";
import inbox from "../assets/inbox.png";
export default function WorkflowFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Scheduling and Planning",
      desc: "Velna iaculis odio auctor integer congue impedit magna at dolor vitae gravida donec mauris lectus luctus ultrice tellus viverra potenti neque",
    },
    {
      icon: Settings,
      title: "Real Time Customization",
      desc: "Velna iaculis odio auctor integer congue impedit magna at dolor vitae gravida donec mauris lectus luctus ultrice tellus viverra potenti neque",
    },
    {
      icon: Workflow,
      title: "Transparent Workflow",
      desc: "Velna iaculis odio auctor integer congue impedit magna at dolor vitae gravida donec mauris lectus luctus ultrice tellus viverra potenti neque",
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: image placeholder — drop your own image here */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          {/* Replace this whole block with your image, e.g.: */}
          <img
            src={inbox}
            alt="Inbox preview"
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* Right: feature list */}
        <div className="flex flex-col gap-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-10">
              <div className="shrink-0">
                <Icon size={60} strokeWidth={1.25} className="text-slate-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
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
