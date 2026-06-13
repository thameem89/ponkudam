type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-light)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif-display text-4xl font-bold uppercase leading-tight text-[var(--gold-light)] md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{subtitle}</p> : null}
    </div>
  );
}
