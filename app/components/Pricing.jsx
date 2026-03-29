"use client";

const plans = [
  {
    name: "Basic",
    priceRange: "AED 1,200 – 2,000",
    usdRange: "$327 – $545",
    bestFor:
      "Best for businesses that need a clean, professional website to establish a strong online presence quickly.",
    features: [
      "Modern business website",
      "Mobile responsive design",
      "WhatsApp or contact integration",
      "Core SEO structure",
      "Fast launch setup",
    ],
  },
  {
    name: "Premium",
    priceRange: "AED 3,000 – 5,500",
    usdRange: "$817 – $1,498",
    bestFor:
      "Best for businesses that want stronger branding, better trust, and more enquiries from their website.",
    features: [
      "Multi-section conversion-focused website",
      "Pricing, testimonials, demos, galleries",
      "Stronger brand presentation",
      "Lead form section",
      "Higher-trust layout",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    priceRange: "AED 7,000 – 15,000+",
    usdRange: "$1,907 – $4,087+",
    bestFor:
      "Best for firms that need a flagship website, custom workflow thinking, and future-ready software or automation direction.",
    features: [
      "Premium flagship website experience",
      "Business workflow or software planning",
      "Dashboard / systems direction",
      "Scalable architecture",
      "Higher-value positioning",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-0 py-20">
      <div className="container-main">
        <h2 className="section-title">Clear packages for different business stages</h2>

        <p className="section-subtitle">
          Pricing is shown as a range because every project depends on business type,
          scope, features, and customization level.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-7 ${
                plan.featured
                  ? "border-sky-400/30 bg-gradient-to-b from-sky-400/10 to-blue-500/10 shadow-[0_0_35px_rgba(56,189,248,0.16)]"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="mb-5 inline-flex rounded-full bg-sky-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
                  Most Popular
                </div>
              )}

              <div className="text-sm uppercase tracking-[0.18em] text-slate-400">
                {plan.name}
              </div>

              <div className="mt-3 text-4xl font-black text-white">
                {plan.priceRange}
              </div>

              <div className="mt-2 text-sm text-slate-500">
                Approx. {plan.usdRange}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {plan.bestFor}
              </p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/8 bg-slate-900/60 px-4 py-3 text-sm leading-6 text-slate-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-xs leading-6 text-slate-400">
                Final pricing depends on scope, content, integrations, and customization.
              </div>

              <a
                href="#contact"
                className={`mt-7 block rounded-full px-5 py-3 text-center font-semibold transition ${
                  plan.featured
                    ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                    : "border border-white/15 text-white hover:border-sky-300 hover:text-sky-300"
                }`}
              >
                Discuss {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}