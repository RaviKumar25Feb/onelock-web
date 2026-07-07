import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Do you have non-profit discount?",
      a: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat.",
    },
    {
      q: "How do I install a ONELOCK?",
      a: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit.",
    },
    {
      q: "What I can do with my purchase?",
      a: "Sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus pretium.",
    },
    {
      q: "How can I update or cancel my personal information?",
      a: "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus ligula rutrum tempor.",
    },
    {
      q: "I have technical problem, who do I email?",
      a: "Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-slate-700 mb-5">
            Have Questions? Look Here.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero at tempus, blandit posuere ligula varius congue cursus
            porta feugiat
          </p>
        </div>

        <div>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-slate-200">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold text-slate-600">
                    {item.q}
                  </span>
                  <span className="text-slate-600 shrink-0 ml-4">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="text-slate-500 leading-relaxed pb-6 pr-10">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-600 mt-14">
          Still have a question?{" "}
          <a href="#" className="font-bold text-slate-800 underline">
            Ask your question here
          </a>
        </p>
      </div>
    </section>
  );
}
