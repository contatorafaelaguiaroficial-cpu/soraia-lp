import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function AudioSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <SectionHeading
          align="left"
          badge="Falar é mais rápido"
          title="Uma mensagem de segundos pode evitar um gasto esquecido."
          description="No Soraia Pro, você registra movimentações e conversa com a assistente usando sua própria voz — sem parar o que está fazendo pra abrir um app e preencher campos."
        />

        <Reveal className="mx-auto w-full max-w-sm">
          <div className="card-surface rounded-3xl p-6">
            <p className="text-sm font-medium text-white">Mensagem por áudio</p>

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-teal-300 text-slate-950">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M8 5v14l11-7-11-7Z" />
                </svg>
              </div>
              <div className="flex flex-1 items-center gap-[3px]">
                {[6, 10, 16, 9, 20, 12, 7, 15, 8, 18, 10, 6, 13, 9].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="wave-bar w-[3px] rounded-full bg-gradient-to-t from-violet-400/70 to-teal-300/70"
                      style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                    />
                  )
                )}
              </div>
              <span className="text-xs text-slate-500">00:08</span>
            </div>

            <p className="mt-4 text-sm italic leading-relaxed text-slate-400">
              &ldquo;Paguei cento e vinte reais de internet hoje.&rdquo;
            </p>

            <Reveal delay={0.3} className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-3 text-sm font-medium text-emerald-300">
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
                <path
                  d="M4 10.5L8 14.5L16 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Despesa registrada com sucesso
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
