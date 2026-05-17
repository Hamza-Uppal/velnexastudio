import Image from "next/image";

export default function DemoShowcase() {
  const demos = [
    {
      name: "Starter",
      category: "Gym Starter Website",
      description:
        "A clean fitness website for gyms that need programs, pricing, trust sections, and lead capture.",
      href: "/demos/gym-basic",
      price: "From AED 1,200",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Growth",
      category: "Gym Premium Website",
      description:
        "A polished gym demo with stronger branding, membership offers, trainers, and inquiry flow.",
      href: "/demos/gym-premium",
      price: "From AED 3,000",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
      featured: true,
    },
    {
      name: "Advanced",
      category: "Gym Business System",
      description:
        "A high-end fitness business demo for premium gyms, system planning, and custom workflows.",
      href: "/demos/gym-platinum",
      price: "From AED 7,000",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Real Estate",
      category: "Property Website",
      description:
        "A premium real estate website focused on listings, trust, and serious lead capture.",
      href: "/demos/real-estate",
      price: "From AED 3,500",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Personal Trainer",
      category: "Trainer Website",
      description:
        "A professional trainer website with programs, lead capture, and booking-focused structure.",
      href: "/demos/personal-trainer",
      price: "From AED 2,500",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Bakery",
      category: "Bakery",
      description:
        "A luxury bakery website demo designed for cake shops, pastry brands, cafes, and dessert businesses.",
      href: "/demos/bakery",
      price: "From AED 2,500",
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Bakery Online Store",
      category: "Bakery E-commerce",
      description:
        "A full bakery online store demo for cakes, pastries, sweets, gift boxes, and delivery-based orders.",
      href: "/demos/bakery-store",
      price: "From AED 5,000",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Coming Soon",
      category: "Next Industry Demo",
      description:
        "More industry-specific demos will be added here as the portfolio expands.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <section id="demos" className="py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Live Demo Projects</h2>
          <p className="section-subtitle mx-auto">
            Open real examples of websites and systems built for different industries and business needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => {
            const openInNewTab = demo.href.startsWith("http") || demo.href.startsWith("/demos/");

            return (
              <a
                key={demo.name}
                href={demo.href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? "noopener noreferrer" : ""}
                className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)] ${
                  demo.featured
                    ? "border-blue-400/50 bg-blue-500/10 shadow-[0_0_40px_rgba(59,130,246,0.22)]"
                    : "border-white/10 bg-white/5 hover:border-blue-400/50"
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  {demo.image ? (
                    <Image
                      src={demo.image}
                      alt={`${demo.name} demo preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.25),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#020617]/80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_28%)]" />

                  {demo.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-blue-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(59,130,246,0.35)]">
                      Popular
                    </div>
                  )}

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur">
                    {demo.category}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                      <h3 className="text-2xl font-bold text-white transition group-hover:text-sky-300">
                        {demo.name}
                      </h3>
                      {demo.price && (
                        <div className="mt-3 inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
                          {demo.price}
                        </div>
                      )}
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {demo.description}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                        Open Demo
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          -&gt;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
