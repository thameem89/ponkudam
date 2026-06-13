import { contact, footerContacts, navItems, socialLinks } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--deep)]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">
            Timeless jewellery created with trust, purity and craftsmanship.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--gold-light)]">Quick Links</h2>
          <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[var(--muted)] transition hover:text-[var(--gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--gold-light)]">Contact</h2>
          <div className="mt-5 grid gap-4">
            {footerContacts.map((item) => {
              const Icon = item.icon;
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-[var(--gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[var(--gold)]" aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-[var(--gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[var(--gold)]" aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="motif h-9 border-y gold-border opacity-70" aria-hidden="true" />
      <div className="container-shell flex flex-col gap-2 py-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>&copy; {year} {contact.name}. All rights reserved.</p>
        <p>Designed with elegance for Ponkudam.</p>
      </div>
    </footer>
  );
}
