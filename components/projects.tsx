"use client"

import Link from "next/link"
import { AnimatedItem } from "@/components/animated-section"

const cardData = [
  {
    num: "01",
    cat: "Mobile · Full-Stack",
    href: "/projects/union-shop-ecommerce",
    name: "Union Shop",
    desc: "Flutter e-commerce app for Portsmouth Student Union with full auth, real-time cart, and merchandise personalisation.",
    highlights: [
      "201 passing tests across unit, widget and integration layers",
      "Email, Google, and Apple Sign-In authentication",
      "Real-time Firestore cart and order management",
    ],
    chips: ["Flutter", "Firebase", "Dart"],
    slug: "union-shop-ecommerce",
    featured: true,
  },
  {
    num: "02",
    cat: "Database · SQL",
    href: "/projects/carcare-hub",
    name: "CarCare Hub",
    desc: "Fully normalised relational database for a real-world car service business built across two iterative coursework stages.",
    highlights: [
      "15 tables normalised to 3NF from initial 13-table ERD",
      "PostgreSQL with CHECK constraints and FK enforcement",
      "2 complete ERD iterations with documented decisions",
    ],
    chips: ["PostgreSQL", "ERD", "SQL"],
    slug: "carcare-hub",
    featured: false,
  },
  {
    num: "03",
    cat: "AI · Environmental",
    href: "/projects/rsk-coastal-change",
    name: "RSK Coastal Change",
    desc: "Data-driven coastal analysis for North Norfolk with an AI erosion prediction prototype built at an environmental hackathon.",
    highlights: [
      "50–150m retreat at Happisburgh documented 2000–2023",
      "NDVI vegetation analysis and LiDAR elevation processing",
      "AI triage tool built with OpenAI API and Cursor",
    ],
    chips: ["Python", "OpenAI API", "Cursor"],
    slug: "rsk-coastal-change",
    featured: false,
  },
  {
    num: "04",
    cat: "Networking · Infrastructure",
    href: "/projects/festival-network-infrastructure",
    name: "Festival Network",
    desc: "Secure network architecture for a 35,000-attendee festival with VLAN segmentation and real-time monitoring.",
    highlights: [
      "VLAN segmentation isolating staff, vendor, and public traffic",
      "35,000 concurrent user scale with redundancy planning",
      "Cisco switch topology and real-time monitoring config",
    ],
    chips: ["Cisco", "VLAN", "Networking"],
    slug: "festival-network-infrastructure",
    featured: true,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Header row */}
      <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <div className="section-tag">Selected Work</div>
          <div
            className="font-black leading-none"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontSize: "clamp(38px, 4.5vw, 62px)",
              letterSpacing: "-2.5px",
            }}
          >
            Projects.
          </div>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-[5px] text-[10px] tracking-[1.5px] uppercase transition-colors duration-200"
          style={{
            fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
            color: "#999",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#111010"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#999"}
        >
          All projects
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>

      {/* Project list horizontal layout */}
      <div className="flex flex-col" style={{ gap: 40 }}>
        {cardData.filter(c => c.featured).map((card, i) => (
          <AnimatedItem key={card.num} index={i} staggerMs={80}>
            <Link
              href={card.href}
              className="flex flex-row relative overflow-hidden group transition-all duration-300 max-md:flex-col"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 0,
                minHeight: 200,
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"}
            >
              {/* Animated top bar (hover) */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#111010", zIndex: 2 }}
              />

              {/* Image left column */}
              <div
                className="relative overflow-hidden flex-shrink-0 max-md:w-full"
                style={{ width: 300, minHeight: 200, background: "#e8e2da", maxWidth: "100%" }}
              >
                {/* Number watermark */}
                <div
                  className="absolute bottom-2 left-3 pointer-events-none leading-none z-0"
                  style={{
                    fontFamily: "var(--font-syne,'Syne'),sans-serif",
                    fontSize: "72px",
                    fontWeight: 800,
                    color: "rgba(0,0,0,0.05)",
                    letterSpacing: "-3px",
                  }}
                >
                  {card.num}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${card.slug}-preview.jpg`}
                  alt={card.name}
                  className="w-full h-full object-cover block absolute inset-0 transition-all duration-700 group-hover:scale-[1.05]"
                  style={{ filter: "brightness(.6) saturate(.7)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                />
              </div>

              {/* Text right column */}
              <div className="flex flex-col flex-1 px-8 py-7 justify-between max-md:px-5 max-md:py-5">
                <div>
                  {/* Category tag */}
                  <div
                    className="inline-block text-[8px] tracking-[2px] uppercase px-[10px] py-[4px] mb-4"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                      background: "rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.09)",
                      color: "#777",
                    }}
                  >
                    {card.cat}
                  </div>

                  <div
                    className="font-black text-[22px] tracking-[-0.8px] leading-[1.1] mb-3"
                    style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif" }}
                  >
                    {card.name}
                  </div>
                  <div className="text-[13px] leading-[1.75] mb-4" style={{ color: "#555", maxWidth: 520 }}>
                    {card.desc}
                  </div>
                  <ul className="flex flex-col gap-[5px]">
                    {card.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-baseline gap-2 text-[9px]"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                          color: "#666",
                        }}
                      >
                        <span className="w-[3px] h-[3px] rounded-full flex-shrink-0 mt-1" style={{ background: "#555" }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between gap-2 flex-wrap mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div className="flex gap-[5px] flex-wrap">
                    {card.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[9px] px-[9px] py-[3px]"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                          background: "rgba(0,0,0,0.04)",
                          border: "1px solid rgba(0,0,0,0.07)",
                          color: "#555",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-1 text-[12px] font-bold transition-all duration-200 group-hover:text-[#111010] group-hover:translate-x-[3px] group-hover:translate-y-[-2px]"
                    style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", color: "#888", whiteSpace: "nowrap" }}
                  >
                    View
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </div>

      {/* View all */}
      <div className="text-center mt-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-7 py-[14px] rounded-md text-[13px] font-bold transition-all duration-[250ms]"
          style={{
            fontFamily: "var(--font-syne,'Syne'),sans-serif",
            background: "transparent",
            color: "#111010",
            border: "1px solid rgba(0,0,0,0.12)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)"; e.currentTarget.style.background = "rgba(0,0,0,0.04)" }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.background = "transparent" }}
        >
          View all projects
        </Link>
      </div>
    </section>
  )
}

