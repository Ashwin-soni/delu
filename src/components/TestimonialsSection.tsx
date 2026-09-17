"use client";

import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Founder, Zenith Gear Co.",
      location: "Austin, Texas",
      comment:
        "Ashwin and Anirudh completely rebuilt our storefront in Next.js with insane 3D product previews, then took over our Meta Ads. Our ROAS went from an embarrassing 1.6x to a consistent 4.5x in under 6 weeks.",
      rating: 5,
      highlight: "ROAS jumped to 4.5x",
    },
    {
      name: "Elena Rostova",
      role: "Chief Growth Officer, Chrono Cloud",
      location: "London, UK",
      comment:
        "Finding developers who understand media buying psychology is like finding a unicorn. Delulogic built our SaaS landing page with sub-second speeds and optimized our Google Search PMax campaigns with surgical precision.",
      rating: 5,
      highlight: "2.4x more demo bookings",
    },
    {
      name: "Devon Bailey",
      role: "CEO, Aura Beauty Labs",
      location: "Toronto, Canada",
      comment:
        "Working directly with the founders instead of junior account managers made all the difference. Delulogic is fast, ridiculously talented, and their ad creatives actually make people buy.",
      rating: 5,
      highlight: "Zero fluff, real scale",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>FOUNDER REPUTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Loved by Brands That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Demand Growth
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            Here is what global operators say about scaling with Delulogic.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 bg-[#14110f] border border-[#2e2620] hover:border-[#facc15]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#facc15]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#241a13] border border-[#facc15]/20 text-xs font-mono text-[#fef08a] mb-4">
                  {t.highlight}
                </div>
                <p className="text-sm sm:text-base text-[#faf7f2]/90 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#2e2620]">
                <div className="font-bold text-[#faf7f2]">{t.name}</div>
                <div className="text-xs text-[#a8a29e] font-mono mt-0.5">
                  {t.role} • {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
