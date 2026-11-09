"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  Mail,
  Clock,
  Sparkles,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);
  const [budget, setBudget] = useState<string>("$3k - $7k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const servicesList = [
    "Web Development",
    "Meta Ads (IG & FB)",
    "Google Ads (Search & PMax)",
    "Social Media Strategy",
    "Full Growth Suite (Web + Ads)",
  ];

  const budgetOptions = [
    "Under $3,000",
    "$3k - $7k",
    "$7k - $15k",
    "$15k+",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We couldn't submit your inquiry. Please try again.");
      }

      setSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#facc15", "#fbbf24", "#d97706", "#783818", "#faf7f2"],
        });
      } catch (err) {
        console.error("Confetti trigger:", err);
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't submit your inquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0a09] relative border-t border-[#2e2620]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#783818]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S SCALE YOUR EMPIRE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Stop Dreaming.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Let&apos;s Build the Logic.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            Tell us about your brand and targets. Ashwin and Anirudh review every proposal personally within 6 hours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-[#14110f] border border-[#2e2620] space-y-6">
              <h3 className="text-xl font-bold text-[#faf7f2]">
                Direct Founder Access
              </h3>
              <p className="text-sm text-[#a8a29e] leading-relaxed">
                When you initiate a project with Delulogic, your code is written and your ad accounts are managed directly by the co-founders.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 text-sm text-[#faf7f2]">
                  <div className="w-10 h-10 rounded-xl bg-[#241a13] border border-[#facc15]/30 flex items-center justify-center text-[#facc15] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a8a29e] font-mono">Founders Direct Inbox</div>
                    <a href="mailto:hello@delulogic.com" className="font-semibold hover:text-[#facc15] transition-colors">
                      hello@delulogic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-[#faf7f2]">
                  <div className="w-10 h-10 rounded-xl bg-[#241a13] border border-[#facc15]/30 flex items-center justify-center text-[#facc15] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a8a29e] font-mono">Response Speed</div>
                    <div className="font-semibold text-[#fef08a]">
                      Guaranteed within 6 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-[#faf7f2]">
                  <div className="w-10 h-10 rounded-xl bg-[#241a13] border border-[#facc15]/30 flex items-center justify-center text-[#facc15] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a8a29e] font-mono">Global Operations</div>
                    <div className="font-semibold text-[#faf7f2]">
                      Serving clients worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="rounded-3xl p-6 bg-[#1c1815] border border-[#facc15]/20">
              <h4 className="text-sm font-bold font-mono text-[#facc15] uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                What happens next:
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-[#a8a29e]">
                <li>1. We review your current website &amp; ad accounts.</li>
                <li>2. We prepare a custom Next.js + Ad ROAS game plan.</li>
                <li>3. We jump on a 25-minute strategy session together.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#14110f] border border-[#facc15]/30 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#facc15] text-[#0c0a09] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(250,204,21,0.6)]">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#faf7f2]">
                    Delulogic Engine Engaged!
                  </h3>
                  <p className="text-sm sm:text-base text-[#a8a29e] max-w-md mx-auto">
                    Thank you, <strong className="text-[#facc15]">{formData.name}</strong>. Your project details have been submitted. Ashwin Soni and Anirudh Soni will review them and email you back within 6 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", website: "", details: "" });
                      setSelectedServices(["Web Development"]);
                      setBudget("$3k - $7k");
                      setSubmitError("");
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#1c1815] border border-[#facc15]/40 text-xs font-mono text-[#faf7f2] hover:bg-[#2b180d]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service selector pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-2.5">
                      1. Which services do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            aria-pressed={isSelected}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? "bg-[#facc15] text-[#0c0a09] shadow-md font-bold"
                                : "bg-[#1c1815] text-[#a8a29e] border border-[#2e2620] hover:text-[#faf7f2]"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-2.5">
                      2. Estimated Monthly Budget:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          aria-pressed={budget === b}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                            budget === b
                              ? "bg-[#facc15] text-[#0c0a09] shadow-md"
                              : "bg-[#1c1815] text-[#a8a29e] border border-[#2e2620] hover:text-[#faf7f2]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Miller"
                        className="w-full px-4 py-3 rounded-xl bg-[#1c1815] border border-[#2e2620] text-sm text-[#faf7f2] placeholder-[#78716c] focus:outline-none focus:border-[#facc15] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1c1815] border border-[#2e2620] text-sm text-[#faf7f2] placeholder-[#78716c] focus:outline-none focus:border-[#facc15] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-1.5">
                      Current Website or Brand URL
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="https://yourbrand.com (or leave empty if starting fresh)"
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1815] border border-[#2e2620] text-sm text-[#faf7f2] placeholder-[#78716c] focus:outline-none focus:border-[#facc15] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a8a29e] mb-1.5">
                      Tell us about your project &amp; goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      placeholder="We need a modern Next.js 3D web app and want to scale our Meta ad spend to $10k/month..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1815] border border-[#2e2620] text-sm text-[#faf7f2] placeholder-[#78716c] focus:outline-none focus:border-[#facc15] transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-400">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#facc15] to-[#eab308] text-[#0c0a09] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-200 active:scale-95 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Proposal</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[#a8a29e] text-center">
                    Your details are used only to respond to your project inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
