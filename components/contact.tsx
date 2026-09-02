"use client"

import { AnimatedItem } from "@/components/animated-section"

const contactLinks = [
  {
    label: "Email",
    value: "ibnoucheikhalae@gmail.com",
    href: "mailto:ibnoucheikhalae@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/ibnoucheikhalae",
    href: "https://github.com/ibnoucheikhalae",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/alae-ibnoucheikh",
    href: "https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    value: "@ibnoucheikhalae",
    href: "https://medium.com/@ibnoucheikhalae",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9zm4.25 4.5a2.25 2.25 0 1 0 0 .001V12zm4.5 0c0-1.519 1.063-2.75 2.375-2.75S17.5 10.481 17.5 12s-1.063 2.75-2.375 2.75S12.75 13.519 12.75 12zm-1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zm10.25 0c0 1.104-.56 2-1.25 2s-1.25-.896-1.25-2 .56-2 1.25-2 1.25.896 1.25 2z" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-syne,'Syne'),sans-serif",
          fontSize: "clamp(80px,15vw,200px)",
          fontWeight: 900,
          color: "rgba(17,16,16,0.04)",
          letterSpacing: "-6px",
          zIndex: 0,
        }}
      >
        CONNECT
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        {/* Eye label */}
        <div
          className="flex items-center justify-center gap-4 mb-6"
          style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", fontSize: "10px", color: "#999", letterSpacing: "2.5px", textTransform: "uppercase" }}
        >
          <span style={{ display: "block", width: 40, height: 1, background: "#ccc" }} />
          Contact
          <span style={{ display: "block", width: 40, height: 1, background: "#ccc" }} />
        </div>

        {/* Heading */}
        <AnimatedItem index={0} staggerMs={0}>
          <h2
            className="font-black mb-6 leading-none"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontSize: "clamp(38px,5vw,68px)",
              letterSpacing: "-2.5px",
            }}
          >
            Let&apos;s build something{" "}
            <span style={{ color: "#111010" }}>great.</span>
          </h2>
        </AnimatedItem>

        {/* Subtitle */}
        <AnimatedItem index={1} staggerMs={80}>
          <p
            className="mb-16 mx-auto"
            style={{ color: "#555", maxWidth: 480, lineHeight: "1.7", fontSize: 15 }}
          >
            Open to internships, collaborations, and interesting problems. If you have something worth building I&apos;m in.
          </p>
        </AnimatedItem>

        {/* Contact cards */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {contactLinks.map((link, i) => (
            <AnimatedItem key={link.label} index={i + 2} staggerMs={80}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-[14px] px-[30px] py-[26px] transition-all duration-[250ms] no-underline group"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  minWidth: 180,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(0,0,0,0.22)"
                  el.style.transform = "translateY(-5px)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(0,0,0,0.07)"
                  el.style.transform = ""
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: "rgba(0,0,0,0.05)", color: "#555" }}
                >
                  {link.icon}
                </div>
                <div>
                  <div
                    className="text-[11px] tracking-[2px] uppercase mb-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", color: "#777" }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="font-semibold text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", color: "#111010" }}
                  >
                    {link.value}
                  </div>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </div>

        {/* CTAs */}
        <AnimatedItem index={5} staggerMs={80}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/Resume Alae Ibnou Cheikh.pdf"
              download
              className="px-8 py-[14px] rounded-[10px] text-sm font-semibold no-underline transition-all duration-200"
              style={{
                background: "#111010",
                color: "#f7f3ee",
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#333" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#111010" }}
            >
              Download CV
            </a>
            <a
              href="mailto:ibnoucheikhalae@gmail.com"
              className="px-8 py-[14px] rounded-[10px] text-sm font-semibold no-underline transition-all duration-200"
              style={{
                background: "transparent",
                color: "#111010",
                border: "1px solid rgba(0,0,0,0.15)",
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.25)" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.15)" }}
            >
              Send a message
            </a>
          </div>
        </AnimatedItem>
      </div>
    </section>
  )
}