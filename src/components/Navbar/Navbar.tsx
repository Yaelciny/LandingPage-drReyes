// ============================================================
// Navbar.tsx - Barra de navegacion principal
// Efecto: transparente arriba, solido al hacer scroll
// Incluye menu hamburguesa para movil con animaciones
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, contactInfo } from "@/src/data/nat";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegacion suave al hacer clic en un link
  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-sky-100/40"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo y nombre del doctor */}
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center gap-2 group"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white font-bold text-lg shadow-md shadow-sky-200/50 group-hover:shadow-lg group-hover:shadow-sky-300/50 transition-shadow">
            FR
          </span>
          <div className="hidden sm:block">
            <p className={`text-sm font-bold leading-tight ${scrolled ? "text-slate-800" : "text-white"} transition-colors`}>
              Dr. Francisco Reyes
            </p>
            <p className={`text-[11px] ${scrolled ? "text-sky-600" : "text-sky-200"} transition-colors`}>
              Urólogo · Endourólogo
            </p>
          </div>
        </button>

        {/* Links de navegacion para escritorio */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled
                    ? "text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          {/* Boton de llamada (CTA principal) */}
          <li className="ml-2">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200/50 hover:shadow-lg hover:shadow-sky-300/60 transition-all hover:scale-105"
            >
              <FiPhone className="h-4 w-4" />
              Llamar
            </a>
          </li>
        </ul>

        {/* Boton hamburguesa para movil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-slate-700 hover:bg-sky-50" : "text-white hover:bg-white/10"
            }`}
          aria-label="Abrir menú"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu desplegable para movil con animacion de altura */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-sky-100"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {/* Links con animacion escalonada */}
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              {/* Boton de llamada en movil */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-2"
              >
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white"
                >
                  <FiPhone className="h-4 w-4" />
                  Llamar ahora
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
