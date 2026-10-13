import React, { useState } from "react";
import { Link } from "react-router-dom";

const PROJECTS_DATA = [
  {
    id: "eazzio-telecaller",
    title: "Eazzio Telecaller Web & Mobile Application",
    role: "Lead Full-Stack & Flutter Mobile Architect",
    category: "Full-Stack Web & Mobile",
    catFilter: "mobile",
    featured: true,
    isMajor: true,
    description:
      "An end-to-end telecalling and lead management ecosystem featuring a centralized React & Node.js administrator dashboard coupled with a cross-platform Flutter & Dart mobile client for telecallers in the field.",
    webStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    mobileStack: ["Flutter", "Dart", "Provider", "Local Cache", "JWT"],
    contributions: [
      "Engineered automated lead ingestion, weighted distribution algorithms, and multi-agent call routing queues.",
      "Developed cross-platform Flutter mobile client enabling one-tap native phone dialing, call recording notes, and real-time status updates.",
      "Constructed live call activity timelines, agent performance KPIs, conversion ratios, and automated daily exportable reports.",
      "Designed role-based JWT access controls with granular permission tiers for agents, managers, and administrators."
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "renthive",
    title: "RentHive — Unified Rental Platform",
    role: "Full-Stack Developer",
    category: "Full-Stack Web (MERN)",
    catFilter: "web",
    featured: true,
    isMajor: true,
    description:
      "A scalable rental platform facilitating listing, discovery, and booking of vehicles, tools, and real estate. Built with modern React architecture, secure backend services, and interactive booking management.",
    webStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vanilla CSS"],
    mobileStack: ["Cloudinary CDN", "RESTful Endpoints", "Responsive Engine"],
    contributions: [
      "Engineered dynamic catalog browsing with multi-parameter filtering by geolocation, price tiers, categories, and date availability.",
      "Developed owner portal for inventory management, image uploads via Cloudinary, pricing rules, and rental approval workflows.",
      "Implemented integrated scheduling engine preventing double-booking with real-time calendar synchronization.",
      "Designed responsive, high-contrast user interface optimized for seamless mobile and desktop browsing."
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "sanhe-fixit",
    title: "SanHe@Fixit — Service & Maintenance Manager",
    role: "Backend & System Architect",
    category: "Enterprise Backend & Web",
    catFilter: "web",
    featured: false,
    isMajor: false,
    description:
      "A robust service ticketing and dispatch solution engineered with PHP and Laravel, streamlining repair requests, technician assignment, inventory tracking, and resolution analytics for operations.",
    webStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Blade Engine"],
    mobileStack: ["REST Endpoints", "Bootstrap", "Relational Modeling"],
    contributions: [
      "Designed automated ticket dispatch and technician scheduling based on workload availability and skill tags.",
      "Engineered SLA breach tracking, automated email alerts, and real-time status notifications for service requesters.",
      "Architected comprehensive relational database schema in MySQL handling ticket lifecycles, service logs, and equipment histories."
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "ai-data-pipeline",
    title: "Automated AI Data Pipeline & Processing Tool",
    role: "AI / ML Developer",
    category: "AI & Data Engineering",
    catFilter: "aiml",
    featured: false,
    isMajor: false,
    description:
      "A Python-powered machine learning pipeline tool designed to ingest raw industrial datasets, perform automated cleaning, execute feature transformations, and evaluate predictive model benchmarks.",
    webStack: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    mobileStack: ["Data Pipelines", "Model Evaluation", "REST API"],
    contributions: [
      "Engineered automated missing-value handling, outlier detection, and categorical feature encoding routines.",
      "Modularized machine learning pipelines allowing rapid experimentation across multiple classifier and regression models.",
      "Constructed comprehensive evaluation suite calculating confusion matrices, precision, recall, F1-scores, and ROC-AUC curves."
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps (Flutter)" },
  { id: "aiml", label: "AI & Pipelines" }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.catFilter === activeFilter);

  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Portfolio Showcase</span>
          <h1 className="page-main-heading">Major Engineering Projects</h1>
          <p className="page-subheading-text">
            Scalable web applications, cross-platform mobile products, and automated machine learning systems.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`project-filter-btn ${activeFilter === tab.id ? "active" : ""}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              <span>{tab.label}</span>
              <span className="filter-badge">
                {tab.id === "all"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.catFilter === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Collection Grid */}
        <div className="projects-collection-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-detail-card ${project.featured ? "featured-project" : ""}`}
            >
              
              {/* Card Top Tags */}
              <div className="project-card-top-tag">
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  {project.isMajor && <span className="tag-major">Major Project</span>}
                  <span className="tag-category">{project.category}</span>
                </div>
                <span className="tag-role">{project.role}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>

              {/* Dual Stack Breakdown */}
              <div className="project-dual-stack">
                <div className="stack-col">
                  <strong>Frontend / Web Stack:</strong>
                  <div className="stack-pills">
                    {project.webStack.map((tech, tIdx) => (
                      <span key={tIdx}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="stack-col">
                  <strong>Backend / Systems Stack:</strong>
                  <div className="stack-pills">
                    {project.mobileStack.map((tech, tIdx) => (
                      <span key={tIdx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="project-contributions">
                <strong>Key Architectural Highlights:</strong>
                <ul>
                  {project.contributions.map((c, cIdx) => (
                    <li key={cIdx}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer" style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-btn"
                >
                  <span>Live Preview / Details ↗</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>Need a custom web, mobile, or AI solution engineered?</h3>
          <p>I am open to discussions for full-stack engineering roles, freelance builds, and collaborative ventures.</p>
          <div className="page-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Me Directly →
            </Link>
            <Link to="/skills" className="btn btn-secondary">
              Inspect Technical Skills →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
