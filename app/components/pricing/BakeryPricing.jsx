"use client";

import { CheckCircle2 } from "lucide-react";

const pricingContent = {
  website: {
    background: "bg-[#171412]",
    accent: "text-[#f4d28b]",
    highlight: "border-[#f4d28b] bg-[#f4d28b] text-[#171412]",
    badge: "bg-[#171412] text-[#f4d28b]",
    title: "Luxury Bakery Website Packages",
    subtitle:
      "Built for bakeries, cake artists, cafes, and patisseries that need premium branding and high-value inquiries.",
    plans: [
      {
        name: "Signature",
        price: "AED 2,500 - 4,000",
        description: "For boutique bakeries that need a premium website and inquiry flow.",
        features: [
          "Luxury homepage design",
          "Menu and product showcase",
          "Custom cake inquiry form",
          "WhatsApp integration",
        ],
      },
      {
        name: "Atelier",
        price: "AED 5,000 - 8,000",
        description: "For premium bakery brands that need stronger sections, gifting, and event inquiries.",
        highlight: true,
        features: [
          "Everything in Signature",
          "Gifting and occasion sections",
          "Corporate order positioning",
          "Advanced conversion layout",
        ],
      },
    ],
  },
  store: {
    background: "bg-[#2a1810]",
    accent: "text-[#ffd08a]",
    highlight: "border-[#ffd08a] bg-[#ffd08a] text-[#2a1810]",
    badge: "bg-[#2a1810] text-[#ffd08a]",
    title: "Bakery Online Store Packages",
    subtitle:
      "Built for bakeries that want product browsing, online ordering, delivery-focused selling, and bulk order inquiries.",
    plans: [
      {
        name: "Storefront",
        price: "AED 4,000 - 6,500",
        description: "For bakeries that need a polished product catalog and order inquiry flow.",
        features: [
          "Product category layout",
          "Product cards with prices",
          "Cart-style interface",
          "Delivery and pickup sections",
        ],
      },
      {
        name: "Commerce",
        price: "AED 7,500 - 12,000",
        description: "For bakeries that need a stronger store experience and scalable e-commerce structure.",
        highlight: true,
        features: [
          "Everything in Storefront",
          "Checkout-ready architecture",
          "Bulk order quote form",
          "Promotions and featured products",
        ],
      },
    ],
  },
};

export default function BakeryPricing({ variant = "website" }) {
  const content = pricingContent[variant] || pricingContent.website;

  return (
    <section className={`${content.background} py-20 text-white`}>
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle mx-auto">{content.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {content.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.highlight ? content.highlight : "border-white/10 bg-white/[0.06] text-white"
              }`}
            >
              {plan.highlight && (
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${content.badge}`}>
                  Best for growth
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className={`mt-4 text-3xl font-black ${plan.highlight ? "" : content.accent}`}>
                {plan.price}
              </div>
              <p className={`mt-4 leading-7 ${plan.highlight ? "text-black/70" : "text-white/62"}`}>
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
