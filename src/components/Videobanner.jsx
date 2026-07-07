import React, { useState } from "react";
import { Play, X } from "lucide-react";
import videoImg from "../assets/videoImg.jpg";
export default function VideoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:py-10">
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30,20,25,0.01), rgba(30,30,35,0.15)), url(${videoImg})`,
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Play video"
          className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
        >
          <Play size={30} fill="currentColor" className="ml-1" />
        </button>
      </section>

      {/* Video modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center px-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white hover:text-slate-300"
            >
              <X size={28} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/c238xxeDdFI?autoplay=1&mute=1"
              className="w-full h-full"
              title="Video"
              frameBorder="0"
              allow="accelerated-video-playback; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
