import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

function IconSparkles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M11 2.8a1 1 0 0 1 2 0l1 5.6a2 2 0 0 0 1.6 1.6l5.6 1a1 1 0 0 1 0 2l-5.6 1a2 2 0 0 0-1.6 1.6l-1 5.6a1 1 0 0 1-2 0l-1-5.6a2 2 0 0 0-1.6-1.6l-5.6-1a1 1 0 0 1 0-2l5.6-1a2 2 0 0 0 1.6-1.6l1-5.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 12-4-4-4 4M12 16V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8m-4-4 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendarClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M16 2v4M8 2v4M3 10h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 14v2.2l1.6 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconMic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M19 11a7 7 0 0 1-14 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const metrics = [
  { icon: <IconWallet />, tone: "text-violet-300 bg-violet-400/15", label: "Saldo disponível", value: 2480 },
  { icon: <IconUp />, tone: "text-emerald-300 bg-emerald-400/15", label: "Receitas do mês", value: 8868 },
  { icon: <IconDown />, tone: "text-red-300 bg-red-400/15", label: "Despesas do mês", value: 7147 },
  { icon: <IconCalendarClock />, tone: "text-orange-300 bg-orange-400/15", label: "Pagamentos futuros", value: 612 },
];

export function ProductMockup() {
  return (
    <section className="relative pb-24 sm:pb-32">
      <Container>
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-teal-300/80">
            Visão financeira
          </span>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            A tela real do seu dinheiro, sob controle
          </h2>
        </div>

        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_40px_80px_-40px_rgba(139,92,246,0.35)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-slate-500">
              soraiapp.com.br/painel
            </span>
          </div>

          <div className="bg-gradient-to-b from-white/[0.03] to-transparent p-5 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-violet-300">
                  <IconSparkles /> Visão financeira
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Olá, você.
                  <br />
                  <span className="gradient-text">
                    Sua vida financeira está sob controle.
                  </span>
                </h3>
                <p className="max-w-sm text-sm text-slate-400">
                  Suas movimentações estão organizadas e não existem
                  compromissos futuros pendentes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
                    Ver minhas finanças →
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white">
                    Abrir agenda
                  </span>
                </div>
              </div>

              <div className="relative mx-auto flex h-44 w-44 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-teal-400/10">
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/10 bg-[#0a0d18] text-center">
                  <span className="text-[11px] text-slate-400">Saldo atual</span>
                  <CountUp
                    to={2480}
                    prefix="R$ "
                    className="text-xl font-extrabold text-white"
                  />
                  <span className="text-[10px] text-slate-500">
                    movimentações efetivadas
                  </span>
                </div>
                <div className="absolute -top-2 -right-4 rounded-xl border border-white/10 bg-[#0d1120] px-3 py-2 text-left shadow-lg">
                  <p className="text-[10px] text-slate-500">Saldo previsto</p>
                  <p className="text-xs font-bold text-white">R$ 2.980</p>
                </div>
                <div className="absolute -bottom-2 -left-6 rounded-xl border border-white/10 bg-[#0d1120] px-3 py-2 text-left shadow-lg">
                  <p className="text-[10px] text-slate-500">Compromissos</p>
                  <p className="text-xs font-bold text-white">2</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="card-surface flex flex-col gap-2 rounded-xl p-3.5"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${m.tone}`}
                  >
                    {m.icon}
                  </div>
                  <p className="text-[11px] text-slate-500">{m.label}</p>
                  <CountUp
                    to={m.value}
                    prefix="R$ "
                    className="text-sm font-bold text-white"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="card-surface rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Previsão financeira
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Depois dos próximos compromissos
                    </p>
                  </div>
                  <IconCalendarClock />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xs text-slate-500">Saldo previsto</span>
                  <CountUp
                    to={2980}
                    prefix="R$ "
                    className="text-2xl font-extrabold text-white"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Valores a receber</span>
                    <span className="font-semibold text-emerald-300">
                      +R$ 700
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Valores a pagar</span>
                    <span className="font-semibold text-red-300">
                      -R$ 200
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-surface rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Briefing da Soraia
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Análise rápida
                    </p>
                  </div>
                  <div className="text-violet-300">
                    <IconSparkles />
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-violet-400/15 bg-violet-400/[0.06] p-3.5">
                  <div className="mt-0.5 text-violet-300">
                    <IconSparkles />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Delivery consumiu 18% a mais esse mês
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      Se continuar nesse ritmo, sua reserva de emergência
                      atrasa cerca de 2 semanas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5">
              <span className="text-violet-300">
                <IconSparkles />
              </span>
              <span className="flex-1 text-sm text-slate-500">
                Converse com a Soraia...
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-slate-300">
                <IconMic />
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 to-teal-300 text-slate-950">
                →
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
