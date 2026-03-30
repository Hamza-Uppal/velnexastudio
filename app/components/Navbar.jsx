"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demos", href: "#demos" },
    { label: "Software", href: "#software" },
    { label: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!open) return;

      const target = event.target;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="container-main flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Image
                src="/velnexa-logo.png"
                alt="Velnexa Studio"
                width={50}
                height={50}
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-xl font-bold tracking-wide text-white">
                Velnexa Studio
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
                Digital Systems & Websites
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 lg:inline-flex"
          >
            Start Project
          </a>

          <button
            ref={buttonRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-blue-400 hover:text-blue-400 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={menuRef}
        className={`fixed left-0 right-0 top-[81px] z-50 px-4 transition-all duration-300 ease-out lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="container-main rounded-3xl border border-white/10 bg-[#020617]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
                style={{
                  transitionDelay: open ? `${index * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
