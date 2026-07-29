"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STEP_TIMES = [0, 1100, 2300, 3900];
const LOOP_AFTER = 7500;

function TypingDots() {
  return (
    <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.03] px-4 py-3.5">
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

const bubbleMotion = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

export function AssistantChatDemo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers = STEP_TIMES.map((t, i) =>
      setTimeout(() => setStep(i), t)
    );
    const loop = setInterval(() => {
      setStep(0);
      STEP_TIMES.forEach((t, i) => {
        if (i === 0) return;
        setTimeout(() => setStep(i), t);
      });
    }, LOOP_AFTER);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-1 flex-col gap-3 py-5">
      <motion.div
        {...bubbleMotion}
        className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300"
      >
        Olá! Eu sou a Soraia. Posso analisar seu saldo, compromissos futuros
        e movimentações para ajudar você a tomar decisões financeiras mais
        conscientes.
      </motion.div>

      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="question"
            {...bubbleMotion}
            className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-white/[0.08] px-4 py-3 text-sm text-white"
          >
            Posso gastar R$ 500,00 hoje?
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {step === 2 && (
          <motion.div key="typing" {...bubbleMotion}>
            <TypingDots />
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div
            key="answer"
            {...bubbleMotion}
            className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-300"
          >
            Seu saldo atual permite essa compra, mas seus próximos
            compromissos pedem atenção. Depois da compra, sua margem ficará
            menor.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
