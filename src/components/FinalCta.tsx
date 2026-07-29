import { Badge, ButtonPrimary, Container } from "./ui";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="glow-violet pointer-events-none absolute inset-x-0 top-0 h-[400px]"
      />
      <Container>
        <Reveal className="relative flex flex-col items-center gap-6 rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-16 text-center sm:px-16">
          <Badge>Chega de cuidar do dinheiro no improviso</Badge>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Pronto pra parar de descobrir tarde demais?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Teste o Soraia Pro por 7 dias. Se não for pra você, devolvemos
            100% do seu dinheiro — sem perguntas, sem burocracia.
          </p>
          <ButtonPrimary href="#planos" className="mt-2">
            Quero minha Soraia agora
          </ButtonPrimary>
        </Reveal>
      </Container>
    </section>
  );
}
