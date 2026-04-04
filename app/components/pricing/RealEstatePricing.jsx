"use client";

export default function RealEstatePricing() {
  const plans = [
    {
      name: "Growth",
      price: "AED 4,000 – 6,000",
      features: [
        "Property listing layout",
        "Lead capture forms",
        "WhatsApp integration",
        "Premium UI design",
      ],
    },
    {
      name: "Advanced",
      price: "AED 8,000 – 12,000",
      highlight: true,
      features: [
        "Everything in Growth",
        "Advanced filtering system",
        "Custom property pages",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container-main text-center">
        <h2 className="section-title">Real Estate Website Packages</h2>
        <p className="section-subtitle">
          Built for serious property businesses that need trust and conversions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlight
                  ? "border-blue-400 bg-blue-500/10 scale-[1.03]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <div className="mt-4 text-3xl font-black text-white">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-full bg-blue-400 py-3 font-semibold text-black">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}