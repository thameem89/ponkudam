"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b gold-border bg-[rgba(0,31,24,0.88)] backdrop-blur-xl">
      <div className="container-shell flex h-24 items-center justify-between gap-8 md:h-32">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-3 text-sm font-semibold uppercase tracking-wide text-[var(--warm)] transition hover:text-[var(--gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] ${index === 0 ? "text-[var(--gold-light)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[var(--gold)]" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center border gold-border text-[var(--gold-light)] transition hover:bg-[rgba(215,161,59,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)] lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div
        className={`lg:hidden absolute inset-x-0 top-full border-b gold-border bg-[rgba(0,42,32,0.98)] px-6 py-5 shadow-2xl transition duration-300 ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="container-shell grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[rgba(215,161,59,0.16)] py-4 text-base font-semibold uppercase tracking-wide text-[var(--warm)] transition hover:text-[var(--gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
