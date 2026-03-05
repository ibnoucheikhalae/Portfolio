"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Download, Github, Linkedin } from "lucide-react"

const sectionLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isProjectsPage = pathname.startsWith("/projects")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track which section is currently in view using IntersectionObserver
  useEffect(() => {
    if (!isHome) return

    const sectionIds = sectionLinks.map((link) => link.sectionId)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isHome])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isHome) return // let normal navigation happen for non-home pages
      e.preventDefault()
      const targetId = href.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
      setIsOpen(false)
    },
    [isHome]
  )

  // Resolve href for section links: on homepage use #anchor, on other pages use /#anchor
  const resolveSectionHref = (href: string) => (isHome ? href : `/${href}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isOpen
          ? "bg-background border-b border-border"
          : scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300"
            : "bg-transparent transition-all duration-300"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          AIC
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sectionLinks.slice(0, 1).map((link) => (
            <li key={link.href}>
              <a
                href={resolveSectionHref(link.href)}
                onClick={(e) => handleSectionClick(e, link.href)}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isHome && activeSection === link.sectionId
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isHome && activeSection === link.sectionId && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
                )}
              </a>
            </li>
          ))}

          {/* About - links to dedicated page */}
          <li>
            <Link
              href="/about"
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
              )}
            </Link>
          </li>

          {/* Projects - links to dedicated page */}
          <li>
            <Link
              href="/projects"
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                isProjectsPage
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
              {isProjectsPage && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
              )}
            </Link>
          </li>

          {sectionLinks.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={resolveSectionHref(link.href)}
                onClick={(e) => handleSectionClick(e, link.href)}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isHome && activeSection === link.sectionId
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isHome && activeSection === link.sectionId && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right-side actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com/ibnoucheikhalae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-primary"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-primary"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav - always mounted, toggled via opacity/pointer-events for instant display */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 border-t border-border bg-background lg:hidden transition-opacity duration-150 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
          <ul className="flex flex-col gap-1 px-6 py-6">
            {/* Home link */}
            <li>
              <a
                href={resolveSectionHref("#home")}
                onClick={(e) => handleSectionClick(e, "#home")}
                className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                  isHome && activeSection === "home"
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                Home
              </a>
            </li>

            {/* About - links to dedicated page */}
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                  pathname === "/about"
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                About
              </Link>
            </li>

            {/* Projects - links to dedicated page */}
            <li>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                  isProjectsPage
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                Projects
              </Link>
            </li>

            {/* Remaining section links */}
            {sectionLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={resolveSectionHref(link.href)}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                    isHome && activeSection === link.sectionId
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ibnoucheikhalae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
  )
}
