'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './festival.css';

const assumptions = [
  'Network must support 35,000 attendees',
  'Reliable connectivity for staff and payment terminals',
  'Secure segmentation between staff, guest, and administrative networks',
  'Wireless coverage across the showground',
  'High uptime and redundancy',
  'Weather-resistant outdoor infrastructure',
];

const securityAreas = [
  {
    title: 'Physical Security',
    items: [
      'Secure equipment cabinets',
      'Restricted access network rooms',
      'Protected underground cabling',
      'Weather-resistant hardware',
    ],
  },
  {
    title: 'Digital Security',
    items: [
      'VLAN segmentation',
      'Firewall rules',
      'Access control lists',
      'VPN access for administrators',
      'Port security and DHCP snooping',
    ],
  },
  {
    title: 'Environmental Security',
    items: [
      'Weatherproof hardware',
      'Protected cabling routes',
      'Monitoring systems',
      'Redundant power and equipment placement',
    ],
  },
];

const devices = [
  { name: 'Cisco 1921/K9 Router', specs: 'Integrated Services Router', role: 'Core routing device for network traffic management and inter-VLAN routing' },
  { name: 'Cisco CBS350-48P-4G Switch', specs: '48-port Managed Gigabit Switch', role: 'Primary distribution switch with PoE for access point power delivery' },
  { name: 'Cisco SF350-24P Switch', specs: '24-port Managed Gigabit Switch', role: 'Secondary switches for network segmentation and VLAN trunking' },
  { name: 'Excel Cat6 UTP Cable', specs: 'Copper Twisted Pair', role: 'Ethernet cabling for device connections and access point backhaul' },
  { name: 'RS PRO OS2 Fibre Cable', specs: 'Single-mode Optical Fiber', role: 'Long-distance backbone links between network zones and main distribution' },
  { name: 'Ubiquiti UniFi AP AC HD', specs: 'High-Density Access Point', role: 'Wireless coverage for guest network with 4x4 MIMO technology' },
];

const costs = [
  { component: 'Cisco SF350-24P Switch', unitPrice: '£643.60', quantity: '29', total: '£18,560' },
  { component: 'Cisco CBS350-48P-4G Switch', unitPrice: '£1,026', quantity: '10', total: '£10,260' },
  { component: 'Cisco 1921/K9 Router', unitPrice: '£253.71', quantity: '5', total: '£1,268.55' },
  { component: 'RS PRO OS2 Fibre Optic Cable', unitPrice: '£1.17/m', quantity: '6,296m', total: '£7,366.32' },
  { component: 'Excel Cat6 UTP Cable', unitPrice: '£0.48/m', quantity: '2,451m', total: '£1,176.48' },
  { component: 'Ubiquiti UniFi AP AC HD', unitPrice: '£319.00', quantity: '63', total: '£20,097' },
  { component: 'Underground Enclosure Box', unitPrice: '£25', quantity: '10', total: '£250' },
  { component: 'RJ45 Outdoor Connectors', unitPrice: '£4', quantity: '126', total: '£504' },
  { component: 'Warning Tape', unitPrice: '£1/m', quantity: '8,747m', total: '£8,747' },
  { component: 'Wireless AP & Switches Covers', unitPrice: '£32.99', quantity: '73', total: '£2,407.27' },
  { component: 'HDPE Conduit (100m rolls)', unitPrice: '£90', quantity: '63', total: '£5,670' },
  { component: 'Workers Wages', unitPrice: '£20/hr', quantity: '990 hrs', total: '£19,800' },
];

