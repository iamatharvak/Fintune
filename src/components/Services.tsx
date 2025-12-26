// src/components/ServicesStack.tsx
import React, { useEffect, useState } from "react";
import {
  FileText,
  BarChart2,
  Layout,
  Code2,
  type LucideIcon,
} from "lucide-react";

type ServiceItem = {
  key: string;
  title: string;
  short: string;
  Icon: LucideIcon;
  content: {
    intro: string;
    howItWorks: string;
    advantages: string[];
  };
};

type CallbackPayload = {
  name: string;
  phone: string;
  subject: string;
  origin?: string | null;
};

interface ServicesStackProps {
  onCallbackSubmit?: (payload: CallbackPayload) => void;
}

// const SCALE = [
//   { key: "funds", label: "Funds (recurring)", value: 270 },
//   { key: "presentations", label: "Presentations", value: 50 },
//   { key: "compliance", label: "Compliance Docs", value: 120 },
//   { key: "datapoints", label: "Data Points / mo", value: 10000 },
//   { key: "validation", label: "Annual Data Validation", value: 1000000 },
// ];

const SERVICES: ServiceItem[] = [
  {
    key: "investment-content",
    title: "Investment Content Automation",
    short:
      "Rule-driven automation for reliable, repeatable investor communications.",
    Icon: FileText,
    content: {
      intro:
        "Investment Content Automation replaces manual, people-dependent content creation with stable, rule-driven systems that operate reliably every month. The focus is on repeatability, accuracy, and control at scale.",
      howItWorks:
        "Investor communication is broken down into structured components—data inputs, calculations, disclosures, and narrative logic. These elements are encoded into an automation framework where validated fund data flows through predefined rules and templates.",
      advantages: [
        "Eliminates recurring manual effort and individual dependency",
        "Ensures consistency across funds and reporting cycles",
        "Reduces month-end execution risk",
        "Improves turnaround time without compromising accuracy",
        "Creates a scalable foundation as fund coverage expands",
      ],
    },
  },

  {
    key: "factsheet-reporting",
    title: "Factsheet & Reporting Automation",
    short:
      "Automated, audit-ready factsheets and reports built for continuity.",
    Icon: Layout,
    content: {
      intro:
        "Factsheet & Reporting Automation is at the core of Fintune’s automation-first approach, enabling precise, repeatable, and audit-ready reporting every cycle.",
      howItWorks:
        "Validated data is mapped once and reused every month through automated logic. Approved calculation methodologies, riskometers, addendums, and locked templates are applied automatically, with reconciliation checks and exception handling built in.",
      advantages: [
        "Consistent and accurate outputs month after month",
        "Automated handling of addendums and structural changes",
        "Faster and more predictable month-end closures",
        "Clear data lineage and audit-safe reporting",
        "Significantly reduced operational and compliance risk",
      ],
    },
  },

  {
    key: "analytics-dashboard",
    title: "Data Analytics & Dashboard Automation",
    short: "Automation-led analytics delivering real-time, reliable insights.",
    Icon: BarChart2,
    content: {
      intro:
        "Fintune’s analytics solutions are automation-led, not report-led. This service creates systems that continuously process and present fund data without manual intervention.",
      howItWorks:
        "Automated data pipelines pull, validate, and transform fund data. Standardised calculation logic ensures consistency, while interactive dashboards sit on top of this automated backbone for real-time analysis.",
      advantages: [
        "Single source of truth across teams",
        "Reduced reliance on static reports and manual analysis",
        "Faster insights for decision-making",
        "Scalable across funds and asset classes",
        "Consistent metrics aligned to internal governance",
      ],
    },
  },

  {
    key: "regulatory-automation",
    title: "Regulatory-Aligned Automation & Documentation",
    short: "Compliance embedded directly into automated documentation systems.",
    Icon: Code2,
    content: {
      intro:
        "Regulatory alignment at Fintune is embedded into automation, not added as a final check. This ensures compliance is systematically enforced across all documentation.",
      howItWorks:
        "Regulatory rules and internal governance standards are translated into automation logic. Templates, disclosures, and terminology are centrally controlled, with automated validations before release.",
      advantages: [
        "Reduced regulatory and compliance risk",
        "Standardised documentation across funds",
        "Faster adaptation to regulatory updates",
        "Strong audit trails and traceability",
        "Greater confidence during inspections and reviews",
      ],
    },
  },

  {
    key: "process-workflow",
    title: "Process Design & Workflow Automation",
    short: "Structured workflows that stabilise high-pressure operations.",
    Icon: Code2,
    content: {
      intro:
        "Process Design & Workflow Automation converts manual, coordination-heavy operations into structured systems that run predictably under pressure.",
      howItWorks:
        "Existing processes are analysed to identify failure points and inefficiencies. Automation-led workflows are designed with clear ownership, defined handoffs, and built-in controls.",
      advantages: [
        "Predictable and stable month-end operations",
        "Reduced operational friction and firefighting",
        "Lower dependency on individuals",
        "Improved visibility and accountability",
        "Strong foundation for future automation initiatives",
      ],
    },
  },
];

