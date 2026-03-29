"use client";

import { useState } from "react";

export default function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971000000000";
  const message =
    "Hi Velnexa Studio, I want to discuss a website or business system.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Tooltip */}
      {hover && (
        <div className="rounded-full bg-slate-900 px-4 py-2 text-xs text-white shadow-lg border border-white/10">
          Chat on WhatsApp
        </div>
      )}

      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.21-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.48-1.83-.15-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.56.57.66.21 1.25.18 1.72.11.53-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
        </svg>
      </a>
    </div>
  );
}