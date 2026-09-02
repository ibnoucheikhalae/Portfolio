"use client"

import { useState } from "react"

const marqueeSkills = [
  "Python", "Flutter", "Dart", "PostgreSQL", "Firebase", "OpenAI API",
  "Generative AI", "Prompt Engineering", "Java", "SQL", "Cursor",
  "RAG Architectures", "AI Risk", "Technical AI Governance", "AI Strategy", "GitHub",
]

const _skills_unused = [
  "Python",
  "LLMs & RAG",
  "AI Risk & Governance",
  "Dart",
  "Flutter",
  "SQL",
  "Networking",
  "Security",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
]

export function SkillsMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        background: "#f7f3ee",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex w-max"
        style={{
          animation: "marqueeScroll 30s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-7 px-12 py-5 whitespace-nowrap"
            style={{ borderRight: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#999" }} />
            <span
              className="text-[13px] font-bold tracking-[0.5px]"
              style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", color: "#555" }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  )
}
