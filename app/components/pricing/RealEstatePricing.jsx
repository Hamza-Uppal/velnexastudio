"use client";

import { CheckCircle2 } from "lucide-react";

export default function RealEstatePricing() {
  const plans = [
    {
      name: "Growth",
      price: "AED 4,000 - 6,000",
      description: "For brokers and small agencies that need a polished property website.",
      features: [
        "Property listing layout",
        "Lead capture forms",
        "WhatsApp integration",
        "Premium responsive UI",
      ],
    },
    {
      name: "Advanced",
      price: "AED 8,000 - 12,000",
      description: "For agencies that need filters, richer listing pages, and scalable structure.",
      highlight: true,
      features: [
        "Everything in Growth",
        "Advanced filtering system",
        "Custom property detail pages",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <section className="bg-[#07111f] py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Real Estate Website Packages</h2>
          <p className="section-subtitle mx-auto">
            Built for property businesses that need stronger trust, better listings, and more qualified inquiries.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlight
                  ? "border-sky-300 bg-sky-300 text-[#07111f] shadow-[0_24px_80px_rgba(125,211,252,0.16)]"
                  : "border-white/10 bg-white/[0.06] text-white"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-flex rounded-full bg-[#07111f] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-sky-300">
                  Best for agencies
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className="mt-4 text-3xl font-black">{plan.price}</div>
              <p className={`mt-4 leading-7 ${plan.highlight ? "text-[#07111f]/72" : "text-white/62"}`}>
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
