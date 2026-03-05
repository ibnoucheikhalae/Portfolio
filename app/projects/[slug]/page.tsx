import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react"
import { projects } from "@/data/projects"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Alae Ibnou Cheikh`,
    description: project.summary,
  }
}

function SectionBlock({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  )
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[80vh] flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card border border-border">
              <span className="text-2xl font-bold text-muted-foreground">?</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Project Not Found
            </h1>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              The project you are looking for does not exist or may have been
              moved. Check the URL or browse all projects below.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const { caseStudy } = project

  return (
    <>
      <Navbar />
      <main className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {project.title}
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            {/* Tech stack */}
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

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.03] hover:shadow-md hover:shadow-primary/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <hr className="my-12 border-border" />

          {/* Case study sections */}
          <div className="flex flex-col gap-12">
            <SectionBlock label="01" title="The Problem">
              <p>{caseStudy.problem}</p>
            </SectionBlock>

            <SectionBlock label="02" title="What I Built">
              <p>{caseStudy.solution}</p>
            </SectionBlock>

            <SectionBlock label="03" title="Key Features">
              <ul className="mt-2 flex flex-col gap-3">
                {caseStudy.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock label="04" title="Results & Impact">
              <p>{caseStudy.results}</p>
            </SectionBlock>

            <SectionBlock label="05" title="What I Learned">
              <p>{caseStudy.learned}</p>
            </SectionBlock>
          </div>

          {/* Bottom nav */}
          <hr className="my-12 border-border" />

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Interested in working together?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:scale-[1.03] hover:shadow-md hover:shadow-primary/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <ArrowLeft className="h-4 w-4" />
                All Projects
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
