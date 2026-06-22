// ============================================================
// Hero.tsx - Seccion principal de la landing page
// Contiene: Carrusel de banners, distintivos y tarjetas de valor
// Animaciones: transiciones de slide, scroll-reveal escalonado
// ============================================================
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  bannerSlides,
  distinctives,
  valueCards,
  type BannerSlide,
  type Distinctive,
  type ValueCard,
} from "@/src/data/nat";
import {
  FiAward,
  FiStar,
  FiZap,
  FiUsers,
  FiHeart,
  FiTarget,
  FiCpu,
  FiShield,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Mapeo de iconos para los distintivos (clave del icono -> componente React)
const distinctiveIcons: Record<string, React.ReactNode> = {
  experience: <FiAward className="h-6 w-6" />,
  specialty: <FiStar className="h-6 w-6" />,
  "minimally-invasive": <FiZap className="h-6 w-6" />,
  personalized: <FiUsers className="h-6 w-6" />,
};

// Mapeo de iconos para las tarjetas de valor
const valueIcons: Record<string, React.ReactNode> = {
  heartPulse: <FiHeart className="h-7 w-7" />,
  microscope: <FiTarget className="h-7 w-7" />,
  cpu: <FiCpu className="h-7 w-7" />,
  shield: <FiShield className="h-7 w-7" />,
  graduationCap: <FiBookOpen className="h-7 w-7" />,
};

// Variantes de animacion para las transiciones del carrusel
// Entrada y salida con desplazamiento horizontal y escala
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
};

export default function Hero() {
  // Estado del carrusel: [indice actual, direccion del movimiento]
  const [[page, direction], setPage] = useState([0, 0]);
  // Calculo del indice circular para que el carrusel sea infinito
  const slideIndex = ((page % bannerSlides.length) + bannerSlides.length) % bannerSlides.length;

  // Funcion para cambiar de slide (1 = siguiente, -1 = anterior)
  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  // Auto-play: cambia de slide automaticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const currentSlide: BannerSlide = bannerSlides[slideIndex];

  return (
    <section id="inicio">
      {/* ── Carrusel de banners (pantalla completa) ── */}
      <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        {/* Circulos decorativos de fondo (efecto glassmorphism) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-sky-400/5 blur-3xl" />
        </div>

        {/* Patron de cuadricula sutil de fondo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Contenido del slide actual */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {currentSlide.title}
              </motion.h1>
              <motion.p
                className="mt-6 text-lg sm:text-xl md:text-2xl text-sky-200/90 font-light max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                {currentSlide.subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Flechas de navegacion y puntos indicadores */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Anterior"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            {/* Puntos del carrusel - el activo se expande horizontalmente */}
            <div className="flex gap-2.5">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === slideIndex
                      ? "w-8 bg-gradient-to-r from-sky-400 to-cyan-300"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Ir a slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Siguiente"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Botones de accion (CTA) */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all hover:scale-105"
            >
              Agendar Cita
            </a>
            <a
              href="#sobre-mi"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white/90 hover:bg-white/10 transition-all"
            >
              Conoce más
            </a>
          </motion.div>
        </div>

        {/* Indicador de scroll animado (rebota verticalmente) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="h-2 w-1.5 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </div>

      {/* ── Tarjetas de distintivos (sobrepuestas al hero con -mt-16) ── */}
      <div className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {distinctives.map((item: Distinctive, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-lg shadow-sky-100/40 border border-sky-50 hover:shadow-xl hover:shadow-sky-200/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-600 group-hover:from-sky-100 group-hover:to-cyan-100 transition-colors">
                {distinctiveIcons[item.icon]}
              </div>
              <p className="text-sm font-medium text-slate-700 leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Seccion de propuesta de valor ("por que elegirnos") ── */}
      <div className="mt-24 mb-16 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wide uppercase mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
            Experiencia, calidad y confianza
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            en salud urológica
          </p>
        </motion.div>

        {/* Grid de tarjetas de valor con animacion escalonada al scroll */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((card: ValueCard, i: number) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/40 hover:border-sky-100 transition-all duration-300"
            >
              {/* Icono con cambio de color al hover (de claro a gradiente) */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-500 group-hover:from-sky-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300">
                {valueIcons[card.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
