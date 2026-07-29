import { Badge, ButtonPrimary, Container } from "./ui";
import { RevealGroup, RevealItem } from "./Reveal";

const trustItems = [
  "Não pedimos acesso ao seu banco",
  "Garantia incondicional de 7 dias",
  "Cancele quando quiser",
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

      <Container>
        <RevealGroup
          className="relative flex flex-col items-center gap-8 text-center"
          stagger={0.12}
        >
          <RevealItem>
            <Badge>Sua assistente financeira pessoal</Badge>
          </RevealItem>

          <RevealItem>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              A assistente que cuida do seu dinheiro{" "}
              <span className="gradient-text">
                enquanto você vive a sua vida.
              </span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Conte um gasto por texto ou áudio pra Soraia. Ela identifica
              padrões, avisa riscos e te diz o que está acontecendo com seu
              saldo — antes que você precise perguntar. Sem conectar banco,
              sem planilha.
            </p>
          </RevealItem>

          <RevealItem>
            <ButtonPrimary href="https://pay.cakto.com.br/y6cwwbn_1005908">
              Quero ativar a Soraia
            </ButtonPrimary>
          </RevealItem>

          <RevealItem className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
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
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
