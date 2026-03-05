import { Code2, Smartphone, Database, Shield } from "lucide-react"
import { AnimatedItem } from "@/components/animated-section"

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "Dart"],
  },
  {
    title: "Web & Mobile",
    icon: Smartphone,
    skills: ["Flutter", "HTML", "CSS"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["SQL", "PostgreSQL"],
  },
  {
    title: "Networking & Security",
    icon: Shield,
    skills: [
      "Networking fundamentals",
      "Ethical hacking",
      "Cybersecurity basics",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Technical Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I Work With
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <AnimatedItem key={group.title} index={i} staggerMs={100}>
                <div
                  className="rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-6 transition-all duration-200 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8"
                >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </div>
              </AnimatedItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}
