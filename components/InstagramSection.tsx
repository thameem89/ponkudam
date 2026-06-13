import Image from "next/image";
import { Camera } from "lucide-react";
import { contact } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const instagramImages = [
  "/images/hero-jewellery.png",
  "/images/about-bracelet.png",
  "/images/collection-bridal.png",
  "/images/craftsmanship.png",
  "/images/about-bracelet.png",
  "/images/hero-jewellery.png"
];

export function InstagramSection() {
  return (
    <section className="border-b gold-border py-20 md:py-28">
      <div className="container-shell">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionHeading title="Follow Our Journey" subtitle="Discover our latest designs and collections on Instagram." />
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="gold-gradient inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-extrabold uppercase tracking-wide text-[var(--deep)] transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-light)]"
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
            Follow @Ponkudam
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instagramImages.map((src, index) => (
            <div key={`${src}-${index}`} className="image-frame aspect-square">
              <Image
                src={src}
                alt={`Replaceable Instagram showcase placeholder ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
