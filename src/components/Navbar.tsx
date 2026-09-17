"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Founders", href: "#founders" },
    { name: "ROAS Calculator", href: "#calculator" },
    { name: "Work & Results", href: "#work" },
    { name: "Why Delulogic", href: "#why-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-full px-5 py-3.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-[#14110f]/90 border-[#facc15]/25 shadow-2xl backdrop-blur-xl glow-yellow-sm"
            : "bg-[#1c1815]/75 border-[#2e2620] backdrop-blur-md"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#facc15] via-[#d97706] to-[#783818] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <div className="w-full h-full bg-[#0c0a09] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-br from-[#facc15] to-[#fef08a] text-lg">
                D
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-[#faf7f2] flex items-center gap-1">
              delu<span className="text-[#facc15]">logic</span>
              <Sparkles className="w-3.5 h-3.5 text-[#facc15] inline animate-pulse" />
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#a8a29e] -mt-1 hidden sm:block">
              Code & Ad Warfare
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[#faf7f2]/85 hover:text-[#facc15] hover:bg-[#2b180d]/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Status Pill & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#241a13] border border-[#facc15]/20 text-xs font-mono text-[#fef08a]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>2 slots left for Q4</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#facc15] text-[#0c0a09] font-bold text-sm hover:bg-[#fef08a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] active:scale-95"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#faf7f2] hover:bg-[#2b180d] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#facc15]" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#14110f]/95 border border-[#facc15]/30 p-5 shadow-2xl backdrop-blur-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#241a13] border border-[#facc15]/20 text-xs font-mono text-[#fef08a] w-max mb-1">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span>2 slots left for Q4</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-base font-medium text-[#faf7f2] hover:text-[#facc15] hover:bg-[#2b180d]/80 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#facc15] text-[#0c0a09] font-bold text-sm shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          >
            <span>Book Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
