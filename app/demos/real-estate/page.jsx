"use client";

import { useMemo, useState } from "react";
import {
  Bath,
  BedDouble,
  Building2,
  ChevronRight,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

export default function RealEstateAgencyWebsite() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    purpose: "Buy",
    location: "",
    type: "All",
  });

  const properties = useMemo(
    () => [
      {
        id: 1,
        title: "Palm Jumeirah Signature Villa",
        price: "AED 12,500,000",
        type: "Villa",
        status: "For Sale",
        purpose: "Buy",
        location: "Palm Jumeirah, Dubai",
        beds: 5,
        baths: 6,
        area: "6,200 sqft",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        description:
          "An ultra-luxury waterfront villa with spacious living areas, private garden, premium finishes, and exceptional sea views.",
        features: ["Private Pool", "Beach Access", "Maid Room", "Covered Parking"],
      },
      {
        id: 2,
        title: "Downtown Skyline Apartment",
        price: "AED 3,850,000",
        type: "Apartment",
        status: "For Sale",
        purpose: "Buy",
        location: "Downtown Dubai",
        beds: 3,
        baths: 3,
        area: "1,950 sqft",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        description:
          "A premium apartment in the heart of the city with skyline views, smart-home features, and direct access to major attractions.",
        features: ["Balcony", "Gym Access", "Concierge", "City View"],
      },
      {
        id: 3,
        title: "Marina Waterfront Penthouse",
        price: "AED 8,900,000",
        type: "Penthouse",
        status: "For Sale",
        purpose: "Buy",
        location: "Dubai Marina",
        beds: 4,
        baths: 5,
        area: "4,100 sqft",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        description:
          "A luxury penthouse with expansive terraces, designer interiors, marina-facing windows, and private lift access.",
        features: ["Private Terrace", "Marina View", "High Floor", "Smart Home"],
      },
      {
        id: 4,
        title: "Business Bay Executive Office",
        price: "AED 220,000 / year",
        type: "Commercial",
        status: "For Rent",
        purpose: "Rent",
        location: "Business Bay, Dubai",
        beds: 0,
        baths: 2,
        area: "2,300 sqft",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        description:
          "A fitted office with reception area, board room, and a prestigious address ideal for growing companies.",
        features: ["Fitted Office", "Reception Area", "Meeting Room", "Canal Access"],
      },
      {
        id: 5,
        title: "Arabian Ranches Family Home",
        price: "AED 5,400,000",
        type: "Villa",
        status: "For Sale",
        purpose: "Buy",
        location: "Arabian Ranches, Dubai",
        beds: 4,
        baths: 5,
        area: "4,800 sqft",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        description:
          "A bright and spacious family villa in a secure gated community with landscaped outdoor areas and elegant interiors.",
        features: ["Community Park", "Private Garden", "Family Layout", "Gated Community"],
      },
      {
        id: 6,
        title: "JVC Contemporary Apartment",
        price: "AED 95,000 / year",
        type: "Apartment",
        status: "For Rent",
        purpose: "Rent",
        location: "Jumeirah Village Circle, Dubai",
        beds: 2,
        baths: 2,
        area: "1,250 sqft",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        description:
          "A modern apartment designed for convenience, offering practical layouts, quality finishes, and strong value for tenants.",
        features: ["Pool Access", "Gym", "Family Friendly", "Covered Parking"],
      },
    ],
    []
  );

  const agents = [
    {
      name: "Sarah Khan",
      role: "Senior Property Consultant",
      phone: "+971 50 123 4567",
      email: "sarah@primenestrealty.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Omar Rashid",
      role: "Luxury Homes Specialist",
      phone: "+971 50 987 6543",
      email: "omar@primenestrealty.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mina Joseph",
      role: "Investment Advisor",
      phone: "+971 52 222 3344",
      email: "mina@primenestrealty.com",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Ali Rahman",
      text: "PrimeNest helped us close on our villa faster than expected. Communication was clear and professional throughout.",
    },
    {
      name: "Nadia Faisal",
      text: "Their team understood exactly what investment profile I wanted and shortlisted strong options quickly.",
    },
    {
      name: "Omar Siddiqui",
      text: "The website inquiry flow and WhatsApp response made everything feel fast and trustworthy.",
    },
  ];

  const services = [
    {
      title: "Property Sales",
      icon: Home,
      text: "End-to-end support for buyers and sellers with market knowledge, negotiation, and transaction guidance.",
    },
    {
      title: "Leasing Support",
      icon: Building2,
      text: "Residential and commercial leasing with verified listings, viewings, and documentation assistance.",
    },
    {
      title: "Investment Advisory",
      icon: TrendingUp,
      text: "Data-backed recommendations for investors focused on ROI, rental demand, and long-term growth.",
    },
    {
      title: "Trusted Process",
      icon: ShieldCheck,
      text: "A reliable client experience built on transparency, fast communication, and careful deal management.",
    },
  ];

  const navItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "properties", label: "Properties" },
    { key: "agents", label: "Agents" },
    { key: "contact", label: "Contact" },
  ];

  const filteredProperties = properties.filter((property) => {
    const purposeMatch = searchData.purpose === "All" || property.purpose === searchData.purpose;
    const typeMatch = searchData.type === "All" || property.type === searchData.type;
    const locationMatch = property.location.toLowerCase().includes(searchData.location.toLowerCase());
    return purposeMatch && typeMatch && locationMatch;
  });

  const openProperty = (property) => {
    setSelectedProperty(property);
    setCurrentPage("propertyDetails");
    setMobileMenuOpen(false);
  };

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in one of your properties and would like more details."
  );
  const whatsappUrl = `https://wa.me/971501234567?text=${whatsappMessage}`;

  const Header = () => (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button onClick={() => navigate("home")} className="text-left">
          <h1 className="text-2xl font-bold tracking-tight">PrimeNest Realty</h1>
          <p className="text-xs text-white/55">Luxury Real Estate Agency</p>
        </button>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => navigate(item.key)}
              className={`transition ${
                currentPage === item.key ? "text-white" : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            WhatsApp
          </a>
          <button
            onClick={() => navigate("contact")}
            className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Book Consultation
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-2xl border border-white/10 bg-white/5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80"
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );

  const PropertyCard = ({ property }) => (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-1">
      <img src={property.image} alt={property.title} className="h-72 w-full object-cover" />
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-950">
            {property.status}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
            {property.type}
          </span>
        </div>

        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
          <MapPin size={15} /> {property.location}
        </p>
        <p className="mt-4 text-2xl font-bold">{property.price}</p>

        <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-white/70">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
            {property.beds || "-"} Beds
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
            {property.baths} Baths
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
            {property.area}
          </div>
        </div>

        <button
          onClick={() => openProperty(property)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/15"
        >
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  const SectionIntro = ({ eyebrow, title, text }) => (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-white/45">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">{text}</p>
    </div>
  );

  const HomePage = () => (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury property"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/75 to-slate-950" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Dubai Real Estate • Sales • Rentals • Investments
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Client-ready real estate website built to convert serious leads.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Showcase premium listings, build trust with professional branding, and capture inquiries through contact forms and WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("properties")}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Browse Properties
              </button>
              <button
                onClick={() => navigate("contact")}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Consultation
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["1,200+", "Listings"],
                ["850+", "Happy Clients"],
                ["12+", "Years Experience"],
                ["AED 2.4B", "Property Sold"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Search size={20} className="text-white/70" />
              <div>
                <h3 className="text-xl font-semibold">Smart Property Search</h3>
                <p className="text-sm text-white/55">Filter listings by purpose, area, and type.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">Purpose</label>
                <select
                  value={searchData.purpose}
                  onChange={(e) => setSearchData((prev) => ({ ...prev, purpose: e.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
                >
                  <option>Buy</option>
                  <option>Rent</option>
                  <option>All</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Location</label>
                <input
                  value={searchData.location}
                  onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))}
                  type="text"
                  placeholder="Downtown Dubai"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Property Type</label>
                <select
                  value={searchData.type}
                  onChange={(e) => setSearchData((prev) => ({ ...prev, type: e.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
                >
                  <option>All</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Commercial</option>
                </select>
              </div>

              <button
                onClick={() => navigate("properties")}
                className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Search Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionIntro
          eyebrow="Featured Properties"
          title="High-quality listings presented in a way clients trust"
          text="This layout is designed to feel premium, readable, and conversion-focused instead of looking like a cheap template."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Why It Converts"
            title="Built for real client inquiries, not just visual presentation"
            text="A real estate client-ready site needs lead capture, trust signals, fast contact options, and clear property browsing. This version includes those essentials."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <SectionIntro
              eyebrow="About PrimeNest"
              title="A polished agency presence for premium buyers, sellers, and investors"
              text="This section helps the business look established. Most weak agency websites skip clear positioning, which hurts trust and lead quality."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced local consultants",
                "Fast WhatsApp response flow",
                "Clean premium brand presentation",
                "Focused on sales, rentals, and investments",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <h3 className="text-2xl font-semibold">What clients notice first</h3>
            <div className="mt-6 space-y-5">
              {[
                "Strong property visuals",
                "Clear call-to-action buttons",
                "Professional team presentation",
                "Quick inquiry and WhatsApp contact",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <Star size={16} className="shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Testimonials"
            title="Trust signals that help reduce hesitation"
            text="For a real client project, these should be replaced with actual customer reviews or Google review highlights."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-white/70">“{item.text}”</p>
                <p className="mt-5 text-sm font-semibold text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionIntro
        eyebrow="About Us"
        title="A real estate agency website that feels credible from the first screen"
        text="Weak agency sites usually fail in three places: branding, property presentation, and lead capture. This version fixes all three with a premium layout and clear structure."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
          alt="Real estate office"
          className="h-full min-h-[420px] w-full rounded-[32px] object-cover"
        />
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">What makes this suitable for a paying client</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
            <p>
              It already has the structure agencies actually need: home, about, properties, property details, agent presentation, and contact conversion points.
            </p>
            <p>
              It also avoids a common mistake: stuffing everything onto one long weak page with no real browsing path. Here, visitors can move between sections like a proper business website.
            </p>
            <p>
              For production use, the next step would be connecting real listings, replacing placeholder data, and adding SEO metadata per page.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Modern premium styling",
              "Mobile-friendly layout",
              "Lead-focused contact flow",
              "Easy to customize for client branding",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const PropertiesPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionIntro
        eyebrow="Property Listings"
        title="Searchable listings page"
        text="This page now filters properties based on purpose, type, and location. That makes it much closer to something you can actually pitch to a client."
      />

      <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 md:grid-cols-4">
          <select
            value={searchData.purpose}
            onChange={(e) => setSearchData((prev) => ({ ...prev, purpose: e.target.value }))}
            className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
          >
            <option>Buy</option>
            <option>Rent</option>
            <option>All</option>
          </select>

          <select
            value={searchData.type}
            onChange={(e) => setSearchData((prev) => ({ ...prev, type: e.target.value }))}
            className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
          >
            <option>All</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Commercial</option>
          </select>

          <input
            value={searchData.location}
            onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))}
            type="text"
            placeholder="Search location"
            className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
          />

          <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950">
            {filteredProperties.length} Results
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)
        ) : (
          <div className="col-span-full rounded-[28px] border border-white/10 bg-white/5 p-10 text-center text-white/65">
            No properties matched your filters.
          </div>
        )}
      </div>
    </section>
  );

  const PropertyDetailsPage = () => {
    const property = selectedProperty || properties[0];

    return (
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <button
          onClick={() => navigate("properties")}
          className="mb-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80"
        >
          ← Back to Properties
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src={property.image} alt={property.title} className="h-[480px] w-full rounded-[32px] object-cover" />
            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-950">
                  {property.status}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                  {property.type}
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{property.title}</h2>
              <p className="mt-3 flex items-center gap-2 text-white/65">
                <MapPin size={17} /> {property.location}
              </p>
              <p className="mt-5 text-3xl font-bold">{property.price}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center">
                  <BedDouble size={18} className="mx-auto mb-2" />
                  <div className="text-sm text-white/60">Bedrooms</div>
                  <div className="mt-1 font-semibold">{property.beds || "-"}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center">
                  <Bath size={18} className="mx-auto mb-2" />
                  <div className="text-sm text-white/60">Bathrooms</div>
                  <div className="mt-1 font-semibold">{property.baths}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center">
                  <Building2 size={18} className="mx-auto mb-2" />
                  <div className="text-sm text-white/60">Type</div>
                  <div className="mt-1 font-semibold">{property.type}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center">
                  <Home size={18} className="mx-auto mb-2" />
                  <div className="text-sm text-white/60">Area</div>
                  <div className="mt-1 font-semibold">{property.area}</div>
                </div>
              </div>

              <p className="mt-8 text-base leading-8 text-white/70">{property.description}</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">Property Features</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {property.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Request This Property</h3>
              <p className="mt-2 text-sm text-white/60">Use the form below to capture high-intent leads.</p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <textarea
                  rows={5}
                  placeholder="I want to schedule a viewing / know more details"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <button
                  type="button"
                  className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Send Inquiry
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  Chat on WhatsApp
                </a>
              </form>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Assigned Consultant</h3>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={agents[0].image}
                  alt={agents[0].name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div>
                  <div className="text-lg font-semibold">{agents[0].name}</div>
                  <div className="text-sm text-white/60">{agents[0].role}</div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p className="flex items-center gap-2"><Phone size={15} /> {agents[0].phone}</p>
                <p className="flex items-center gap-2"><Mail size={15} /> {agents[0].email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const AgentsPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionIntro
        eyebrow="Our Agents"
        title="Professional team presentation"
        text="Agency websites need more than listings. Showing the team helps build trust and makes the business feel real rather than anonymous."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {agents.map((agent) => (
          <div key={agent.name} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <img src={agent.image} alt={agent.name} className="h-80 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="mt-2 text-sm text-white/60">{agent.role}</p>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p className="flex items-center gap-2"><Phone size={15} /> {agent.phone}</p>
                <p className="flex items-center gap-2"><Mail size={15} /> {agent.email}</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white/15"
              >
                Contact Agent
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionIntro
        eyebrow="Contact"
        title="Lead capture page"
        text="This page is structured to make inquiries simple. For production, connect this form to Formspree, Web3Forms, EmailJS, or your backend."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Office Details</h3>
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <p className="flex items-center gap-3"><MapPin size={16} /> Office 1204, Business Bay, Dubai, UAE</p>
            <p className="flex items-center gap-3"><Phone size={16} /> +971 50 123 4567</p>
            <p className="flex items-center gap-3"><Mail size={16} /> info@primenestrealty.com</p>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/40 p-6">
            <h4 className="text-lg font-semibold">Fastest response channel</h4>
            <p className="mt-2 text-sm text-white/60">
              For many UAE agencies, WhatsApp converts better than email alone. That is why it is placed prominently across the site.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Open WhatsApp
            </a>
          </div>
        </div>

        <form className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Phone Number"
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
            />
            <select className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none">
              <option>I want to buy</option>
              <option>I want to rent</option>
              <option>I want to sell</option>
              <option>I want to invest</option>
            </select>
          </div>
          <textarea
            rows={6}
            placeholder="Tell us what type of property you are looking for"
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-white/35"
          />
          <button
            type="button"
            className="mt-4 w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "properties" && <PropertiesPage />}
      {currentPage === "propertyDetails" && <PropertyDetailsPage />}
      {currentPage === "agents" && <AgentsPage />}
      {currentPage === "contact" && <ContactPage />}

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 PrimeNest Realty. All rights reserved.
      </footer>
    </div>
  );
}
