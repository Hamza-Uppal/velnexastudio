import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "AED 1,200 – 2,000",
      description:
        "Best for businesses that need a clean and professional online presence quickly.",
      features: [
        "Business website",
        "Mobile responsive design",
        "Basic contact / WhatsApp integration",
        "Simple structure",
      ],
    },
    {
      name: "Growth",
      price: "AED 3,000 – 5,500",
      description:
        "Best for businesses that need stronger trust, better structure, and more enquiries.",
      features: [
        "Everything in Starter",
        "Stronger conversion layout",
        "More content sections",
        "Higher-value presentation",
      ],
      featured: true,
    },
    {
      name: "Advanced",
      price: "AED 7,000 – 15,000+",
      description:
        "Best for premium businesses that need advanced digital presence and scalable structure.",
      features: [
        "Everything in Growth",
        "Premium UI direction",
        "Scalable architecture",
        "System-ready approach",
      ],
    },
    {
      name: "Custom Systems",
      price: "Custom Quote",
      description:
        "For dashboards, internal tools, workflow systems, office software, and business automation.",
      features: [
        "Business dashboards",
        "Admin panels",
        "Workflow tools",
        "Custom office systems",
      ],
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container-main">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="section-title">Pricing</h1>
            <p className="section-subtitle mx-auto">
              Clear pricing ranges based on scope, business type, and solution level.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-7 ${
                  plan.featured
                    ? "border-blue-400/40 bg-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,0.16)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.featured && (
                  <div className="mb-4 inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Most Popular
                  </div>
                )}

                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                <div className="mt-4 text-2xl font-black text-white">{plan.price}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}