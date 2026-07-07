import React, { useEffect, useRef, useState } from "react";

function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let rafId;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}

export default function StatsBanner() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const loadTime = useCountUp(38, inView);
  const productivity = useCountUp(47, inView);
  const ramLoading = useCountUp(43, inView);

  const stats = [
    { value: loadTime, label: "Fast Load Time" },
    { value: productivity, label: "More Productivity" },
    { value: ramLoading, label: "Less RAM Loading" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #4f7cff 0%, #7b5cf0 100%)",
      }}
    >
      {/* decorative wave shapes */}
      <div className="absolute inset-x-0 bottom-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,120 C360,200 1080,40 1440,120 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 150" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,80 C480,160 960,0 1440,80 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          More Faster, More Powerful App
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>

        <div className="grid grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-5xl md:text-6xl font-bold text-white mb-3">
                {s.value}%
              </p>
              <p className="text-white/80 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
