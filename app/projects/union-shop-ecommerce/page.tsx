"use client"

import React, { useEffect } from "react"
import "./union-shop.css"

export default function UnionShopPage() {
  useEffect(() => {
    // Cursor animation
    const cursor = document.getElementById("cursor")
    const ring = document.getElementById("cursorRing")
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursor) {
        cursor.style.left = mx - 6 + "px"
        cursor.style.top = my - 6 + "px"
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animRing = () => {
      rx += (mx - rx - 20) * 0.12
      ry += (my - ry - 20) * 0.12
      if (ring) {
        ring.style.left = rx + "px"
        ring.style.top = ry + "px"
      }
      requestAnimationFrame(animRing)
    }
    animRing()

    // Scroll reveal for sections
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80)
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((r) => observer.observe(r))

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="union-shop">
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* Navigation */}
      <nav>
        <a href="/projects" className="nav-logo back-link">
          ← Back to Projects
        </a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#tech">Tech</a>
          <a href="#architecture">Architecture</a>
          <a href="https://github.com/ibnoucheikhalae/union_shop" target="_blank">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-modern" id="overview">
        {/* Gradient mesh background */}
        <div className="hero-mesh-bg">
          <div className="mesh-orb mesh-orb-1"></div>
          <div className="mesh-orb mesh-orb-2"></div>
          <div className="mesh-orb mesh-orb-3"></div>
        </div>

        <div className="hero-container">
          {/* Left column: Text & CTA */}
          <div className="hero-content">
            <div className="hero-label reveal-item">
              <span className="label-dot"></span>
              E-Commerce Mobile Platform
            </div>

            <h1 className="hero-title reveal-item">
              Union<span className="title-accent">Shop</span>
              <span className="title-period">.</span>
            </h1>

            <p className="hero-subtext reveal-item">
              A production-grade e-commerce mobile application built for the University of Portsmouth Student Union.
              Full authentication, real-time cart management, custom merchandise personalisation, and cloud-synced user
              profiles across iOS and Android.
            </p>

            {/* Stats pills */}
            <div className="hero-stats reveal-item">
              <div className="stat-pill">
                <span className="stat-number">201+</span>
                <span className="stat-name">Tests</span>
              </div>
              <div className="stat-pill">
                <span className="stat-number">15+</span>
                <span className="stat-name">Screens</span>
              </div>
              <div className="stat-pill">
                <span className="stat-number">3×</span>
                <span className="stat-name">Auth Methods</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons reveal-item">
              <a href="https://github.com/ibnoucheikhalae/union_shop" target="_blank" className="btn-hero btn-primary-hero">
                <span>GitHub Repository</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a href="#features" className="btn-hero btn-secondary-hero">
                <span>Explore Features</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Right column: Phone mockup */}
          <div className="hero-showcase reveal-item">
            <div className="showcase-glow"></div>
            
            <div className="phone-mockup-modern">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-header">
                  <div className="app-header-logo">UnionShop</div>
                  <div className="app-header-icons">
                    <div className="app-icon"></div>
                    <div className="app-icon"></div>
                  </div>
                </div>
                <div className="app-banner">
                  <div className="app-banner-circle"></div>
                  <div className="app-banner-text">
                    Autumn<br />
                    Favourites
                  </div>
                  <div className="app-banner-sub">Shop the latest collection →</div>
                </div>
                <div className="app-grid">
                  <div className="app-product-card">
                    <div className="app-product-img">🧥</div>
                    <div className="app-product-name">Classic Hoodie</div>
                    <div className="app-product-price">£29.99</div>
                  </div>
                  <div className="app-product-card">
                    <div className="app-product-img">🎽</div>
                    <div className="app-product-name">Sportswear</div>
                    <div className="app-product-price">£24.99</div>
                  </div>
                  <div className="app-product-card">
                    <div className="app-product-img">👜</div>
                    <div className="app-product-name">Tote Bag</div>
                    <div className="app-product-price">£12.99</div>
                  </div>
                  <div className="app-product-card">
                    <div className="app-product-img">✏️</div>
                    <div className="app-product-name">Stationery</div>
                    <div className="app-product-price">£8.99</div>
                  </div>
                </div>
                <div className="app-cart-bar">
                  <div className="app-cart-text">Cart 2 items</div>
                  <div className="app-cart-text">£54.98 →</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator reveal-item">
          <span>Scroll</span>
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats reveal">
        <div className="stat">
          <div className="stat-number">
            201<span>+</span>
          </div>
          <div className="stat-label">Passing unit, widget & integration tests</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-number">
            15<span>+</span>
          </div>
          <div className="stat-label">Screens & page components built</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-number">
            3<span>×</span>
          </div>
          <div className="stat-label">Auth methods Email, Google, Apple</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <div className="stat-number">
            2<span>+</span>
          </div>
          <div className="stat-label">Cloud services integrated (Firebase + Firestore)</div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="light-section">
        <div className="section-tag reveal">Features</div>
        <h2 className="reveal">
          Built for real<br />
          users.
        </h2>
        <p className="section-desc reveal">
          Every feature was designed to replicate and extend a production e-commerce experience not just as
          coursework, but as a deployable product.
        </p>

        <div className="features-layout reveal">
          <div className="feature-block">
            <div className="feature-num">01</div>
            <div className="feature-title">Authentication System</div>
            <div className="feature-desc">
              Full user auth with Email/Password, Google Sign-In, and Apple Sign-In. Session persistence, profile
              management via Firestore, and password reset flows.
            </div>
          </div>
          <div className="feature-block accent-block">
            <div className="feature-num">02</div>
            <div className="feature-title">Cart & Checkout</div>
            <div className="feature-desc">
              Real-time cart with add/remove/quantity management. Automatic VAT calculation (20%), free shipping
              threshold at £50, and persistent cart storage across sessions.
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-num">03</div>
            <div className="feature-title">Print Shack Personalisation</div>
            <div className="feature-desc">
              Dynamic merchandise customisation users select product type, garment colour, font, and up to 3 lines
              of personalised text with live preview updates.
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-num">04</div>
            <div className="feature-title">Search & Filtering</div>
            <div className="feature-desc">
              Global search across all product collections. Advanced filtering by price, name, and popularity.
              Pagination for large catalogs with smooth navigation.
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-num">05</div>
            <div className="feature-title">Responsive Design</div>
            <div className="feature-desc">
              Optimised for mobile-first with full desktop support. Adaptive layouts tested across device profiles
              including iPhone, Pixel, and widescreen viewports.
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-num">06</div>
            <div className="feature-title">Test Coverage</div>
            <div className="feature-desc">
              201 passing tests across unit, widget, and integration layers. Covers edge cases, cart operations, auth
              flows, search functionality, and form validation.
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" style={{ background: "var(--card)" }}>
        <div className="section-tag reveal">Technology</div>
        <h2 className="reveal">
          The stack<br />
          behind it.
        </h2>
        <p className="section-desc reveal">
          Chosen for production-readiness, cross-platform reach, and real-world scalability.
        </p>

        <div className="tech-grid reveal">
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">Flutter & Dart</div>
            <div className="tech-desc">
              Cross-platform UI framework enabling single codebase deployment to iOS, Android, and Web with native
              performance.
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">Firebase Auth</div>
            <div className="tech-desc">
              Secure authentication supporting Email/Password, Google, and Apple Sign-In with session management and
              token refresh.
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">Cloud Firestore</div>
            <div className="tech-desc">
              Real-time NoSQL cloud database for user profiles, persistent cart storage, and order management across
              devices.
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">Google & Apple OAuth</div>
            <div className="tech-desc">
              Social authentication providers integrated for frictionless sign-in using industry-standard OAuth 2.0
              flows.
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">SharedPreferences</div>
            <div className="tech-desc">
              Local data persistence layer for offline-first cart storage and user settings, synced with Firestore on
              reconnect.
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-hover-accent"></div>
            <div className="tech-name">Flutter Test Suite</div>
            <div className="tech-desc">
              Comprehensive testing framework covering unit, widget, and integration tests with 201 passing cases and
              edge condition coverage.
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="arch-section light-section" id="architecture">
        <div className="arch-grid">
          <div className="arch-text reveal">
            <div className="section-tag">Architecture</div>
            <h3>
              Clean, layered<br />
              structure.
            </h3>

            <div className="arch-point">
              <div className="arch-point-icon"></div>
              <div className="arch-point-text">
                <h4>Service Layer Pattern</h4>
                <p>
                  Business logic cleanly separated into AuthService, CartService, and SearchService fully testable
                  and independent of UI.
                </p>
              </div>
            </div>
            <div className="arch-point">
              <div className="arch-point-icon"></div>
              <div className="arch-point-text">
                <h4>Reactive State Management</h4>
                <p>
                  Real-time UI updates driven by Firestore streams, ensuring cart badges and profile data stay in sync
                  instantly.
                </p>
              </div>
            </div>
            <div className="arch-point">
              <div className="arch-point-icon"></div>
              <div className="arch-point-text">
                <h4>Modular Component Design</h4>
                <p>
                  Reusable widget library including ProductCard, CollectionCard, AppHeader, and Footer composable
                  across all 15+ screens.
                </p>
              </div>
            </div>
          </div>

          <div className="arch-diagram reveal">
            <div className="arch-layer">
              <div className="arch-dot"></div>
              <div className="arch-label">UI Layer Pages & Widgets</div>
              <div className="arch-sub">Flutter</div>
            </div>
            <div className="arch-arrow">↕</div>
            <div className="arch-layer">
              <div className="arch-dot orange"></div>
              <div className="arch-label">Service Layer Business Logic</div>
              <div className="arch-sub">Dart</div>
            </div>
            <div className="arch-arrow">↕</div>
            <div className="arch-layer">
              <div className="arch-dot blue"></div>
              <div className="arch-label">Data Models Products & Cart</div>
              <div className="arch-sub">Dart</div>
            </div>
            <div className="arch-arrow">↕</div>
            <div className="arch-layer">
              <div className="arch-dot purple"></div>
              <div className="arch-label">Firebase Auth & Firestore</div>
              <div className="arch-sub">Cloud</div>
            </div>
            <div className="arch-arrow">↕</div>
            <div className="arch-layer">
              <div className="arch-dot"></div>
              <div className="arch-label">Local Persistence SharedPrefs</div>
              <div className="arch-sub">Device</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section>
        <div className="section-tag reveal">Process</div>
        <h2 className="reveal">
          How it<br />
          was built.
        </h2>
        <p className="section-desc reveal">
          Developed iteratively following Agile principles committing small, meaningful changes throughout the build
          cycle.
        </p>

        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-phase">Phase 1 Foundation</div>
            <div className="timeline-title">Static UI & Navigation</div>
            <div className="timeline-desc">
              Built the core navigation architecture, homepage layout, and static page shells. Established the routing
              system and reusable component library from the ground up.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 2 Data Layer</div>
            <div className="timeline-title">Dynamic Products & Collections</div>
            <div className="timeline-desc">
              Introduced data models for products and collections. Implemented filtering, sorting, and pagination.
              Connected UI components to service-layer data sources.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 3 Commerce</div>
            <div className="timeline-title">Cart, Checkout & Personalisation</div>
            <div className="timeline-desc">
              Built full cart management with persistent storage, VAT calculations, and the Print Shack personalisation
              engine with live preview updates.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 4 Cloud Integration</div>
            <div className="timeline-title">Firebase Auth & Firestore</div>
            <div className="timeline-desc">
              Integrated Firebase Authentication with three sign-in methods. Connected user profiles and cart
              persistence to Firestore for real-time cross-device sync.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 5 Quality</div>
            <div className="timeline-title">Testing & Refinement</div>
            <div className="timeline-desc">
              Wrote 201 comprehensive tests across unit, widget, and integration layers. Fixed edge cases, improved
              responsive layouts, and optimised performance across device profiles.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="light">
        <div className="footer-left">
          <h3>Alae Ibnoucheikh</h3>
          <p>MEng Computer Science · University of Portsmouth</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ibnoucheikhalae/union_shop" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:ibnoucheikhalae@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  )
}
