import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