// function usePrefersReducedMotion(): boolean {
//   const [prefers, setPrefers] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const handler = () => setPrefers(mq.matches);
//     handler();
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);

//   return prefers;
// }

const ServicesStack: React.FC<ServicesStackProps> = ({ onCallbackSubmit }) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // const prefersReduced = usePrefersReducedMotion();

  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackOrigin, setCallbackOrigin] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", subject: "" });
  const [sent, setSent] = useState(false);
  const selected = SERVICES.find((s) => s.key === openKey) ?? null;

  const toggleModal = (key: string | null) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  function openCallback(origin?: string | null) {
    setCallbackOrigin(origin ?? null);
    setCallbackOpen(true);
    setSent(false);
  }

  function closeCallback() {
    setCallbackOpen(false);
    setForm({ name: "", phone: "", subject: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    const payload: CallbackPayload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      origin: callbackOrigin || undefined,
    };

    if (typeof onCallbackSubmit === "function") {
      try {
        onCallbackSubmit(payload);
      } catch (err) {}
    } else {
      console.log("Callback request:", payload);
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      closeCallback();
    }, 900);
  }

  return (
    <section
      id="services"
      className="relative py-24 overflow-x-hidden"
      aria-label="Services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            You have specific needs — we have flexible options
          </h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Select a service to view details, delivery model and supporting
            metrics.
          </p>
        </div>

        <div className="space-y-14">
          {SERVICES.map((s, idx) => {
            const isOpen = openKey === s.key;
            const isEven = idx % 2 === 1;

            return (
              <article
                key={s.key}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div
                  aria-hidden
                  className={`hidden md:block absolute -inset-y-6 w-[52%] rounded-3xl ${
                    isEven ? "right-0 translate-x-6" : "left-0 -translate-x-6"
                  }`}
                  style={{
                    zIndex: -1,
                    background:
                      "linear-gradient(90deg, rgba(59,130,246,0.06), rgba(99,102,241,0.03))",
                  }}
                />

                <div className="md:w-1/2 w-full">
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border ${
                      isOpen ? "border-primary/30" : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-sm bg-indigo-500/10">
                        <s.Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900">
                          {s.title}
                        </h4>
                        <p className="text-sm text-slate-500">{s.short}</p>
                      </div>
                    </div>

                    {/* <div className="mt-4 flex flex-wrap gap-3">
                      {(s.counters ?? []).map((c) => (
                        <div
                          key={c.key}
                          className="bg-slate-100 px-3 py-1 rounded-full text-xs"
                        >
                          <strong className="mr-1">
                            {formatNumber(c.value)}
                          </strong>
                          <span className="text-slate-500">{c.label}</span>
                        </div>
                      ))}
                    </div> */}

                    <button
                      onClick={() => toggleModal(s.key)}
                      aria-expanded={isOpen}
                      className={`mt-6 inline-flex px-4 py-2 rounded-full font-semibold transition ${
                        isOpen
                          ? "bg-linear-to-r from-primary to-secondary text-black shadow-lg cursor-pointer"
                          : "bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {isOpen ? "Close" : "Learn more"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {openKey && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenKey(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 mx-auto z-10">
            <div className="flex items-start justify-between">
              <h4 className="text-xl font-semibold">{selected.title}</h4>
              <button
                aria-label="Close details"
                onClick={() => setOpenKey(null)}
                className="text-slate-500 hover:text-slate-700 ml-4"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {/* Intro */}
              <p className="text-slate-700 leading-relaxed">
                {selected.content.intro}
              </p>

              {/* How it works */}
              <div>
                <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
                  How it works
                </h5>
                <p className="text-slate-600 leading-relaxed">
                  {selected.content.howItWorks}
                </p>
              </div>

              {/* Advantages */}
              <div>
                <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  Advantages
                </h5>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selected.content.advantages.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-600"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => openCallback(selected.title)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm cursor-pointer"
              >
                Get a callback
              </button>
              <button
                onClick={() => setOpenKey(null)}
                className="px-4 py-2 rounded-lg border text-sm bg-white hover:bg-slate-50 cursor-pointer "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {callbackOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeCallback}
          />
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-auto z-10"
          >
            <h4 className="text-lg font-medium">Request a callback</h4>
            <p className="text-sm text-slate-600 mt-1">
              We'll call you to discuss {callbackOrigin}
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
                className="px-4 py-2 rounded-lg border text-sm bg-white hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

/* =======================
   Helpers
   ====================== */

// const DetailCounter: React.FC<{ label: string; value: number }> = ({
//   label,
//   value,
// }) => {
//   const count = useCountUp(value, 1200);
//   return (
//     <div className="bg-slate-50 p-3 rounded-lg">
//       <div className="text-lg font-bold text-slate-900">
//         {formatNumber(count)}
//       </div>
//       <div className="text-xs text-slate-500">{label}</div>
//     </div>
//   );
// };

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${Math.round(n / 100_000) / 10}M+`;
  if (n >= 1_000) return `${Math.round(n / 100) / 10}K+`;
  return `${n}+`;
}

export default ServicesStack;
