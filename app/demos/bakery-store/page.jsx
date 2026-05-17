"use client";

import React, { useMemo, useState } from "react";
import BakeryPricing from "../../components/pricing/BakeryPricing";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  CakeSlice,
  Croissant,
  Cookie,
  Coffee,
  Gift,
  Truck,
  ShieldCheck,
  Clock3,
  Star,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  BadgePercent,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Cakes", icon: CakeSlice, count: "42 items" },
  { name: "Pastries", icon: Croissant, count: "28 items" },
  { name: "Cookies", icon: Cookie, count: "18 items" },
  { name: "Coffee", icon: Coffee, count: "12 items" },
  { name: "Gift Boxes", icon: Gift, count: "16 items" },
];

const products = [
  {
    name: "Belgian Chocolate Cake",
    category: "Cakes",
    price: 189,
    oldPrice: 229,
    rating: 4.9,
    tag: "Best Seller",
    gradient: "from-[#3b2118] via-[#8b4a2c] to-[#d6a062]",
  },
  {
    name: "Lotus Cheesecake Slice",
    category: "Cakes",
    price: 24,
    oldPrice: 32,
    rating: 4.8,
    tag: "Hot Deal",
    gradient: "from-[#6f3d1d] via-[#c47a35] to-[#f3c06d]",
  },
  {
    name: "Pistachio Croissant",
    category: "Pastries",
    price: 18,
    oldPrice: 24,
    rating: 4.9,
    tag: "Fresh Today",
    gradient: "from-[#335b32] via-[#9ba84a] to-[#f0d98a]",
  },
  {
    name: "French Butter Croissant",
    category: "Pastries",
    price: 12,
    oldPrice: 15,
    rating: 4.7,
    tag: "Daily Bake",
    gradient: "from-[#a86528] via-[#d8984d] to-[#ffe0a1]",
  },
  {
    name: "Premium Cookie Box",
    category: "Cookies",
    price: 79,
    oldPrice: 99,
    rating: 4.8,
    tag: "Gift Ready",
    gradient: "from-[#4a2818] via-[#9c5b32] to-[#e4b676]",
  },
  {
    name: "Mini Dessert Gift Box",
    category: "Gift Boxes",
    price: 119,
    oldPrice: 149,
    rating: 4.9,
    tag: "Popular",
    gradient: "from-[#4b2c62] via-[#b46a92] to-[#ffd4b8]",
  },
  {
    name: "Arabic Sweets Mix",
    category: "Gift Boxes",
    price: 139,
    oldPrice: 169,
    rating: 4.6,
    tag: "Premium",
    gradient: "from-[#5b3517] via-[#c08a3c] to-[#ffe0a3]",
  },
  {
    name: "Iced Spanish Latte",
    category: "Coffee",
    price: 21,
    oldPrice: 26,
    rating: 4.7,
    tag: "Cafe Pick",
    gradient: "from-[#3c251b] via-[#7d5136] to-[#d7b28a]",
  },
];

const collections = [
  {
    title: "Birthday Cakes",
    text: "Custom cakes for birthdays, kids parties, and family celebrations.",
    cta: "Shop Cakes",
  },
  {
    title: "Corporate Dessert Boxes",
    text: "Premium boxes for office meetings, client gifts, and staff events.",
    cta: "Order Boxes",
  },
  {
    title: "Fresh Morning Pastries",
    text: "Croissants, danish, muffins, and daily fresh bakery items.",
    cta: "View Pastries",
  },
];

const navItems = ["Cakes", "Pastries", "Sweets", "Breads", "Gift Boxes", "Hot Deals", "Corporate Orders"];

