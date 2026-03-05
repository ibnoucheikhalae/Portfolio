import Image from "next/image"
import Link from "next/link"
import { BrainCircuit, Smartphone, ShieldCheck, ArrowRight } from "lucide-react"
import { AnimatedItem } from "@/components/animated-section"

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI & Data",
    description:
      "Building intelligent systems with machine learning, data analysis, and predictive modelling.",
  },
  {
    icon: Smartphone,
    title: "Mobile (Flutter)",
    description:
      "Crafting cross-platform mobile experiences with Flutter and Dart for real-world applications.",
  },
  {
    icon: ShieldCheck,
    title: "Networking & Security",
    description:
      "Designing secure network architectures with VLAN segmentation, monitoring, and best practices.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Background
          </h2>
        </div>

        {/* Two-column layout: photo left, text right */}
        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border md:h-80 md:w-80">
              <Image
                src="/images/about.jpg"
                alt="Alae Ibnou Cheikh"
                fill
                className="object-cover"
              />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-primary/10 blur-lg" />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              I am a motivated Computer Science student with a deep interest in
              artificial intelligence, data analysis, and building impactful
              technology. My passion lies in creating data-driven solutions that
              address real-world challenges across diverse sectors.
            </p>
            <p>
              I am particularly drawn to the intersection of sustainability,
              fintech, and applied AI systems. I believe that technology, when
              thoughtfully designed and deployed, has the power to drive
              meaningful change in how we approach complex global problems.
            </p>
            <p>
              Beyond the keyboard, I enjoy running, hiking, and continuous
              learning. I am always exploring new frameworks, tools, and
              methodologies to expand my skill set and deliver more effective
              solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Read more about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3 Highlight cards */}
        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
          {highlights.map((item, i) => (
            <AnimatedItem key={item.title} index={i} staggerMs={100}>
              <div
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-6 transition-all duration-200 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}
