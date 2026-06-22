// ============================================================
// src/data/nat.ts
// Archivo centralizado de datos para la landing page
// Toda la informacion del Dr. Francisco Reyes se maneja aqui
// Los componentes importan desde este archivo (data-driven)
// ============================================================

/* ───────── Interfaces ───────── */

// Estructura de cada slide del carrusel principal
export interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
}

// Tarjetas de distintivos (experiencia, especialidad, etc.)
export interface Distinctive {
  id: number;
  icon: string;
  text: string;
}

// Tarjetas de propuesta de valor (por que elegirnos)
export interface ValueCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Perfil completo del doctor
export interface DoctorProfile {
  name: string;
  specialty: string;
  biography: string;
  cedulaProfesional: string;
  cedulaEspecialidad: string;
}

// Procedimiento o tratamiento medico
export interface Procedure {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Pregunta frecuente con su respuesta
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Enlace a red social
export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

// Informacion de contacto completa
export interface ContactInfo {
  address: string;
  addressShort: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  mapUrl: string;
  socialLinks: SocialLink[];
}

// Metadata del sitio para SEO
export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
}

// Enlace de navegacion del navbar
export interface NavLink {
  id: number;
  label: string;
  href: string;
}

/* ───────── Datos ───────── */

// Metadata para el <head> del sitio (SEO y OpenGraph)
export const siteMetadata: SiteMetadata = {
  title: "Dr. Francisco Reyes – Urólogo en Guadalajara",
  description:
    "Urólogo y Endourólogo especialista en Guadalajara. Más de 11 años de experiencia en procedimientos de mínima invasión, piedras en el riñón, próstata y salud masculina.",
  keywords: [
    "urólogo guadalajara",
    "endourólogo",
    "piedras en el riñón",
    "próstata",
    "cirugía mínima invasión",
    "Dr. Francisco Reyes",
    "urólogo jalisco",
    "salud masculina",
  ],
};

// Links del menu de navegacion principal
export const navLinks: NavLink[] = [
  { id: 1, label: "Inicio", href: "#inicio" },
  { id: 2, label: "Sobre Mí", href: "#sobre-mi" },
  { id: 3, label: "Tratamientos", href: "#tratamientos" },
  { id: 4, label: "Preguntas", href: "#faq" },
  { id: 5, label: "Contacto", href: "#contacto" },
];

// Slides del carrusel del Hero (3 banners rotativos)
export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Dr. Francisco Jesús Reyes Macías",
    subtitle: "Especialista en Urología y Endourología",
  },
  {
    id: 2,
    title: "Atención urológica especializada",
    subtitle:
      "Diagnóstico oportuno y tratamientos personalizados para cuidar tu salud.",
  },
  {
    id: 3,
    title: "Tecnología de vanguardia y procedimientos de mínima invasión",
    subtitle:
      "Soluciones modernas para una recuperación más rápida y segura.",
  },
];

// Distintivos que aparecen debajo del hero (4 tarjetas)
export const distinctives: Distinctive[] = [
  {
    id: 1,
    icon: "experience",
    text: "Más de 11 años de experiencia en Urología",
  },
  {
    id: 2,
    icon: "specialty",
    text: "Alta Especialidad en Endourología",
  },
  {
    id: 3,
    icon: "minimally-invasive",
    text: "Procedimientos de mínima invasión",
  },
  {
    id: 4,
    icon: "personalized",
    text: "Atención profesional y personalizada",
  },
];

// Tarjetas de valor (seccion "por que elegirnos")
export const valueCards: ValueCard[] = [
  {
    id: 1,
    icon: "heartPulse",
    title: "Atención especializada para cada paciente",
    description:
      "Escucho tus necesidades y te ofrezco un plan de tratamiento adaptado a tu situación particular.",
  },
  {
    id: 2,
    icon: "microscope",
    title: "Experiencia en procedimientos avanzados",
    description:
      "Cuento con amplia experiencia en el tratamiento de enfermedades urinarias, próstata, piedras en el riñón y salud masculina.",
  },
  {
    id: 3,
    icon: "cpu",
    title: "Tecnología moderna para mejores resultados",
    description:
      "Utilizo procedimientos de mínima invasión que favorecen una recuperación más rápida y cómoda.",
  },
  {
    id: 4,
    icon: "shield",
    title: "Compromiso con tu bienestar",
    description:
      "Mi prioridad es brindarte atención médica ética, profesional y basada en evidencia científica.",
  },
  {
    id: 5,
    icon: "graduationCap",
    title: "Actualización médica constante",
    description:
      "Mantengo una formación continua para ofrecer tratamientos seguros y actualizados.",
  },
];

