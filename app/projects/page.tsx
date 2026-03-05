"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { projects, categories } from "@/data/projects"
import type { ProjectCategory } from "@/data/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type Filter = "All" | ProjectCategory

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

  const filters: Filter[] = ["All", ...categories]

  return (
    <>
      <Navbar />
      <main className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              All Projects
            </h1>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              A collection of academic and personal projects spanning AI, mobile
              development, networking, and database design.
            </p>
          </div>

          {/* Filter chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/50 bg-transparent text-primary hover:border-primary hover:bg-primary/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-6 transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] hover:border-primary/60 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 z-0 rounded-2xl focus:outline-none"
                  aria-label={`View case study for ${project.title}`}
                  tabIndex={-1}
                />

                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="relative z-20 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Case Study
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="relative z-20 inline-flex items-center gap-1.5 rounded-lg border border-primary/50 bg-transparent px-4 py-2 text-xs font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.03] hover:shadow-md hover:shadow-primary/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
              <button
                onClick={() => setActive("All")}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
