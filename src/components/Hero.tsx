import React, { useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "../constants";

const SLIDE_INTERVAL = 4000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  /* --------------------------------------------------
     Preload images
  -------------------------------------------------- */
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  /* --------------------------------------------------
     Auto slide
  -------------------------------------------------- */
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) =>
        prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[80vh] overflow-hidden bg-slate-900 flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "opacity",
                zIndex: isActive ? 2 : 1,
              }}
              aria-hidden={!isActive}
            >
              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 max-w-2xl">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "w-8 bg-accent"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
