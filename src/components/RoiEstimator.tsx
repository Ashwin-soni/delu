"use client";

import { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function RoiEstimator() {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [aov, setAov] = useState<number>(120);
  const [businessType, setBusinessType] = useState<"ecommerce" | "saas" | "service">("ecommerce");

  // Dynamic calculation logic based on industry benchmarks optimized by Delulogic
  const multipliers = {
    ecommerce: { roas: 4.4, cpaReduction: 0.35, convRate: "3.8%" },
    saas: { roas: 5.2, cpaReduction: 0.42, convRate: "6.2%" },
    service: { roas: 4.8, cpaReduction: 0.38, convRate: "5.4%" },
  };

  const selectedMultiplier = multipliers[businessType];
  const projectedRevenue = Math.round(adSpend * selectedMultiplier.roas);
  const estimatedConversions = Math.round(projectedRevenue / Math.max(aov, 1));
  const estimatedNetProfit = Math.round(projectedRevenue - adSpend);

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#0c0a09] relative">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE GROWTH SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Calculate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Revenue Potential
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            See what happens when you combine an ultra-fast Next.js web application with surgical Meta &amp; Google Ad targeting.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-[#14110f] border border-[#facc15]/30 p-6 sm:p-10 shadow-2xl">
          {/* Business Type Selector */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-3">
              Select Your Business Model:
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setBusinessType("ecommerce")}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  businessType === "ecommerce"
                    ? "bg-[#facc15] text-[#0c0a09] shadow-lg"
                    : "bg-[#1c1815] text-[#faf7f2] hover:bg-[#2b180d] border border-[#2e2620]"
                }`}
              >
                E-Commerce / D2C
              </button>
              <button
                type="button"
                onClick={() => setBusinessType("saas")}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  businessType === "saas"
                    ? "bg-[#facc15] text-[#0c0a09] shadow-lg"
                    : "bg-[#1c1815] text-[#faf7f2] hover:bg-[#2b180d] border border-[#2e2620]"
                }`}
              >
                SaaS &amp; Tech
              </button>
              <button
                type="button"
                onClick={() => setBusinessType("service")}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  businessType === "service"
                    ? "bg-[#facc15] text-[#0c0a09] shadow-lg"
                    : "bg-[#1c1815] text-[#faf7f2] hover:bg-[#2b180d] border border-[#2e2620]"
                }`}
              >
                Services &amp; Agency
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Ad Spend Slider */}
              <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e2620]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono uppercase text-[#a8a29e]">
                    Monthly Ad Budget
                  </span>
                  <span className="font-mono text-xl font-bold text-[#facc15]">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#2b180d] rounded-lg appearance-none cursor-pointer accent-[#facc15]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#a8a29e] mt-2">
                  <span>$1,000/mo</span>
                  <span>$25,000/mo</span>
                  <span>$50,000/mo</span>
                </div>
              </div>

              {/* AOV / Deal Size Slider */}
              <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e2620]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono uppercase text-[#a8a29e]">
                    Avg. Order Value / Customer LTV
                  </span>
                  <span className="font-mono text-xl font-bold text-[#faf7f2]">
                    ${aov.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={2000}
                  step={10}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-[#2b180d] rounded-lg appearance-none cursor-pointer accent-[#facc15]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#a8a29e] mt-2">
                  <span>$30</span>
                  <span>$1,000</span>
                  <span>$2,000</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#2b180d]/50 border border-[#facc15]/20 text-xs text-[#faf7f2]">
                <ShieldCheck className="w-5 h-5 text-[#facc15] shrink-0" />
                <span>
                  Every campaign is backed by full tracking integrity (Meta CAPI + GA4 Server Side).
                </span>
              </div>
            </div>

            {/* Results Output Panel */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#2b180d] via-[#1c1815] to-[#14110f] border border-[#facc15]/40 shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2e2620]">
                  <span className="text-xs font-mono text-[#a8a29e]">PROJECTED MONTHLY OUTCOME</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#facc15]/20 border border-[#facc15]/40 text-[11px] font-mono text-[#facc15] font-bold">
                    {selectedMultiplier.roas}x ROAS
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-mono text-[#a8a29e]">Estimated Gross Revenue</div>
                  <div className="text-4xl sm:text-5xl font-black text-[#faf7f2] mt-1 tracking-tight">
                    ${projectedRevenue.toLocaleString()}
                    <span className="text-sm font-mono font-normal text-[#facc15] ml-2">/mo</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-[#2e2620]">
                  <div>
                    <div className="text-xs text-[#a8a29e]">Est. Conversions</div>
                    <div className="text-xl font-bold font-mono text-[#faf7f2] mt-0.5">
                      ~{estimatedConversions.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#a8a29e]">Projected Net Margin</div>
                    <div className="text-xl font-bold font-mono text-[#facc15] mt-0.5">
                      +${estimatedNetProfit.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#facc15] text-[#0c0a09] font-black text-sm hover:bg-[#fef08a] transition-all duration-200 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
              >
                <span>Scale With Delulogic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
