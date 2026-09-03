import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Penetration Testing Report | Alae Ibnou Cheikh",
  description:
    "Case study: Web server penetration test showing a five-stage compromise chain from reconnaissance to root access, with CVSS and CWE-based reporting.",
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <div
        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: "#8b8b8b", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}
      >
        {eyebrow}
      </div>
      <h2
        className="mt-3 text-2xl font-black leading-tight md:text-3xl"
        style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", letterSpacing: "-0.04em" }}
      >
        {title}
      </h2>
    </div>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="my-4 overflow-x-auto rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm leading-7"
      style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}
    >
      <code>{children}</code>
    </pre>
  )
}

export default function PenetrationTestingReportPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pt-28 pb-24" style={{ background: "#f7f3ee" }}>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-black"
            style={{ color: "#666", textDecoration: "none" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <header className="mt-8 border-b border-black/10 pb-12">
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#8b8b8b", fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace" }}
            >
              Cybersecurity Case Study
            </div>
            <h1
              className="mt-4 text-4xl font-black leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", letterSpacing: "-0.05em" }}
            >
              Penetration Testing Report
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-black/70">
              Academic ethical hacking exercise, conducted in an isolated lab environment. IPs, hostnames,
              usernames and credentials below are placeholders — the original assessment report and lab
              environment are not reproduced, in line with my university&apos;s academic integrity guidance.
            </p>
          </header>

          <section className="py-12">
            <SectionTitle eyebrow="Overview" title="Full Compromise Chain" />
            <p className="max-w-3xl text-[17px] leading-8 text-black/75">
              As part of a university ethical hacking module, I carried out an authorised penetration test
              against a deliberately vulnerable Linux web server, working independently on this target end to
              end. I took it from unauthenticated network access to full root compromise by chaining five
              separate vulnerabilities into a single attack path, then scored, classified and reported each
              finding to a professional standard (CVSS + CWE mapping, evidenced remediation).
            </p>
          </section>

          <section className="border-t border-black/10 py-12">
            <SectionTitle eyebrow="Methodology" title="How the assessment was executed" />
            <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-black/[0.03] text-[10px] uppercase tracking-[0.18em] text-black/60">
                  <tr>
                    <th className="px-4 py-3">Phase</th>
                    <th className="px-4 py-3">Goal</th>
                    <th className="px-4 py-3">Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">Reconnaissance</td>
                    <td className="px-4 py-3">Map the attack surface</td>
                    <td className="px-4 py-3">nmap</td>
                  </tr>
                  <tr className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">Enumeration</td>
                    <td className="px-4 py-3">Find hidden content, banners, services</td>
                    <td className="px-4 py-3">gobuster, dirb, curl, ftp</td>
                  </tr>
                  <tr className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">Exploitation</td>
                    <td className="px-4 py-3">Turn misconfigurations into access</td>
                    <td className="px-4 py-3">Custom PHP reverse shell, netcat</td>
                  </tr>
                  <tr className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">Post-exploitation</td>
                    <td className="px-4 py-3">Escalate and assess blast radius</td>
                    <td className="px-4 py-3">Python pty, sudo -l</td>
                  </tr>
                  <tr className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">Reporting</td>
                    <td className="px-4 py-3">Communicate risk</td>
                    <td className="px-4 py-3">CVSS v3.1, CWE, risk-rated write-ups</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-black/10 py-12">
            <SectionTitle eyebrow="Attack Chain" title="Five steps, one compromise path" />

            <div className="space-y-10 text-[17px] leading-8 text-black/75">
              <article>
                <h3 className="mb-3 text-xl font-bold text-black">1. Reconnaissance — service fingerprinting</h3>
                <CodeBlock>{`nmap -v -p21,22,80 -sV -T4 <target>`}</CodeBlock>
                <p>
                  Returned an outdated FTP daemon, an old OpenSSH build, and Apache 2.4.18 — each a lead worth
                  chasing rather than a vulnerability on its own.
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-black">2. Enumeration — anonymous FTP + web root overlap</h3>
                <CodeBlock>{`gobuster dir -u http://<target> -w /usr/share/wordlists/dirb/common.txt`}</CodeBlock>
                <p>
                  This surfaced a /files/ directory with directory listing enabled. Connecting via FTP confirmed
                  anonymous access was permitted:
                </p>
                <CodeBlock>{`ftp <target>
Name (<target>:user): anonymous
331 Anonymous login ok, send your complete email address as your password
230 Anonymous access granted, restrictions apply
ftp> ls`}</CodeBlock>
                <p>
                  The real issue wasn&apos;t the anonymous login by itself — it was that the FTP root was mounted
                  directly inside the Apache web root, so anything written over FTP became instantly reachable
                  over HTTP with no access control in between. CWE-284 (Improper Access Control), CVSS 8.8.
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-black">3. Exploitation — unrestricted upload → RCE</h3>
                <p>
                  Since FTP write access mapped straight onto a public web path, I uploaded a PHP reverse shell:
                </p>
                <CodeBlock>{`ftp> put reverse-shell.php
226 Transfer complete`}</CodeBlock>
                <p>...set up a listener...</p>
                <CodeBlock>{`nc -nvlp 4444`}</CodeBlock>
                <p>
                  ...and triggered the payload by requesting it in the browser. This returned an interactive shell
                  as the low-privileged web-service account with zero authentication anywhere in the chain — the
                  most severe issue found, CWE-434 (Unrestricted Upload of File with Dangerous Type), CVSS 9.8
                  (Critical).
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-black">4. Post-exploitation — stabilising the shell and hunting for creds</h3>
                <CodeBlock>{`python3 -c 'import pty; pty.spawn("/bin/bash")'`}</CodeBlock>
                <p>
                  Filesystem enumeration then turned up a script left world-readable in a shared directory,
                  containing a plaintext username and an MD5 password hash — a textbook example of CWE-312/CWE-311
                  (cleartext storage / missing encryption). Because MD5 has no meaningful resistance to
                  brute-force or rainbow-table attacks, the hash was recovered in seconds using a public cracking
                  service — CWE-328 (Use of a Weak Hash), CVSS 7.5.
                </p>
              </article>

              <article>
                <h3 className="mb-3 text-xl font-bold text-black">5. Privilege escalation — misconfigured sudo</h3>
                <CodeBlock>{`sudo -l
# (user) NOPASSWD: /usr/bin/python3.x`}</CodeBlock>
                <p>A passwordless sudo entry against an interpreter binary is effectively an unrestricted root shell:</p>
                <CodeBlock>{`sudo /usr/bin/python3 -c 'import os; os.system("/bin/bash")'`}</CodeBlock>
                <p>
                  This confirmed full root access — CWE-250 (Execution with Unnecessary Privileges), CVSS 8.8.
                  From root I demonstrated (without leaving changes in the graded environment) how an attacker
                  could add a backdoor user and clear shell history to persist and cover tracks.
                </p>
              </article>
            </div>
          </section>

          <section className="border-t border-black/10 py-12">
            <SectionTitle eyebrow="Risk Communication & Governance" title="Reporting the findings properly" />
            <p className="max-w-3xl text-[17px] leading-8 text-black/75">
              Beyond the exploitation itself, a meaningful part of the exercise was translating five separate
              technical findings into a single coherent risk narrative for a non-technical reader: scoring each
              with CVSS v3.1, mapping to CWE for consistency with industry vulnerability taxonomies, and writing
              remediation advice that a sysadmin could action without needing to understand the exploit chain.
              That reporting discipline — structured scoring, clear ownership per finding, and recommendations
              tied to root cause rather than symptoms — is the same muscle used in AI risk/governance work:
              identifying a weakness, rating its severity against a recognised framework, and making the fix
              actionable for people who didn't find the problem themselves.
            </p>
          </section>

          <section className="border-t border-black/10 py-12">
            <SectionTitle eyebrow="Skills Demonstrated" title="What the exercise showed" />
            <ul className="grid gap-3 text-[17px] leading-8 text-black/75 md:grid-cols-2">
              <li>Network and service reconnaissance (nmap)</li>
              <li>Web enumeration and content discovery (gobuster, dirb)</li>
              <li>Exploit development and delivery (PHP web shells, reverse shells, netcat)</li>
              <li>Linux shell stabilisation and post-exploitation (pty, filesystem enumeration)</li>
              <li>Password/hash analysis and cracking</li>
              <li>Privilege escalation via Linux permission misconfigurations</li>
              <li>Vulnerability scoring (CVSS v3.1) and classification (CWE)</li>
              <li>Risk communication for mixed technical/non-technical audiences</li>
            </ul>
          </section>

          <section className="border-t border-black/10 py-12">
            <SectionTitle eyebrow="What I’d Do Differently" title="Reflection" />
            <p className="max-w-3xl text-[17px] leading-8 text-black/75">
              With more time I&apos;d automate more of the enumeration (a lightweight recon script rather than
              running each tool manually) and spend longer on the reporting side, since translating a technical
              finding into prioritised, actionable risk is what actually gets vulnerabilities fixed.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}