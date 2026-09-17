"use client";

import { useState } from "react";
import {
  Code,
  Target,
  Search,
  Share2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  BarChart3,
  Video,
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "ads">("all");

  const services = [
    {
      id: "web-dev",
      category: "web",
      icon: Code,
      title: "Custom Full-Stack Web Development",
      subtitle: "Lightning-fast, 3D interactive web experiences built on Next.js 15",
      badge: "Flagship Engineering",
      color: "from-[#facc15] to-[#d97706]",
      description:
        "We don't build generic WordPress sites. We engineer bespoke, conversion-obsessed Next.js web applications, immersive Three.js 3D platforms, and headless e-commerce stores that load in under 300ms.",
      deliverables: [
        "Modern Next.js 15 & React 19 architecture",
        "Three.js interactive 3D elements & micro-interactions",
        "Sub-second Core Web Vitals & 99+ Google PageSpeed score",
        "High-converting landing pages tailored for ad traffic",
        "Custom APIs, Auth, Database integrations & SaaS dashboards",
      ],
      techStack: ["Next.js", "React", "Three.js", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      id: "meta-ads",
      category: "ads",
      icon: Target,
      title: "Meta Ads Scaling (Instagram & Facebook)",
      subtitle: "Ruthless algorithmic media buying & creative ad warfare",
      badge: "High-ROI Funnels",
      color: "from-[#fbbf24] to-[#b45309]",
      description:
        "Turn scrolling Gen Z and Millennial audiences into eager buyers. We write high-converting hooks, produce viral UGC-style video creatives, and engineer multi-tier retargeting funnels that maximize your return on ad spend (ROAS).",
      deliverables: [
        "Full-funnel Meta Ads setup (Top, Middle & Bottom of Funnel)",
        "High-CTR video scripts, UGC hooks & ad creative direction",
        "Lookalike & Custom Audience segmentation",
        "Conversion API (CAPI) & Pixel tracking for 100% data clarity",
        "Aggressive horizontal & vertical budget scaling",
      ],
      techStack: ["Meta Ads Manager", "CAPI Tracking", "Creative Testing Matrix", "ROAS Analytics"],
    },
    {
      id: "google-ads",
      category: "ads",
      icon: Search,
      title: "Google Ads Domination (Search, PMax & YouTube)",
      subtitle: "Capture active buyers right at the moment of intent",
      badge: "Intent Monetization",
      color: "from-[#facc15] to-[#783818]",
      description:
        "When your target customers are actively searching for your service or product, we put you at the absolute top. We deploy Google Search Ads, Performance Max campaigns, and YouTube pre-roll ads with surgical keyword precision.",
      deliverables: [
        "High-intent commercial keyword bidding & negative lists",
        "Google Performance Max (PMax) smart bidding asset groups",
        "YouTube Ads targeting competitor audiences & search queries",
        "Google Analytics 4 (GA4) & server-side conversion modeling",
        "Continuous bid management to slash Cost Per Acquisition (CPA)",
      ],
      techStack: ["Google Search", "Performance Max", "YouTube Ads", "GA4", "Tag Manager"],
    },
    {
      id: "social-mgmt",
      category: "ads",
      icon: Share2,
      title: "Social Media Growth & Content Architecture",
      subtitle: "Organic brand resonance that feeds your paid ad machine",
      badge: "Viral Engine",
      color: "from-[#fef08a] to-[#9a481c]",
      description:
        "A successful paid strategy requires a credible, magnetic organic presence. We craft Gen Z-fluent social media content, viral short-form video strategies (Reels/TikTok), and community engagement tactics that build cult loyalty.",
      deliverables: [
        "Complete brand visual identity & social feed aesthetic",
        "Short-form video scriptwriting & trend hijacking",
        "Organic-to-paid conversion loops & community engagement",
        "Influencer & creator collaboration frameworks",
        "Monthly content calendars & analytics performance reports",
      ],
      techStack: ["Instagram Reels", "TikTok", "Creative Direction", "Community Growth"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0c0a09] relative">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#783818]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM AGENCY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Built by Developers.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Fueled by Paid Traffic.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            Most agencies do just one thing: either they make pretty sites that don&apos;t convert, or run ads to slow pages. We combine hardcore code with lethal media buying.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#1c1815] border border-[#2e2620]">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-[#facc15] text-[#0c0a09] shadow-md"
                  : "text-[#a8a29e] hover:text-[#faf7f2]"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory("web")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "web"
                  ? "bg-[#facc15] text-[#0c0a09] shadow-md"
                  : "text-[#a8a29e] hover:text-[#faf7f2]"
              }`}
            >
              Web Dev &amp; 3D
            </button>
            <button
              onClick={() => setActiveCategory("ads")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "ads"
                  ? "bg-[#facc15] text-[#0c0a09] shadow-md"
                  : "text-[#a8a29e] hover:text-[#faf7f2]"
              }`}
            >
              Paid Ads &amp; Marketing
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 sm:p-10 bg-[#14110f] border border-[#2e2620] hover:border-[#facc15]/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2b180d] to-[#1c1815] border border-[#facc15]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#facc15]" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#241a13] border border-[#facc15]/20 text-[#fef08a]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#faf7f2] group-hover:text-[#facc15] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#fef08a]/80">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 pt-6 border-t border-[#2e2620]">
                    <h4 className="text-xs uppercase tracking-wider font-mono text-[#facc15] mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      What You Receive:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#faf7f2]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="mt-8 pt-6 border-t border-[#2e2620] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#1c1815] border border-[#2e2620] text-[11px] font-mono text-[#a8a29e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#facc15] hover:text-[#fef08a] group-hover:translate-x-1 transition-all"
                  >
                    <span>Deploy This</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Synergy Callout Banner */}
        <div className="mt-12 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#2b180d] via-[#1c1815] to-[#241a13] border border-[#facc15]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#facc15] text-[#0c0a09] flex items-center justify-center shrink-0 shadow-lg">
              <BarChart3 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#faf7f2]">
                Need both Web Development &amp; Ad Management?
              </h3>
              <p className="text-sm text-[#a8a29e] mt-1 max-w-xl">
                Get the <strong className="text-[#facc15]">Delulogic Growth Engine</strong> package. We build your high-converting Next.js app and immediately flood it with profitable Meta &amp; Google Ad traffic.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#facc15] text-[#0c0a09] font-extrabold text-sm hover:bg-[#fef08a] transition-all duration-200 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
          >
            Get Bundled Growth Suite
          </a>
        </div>
      </div>
    </section>
  );
}
