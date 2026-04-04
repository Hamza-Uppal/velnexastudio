"use client";

import TrainerPricing from "../../components/pricing/TrainerPricing";
import { useState } from "react";
import {
  Menu,
  X,
  Dumbbell,
  Clock3,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

function Header({ mobileOpen, setMobileOpen }) {
  const navItems = ["Home", "About", "Programs", "Results", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Coach Ayaan</h1>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Personal Trainer</p>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/70 transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-2xl bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Book Free Call
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-neutral-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
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
      <p className="text-sm uppercase tracking-[0.25em] text-lime-400/80">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">{text}</p>
    </div>
  );
}

function ProgramCard({ title, price, text, features }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-3xl font-bold text-lime-400">{price}</p>
      <p className="mt-4 text-sm leading-7 text-white/65">{text}</p>
      <div className="mt-6 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-white/75">
            <CheckCircle2 size={16} className="text-lime-400" />
            {feature}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
      >
        Get Started <ChevronRight size={16} />
      </a>
    </div>
  );
}

function TestimonialCard({ name, result, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-lime-400 text-lime-400" />
        ))}
      </div>
      <p className="text-sm leading-7 text-white/70">“{text}”</p>
      <div className="mt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-lime-400">{result}</p>
      </div>
    </div>
  );
}

export default function PersonalTrainerWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const programs = [
    {
      title: "1-on-1 Coaching",
      price: "$199/mo",
      text: "For clients who want full accountability, tailored workouts, nutrition guidance, and weekly check-ins.",
      features: ["Custom training plan", "Nutrition targets", "Weekly progress review", "WhatsApp support"],
    },
    {
      title: "Fat Loss Program",
      price: "$149/mo",
      text: "A structured coaching plan focused on sustainable fat loss, energy improvement, and better lifestyle habits.",
      features: ["Beginner-friendly workouts", "Meal structure guidance", "Habit tracking", "Progress check-ins"],
    },
    {
      title: "Muscle Building",
      price: "$179/mo",
      text: "Built for clients who want to gain lean muscle, improve strength, and train with a clear progression system.",
      features: ["Strength-focused plan", "Workout progression", "Recovery guidance", "Form feedback"],
    },
  ];

  const testimonials = [
    {
      name: "Ahmed R.",
      result: "Lost 11 kg in 14 weeks",
      text: "I stopped guessing in the gym. The plan was simple, realistic, and actually worked with my busy schedule.",
    },
    {
      name: "Sara M.",
      result: "Built strength and consistency",
      text: "I finally became consistent because everything was clear. The support and accountability made the difference.",
    },
    {
      name: "Daniel K.",
      result: "Dropped body fat and gained muscle",
      text: "This was the first coaching program that felt personalized instead of generic. I could see progress every few weeks.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
            alt="Personal trainer hero"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/35 via-neutral-950/70 to-neutral-950" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              Online Coaching • Fat Loss • Strength • Body Transformation
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Get stronger, leaner, and more confident with coaching built around your real life.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Personal training for busy professionals who want clear structure, real accountability, and results that last.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Book Free Consultation
              </a>
              <a
                href="#programs"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Programs
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["200+", "Clients Coached"],
                ["8+", "Years Experience"],
                ["4.9/5", "Average Rating"],
                ["24/7", "Support Access"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Why clients stay consistent</h3>
            <div className="mt-6 space-y-4">
              {[
                [Dumbbell, "Custom workout plan for your level and goal"],
                [Clock3, "Coaching built around your schedule"],
                [CheckCircle2, "Simple nutrition guidance without extremes"],
                [Star, "Weekly accountability and progress review"],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="rounded-2xl bg-lime-400/15 p-3 text-lime-400">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm leading-7 text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
            alt="Coach training client"
            className="h-full min-h-[420px] w-full rounded-[32px] object-cover"
          />

          <div>
            <SectionTitle
              eyebrow="About Coach"
              title="Fitness coaching that removes confusion and gives you a clear path"
              text="Most people do not fail because they lack motivation. They fail because the plan is unclear, too extreme, or impossible to follow. This coaching fixes that by keeping training practical and sustainable."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Certified personal trainer",
                "Online and in-person options",
                "Beginner to advanced clients",
                "Strength, fat loss, and body recomposition",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Programs"
            title="Choose the coaching level that fits your goal"
            text="These packages are structured so prospects can immediately understand what they are buying instead of being told to 'DM for details.'"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Client Results"
          title="Proof matters more than motivation quotes"
          text="This section should eventually use real before-and-after photos, testimonials, and measurable outcomes from actual clients."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-lime-400/80">How It Works</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  A simple process clients can actually follow
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Consultation"],
                  ["02", "Custom Plan"],
                  ["03", "Weekly Support"],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
                    <div className="text-2xl font-bold text-lime-400">{num}</div>
                    <div className="mt-2 text-sm text-white/70">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Ready to start training with structure and accountability?"
              text="This form can later be connected to Formspree, Web3Forms, EmailJS, or your backend."
            />

            <div className="mt-8 space-y-4 text-sm text-white/70">
              <p className="flex items-center gap-3"><Phone size={16} /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-3"><Mail size={16} /> coach@ayaanfit.com</p>
              <p className="flex items-center gap-3"><MapPin size={16} /> Dubai Marina / Online Coaching</p>
              <p className="flex items-center gap-3"><span>📷</span> @ayaanfit</p>
            </div>
          </div>

          <form className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />
              <select className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none">
                <option>Fat Loss</option>
                <option>Muscle Building</option>
                <option>General Fitness</option>
                <option>Strength Training</option>
              </select>
            </div>
            <textarea
              rows={6}
              placeholder="Tell me about your goal, current fitness level, and what you are struggling with"
              className="mt-4 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
            />
            <button
              type="button"
              className="mt-4 w-full rounded-2xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
                <TrainerPricing />
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 Coach Ayaan. All rights reserved.
      </footer>
    </div>
  );
}
