// ============================================================
// FAQ.tsx - Seccion de preguntas frecuentes
// Usa un patron de acordeon: solo una pregunta abierta a la vez
// Animacion: expand/collapse suave con Framer Motion
// ============================================================
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, type FaqItem } from "@/src/data/nat";
import { FiChevronDown } from "react-icons/fi";

// Componente individual de cada pregunta del acordeon
// Recibe el item, si esta abierto y la funcion para alternar
function AccordionItem({ item, isOpen, toggle }: { item: FaqItem; isOpen: boolean; toggle: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="border-b border-slate-100 last:border-0">
      {/* Boton de la pregunta */}
      <button onClick={toggle} className="flex w-full items-center justify-between gap-4 py-6 text-left group" aria-expanded={isOpen}>
        <span className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-sky-600" : "text-slate-700 group-hover:text-sky-600"}`}>
          {item.question}
        </span>
        {/* Icono de flecha que rota 180 grados al abrir */}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-sky-100 text-sky-600" : "bg-slate-100 text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500"}`}>
          <FiChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      {/* Contenido de la respuesta con animacion de altura */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pb-6 text-slate-500 leading-relaxed text-sm sm:text-base pr-12">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  // Solo una pregunta abierta a la vez (null = todas cerradas)
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-sky-50/20 to-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky-50/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Encabezado de la seccion */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wide uppercase mb-4">Información</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">Preguntas Frecuentes</h2>
          <p className="mt-3 text-lg text-slate-500">Resuelve tus dudas más comunes sobre salud urológica</p>
        </motion.div>

        {/* Contenedor del acordeon */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 shadow-lg shadow-sky-50/40">
          {faqItems.map((item: FaqItem) => (
            <AccordionItem key={item.id} item={item} isOpen={openId === item.id} toggle={() => toggle(item.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
