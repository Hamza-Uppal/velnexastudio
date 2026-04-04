import { ArrowRight, LayoutDashboard, MonitorSmartphone, RefreshCcw, Workflow } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-0 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="container-main grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300">
            Premium digital solutions for modern businesses
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Websites, Systems &
            <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Growth Infrastructure
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Velnexa Studio helps businesses launch premium websites, redesign outdated digital experiences,
            and build dashboards, internal tools, and smarter operational systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/pricing" className="blue-button">
              View Pricing
            </Link>
            <Link href="/demos" className="outline-button">
              Explore Demos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-6 shadow-2xl shadow-sky-950/20">
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Business Websites</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Premium websites for businesses that need stronger presentation, trust, and lead generation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <RefreshCcw className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Website Redesigns</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Modern redesigns for outdated, slow, or underperforming websites that need a stronger impression.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Dashboards</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Internal dashboards and admin systems for tracking performance, tasks, and business flow.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-sky-300" />
                <div className="text-lg font-semibold text-white">Business Systems</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Workflow tools, office systems, and custom digital solutions built around how businesses actually work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}