import { Container, SectionHeading } from "./ui";

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-300">
      <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-teal-300">
        <path
          d="M4 10.5L8 14.5L16 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </li>
  );
}

export function PricingSection() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          badge="Escolha como começar"
          title="Comece grátis. Evolua quando fizer sentido."
        />

        <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
          <div className="card-surface flex flex-col gap-6 rounded-3xl p-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Soraia Free</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white">R$ 0</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Para conhecer o aplicativo e começar a organizar suas
                finanças manualmente.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              <CheckItem>Dashboard financeiro</CheckItem>
              <CheckItem>Cadastro manual de movimentações</CheckItem>
              <CheckItem>Agenda financeira</CheckItem>
              <CheckItem>Metas e aportes</CheckItem>
              <CheckItem>10 mensagens de texto por mês</CheckItem>
            </ul>

            <a
              href="#top"
              className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
            >
              Criar conta grátis
            </a>
          </div>

          <div className="relative flex flex-col gap-6 rounded-3xl border border-violet-400/30 bg-gradient-to-b from-violet-500/[0.1] to-teal-400/[0.04] p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_30px_60px_-30px_rgba(139,92,246,0.5)]">
            <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-gradient-to-r from-violet-400 to-teal-300 px-3 py-1 text-xs font-semibold text-slate-950">
              Mais completo
            </span>

            <div>
              <h3 className="text-lg font-semibold text-white">Soraia Pro</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white">
                  R$ 19,90
                </span>
                <span className="text-sm text-slate-400">/mês</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Para transformar a Soraia em parte da sua rotina financeira.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              <CheckItem>Tudo do plano Free</CheckItem>
              <CheckItem>Conversas sem limite prático</CheckItem>
              <CheckItem>Mensagens por áudio</CheckItem>
              <CheckItem>Registro de gastos pelo chat</CheckItem>
              <CheckItem>Criação de metas e aportes pelo chat</CheckItem>
              <CheckItem>Análises, alertas e previsões financeiras</CheckItem>
            </ul>

            <a
              href="#top"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
            >
              Assinar Soraia Pro
            </a>
            <p className="text-center text-xs text-slate-500">
              Menos de R$ 0,67 por dia · Sem fidelidade, cancele quando quiser
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
