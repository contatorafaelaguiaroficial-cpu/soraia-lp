import { Container, SectionHeading } from "./ui";
import { RevealGroup, RevealItem } from "./Reveal";

const points = [
  {
    title: "Sem senha de banco",
    text: "Diferente de apps que se conectam à sua conta, a Soraia funciona só com o que você conta. Zero acesso bancário, zero risco nesse sentido.",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Cancele sem burocracia",
    text: "Assinatura mensal, sem fidelidade e sem multa. Você cancela quando quiser, direto no app.",
    icon: (
      <path
        d="M12 8v5M12 16h.01M4 6l8-3 8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Seus dados, sob seu controle",
    text: "Você pode apagar seu histórico e sua conta a qualquer momento.",
    icon: (
      <path
        d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.8 12.1a2 2 0 0 1-2 1.9H9.8a2 2 0 0 1-2-1.9L7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function TrustSection() {
  return (
    <section id="seguranca" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          badge="Transparência antes de tudo"
          title="Você conta. Nós nunca acessamos."
          description="A Soraia nunca pede login, senha ou acesso à sua conta bancária. Você decide o que registrar e quando — seus dados financeiros ficam só entre você e a Soraia, protegidos e nunca compartilhados com terceiros."
        />

        <RevealGroup className="grid w-full gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <RevealItem
              key={point.title}
              className="card-surface flex flex-col gap-4 rounded-2xl p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-400/20 to-teal-300/20 text-teal-200">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  {point.icon}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {point.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
