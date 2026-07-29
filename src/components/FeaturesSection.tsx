import { ButtonPrimary, Container, SectionHeading } from "./ui";
import { RevealGroup, RevealItem } from "./Reveal";

const features = [
  {
    title: "Saiba se pode gastar, na hora",
    text: "Pergunte antes de comprar e receba uma resposta clara sobre o impacto no seu saldo — não só o número, o contexto.",
  },
  {
    title: "Registre sem digitar nada",
    text: "No Soraia Pro, fale a movimentação em um áudio de segundos e deixe a assistente organizar os dados.",
  },
  {
    title: "Nunca mais perca uma conta de vista",
    text: "Acompanhe entradas, saídas, valores pagos, recebidos e pendentes num só lugar.",
  },
  {
    title: "Transforme planos em metas de verdade",
    text: "Crie objetivos, registre aportes e acompanhe quanto falta para chegar lá.",
  },
  {
    title: "Antecipe o aperto antes que ele chegue",
    text: "Visualize sua situação atual e o impacto real dos seus próximos compromissos.",
  },
  {
    title: "Tudo em uma conversa só",
    text: "Assistente, metas, agenda e controle financeiro conectados numa experiência simples.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          badge="Simples por fora. Inteligente por dentro."
          title="Você não precisa aprender finanças para começar a se organizar."
          description="A Soraia transforma informações comuns em uma visão financeira mais prática, clara e fácil de acompanhar."
        />

        <RevealGroup className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <RevealItem
              key={feature.title}
              className="card-surface flex flex-col gap-3 rounded-2xl p-6 transition-colors hover:bg-white/[0.05]"
            >
              <span className="text-xs font-medium text-teal-300/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <ButtonPrimary href="#planos">
          Quero controlar meu dinheiro agora
        </ButtonPrimary>
      </Container>
    </section>
  );
}
