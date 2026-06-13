"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    label: "Celebrate Life's Precious Moments",
    desktop: "/images/hero-slider-desktop.png",
    mobile: "/images/hero-slider-mobile.png",
    desktopCta: "left-[6%] top-[55%] h-[8%] w-[20%]",
    mobileCta: "left-[20%] top-[28%] h-[5%] w-[60%]"
  },
  {
    label: "Crafted With Trust. Worn With Pride.",
    desktop: "/images/hero-slider-trust-desktop.png",
    mobile: "/images/hero-slider-trust-mobile.png",
    desktopCta: "left-[6%] top-[55%] h-[8%] w-[22%]",
    mobileCta: "left-[10%] top-[28%] h-[5%] w-[80%]"
  },
  {
    label: "Timeless Beauty. Lasting Value.",
    desktop: "/images/hero-slider-timeless-desktop.png",
    mobile: "/images/hero-slider-timeless-mobile.png",
    desktopCta: "left-[6%] top-[55%] h-[8%] w-[22%]",
    mobileCta: "left-[10%] top-[35%] h-[5%] w-[80%]"
  }
];

const SLIDE_DURATION = 5200;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden border-b gold-border bg-[var(--deep)] pt-24 md:pt-32">
      <h1 className="sr-only">Ponkudam Gold & Diamond hero slider</h1>
      <div className="relative w-full">
        {/* Desktop slider — 1672×941 aspect ratio */}
        <div className="relative hidden w-full md:block" style={{ aspectRatio: "1672/941" }}>
          {slides.map((slide, index) => (
            <Image
              key={slide.desktop}
              src={slide.desktop}
              alt={`Ponkudam Gold and Diamond hero banner: ${slide.label}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {/* Mobile slider — 941×1672 aspect ratio */}
        <div className="relative w-full md:hidden" style={{ aspectRatio: "941/1672" }}>
          {slides.map((slide, index) => (
            <Image
              key={slide.mobile}
              src={slide.mobile}
              alt={`Ponkudam Gold and Diamond mobile hero banner: ${slide.label}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {slides.map((slide, index) => (
          <a
            key={slide.label}
            href="#collection"
            aria-label={`View collections from slide: ${slide.label}`}
            tabIndex={activeSlide === index ? 0 : -1}
            className={`absolute hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] md:block ${
              slide.desktopCta
            } ${activeSlide === index ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
          />
        ))}
        {slides.map((slide, index) => (
          <a
            key={`${slide.label}-mobile`}
            href="#collection"
            aria-label={`View collections from slide: ${slide.label}`}
            tabIndex={activeSlide === index ? 0 : -1}
            className={`absolute focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] md:hidden ${
              slide.mobileCta
            } ${activeSlide === index ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
          />
        ))}

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-6">
          {slides.map((slide, index) => (
            <button
              key={`${slide.label}-dot`}
              type="button"
              aria-label={`Show hero slide ${index + 1}: ${slide.label}`}
              aria-current={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 w-8 border border-[var(--gold)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] ${
                activeSlide === index ? "gold-gradient" : "bg-[rgba(0,31,24,0.75)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
