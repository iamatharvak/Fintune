import React from "react";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Testimonials
          </h2>
          <p className="mt-4 text-slate-600">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="text-blue-200 w-10 h-10 absolute top-6 left-6 -z-10" />
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                  <span className="text-xs text-slate-500 uppercase">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
