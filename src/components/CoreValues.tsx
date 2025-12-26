// src/components/CoreValues.tsx
import React from "react";
import { Shuffle, Lightbulb, ShieldCheck, Users, Target } from "lucide-react";

const CORE_VALUES = [
  {
    title: "Agility",
    description:
      "Adapting quickly to changing client requirements and evolving market conditions.",
    Icon: Shuffle,
  },
  {
    title: "Innovation",
    description:
      "Leveraging technology and automation to deliver smarter, scalable solutions.",
    Icon: Lightbulb,
  },
  {
    title: "Trust",
    description:
      "Building long-term partnerships through transparency, reliability, and consistency.",
    Icon: ShieldCheck,
  },
  {
    title: "Client-Centricity",
    description:
      "Designing solutions that align closely with real client workflows and needs.",
    Icon: Users,
  },
  {
    title: "Precision",
    description:
      "Ensuring accuracy, consistency, and audit readiness in every deliverable.",
    Icon: Target,
  },
];

const CoreValues: React.FC = () => {
  return (
    <section id="core-values" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent/90 mb-2">
            Our Core Values
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-700">
            Principles that guide how we work
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {CORE_VALUES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group perspective h-64"
              tabIndex={0}
              aria-label={title}
            >
              <div className="relative h-full w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 group-focus:rotate-y-180 cursor-pointer">
                {/* Front */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl flex flex-col items-center justify-center text-center p-6 shadow-lg hover:shadow-2xl transition-shadow"
                  style={{
                    background: "var(--card-front, rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <Icon size={36} className="text-accent mb-4" />
                  <h4 className="text-lg font-semibold text-shadow-blue-500">
                    {title}
                  </h4>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl flex items-center justify-center p-6 text-center"
                  style={{
                    background: "var(--card-back, theme('colors.white'))",
                  }}
                >
                  <p className="text-sm font-medium text-slate-900 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective { perspective: 1200px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default CoreValues;
