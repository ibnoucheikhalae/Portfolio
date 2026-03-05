"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { AnimatedItem } from "@/components/animated-section"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Let{"'"}s Connect
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get in Touch
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/40 bg-card shadow-sm shadow-black/20 p-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              I am always interested in hearing about new opportunities,
              collaborations, or just having a chat about technology and ideas.
              Feel free to reach out through the form or any of the links below.
            </p>

            <div className="flex flex-col gap-4">
              <AnimatedItem index={0} staggerMs={100}>
              <a
                href="https://github.com/ibnoucheikhalae"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-4 transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-200 group-hover:scale-110">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground">
                    View my repositories
                  </p>
                </div>
              </a>
              </AnimatedItem>

              <AnimatedItem index={1} staggerMs={100}>
              <a
                href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-4 transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-200 group-hover:scale-110">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    LinkedIn
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Connect with me
                  </p>
                </div>
              </a>
              </AnimatedItem>

              <AnimatedItem index={2} staggerMs={100}>
              <a
                href="mailto:ibnoucheikhalae@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card shadow-sm shadow-black/20 p-4 transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-200 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">
                    ibnoucheikhalae@gmail.com
                  </p>
                </div>
              </a>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