// Perfil del doctor (seccion "Sobre Mi")
export const doctorProfile: DoctorProfile = {
  name: "Dr. Francisco Jesús Reyes Macías",
  specialty: "Urólogo y Endourólogo",
  biography:
    "Soy Médico Cirujano y Partero egresado de la Universidad de Guadalajara y especialista en Urología. Además, realicé una Alta Especialidad en Endourología avalada por la Universidad Nacional Autónoma de México (UNAM). Durante más de una década he brindado atención médica y quirúrgica a pacientes con enfermedades del aparato urinario y del sistema reproductor masculino. Mi práctica está enfocada en ofrecer diagnósticos precisos, tratamientos efectivos y procedimientos de mínima invasión que permitan una recuperación más rápida y una mejor calidad de vida. Creo firmemente que cada paciente merece una atención cercana, honesta y personalizada, por lo que me esfuerzo en acompañarlo durante todo su proceso de atención médica.",
  cedulaProfesional: "5476703",
  cedulaEspecialidad: "9648583",
};

// Lista de procedimientos medicos (10 tarjetas interactivas)
// El campo "icon" se mapea a iconos de react-icons en Treatments.tsx
export const procedures: Procedure[] = [
  {
    id: 1,
    icon: "kidney",
    title: "Cirugía Renal Percutánea para Piedras Grandes",
    description:
      "Tratamiento especializado para eliminar cálculos renales complejos mediante una pequeña punción, evitando procedimientos más invasivos.",
  },
  {
    id: 2,
    icon: "laser",
    title: "Eliminación de Piedras con Láser de Holmio",
    description:
      "Tecnología avanzada para fragmentar y eliminar cálculos urinarios de forma segura, precisa y con rápida recuperación.",
  },
  {
    id: 3,
    icon: "prostate",
    title: "Tratamiento para Crecimiento Prostático",
    description:
      "Procedimientos endoscópicos que ayudan a mejorar el flujo urinario y recuperar la calidad de vida.",
  },
  {
    id: 4,
    icon: "bladder",
    title: "Resección Endoscópica de Tumores de Vejiga",
    description:
      "Cirugía mínimamente invasiva para el diagnóstico y tratamiento de tumores vesicales.",
  },
  {
    id: 5,
    icon: "urethra",
    title: "Tratamiento de Estenosis de Uretra",
    description:
      "Corrección de obstrucciones urinarias mediante técnicas modernas y reconstructivas.",
  },
  {
    id: 6,
    icon: "varicocele",
    title: "Cirugía de Varicocele",
    description:
      "Procedimiento que ayuda a mejorar la salud reproductiva masculina y aliviar molestias testiculares.",
  },
  {
    id: 7,
    icon: "prostateCancer",
    title: "Cirugía para Cáncer de Próstata",
    description:
      "Tratamiento quirúrgico especializado enfocado en la eliminación del cáncer preservando la mejor calidad de vida posible.",
  },
  {
    id: 8,
    icon: "renalTumor",
    title: "Cirugía de Tumor Renal",
    description:
      "Procedimientos laparoscópicos avanzados para el tratamiento de tumores renales.",
  },
  {
    id: 9,
    icon: "circumcision",
    title: "Circuncisión Especializada",
    description:
      "Procedimiento seguro y preciso para niños y adultos con indicaciones médicas específicas.",
  },
  {
    id: 10,
    icon: "vasectomy",
    title: "Vasectomía Sin Bisturí",
    description:
      "Método anticonceptivo definitivo, ambulatorio y con rápida recuperación.",
  },
];

// Preguntas frecuentes (seccion FAQ con acordeon)
export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "¿Cómo sé si tengo piedras en los riñones?",
    answer:
      "Las piedras en los riñones pueden causar dolor intenso en la espalda o costado, molestias al orinar, sangre en la orina o infecciones urinarias frecuentes. Ante cualquiera de estos síntomas es importante realizar una valoración urológica para determinar el tratamiento más adecuado.",
  },
  {
    id: 2,
    question: "¿Qué síntomas pueden indicar un problema de próstata?",
    answer:
      "Los síntomas más frecuentes incluyen disminución del flujo urinario, levantarse varias veces por la noche para orinar, sensación de vaciamiento incompleto de la vejiga, urgencia urinaria o dificultad para iniciar la micción. Una evaluación oportuna puede prevenir complicaciones.",
  },
  {
    id: 3,
    question: "¿La vasectomía afecta mi vida sexual?",
    answer:
      "No. La vasectomía es un método anticonceptivo permanente que no afecta la erección, el deseo sexual ni la producción de hormonas masculinas. Es un procedimiento seguro y ambulatorio con rápida recuperación.",
  },
];

// Informacion de contacto y redes sociales
// NOTA: Actualizar las URLs de Facebook e Instagram con las reales del doctor
export const contactInfo: ContactInfo = {
  address:
    "Torre Médica San Javier. Quebec #631, Piso 2, Interior 207, Col. Prados Providencia, Guadalajara, Jalisco.",
  addressShort: "Torre Médica San Javier, Guadalajara, Jal.",
  phone: "33 36 79 35 31",
  emergencyPhone: "33 10 98 68 19",
  email: "drurologo33@gmail.com",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.3938!3d20.6946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQxJzQwLjYiTiAxMDPCsDIzJzM3LjciVw!5e0!3m2!1ses!2smx!4v1",
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "facebook",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: "instagram",
    },
    {
      id: 3,
      name: "WhatsApp",
      url: "https://wa.me/523310986819",
      icon: "whatsapp",
    },
  ],
};
