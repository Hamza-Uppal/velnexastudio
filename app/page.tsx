import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import PricingPreview from "./components/PricingPreview";
import DemoShowcase from "./components/DemoShowcase";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <PricingPreview />
      <DemoShowcase />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}