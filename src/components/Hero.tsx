import { Badge, ButtonPrimary, ButtonSecondary, Container } from "./ui";

const trustItems = [
  "Não pedimos acesso ao seu banco",
  "Sem fidelidade",
  "Menos de R$ 0,67 por dia no Pro",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="glow-violet pointer-events-none absolute inset-x-0 -top-40 h-[560px]"
      />
      <div
        aria-hidden
        className="glow-teal pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Badge>Sua assistente financeira pessoal</Badge>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Descubra na hora se pode gastar{" "}
          <span className="gradient-text">— sem abrir planilha</span>, sem
          fazer conta.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Fale com a Soraia como falaria com alguém de confiança. Conte um
          gasto por texto ou áudio e saiba, em segundos, como isso muda seu
          saldo — sem conectar sua conta bancária, sem senha, sem burocracia.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonPrimary href="#planos">Criar conta grátis</ButtonPrimary>
          <ButtonSecondary href="#planos">
            Conhecer o Soraia Pro — R$ 19,90/mês
          </ButtonSecondary>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 shrink-0 text-teal-300"
              >
                <path
                  d="M4 10.5L8 14.5L16 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
