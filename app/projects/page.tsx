'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import './projects.css';

export default function ProjectsPage() {

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = (mx - 6) + 'px'; cursor.style.top = (my - 6) + 'px'; }
    };
    document.addEventListener('mousemove', onMove);
    const animRing = () => {
      rx += (mx - rx - 20) * 0.12; ry += (my - ry - 20) * 0.12;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    };
    animRing();
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 60);
      });
    }, { threshold: 0.06 });
    reveals.forEach(r => obs.observe(r));
    return () => { document.removeEventListener('mousemove', onMove); obs.disconnect(); };
  }, []);

  const filtered = projects;

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav className="proj-nav">
        <a href="/" className="nav-home">← Back to Home</a>
      </nav>

      <div className="proj-hero reveal">
        <div className="proj-hero-tag">Portfolio · Selected Works</div>
        <h1>All<br /><span>Projects.</span></h1>
        <p>Built from scratch. Spanning software, data, AI, and infrastructure.</p>
      </div>

      <div className="proj-grid">
          {filtered.map((project, i) => (
            <article key={project.slug} className="proj-card reveal">
              <div className="proj-title">{project.title}</div>
              <p className="proj-summary">{project.summary}</p>
              <div className="proj-highlights">
                {project.highlights.map((h, j) => (
                  <div key={j} className="proj-highlight">
                    <div className="proj-highlight-dot"></div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="proj-tech-row">
                {project.techStack.map(t => (
                  <span key={t} className="proj-tech">{t}</span>
                ))}
              </div>
              <div className="proj-cta-row">
                <Link href={`/projects/${project.slug}`} className="btn-case">
                  Case Study
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                {project.githubUrl !== "https://github.com" && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-gh">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </a>}
              </div>
            </article>
          ))}
        </div>

      <footer>
        <div className="proj-footer">
          <div>
            <div className="proj-footer-brand">Alae Ibnoucheikh</div>
            <div className="proj-footer-copy">MEng Computer Science · University of Portsmouth</div>
          </div>
          <div className="proj-footer-links">
            <a href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://medium.com/@ibnoucheikhalae" target="_blank" rel="noreferrer">Medium</a>
            <a href="mailto:ibnoucheikhalae@gmail.com">Contact</a>
            <a href="/">Home</a>
          </div>
        </div>
      </footer>
    </>
  );
}

