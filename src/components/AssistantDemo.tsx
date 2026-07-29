import { Container } from "./ui";
import { Reveal } from "./Reveal";
import { AssistantChatDemo } from "./AssistantChatDemo";

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

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

const suggestions = [
  "Quanto tenho disponível hoje?",
  "Quais são meus próximos compromissos?",
  "Como ficará meu saldo depois das contas?",
  "Posso gastar R$ 500,00 hoje?",
];

export function AssistantDemo() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <div className="flex max-w-lg flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-teal-300/80">
            Tela do assistente
          </span>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Pergunte de verdade. Receba uma resposta de verdade.
          </h2>
          <p className="text-sm text-slate-400">
            Faça perguntas usando seus dados financeiros reais — sem análise
            genérica, sem resposta de calendário.
          </p>
        </div>

        <Reveal className="mx-auto grid w-full max-w-5xl gap-4 rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4 shadow-[0_40px_80px_-40px_rgba(139,92,246,0.35)] sm:p-6 lg:grid-cols-5">
          <div className="card-surface flex flex-col gap-4 rounded-2xl p-5 lg:col-span-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-400/15 text-violet-300">
              <IconSparkles />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Perguntas sugeridas
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                Por onde começar?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                A Soraia analisa saldo atual, valores futuros e compromissos
                pendentes.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {suggestions.map((s, i) => (
                <div
                  key={s}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${
                    i === 3
                      ? "border-violet-400/30 bg-violet-400/[0.08] text-white"
                      : "border-white/[0.06] bg-white/[0.02] text-slate-300"
                  }`}
                >
                  {s}
                  <span className="text-slate-500">
                    <IconArrow />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface flex flex-col rounded-2xl p-5 lg:col-span-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-teal-300 text-slate-950">
                  <IconSparkles />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Soraia</p>
                  <p className="text-xs text-slate-500">
                    Assistente financeira pessoal
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Dados conectados
              </span>
            </div>

            <AssistantChatDemo />

            <div className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5">
              <span className="flex-1 text-sm text-slate-500">
                Pergunte sobre seu saldo, contas ou uma possível compra...
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-slate-300">
                <IconMic />
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 to-teal-300 text-slate-950">
                →
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-600">
              As respostas são análises auxiliares e não substituem
              orientação profissional.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
