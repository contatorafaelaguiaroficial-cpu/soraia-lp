import { Container, SectionHeading } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const pains = [
  {
    title: "O dinheiro entra, mas você não sabe para onde foi",
    text: "Gastos pequenos se acumulam e, quando o mês termina, o saldo não faz sentido.",
  },
  {
    title: "As contas chegam antes do seu planejamento",
    text: "Você toma decisões no susto porque não consegue visualizar os próximos compromissos.",
  },
  {
    title: "Organizar tudo manualmente cansa",
    text: "Planilhas e anotações dependem de tempo, disciplina e uma rotina que quase nunca acontece.",
  },
];

const audience = [
  "Recebe de mais de uma fonte e perde o fio da meada",
  "Já tentou planilha, app ou caderno e não manteve a rotina",
  "Prefere contar o que aconteceu em vez de preencher formulário",
];

export function PainSection() {
  return (
    <section id="problema" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          badge="O problema não é só gastar"
          title="O problema é não saber o impacto antes de gastar."
          description="Sem uma visão clara, qualquer decisão financeira vira uma tentativa."
        />

        <RevealGroup className="grid w-full gap-6 sm:grid-cols-3">
          {pains.map((pain, i) => (
            <RevealItem
              key={pain.title}
              className="card-surface flex flex-col gap-4 rounded-2xl p-6"
            >
              <span className="text-xs font-medium text-slate-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-white">
                {pain.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {pain.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="w-full rounded-3xl border border-white/[0.07] bg-gradient-to-br from-violet-500/[0.08] to-teal-400/[0.05] p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-white">
                Feita pra quem já tentou controlar o dinheiro e desistiu.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Se você recebe de mais de uma fonte, mistura contas pessoais
                com informais, ou já abriu uma planilha três vezes esse ano e
                nunca voltou — a Soraia foi pensada pra você. Sem conectar
                banco, sem aprender ferramenta nova: você só conta o que
                aconteceu, do seu jeito.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-300"
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
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
