export default function DemoShowcase() {
  const demos = [
    {
      name: "Basic Demo",
      desc: "Starter website example for fast launch and clean business presence.",
      type: "Example: Gym Website",
      href: "https://velnexa-studio.netlify.app/basic",
    },
    {
      name: "Premium Demo",
      desc: "More trust-building sections, stronger conversion flow, and fuller presentation.",
      type: "Example: Gym Website",
      href: "https://velnexa-studio.netlify.app/premium",
    },
    {
      name: "Platinum Demo",
      desc: "Website plus systems thinking: automation, dashboards, and business growth direction.",
      type: "Example: Gym Business System",
      href: "https://velnexa-studio.netlify.app/platinum",
    },
  ];

  return (
    <section id="demos" className="px-0 py-20">
      <div className="container-main">
        <h2 className="section-title">Live demos clients can open immediately</h2>
        <p className="section-subtitle">
          These demos are proof of quality. Right now they are gym examples, but they show the quality,
          structure, and level each package can deliver.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <div key={demo.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative h-64 bg-gradient-to-br from-slate-900 via-blue-950/70 to-sky-900/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_28%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  {demo.type}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Demo {index + 1}</div>
                  <div className="mt-2 text-2xl font-bold text-white">{demo.name}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{demo.desc}</div>
                </div>
              </div>

              <div className="p-6">
                <a
                  href={demo.href}
                  target="_blank"
                  className="block rounded-full bg-sky-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Open Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}