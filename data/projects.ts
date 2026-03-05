export type ProjectCategory = "AI/Data" | "Mobile" | "Networking" | "Databases"

export interface Project {
  slug: string
  title: string
  summary: string
  techStack: string[]
  category: ProjectCategory
  githubUrl: string
  demoUrl?: string
  highlights: string[]
  caseStudy: {
    problem: string
    solution: string
    features: string[]
    results: string
    learned: string
  }
}

export const categories: ProjectCategory[] = [
  "AI/Data",
  "Mobile",
  "Networking",
  "Databases",
]

export const projects: Project[] = [
  {
    slug: "union-shop-ecommerce",
    title: "Union Shop E-Commerce",
    summary:
      "Mobile shopping platform built with Flutter featuring secure login, product filtering, and a fully functional cart system.",
    techStack: ["Flutter", "Dart"],
    category: "Mobile",
    githubUrl: "https://github.com/ibnoucheikhalae/union_shop",
    highlights: ["Login & auth", "Product filtering", "Cart management"],
    caseStudy: {
      problem:
        "Local union shops lacked a modern mobile presence, making it difficult for members to browse products and place orders without visiting in person. Existing solutions were web-only and not optimised for mobile workflows.",
      solution:
        "Built a cross-platform mobile application using Flutter and Dart that provides a complete shopping experience. The app features secure authentication, real-time product browsing with category filters, and a persistent cart system that syncs across sessions.",
      features: [
        "Secure login and registration with session persistence",
        "Product catalogue with category-based filtering and search",
        "Shopping cart with quantity management and order summary",
        "Responsive UI adapting to various screen sizes",
        "State management using Provider pattern",
      ],
      results:
        "Delivered a fully functional prototype demonstrating end-to-end mobile commerce capabilities. The project showcased strong competence in cross-platform development and mobile UX design principles.",
      learned:
        "Deepened my understanding of Flutter state management patterns, particularly Provider vs Riverpod trade-offs. Learned the importance of designing offline-first mobile experiences and handling edge cases in cart synchronisation.",
    },
  },
  {
    slug: "festival-network-infrastructure",
    title: "Festival Network Infrastructure",
    summary:
      "Secure network architecture for a 35K-attendee festival with VLAN segmentation and real-time monitoring.",
    techStack: ["Cisco"],
    category: "Networking",
    githubUrl: "https://github.com",
    highlights: [
      "VLAN segmentation",
      "Network monitoring",
      "35K-attendee scale",
    ],
    caseStudy: {
      problem:
        "A large-scale music festival with 35,000 attendees needed a robust, secure network infrastructure that could handle massive concurrent connections across multiple zones while isolating critical systems like ticketing and emergency services.",
      solution:
        "Designed a comprehensive network architecture using Cisco equipment with VLAN segmentation to isolate traffic between public Wi-Fi, staff operations, POS terminals, and emergency services. Implemented real-time monitoring dashboards for proactive issue detection.",
      features: [
        "VLAN segmentation separating public, staff, POS, and emergency traffic",
        "Redundant uplinks with failover for critical services",
        "Real-time network monitoring and alerting system",
        "Scalable architecture supporting 35,000+ concurrent devices",
        "Security policies including MAC filtering and rate limiting",
      ],
      results:
        "The network design was validated through simulation and met all performance benchmarks for throughput, latency, and failover scenarios at the projected 35K-attendee load.",
      learned:
        "Gained hands-on experience with enterprise-grade network design, VLAN trunking, and the complexities of provisioning infrastructure for large temporary events. Understood the critical importance of redundancy in high-stakes environments.",
    },
  },
  {
    slug: "carcare-hub-database",
    title: "CarCare Hub Database",
    summary:
      "Fully normalised relational database with 15 tables designed for managing a car service business end-to-end.",
    techStack: ["PostgreSQL", "SQL"],
    category: "Databases",
    githubUrl: "https://github.com",
    highlights: [
      "15-table normalised schema",
      "Complex queries",
      "Business logic",
    ],
    caseStudy: {
      problem:
        "A car service business needed a structured data management system to replace manual record-keeping for customers, vehicles, appointments, services, invoicing, and inventory tracking across multiple workshop locations.",
      solution:
        "Designed and implemented a fully normalised relational database in PostgreSQL with 15 interconnected tables. The schema covers the entire business workflow from customer registration through service delivery to invoicing and parts inventory.",
      features: [
        "15-table normalised schema up to 3NF",
        "Complex queries for reporting: revenue, popular services, technician workload",
        "Stored procedures for common business operations",
        "Referential integrity with cascading constraints",
        "Index optimisation for frequently queried fields",
      ],
      results:
        "Produced a production-ready database schema with comprehensive documentation, sample data, and a suite of analytical queries demonstrating real business value from the data model.",
      learned:
        "Strengthened my skills in database normalisation theory, writing performant SQL queries, and thinking about data modelling from a business requirements perspective rather than just technical correctness.",
    },
  },
  {
    slug: "coastal-change-ai-analysis",
    title: "Coastal Change AI Analysis",
    summary:
      "Analysed coastal environmental data using AI models and visualisations to generate sustainability insights.",
    techStack: ["Java", "AI"],
    category: "AI/Data",
    githubUrl: "https://github.com",
    highlights: [
      "Environmental insights",
      "Data visualisation",
      "AI modelling",
    ],
    caseStudy: {
      problem:
        "Coastal regions face accelerating environmental changes due to climate factors, but raw satellite and sensor data is difficult to interpret without analytical tools. Researchers needed a way to identify patterns and forecast changes in coastal geography.",
      solution:
        "Developed a Java-based analysis platform that processes coastal environmental datasets using AI classification and regression models. The system generates visualisations that reveal erosion patterns, vegetation changes, and sea-level impacts over time.",
      features: [
        "Data pipeline ingesting multi-source environmental datasets",
        "AI classification models for land-use change detection",
        "Regression analysis for erosion rate forecasting",
        "Interactive data visualisations and trend charts",
        "Report generation for sustainability planning teams",
      ],
      results:
        "The analysis identified measurable erosion trends and vegetation shifts that aligned with published environmental studies, validating the model's accuracy and practical utility for sustainability planning.",
      learned:
        "Learned to work with messy real-world environmental data, handle missing values and temporal alignment challenges, and translate AI model outputs into actionable insights for non-technical stakeholders.",
    },
  },
  {
    slug: "heineken-hackathon-ai-system",
    title: "Heineken Hackathon AI System",
    summary:
      "Prototype predictive maintenance system leveraging IoT data and machine-learning models, built during a hackathon.",
    techStack: ["Python", "AI"],
    category: "AI/Data",
    githubUrl: "https://github.com",
    highlights: [
      "Predictive maintenance",
      "IoT data integration",
      "ML models",
    ],
    caseStudy: {
      problem:
        "Heineken's brewery equipment experiences unplanned downtime that disrupts production schedules and increases maintenance costs. The challenge was to build a system that could predict equipment failures before they occur using existing IoT sensor data.",
      solution:
        "Built a Python-based predictive maintenance prototype during a hackathon that ingests IoT sensor streams (temperature, vibration, pressure) and applies machine-learning models to detect anomalies and predict failure windows, allowing proactive scheduling of maintenance.",
      features: [
        "Real-time IoT sensor data ingestion pipeline",
        "Anomaly detection using isolation forest and autoencoder models",
        "Failure prediction with time-to-failure regression",
        "Dashboard prototype for maintenance team alerts",
        "Cost-benefit analysis of predictive vs reactive maintenance",
      ],
      results:
        "The prototype demonstrated the ability to detect anomalous equipment behaviour with high precision on historical data, projecting significant reduction in unplanned downtime if deployed in production.",
      learned:
        "Gained experience building under tight hackathon constraints, prioritising high-impact features, and presenting technical solutions to business stakeholders. Deepened my understanding of time-series anomaly detection techniques.",
    },
  },
]
