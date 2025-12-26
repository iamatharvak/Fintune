import { Linkedin } from "lucide-react";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* =======================
          ABOUT FINTUNE (TOP)
      ======================= */}
      <section className="pt-40 pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent text-xl font-semibold">✦</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              About Fintune
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Fintune is a fintech platform focused on automating investor
              communication, reporting, and compliance workflows for asset
              managers.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed">
              We work at the intersection of asset management, data accuracy,
              and operational automation — helping institutions replace manual,
              error-prone processes with scalable, audit-ready systems.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed">
              Our solutions support factsheets, presentations, dashboards, and
              regulatory documentation, enabling teams to operate with clarity,
              consistency, and confidence at scale.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          VISION & MISSION (NEW)
      ======================= */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-0 h-full w-1 bg-accent/40 rounded-full" />
                <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
                  Our Vision
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To simplify and standardize investor communication through
                  intelligent automation — enabling asset managers to focus on
                  investment strategy, performance, and long-term value
                  creation.
                </p>
              </div>

              {/* Mission */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-0 h-full w-1 bg-accent/40 rounded-full" />
                <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To deliver scalable, data-accurate, and compliance-aligned
                  solutions that automate reporting and communication workflows
                  across institutional and retail-facing asset management
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          DIVIDER
      ======================= */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-slate-200" />
      </div>

      {/* =======================
          FOUNDER SECTION
      ======================= */}
      <section className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581093192442-337ba327eb2b?w=900&auto=format&fit=crop"
                alt="Founder portrait"
                className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
              />
            </div>

            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Founder & Leadership
              </h2>

              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Priyanka Bharati
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/priyanka-bharati-9273a414/"
                    className="w-8 h-8 border-b-blue-400 border-2  rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <p className="text-sm text-accent font-medium mt-1">
                  Founder & Chief Executive Officer
                </p>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Priyanka Bharati began her career at Aditya Birla Sun Life
                Mutual Fund in 2014, gaining deep expertise across Business
                Development and Product strategy. In 2019, she founded Fintune,
                driven by the belief that asset management needed sharper,
                tech-enabled solutions.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Today, Fintune is emerging as a budding fintech, harnessing
                automation to bring precision, clarity, and speed to mutual fund
                communication.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Under Priyanka’s leadership, every solution is built with
                auditability, scalability, and institutional rigor at its core.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
