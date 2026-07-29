import { ButtonPrimary, Container, SectionHeading } from "./ui";
import { RevealGroup, RevealItem } from "./Reveal";

const steps = [
  {
    title: "Conte o que aconteceu",
    text: "Mande uma mensagem de texto ou um áudio contando o gasto ou o recebimento, do jeito que você fala.",
  },
  {
    title: "A Soraia entende na hora",
    text: "Ela identifica valor, categoria e o que isso muda no seu saldo — sem você preencher nenhum campo.",
  },
  {
    title: "Seu painel se atualiza sozinho",
    text: "Saldo, metas e próximos compromissos ficam sempre certos, sem esforço extra da sua parte.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          badge="Simples assim"
          title="Três passos entre você e um dinheiro organizado."
          description="Sem curva de aprendizado, sem configuração complicada. Se você sabe mandar uma mensagem, você já sabe usar a Soraia."
        />

        <RevealGroup className="grid w-full gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <RevealItem
              key={step.title}
              className="card-surface relative flex flex-col gap-4 rounded-2xl p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-teal-400 text-sm font-bold text-slate-950">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-lg font-medium text-white">
            Esqueça a planilha.{" "}
            <span className="gradient-text">Fale com a Soraia.</span>
          </p>
          <ButtonPrimary href="https://pay.cakto.com.br/y6cwwbn_1005908">Começar agora</ButtonPrimary>
        </div>
      </Container>
    </section>
  );
}
