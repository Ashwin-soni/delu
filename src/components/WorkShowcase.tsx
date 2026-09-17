"use client";

import { Briefcase, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

export default function WorkShowcase() {
  const caseStudies = [
    {
      title: "Kromatik Vision",
      subtitle: "3D Interactive Eyewear Store + Meta Ads Blitz",
      category: "Web Dev & Meta Ads",
      metric: "4.9x ROAS",
      detail: "$520,000+ Revenue in 90 Days",
      tags: ["Next.js 15", "Three.js 3D", "Meta Ads", "Instagram Reels"],
      color: "from-[#facc15] to-[#783818]",
      description:
        "Built a 3D interactive virtual try-on web application running on Next.js, backed by aggressive Meta lookalike campaigns that drove viral UGC reach.",
    },
    {
      title: "NexusAI Platform",
      subtitle: "High-Performance SaaS Portal + Google PMax",
      category: "Full-Stack & Google Ads",
      metric: "14.2k Signups",
      detail: "3.8x ROAS on Search Intent",
      tags: ["React 19", "Node.js", "Google Search", "Performance Max"],
      color: "from-[#fbbf24] to-[#b45309]",
      description:
        "Engineered an enterprise-grade developer portal with sub-second page loads, complemented by Google Search Ads capturing high-intent software buyers.",
    },
    {
      title: "Solstice Studio",
      subtitle: "Luxury E-Commerce & Social Retargeting Funnel",
      category: "eCommerce & Social Media",
      metric: "6.2x ROAS",
      detail: "18.4% Conversion Rate on Custom Landing Page",
      tags: ["Next.js", "Tailwind CSS", "Meta CAPI", "Brand Strategy"],
      color: "from-[#fef08a] to-[#9a481c]",
      description:
        "Redesigned the brand identity and deployed a zero-friction checkout funnel paired with dynamic catalog ads and short-form video creative loops.",
    },
    {
      title: "HyperFlow Health",
      subtitle: "Telehealth Application & Omnichannel Paid Ads",
      category: "Full-Stack & Ad Warfare",
      metric: "340% Surge",
      detail: "Reduced Cost Per Acquisition by 44%",
      tags: ["Next.js", "TypeScript", "Google Ads", "Meta Ads"],
      color: "from-[#facc15] to-[#ca8a04]",
      description:
        "Developed a HIPAA-compliant booking app with personalized questionnaire flows and cross-platform retargeting across YouTube and Instagram.",
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROVEN CASE STUDIES &amp; TRACK RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Proof Over Promises:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Real Revenue Engines
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            See how Delulogic delivers compound business growth by uniting high-speed web code with ruthless ad execution.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group rounded-3xl p-8 sm:p-10 bg-[#14110f] border border-[#2e2620] hover:border-[#facc15]/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Metric pill header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#241a13] border border-[#facc15]/20 text-xs font-mono text-[#fef08a]">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 text-xs font-mono font-bold text-[#facc15]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{study.metric}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#faf7f2] group-hover:text-[#facc15] transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-[#fef08a]/80 mt-1">
                  {study.subtitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                  {study.description}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-[#1c1815] border border-[#2e2620] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#a8a29e]">Key Result:</span>
                  <span className="font-mono text-sm font-bold text-[#faf7f2]">
                    {study.detail}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2e2620] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#1c1815] text-[11px] font-mono text-[#a8a29e] border border-[#2e2620]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#facc15] group-hover:underline"
                >
                  <span>Build Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
