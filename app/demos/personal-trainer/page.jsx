"use client";

import Image from "next/image";
import { useState } from "react";
import TrainerPricing from "../../components/pricing/TrainerPricing";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Dumbbell,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  X,
} from "lucide-react";

const navItems = ["About", "Programs", "Results", "Process", "Contact"];

const programs = [
  {
    title: "1-on-1 Coaching",
    price: "AED 799 / month",
    text: "Tailored workouts, nutrition targets, weekly reviews, and direct accountability.",
    features: ["Custom training plan", "Nutrition structure", "Weekly check-ins", "WhatsApp support"],
  },
  {
    title: "Fat Loss Reset",
    price: "AED 599 / month",
    text: "A sustainable transformation plan for busy clients who want energy, confidence, and consistency.",
    features: ["Beginner-friendly workouts", "Meal structure", "Habit tracking", "Progress reporting"],
    featured: true,
  },
  {
    title: "Strength Build",
    price: "AED 699 / month",
    text: "Progressive strength programming for clients who want muscle, better form, and measurable lifts.",
    features: ["Strength progression", "Technique guidance", "Recovery plan", "Form feedback"],
  },
];

const testimonials = [
  ["Ahmed R.", "Lost 11 kg in 14 weeks", "The plan worked with my schedule. I stopped guessing and finally stayed consistent."],
  ["Sara M.", "Built strength and confidence", "The accountability made the difference. Everything felt clear and realistic."],
  ["Daniel K.", "Dropped body fat", "It felt personal instead of generic. I could see progress every few weeks."],
];

function Header({ open, setOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0a]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lime-300 text-[#090b0a]">
            <Dumbbell className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-xl font-black text-white">Coach Ayaan</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-lime-300">
              Strength Coach
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/68 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-lime-300 px-5 py-3 text-sm font-black text-[#090b0a] transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Book Free Call
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
        <div className="border-t border-white/10 bg-[#090b0a] px-5 py-4 lg:hidden">
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

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/65">{text}</p>
    </div>
  );
}

function ProgramCard({ title, price, text, features, featured }) {
  return (
    <article
      className={`rounded-lg border p-6 shadow-xl ${
        featured ? "border-lime-300 bg-lime-300 text-[#090b0a]" : "border-white/10 bg-white/[0.06] text-white"
      }`}
    >
      {featured && (
        <span className="rounded-lg bg-[#090b0a] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-lime-300">
          Most Popular
        </span>
      )}
      <h3 className="mt-5 text-2xl font-black">{title}</h3>
      <p className={`mt-3 text-3xl font-black ${featured ? "text-[#090b0a]" : "text-lime-300"}`}>{price}</p>
      <p className={`mt-4 text-sm leading-7 ${featured ? "text-[#090b0a]/72" : "text-white/65"}`}>{text}</p>
      <div className="mt-6 grid gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm font-semibold">
            <CheckCircle2 className="h-5 w-5" /> {feature}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className={`mt-7 inline-flex items-center gap-2 rounded-lg px-5 py-3 font-black ${
          featured ? "bg-[#090b0a] text-white" : "bg-lime-300 text-[#090b0a]"
        }`}
      >
        Get Started <ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function PersonalTrainerWebsite() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090b0a] text-white">
      <Header open={open} setOpen={setOpen} />

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=85"
            alt="Strength training gym"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090b0a] via-[#090b0a]/86 to-[#090b0a]/38" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/80">
              <Trophy className="h-4 w-4 text-lime-300" />
              Online and in-person coaching demo
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Coaching Built for Real Bodies, Busy Lives, and Lasting Results
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A premium trainer website for programs, proof, booking inquiries, and clear positioning that turns visitors into coaching clients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-7 py-4 font-black text-[#090b0a]">
                View Programs <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 font-black text-white">
                Book Free Consultation
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["200+", "Clients coached"],
                ["8+", "Years coaching"],
                ["4.9", "Avg rating"],
                ["24/7", "Support access"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4">
                  <p className="text-2xl font-black text-lime-300">{value}</p>
                  <p className="mt-1 text-sm text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-black">Why clients stay consistent</h2>
            <div className="mt-6 grid gap-4">
              {[
                [Dumbbell, "Custom training for your level and schedule"],
                [Target, "Clear targets for fat loss, strength, or recomposition"],
                [Clock3, "Weekly check-ins that keep momentum visible"],
                [ShieldCheck, "Sustainable nutrition without extreme rules"],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-start gap-4 rounded-lg bg-black/24 p-4">
                  <span className="rounded-lg bg-lime-300/15 p-3 text-lime-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold leading-7 text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[500px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
              alt="Coach training client"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="About"
              title="A coaching page should sell clarity, not just intensity"
              text="The page is structured around trust, simple programs, clear next steps, and proof. It helps a trainer look serious before the first call."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Certified personal trainer", "Online and Dubai sessions", "Beginner to advanced plans", "Strength and fat loss focus"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 font-semibold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white/[0.04] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Programs"
            title="Simple offers prospects can understand fast"
            text="Clear package cards make it easier for visitors to choose a starting point and inquire without friction."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Client Results"
          title="Social proof that feels specific and believable"
          text="Use testimonials, outcomes, and before-after proof to make the offer easier to trust."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(([name, result, text]) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
              <div className="flex gap-1 text-lime-300">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-5 min-h-24 leading-7 text-white/68">&quot;{text}&quot;</p>
              <p className="mt-6 font-black">{name}</p>
              <p className="mt-1 text-sm font-semibold text-lime-300">{result}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-white/[0.04] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle
              eyebrow="Process"
              title="From inquiry to weekly accountability"
              text="The process section lowers hesitation by showing exactly what happens after a visitor books a call."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [CalendarCheck, "Consultation", "Goals, schedule, history, and starting point."],
                [Target, "Custom Plan", "Training, nutrition structure, and measurable targets."],
                [Trophy, "Progress Review", "Weekly check-ins, adjustments, and accountability."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-[#090b0a] p-5">
                  <Icon className="h-7 w-7 text-lime-300" />
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Turn interest into booked consultations"
              text="This lead form can connect to email, WhatsApp, CRM, or a training dashboard."
            />
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-lime-300" /> +971 50 000 0000</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-lime-300" /> coach@ayaanfit.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-lime-300" /> Dubai Marina / Online Coaching</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-4 outline-none" placeholder="Full name" />
              <input className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-4 outline-none" placeholder="Phone number" />
            </div>
            <input className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-4 outline-none" placeholder="Email address" />
            <select className="rounded-lg border border-white/10 bg-neutral-900 px-4 py-4 outline-none">
              <option>Fat Loss</option>
              <option>Muscle Building</option>
              <option>Strength Training</option>
              <option>General Fitness</option>
            </select>
            <textarea
              className="min-h-32 rounded-lg border border-white/10 bg-neutral-900 px-4 py-4 outline-none"
              placeholder="Tell me your goal, current level, and biggest struggle"
            />
            <button type="button" className="rounded-lg bg-lime-300 px-6 py-4 font-black text-[#090b0a]">
              Send Coaching Inquiry
            </button>
          </form>
        </div>
      </section>

      <TrainerPricing />

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/45">
        Coach Ayaan demo built by Velnexa Studio.
      </footer>
    </main>
  );
}
