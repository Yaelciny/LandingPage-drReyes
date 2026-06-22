// ============================================================
// AboutMe.tsx - Seccion "Sobre Mi" del doctor
// Muestra perfil, biografia y credenciales profesionales
// Animacion: entrada lateral izquierda/derecha al scroll
// ============================================================
"use client";

import { motion } from "framer-motion";
import { doctorProfile } from "@/src/data/nat";
import { FiFileText, FiAward } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white py-24 md:py-32">
      {/* Fondos decorativos difuminados */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-5 items-center">
          {/* Columna izquierda: foto/placeholder del doctor */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Anillo decorativo detras de la foto */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-200/50 to-cyan-200/50 blur-sm" />
              {/* Contenedor de la foto - reemplazar con next/image cuando haya foto real */}
              <div className="relative h-80 w-72 sm:h-96 sm:w-80 rounded-3xl bg-gradient-to-br from-sky-100 to-cyan-50 overflow-hidden border-2 border-white shadow-xl shadow-sky-100/50 flex items-end justify-center">
                <div className="flex flex-col items-center pb-8">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-300 to-cyan-200 mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">FR</span>
                  </div>
                  <p className="text-sky-700 font-semibold text-sm">{doctorProfile.specialty}</p>
                </div>
              </div>
              {/* Badge flotante con anios de experiencia */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-lg shadow-sky-100/40 border border-sky-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white">
                  <FiAward className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-800">11+</p>
                  <p className="text-[11px] text-slate-500">Años de exp.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna derecha: biografia y credenciales */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wide uppercase mb-4">Sobre Mí</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight mb-2">{doctorProfile.name}</h2>
            <p className="text-sky-600 font-medium text-lg mb-6">{doctorProfile.specialty}</p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">{doctorProfile.biography}</p>
            {/* Tarjetas de cedulas profesionales */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-sky-50/80 px-5 py-3 border border-sky-100">
                <FiFileText className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Cédula Profesional</p>
                  <p className="text-sm font-bold text-slate-800">{doctorProfile.cedulaProfesional}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-sky-50/80 px-5 py-3 border border-sky-100">
                <FiAward className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Cédula de Especialidad</p>
                  <p className="text-sm font-bold text-slate-800">{doctorProfile.cedulaEspecialidad}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
