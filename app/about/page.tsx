import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PolaroidStack } from "@/components/polaroid-stack"

export const metadata: Metadata = {
  title: "About | Alae Ibnou Cheikh",
  description:
    "Learn more about Alae Ibnou Cheikh - a Computer Science student passionate about AI, data analysis, running, and building impact-driven technology.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24" style={{ background: "#f7f3ee" }}>

        {/* ── Hero ─────────────────────────────────── */}
        <div
          className="px-6 pt-36 pb-20"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#888", textDecoration: "none" }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p
              className="mt-8 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#aaa", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}
            >
              Alae Ibnoucheikh
            </p>
            <h1
              className="mt-4 font-black leading-[1.05]"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(40px,6vw,72px)",
                letterSpacing: "-2.5px",
                color: "#111",
              }}
            >
              I build things<br />that matter.
            </h1>
            <p
              className="mt-5 text-base"
              style={{ color: "#777", fontStyle: "italic", letterSpacing: "0.01em" }}
            >
              Then I run half-marathons to recover.
            </p>
          </div>
        </div>

        {/* ── Section 1: Who I Am ───────────────────── */}
        <div className="px-6 py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="mx-auto max-w-3xl">
            <p className="section-tag" style={{ color: "#aaa", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", marginBottom: 24 }}>
              About Me
            </p>
            <blockquote
              className="font-black leading-[1.15] mb-10"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(24px,3.5vw,40px)",
                letterSpacing: "-1px",
                color: "#111",
                borderLeft: "4px solid #111",
                paddingLeft: 24,
              }}
            >
              I build things that work, document things that last,<br />and learn everything in between.
            </blockquote>
            <div className="flex flex-col gap-5 text-sm leading-[1.9]" style={{ color: "#555" }}>
              <p>
                I am a <span style={{ color: "#111", fontWeight: 600 }}>Computer Science MEng student</span> with a deep interest in artificial intelligence, data analysis, and building technology that creates real impact. What drives me is not the technical challenge alone, but the possibility of using these tools to solve problems that actually matter whether that means analysing coastal erosion data for environmental sustainability or prototyping predictive systems for industry clients.
              </p>
              <p>
                I am most alive in the space where a hard technical problem connects to something bigger than the code itself. That is the work I want to do, and the engineer I am becoming.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 2: Hackathons ─────────────────── */}
        <div className="px-6 py-20" style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "#666", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}>
              Under Pressure
            </p>
            <div className="flex flex-col md:flex-row md:items-end gap-8 mb-10">
              <div>
                <div
                  className="font-black leading-none"
                  style={{
                    fontFamily: "var(--font-syne,'Syne'),sans-serif",
                    fontSize: "clamp(64px,10vw,120px)",
                    letterSpacing: "-4px",
                    color: "#f7f3ee",
                  }}
                >
                  2×
                </div>
                <div className="mt-2 text-sm font-semibold" style={{ color: "#f7f3ee", letterSpacing: "0.05em" }}>
                  Top 3
                </div>
                <div className="text-xs mt-1" style={{ color: "#666" }}>
                  Out of every hackathon I have entered.
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-sm leading-[1.9]" style={{ color: "#888" }}>
                <p>
                  Hackathons are where I find out what I am actually capable of. The fast-paced, high-stakes environment of building something real under serious time pressure is one I have learned to thrive in. I have competed in several hackathons and placed in the top 3 twice experiences that pushed me to think more creatively, move faster, and turn half-formed ideas into working prototypes in hours rather than weeks.
                </p>
                <p>
                  Every hackathon taught me something a classroom cannot: what it feels like to ship under pressure, and how to make decisions when you do not have all the information you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Background & Languages ───────── */}
        <div className="px-6 py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "#aaa", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}>
              Background
            </p>
            <blockquote
              className="font-black leading-[1.15] mb-10"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(22px,3vw,36px)",
                letterSpacing: "-1px",
                color: "#111",
                borderLeft: "4px solid #111",
                paddingLeft: 24,
              }}
            >
              Two continents. Four languages.<br />One perspective.
            </blockquote>
            <div className="flex flex-col gap-5 text-sm leading-[1.9] mb-10" style={{ color: "#555" }}>
              <p>
                I have lived and studied in both <span style={{ color: "#111", fontWeight: 600 }}>Morocco and England</span> an experience that shaped not just how I think about problems but how I communicate across cultures. Growing up between two worlds gave me an instinct for finding common ground and a genuine ease in diverse environments.
              </p>
              <p>
                Language, for me, is not just a communication tool it is a bridge to understanding how other people see the world.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "Modern Arabic", level: "Native" },
                { lang: "Darija", level: "Native" },
                { lang: "French", level: "Fluent" },
                { lang: "English", level: "Fluent" },
                { lang: "Spanish", level: "Beginner" },
              ].map(({ lang, level }) => (
                <div
                  key={lang}
                  className="flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#111" }}>{lang}</span>
                  <span
                    className="text-[9px] uppercase tracking-wider rounded-full px-2 py-[2px]"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                      background: "#111",
                      color: "#f7f3ee",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 4: Outside of Tech ───────────── */}
        <div className="px-6 py-20" style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "#666", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}>
              Beyond the Screen
            </p>
            <blockquote
              className="font-black leading-[1.15] mb-4"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(20px,2.8vw,32px)",
                letterSpacing: "-0.8px",
                color: "#f7f3ee",
                borderLeft: "4px solid #f7f3ee",
                paddingLeft: 24,
              }}
            >
              &ldquo;Progress compounds,<br />even when it doesn&apos;t feel like it.&rdquo;
            </blockquote>
            <PolaroidStack />
            <div className="flex flex-col md:flex-row md:items-end gap-8 mt-10">
              <div className="flex-shrink-0">
                <div
                  className="font-black leading-none"
                  style={{
                    fontFamily: "var(--font-syne,'Syne'),sans-serif",
                    fontSize: "clamp(64px,10vw,110px)",
                    letterSpacing: "-4px",
                    color: "#f7f3ee",
                  }}
                >
                  7
                </div>
                <div className="mt-1 text-sm font-semibold" style={{ color: "#f7f3ee" }}>Races</div>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-sm leading-[1.9]" style={{ color: "#888" }}>
                <p>
                  When I step away from the screen, you will usually find me running. Distance running became one of the most important parts of my life outside of tech not because of the races themselves, but because of what the training teaches you.
                </p>
                <p>
                  Running taught me that meaningful goals are not achieved through bursts of intensity. They are built through discipline, consistency, and a long-term mindset. I carry those principles into everything: how I build software, how I learn new skills, how I approach problems that do not have obvious solutions. Every kilometre is a reminder that the work compounds, even when it does not feel like it.
                </p>
                <p>
                  I also hike whenever I can. There is something grounding about disconnecting from screens and spending time in nature. It brings a clarity that carries directly into my work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 5: The Mission ────────────────── */}
        <div className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: "#aaa", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}>
              Where I&apos;m Headed
            </p>
            <blockquote
              className="font-black leading-[1.15] mb-10"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(20px,2.8vw,34px)",
                letterSpacing: "-1px",
                color: "#111",
                borderLeft: "4px solid #111",
                paddingLeft: 24,
              }}
            >
              I want to build systems that don&apos;t just process data<br />they extract meaning from it.
            </blockquote>
            <div className="flex flex-col gap-5 text-sm leading-[1.9]" style={{ color: "#555" }}>
              <p>
                My focus is on the intersection of <span style={{ color: "#111", fontWeight: 600 }}>AI and data analysis</span>. Specifically, I am interested in building systems that help people and organisations make better decisions not by automating thinking, but by surfacing the right information at the right moment.
              </p>
              <p>
                I am especially drawn to impact-driven work: sustainability projects where data reveals something that changes how we act, or fintech solutions that make better financial tools accessible to more people. The thread connecting all of my interests is a belief that technology should serve a purpose beyond itself.
              </p>
              <p>
                Right now I am deepening my skills in machine learning, predictive modelling, and full-stack development. Every project I take on is a deliberate step toward becoming the kind of engineer who can bridge the gap between technical capability and real-world impact. That gap is where I want to work.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-md text-[13px] font-bold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-syne,'Syne'),sans-serif",
                  background: "#111",
                  color: "#f7f3ee",
                  textDecoration: "none",
                }}
              >
                {"Let's Connect"} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-md text-[13px] font-bold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-syne,'Syne'),sans-serif",
                  background: "transparent",
                  color: "#111",
                  textDecoration: "none",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                See My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