export default function BakeryOnlineStoreDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#26170f]">
      <div className="bg-[#2a1810] px-4 py-3 text-center text-sm font-semibold text-white">
        Same-day delivery available in Dubai • Free delivery above AED 150 • Freshly baked daily
      </div>

      <header className="sticky top-0 z-50 border-b border-[#ead8c6] bg-[#fff8ef]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-2xl border border-[#ead8c6] p-3 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2a1810] text-[#ffd08a] shadow-xl">
              <CakeSlice className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">CrumbCart</p>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a6b4a]">Bakery Store</p>
            </div>
          </a>

          <div className="hidden flex-1 lg:block">
            <div className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-[#ead8c6] bg-white px-5 py-3 shadow-sm">
              <Search className="h-5 w-5 text-[#9a6b4a]" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#9a6b4a]"
                placeholder="Search cakes, pastries, cookies, gift boxes..."
              />
              <button className="rounded-full bg-[#2a1810] px-5 py-2 text-sm font-black text-white">Search</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-2xl border border-[#ead8c6] bg-white p-3 shadow-sm md:block">
              <User className="h-5 w-5" />
            </button>
            <button className="relative rounded-2xl bg-[#2a1810] p-3 text-white shadow-xl" onClick={() => setCartCount(cartCount + 1)}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d98f3d] text-xs font-black text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <nav className="hidden border-t border-[#ead8c6] bg-white lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <div className="flex items-center gap-7 text-sm font-bold text-[#5f3f2b]">
              {navItems.map((item) => (
                <a key={item} href="#products" className="flex items-center gap-1 hover:text-[#b96b2c]">
                  {item}
                  {item === "Cakes" && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
            </div>
            <a href="#corporate" className="flex items-center gap-2 rounded-full bg-[#fff0d9] px-4 py-2 text-sm font-black text-[#9a571f]">
              <BadgePercent className="h-4 w-4" /> Bulk Order Deals
            </a>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-black/50 lg:hidden">
          <div className="h-full w-[85%] max-w-sm bg-[#fff8ef] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xl font-black">Menu</p>
              <button onClick={() => setMobileOpen(false)} className="rounded-2xl border border-[#ead8c6] p-3">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-2">
              {navItems.map((item) => (
                <a key={item} href="#products" className="block rounded-2xl bg-white px-5 py-4 font-bold text-[#5f3f2b] shadow-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden bg-[#2a1810] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#b96b2c_0%,transparent_32%),radial-gradient(circle_at_80%_30%,#ffd08a_0%,transparent_28%)] opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1810] via-[#4b2b1b]/95 to-[#2a1810]/80" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#ffd08a]" /> Online bakery store demo for real product selling
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Order Fresh Cakes, Pastries & Dessert Boxes Online
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/72">
              A complete bakery e-commerce style demo with categories, product cards, prices, offers, cart-ready layout, delivery badges, and conversion-focused sections.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd08a] px-8 py-4 font-black text-[#2a1810] shadow-2xl transition hover:scale-105">
                Shop Products <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#corporate" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white/10">
                Corporate Orders
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                [Truck, "Fast Delivery", "Same-day slots"],
                [ShieldCheck, "Secure Checkout", "Payment ready"],
                [Clock3, "Fresh Daily", "Morning batches"],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <Icon className="h-7 w-7 text-[#ffd08a]" />
                  <p className="mt-4 font-black">{title}</p>
                  <p className="mt-1 text-sm text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-2 -top-4 z-10 rounded-3xl bg-white px-5 py-4 text-[#2a1810] shadow-2xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b96b2c]">Hot Deal</p>
              <p className="text-xl font-black">20% Off Cakes</p>
            </div>
            <div className="rounded-[3rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2.4rem] bg-[#fff3df] p-5 text-[#2a1810]">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3b2118] via-[#9c5b32] to-[#ffd08a] p-7 text-white">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">Featured Product</span>
                    <Heart className="h-6 w-6" />
                  </div>
                  <div className="relative mt-36">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd08a]">Signature Cake</p>
                    <h2 className="mt-3 text-4xl font-black leading-tight">Belgian Chocolate Celebration Cake</h2>
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/65">Starting from</p>
                        <p className="text-3xl font-black">AED 189</p>
                      </div>
                      <button className="rounded-full bg-white px-6 py-3 font-black text-[#2a1810]">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black">4.9★</p>
                    <p className="text-sm font-semibold text-[#9a6b4a]">Product rating</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black">2k+</p>
                    <p className="text-sm font-semibold text-[#9a6b4a]">Monthly orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.3em] text-[#b96b2c]">Shop By Category</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Popular bakery categories</h2>
          </div>
          <a href="#products" className="inline-flex items-center gap-2 font-black text-[#b96b2c]">
            View all products <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`rounded-[2rem] border p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  activeCategory === category.name ? "border-[#2a1810] bg-[#2a1810] text-white" : "border-[#ead8c6] bg-white text-[#26170f]"
                }`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activeCategory === category.name ? "bg-white/10 text-[#ffd08a]" : "bg-[#fff0d9] text-[#b96b2c]"}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-lg font-black">{category.name}</p>
                <p className={`mt-1 text-sm ${activeCategory === category.name ? "text-white/55" : "text-[#9a6b4a]"}`}>{category.count}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div key={item.title} className={`rounded-[2.5rem] p-8 text-white shadow-xl ${index === 0 ? "bg-[#2a1810]" : index === 1 ? "bg-[#8f4e26]" : "bg-[#b96b2c]"}`}>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd08a]">Collection</p>
              <h3 className="mt-4 text-3xl font-black">{item.title}</h3>
              <p className="mt-4 min-h-20 leading-7 text-white/75">{item.text}</p>
              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-[#2a1810]">
                {item.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-[#b96b2c]">Online Store</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Best sellers and fresh arrivals</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#7a5943]">
                Product grid structure for cakes, sweets, pastries, breads, gift boxes, drinks, and seasonal promotions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["All", "Cakes", "Pastries", "Cookies", "Coffee", "Gift Boxes"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-3 text-sm font-black transition ${
                    activeCategory === category ? "bg-[#2a1810] text-white" : "bg-[#fff0d9] text-[#9a571f] hover:bg-[#f6d5a7]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-[2.2rem] border border-[#ead8c6] bg-[#fffaf3] shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <div className={`relative h-56 bg-gradient-to-br ${product.gradient} p-5 text-white`}>
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/25 blur-2xl" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-2 text-xs font-black backdrop-blur">{product.tag}</span>
                    <button className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/30">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffe0a3]">{product.category}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{product.name}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#d98f3d]">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-black text-[#26170f]">{product.rating}</span>
                    </div>
                    <p className="text-xs font-bold text-[#9a6b4a]">In stock</p>
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#9a6b4a] line-through">AED {product.oldPrice}</p>
                      <p className="text-2xl font-black text-[#b96b2c]">AED {product.price}</p>
                    </div>
                    <div className="flex items-center overflow-hidden rounded-full border border-[#ead8c6] bg-white">
                      <button className="p-2 hover:bg-[#fff0d9]"><Minus className="h-4 w-4" /></button>
                      <span className="px-2 text-sm font-black">1</span>
                      <button className="p-2 hover:bg-[#fff0d9]"><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>

                  <button onClick={() => setCartCount(cartCount + 1)} className="mt-5 w-full rounded-full bg-[#2a1810] px-5 py-3 font-black text-white transition hover:bg-[#b96b2c]">
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid overflow-hidden rounded-[3rem] bg-[#2a1810] text-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.3em] text-[#ffd08a]">Corporate Orders</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Bulk dessert boxes for offices, events and gifting</h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
              This section helps bakeries win bigger orders from companies, schools, events, and hotels. It can connect to an inquiry form, WhatsApp, CRM, or Google Sheets.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Bulk pricing", "Custom branding", "Invoice support", "Delivery scheduling"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="h-5 w-5 text-[#ffd08a]" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#8f4e26] to-[#ffd08a] p-8 md:p-12">
            <div className="rounded-[2.5rem] bg-white p-7 text-[#26170f] shadow-2xl">
              <h3 className="text-3xl font-black">Request Bulk Quote</h3>
              <div className="mt-6 grid gap-4">
                <input className="rounded-2xl border border-[#ead8c6] bg-[#fff8ef] px-5 py-4 outline-none focus:border-[#b96b2c]" placeholder="Company / Name" />
                <input className="rounded-2xl border border-[#ead8c6] bg-[#fff8ef] px-5 py-4 outline-none focus:border-[#b96b2c]" placeholder="Phone number" />
                <select className="rounded-2xl border border-[#ead8c6] bg-[#fff8ef] px-5 py-4 outline-none focus:border-[#b96b2c]">
                  <option>Corporate dessert boxes</option>
                  <option>Birthday cake order</option>
                  <option>Event catering</option>
                  <option>Daily bakery supply</option>
                </select>
                <textarea className="min-h-28 rounded-2xl border border-[#ead8c6] bg-[#fff8ef] px-5 py-4 outline-none focus:border-[#b96b2c]" placeholder="Quantity, date, delivery area, and order details" />
                <button className="rounded-full bg-[#2a1810] px-6 py-4 font-black text-white hover:bg-[#b96b2c]">Send Quote Request</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              [Truck, "Same-Day Delivery", "Delivery slots for cakes and fresh bakery items."],
              [ShieldCheck, "Secure Payments", "Ready for card, Apple Pay, or cash on delivery."],
              [Clock3, "Fresh Daily", "Daily bakery batches with freshness messaging."],
              [Gift, "Gift Packaging", "Premium boxes for events, gifting, and corporate orders."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-[2rem] bg-[#fff8ef] p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0d9] text-[#b96b2c]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[#7a5943]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BakeryPricing variant="store" />

      <footer className="bg-[#2a1810] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#ffd08a]">
                <CakeSlice className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xl font-black">CrumbCart</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Bakery Online Store</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-8 text-white/60">
              E-commerce bakery demo for cakes, pastries, gift boxes, online orders, bulk inquiries, and delivery-focused selling.
            </p>
          </div>

          <div>
            <p className="font-black text-[#ffd08a]">Shop</p>
            <div className="mt-4 space-y-3 text-white/60">
              <p>Cakes</p>
              <p>Pastries</p>
              <p>Gift Boxes</p>
              <p>Hot Deals</p>
            </div>
          </div>

          <div>
            <p className="font-black text-[#ffd08a]">Support</p>
            <div className="mt-4 space-y-3 text-white/60">
              <p>Delivery Info</p>
              <p>Order Tracking</p>
              <p>Refund Policy</p>
              <p>Corporate Orders</p>
            </div>
          </div>

          <div>
            <p className="font-black text-[#ffd08a]">Contact</p>
            <div className="mt-4 space-y-4 text-white/60">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +971 50 000 0000</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> orders@crumbcart.ae</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Dubai, UAE</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">
          CrumbCart Bakery Online Store Demo — Built by Velnexa Studio
        </div>
      </footer>
    </main>
  );
}
