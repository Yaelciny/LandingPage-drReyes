// ============================================================
// Treatments.tsx - Seccion de procedimientos y tratamientos
// Muestra 10 tarjetas interactivas con iconos y descripcion
// Animacion: scroll-reveal escalonado + hover con cambio de color
// ============================================================
"use client";

import { motion } from "framer-motion";
import { procedures, type Procedure } from "@/src/data/nat";
import { FiActivity, FiZap, FiHeart, FiShield, FiTarget, FiStar, FiCrosshair, FiCircle, FiScissors, FiCheck } from "react-icons/fi";

// Mapeo de iconos para cada procedimiento medico
// La clave corresponde al campo "icon" de cada Procedure en nat.ts
const procIcons: Record<string, React.ReactNode> = {
  kidney: <FiActivity className="h-6 w-6" />,
  laser: <FiZap className="h-6 w-6" />,
  prostate: <FiHeart className="h-6 w-6" />,
  bladder: <FiShield className="h-6 w-6" />,
  urethra: <FiTarget className="h-6 w-6" />,
  varicocele: <FiStar className="h-6 w-6" />,
  prostateCancer: <FiCrosshair className="h-6 w-6" />,
  renalTumor: <FiCircle className="h-6 w-6" />,
  circumcision: <FiScissors className="h-6 w-6" />,
  vasectomy: <FiCheck className="h-6 w-6" />,
};

export default function Treatments() {
  return (
    <section id="tratamientos" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Fondos decorativos difuminados */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-sky-50/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-50/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Encabezado de la seccion */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wide uppercase mb-4">Especialidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">Procedimientos y Tratamientos</h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">Soluciones urológicas modernas con enfoque en tu bienestar y recuperación</p>
        </motion.div>

        {/* Grid de tarjetas de procedimientos (3 columnas en desktop) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map((proc: Procedure, i: number) => (
            <motion.div key={proc.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group relative rounded-2xl bg-white p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/40 hover:border-sky-100 hover:-translate-y-1 transition-all duration-300">
              {/* Icono con efecto de cambio de color al hover */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-500 group-hover:from-sky-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300">
                {procIcons[proc.icon]}
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{proc.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{proc.description}</p>
              {/* Texto "Mas informacion" que aparece solo al hover */}
              <div className="mt-4 flex items-center gap-1 text-sky-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
