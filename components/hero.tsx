"use client"

export function Hero() {
  return (
    <section
      id="home"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#f7f3ee" }}
    >
      {/* Ghost watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -10,
          left: -10,
          fontFamily: "var(--font-syne,'Syne'),sans-serif",
          fontWeight: 900,
          fontSize: "clamp(90px,14vw,190px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(17,16,16,0.05)",
          letterSpacing: "-6px",
          lineHeight: 1,
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        IBNOUCHEIKH
      </div>

      {/* Content grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "56fr 44fr",
          minHeight: "100vh",
        }}
        className="hero-grid"
      >
        {/* LEFT: badge + name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px clamp(20px,6vw,60px) 100px clamp(20px,8vw,88px)",
            position: "relative",
          }}
          className="hero-left"
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              borderRadius: 0,
              background: "transparent",
              border: "1px solid rgba(0,0,0,0.18)",
              width: "fit-content",
              marginBottom: 28,
              animation: "hfadeUp 0.7s ease both",
            }}
          >
            <span
              style={{
                width: 6, height: 6,
                borderRadius: "50%",
                background: "#111",
                animation: "hpulse 2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                fontSize: 10,
                letterSpacing: "1.5px",
                color: "#555",
                textTransform: "uppercase",
              }}
            >
              Final-Year Computer Science Student
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontWeight: 800,
              fontSize: "clamp(64px,8vw,112px)",
              letterSpacing: "-5px",
              lineHeight: 0.86,
              margin: "0 0 24px",
              animation: "hfadeUp 0.7s ease both",
              animationDelay: "0.08s",
            }}
          >
            <span style={{ display: "block", color: "#111010" }}>Alae</span>
            {/* Ibnou stroke outline with pink fill sweep */}
            <span style={{ display: "block", position: "relative", lineHeight: "inherit" }}>
              <span
                style={{
                  WebkitTextStroke: "2px #111010",
                  color: "transparent",
                  display: "block",
                }}
              >
                Ibnou
              </span>
              <span
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  color: "#444",
                  display: "block",
                  clipPath: "inset(0 100% 0 0)",
                  animation: "hnameReveal 1.5s ease both",
                  animationDelay: "0.7s",
                  WebkitTextStroke: "0px",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  letterSpacing: "inherit",
                }}
              >
                Ibnou
              </span>
            </span>
            <span style={{ display: "block", color: "#111010" }}>Cheikh</span>
          </h1>

          {/* ASCII tagline */}
          <div
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              fontSize: 9,
              color: "#bbb",
              letterSpacing: "2px",
              textTransform: "uppercase",
              animation: "hfadeUp 0.7s ease both",
              animationDelay: "0.5s",
              marginTop: 16,
            }}
          >
            {"// builder · analyst · thinker"}
          </div>

          {/* Scroll hint */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: "clamp(20px,8vw,88px)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              animation: "hfadeUp 1s ease both",
              animationDelay: "1.5s",
            }}
          >
            <div
              style={{
                width: 24, height: 1,
                background: "#999",
                animation: "hscrollSweep 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                fontSize: 10,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#999",
              }}
            >
              Scroll to explore
            </span>
          </div>
        </div>

        {/* RIGHT: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px 88px 100px 60px",
          }}
          className="hero-right"
        >
          {/* Mono role line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
              animation: "hfadeUp 0.7s ease both",
              animationDelay: "0.16s",
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              fontSize: 11,
            }}
          >
            <span style={{ color: "#bbb" }}>{"/*"}</span>
            <span
              style={{
                letterSpacing: "3px",
                color: "#555",
                textTransform: "uppercase",
              }}
            >
              LLMs · RAG · AI Governance
            </span>
            <span style={{ color: "#bbb" }}>{"*/"}</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans,'DM Sans'),sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#555",
              maxWidth: 420,
              margin: "0 0 32px",
              animation: "hfadeUp 0.7s ease both",
              animationDelay: "0.22s",
            }}
          >
            Final-year Computer Science student specialising in Artificial Intelligence, focused on LLMs, RAG architectures, AI risk, and technical AI governance. I combine hands-on technical delivery with commercially grounded AI strategy and transformation thinking.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 40,
              animation: "hfadeUp 0.7s ease both",
              animationDelay: "0.28s",
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "13px 28px",
                borderRadius: 10,
                background: "#111010",
                color: "#f7f3ee",
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                transition: "transform 0.15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "" }}
            >
              See Projects
            </a>
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "#111010",
                border: "1.5px solid rgba(17,16,16,0.25)",
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                transition: "border-color 0.15s, transform 0.15s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#111010"; el.style.transform = "scale(1.03)" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(17,16,16,0.25)"; el.style.transform = "" }}
            >
              Learn About Me
            </a>
          </div>


        </div>
      </div>

      <style>{`
        @keyframes hfadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hnameReveal {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0%   0 0); }
        }
        @keyframes hpulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes hscrollSweep {
          0%, 100% { width: 24px; opacity: 1; }
          50%       { width: 40px; opacity: 0.45; }
        }
        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            padding: 0 clamp(20px,6vw,88px) 80px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-left {
            padding: 90px 24px 32px !important;
          }
          .hero-right {
            padding: 0 24px 60px !important;
          }
        }
      `}</style>
    </section>
  )
}

