import Image from "next/image";
import { Check } from "lucide-react";
import { craftHighlights } from "@/lib/site-data";

export function CraftsmanshipSection() {
  return (
    <section className="border-b gold-border py-20 md:py-28">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.56fr_0.44fr]">
        <div className="image-frame min-h-[420px] lg:min-h-[560px]">
          <Image
            src="/images/craftsmanship.png"
            alt="Gold bangles and diamond ring photographed to show refined craftsmanship"
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover"
          />
        </div>
        <div className="luxury-panel p-8 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-light)]">Craftsmanship</p>
          <h2 className="font-serif-display text-4xl font-bold uppercase leading-tight text-[var(--warm)] md:text-6xl">
            Crafted With Precision.
            <br />
            <span className="text-gold-gradient">Worn With Pride.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Every Ponkudam creation brings together skilled craftsmanship, carefully selected materials and designs made
            to last for generations.
          </p>
          <div className="mt-8 grid gap-4">
            {craftHighlights.map((item) => (
              <div key={item} className="flex items-center gap-4 text-lg font-semibold text-[var(--warm)]">
                <span className="inline-flex h-9 w-9 items-center justify-center border gold-border text-[var(--gold-light)]">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
