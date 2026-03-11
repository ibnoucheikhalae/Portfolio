"use client"

import { AnimatedItem } from "@/components/animated-section"

const skillCards = [
  {
    lbl: "Languages",
    title: "Programming",
    items: [
      { text: "Python",      hi: true },
      { text: "Dart",        hi: true },
      { text: "Java",        hi: false },
      { text: "HTML",        hi: false },
      { text: "CSS",         hi: false },
      { text: "JavaScript",  hi: false },
      { text: "SQL",         hi: false },
    ],
  },
  {
    lbl: "Databases",
    title: "Data Storage",
    items: [
      { text: "PostgreSQL",        hi: true },
      { text: "Cloud Firestore",   hi: true },
      { text: "ERD Design",        hi: false },
      { text: "3NF Normalisation", hi: false },
      { text: "Data Modelling",    hi: false },
    ],
  },
  {
    lbl: "Frameworks",
    title: "Mobile and Cloud",
    items: [
      { text: "Flutter",           hi: true, hi2: true },
      { text: "Firebase",          hi: true, hi2: true },
      { text: "Google Sign-In",    hi: false },
      { text: "Apple Sign-In",     hi: false },
      { text: "SharedPreferences", hi: false },
    ],
  },
  {
    lbl: "AI and Tools",
    title: "Applied Intelligence",
    items: [
      { text: "OpenAI API",         hi: true },
      { text: "Generative AI",      hi: true },
      { text: "Prompt Engineering", hi: true },
      { text: "Cursor",             hi: false },
      { text: "Claude API",         hi: false },
      { text: "GitHub",             hi: false },
      { text: "Cisco",              hi: false },
    ],
  },
]

const languages = [
  { name: "Arabic",  level: "Native",   pip: "#111" },
  { name: "Darija",  level: "Native",   pip: "#111" },
  { name: "French",  level: "Fluent",   pip: "#666" },
  { name: "English", level: "Fluent",   pip: "#666" },
  { name: "Spanish", level: "Beginner", pip: "#222", muted: true },
]

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-12 max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <div className="section-tag">Technical Skills</div>
          <div
            className="font-black leading-none"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontSize: "clamp(38px, 4.5vw, 62px)",
              letterSpacing: "-2.5px",
            }}
          >
            The stack.
          </div>
        </div>
      </div>

      {/* Quote */}
      <div
        className="text-sm font-bold leading-[1.45] pl-5 mb-14 max-w-[560px]"
        style={{
          fontFamily: "var(--font-syne,'Syne'),sans-serif",
          fontSize: "clamp(16px, 1.8vw, 22px)",
          color: "#111",
          borderLeft: "3px solid rgba(0,0,0,0.15)",
        }}
      >
        I don&apos;t just study technology. I{" "}
        <span style={{ color: "#111", fontWeight: 700 }}>build</span> with it,{" "}
        <span style={{ color: "#111", fontWeight: 700 }}>test</span> it, and{" "}
        <span style={{ color: "#111", fontWeight: 700 }}>ship</span> it.
      </div>

      {/* 4-col skill cards */}
      <div className="grid grid-cols-4 gap-[14px] mb-[14px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {skillCards.map((card, i) => (
          <AnimatedItem key={card.title} index={i} staggerMs={80}>
            <div
              className="rounded-[14px] px-[22px] py-[26px] transition-all duration-[250ms] cursor-default group"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)"; e.currentTarget.style.transform = "translateY(-4px)" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "" }}
            >
              <div
                className="text-[9px] tracking-[2.5px] uppercase mb-1 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                  color: "#666",
                }}
              >
                {card.lbl}
              </div>
              <div
                className="text-[16px] font-bold mb-[18px]"
                style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif" }}
              >
                {card.title}
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {card.items.map((item) => (
                  <span
                    key={item.text}
                    className="text-[9px] px-[10px] py-1 rounded transition-all duration-200 cursor-default"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                      background: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      color: (item as { hi?: boolean; hi2?: boolean }).hi
                        ? "#111010"
                        : (item as { hi2?: boolean }).hi2
                        ? "#333"
                        : "#555",
                      borderColor: (item as { hi?: boolean; hi2?: boolean }).hi
                        ? "rgba(0,0,0,0.2)"
                        : (item as { hi2?: boolean }).hi2
                        ? "rgba(0,0,0,0.15)"
                        : "rgba(0,0,0,0.08)",
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {/* Language strip */}
      <AnimatedItem index={4} staggerMs={80}>
        <div
          className="flex items-center gap-6 flex-wrap rounded-[14px] px-7 py-[22px]"
          style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div
            className="text-[9px] tracking-[2.5px] uppercase flex-shrink-0 whitespace-nowrap"
            style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", color: "#666" }}
          >
            Languages Spoken
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-[9px] rounded-full px-[18px] py-[7px] transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  opacity: lang.muted ? 0.4 : 1,
                }}
                onMouseEnter={(e) => { if (!lang.muted) e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)" }}
              >
                <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: lang.pip }} />
                <div>
                  <div className="text-[13px] font-semibold" style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif" }}>
                    {lang.name}
                  </div>
                  <div
                    className="text-[8px] uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", color: "#777" }}
                  >
                    {lang.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedItem>
    </section>
  )
}


