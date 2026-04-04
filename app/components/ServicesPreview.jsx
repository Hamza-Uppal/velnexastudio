import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Business Websites",
      description:
        "Professional websites for businesses that need trust, credibility, and stronger online presentation.",
    },
    {
      title: "Website Redesigns",
      description:
        "Redesigns for slow, outdated, or weak websites that no longer reflect business value.",
    },
    {
      title: "Industry Solutions",
      description:
        "Websites tailored for gyms, trainers, real estate, restaurants, law firms, rent a car, and more.",
    },
    {
      title: "Systems & Dashboards",
      description:
        "Internal tools, admin panels, dashboards, and digital systems for real business operations.",
    },
  ];

  return (
    <section className="px-0 py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">What we build</h2>
          <p className="section-subtitle mx-auto">
            Velnexa Studio is built for more than websites. We create digital solutions
            that help businesses look stronger and operate smarter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="outline-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}