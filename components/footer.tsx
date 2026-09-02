"use client"

export function Footer() {
  return (
    <footer
      style={{
        padding: "28px 88px",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        background: "#f7f3ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
      className="max-md:px-6"
    >
      <p
        style={{
          fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
          fontSize: 9,
          color: "#999",
          letterSpacing: "1px",
          margin: 0,
        }}
      >
        2026 Alae Ibnoucheikh · Computer Science · University of Portsmouth
      </p>
      <div style={{ display: "flex", gap: 20 }}>
        {[
          { label: "GitHub",   href: "https://github.com/ibnoucheikhalae" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/" },
          { label: "Medium",   href: "https://medium.com/@ibnoucheikhalae" },
          { label: "Email",    href: "mailto:alaeibnoucheikh@gmail.com" },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              fontSize: 9,
              color: "#999",
              letterSpacing: "1px",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#111010" }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#999" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
