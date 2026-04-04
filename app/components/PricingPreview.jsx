import Link from "next/link";

export default function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "AED 1,200 – 2,000",
      description:
        "For businesses that need a clean professional website or a strong online presence.",
    },
    {
      name: "Growth",
      price: "AED 3,000 – 5,500",
      description:
        "For businesses that want stronger branding, better trust, and more enquiries.",
      featured: true,
    },
    {
      name: "Advanced",
      price: "AED 7,000 – 15,000+",
      description:
        "For high-end businesses that need premium presentation, deeper structure, and scalable systems.",
    },
    {
      name: "Custom Systems",
      price: "Custom Quote",
      description:
        "For dashboards, office systems, workflow tools, internal software, and business automation.",
    },
  ];

  return (
    <section className="px-0 py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Solutions for different business needs</h2>
          <p className="section-subtitle mx-auto">
            From websites and redesigns to dashboards and internal systems,
            Velnexa Studio builds according to business stage and scope.
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

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <div className="mt-4 text-2xl font-black text-white">{plan.price}</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/pricing" className="blue-button">
            View Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}