import React, { useState } from "react";

interface ServicesAfterBannerProps {
  onCallbackSubmit?: (payload: {
    name: string;
    phone: string;
    subject: string;
    origin?: string | null;
  }) => void;
}

export default function ServicesAfterBanner({
  onCallbackSubmit,
}: ServicesAfterBannerProps) {
  const items = [
    {
      id: "product-communication",
      title: "Product Communication",
      bullets: [
        "Automated investor-facing deliverables: presentations, factsheets, product notes",
        "Consistent, regulator-aligned narratives & disclosures",
        "Centrally governed templates with controlled disclosures",
      ],
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <h3 className="text-lg font-semibold">
            Automated Investor Deliverables
          </h3>
          <p>
            Fintune automates the creation of investor-facing documents such as
            presentations, factsheets, and product notes. Automated calculations
            and validated data ensure accuracy and consistency across all funds,
            eliminating manual errors and last-minute execution risk.
          </p>

          <h3 className="text-lg font-semibold">
            Consistent & Compliant Messaging
          </h3>
          <p>
            Narratives, disclosures, and data presentation follow predefined
            structures, ensuring uniform, regulator-aligned communication that
            meets both regulatory and internal compliance standards.
          </p>

          <h3 className="text-lg font-semibold">
            Centralised Templates with Controlled Disclosures
          </h3>
          <p>
            All documents are built from a centrally governed database where
            disclosures are locked and updated at the source, eliminating the
            risk of inconsistent or outdated regulatory text.
          </p>
        </div>
      ),
    },

    {
      id: "automation",
      title: "Automation",
      bullets: [
        "End-to-end workflow automation for recurring reporting",
        "Rule-driven systems that scale with fund volumes",
        "Audit-ready outputs with traceable data flows",
      ],
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <h3 className="text-lg font-semibold">
            End-to-End Workflow Automation
          </h3>
          <p>
            Recurring reporting and documentation workflows are automated
            end-to-end, significantly reducing manual effort and dependency on
            individuals, especially during high-pressure month-end cycles.
          </p>

          <h3 className="text-lg font-semibold">Rule-Driven, Stable Systems</h3>
          <p>
            Automation is driven by predefined rules, validations, and logic,
            ensuring stable and predictable outputs even as fund volumes
            increase or regulatory requirements evolve.
          </p>

          <h3 className="text-lg font-semibold">Audit-Ready Processes</h3>
          <p>
            Every automated output follows controlled logic with traceable data
            flows, enabling transparency, consistency, and confidence during
            audits, reviews, and internal checks.
          </p>
        </div>
      ),
    },

    {
      id: "dashboards-analytics",
      title: "Dashboards & Analytics",
      bullets: [
        "Automated performance & risk dashboards",
        "Single source of truth with standardised calculations",
        "Scalable analytics across funds & asset classes",
      ],
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <h3 className="text-lg font-semibold">
            Automated Performance & Risk Dashboards
          </h3>
          <p>
            Dashboards automatically process and present performance and risk
            metrics, eliminating manual compilation and ensuring timely
            insights.
          </p>

          <h3 className="text-lg font-semibold">Single Source of Data</h3>
          <p>
            Centralised data and standardised calculations ensure all teams work
            from the same metrics, significantly reducing inconsistencies and
            reconciliation issues across functions.
          </p>

          <h3 className="text-lg font-semibold">
            Scalable Analytics Frameworks
          </h3>
          <p>
            The analytics framework is designed to scale across funds,
            strategies, and asset classes without increasing operational
            complexity, supporting both day-to-day monitoring and
            decision-making.
          </p>
        </div>
      ),
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackMeta, setCallbackMeta] = useState({ from: null });
  const [form, setForm] = useState({ name: "", phone: "", subject: "" });
  const [sent, setSent] = useState(false);
  const selectedItem = items.find((x) => x.id === openId);

  function openDetails(id: string) {
    setOpenId(id);
    setSent(false);
  }

  function closeDetails() {
    setOpenId(null);
  }

  function openCallback(fromId: never) {
    setCallbackMeta({ from: fromId });
    setCallbackOpen(true);
    setSent(false);
  }

  function closeCallback() {
    setCallbackOpen(false);
    setForm({ name: "", phone: "", subject: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Minimal validation
    if (!form.name || !form.phone) return;

    const payload = { ...form, origin: callbackMeta.from };
    // If caller provided a handler, call it. Otherwise log as placeholder.
    if (typeof onCallbackSubmit === "function") {
      onCallbackSubmit(payload);
    } else {
      console.log("Callback request:", payload);
    }

    setSent(true);

    // small UX: close after a short delay
    setTimeout(() => {
      setSent(false);
      closeCallback();
    }, 900);
  }

  return (
    <section
      id="post-hero-services"
      className="py-16 bg-slate-50 border-b border-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">
            What we automate for asset managers
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Institutional-grade automation for investor communication,
            reporting, and analytics — built for auditability and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.id}
              className="rounded-xl p-7 bg-white
  border border-slate-200 shadow-sm
  hover:border-slate-300
  transition-colors"
            >
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <ul className="mt-3 text-sm text-slate-600 space-y-2">
                    {it.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-slate-400"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ml-4 mt-6.5 shrink-0 self-center">
                  <button
                    onClick={() => openDetails(it.id)}
                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-sm bg-white hover:bg-slate-100 cursor-pointer"
                  >
                    Learn more
                  </button>
                </div>
              </header>
            </article>
          ))}
        </div>
      </div>

      {/* Details modal */}
      {openId && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeDetails}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 mx-auto z-10">
            <div className="flex items-start justify-between">
              <h4 className="text-xl font-semibold">{selectedItem.title}</h4>
              <button
                aria-label="Close details"
                onClick={closeDetails}
                className="text-slate-500 hover:text-slate-700 ml-4"
              >
                ×
              </button>
            </div>

            <div className="mt-4">{selectedItem.content}</div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => openCallback(openId)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900
 text-sm cursor-pointer"
              >
                Get a callback
              </button>

              <button
                onClick={closeDetails}
                className="px-4 py-2 rounded-lg border text-sm bg-white hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Callback modal */}
      {callbackOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeCallback}
          ></div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-auto z-10"
          >
            <h4 className="text-lg font-medium">Request a callback</h4>
            <p className="text-sm text-slate-600 mt-1">
              We'll call you to discuss {callbackMeta.from}
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-xs text-slate-600">
                  Full name
                </label>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600">
                  Phone number
                </label>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600">Subject</label>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm"
              >
                {sent ? "Sending..." : "Request callback"}
              </button>

              <button
                type="button"
                onClick={closeCallback}
                className="px-4 py-2 rounded-lg border text-sm bg-white hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
