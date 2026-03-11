'use client';

import { useEffect } from 'react';
import './carcare-hub.css';

export default function CarCareHub() {
  useEffect(() => {
    // Cursor animation
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = (mx - 6) + 'px';
        cursor.style.top = (my - 6) + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animRing = () => {
      rx += (mx - rx - 20) * 0.12;
      ry += (my - ry - 20) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(animRing);
    };

    animRing();

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('visible');
          }, i * 80);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(r => obs.observe(r));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav>
        <div className="nav-links">
          <a href="#schema">Schema</a>
          <a href="#decisions">Decisions</a>
          <a href="#sql">SQL</a>
          <a href="#normalisation">3NF</a>
          <a href="#process">Process</a>
        </div>
        <a href="/projects" className="nav-back">← Back to Projects</a>
      </nav>

      <section className="hero" id="overview">
        <div className="hero-bg">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>
        </div>

        <div className="hero-left">
          <div className="hero-tag">Relational Database Design</div>
          <h1>CarCare<br /><span className="line2">Hub.</span></h1>
          <p className="hero-desc">
            A fully normalised relational database for a real-world car service business. Designed through two iterations of progressive refinement covering ERD redesign, SQL implementation, and constraint enforcement.
          </p>
          <div className="hero-ctas">
            <a href="#schema" className="btn-primary">Explore Schema →</a>
            <a href="#decisions" className="btn-secondary">Design Decisions</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-card float-card-1">
            <div className="float-label">Normal Form</div>
            <div className="float-value green">3NF</div>
            <div className="float-sub">Fully achieved</div>
          </div>

          <div className="db-mockup">
            <div className="db-titlebar">
              <div className="db-dot r"></div>
              <div className="db-dot y"></div>
              <div className="db-dot g"></div>
              <span className="db-filename">carcare_hub.sql</span>
            </div>
            <div className="db-body">
              <div className="db-table">
                <div className="db-table-head">Customers</div>
                <div className="db-row"><span className="pk">cust_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span>cust_fname</span><span className="type">VARCHAR(50)</span></div>
                <div className="db-row"><span>cust_email</span><span className="type">UNIQUE</span></div>
                <div className="db-row"><span>cust_phone_num</span><span className="type">UNIQUE</span></div>
              </div>
              <div className="db-arrow">↕</div>
              <div className="db-table">
                <div className="db-table-head">Cars</div>
                <div className="db-row"><span className="pk">car_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span className="fk">cust_id</span><span className="type">FK → Customers</span></div>
                <div className="db-row"><span className="fk">car_model_id</span><span className="type">FK → Models</span></div>
                <div className="db-row"><span>car_condition</span><span className="type">ENUM</span></div>
              </div>
              <div className="db-arrow">↕</div>
              <div className="db-table">
                <div className="db-table-head">Service Appointments</div>
                <div className="db-row"><span className="pk">serv_app_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span className="fk">car_id</span><span className="type">FK → Cars</span></div>
                <div className="db-row"><span>serv_app_status</span><span className="type">ENUM</span></div>
                <div className="db-row"><span>serv_app_time</span><span className="type">CHECK 09–17</span></div>
              </div>
            </div>
          </div>

          <div className="float-card float-card-2">
            <div className="float-label">Tables Designed</div>
            <div className="float-value" style={{ fontSize: '14px', color: 'var(--white)' }}>15 Normalised</div>
            <div className="float-sub">PostgreSQL · ERD · SQL</div>
          </div>
        </div>
      </section>

      <div className="stats reveal">
        <div className="stat"><div className="stat-number">15<span>×</span></div><div className="stat-label">Normalised relational tables</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">3<span>NF</span></div><div className="stat-label">Third Normal Form achieved</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">2<span>×</span></div><div className="stat-label">ERD design iterations</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">40<span>+</span></div><div className="stat-label">Hours of design work</div></div>
      </div>

      <section id="schema" className="light-section">
        <div className="section-tag reveal">Schema</div>
        <h2 className="reveal">15 tables.<br />One system.</h2>
        <p className="section-desc reveal">
          Every entity in the CarCare Hub business mapped to a clean, normalised schema from customers and cars through to staff scheduling, invoicing, and structured feedback.
        </p>

        <div className="schema-grid reveal">
          {[
            { name: 'Customers', fields: [{ label: 'cust_id', badge: 'PK', type: 'pk' }, { label: 'cust_fname', badge: 'VARCHAR(50)' }, { label: 'cust_email', badge: 'UNIQUE' }, { label: 'cust_phone_num', badge: 'UNIQUE' }, { label: 'cust_country', badge: 'VARCHAR(30)' }] },
            { name: 'Cars', fields: [{ label: 'car_id', badge: 'PK', type: 'pk' }, { label: 'cust_id', badge: 'FK', type: 'fk' }, { label: 'car_model_id', badge: 'FK', type: 'fk' }, { label: 'car_condition', badge: 'ENUM' }, { label: 'car_plate_number', badge: 'UNIQUE' }] },
            { name: 'Staff', fields: [{ label: 'staff_id', badge: 'PK', type: 'pk' }, { label: 'dep_id', badge: 'FK', type: 'fk' }, { label: 'staff_email', badge: 'UNIQUE' }, { label: 'staff_manager', badge: 'BOOLEAN' }, { label: 'staff_country', badge: 'VARCHAR(30)' }] },
            { name: 'Service Appointments', fields: [{ label: 'serv_app_id', badge: 'PK', type: 'pk' }, { label: 'car_id', badge: 'FK', type: 'fk' }, { label: 'serv_app_status', badge: 'ENUM' }, { label: 'serv_app_date', badge: 'DATE' }, { label: 'serv_app_time', badge: 'CHECK 09–17' }] },
            { name: 'Departments', fields: [{ label: 'dep_id', badge: 'PK', type: 'pk' }, { label: 'dep_name', badge: 'UNIQUE' }, { label: 'dep_type', badge: 'ENUM' }] },
            { name: 'Services', fields: [{ label: 'serv_id', badge: 'PK', type: 'pk' }, { label: 'dep_id', badge: 'FK', type: 'fk' }, { label: 'serv_name', badge: 'UNIQUE' }, { label: 'serv_cost', badge: 'DECIMAL(8,2)' }] },
            { name: 'Invoice', fields: [{ label: 'inv_id', badge: 'PK', type: 'pk' }, { label: 'serv_app_id', badge: 'FK', type: 'fk' }, { label: 'inv_total_amount', badge: 'DECIMAL(8,2)' }, { label: 'inv_due_date', badge: 'DATE' }, { label: 'inv_no_payments', badge: 'SMALLINT' }] },
            { name: 'Feedback', fields: [{ label: 'feedback_id', badge: 'PK', type: 'pk' }, { label: 'cust_id', badge: 'FK', type: 'fk' }, { label: 'staff_id', badge: 'FK', type: 'fk' }, { label: 'feedback_ratings', badge: 'ENUM' }, { label: 'feedback_date', badge: 'DATE' }] },
            { name: 'Car Models', fields: [{ label: 'car_model_id', badge: 'PK', type: 'pk' }, { label: 'man_id', badge: 'FK', type: 'fk' }, { label: 'car_model_name', badge: 'VARCHAR(30)' }, { label: 'car_model_fuel_type', badge: 'ENUM' }] },
            { name: 'Schedule', fields: [{ label: 'schedule_id', badge: 'PK', type: 'pk' }, { label: 'sch_shift', badge: 'ENUM' }, { label: 'sch_date', badge: 'DATE' }, { label: 'sch_start_time', badge: '≥ 08:00' }, { label: 'sch_end_time', badge: '≤ 18:00' }] },
            { name: 'Payment', fields: [{ label: 'pay_id', badge: 'PK', type: 'pk' }, { label: 'inv_id', badge: 'FK', type: 'fk' }, { label: 'pay_date', badge: 'DATE' }, { label: 'pay_amount', badge: 'DECIMAL(8,2)' }, { label: 'pay_inst_no', badge: 'SMALLINT' }] },
            { name: 'Service Details', fields: [{ label: 'task_id', badge: 'PK', type: 'pk' }, { label: 'serv_app_id', badge: 'FK', type: 'fk' }, { label: 'staff_id', badge: 'FK', type: 'fk' }, { label: 'serv_add_cost', badge: 'DECIMAL' }, { label: 'serv_report', badge: 'TEXT' }] },
          ].map((table) => (
            <div key={table.name} className="schema-table">
              <div className="schema-accent-bar"></div>
              <div className="schema-table-name">{table.name}</div>
              {table.fields.map((field, idx) => (
                <div key={idx} className="schema-field">
                  <span className={`fn ${field.type || ''}`}>{field.label}</span>
                  <span className={`badge ${field.type || ''}`}>{field.badge}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="decisions" className="decisions-section">
        <div className="section-tag reveal">Design Decisions</div>
        <h2 className="reveal">Built to<br/>last.</h2>
        <p className="section-desc reveal">
          Key architectural choices made across both design iterations each one improving data integrity, reducing redundancy, or resolving real design flaws.
        </p>

        <div className="features-layout reveal">
          <div className="feature-block accent-block">
            <div className="feature-num">01</div>
            <div className="feature-tag">Normalisation</div>
            <div className="feature-title">Cars extracted into Car Models + Manufacturer</div>
            <div className="feature-desc">The initial design stored manufacturer data directly in the Cars table, creating redundancy. This was extracted into a separate Car_Models table eliminating duplication and achieving proper 3NF compliance.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">02</div>
            <div className="feature-tag">Scheduling</div>
            <div className="feature-title">Boolean flag replaced with a full Schedule system</div>
            <div className="feature-desc">The initial ERD used a simple staff_available boolean. This was replaced with a dedicated Schedule table and Staff_Schedule intersection table, supporting shift types and many-to-many staff assignments.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">03</div>
            <div className="feature-tag">Financial Flow</div>
            <div className="feature-title">3-table Installment Plan simplified to Invoice → Payment</div>
            <div className="feature-desc">The first version used three tables introducing unnecessary joins. This was simplified to Invoice → Payment with an inv_no_payments field preserving all business logic with far less complexity.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">04</div>
            <div className="feature-tag">Accountability</div>
            <div className="feature-title">Feedback_Handling table added for staff accountability</div>
            <div className="feature-desc">No mechanism existed to track which staff member addressed a complaint. The new Feedback_Handling table links each feedback record to a specific staff member with a response date and handling note.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">05</div>
            <div className="feature-tag">Data Integrity</div>
            <div className="feature-title">ENUM values corrected from numeric to named categories</div>
            <div className="feature-desc">The initial design used numeric ENUM values (1, 2, 3) for status fields. These were replaced with explicit named options like 'Scheduled', 'Completed', 'Cancelled' preventing ambiguous data entry.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">06</div>
            <div className="feature-tag">International Support</div>
            <div className="feature-title">VARCHAR(15) for plate numbers supports international clients</div>
            <div className="feature-desc">Initially CHAR was considered for fixed UK formats. VARCHAR(15) accommodates international customers from France, Belgium, and beyond whose plate number formats vary significantly in length and structure.</div>
          </div>
        </div>
      </section>

      <section id="sql" className="light-section">
        <div className="section-tag reveal">Implementation</div>
        <h2 className="reveal">SQL that<br/>enforces rules.</h2>
        <p className="section-desc reveal">
          Constraints, CHECK conditions, ENUM types, and foreign key relationships enforced at the database level not just in application logic.
        </p>

        <div className="sql-window reveal">
          <div className="sql-titlebar">
            <div className="sql-dot r"></div><div className="sql-dot y"></div><div className="sql-dot g"></div>
            <span className="sql-filename">carcare_hub.sql PostgreSQL</span>
          </div>
          <div className="sql-body">
            <pre>{`-- Service Appointments with CHECK constraint
CREATE TABLE service_appointments (
  serv_app_id     SERIAL   PRIMARY KEY,
  car_id          INT      NOT NULL,
  serv_app_status VARCHAR
    CHECK (serv_app_status IN (
    'Scheduled', 'In Progress',
    'Completed', 'Cancelled'
  ))                          NOT NULL,
  serv_app_date   DATE     NOT NULL,
  serv_app_time   TIME     NOT NULL
    CHECK (serv_app_time
      BETWEEN '09:00:00'
      AND     '17:00:00'),
  FOREIGN KEY (car_id)
    REFERENCES cars(car_id)
);`}</pre>
            <pre>{`-- Feedback with structured ratings
CREATE TABLE feedback (
  feedback_id      SERIAL  PRIMARY KEY,
  cust_id          INT     NOT NULL,
  staff_id         INT     NOT NULL,
  feedback_comment TEXT,
  feedback_ratings VARCHAR
    CHECK (feedback_ratings IN (
    'Very Poor', 'Poor',
    'Average', 'Good',
    'Excellent'
  ))                          NOT NULL,
  feedback_date    DATE    NOT NULL,
  FOREIGN KEY (cust_id)
    REFERENCES customers(cust_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff(staff_id)
);`}</pre>
          </div>
        </div>
      </section>

      <section id="normalisation" className="normalisation-section">
        <div className="section-tag reveal">Normalisation</div>
        <h2 className="reveal">No redundancy.<br/>No anomalies.</h2>
        <p className="section-desc reveal">
          Every table verified against the three normal form rules atomic values, full functional dependency, and no transitive dependencies.
        </p>

        <div className="norm-grid reveal">
          <div className="norm-card">
            <div className="norm-nf">1NF</div>
            <div className="norm-title">First Normal Form</div>
            <div className="norm-body">All attributes contain atomic values. No repeating groups or multi-valued fields in any table.</div>
            <div className="norm-item">Each column holds a single value</div>
            <div className="norm-item">All rows uniquely identifiable via PK</div>
            <div className="norm-item">No arrays or nested data structures</div>
          </div>
          <div className="norm-card">
            <div className="norm-nf">2NF</div>
            <div className="norm-title">Second Normal Form</div>
            <div className="norm-body">All non-key attributes depend fully on the entire primary key no partial dependencies exist.</div>
            <div className="norm-item">Car details separated from Customer data</div>
            <div className="norm-item">Service details not stored in appointments</div>
            <div className="norm-item">Intersection tables resolve many-to-many</div>
          </div>
          <div className="norm-card">
            <div className="norm-nf">3NF</div>
            <div className="norm-title">Third Normal Form</div>
            <div className="norm-body">No transitive dependencies. Every non-key attribute depends only on the primary key, nothing else.</div>
            <div className="norm-item">Manufacturer extracted from Car_Models</div>
            <div className="norm-item">Department data not duplicated in Staff</div>
            <div className="norm-item">Invoice details not duplicated in Payment</div>
          </div>
        </div>
      </section>

      <section id="process" className="light-section">
        <div className="section-tag reveal">Process</div>
        <h2 className="reveal">Iterated.<br/>Refined.</h2>
        <p className="section-desc reveal">
          Developed across two design iterations each building on the feedback and shortcomings of the previous version.
        </p>

        <div className="timeline reveal">
          <div className="timeline-item">
            
            <div className="timeline-title">Initial Planning & Case Study Review</div>
            <div className="timeline-desc">Analysed CarCare Hub business requirements. Identified all entities, relationships, and initial assumptions. Each team member designed an independent ERD draft before group consolidation into a single model.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">ERD Design & Data Dictionary</div>
            <div className="timeline-desc">Produced the first full ERD with 13 tables, resolved many-to-many relationships using intersection tables, and completed a comprehensive data dictionary covering all attributes, data types, and constraints.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">ERD Redesign After Feedback</div>
            <div className="timeline-desc">Reviewed earlier feedback and redesigned the ERD. Key changes: extracted Car_Models, replaced boolean availability with Schedule, introduced Feedback_Handling, corrected ENUM notations, and simplified payment structure to 15 tables.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">SQL Implementation & Debugging</div>
            <div className="timeline-desc">Wrote full CREATE TABLE statements, INSERT data, and tested with SELECT/JOIN queries. Debugged constraint violations, foreign key dependencies, and data type mismatches in practical sessions.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">Reflective Analysis & Final Submission</div>
            <div className="timeline-desc">Documented all design decisions, compared and contrasted both ERD versions, and wrote a structured reflective analysis covering removals, additions, cardinality corrections, and constraint improvements.</div>
          </div>
        </div>
      </section>

      <footer className="light">
        <div className="footer-left">
          <h3>Alae Ibnoucheikh</h3>
          <p>MEng Computer Science · University of Portsmouth</p>
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#444' }}>Database Systems Development</p>
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
