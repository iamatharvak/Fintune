import React, { useEffect, useState } from "react";
import { FUNDS_MANAGED } from "../constants";
// import { useCountUp } from "./Services";

/* =======================
   Helpers
======================= */

function formatStat(n: number): string {
  if (n >= 1_000_000) return `${Math.round(n / 100_000) / 10}M+`;
  if (n >= 1_000) return `${Math.round(n / 100) / 10}K+`;
  return `${n}+`;
}
function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.3 }
) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // run once only
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}
export function useCountUp(
  target: number,
  start: boolean,
  duration = 1200
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}

/* =======================
   Component
======================= */

const Stats: React.FC = () => {
  const prefersReduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.4 });

  return (
    <section
      ref={ref}
      id="funds"
      className="py-24 bg-primary text-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-2xl uppercase tracking-widest text-slate-950 font-semibold">
            At scale, every month
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/10">
          {FUNDS_MANAGED.map((stat, index) => {
            const numericValue =
              typeof stat.value === "number"
                ? stat.value
                : Number(String(stat.value).replace(/\D/g, ""));

            const animatedCount = useCountUp(numericValue, inView); // always call the hook
            const count = prefersReduced ? numericValue : animatedCount;

            return (
              <div key={index} className="p-4 group">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "oklch(0.505 0.213 27.518)" }}
                >
                  {formatStat(count)}
                </div>
                <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(() => {
    if (typeof window === "undefined" || !("matchMedia" in window))
      return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches);

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange as EventListener);
    } else if ((mq as any).addListener) {
      (mq as any).addListener(handleChange as any);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange as EventListener);
      } else if ((mq as any).removeListener) {
        (mq as any).removeListener(handleChange as any);
      }
    };
  }, []);

  return prefersReduced;
}
