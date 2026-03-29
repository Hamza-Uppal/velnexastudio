import { Bot, Database, LayoutDashboard, Workflow } from "lucide-react";

export default function SoftwareSection() {
  const items = [
    {
      icon: LayoutDashboard,
      title: "Office Dashboards",
      desc: "Internal dashboards for tracking tasks, performance, records, and operations.",
    },
    {
      icon: Workflow,
      title: "Workflow Systems",
      desc: "Custom tools that reduce manual work and improve business process flow.",
    },
    {
      icon: Database,
      title: "Data-Based Operations",
      desc: "Systems that organize business information in one structured place.",
    },
    {
      icon: Bot,
      title: "Automation Direction",
      desc: "AI chatbot and automation planning for future-ready business operations.",
    },
  ];

  return (
    <section id="software" className="px-0 py-20">
      <div className="container-main rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-950 p-8 md:p-10">
        <h2 className="section-title">Beyond websites: business software and office systems</h2>
        <p className="section-subtitle">
          Velnexa Studio is also positioned to grow into business software and office workflow solutions,
          not just brochure websites.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}