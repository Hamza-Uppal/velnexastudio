import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <h1 className="section-title">About Velnexa Studio</h1>
            <p className="section-subtitle">
              Velnexa Studio builds premium websites, redesigns outdated digital experiences,
              and develops business systems for companies that want stronger credibility,
              cleaner operations, and better digital growth.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="page-card">
                <h2 className="text-2xl font-bold text-white">What we believe</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Businesses should not look average online. A stronger digital presence
                  improves trust, first impressions, lead quality, and long-term positioning.
                </p>
              </div>

              <div className="page-card">
                <h2 className="text-2xl font-bold text-white">What we build</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Websites, redesigns, dashboards, office tools, workflow systems,
                  and industry-specific digital solutions built around business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}