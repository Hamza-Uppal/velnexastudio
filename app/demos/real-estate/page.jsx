"use client";

import RealEstatePricing from "../../components/pricing/RealEstatePricing";
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
  X,
} from "lucide-react";

function Header({ navigate, navItems, currentPage, whatsappUrl, mobileMenuOpen, setMobileMenuOpen }) {
  return (
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
}

function PropertyCard({ property, openProperty }) {
  return (
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
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-white/45">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">{text}</p>
    </div>
  );
}

function HomePage({ navigate, searchData, setSearchData, properties, services, testimonials, openProperty }) {
  return (
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
            <PropertyCard key={property.id} property={property} openProperty={openProperty} />
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">About page</section>;
}

function PropertiesPage({ filteredProperties, openProperty, searchData, setSearchData }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionIntro
        eyebrow="Property Listings"
        title="Searchable listings page"
        text="This page now filters properties based on purpose, type, and location."
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
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} openProperty={openProperty} />
        ))}
      </div>
    </section>
  );
}

function PropertyDetailsPage({ selectedProperty, properties }) {
  const property = selectedProperty || properties[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h2 className="text-3xl font-bold">{property.title}</h2>
    </section>
  );
}

function AgentsPage() {
  return <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">Agents page</section>;
}

function ContactPage() {
  return <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">Contact page</section>;
}

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
      },
    ],
    []
  );

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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header
        navigate={navigate}
        navItems={navItems}
        currentPage={currentPage}
        whatsappUrl={whatsappUrl}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {currentPage === "home" && (
        <HomePage
          navigate={navigate}
          searchData={searchData}
          setSearchData={setSearchData}
          properties={properties}
          services={[]}
          testimonials={[]}
          openProperty={openProperty}
        />
      )}

      {currentPage === "about" && <AboutPage />}

      {currentPage === "properties" && (
        <PropertiesPage
          filteredProperties={filteredProperties}
          openProperty={openProperty}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      )}

      {currentPage === "propertyDetails" && (
        <PropertyDetailsPage
          selectedProperty={selectedProperty}
          properties={properties}
        />
      )}

      {currentPage === "agents" && <AgentsPage />}
      {currentPage === "contact" && <ContactPage />}
      <RealEstatePricing />
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 PrimeNest Realty. All rights reserved.
      </footer>
    </div>
  );
}

