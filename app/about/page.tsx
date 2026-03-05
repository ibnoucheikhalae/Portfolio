import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Alae Ibnou Cheikh",
  description:
    "Learn more about Alae Ibnou Cheikh - a Computer Science student passionate about AI, data analysis, running, and building impact-driven technology.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Get to Know Me
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              About Me
            </h1>
          </div>

          {/* Intro */}
          <div className="mt-10 flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              I am a Computer Science student with a genuine curiosity for how
              things work under the hood. My journey into tech started with a
              fascination for problem-solving, and it has since grown into a deep
              passion for artificial intelligence, data analysis, and building
              technology that creates real impact.
            </p>
            <p>
              What drives me is not just the technical challenge, but the
              possibility of using these tools to address problems that matter.
              Whether it is analysing coastal data for environmental
              sustainability or prototyping predictive systems for industry, I am
              most engaged when the work connects to something bigger than the
              code itself.
            </p>
            <p>
              Hackathons are another environment where I really thrive. I enjoy
              the fast-paced, collaborative nature of building something
              meaningful under time pressure. So far, I have participated in
              several hackathons and have placed in the top 3 twice, experiences
              that pushed me to think creatively, work effectively in teams, and
              turn ideas into working prototypes quickly.
            </p>
          </div>

          {/* Outside of Tech */}
          <div className="mt-16 flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Outside of Tech
            </h2>
            <div className="mt-2 flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <div className="flex flex-col gap-6">
              <p>
                When I step away from the screen, you will usually find me
                running or hiking. I have completed 7 races including
                half-marathons, and distance running has become one of the most
                important parts of my life outside of tech.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-grow">
                  <p>
                    Running taught me that most meaningful goals are not achieved
                    through bursts of intensity, but through discipline, consistency,
                    and a long-term mindset. Those principles shape how I approach
                    everything from building software to learning new skills. Every
                    kilometre is a reminder that progress compounds, even when it
                    does not feel like it.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="relative h-48 w-48 overflow-hidden rounded-md border border-border">
                    <Image
                      src="/images/run.jpg"
                      alt="Half marathon completion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
              <p>
                I also enjoy getting outdoors for hikes whenever I can. There is
                something grounding about disconnecting from screens and spending
                time in nature. It recharges me and brings a sense of clarity
                that carries into my work.
              </p>
            </div>
          </div>

          {/* What I'm Building Towards */}
          <div className="mt-16 flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {"What I'm Building Towards"}
            </h2>
            <div className="mt-2 flex flex-col gap-6 leading-relaxed text-muted-foreground">
              <p>
                My focus is on the intersection of AI and data analysis. I want
                to build systems that do not just process data, but extract
                meaningful insights from it, insights that help people and
                organisations make better decisions.
              </p>
              <p>
                I am especially interested in impact-driven projects, whether
                that means contributing to sustainability efforts through data
                analysis or exploring fintech solutions that make financial tools
                more accessible. The thread connecting my interests is a belief
                that technology should serve a purpose beyond itself.
              </p>
              <p>
                Right now, I am deepening my skills in machine learning,
                predictive modelling, and full-stack development. Every project I
                take on is a step towards becoming the kind of engineer who can
                bridge the gap between technical capability and real-world
                impact.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
              {"Let's Connect"}
            </h3>
            <p className="mt-4 mx-auto max-w-md text-muted-foreground leading-relaxed">
              {"Whether you want to collaborate on a project, chat about AI, or just say hello, I'd love to hear from you."}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              {"Let's Connect"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
