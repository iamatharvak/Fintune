import React from "react";
import { CLIENT_LOGOS } from "../constants";

const Clients = () => {
  // Duplicate logos for seamless loop
  const loopLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients"
      className="py-14 bg-white border-y border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-xl font-semibold text-slate-950 uppercase tracking-widest">
          Our Valuable Clients & Partners
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max animate-scroll-horizontal"
          style={{ animationDuration: "80s" }}
        >
          {loopLogos.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="shrink-0 w-64 h-24 mx-4 bg-slate-50 rounded-xl
                         flex items-center justify-center border border-slate-100
                         hover:border-secondary transition-colors px-4 text-center"
            >
              <span
                className="text-sm font-semibold text-slate-500 leading-snug"
                title={client}
              >
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-linear-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-linear-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Clients;
