import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-0 py-8 text-slate-400">
      <div className="container-main flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/velnexa-logo.png"
            alt="Velnexa Studio"
            width={42}
            height={42}
            className="h-10 w-10 rounded-xl object-contain"
          />
          <div>
            <div className="text-lg font-bold text-white">Velnexa Studio</div>
            <div className="text-sm text-slate-400">
              Premium websites, redesigns, and business systems.
            </div>
          </div>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Velnexa Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}