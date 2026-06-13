import { services } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="border-b gold-border bg-[rgba(0,31,24,0.7)] py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading align="center" title="Services" subtitle="Personal guidance for jewellery chosen with care." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="border gold-border bg-[rgba(0,61,46,0.42)] p-7 transition hover:-translate-y-1 hover:bg-[rgba(0,61,46,0.72)]">
                <Icon className="h-10 w-10 text-[var(--gold)]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-6 font-serif-display text-2xl font-semibold text-[var(--gold-light)]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
