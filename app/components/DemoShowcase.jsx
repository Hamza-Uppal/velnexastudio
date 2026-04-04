export default function DemoShowcase() {
  const demos = [
    {
      name: "Starter",
      category: "Gym Website",
      description:
        "Strong, clean website for businesses that need a professional online presence.",
      href: "https://velnexa-studio.netlify.app/basic",
      /*image: "/demo-previews/basic.jpg",*/
    },
    {
      name: "Growth",
      category: "Gym Website",
      description:
        "Designed to convert visitors into enquiries with structured content and clear flow.",
      href: "https://velnexastudio.netlify.app/premium",
      /*image: "/demo-previews/premium.jpg",*/
      featured: true,
    },
    {
      name: "Advanced",
      category: "Gym Business System",
      description:
        "Built for high-end businesses that need trust, systems, and premium presentation.",
      href: "https://velnexastudio.netlify.app/platinum",
      /*image: "/demo-previews/platinum.jpg",*/
    },
    {
      name: "Real Estate",
      category: "Property Website",
      description:
        "A premium real estate website focused on listings, trust, and serious lead capture.",
      href: "/demos/real-estate",
      /*image: "/demo-previews/real-estate.jpg",*/
    },
    {
      name: "Personal Trainer",
      category: "Trainer Website",
      description:
        "A professional trainer website with programs, lead capture, and booking-focused structure.",
      href: "/demos/personal-trainer",
      /*image: "/demo-previews/personal-trainer.jpg",*/
    },
    {
      name: "Coming Soon",
      category: "Next Industry Demo",
      description:
        "More industry-specific demos will be added here as the portfolio expands.",
      href: "#",
      /*image: "/demo-previews/coming-soon.jpg",*/
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
            const openInNewTab =
              demo.href.startsWith("http") ||
              demo.href.includes("real-estate") ||
              demo.href.includes("personal-trainer");

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
                  {/*<img
                    src={demo.image}
                    alt={demo.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />*/}

                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#020617]/80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_28%)]" />

                  {demo.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-blue-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Featured
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
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {demo.description}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                        Open Demo
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
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