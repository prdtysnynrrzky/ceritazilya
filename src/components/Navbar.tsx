"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // optimized scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on scroll (UX improvement)
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("scroll", closeMenu);

    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          {/* logo */}
          <h1 className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-neutral-200">
            cerita - Nadzillah & Praditya
          </h1>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a
              href="#timeline"
              className="hover:text-white hover:tracking-widest transition-all duration-300"
            >
              cerita
            </a>

            <a
              href="#gallery"
              className="hover:text-white hover:tracking-widest transition-all duration-300"
            >
              foto
            </a>

            <a
              href="#notes"
              className="hover:text-white hover:tracking-widest transition-all duration-300"
            >
              catatan
            </a>
          </div>

          {/* mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* mobile menu (smooth animation) */}
        <div
          className={`md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-6 gap-5 text-sm text-neutral-300">
            <a href="#timeline" onClick={() => setOpen(false)}>
              cerita
            </a>

            <a href="#gallery" onClick={() => setOpen(false)}>
              foto
            </a>

            <a href="#notes" onClick={() => setOpen(false)}>
              catatan
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
