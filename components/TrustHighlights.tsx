import { trustHighlights } from "@/lib/site-data";

export function TrustHighlights() {
  return (
    <section className="border-b gold-border bg-[rgba(0,31,24,0.76)]">
      <div className="container-shell grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {trustHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`group flex min-h-48 flex-col items-center justify-center gap-5 px-8 py-10 text-center transition hover:-translate-y-1 ${index > 0 ? "lg:border-l lg:border-[rgba(215,161,59,0.45)]" : ""}`}
            >
              <Icon className="h-12 w-12 text-[var(--gold)] transition group-hover:scale-110" strokeWidth={1.6} aria-hidden="true" />
              <h2 className="max-w-48 text-xl font-medium uppercase leading-8 text-[var(--warm)]">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
