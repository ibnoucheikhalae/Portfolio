"use client"

import Link from "next/link"
import { AnimatedItem } from "@/components/animated-section"

const interests = ["AI Research", "Sustainability", "Fintech", "Continuous Learning"]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)", background: "#f7f3ee", borderTop: "1px solid rgba(0,0,0,0.07)" }}
    >
      {/* Watermark */}
      <div
        className="absolute right-[-20px] top-1/2 pointer-events-none select-none -rotate-90 -translate-y-1/2 font-black"
        style={{
          fontFamily: "var(--font-syne,'Syne'),sans-serif",
          fontSize: "200px",
          color: "rgba(0,0,0,0.03)",
          letterSpacing: "12px",
          whiteSpace: "nowrap",
        }}
      >
        ABOUT
      </div>

      <div className="relative">
        <AnimatedItem index={0}>
          <div className="section-tag">About Me</div>

          {/* Two-column: photo left, text right */}
          <div className="flex gap-12 items-start max-md:flex-col">

            {/* Left: circular profile photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3 max-md:w-full max-md:items-start">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  width: "clamp(220px, 28vw, 320px)",
                  height: "clamp(290px, 36vw, 420px)",
                  border: "3px solid rgba(0,0,0,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profileimage.jpg"
                  alt="Alae Ibnoucheikh"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                  fontSize: 9,
                  color: "#aaa",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Alae Ibnoucheikh
              </span>
            </div>

            {/* Right: all text content */}
            <div className="flex-1 min-w-0">

          <div
            className="font-black leading-[.92] mb-7"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-2px",
              color: "#111",
            }}
          >
            Builder.<br />
            Analyst.<br />
            <span style={{ color: "#555" }}>Thinker.</span>
          </div>

          <div
            className="text-sm font-semibold leading-[1.6] mb-7"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#555",
            }}
          >
            <span style={{ color: "#bbb", marginRight: 8 }}>{"// "}</span>
            The projects on this page were not assignments. They were problems I chose to solve.
          </div>

          <p className="text-sm leading-[1.9] mb-4" style={{ color: "#555" }}>
            I am a <span style={{ color: "#111", fontWeight: 600 }}>final-year Computer Science student</span> specialising in Artificial Intelligence, with a particular interest in LLMs, RAG architectures, AI risk, and technical AI governance.
          </p>
          <p className="text-sm leading-[1.9] mb-4" style={{ color: "#555" }}>
            I apply Python, SQL, and AI-driven problem solving across financial services and real-world analytical projects, and I am increasingly focused on AI strategy, transformation, and operating model design that helps organisations move from current state to target state responsibly.
          </p>
          <p className="text-sm leading-[1.9] mb-6" style={{ color: "#555" }}>
            Beyond the code, I run half-marathons, speak four languages, and have sat across the table from teams at <span style={{ color: "#111", fontWeight: 600 }}>J.P. Morgan</span> and <span style={{ color: "#111", fontWeight: 600 }}>IBM</span>. I bring the same discipline to all three.
          </p>

          {/* Interest pills */}
          <div className="flex flex-wrap gap-[7px] mb-8">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-[9px] tracking-[0.5px] uppercase rounded-full px-[13px] py-[5px] transition-all duration-200 cursor-default"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                  color: "#555",
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#111" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"; e.currentTarget.style.color = "#555" }}
              >
                {interest}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-md text-[13px] font-bold transition-all duration-[250ms]"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                background: "#111",
                color: "#f7f3ee",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#333" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#111" }}
            >
              Read About Me →
            </Link>
          </div>

            </div>{/* end right col */}

          </div>{/* end two-col flex */}
        </AnimatedItem>
      </div>
    </section>
  )
}