export default function FestivalNetworkPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

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
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.08 });
    reveals.forEach(r => obs.observe(r));
    return () => { document.removeEventListener('mousemove', onMove); obs.disconnect(); };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {expandedImage && (
        <div className="modal-overlay" onClick={() => setExpandedImage(null)}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setExpandedImage(null)}>×</button>
            <Image src={`/images/${expandedImage}.jpg`} alt="Expanded" width={1200} height={800} className="modal-img" />
          </div>
        </div>
      )}

      <nav>
        <div className="nav-links">
          <a href="#intro">Introduction</a>
          <a href="#logical">Logical Design</a>
          <a href="#physical">Physical Design</a>
          <a href="#devices">Devices</a>
          <a href="#costs">Costs</a>
        </div>
        <a href="/projects" className="nav-back">← Back to Projects</a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>
        </div>
        <div className="hero-left">
          <div className="hero-tag">University of Portsmouth · Network Infrastructure Design</div>
          <h1>Festival<br /><span className="line2">Network.</span></h1>
          <p className="hero-desc">A full-scale network infrastructure design for a 35,000-attendee outdoor festival covering logical topology, VLAN segmentation, wireless coverage, physical cable routing, and a detailed £94K cost breakdown.</p>
          <div className="hero-ctas">
            <a href="#logical" className="btn-primary">View Design →</a>
            <a href="#costs" className="btn-secondary">Cost Breakdown</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-card float-card-1">
            <div className="float-label">Total Attendees</div>
            <div className="float-value">35K+</div>
            <div className="float-sub">Concurrent users</div>
          </div>

          <div className="net-card">
            <div className="net-card-bar">
              <div className="d-dot r"></div><div className="d-dot y"></div><div className="d-dot g"></div>
              <span className="net-card-title">network_topology.pkt</span>
            </div>
            <div className="net-body">
              <div className="net-banner">
                <div className="net-banner-label">Network Design</div>
                <div className="net-banner-val">Festival Ground</div>
                <div className="net-banner-sub">Cisco IOS · VLAN Segmented · Managed</div>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label"><span className="vlan-dot blue"></span>VLAN 100 Guest</span>
                <span className="vlan-val">Public WiFi</span>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label"><span className="vlan-dot amber"></span>VLAN 200 Staff</span>
                <span className="vlan-val">POS + Ops</span>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label"><span className="vlan-dot lime"></span>VLAN 300 Admin</span>
                <span className="vlan-val">Management</span>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label"><span className="vlan-dot slate"></span>Backbone</span>
                <span className="vlan-val">OS2 Fibre</span>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label">Cisco switches</span>
                <span className="vlan-val">39 units</span>
              </div>
              <div className="net-vlan-row">
                <span className="vlan-label">Fibre runs</span>
                <span className="vlan-val">6,296m</span>
              </div>
              <div className="net-stat-pill">
                <div className="net-stat-text">63 APs deployed</div>
                <div className="net-stat-text">Total: £94,909.62</div>
              </div>
            </div>
          </div>

          <div className="float-card float-card-2">
            <div className="float-label">Access Points</div>
            <div className="float-value">63</div>
            <div className="float-sub">UniFi AP AC HD</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats reveal">
        <div className="stat"><div className="stat-number">35K+</div><div className="stat-label">Attendees on the network</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">63</div><div className="stat-label">Wireless access points</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">3</div><div className="stat-label">VLANs Guest, Staff, Admin</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">£94.9K</div><div className="stat-label">Total project cost</div></div>
      </div>

      {/* Introduction */}
      <section id="intro" className="light-section">
        <div className="section-tag reveal">Introduction</div>
        <h2 className="reveal">Designed for<br />scale and security.</h2>
        <p className="section-desc reveal">A comprehensive network infrastructure solution for a large-scale outdoor event addressing the unique demands of high-density wireless environments, outdoor deployment, and strict network segmentation.</p>
        <div className="intro-card reveal">
          <p>This project designs the complete network infrastructure for a large-scale event environment supporting 35,000+ attendees. The design addresses critical challenges inherent to outdoor events while maintaining security, reliability, and scalability.</p>
          <div className="intro-challenges">
            <div className="intro-challenge-title">Key Challenges Addressed</div>
            {[
              'High number of concurrent users requiring seamless connectivity',
              'Outdoor environment subject to weather and environmental factors',
              'Security risks requiring strict access control and network segmentation',
              'Reliable connectivity for staff operations, payment systems, and public access',
              'Cost optimisation without compromising performance or security',
            ].map((c, i) => (
              <div key={i} className="challenge-item">
                <div className="challenge-dot"></div>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="assumptions-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 48px' }}>
          <div className="section-tag reveal">Project Assumptions</div>
          <h2 className="section-h2 reveal">Design constraints<br />&amp; requirements.</h2>
          <div className="assumptions-grid reveal">
            {assumptions.map((a, i) => (
              <div key={i} className="assumption-card">
                <div className="assumption-num">{i + 1}</div>
                <div className="assumption-text">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="light-section">
        <div className="section-tag reveal">Security Architecture</div>
        <h2 className="reveal">Three layers<br />of protection.</h2>
        <p className="section-desc reveal">Security is enforced at the physical, digital, and environmental levels ensuring the network remains resilient against both accidental misuse and deliberate threats during the event.</p>
        <div className="security-grid reveal">
          {securityAreas.map((area, i) => (
            <div key={i} className="security-card">
              <div className="security-accent"></div>
              <div className="security-title">{area.title}</div>
              {area.items.map((item, j) => (
                <div key={j} className="security-item">
                  <div className="security-bullet"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Logical Design */}
      <section id="logical" className="design-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 48px' }}>
          <div className="section-tag reveal">Logical Network Design</div>
          <h2 className="section-h2 reveal">VLAN architecture<br />&amp; routing.</h2>
          <p className="section-desc reveal">The logical design employs strict VLAN segmentation separating guest, staff, and administrative traffic with Layer 3 inter-VLAN routing and ACL-enforced security policies.</p>
          <div className="key-legend">
            {[
              { label: 'Guest Network (VLAN 100)', color: '#4fc3f7' },
              { label: 'Staff Network (VLAN 200)', color: '#ff6b35' },
              { label: 'Admin Network (VLAN 300)', color: '#c8ff00' },
              { label: 'Backbone', color: '#555' },
            ].map((k, i) => (
              <div key={i} className="key-item">
                <div className="key-dot" style={{ background: k.color }}></div>
                {k.label}
              </div>
            ))}
          </div>
          <div className="image-grid reveal">
            {['larea1', 'larea2', 'larea3'].map((img, i) => (
              <div key={i} className="image-card" onClick={() => setExpandedImage(img)}>
                <Image src={`/images/${img}.jpg`} alt={`Logical Area ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                <div className="image-card-overlay">
                  <span className="image-card-label">Click to expand</span>
                </div>
              </div>
            ))}
          </div>
          <div className="design-desc-card">
            <p>The logical design employs strict VLAN segmentation to isolate guest, staff, and administrative traffic. Guest network (VLAN 100) provides public WiFi with bandwidth limitations. Staff network (VLAN 200) connects point-of-sale terminals and operational systems. Administrative network (VLAN 300) secures management traffic with restricted access.</p>
            <p>Layer 3 switches handle inter-VLAN routing with access control lists enforcing security policies. This architecture ensures scalability while preventing unauthorized access between network segments.</p>
          </div>
        </div>
      </section>

      {/* Wireless Coverage */}
      <section className="light-section">
        <div className="section-tag reveal">Wireless Coverage</div>
        <h2 className="reveal">63 APs.<br />Full showground.</h2>
        <p className="section-desc reveal">Coverage planning ensures seamless connectivity across the entire showground using 63 Ubiquiti UniFi AP AC HD access points in high-density clusters near attractions, seating areas, and vendor zones.</p>
        <div className="wap-image-wrap reveal">
          <Image src="/images/wap-coverage.jpg" alt="Wireless AP Coverage Plan" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="design-desc-card reveal">
          {[
            'Coverage density calculated based on 1 AP per 500–800 concurrent users',
            '5GHz band (802.11ac) for high-capacity areas; 2.4GHz for extended range',
            'Access points connected via fibre backbone and Cat6 backhaul for redundancy',
            'Capacity planning allows 50+ Mbps throughput per user during peak loads',
          ].map((b, i) => (
            <div key={i} className="design-bullet">
              <div className="design-bullet-dot"></div>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Physical Design */}
      <section id="physical" className="design-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 48px' }}>
          <div className="section-tag reveal">Physical Network Design</div>
          <h2 className="section-h2 reveal">Three zones.<br />One backbone.</h2>
          <p className="section-desc reveal">Physical infrastructure spans the full showground with a hierarchical topology fibre backbone linking three distribution hubs, with Cat6 access layer running to each access point and device.</p>
          <div className="image-grid reveal">
            {['parea1', 'parea2', 'parea3'].map((img, i) => (
              <div key={i} className="image-card" onClick={() => setExpandedImage(img)}>
                <Image src={`/images/${img}.jpg`} alt={`Physical Area ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                <div className="image-card-overlay">
                  <span className="image-card-label">Click to expand</span>
                </div>
              </div>
            ))}
          </div>
          <div className="design-desc-card">
            <p>The physical infrastructure spans the entire showground with a hierarchical topology. Fibre backbone links connect three distribution hubs using single-mode OS2 cables, providing low-latency core connectivity with 10+ Gbps capacity.</p>
            {[
              'Fibre backbone runs through protected underground ducts and aerial routes',
              'Access point deployment uses weather-resistant PoE injectors for power delivery',
              'Cable routing avoids high-traffic zones and implements redundant paths',
              'Cisco switches positioned in secure, climate-controlled equipment tents',
            ].map((b, i) => (
              <div key={i} className="design-bullet">
                <div className="design-bullet-dot"></div>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices */}
      <section id="devices" className="devices-section light-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 48px' }}>
          <div className="section-tag reveal">Devices Used</div>
          <h2 className="section-h2 reveal">Cisco-grade<br />hardware throughout.</h2>
          <p className="section-desc reveal">Every device selected for reliability, PoE capability, managed switching features, and outdoor-rated weatherproofing appropriate for a multi-day festival environment.</p>
          <div className="devices-grid reveal">
            {devices.map((d, i) => (
              <div key={i} className="device-card">
                <div className="device-name">{d.name}</div>
                <div className="device-specs">{d.specs}</div>
                <div className="device-role">{d.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id="costs">
        <div className="section-tag reveal">Cost Breakdown</div>
        <h2 className="reveal">Full project<br />cost analysis.</h2>
        <p className="section-desc reveal">A detailed cost breakdown covering all hardware, cabling, physical infrastructure, and labour required to deploy the network across the festival showground.</p>
        <div className="cost-table-wrap reveal">
          <table className="cost-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((row, i) => (
                <tr key={i}>
                  <td>{row.component}</td>
                  <td>{row.unitPrice}</td>
                  <td>{row.quantity}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan={3}>Total Project Cost</td>
                <td>£94,909.62</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="light">
        <div className="footer-left">
          <h3>Alae Ibnoucheikh</h3>
          <p>MEng Computer Science · University of Portsmouth</p>
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#444' }}>Network Infrastructure Design · Year 2</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/alae-ibnou-cheikh-a9994b334/" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:ibnoucheikhalae@gmail.com">Contact</a>
        </div>
      </footer>
    </>
  );
}

