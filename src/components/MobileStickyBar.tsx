export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-[#05060c]/95 px-4 py-3 backdrop-blur-lg sm:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">
            Soraia Pro — R$ 19,90/mês
          </p>
          <p className="text-xs text-slate-400">Áudio e experiência completa</p>
        </div>
        <a
          href="#planos"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
        >
          Assinar
        </a>
      </div>
    </div>
  );
}
