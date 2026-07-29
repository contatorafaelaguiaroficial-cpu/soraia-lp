"use client";

import { useState } from "react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Preciso conectar minha conta bancária?",
    a: "Não. Você registra suas movimentações por texto ou áudio, no seu ritmo. A Soraia nunca pede login ou senha do seu banco.",
  },
  {
    q: "O que a assinatura Pro inclui?",
    a: "Dashboard financeiro completo, agenda e metas, conversas sem limite prático por texto e áudio, e criação de movimentações, metas e aportes direto pelo chat.",
  },
  {
    q: "Como o plano é ativado depois da compra?",
    a: "Faça o cadastro usando o mesmo e-mail informado no pagamento. A assinatura Pro será vinculada automaticamente.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias pra testar o Soraia Pro. Se não for pra você, devolvemos 100% do valor pago, sem perguntas.",
  },
  {
    q: "Posso cancelar depois?",
    a: "Sim. A assinatura é mensal, sem fidelidade, e pode ser cancelada a qualquer momento direto no app.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          badge="Perguntas frequentes"
          title="Tudo o que você precisa saber."
        />

        <Reveal className="w-full max-w-2xl divide-y divide-white/[0.07] card-surface rounded-2xl">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white sm:text-base">
                    {faq.q}
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate-400">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
