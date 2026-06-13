import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="border-b gold-border py-20 md:py-28">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <SectionHeading title="About Ponkudam" />
          <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>For decades, Ponkudam Gold & Diamond has been a symbol of trust, purity and craftsmanship in Calicut.</p>
            <p>
              Every piece we create is a promise of quality, elegance and timeless beauty. From traditional creations to
              contemporary designs, our jewellery is crafted to celebrate life&apos;s most precious moments.
            </p>
          </div>
          <a
            href="#services"
            className="mt-8 inline-flex min-h-12 items-center justify-center border gold-border px-7 text-sm font-bold uppercase tracking-wide text-[var(--gold-light)] transition hover:bg-[rgba(215,161,59,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
          >
            Know More
          </a>
        </div>
        <div className="image-frame min-h-[360px] md:min-h-[500px]">
          <Image
            src="/images/about-bracelet.png"
            alt="Emerald and diamond gold bracelet photographed on dark green velvet"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
