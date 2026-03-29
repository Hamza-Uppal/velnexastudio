import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import DemoShowcase from "./components/DemoShowcase";
import SoftwareSection from "./components/SoftwareSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <DemoShowcase />
      <SoftwareSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}