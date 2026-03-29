import { BriefcaseBusiness, Building2, HeartPulse, Hotel, Scale, UtensilsCrossed } from "lucide-react";

export default function Services() {
  const industries = [
    { icon: Building2, title: "Corporate Firms", desc: "Professional websites and office-facing business systems." },
    { icon: BriefcaseBusiness, title: "Service Businesses", desc: "Lead-focused sites for consultants, agencies, and local businesses." },
    { icon: HeartPulse, title: "Clinics & Healthcare", desc: "Trust-building websites with stronger credibility and enquiry flow." },
    { icon: Scale, title: "Law & Professional Services", desc: "Clean premium design with authority-first messaging." },
    { icon: UtensilsCrossed, title: "Restaurants & Hospitality", desc: "Conversion-driven websites that make the brand look sharper." },
    { icon: Hotel, title: "Gyms & Fitness", desc: "Your current strongest proof and demo category." },
  ];

  return (
    <section id="services" className="px-0 py-20">
      <div className="container-main">
        <h2 className="section-title">Built for more than one industry</h2>
        <p className="section-subtitle">
          Velnexa Studio is positioned for businesses that need better presentation, stronger conversion,
          and cleaner digital systems — from startups to established firms.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass rounded-[1.75rem] p-6">
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