// Pagina principal - Compone todas las secciones de la landing page
// Orden: Navbar > Hero > Sobre Mi > Tratamientos > FAQ > Contacto > Footer
// El boton de WhatsApp flota sobre todo el contenido
import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import AboutMe from "@/src/components/AboutMe/AboutMe";
import Treatments from "@/src/components/Treatments/Treatments";
import FAQ from "@/src/components/FAQ/FAQ";
import Contact from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <Treatments />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
