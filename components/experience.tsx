"use client"
import { useState } from "react"
import { AnimatedItem } from "@/components/animated-section"

const timeline = [
  {
    period: "Nov 2025",
    company: "J.P. Morgan",
    role: "Market Risk Insight Week",
    desc: "Analysed simulated trading portfolios, evaluated market risk exposure, and presented data-driven findings to stakeholders.",
    tag: "Finance · Risk",
  },
  {
    period: "Spring 2025",
    company: "IBM",
    role: "Consulting Insight Week",
    desc: "Worked on digital transformation case simulations and presented AI-augmented business solutions.",
    tag: "AI · Consulting",
  },
  {
    period: "Oct 2024",
    company: "RSK Group",
    role: "Data Analytics Micro-Intern",
    desc: "Analysed coastal environmental datasets and produced visualisations supporting sustainability decisions.",
    tag: "AI · Environmental",
  },
  {
    period: "Summer 2024",
    company: "Law Firm Morocco",
    role: "Data Analyst",
    desc: "Cleaned and structured legal datasets, created SQL queries for internal reporting and operations.",
    tag: "Data · Analytics",
  },
  {
    period: "Sept 2024–Present",
    company: "Enactus Portsmouth",
    role: "Marketing Manager",
    desc: "Led multi-channel campaigns to boost visibility of social entrepreneurship initiatives and drove cross-team engagement.",
    tag: "Leadership · Marketing",
  },
]

function TimelineRow({ item, index }: { item: typeof timeline[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <AnimatedItem index={index} staggerMs={90}>
      <div
        className="grid gap-0 relative pl-[28px] py-[34px] transition-all duration-200 exp-row"
        style={{
          gridTemplateColumns: "180px 1fr",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          cursor: "default",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Timeline dot */}
        <div
          className="absolute left-[-6px] top-[40px] w-[13px] h-[13px] rounded-full transition-all duration-200"
          style={{
            background: hovered ? "#111" : "#ccc",
            border: hovered ? "2px solid #111" : "2px solid rgba(0,0,0,0.15)",
            boxShadow: hovered ? "0 0 6px rgba(0,0,0,0.15)" : "none",
          }}
        />

        {/* Left: period + company */}
        <div className="pt-1">
          <div
            className="text-[11px] tracking-[1.5px] mb-1"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#555",
            }}
          >
            {item.period}
          </div>
          <div
            className="text-[11px] tracking-[1px]"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#777",
            }}
          >
            {item.company}
          </div>
        </div>

        {/* Right: role + desc + tag */}
        <div>
          <div
            className="text-[22px] font-bold mb-[10px] transition-colors duration-200"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              color: hovered ? "#444" : "#111",
            }}
          >
            {item.role}
          </div>
          <div className="text-sm mb-4 max-w-[520px] leading-[1.7]" style={{ color: "#555" }}>
            {item.desc}
          </div>
          <span
            className="text-[9px] px-[10px] py-[5px] tracking-[1.5px] uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              background: "transparent",
              color: "#888",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 0,
            }}
          >
            {"[ "}{item.tag}{" ]"}
          </span>
        </div>
      </div>
    </AnimatedItem>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="mb-14">
        <div className="section-tag">Work Experience</div>
        <div
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-syne,'Syne'),sans-serif",
            fontSize: "clamp(38px,4.5vw,62px)",
            letterSpacing: "-2.5px",
          }}
        >
          The journey.
        </div>
      </div>

      {/* Timeline container */}
      <div
        className="relative max-w-[860px]"
        style={{ borderLeft: "1px solid rgba(0,0,0,0.12)", paddingLeft: "28px" }}
      >
        {timeline.map((item, i) => (
          <TimelineRow key={item.role} item={item} index={i} />
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </section>
  )
}
