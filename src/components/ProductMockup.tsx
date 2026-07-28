import { Container } from "./ui";

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

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

export function ProductMockup() {
  return (
    <section className="relative pb-24 sm:pb-32">
      <Container>
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-teal-300/80">
            Visão financeira
          </span>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Seu dinheiro sob controle
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 rounded-[2rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-4 sm:p-6 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="card-surface rounded-2xl p-5">
              <p className="text-sm text-slate-400">Saldo disponível</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                R$ 2.480
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Cenário positivo
              </span>
            </div>

            <div className="card-surface rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white">Reserva de emergência</p>
                <span className="text-sm font-semibold text-teal-300">64%</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Progresso</p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-violet-400 to-teal-300" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-surface rounded-2xl p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400/15 text-violet-300">
                  <IconMic />
                </div>
                <p className="mt-3 text-sm font-medium text-white">
                  Converse por áudio
                </p>
                <p className="mt-1 text-xs text-slate-500">Exclusivo do Pro</p>
              </div>
              <div className="card-surface rounded-2xl p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/15 text-teal-300">
                  <IconTarget />
                </div>
                <p className="mt-3 text-sm font-medium text-white">
                  Metas inteligentes
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Objetivos mais claros
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface flex flex-col rounded-2xl p-5 lg:col-span-3">
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-teal-300 text-sm font-semibold text-slate-950">
                S
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Conversa com a Soraia
                </p>
                <p className="text-xs text-emerald-300">● online agora</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-3 py-5">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-white/[0.08] px-4 py-3 text-sm text-white">
                Posso gastar R$ 500 hoje?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300">
                Seu saldo atual permite essa compra, mas seus próximos
                compromissos pedem atenção. Depois da compra, sua margem
                ficará menor.
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5">
              <span className="flex-1 text-sm text-slate-500">
                Mensagem para a Soraia...
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 to-teal-300 text-slate-950">
                <IconMic />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
