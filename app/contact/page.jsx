import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-10">
        <ContactSection />
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}