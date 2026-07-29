const items = [
  "Não pedimos acesso ao seu banco",
  "Garantia incondicional de 7 dias",
  "Cancele quando quiser, sem burocracia",
  "Sem senha de banco, nunca",
  "Seus dados sob seu controle",
  "Suporte direto no chat",
];

function IconDot() {
  return (
    <span className="mx-6 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-teal-300" />
  );
}

export function TrustTicker() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060c] to-transparent" />

      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center text-sm font-medium text-slate-300"
          >
            {item}
            <IconDot />
          </span>
        ))}
      </div>
    </div>
  );
}
