// ============================================================
// WhatsAppButton.tsx - Boton flotante de WhatsApp
// Posicion fija en esquina inferior derecha (z-50)
// Animacion: aparece con efecto spring despues de 1.5 segundos
// ============================================================
"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/src/data/nat";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Busca el enlace de WhatsApp en las redes sociales del archivo de datos
  const whatsappLink = contactInfo.socialLinks.find((s) => s.icon === "whatsapp");
  if (!whatsappLink) return null;

  return (
    <motion.a
      href={whatsappLink.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
    >
      <FaWhatsapp className="h-7 w-7" />
    </motion.a>
  );
}
