'use client';

import { useEffect } from 'react';
import './coastal-change.css';

export default function CoastalChangePage() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) { cursor.style.left = (mx - 6) + 'px'; cursor.style.top = (my - 6) + 'px'; }
    };
    document.addEventListener('mousemove', handleMouseMove);

    const animRing = () => {
      rx += (mx - rx - 20) * 0.12; ry += (my - ry - 20) * 0.12;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    };
    animRing();

    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.08 });
    reveals.forEach(r => obs.observe(r));

    return () => { document.removeEventListener('mousemove', handleMouseMove); obs.disconnect(); };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav>
        <div className="nav-links">
          <a href="#findings">Findings</a>
          <a href="#processes">Processes</a>
          <a href="#ai">AI Prototype</a>
          <a href="#impact">Impact</a>
          <a href="#process">Timeline</a>
        </div>
        <a href="/projects" className="nav-back">← Back to Projects</a>
      </nav>

      {/* Hero */}
      <section className="hero" id="overview">
        <div className="hero-bg">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>
        </div>

        <div className="hero-left">
          <div className="hero-tag">RSK Group · AI &amp; Environmental Innovation Challenge</div>
          <h1>Coastal<br /><span className="line2">Change.</span></h1>
          <p className="hero-desc">
            A data-driven study of erosion, accretion, and sea-level rise along the North Norfolk Coast combining satellite imagery analysis, LiDAR elevation data, and an AI-powered erosion prediction prototype.
          </p>
          <div className="hero-ctas">
            <a href="#findings" className="btn-primary">View Findings →</a>
            <a href="#ai" className="btn-secondary">AI Prototype</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-card float-card-1">
            <div className="float-label">Sea-Level Rise</div>
            <div className="float-value orange">4.3mm</div>
            <div className="float-sub">Per year · North Norfolk</div>
          </div>

          <div className="data-card">
            <div className="data-card-bar">
              <div className="d-dot r"></div><div className="d-dot y"></div><div className="d-dot g"></div>
              <span className="data-card-title">coastal_analysis.py</span>
            </div>
            <div className="data-body">
              <div className="data-banner">
                <div className="data-banner-label">AI Erosion Prediction</div>
                <div className="data-banner-val">Happisburgh</div>
                <div className="data-banner-sub">Cliff · Soft sedimentary · HIGH risk</div>
              </div>
              <div className="data-row"><span className="data-row-label">Annual retreat</span><span className="data-row-val neg">1.4–2.1m/yr</span></div>
              <div className="data-row"><span className="data-row-label">Elevation change</span><span className="data-row-val neg">−1–2m</span></div>
              <div className="data-row"><span className="data-row-label">Blakeney accretion</span><span className="data-row-val pos">+0.8m</span></div>
              <div className="data-row"><span className="data-row-label">NDVI 2000 → 2023</span><span className="data-row-val neg">0.45 → 0.39</span></div>
              <div className="data-row"><span className="data-row-label">Wetland loss</span><span className="data-row-val neg">−10–15ha</span></div>
              <div className="data-row"><span className="data-row-label">Study period</span><span className="data-row-val neutral">2000–2023</span></div>
              <div className="data-ai-pill">
                <div className="data-ai-text">🤖 AI risk: CRITICAL</div>
                <div className="data-ai-text">Intervention: URGENT →</div>
              </div>
            </div>
          </div>

          <div className="float-card float-card-2">
            <div className="float-label">Accretion Gain</div>
            <div className="float-value green">+0.8m</div>
            <div className="float-sub">Blakeney Point</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats reveal">
        <div className="stat"><div className="stat-number warn"><span>1–2m</span></div><div className="stat-label">Annual cliff retreat at Happisburgh</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number"><span>4.3mm</span></div><div className="stat-label">Sea-level rise per year, relative</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number"><span>23yr</span></div><div className="stat-label">Study period 2000 to 2023</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number"><span>15ha</span></div><div className="stat-label">Wetland lost at Stiffkey &amp; Cley Marshes</div></div>
      </div>

      {/* Findings */}
      <section id="findings" className="light-section">
        <div className="section-tag reveal">Key Findings</div>
        <h2 className="reveal">The coast is<br />changing fast.</h2>
        <p className="section-desc reveal">Satellite imagery, LiDAR elevation data, and NDVI vegetation analysis compared across 2000 and 2023 reveal four interconnected patterns of coastal change.</p>

        <div className="findings-layout reveal">
          <div className="finding-block accent-block">
            <div className="finding-num">01</div>
            <div className="finding-title">Happisburgh &amp; Overstrand: Severe Shoreline Retreat</div>
            <div className="finding-desc">Soft sedimentary cliffs of sand, silt, and clay have retreated 50–150 metres landward between 2000 and 2023. High-energy North Sea waves combined with increasing storm frequency make these cliffs perpetually vulnerable and rising sea levels mean waves reach further with each passing year.</div>
            <div className="stat-chips">
              <div className="stat-chip"><strong>50–150m</strong>Shoreline retreat</div>
              <div className="stat-chip"><strong>1–2m</strong>Annual recession</div>
              <div className="stat-chip"><strong>−2m</strong>Elevation lost</div>
            </div>
          </div>
          <div className="finding-block">
            <div className="finding-num">02</div>
            <div className="finding-title">Blakeney Point: Natural Accretion Building Resilience</div>
            <div className="finding-desc">While erosion dominates the eastern stretch, tidal sediment transport at Blakeney Point has driven measurable shoreline expansion. New dune systems and mudflats are actively forming, increasing elevation and providing natural coastal defence against the very sea-level rise threatening other zones.</div>
            <div className="stat-chips">
              <div className="stat-chip"><strong>+0.5–1m</strong>Elevation gain</div>
              <div className="stat-chip"><strong>Expanding</strong>Dune systems</div>
            </div>
          </div>
          <div className="finding-block">
            <div className="finding-num">03</div>
            <div className="finding-title">NDVI Decline: Vegetation Health Deteriorating</div>
            <div className="finding-desc">Normalised Difference Vegetation Index analysis shows a decline from 0.45 in 2000 to 0.39 in 2023 in the most affected marsh areas. Saltwater intrusion into Blakeney Freshes and periodic inundation events are weakening the salt marsh and dune vegetation that underpins biodiversity and erosion resistance.</div>
            <div className="stat-chips">
              <div className="stat-chip"><strong>0.45 → 0.39</strong>NDVI decline</div>
              <div className="stat-chip"><strong>−10–15ha</strong>Wetland lost</div>
            </div>
          </div>
          <div className="finding-block">
            <div className="finding-num">04</div>
            <div className="finding-title">Sea-Level Rise Amplifying Every Other Process</div>
            <div className="finding-desc">At ~4.3mm per year a combination of global sea-level rise and local land subsidence unique to East Anglia this factor extends wave reach further up soft cliffs, increases storm surge inundation of low-lying marshes, and erodes the region&apos;s natural flood buffer capacity with each passing season.</div>
            <div className="stat-chips">
              <div className="stat-chip"><strong>4.3mm/yr</strong>SLR rate</div>
              <div className="stat-chip"><strong>1–3m ASL</strong>Vulnerable zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Processes */}
      <section id="processes" className="processes-section">
        <div className="section-tag reveal">Coastal Processes</div>
        <h2 className="reveal">Three forces.<br />One coastline.</h2>
        <p className="section-desc reveal">The North Norfolk Coast is shaped by three dominant processes operating simultaneously in some places pulling in opposite directions just 30km apart.</p>

        <div className="process-grid reveal">
          <div className="process-item">
            <div className="process-accent"></div>

            <div className="process-name">Erosion</div>
            <div className="process-tag">Happisburgh · Overstrand · Cromer</div>
            <div className="process-desc">Wave undercutting and mass movement strip soft sedimentary cliffs continuously. High-energy North Sea exposure leaves these formations permanently vulnerable and rising sea levels mean each storm surge reaches further inland than the last.</div>
            <div className="process-numbers">
              <div className="process-number"><strong>1–2m</strong>Annual retreat</div>
              <div className="process-number"><strong>150m</strong>Max 2000–23</div>
            </div>
          </div>
          <div className="process-item">
            <div className="process-accent"></div>

            <div className="process-name">Accretion</div>
            <div className="process-tag">Blakeney Point · Cley Marshes</div>
            <div className="process-desc">In sheltered, low-energy environments, tidal currents deposit sand and silt to build new land. Growing dune systems and mudflats act as natural sea defences a self-reinforcing system as long as sediment supply from eroding sections remains adequate.</div>
            <div className="process-numbers">
              <div className="process-number"><strong>+1m</strong>Elevation gain</div>
              <div className="process-number"><strong>New</strong>Dunes forming</div>
            </div>
          </div>
          <div className="process-item">
            <div className="process-accent"></div>

            <div className="process-name">Sea-Level Rise</div>
            <div className="process-tag">Entire North Norfolk coastline</div>
            <div className="process-desc">The multiplier effect SLR amplifies both erosion and flooding simultaneously. Low-lying marshlands face saltwater intrusion degrading vegetation; cliff areas face waves reaching higher with each surge. East Anglia&apos;s land subsidence compounds the global SLR rate.</div>
            <div className="process-numbers">
              <div className="process-number"><strong>4.3mm</strong>Per year</div>
              <div className="process-number"><strong>+SLR</strong>Subsidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Prototype */}
      <section id="ai" className="ai-section light-section">
        <div className="ai-grid">
          <div className="ai-text reveal">
            <div className="section-tag">AI Prototype</div>
            <h2>Predicting<br />erosion with AI.</h2>
            <p>As part of the RSK AI &amp; Environmental Innovation Challenge, I built an <strong>AI-powered erosion rate prediction prototype</strong> on top of the historical coastal data gathered in this study.</p>
            <p>The tool takes location-specific inputs cliff material type, elevation, shoreline position, storm track proximity and uses a <strong>large language model via API</strong> to reason about projected erosion rates and flag high-risk zones for prioritised intervention.</p>
            <p>Rather than replacing specialist environmental modelling, the prototype acts as a <strong>rapid triage tool</strong> helping analysts quickly identify which coastline sections warrant detailed survey attention, generating structured risk summaries for coastal management planning documents.</p>
            <p>Built using <strong>Cursor</strong> and the <strong>OpenAI API</strong>, developed rapidly within the hackathon timeframe demonstrating how generative AI can accelerate environmental insight workflows without traditional ML infrastructure.</p>
            <div className="chip-row">
              <span className="chip hi">OpenAI API</span>
              <span className="chip hi">Cursor</span>
              <span className="chip hi">Python</span>
              <span className="chip lo">Erosion Prediction</span>
              <span className="chip lo">Risk Triage</span>
              <span className="chip lo">Generative AI</span>
            </div>
          </div>

          <div className="terminal reveal">
            <div className="terminal-bar">
              <div className="t-d r"></div><div className="t-d y"></div><div className="t-d g"></div>
              <span className="terminal-name">erosion_predictor.py</span>
            </div>
            <div className="terminal-body">
              <div><span className="tc"># RSK Coastal Erosion Prediction Prototype</span></div>
              <div><span className="tc"># North Norfolk Coast · AI Innovation Challenge</span></div>
              <span className="tblank"></span>
              <div><span className="tprompt">INPUT</span> <span className="tout">location = <span className="tval">&quot;Happisburgh Cliff&quot;</span></span></div>
              <div><span className="tprompt">INPUT</span> <span className="tout">cliff_material = <span className="tval">&quot;soft sedimentary&quot;</span></span></div>
              <div><span className="tprompt">INPUT</span> <span className="tout">elevation_asl = <span className="tval">17.4m</span></span></div>
              <div><span className="tprompt">INPUT</span> <span className="tout">storm_exposure = <span className="tval">&quot;HIGH&quot;</span></span></div>
              <div><span className="tprompt">INPUT</span> <span className="tout">slr_rate = <span className="tval">4.3mm/yr</span></span></div>
              <span className="tblank"></span>
              <div><span className="twarn">⟶ Querying erosion model via LLM API...</span></div>
              <span className="tblank"></span>
              <div><span className="tok">✓ PREDICTION COMPLETE</span></div>
              <span className="tblank"></span>
              <div><span className="tout">Projected annual retreat: <span className="thi">1.4 – 2.1m / yr</span></span></div>
              <div><span className="tout">Risk level: <span className="tval">CRITICAL</span></span></div>
              <div><span className="tout">Time to infrastructure risk: <span className="thi">~8–12 years</span></span></div>
              <span className="tblank"></span>
              <div><span className="tok">✓ Intervention priority: HIGH</span></div>
              <div><span className="tout">Action: Urgent survey + managed retreat</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact">
        <div className="section-tag reveal">Assessed Impacts</div>
        <h2 className="reveal">Who it<br />affects.</h2>
        <p className="section-desc reveal">Coastal change does not stop at the waterline the consequences cascade through ecosystems, infrastructure, and local communities across the region.</p>

        <div className="impact-grid reveal">
          <div className="impact-card">
            <div className="impact-bar"></div>
            <div className="impact-icon">🌿</div>
            <div className="impact-title">Ecosystems</div>
            <div className="impact-desc">Salt marshes, dunes and mudflats form critical habitat for migratory birds, fish nurseries, and rare coastal flora all under active threat from saltwater intrusion and flooding.</div>
            <div className="impact-bullet">NDVI down 13% in key marsh zones since 2000</div>
            <div className="impact-bullet">Saltwater intrusion degrading Cley &amp; Stiffkey habitats</div>
            <div className="impact-bullet">Wetland loss reducing natural flood buffer capacity</div>
            <div className="impact-bullet">Species richness declining as specialised habitats shrink</div>
          </div>
          <div className="impact-card">
            <div className="impact-bar"></div>
            <div className="impact-icon">🏗️</div>
            <div className="impact-title">Infrastructure</div>
            <div className="impact-desc">Cliff recession is actively threatening residential properties, roads, and public amenities in Happisburgh, Overstrand, and Wells-next-the-Sea.</div>
            <div className="impact-bullet">Homes lost to cliff retreat no compensation policy</div>
            <div className="impact-bullet">Coastal roads requiring rerouting and frequent repair</div>
            <div className="impact-bullet">Sea walls and groynes incurring high maintenance costs</div>
            <div className="impact-bullet">Flood risk rising for low-lying town centres</div>
          </div>
          <div className="impact-card">
            <div className="impact-bar"></div>
            <div className="impact-icon">🏘️</div>
            <div className="impact-title">Communities</div>
            <div className="impact-desc">Residents face displacement, reduced property values, and economic losses across tourism, agriculture, and local fisheries that depend on the coastal ecosystem.</div>
            <div className="impact-bullet">Forced relocation in no-active-intervention zones</div>
            <div className="impact-bullet">Tourism revenues threatened by habitat loss</div>
            <div className="impact-bullet">Saltwater intrusion making farmland unsuitable</div>
            <div className="impact-bullet">Public safety risks from sudden cliff collapse</div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="process" className="timeline-section light-section">
        <div className="section-tag reveal">Research Process</div>
        <h2 className="reveal">How it<br />was built.</h2>
        <p className="section-desc reveal">From initial coastline scoping through to AI prototype development and impact assessment the full research and build process.</p>

        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-phase">Phase 1 Data Collection</div>
            <div className="timeline-title">Satellite Imagery &amp; Historical Baseline</div>
            <div className="timeline-desc">Used NASA Worldview to access and compare satellite imagery from 2000 and 2023 across the North Norfolk Coast. Identified key study sites Happisburgh, Overstrand, Blakeney Point, Cley Marshes, and Stiffkey and established historical shoreline baselines.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 2 Shoreline Analysis</div>
            <div className="timeline-title">Shoreline Position &amp; Erosion Mapping</div>
            <div className="timeline-desc">Compared 2000 vs 2023 imagery to quantify shoreline retreat in erosion hotspots and expansion in accretion zones. Identified the 50–150m retreat at Happisburgh and the measurable dune growth at Blakeney Point.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 3 Environmental Analysis</div>
            <div className="timeline-title">NDVI Vegetation &amp; Elevation Data</div>
            <div className="timeline-desc">Conducted NDVI analysis to assess vegetation health changes in key marshland areas, documenting the 0.45→0.39 decline. Analysed LiDAR elevation data from the Environment Agency to map 1–2m height losses in erosion zones and 0.5–1m gains in accretion zones.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 4 AI Development</div>
            <div className="timeline-title">Erosion Prediction Prototype</div>
            <div className="timeline-desc">Built the AI-powered erosion rate prediction tool using Cursor and the OpenAI API. Designed the prompt architecture to take coastal input parameters and return structured risk assessments and intervention priorities demonstrating rapid GenAI prototyping within the hackathon timeframe.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-phase">Phase 5 Reporting</div>
            <div className="timeline-title">Impact Assessment &amp; Recommendations</div>
            <div className="timeline-desc">Synthesised findings into ecosystem, infrastructure, and community impact assessments. Translated research into management recommendations balancing ecological preservation with community resilience the core challenge of North Norfolk coastal management.</div>
          </div>
        </div>
      </section>

      <footer className="light">
        <div className="footer-left">
          <h3>Alae Ibnoucheikh</h3>
          <p>MEng Computer Science · University of Portsmouth</p>
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#444' }}>RSK Group · AI &amp; Environmental Innovation Challenge</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:ibnoucheikhalae@gmail.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
