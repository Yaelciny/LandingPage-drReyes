// ============================================================
// Footer.tsx - Pie de pagina del sitio
// Contiene: marca, links de navegacion, contacto y redes
// Usa fondo oscuro (slate-900) para contraste con el contenido
// ============================================================
"use client";

import { contactInfo, navLinks } from "@/src/data/nat";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Mapeo de iconos de redes sociales (version pequena para footer)
const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF className="h-4 w-4" />,
  instagram: <FaInstagram className="h-4 w-4" />,
  whatsapp: <FaWhatsapp className="h-4 w-4" />,
};

export default function Footer() {
  // Navegacion suave al hacer clic en un link del footer
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna de marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 text-white font-bold text-sm">FR</span>
              <div>
                <p className="text-white font-bold text-sm">Dr. Francisco Reyes</p>
                <p className="text-sky-400 text-[11px]">Urólogo · Endourólogo</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">Atención urológica especializada en Guadalajara. Más de 11 años de experiencia en procedimientos de mínima invasión.</p>
          </div>

          {/* Columna de navegacion */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNav(link.href)} className="text-sm hover:text-sky-400 transition-colors">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de contacto y redes sociales */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Contacto</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-sky-400 transition-colors">Tel: {contactInfo.phone}</a>
              </li>
              <li>
                <a href={`tel:${contactInfo.emergencyPhone.replace(/\s/g, "")}`} className="hover:text-sky-400 transition-colors">Urg: {contactInfo.emergencyPhone}</a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-sky-400 transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
            {/* Iconos de redes sociales */}
            <div className="flex items-center gap-2.5 mt-5">
              {contactInfo.socialLinks.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white transition-all">
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior con copyright y cedulas */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Dr. Francisco Reyes. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-500">Cédula Prof. 5476703 · Cédula Esp. 9648583</p>
        </div>
      </div>
    </footer>
  );
}
