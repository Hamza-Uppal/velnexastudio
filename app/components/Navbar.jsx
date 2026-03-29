import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="container-main flex items-center justify-between py-4">

        {/* 🔥 LOGO SECTION (FIXED VISIBILITY) */}
        <a href="#home" className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-xl bg-white/5 p-2 border border-white/10">
            <Image
              src="/velnexa-logo.png"
              alt="Velnexa Studio"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <div className="text-xl font-bold text-white tracking-wide">
              Velnexa Studio
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
              Digital Systems & Websites
            </div>
          </div>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
          <a href="#demos" className="hover:text-blue-400 transition">Demos</a>
          <a href="#software" className="hover:text-blue-400 transition">Software</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
        >
          Start Project
        </a>
      </div>
    </header>
  );
}