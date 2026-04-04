import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-0 py-10 text-slate-400">
      <div className="container-main grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/velnexa-logo.png"
              alt="Velnexa Studio"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>

          <div>
            <div className="text-lg font-bold text-white">Velnexa Studio</div>
            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">
              Premium websites, redesigns, dashboards, and digital systems for businesses
              that want to look stronger and operate better.
            </p>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Pages
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
            <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
            <Link href="/demos" className="hover:text-blue-400">Demos</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Focus
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <span>Business Websites</span>
            <span>Website Redesigns</span>
            <span>Dashboards & Systems</span>
            <span>Industry-Specific Solutions</span>
          </div>
        </div>
      </div>

      <div className="container-main mt-8 border-t border-white/10 pt-6 text-sm">
        © {new Date().getFullYear()} Velnexa Studio. All rights reserved.
      </div>
    </footer>
  );
}