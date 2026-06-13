"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center border gold-border bg-[rgba(0,31,24,0.88)] text-[var(--gold-light)] shadow-2xl backdrop-blur transition hover:bg-[rgba(215,161,59,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
