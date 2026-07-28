import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-violet-200/90 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-teal-300" />
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: {
  badge: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center"
          ? "items-center text-center mx-auto"
          : "items-start text-left"
      } max-w-2xl`}
    >
      <Badge>{badge}</Badge>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.12] tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function ButtonPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-teal-400 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_-15px_rgba(139,92,246,0.55)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] ${className}`}
    >
      {children}
    </a>
  );
}

export function ButtonSecondary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors duration-200 hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </a>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
