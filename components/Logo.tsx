export function Logo() {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Ponkudam home">
      <svg className="h-14 w-16 shrink-0 text-[var(--gold)] md:h-16 md:w-20" viewBox="0 0 96 72" fill="none" aria-hidden="true">
        <path d="M8 25h80L67 8H29L8 25Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M8 25 48 65 88 25M29 8l19 57L67 8M29 25h38M18 25 29 8M78 25 67 8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span className="font-logo-display block text-2xl font-black tracking-[0.12em] text-[var(--gold)] md:text-3xl">PONKUDAM</span>
        <span className="mt-1 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--gold-light)]">
          <span className="h-px w-6 bg-[var(--gold)]" />
          GOLD & DIAMOND
          <span className="h-px w-6 bg-[var(--gold)]" />
        </span>
      </span>
    </a>
  );
}
