"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080605] border-t border-[#2e2620] pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#783818]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2e2620]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#facc15] to-[#783818] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0c0a09] rounded-[6px] flex items-center justify-center font-mono font-black text-[#facc15] text-sm">
                  D
                </div>
              </div>
              <span className="font-black text-2xl tracking-tight text-[#faf7f2]">
                delu<span className="text-[#facc15]">logic</span>
              </span>
            </div>

            <p className="text-sm text-[#a8a29e] max-w-sm leading-relaxed">
              Where delusional creative ambition meets razor-sharp engineering logic. World-class Next.js web development and algorithmic Google &amp; Meta Ad growth.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono text-[#fef08a] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block animate-pulse" />
                <span>Founded by Ashwin Soni &amp; Anirudh Soni</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#facc15] tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#a8a29e]">
              <li>
                <a href="#services" className="hover:text-[#faf7f2] transition-colors">
                  Web Dev &amp; 3D
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#faf7f2] transition-colors">
                  Google &amp; Meta Ads
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-[#faf7f2] transition-colors">
                  Meet the Founders
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#faf7f2] transition-colors">
                  ROAS Simulator
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#faf7f2] transition-colors">
                  Case Studies &amp; Results
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#facc15] tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-[#a8a29e]">
              Ready to break records? Send us an inquiry or connect directly with our co-founders.
            </p>
            <div className="text-sm font-mono text-[#faf7f2]">
              <a
                href="mailto:hello@delulogic.com"
                className="hover:text-[#facc15] transition-colors underline"
              >
                hello@delulogic.com
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#14110f] border border-[#2e2620] text-[#a8a29e] hover:text-[#facc15] hover:border-[#facc15]/50 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#14110f] border border-[#2e2620] text-[#a8a29e] hover:text-[#facc15] hover:border-[#facc15]/50 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#14110f] border border-[#2e2620] text-[#a8a29e] hover:text-[#facc15] hover:border-[#facc15]/50 transition-all"
                aria-label="X (Twitter)"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@delulogic.com"
                className="p-2.5 rounded-xl bg-[#2b180d] border border-[#facc15]/30 text-[#facc15] hover:bg-[#facc15] hover:text-[#0c0a09] transition-all"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a8a29e]">
          <p>
            &copy; {new Date().getFullYear()} Delulogic. All rights reserved. Built with Next.js &amp; Three.js.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14110f] border border-[#2e2620] hover:border-[#facc15] text-[#faf7f2] hover:text-[#facc15] transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
