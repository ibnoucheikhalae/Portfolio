"use client"

import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

function useStaggerReveal(count: number, baseDelay = 0, stagger = 150) {
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false))

  useEffect(() => {
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, baseDelay + i * stagger)
    )
    return () => timers.forEach(clearTimeout)
  }, [count, baseDelay, stagger])

  return visible
}

export function Hero() {
  const v = useStaggerReveal(8, 100, 150)

  const cls = (i: number) =>
    `transition-all duration-[400ms] ease-out ${
      v[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 pb-24 md:pb-16"
    >
      {/* Layered radial gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[80px]" />
        <div className="absolute left-1/2 top-1/3 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[60px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:gap-16 md:text-left">
        {/* Profile image */}
        <div className={`relative flex-shrink-0 ${cls(0)}`}>
          {/* Soft outer glow */}
          <div className="absolute -inset-3 -z-10 rounded-full bg-primary/15 blur-xl" />
          <div className="absolute -inset-1.5 -z-10 rounded-full bg-primary/10 blur-md" />
          {/* Image with border */}
          <div className="h-48 w-48 overflow-hidden rounded-full border-[3px] border-primary/40 shadow-lg shadow-primary/10 md:h-56 md:w-56">
            <Image
              src="/images/profile.jpg"
              alt="Alae Ibnou Cheikh - Profile photo"
              width={224}
              height={224}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Title block with increased spacing */}
          <div className="flex flex-col gap-4 md:gap-5">
            <p className={`font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary md:text-sm ${cls(1)}`}>
              Welcome to my portfolio
            </p>
            <h1 className={`text-balance text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl ${cls(2)}`}>
              Alae Ibnou Cheikh
            </h1>
            <h2 className={`font-mono text-base font-normal text-muted-foreground md:text-lg ${cls(3)}`}>
              Computer Science Student specialising in{" "}
              <span className="text-primary">AI</span> and{" "}
              <span className="text-primary">Data Analysis</span>
            </h2>
          </div>

          <p className={`max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base lg:max-w-lg ${cls(4)}`}>
            I design and build data-driven applications, AI systems, and
            scalable software solutions. My work focuses on turning complex data
            and real-world problems into practical technology.
          </p>

          {/* CTA buttons */}
          <div className={`flex flex-wrap items-center gap-3 md:justify-start justify-center ${cls(5)}`}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-transparent px-6 py-3 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className={`flex items-center gap-4 md:justify-start justify-center ${cls(6)}`}>
            <a
              href="https://github.com/ibnoucheikhalae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile, visible from md up */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 ${cls(7)}`}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          Scroll
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-muted-foreground/20 p-1.5">
          <div
            className="h-2 w-1 rounded-full bg-primary/70"
            style={{ animation: "scroll-float 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  )
}
