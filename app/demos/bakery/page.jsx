"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import BakeryPricing from "../../components/pricing/BakeryPricing";
import {
  ArrowRight,
  CalendarCheck,
  CakeSlice,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  Clock3,
  Coffee,
  Croissant,
  Gift,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";

const navItems = ["Atelier", "Menu", "Occasions", "Gifting", "Private Orders"];

const categories = ["All", "Cakes", "Pastries", "Macarons", "Gifting", "Coffee"];

const products = [
  {
    name: "Noir Chocolate Entremet",
    category: "Cakes",
    price: 295,
    oldPrice: 340,
    rating: 4.9,
    tag: "Signature",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pistachio Rose Celebration Cake",
    category: "Cakes",
    price: 325,
    oldPrice: 380,
    rating: 5.0,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Butter Croissant Box",
    category: "Pastries",
    price: 86,
    oldPrice: 110,
    rating: 4.8,
    tag: "Morning Bake",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Parisian Macaron Gift Set",
    category: "Macarons",
    price: 145,
    oldPrice: 175,
    rating: 4.9,
    tag: "Gift Ready",
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Executive Dessert Chest",
    category: "Gifting",
    price: 425,
    oldPrice: 495,
    rating: 4.9,
    tag: "Corporate",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Spanish Latte Pairing",
    category: "Coffee",
    price: 42,
    oldPrice: 54,
    rating: 4.7,
    tag: "Cafe Pick",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",
  },
];

const occasions = [
  {
    title: "Celebration Cakes",
    text: "Tall occasion cakes finished with ganache, florals, gold detail, and custom messages.",
    icon: CakeSlice,
  },
  {
    title: "Corporate Gifting",
    text: "Dessert boxes, branded sleeves, invoice support, and scheduled delivery windows.",
    icon: Gift,
  },
  {
    title: "Morning Pastry Service",
    text: "Daily croissants, viennoiserie, coffee pairings, and office breakfast trays.",
    icon: Croissant,
  },
];

const features = [
  [Truck, "Same-day Dubai delivery"],
  [ShieldCheck, "Secure checkout ready"],
  [CalendarCheck, "Custom pre-orders"],
  [Sparkles, "Premium packaging"],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

export default function PremiumBakeryDemoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [favorite, setFavorite] = useState("Noir Chocolate Entremet");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#fbf7f0] text-[#171412]">
      <div className="bg-[#171412] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d28b]">
        Same-day delivery in Dubai for orders before 2 PM
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e5ded3] bg-[#fbf7f0]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="flex items-center gap-3" aria-label="Maison Velour home">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#171412] text-[#f4d28b] shadow-lg">
              <ChefHat className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight">Maison Velour</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[#7a1f3d]">
                Patisserie
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#5a5148] lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#7a1f3d]">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden flex-1 justify-center px-4 xl:flex">
            <label className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-[#e5ded3] bg-white px-4 py-3 shadow-sm">
              <Search className="h-4 w-4 text-[#7a1f3d]" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#8a8177]"
                placeholder="Search cakes, macarons, gifts..."
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#private-orders"
              className="hidden rounded-lg bg-[#7a1f3d] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#7a1f3d]/20 transition hover:bg-[#5d172f] md:inline-flex"
            >
              Order Now
            </a>
            <button
              type="button"
              onClick={() => setCartCount((count) => count + 1)}
              className="relative rounded-lg bg-[#171412] p-3 text-white shadow-lg"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f4d28b] px-1 text-xs font-black text-[#171412]">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg border border-[#e5ded3] bg-white p-3 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-black/55 lg:hidden">
          <div className="ml-auto h-full w-[86%] max-w-sm bg-[#fbf7f0] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xl font-black">Menu</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-[#e5ded3] bg-white p-3"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-white px-5 py-4 font-bold text-[#5a5148] shadow-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <section id="atelier" className="relative overflow-hidden bg-[#171412] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=85"
            alt="Luxury bakery counter with pastries"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171412] via-[#171412]/88 to-[#171412]/35" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171412] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#f4d28b]" />
              Handcrafted cakes, pastries, and gift boxes
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-tight md:text-7xl xl:text-8xl">
              Luxury Bakery Experiences for Beautiful Occasions
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              Signature cakes, French pastries, macarons, and corporate dessert gifting made with premium ingredients and elegant finishing.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f4d28b] px-7 py-4 font-black text-[#171412] shadow-2xl shadow-[#f4d28b]/20 transition hover:-translate-y-0.5"
              >
                Explore Menu <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#private-orders"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/10"
              >
                Custom Cake Inquiry
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["4.9", "Rated by guests"],
                ["2,500+", "Orders crafted"],
                ["24h", "Custom notice"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-[#f4d28b] md:text-3xl">{value}</p>
                  <p className="mt-1 text-xs text-white/58 md:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -right-2 -top-4 z-10 rounded-lg bg-white px-5 py-4 text-[#171412] shadow-2xl md:-right-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7a1f3d]">Today</p>
              <p className="text-lg font-black">Chef Selection</p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[460px] overflow-hidden rounded-lg bg-white text-[#171412]">
                <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90"
                  alt="Chocolate truffle cake with glossy ganache"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171412]/92 to-transparent p-6 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4d28b]">Signature Cake</p>
                  <h2 className="mt-2 text-3xl font-black md:text-4xl">Noir Chocolate Entremet</h2>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/65">Starting from</p>
                      <p className="text-2xl font-black">AED 295</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCartCount((count) => count + 1)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#f4d28b] px-5 py-3 font-black text-[#171412]"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#e5ded3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-3 rounded-lg bg-[#fbf7f0] p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#171412] text-[#f4d28b]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-black">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-20">
        <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.26em] text-[#7a1f3d]">Premium Menu</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Curated patisserie favorites ready to order
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#675d54]">
              Browse signature cakes, fresh pastries, luxury gifting, macarons, and cafe pairings with clear prices and fast ordering.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-3 text-sm font-black transition ${
                  activeCategory === category
                    ? "bg-[#171412] text-white"
                    : "border border-[#e5ded3] bg-white text-[#5a5148] hover:border-[#7a1f3d]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-[#e5ded3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#171412]/10"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/72 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#7a1f3d] shadow-lg">
                  {product.tag}
                </div>
                <button
                  type="button"
                  onClick={() => setFavorite(product.name)}
                  className={`absolute right-4 top-4 rounded-lg p-3 backdrop-blur ${
                    favorite === product.name ? "bg-[#7a1f3d] text-white" : "bg-white/85 text-[#171412]"
                  }`}
                  aria-label={`Favorite ${product.name}`}
                >
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4d28b]">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight">{product.name}</h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#f0b84d]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-black text-[#171412]">{product.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#008060]">Available</p>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#8a8177] line-through">AED {product.oldPrice}</p>
                    <p className="text-2xl font-black text-[#7a1f3d]">AED {product.price}</p>
                  </div>
                  <div className="flex h-10 items-center overflow-hidden rounded-lg border border-[#e5ded3] bg-[#fbf7f0]">
                    <button type="button" className="p-3 hover:bg-white" aria-label="Decrease quantity">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-1 text-sm font-black">1</span>
                    <button type="button" className="p-3 hover:bg-white" aria-label="Increase quantity">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCartCount((count) => count + 1)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#171412] px-5 py-3 font-black text-white transition hover:bg-[#7a1f3d]"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="occasions" className="bg-[#171412] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.26em] text-[#f4d28b]">Occasions</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Built for celebrations, boardrooms, and gifting moments
              </h2>
            </div>
            <a
              href="#private-orders"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 font-black text-white/88 hover:bg-white/10"
            >
              Plan an Order <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {occasions.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeUp} className="rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4d28b] text-[#171412]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/68">{item.text}</p>
                  <button type="button" className="mt-7 inline-flex items-center gap-2 font-black text-[#f4d28b]">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gifting" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...fadeUp} className="relative h-[520px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=85"
              alt="Bakery display with fresh artisan pastries"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="font-black uppercase tracking-[0.26em] text-[#7a1f3d]">Gifting Atelier</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              Premium boxes designed to feel personal before they are opened
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#675d54]">
              Offer elegant dessert chests, macaron towers, branded corporate sleeves, and curated tasting boxes for clients, teams, and events.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Custom message cards", "Branded sleeves", "Bulk order pricing", "Scheduled delivery"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-[#fbf7f0] p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#008060]" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="private-orders" className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-[#171412]/10 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#7a1f3d] p-8 text-white md:p-12">
            <p className="font-black uppercase tracking-[0.26em] text-[#f4d28b]">Private Orders</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Start a custom bakery order</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Collect occasion details, quantities, dates, delivery area, and budget for custom cakes or corporate gifting.
            </p>

            <div className="mt-9 grid gap-4">
              {[
                [Phone, "+971 50 000 0000"],
                [Mail, "orders@maisonvelour.ae"],
                [MapPin, "Dubai, United Arab Emirates"],
                [Clock3, "Open daily, 8 AM to 10 PM"],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
                  <Icon className="h-5 w-5 text-[#f4d28b]" />
                  <span className="font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button type="button" className="rounded-lg bg-white/15 p-4 backdrop-blur hover:bg-white/25" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </button>
              <button type="button" className="rounded-lg bg-white/15 p-4 backdrop-blur hover:bg-white/25" aria-label="Coffee menu">
                <Coffee className="h-5 w-5" />
              </button>
            </div>
          </div>

          <form className="p-8 md:p-12">
            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-black">
                  Name
                  <input className="rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  Phone
                  <input className="rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]" placeholder="Phone number" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-black">
                Order Type
                <span className="relative">
                  <select className="w-full appearance-none rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]">
                    <option>Custom Celebration Cake</option>
                    <option>Dessert Gift Box</option>
                    <option>Corporate Catering</option>
                    <option>Daily Pastry Supply</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7a1f3d]" />
                </span>
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-black">
                  Preferred Date
                  <input type="date" className="rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]" />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  Budget
                  <input className="rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]" placeholder="AED 300 - AED 1,000" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-black">
                Details
                <textarea
                  className="min-h-36 rounded-lg border border-[#e5ded3] bg-[#fbf7f0] px-5 py-4 outline-none focus:border-[#7a1f3d]"
                  placeholder="Tell us flavors, quantity, theme, delivery area, or event details"
                />
              </label>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171412] px-7 py-4 font-black text-white shadow-xl transition hover:bg-[#7a1f3d]"
              >
                Send Inquiry <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <BakeryPricing variant="website" />

      <footer className="border-t border-[#e5ded3] bg-[#171412] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#f4d28b]">
              <ChefHat className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-black">Maison Velour</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Luxury Patisserie</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/55">
            Premium bakery website concept for cakes, pastries, macarons, gifting, catering, and private celebration orders.
          </p>
        </div>
      </footer>
    </main>
  );
}
