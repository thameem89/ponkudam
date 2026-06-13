import { MessageCircle, Navigation, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function ShowroomCTA() {
  return (
    <section id="contact" className="border-b gold-border bg-[rgba(0,42,32,0.68)] py-20 md:py-28">
      <div className="container-shell luxury-panel p-8 text-center md:p-14">
        <h2 className="mx-auto max-w-4xl font-serif-display text-4xl font-bold uppercase leading-tight text-[var(--warm)] md:text-6xl">
          Discover Jewellery Made For Your Moments
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Visit Ponkudam Gold & Diamond at Pantheerankavu, Calicut, and explore our latest collections.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a className="gold-gradient inline-flex min-h-12 items-center justify-center gap-2 px-7 text-sm font-extrabold uppercase tracking-wide text-[var(--deep)] transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]" href={contact.phoneHref}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Us
          </a>
          <a className="inline-flex min-h-12 items-center justify-center gap-2 border gold-border px-7 text-sm font-bold uppercase tracking-wide text-[var(--gold-light)] transition hover:bg-[rgba(215,161,59,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]" href={contact.directions} target="_blank" rel="noreferrer">
            <Navigation className="h-5 w-5" aria-hidden="true" />
            Get Directions
          </a>
          <a className="inline-flex min-h-12 items-center justify-center gap-2 border gold-border px-7 text-sm font-bold uppercase tracking-wide text-[var(--gold-light)] transition hover:bg-[rgba(215,161,59,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
