import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image / Visual */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop"
              alt="Financial analytics and data visualization"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Heading */}
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">
                About Fintune
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                Bridging institutional expertise with intelligent automation.
              </h3>
            </div>

            {/* Who we are */}
            <div className="space-y-4">
              <p className="text-slate-700 text-lg leading-relaxed">
                Founded in 2019, <strong>Fintune</strong> is a fintech
                intermediary working at the intersection of asset management,
                automation, and investor communication.
              </p>

              <p className="text-slate-600 leading-relaxed">
                We partner with fund houses, asset managers, and distributors to
                streamline factsheets, dashboards, presentations, and regulatory
                documentation—delivering high accuracy with minimal manual
                intervention.
              </p>
            </div>

            {/* Why we exist */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Why we exist
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Asset management teams spend significant time on repetitive
                reporting, data validation, and compliance-heavy investor
                communication. Fintune was built to solve this challenge—by
                automating workflows, reducing operational risk, and ensuring
                audit-safe delivery at scale.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-6">
                <h5 className="font-bold text-slate-900 mb-2">Our Vision</h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To simplify and standardize investor communication through
                  intelligent automation—allowing asset managers to focus on
                  strategy and performance.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6">
                <h5 className="font-bold text-slate-900 mb-2">Our Mission</h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To deliver scalable, data-accurate, and compliance-aligned
                  solutions that support both institutional and retail-facing
                  asset management workflows.
                </p>
              </div>
            </div>

            {/* Optional CTA */}
            <div>
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg bg-primary text-black font-semibold shadow hover:opacity-90 transition"
              >
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
