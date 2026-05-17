"use client";

import { CheckCircle2 } from "lucide-react";

export default function TrainerPricing() {
  const plans = [
    {
      name: "Starter",
      price: "AED 1,000 - 1,500",
      description: "For trainers who need a clean personal brand website and simple lead capture.",
      features: [
        "Personal brand website",
        "WhatsApp integration",
        "Programs display",
        "Mobile optimized",
      ],
    },
    {
      name: "Growth",
      price: "AED 2,000 - 3,000",
      description: "For trainers who want stronger positioning, proof, and conversion sections.",
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
    <section className="bg-[#090b0a] py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Trainer Website Packages</h2>
          <p className="section-subtitle mx-auto">
            Built to help trainers look professional, explain their offer clearly, and get more coaching inquiries.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlight
                  ? "border-lime-300 bg-lime-300 text-[#090b0a] shadow-[0_24px_80px_rgba(190,242,100,0.14)]"
                  : "border-white/10 bg-white/[0.06] text-white"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-flex rounded-full bg-[#090b0a] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-lime-300">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className="mt-4 text-3xl font-black">{plan.price}</div>
              <p className={`mt-4 leading-7 ${plan.highlight ? "text-[#090b0a]/72" : "text-white/62"}`}>
                {plan.description}
              </p>

              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-semibold">
                    <CheckCircle2 className="h-5 w-5" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
