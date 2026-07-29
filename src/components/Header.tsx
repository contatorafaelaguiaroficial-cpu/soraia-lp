import { Container } from "./ui";

const links = [
  { label: "O problema", href: "#problema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#recursos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05060c]/80 backdrop-blur-lg">
      <Container className="flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-white">
            Soraia
          </span>
          <span className="hidden text-xs text-slate-400 sm:inline">
            Sua assistente financeira
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#planos"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
        >
          Assinar Soraia Pro
        </a>
      </Container>
    </header>
  );
}
