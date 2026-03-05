import { AnimatedItem } from "@/components/animated-section"

const experiences = [
  {
    role: "IBM Consulting Insight Week",
    description:
      "Worked on digital transformation case simulations and presented data-driven business solutions.",
  },
  {
    role: "J.P. Morgan Market Risk Insight Programme",
    description:
      "Analysed simulated trading portfolios and evaluated market risk exposure using data analysis techniques.",
  },
  {
    role: "RSK Group Data Analysis Micro-Internship",
    description:
      "Analysed coastal environmental datasets and produced visualizations supporting sustainability decisions.",
  },
  {
    role: "Law Firm Data Analyst Internship",
    description:
      "Cleaned and structured legal datasets and created SQL queries for internal operations.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[9px]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <AnimatedItem key={index} index={index} staggerMs={120}>
                <div className="group relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1.5 flex-shrink-0">
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary md:h-5 md:w-5" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-5 transition-all duration-200 group-hover:border-primary/50 group-hover:-translate-y-0.5 group-hover:shadow-xl group-hover:shadow-primary/8 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
