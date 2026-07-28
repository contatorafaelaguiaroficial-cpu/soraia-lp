import {
  ArrowRight,
  AudioLines,
  BrainCircuit,
  Check,
  CircleDollarSign,
  Clock3,
  MessageCircleMore,
  Mic,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const CHECKOUT =
  "https://pay.cakto.com.br/y6cwwbn_1005908";

const LOGIN =
  "https://soraiapp.com.br/login";

const dores = [
  {
    icon: TrendingDown,
    titulo: "O dinheiro entra, mas você não sabe para onde foi",
    texto:
      "Gastos pequenos se acumulam e, quando o mês termina, o saldo não faz sentido.",
  },
  {
    icon: Clock3,
    titulo: "As contas chegam antes do seu planejamento",
    texto:
      "Você toma decisões no susto porque não consegue visualizar os próximos compromissos.",
  },
  {
    icon: BrainCircuit,
    titulo: "Organizar tudo manualmente cansa",
    texto:
      "Planilhas e anotações dependem de tempo, disciplina e uma rotina que quase nunca acontece.",
  },
];

const recursos = [
  {
    icon: MessageCircleMore,
    titulo: "Converse naturalmente",
    texto:
      "Pergunte quanto gastou, como ficará seu saldo ou quais contas estão próximas.",
  },
  {
    icon: Mic,
    titulo: "Registre por áudio",
    texto:
      "No Soraia Pro, fale a movimentação e deixe a assistente organizar os dados.",
  },
  {
    icon: CircleDollarSign,
    titulo: "Organize receitas e despesas",
    texto:
      "Acompanhe entradas, saídas, valores pagos, recebidos e pendentes.",
  },
  {
    icon: Target,
    titulo: "Transforme planos em metas",
    texto:
      "Crie objetivos, registre aportes e acompanhe quanto falta para chegar lá.",
  },
  {
    icon: WalletCards,
    titulo: "Entenda seu saldo",
    texto:
      "Visualize sua situação atual e o impacto dos próximos compromissos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Tudo em um só lugar",
    texto:
      "Assistente, metas, agenda e controle financeiro conectados em uma experiência simples.",
  },
];

const faq = [
  {
    pergunta: "O que está disponível no plano Free?",
    resposta:
      "O Free permite usar o dashboard, cadastrar movimentações manualmente, acompanhar metas e conversar por texto com limite de 10 mensagens mensais.",
  },
  {
    pergunta: "O que o Soraia Pro libera?",
    resposta:
      "O Pro libera mensagens por áudio, conversas sem limite prático e criação de movimentações, metas e aportes diretamente pelo chat.",
  },
  {
    pergunta: "Como o plano é ativado depois da compra?",
    resposta:
      "Faça o cadastro usando o mesmo e-mail informado no pagamento. A assinatura Pro será vinculada automaticamente.",
  },
  {
    pergunta: "Posso cancelar depois?",
    resposta:
      "Sim. A assinatura é mensal e pode ser cancelada conforme as condições apresentadas no checkout.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09070e] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#09070e]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-600 shadow-lg shadow-violet-950/40">
              <Sparkles size={19} />
            </span>

            <span>
              <strong className="block text-sm font-black tracking-[0.18em]">
                SORAIA
              </strong>
              <small className="text-zinc-400">
                sua assistente financeira
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#problema">O problema</a>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
            <a href="#faq">Dúvidas</a>
          </nav>

          <a
            href={CHECKOUT}
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 py-3 text-sm font-extrabold shadow-lg shadow-violet-950/40"
          >
            Assinar Pro
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-200">
            <Sparkles size={14} />
            Inteligência para suas finanças
          </span>

          <h1 className="mt-7 max-w-[760px] text-4xl font-black leading-[1.02] tracking-[-.05em] sm:text-5xl lg:text-[62px]">
            Pare de descobrir tarde demais{" "}
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              para onde seu dinheiro foi.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Registre gastos, acompanhe contas, organize metas e
            entenda como seu saldo ficará conversando com uma
            assistente financeira pelo celular.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CHECKOUT}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-7 py-4 text-sm font-black shadow-[0_20px_60px_rgba(109,40,217,.4)] transition hover:scale-[1.02]"
            >
              Assinar por R$ 19,90/mês
              <ArrowRight size={18} />
            </a>

            <a
              href={LOGIN}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-bold"
            >
              Criar conta grátis
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-xs text-zinc-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Sem fidelidade
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Menos de R$ 0,67 por dia
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Ativação automática
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute inset-12 rounded-full bg-violet-600/20 blur-[90px]" />

          <div className="relative rounded-[34px] border border-white/10 bg-white/[.06] p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)] backdrop-blur-xl">
            <div className="rounded-[29px] border border-white/8 bg-[#121019] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[.2em] text-violet-300">
                    Visão financeira
                  </span>
                  <h2 className="mt-2 text-lg font-extrabold">
                    Seu dinheiro sob controle
                  </h2>
                </div>

                <span className="rounded-2xl bg-violet-500/15 p-3 text-violet-200">
                  <WalletCards size={21} />
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/8 bg-white/[.04] p-5">
                  <span className="text-xs text-zinc-500">
                    Saldo disponível
                  </span>
                  <strong className="mt-3 block text-3xl font-black tracking-[-.05em]">
                    R$ 2.480
                  </strong>
                  <small className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                    <TrendingUp size={13} />
                    Cenário positivo
                  </small>
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/[.04] p-5">
                  <span className="text-xs text-zinc-500">
                    Reserva de emergência
                  </span>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
                  </div>

                  <div className="mt-3 flex justify-between text-sm">
                    <span className="text-zinc-300">Progresso</span>
                    <strong>64%</strong>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-white/8 bg-white/[.04] p-5">
                <span className="text-[10px] font-black uppercase tracking-[.18em] text-zinc-500">
                  Conversa com a Soraia
                </span>

                <p className="ml-auto mt-4 max-w-[85%] rounded-2xl rounded-tr-md bg-white/7 px-4 py-3 text-sm text-zinc-200">
                  Posso gastar R$ 500 hoje?
                </p>

                <p className="mt-3 max-w-[90%] rounded-2xl rounded-tl-md bg-violet-500/15 px-4 py-3 text-sm leading-6 text-violet-100">
                  Seu saldo atual permite essa compra, mas seus
                  próximos compromissos pedem atenção. Depois da
                  compra, sua margem ficará menor.
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <AudioLines
                      size={20}
                      className="text-violet-200"
                    />
                    <div>
                      <strong className="block text-sm">
                        Converse por áudio
                      </strong>
                      <small className="text-violet-100/70">
                        Exclusivo do Pro
                      </small>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <Target
                      size={20}
                      className="text-amber-200"
                    />
                    <div>
                      <strong className="block text-sm">
                        Metas inteligentes
                      </strong>
                      <small className="text-amber-100/70">
                        Objetivos mais claros
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[.2em] text-violet-300">
            O problema não é só gastar
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">
            O problema é não saber o impacto antes de gastar.
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-300">
            Sem uma visão clara, qualquer decisão financeira
            vira uma tentativa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dores.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.titulo}
                className="rounded-[30px] border border-white/8 bg-white/[.04] p-7"
              >
                <span className="inline-flex rounded-2xl bg-violet-500/12 p-3 text-violet-200">
                  <Icon size={22} />
                </span>

                <h3 className="mt-6 text-xl font-extrabold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {item.texto}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.2em] text-violet-300">
              Simples por fora. Inteligente por dentro.
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">
              Você não precisa aprender finanças para começar a se organizar.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-300">
              A Soraia transforma informações comuns em uma
              visão financeira mais prática, clara e fácil de
              acompanhar.
            </p>

            <a
              href={CHECKOUT}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-4 text-sm font-black"
            >
              Quero usar a Soraia
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recursos.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.titulo}
                  className="rounded-[27px] border border-white/8 bg-white/[.04] p-6"
                >
                  <span className="inline-flex rounded-2xl bg-white/6 p-3 text-violet-200">
                    <Icon size={21} />
                  </span>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    {item.texto}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[38px] border border-violet-400/20 bg-gradient-to-br from-violet-600/15 via-fuchsia-600/8 to-transparent p-8 sm:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-black uppercase tracking-[.2em] text-violet-200">
                Falar é mais rápido
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">
                Uma mensagem de segundos pode evitar um gasto esquecido.
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-200">
                No Soraia Pro, você registra movimentações e
                conversa com a assistente usando sua própria voz.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-bold">
                  <Mic size={18} className="text-violet-300" />
                  Mensagem por áudio
                </span>

                <small className="text-zinc-500">00:08</small>
              </div>

              <div className="my-10 flex h-28 items-center justify-center gap-2">
                {[30, 58, 82, 48, 70, 96, 54, 78, 42, 90, 60, 34].map(
                  (altura, index) => (
                    <span
                      key={index}
                      className="w-2 rounded-full bg-gradient-to-t from-violet-600 to-fuchsia-400"
                      style={{ height: `${altura}%` }}
                    />
                  ),
                )}
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <small className="font-black uppercase tracking-[.15em] text-violet-300">
                  Transcrição
                </small>

                <p className="mt-2 text-sm text-zinc-200">
                  “Paguei cento e vinte reais de internet hoje.”
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-emerald-500/10 p-4 text-emerald-200">
                <Check size={19} />
                <span className="text-sm font-bold">
                  Despesa registrada com sucesso
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[.2em] text-violet-300">
            Escolha como começar
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl">
            Conheça grátis. Evolua para a experiência completa.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <article className="rounded-[34px] border border-white/8 bg-white/[.04] p-8">
            <span className="text-sm font-extrabold text-zinc-300">
              Soraia Free
            </span>

            <h3 className="mt-3 text-4xl font-black">
              R$ 0
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Para conhecer o aplicativo e começar a organizar
              suas finanças manualmente.
            </p>

            <ul className="mt-7 space-y-4 text-sm text-zinc-200">
              {[
                "Dashboard financeiro",
                "Cadastro manual de movimentações",
                "Agenda financeira",
                "Metas e aportes",
                "10 mensagens de texto por mês",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={17} className="text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={LOGIN}
              className="mt-8 flex w-full items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-4 text-sm font-extrabold"
            >
              Criar conta grátis
            </a>
          </article>

          <article className="relative rounded-[34px] border border-violet-400/30 bg-gradient-to-b from-violet-500/16 to-fuchsia-500/8 p-8 shadow-[0_30px_100px_rgba(76,29,149,.3)]">
            <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-3 py-1 text-xs font-black">
              MAIS COMPLETO
            </span>

            <span className="text-sm font-extrabold text-violet-100">
              Soraia Pro
            </span>

            <h3 className="mt-3 text-4xl font-black">
              R$ 19,90
              <small className="ml-2 text-base font-semibold text-violet-100/70">
                /mês
              </small>
            </h3>

            <p className="mt-4 text-sm leading-7 text-violet-50/90">
              Para transformar a Soraia em parte da sua rotina
              financeira.
            </p>

            <ul className="mt-7 space-y-4 text-sm text-white">
              {[
                "Tudo do plano Free",
                "Conversas sem limite prático",
                "Mensagens por áudio",
                "Registro de gastos pelo chat",
                "Criação de metas e aportes pelo chat",
                "Análises, alertas e previsões financeiras",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={17} className="text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#211532]"
            >
              Assinar Soraia Pro
              <ArrowRight size={18} />
            </a>

            <p className="mt-3 text-center text-xs text-violet-100/60">
              Menos de R$ 0,67 por dia
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[.2em] text-violet-300">
            Perguntas frequentes
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-.05em]">
            Tudo o que você precisa saber.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <details
              key={item.pergunta}
              className="rounded-[25px] border border-white/8 bg-white/[.04] p-6"
            >
              <summary className="cursor-pointer list-none font-extrabold">
                {item.pergunta}
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-32 pt-14">
        <div className="rounded-[40px] border border-white/8 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/12 to-violet-600/20 p-9 text-center sm:p-14">
          <span className="text-xs font-black uppercase tracking-[.2em] text-violet-200">
            Chega de cuidar do dinheiro no improviso
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-.05em] sm:text-5xl">
            Comece agora a construir uma relação mais clara com seu dinheiro.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            Organize gastos, acompanhe metas e tome decisões
            financeiras com mais segurança usando a Soraia.
          </p>

          <a
            href={CHECKOUT}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-8 py-4 text-sm font-black shadow-[0_20px_60px_rgba(109,40,217,.4)]"
          >
            Assinar Soraia Pro agora
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-600">
              <Sparkles size={17} />
            </span>

            <strong>Soraia</strong>
          </div>

          <p className="text-xs text-zinc-500">
            © 2026 Soraia. Organização financeira com inteligência.
          </p>

          <a
            href={LOGIN}
            className="text-sm font-bold text-zinc-300"
          >
            Já sou cliente
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/8 bg-[#09070e]/95 p-4 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <strong className="block truncate text-sm">
              Soraia Pro — R$ 19,90/mês
            </strong>
            <small className="text-zinc-400">
              Áudio e experiência completa
            </small>
          </div>

          <a
            href={CHECKOUT}
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 py-3 text-sm font-black"
          >
            Assinar
          </a>
        </div>
      </div>
    </main>
  );
}
