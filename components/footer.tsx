import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Alae Ibnou Cheikh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ibnoucheikhalae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:ibnoucheikhalae@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
