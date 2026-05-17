"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import RealEstatePricing from "../../components/pricing/RealEstatePricing";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  X,
} from "lucide-react";

const navItems = ["Listings", "Services", "Advisors", "Contact"];

const properties = [
  {
    id: 1,
    title: "Palm Jumeirah Signature Villa",
    price: "AED 12,500,000",
    type: "Villa",
    status: "For Sale",
    purpose: "Buy",
    location: "Palm Jumeirah",
    beds: 5,
    baths: 6,
    area: "6,200 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
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
    baths: 4,
    area: "2,180 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Marina Waterfront Penthouse",
    price: "AED 520,000 / year",
    type: "Penthouse",
    status: "For Rent",
    purpose: "Rent",
    location: "Dubai Marina",
    beds: 4,
    baths: 5,
    area: "4,050 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Business Bay Executive Office",
    price: "AED 1,250,000",
    type: "Commercial",
    status: "For Sale",
    purpose: "Buy",
    location: "Business Bay",
    beds: null,
    baths: 2,
    area: "1,540 sqft",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Emirates Hills Family Villa",
    price: "AED 890,000 / year",
    type: "Villa",
    status: "For Rent",
    purpose: "Rent",
    location: "Emirates Hills",
    beds: 6,
    baths: 7,
    area: "8,400 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Creek Harbour View Residence",
    price: "AED 2,650,000",
    type: "Apartment",
    status: "For Sale",
    purpose: "Buy",
    location: "Dubai Creek Harbour",
    beds: 2,
    baths: 3,
    area: "1,620 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  ["Luxury sales", "Premium property positioning, qualified buyer capture, and branded listing pages."],
  ["Rental leasing", "Fast, trust-building presentation for high-value rental inventory."],
  ["Investment advisory", "Market-led sections for ROI, location value, and serious investor inquiries."],
  ["Developer launches", "Campaign-ready pages for off-plan projects, launches, and lead funnels."],
];

const advisors = [
  ["Maya Rahman", "Luxury Villas", "Palm Jumeirah and Emirates Hills"],
  ["Omar Haddad", "Investment Sales", "Downtown, Creek Harbour, Business Bay"],
  ["Lina Torres", "Premium Leasing", "Marina, JBR, DIFC"],
];

function Header({ open, setOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#07111f]">
            <Building2 className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-xl font-black text-white">PrimeNest Realty</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-sky-300">
              Dubai Properties
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-white px-5 py-3 text-sm font-black text-[#07111f] transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Book Consultation
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07111f] px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-4 py-3 text-sm font-semibold text-white/75"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/65">{text}</p>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">
      <div className="relative h-72">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 to-transparent" />
        <div className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-black text-[#07111f]">
          {property.status}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="rounded-lg border border-white/10 px-3 py-1 text-xs font-bold text-sky-200">
            {property.type}
          </p>
          <p className="flex items-center gap-1 text-sm text-white/58">
            <MapPin className="h-4 w-4" /> {property.location}
          </p>
        </div>
        <h3 className="mt-4 text-2xl font-black text-white">{property.title}</h3>
        <p className="mt-3 text-2xl font-black text-sky-300">{property.price}</p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-sm text-white/70">
          <span className="flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3">
            <BedDouble className="h-4 w-4" /> {property.beds || "-"}
          </span>
          <span className="flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3">
            <Bath className="h-4 w-4" /> {property.baths}
          </span>
          <span className="rounded-lg bg-white/5 p-3 text-center">{property.area}</span>
        </div>
        <a
          href="#contact"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-black text-[#07111f]"
        >
          Request Details <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function RealEstateAgencyWebsite() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({ purpose: "All", type: "All", location: "" });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const purposeMatch = filters.purpose === "All" || property.purpose === filters.purpose;
      const typeMatch = filters.type === "All" || property.type === filters.type;
      const locationMatch = property.location.toLowerCase().includes(filters.location.toLowerCase());
      return purposeMatch && typeMatch && locationMatch;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header open={open} setOpen={setOpen} />

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85"
            alt="Luxury Dubai villa exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/88 to-[#07111f]/42" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/80">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              Luxury real estate website demo
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Premium Properties Presented for Serious Buyers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A conversion-focused property website for agencies, brokers, and developers that need trust, high-end listings, and qualified leads.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#listings" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 font-black text-[#07111f]">
                Browse Listings <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 font-black text-white">
                Request Valuation
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["AED 2.4B", "Inventory value"],
                ["420+", "Qualified leads"],
                ["4.9", "Client rating"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4">
                  <p className="text-2xl font-black text-sky-300">{value}</p>
                  <p className="mt-1 text-sm text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-sky-300" />
              <div>
                <h2 className="text-xl font-black">Find a property</h2>
                <p className="text-sm text-white/55">Filter by purpose, type, and area.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <select
                value={filters.purpose}
                onChange={(event) => setFilters((prev) => ({ ...prev, purpose: event.target.value }))}
                className="rounded-lg border border-white/10 bg-[#0d1a2b] px-4 py-4 text-sm outline-none"
              >
                <option>All</option>
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <select
                value={filters.type}
                onChange={(event) => setFilters((prev) => ({ ...prev, type: event.target.value }))}
                className="rounded-lg border border-white/10 bg-[#0d1a2b] px-4 py-4 text-sm outline-none"
              >
                <option>All</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Commercial</option>
              </select>
              <input
                value={filters.location}
                onChange={(event) => setFilters((prev) => ({ ...prev, location: event.target.value }))}
                placeholder="Search area"
                className="rounded-lg border border-white/10 bg-[#0d1a2b] px-4 py-4 text-sm outline-none placeholder:text-white/35"
              />
              <a href="#listings" className="rounded-lg bg-sky-300 px-6 py-4 text-center font-black text-[#07111f]">
                View {filteredProperties.length} Matches
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-7xl px-5 py-20">
        <SectionIntro
          eyebrow="Featured Listings"
          title="Searchable property cards built for clarity and confidence"
          text="The listing experience gives buyers the essentials fast: location, price, property type, bedrooms, baths, and a direct inquiry path."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section id="services" className="bg-white/[0.04] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionIntro
            eyebrow="Services"
            title="A full agency website, not only a listing grid"
            text="This demo supports sales, rentals, investment advisory, launch campaigns, and lead capture for serious property businesses."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-[#07111f] p-6">
                <Home className="h-7 w-7 text-sky-300" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advisors" className="mx-auto max-w-7xl px-5 py-20">
        <SectionIntro
          eyebrow="Advisors"
          title="Human trust for high-value property decisions"
          text="Broker profiles help visitors understand specialization and choose the right advisor before they inquire."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {advisors.map(([name, role, area]) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-300 text-xl font-black text-[#07111f]">
                {name.charAt(0)}
              </div>
              <h3 className="mt-5 text-2xl font-black">{name}</h3>
              <p className="mt-1 font-semibold text-sky-300">{role}</p>
              <p className="mt-3 text-sm leading-7 text-white/62">{area}</p>
              <div className="mt-5 flex gap-2 text-white/70">
                <Phone className="h-5 w-5" />
                <Mail className="h-5 w-5" />
                <Star className="h-5 w-5 text-sky-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-sky-300 p-8 text-[#07111f] md:p-12">
            <TrendingUp className="h-10 w-10" />
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Capture buyer, seller, and investor leads
            </h2>
            <p className="mt-5 leading-8 text-[#07111f]/75">
              This form can route inquiries to email, WhatsApp, CRM, or a custom property dashboard.
            </p>
            <div className="mt-8 grid gap-3">
              {["Buyer qualification", "Seller valuations", "Investor inquiries", "Viewing requests"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-[#07111f]/10 p-4 font-bold">
                  <CheckCircle2 className="h-5 w-5" /> {item}
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-4 p-8 md:p-12">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-white/10 bg-[#0d1a2b] px-5 py-4 outline-none" placeholder="Full name" />
              <input className="rounded-lg border border-white/10 bg-[#0d1a2b] px-5 py-4 outline-none" placeholder="Phone number" />
            </div>
            <input className="rounded-lg border border-white/10 bg-[#0d1a2b] px-5 py-4 outline-none" placeholder="Email address" />
            <select className="rounded-lg border border-white/10 bg-[#0d1a2b] px-5 py-4 outline-none">
              <option>Buying a property</option>
              <option>Selling a property</option>
              <option>Renting / leasing</option>
              <option>Investment consultation</option>
            </select>
            <textarea
              className="min-h-32 rounded-lg border border-white/10 bg-[#0d1a2b] px-5 py-4 outline-none"
              placeholder="Tell us your budget, area, property type, and timeline"
            />
            <button type="button" className="rounded-lg bg-white px-7 py-4 font-black text-[#07111f]">
              Send Property Inquiry
            </button>
          </form>
        </div>
      </section>

      <RealEstatePricing />

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/45">
        PrimeNest Realty demo built by Velnexa Studio.
      </footer>
    </main>
  );
}
