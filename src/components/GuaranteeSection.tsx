import { Container } from "./ui";
import { Reveal } from "./Reveal";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5l2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuaranteeSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-b from-emerald-400/[0.06] to-transparent p-10 text-center sm:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            <IconShield />
          </div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            7 dias de garantia incondicional.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            Assinou o Soraia Pro e não era o que você esperava? Devolvemos
            100% do seu dinheiro, sem perguntas e sem burocracia. O risco é
            nosso, não seu.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
