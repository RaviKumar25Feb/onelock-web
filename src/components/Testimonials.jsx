import React from "react";
import { Star, StarHalf } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "James Delaney",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus magna dolor neque est gravida",
    },
    {
      name: "pebz13",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4.5,
      text: "Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus and aliquet porta vitae purus diam congue a magna undo",
    },
    {
      name: "Evelyn Martinez",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
      text: "At sagittis congue augue egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue egestas luctus and donec diam ociis ultrice ligula magna suscipit lectus gestas augue into cubilia",
    },
    {
      name: "Marcus Reed",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      text: "Ipsum neque dolor primis libero at tempus blandit posuere ligula varius congue cursus porta feugiat sapien gravida donec",
    },
    {
      name: "Sofia Lin",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      rating: 4.5,
      text: "Fringilla risus nec luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien nemo ipsam",
    },
    {
      name: "Daniel Cooper",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 5,
      text: "Sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus",
    },
    {
      name: "Priya Nair",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 4,
      text: "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus ligula rutrum tempor",
    },
  ];

  // duplicate list for seamless infinite loop
  const loopReviews = [...reviews, ...reviews];

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div className="flex gap-1 text-amber-400 mb-4">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f-${i}`} size={18} fill="currentColor" strokeWidth={0} />
        ))}
        {hasHalf && <StarHalf size={18} fill="currentColor" strokeWidth={0} />}
      </div>
    );
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center mb-16">
        <h2 className="text-4xl md:text-4xl font-semibold text-slate-700 mb-5">
          10K+ Customers Love ONELOCK
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
      </div>

      {/* Sliding track */}
      <div className="relative">
        <div className="flex gap-8 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {loopReviews.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="w-[360px] shrink-0 bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-left"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="font-bold text-slate-800 mb-1">{r.name}</p>
              {renderStars(r.rating)}
              <p className="text-slate-500 italic leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
