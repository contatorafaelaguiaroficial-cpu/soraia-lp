import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 pb-28 sm:pb-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-base font-semibold text-white">Soraia</span>
          <p className="text-sm text-slate-500">
            © 2026 Soraia. Organização financeira com inteligência.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://soraiapp.com.br/login"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Já sou cliente
            </a>
            <a
              href="#top"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Política de Privacidade
            </a>
          </div>
        </div>

        <p className="border-t border-white/[0.06] pt-6 text-center text-xs leading-relaxed text-slate-600 sm:text-left">
          Aviso: a Soraia é uma ferramenta de organização financeira pessoal.
          Não oferecemos consultoria financeira, contábil, tributária ou de
          investimentos. As respostas são análises auxiliares, baseadas nas
          informações fornecidas por você, e não substituem orientação
          profissional. Decisões financeiras tomadas com base no uso do
          aplicativo são de responsabilidade exclusiva do usuário.
        </p>
      </Container>
    </footer>
  );
}
