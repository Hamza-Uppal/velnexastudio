import Navbar from "../components/Navbar";
import DemoShowcase from "../components/DemoShowcase";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function DemosPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-10">
        <DemoShowcase />
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}