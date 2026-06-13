import Image from "next/image";
import { collections } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function CollectionsSection() {
  return (
    <section id="collection" className="border-b gold-border bg-[rgba(0,42,32,0.58)] py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          align="center"
          title="Our Collections"
          subtitle="Jewellery crafted for every story, celebration and generation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <article key={item.title} className="group overflow-hidden border gold-border bg-[rgba(0,31,24,0.7)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} from Ponkudam Gold & Diamond`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,31,24,0.9)] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif-display text-3xl font-semibold text-[var(--gold-light)]">{item.title}</h3>
                <p className="mt-3 min-h-24 text-base leading-7 text-[var(--muted)]">{item.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-bold uppercase tracking-wide text-[var(--gold-light)] underline-offset-8 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
                >
                  View Collection
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
