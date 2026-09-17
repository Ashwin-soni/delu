"use client";

import { ArrowUpRight, Sparkles, TrendingUp, Code2, Zap } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#0c0a09]">
      {/* 3D Interactive Three.js Background Canvas */}
      <ThreeCanvas />

      {/* Ambient background glows with Gen Z Warm Brown & Honey Yellow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#facc15]/15 via-[#783818]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#9a481c]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-[#facc15]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto text-center">
        {/* Gen Z Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1815]/90 border border-[#facc15]/30 text-xs sm:text-sm font-mono text-[#fef08a] mb-6 backdrop-blur-md shadow-lg animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#facc15]" />
          <span>The Web Dev &amp; Paid Ad Engine for Ambitious Brands</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          <span className="hidden sm:inline-block text-[#a8a29e]">Next.js + Meta &amp; Google Ads</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#faf7f2] leading-[1.08] max-w-5xl mx-auto">
          Delusional Ambition.{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#eab308] drop-shadow-[0_0_35px_rgba(250,204,21,0.35)]">
            Bulletproof Logic.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl md:text-2xl text-[#a8a29e] max-w-3xl mx-auto leading-relaxed font-normal">
          We are <strong className="text-[#faf7f2]">Delulogic</strong> — a two-developer firm engineered by{" "}
          <span className="text-[#facc15] font-semibold">Ashwin Soni</span> &amp;{" "}
          <span className="text-[#facc15] font-semibold">Anirudh Soni</span>. We build award-caliber web apps and run
          ruthless <strong className="text-[#faf7f2]">Google &amp; Meta Ad campaigns</strong> that print measurable revenue.
        </p>

        {/* Interactive CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#facc15] to-[#eab308] text-[#0c0a09] font-extrabold text-base tracking-wide hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Scale Your Brand Today</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1c1815]/90 border border-[#facc15]/30 text-[#faf7f2] font-semibold text-base hover:bg-[#2b180d] hover:border-[#facc15] transition-all duration-300 backdrop-blur-md"
          >
            <TrendingUp className="w-5 h-5 text-[#facc15]" />
            <span>Simulate Ad ROAS</span>
          </a>

          <a
            href="#founders"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent text-[#a8a29e] hover:text-[#faf7f2] font-medium text-base hover:underline transition-all duration-200"
          >
            <Code2 className="w-5 h-5 text-[#d97706]" />
            <span>Meet Founders</span>
          </a>
        </div>

        {/* Highlight Metric Badges */}
        <div className="mt-14 pt-8 border-t border-[#2e2620]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#14110f]/70 border border-[#2e2620] backdrop-blur-md">
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#facc15]">4.8x</div>
            <div className="text-xs sm:text-sm text-[#a8a29e] mt-1">Average Ad ROAS</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#14110f]/70 border border-[#2e2620] backdrop-blur-md">
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#faf7f2]">100%</div>
            <div className="text-xs sm:text-sm text-[#a8a29e] mt-1">Next.js &amp; 3D Stack</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#14110f]/70 border border-[#2e2620] backdrop-blur-md">
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#facc15]">$2.4M+</div>
            <div className="text-xs sm:text-sm text-[#a8a29e] mt-1">Client Pipeline Value</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#14110f]/70 border border-[#2e2620] backdrop-blur-md">
            <div className="font-mono text-2xl sm:text-3xl font-black text-[#faf7f2]">2 Devs</div>
            <div className="text-xs sm:text-sm text-[#a8a29e] mt-1">Direct Founder Access</div>
          </div>
        </div>
      </div>

      {/* Infinite Ticker / Marquee Banner */}
      <div className="mt-16 w-full overflow-hidden border-y border-[#facc15]/20 bg-[#14110f]/90 py-3.5 backdrop-blur-lg z-10">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-sm font-mono tracking-wider font-semibold text-[#faf7f2]/90">
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ FULL-STACK NEXT.JS 15
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ META ADS EXPERTS (INSTAGRAM &amp; FACEBOOK)
          </span>
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ GOOGLE SEARCH &amp; PERFORMANCE MAX
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ THREE.JS INTERACTIVE EXPERIENCES
          </span>
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ SOCIAL MEDIA REEL &amp; HOOK ARCHITECTURE
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ ZERO FLUFF. ALL REVENUE.
          </span>
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ FULL-STACK NEXT.JS 15
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ META ADS EXPERTS (INSTAGRAM &amp; FACEBOOK)
          </span>
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ GOOGLE SEARCH &amp; PERFORMANCE MAX
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ THREE.JS INTERACTIVE EXPERIENCES
          </span>
          <span className="flex items-center gap-2 text-[#facc15]">
            ✦ SOCIAL MEDIA REEL &amp; HOOK ARCHITECTURE
          </span>
          <span className="flex items-center gap-2 text-[#a8a29e]">
            ✦ ZERO FLUFF. ALL REVENUE.
          </span>
        </div>
      </div>
    </section>
  );
}
