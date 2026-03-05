import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { AnimatedItem } from "@/components/animated-section"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-sm shadow-black/20 transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] hover:border-primary/60 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background">
      {/* Full-card clickable overlay */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0 rounded-2xl focus:outline-none"
        aria-label={`View case study for ${project.title}`}
        tabIndex={-1}
      />

      {/* Top accent bar */}
      <div className="h-1 rounded-t-2xl bg-gradient-to-r from-primary/40 to-transparent transition-all duration-200 group-hover:from-primary/80 group-hover:to-primary/30" />

      <div className="flex flex-1 flex-col p-6">
        {/* Header: category + title */}
        <div className="relative z-10 flex flex-col gap-3">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-primary/70">
            {project.category}
          </span>
          <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
            {project.title}
          </h3>
        </div>

        {/* Summary */}
        <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.summary}
        </p>

        {/* Tech stack tags */}
        <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer pushes buttons to bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="relative z-10 my-5 h-px bg-border transition-colors duration-200 group-hover:bg-primary/20" />

        {/* Action buttons */}
        <div className="relative z-10 flex items-center gap-2.5">
          <Link
            href={`/projects/${project.slug}`}
            className="relative z-20 inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="relative z-20 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/50 bg-transparent text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.05] hover:shadow-md hover:shadow-primary/10 active:scale-[0.95] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <Github className="h-4 w-4" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="relative z-20 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/50 bg-transparent text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.05] hover:shadow-md hover:shadow-primary/10 active:scale-[0.95] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary md:text-sm">
            My Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            A selection of projects spanning AI systems, mobile apps, networking, and database design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedItem key={project.slug} index={i}>
              <ProjectCard project={project} />
            </AnimatedItem>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-transparent px-6 py-3 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
