"use client";

import Image from "next/image";
import {
  Code,
  Sparkles,
  Terminal,
  Mail,
  CheckCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";

export default function FoundersSection() {
  const founders = [
    {
      name: "Ashwin Soni",
      role: "Co-Founder & Full-Stack Architect",
      focus: "Full-Stack Web Dev & Ad Funnels",
      bio: "Web developer and growth architect specializing in building high-performance Next.js architectures, scalable backend services, and high-converting Google & Meta ad engines. Obsessed with clean code and aggressive ROAS.",
      image: "/founders/ashwin-soni.jpg",
      badge: "Full-Stack & Growth",
      skills: [
        "Next.js & React 19",
        "Meta Ads Manager & CAPI",
        "Google Search & PMax",
        "Conversion Funnel Architecture",
        "API & Cloud Infrastructure",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        email: "ashwin@delulogic.com",
      },
    },
    {
      name: "Anirudh Soni",
      role: "Co-Founder & Creative Technologist",
      focus: "Creative Web Dev & 3D Interactive UI",
      bio: "Web developer and visual technologist passionate about crafting cutting-edge Three.js 3D web experiences, fluid micro-interactions, and viral social media creative frameworks that captivate Gen Z & modern audiences.",
      image: "/founders/anirudh-soni.jpg",
      badge: "3D Web & Creative Tech",
      skills: [
        "Three.js & WebGL 3D",
        "Frontend Next.js Architecture",
        "Tailwind CSS & Motion",
        "Creative Ad Hook Design",
        "Social Media Brand Systems",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        email: "anirudh@delulogic.com",
      },
    },
  ];

  return (
    <section id="founders" className="py-24 sm:py-32 bg-[#0c0a09] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#783818]/15 via-[#facc15]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1815] border border-[#facc15]/30 text-xs font-mono text-[#facc15] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>DIRECT DEVELOPER ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#faf7f2] tracking-tight">
            Meet the Minds Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#eab308]">
              Delulogic
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#a8a29e]">
            No account managers. No juniors. When you work with Delulogic, you partner directly with the developers building your software and orchestrating your ad spend.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative rounded-3xl bg-[#14110f] border border-[#2e2620] hover:border-[#facc15]/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]"
            >
              <div>
                {/* Photo Container with Amber Glow Frame */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden mb-6 border border-[#facc15]/25 shadow-2xl bg-[#1a0f08]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-transparent to-transparent opacity-80" />

                  {/* Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#facc15]/40 text-xs font-mono font-bold text-[#facc15]">
                      {founder.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#1c1815]/80 backdrop-blur-md text-[11px] font-mono text-[#fef08a]">
                      Co-Founder
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#faf7f2] group-hover:text-[#facc15] transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#facc15] mt-1 font-mono">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                  {founder.bio}
                </p>

                {/* Core Stack Badges */}
                <div className="mt-6 pt-5 border-t border-[#2e2620]">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#a8a29e] mb-3 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-[#facc15]" />
                    Domain Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1815] border border-[#2e2620] text-xs font-mono text-[#faf7f2]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#facc15]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social / Contact Links */}
              <div className="mt-8 pt-5 border-t border-[#2e2620] flex items-center justify-between">
                <span className="text-xs font-mono text-[#a8a29e]">Connect directly:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1c1815] text-[#faf7f2] hover:text-[#facc15] hover:bg-[#2b180d] transition-all"
                    aria-label={`${founder.name} GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1c1815] text-[#faf7f2] hover:text-[#facc15] hover:bg-[#2b180d] transition-all"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1c1815] text-[#faf7f2] hover:text-[#facc15] hover:bg-[#2b180d] transition-all"
                    aria-label={`${founder.name} X (Twitter)`}
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${founder.socials.email}`}
                    className="p-2.5 rounded-xl bg-[#2b180d] text-[#facc15] hover:bg-[#facc15] hover:text-[#0c0a09] transition-all"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Delulogic Manifesto Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl p-8 sm:p-10 bg-[#171412] border border-[#facc15]/30 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2b180d] border border-[#facc15]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#facc15]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#faf7f2]">
                The Delulogic Philosophy
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                &ldquo;They told us being delusional is bad in tech. We disagree. Every game-changing company started with an idea that seemed completely delusional to conventional thinkers. But delusion without logic is just hallucination. At <strong className="text-[#faf7f2]">Delulogic</strong>, we take your most ambitious vision and construct the bulletproof code, 3D web applications, and lethal paid ad campaigns required to turn it into an undeniable global reality.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[#facc15]">
                <span>— Ashwin Soni &amp; Anirudh Soni, Co-Founders of Delulogic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
