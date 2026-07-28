import { Badge, ButtonPrimary, Container } from "./ui";
import { CHECKOUT_URL } from "@/lib/links";

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="glow-violet pointer-events-none absolute inset-x-0 top-0 h-[400px]"
      />
      <Container className="relative flex flex-col items-center gap-6 rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-16 text-center sm:px-16">
        <Badge>Chega de cuidar do dinheiro no improviso</Badge>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Comece agora a construir uma relação mais clara com seu dinheiro.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          Organize gastos, acompanhe metas e tome decisões financeiras com
          mais segurança — sem precisar conectar seu banco a mais um app.
        </p>
        <ButtonPrimary href={CHECKOUT_URL} className="mt-2">
          Assinar Soraia Pro agora
        </ButtonPrimary>
      </Container>
    </section>
  );
}
