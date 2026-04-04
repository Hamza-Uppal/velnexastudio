import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function ServicesPage() {
  const services = [
    "Business websites",
    "Website redesigns",
    "Gym websites",
    "Personal trainer websites",
    "Real estate websites",
    "Restaurant websites",
    "Law firm websites",
    "Rent a car websites",
    "Dashboards and admin systems",
    "Workflow tools and office software",
    "Custom internal business systems",
    "Digital lead conversion structure",
  ];

  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <h1 className="section-title">Services</h1>
            <p className="section-subtitle">
              We build digital solutions for businesses that need stronger presentation,
              better conversions, and smarter internal systems.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}