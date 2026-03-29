import { ArrowRight, BadgeCheck, MonitorSmartphone, RefreshCcw, Workflow, LayoutDashboard } from "lucide-react";

export default function Hero() {
  const points = [
    "Websites for businesses with no online presence",
    "Redesigns for outdated, slow, or weak-converting websites",
    "Dashboards and office systems for internal business operations",
    "Solutions for small businesses, established firms, and growing companies",
  ];

  return (
    <section id="home" className="px-0 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="container-main grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300">
            Premium digital solutions for modern businesses
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Build
            <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Websites & Business Systems
            </span>
            That Make Companies Look More Valuable
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Velnexa Studio helps businesses launch new websites, redesign outdated ones,
            and build internal systems that improve credibility, operations, and growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="blue-button">
              View Packages
            </a>
            <a href="#demos" className="outline-button">
              See Live Demos <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-3">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 text-sky-300" />
                <span className="text-sm leading-6 text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-6 shadow-2xl shadow-sky-950/20">
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">New Website Builds</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Professional websites for businesses that need a strong digital presence from the start.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <RefreshCcw className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Website Redesigns</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Modern redesigns for companies with outdated, slow, or underperforming websites.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Dashboards & Office Tools</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Internal systems, admin panels, and workflow tools that support business operations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Business System Direction</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Structured digital solutions that help businesses grow beyond a simple brochure website.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-sky-400/20 bg-gradient-to-r from-sky-400/10 to-blue-500/10 p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Positioning statement
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              We do not just build pages. We create digital experiences and business systems
              that make companies look stronger, operate better, and attract better opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}