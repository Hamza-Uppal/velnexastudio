"use client";

export default function TrainerPricing() {
  const plans = [
    {
      name: "Starter",
      price: "AED 1,000 – 1,500",
      features: [
        "Personal brand website",
        "WhatsApp integration",
        "Programs display",
        "Mobile optimized",
      ],
    },
    {
      name: "Growth",
      price: "AED 2,000 – 3,000",
      highlight: true,
      features: [
        "Everything in Starter",
        "Lead capture optimization",
        "Client testimonials section",
        "Stronger conversion layout",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container-main text-center">
        <h2 className="section-title">Trainer Website Packages</h2>
        <p className="section-subtitle">
          Built to help trainers get more enquiries and clients.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlight
                  ? "border-green-400 bg-green-500/10 scale-[1.03]"
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

              <button className="mt-6 w-full rounded-full bg-green-400 py-3 font-semibold text-black">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}