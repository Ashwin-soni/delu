"use client";

import { Zap, ShieldCheck, Flame, Users, Activity, CheckCircle2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Flame,
      title: "The Developer-Marketer Advantage",
      description:
        "Traditional agencies silo web devs and ad buyers into different rooms. We are both in one. We build the code and we pull the ad levers, ensuring pixel-perfect conversion tracking and zero disconnect.",
    },
    {
      icon: Zap,
      title: "Sub-Second Load Times = Higher ROAS",
      description:
        "Every 100ms delay in page load burns 7% of your ad spend. By engineering Next.js 15 apps with 99+ Core Web Vitals, your Google Quality Scores soar and Meta cost-per-click plummets.",
    },
    {
      icon: ShieldCheck,
      title: "Server-Side CAPI & 100% Tracking Integrity",
      description:
        "iOS privacy updates broke standard pixel tracking for average agencies. We implement Meta Conversions API (CAPI) and GA4 server-side pipelines so no sale gets lost in the dark.",
    },
    {
      icon: Users,
      title: "Zero Account Managers. Direct Founder Access.",
      description:
        "You deal straight with Ashwin Soni and Anirudh Soni. No junior assistants playing telephone. Real engineers solving real growth bottlenecks in real time.",
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0c0a09] relative border-t border-[#2e2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>THE DELULOGIC ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Why Ambitious Brands Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Delulogic
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            We threw away the broken traditional agency model. Here is how we build unstoppable compounding growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-[#14110f] border border-[#2e2620] hover:border-[#facc15]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.12)] flex gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2b180d] to-[#1c1815] border border-[#facc15]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[#facc15]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#faf7f2] mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
