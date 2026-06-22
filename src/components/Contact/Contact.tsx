// ============================================================
// Contact.tsx - Seccion de contacto
// Muestra: ubicacion, telefonos, email, redes sociales y mapa
// Layout: dos columnas (info + mapa de Google embebido)
// ============================================================
"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/src/data/nat";
import { FiMapPin, FiPhone, FiAlertCircle, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Mapeo de iconos para redes sociales
const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF className="h-5 w-5" />,
  instagram: <FaInstagram className="h-5 w-5" />,
  whatsapp: <FaWhatsapp className="h-5 w-5" />,
};

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-50/60 blur-3xl" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-50/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Encabezado de la seccion */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-600 tracking-wide uppercase mb-4">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">¿Listo para agendar tu cita?</h2>
          <p className="mt-3 text-lg text-slate-500 max-w-xl mx-auto">Estoy aquí para ayudarte. Contáctame y con gusto te atenderé</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Columna izquierda: tarjetas de informacion de contacto */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            {/* Tarjeta de ubicacion */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-500 flex-shrink-0">
                <FiMapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Ubicación</p>
                <p className="text-sm text-slate-500 leading-relaxed">{contactInfo.address}</p>
              </div>
            </div>

            {/* Tarjeta de telefono de consultorio */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-500 flex-shrink-0">
                <FiPhone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Teléfono de consultorio</p>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors">{contactInfo.phone}</a>
              </div>
            </div>

            {/* Tarjeta de urgencias (color ambar para destacar) */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-amber-500 flex-shrink-0">
                <FiAlertCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Urgencias</p>
                <a href={`tel:${contactInfo.emergencyPhone.replace(/\s/g, "")}`} className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">{contactInfo.emergencyPhone}</a>
              </div>
            </div>

            {/* Tarjeta de correo electronico */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-500 flex-shrink-0">
                <FiMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Correo electrónico</p>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors">{contactInfo.email}</a>
              </div>
            </div>

            {/* Iconos de redes sociales */}
            <div className="flex items-center gap-3 pt-2">
              {contactInfo.socialLinks.map((social) => (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 shadow-sm hover:text-sky-600 hover:border-sky-200 hover:shadow-md transition-all">
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha: mapa de Google embebido */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-sky-50/40 h-[400px] lg:h-full min-h-[350px]">
            <iframe src={contactInfo.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación del consultorio" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
