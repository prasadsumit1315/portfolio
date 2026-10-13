import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SKILL_TABS = [
  { id: "all", label: "All Tech", icon: "🌐" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "databases", label: "Databases", icon: "🗄️" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "languages", label: "Languages", icon: "💻" },
  { id: "aiml", label: "AI & ML", icon: "🧠" },
  { id: "tools", label: "Tools", icon: "🛠️" },
  { id: "cs", label: "Computer Science", icon: "📚" }
];

export const TECH_SKILLS_ITEMS = [
  // Frontend
  { id: "react", name: "React.js", symbol: "⚛️", cat: "frontend", level: "Advanced", desc: "Hooks, Context API, Virtual DOM, Component Architecture & SPAs", color: "#61dafb" },
  { id: "html5", name: "HTML5", symbol: "🌐", cat: "frontend", level: "Expert", desc: "Semantic Elements, Accessibility, Web Standards & Modern SEO", color: "#e34f26" },
  { id: "css3", name: "CSS3", symbol: "🎨", cat: "frontend", level: "Expert", desc: "Flexbox, CSS Grid, 3D Transforms, Glassmorphism & Keyframe Animations", color: "#1572b6" },
  { id: "js-fe", name: "JavaScript", symbol: "⚡", cat: "frontend", level: "Advanced", desc: "ES6+, Async/Await, Event Loop, DOM Manipulation & Promises", color: "#f7df1e" },
  { id: "responsive-ui", name: "Responsive UI", symbol: "📐", cat: "frontend", level: "Advanced", desc: "Mobile-first, Adaptive Viewports, Cross-Browser Compatibility", color: "#38bdf8" },

  // Backend
  { id: "node", name: "Node.js", symbol: "🟢", cat: "backend", level: "Advanced", desc: "Event-driven Server Runtime, Non-blocking I/O & Microservices", color: "#339933" },
  { id: "express", name: "Express.js", symbol: "⚡", cat: "backend", level: "Advanced", desc: "Robust Middleware, RESTful API Endpoints & Route Handlers", color: "#ffffff" },
  { id: "php", name: "PHP", symbol: "🐘", cat: "backend", level: "Proficient", desc: "Server-side Web Architecture, MVC Design & Template Rendering", color: "#777bb4" },
  { id: "laravel", name: "Laravel", symbol: "🔺", cat: "backend", level: "Proficient", desc: "Eloquent ORM, Blade Engines, Routing, Migrations & Auth", color: "#ff2d20" },
  { id: "rest-api", name: "REST APIs", symbol: "🔌", cat: "backend", level: "Advanced", desc: "Stateless Endpoints, CRUD Operations, JSON & Security", color: "#06b6d4" },

  // Databases
  { id: "mysql", name: "MySQL", symbol: "🐬", cat: "databases", level: "Advanced", desc: "Relational Schemas, Primary/Foreign Keys, Joins & Query Optimization", color: "#4479a1" },
  { id: "mongodb", name: "MongoDB", symbol: "🍃", cat: "databases", level: "Proficient", desc: "NoSQL Document Collections, BSON, Aggregations & Mongoose ODM", color: "#47a248" },
  { id: "sqlite", name: "SQLite", symbol: "📦", cat: "databases", level: "Proficient", desc: "Zero-configuration Embedded Local Storage for Mobile Applications", color: "#38bdf8" },

  // Mobile
  { id: "flutter", name: "Flutter", symbol: "📱", cat: "mobile", level: "Advanced", desc: "Cross-platform iOS & Android UI Toolkit, State Management & Custom Canvas", color: "#02569b" },
  { id: "dart", name: "Dart", symbol: "🎯", cat: "mobile", level: "Advanced", desc: "Sound Null Safety, Object-Oriented, Asynchronous Streams & Futures", color: "#0175c2" },
  { id: "android", name: "Android SDK", symbol: "🤖", cat: "mobile", level: "Proficient", desc: "Activity Lifecycles, Manifests, Gradle Builds & Material Design", color: "#3ddc84" },

  // Languages
  { id: "java", name: "Java", symbol: "☕", cat: "languages", level: "Advanced", desc: "Object-Oriented Programming, Multithreading, JVM & DSA Solutions", color: "#f89820" },
  { id: "python", name: "Python", symbol: "🐍", cat: "languages", level: "Advanced", desc: "Data Processing, Machine Learning Pipelines & Scripting Automation", color: "#3776ab" },
  { id: "js-lang", name: "JavaScript", symbol: "📜", cat: "languages", level: "Advanced", desc: "Dynamic Scripting, Functional Paradigms & Web Development", color: "#f7df1e" },
  { id: "php-lang", name: "PHP", symbol: "🐘", cat: "languages", level: "Proficient", desc: "Backend Server-side Programming & API Scripting", color: "#777bb4" },
  { id: "dart-lang", name: "Dart", symbol: "🎯", cat: "languages", level: "Advanced", desc: "Client-optimized Programming for Fast Apps on Any Platform", color: "#0175c2" },

  // AI & ML
  { id: "ml", name: "Machine Learning", symbol: "🧠", cat: "aiml", level: "Certified", desc: "Supervised & Unsupervised Learning, Regression, Classification & Clustering", color: "#a855f7" },
  { id: "ai", name: "Artificial Intelligence", symbol: "🤖", cat: "aiml", level: "Certified", desc: "Tinplate CTC Thesis Certified (60 Days) Internship Research & Application", color: "#0ea5e9" },
  { id: "data-proc", name: "Data Processing", symbol: "📊", cat: "aiml", level: "Certified", desc: "Data Cleaning, Normalization, Feature Engineering & Statistical Analysis", color: "#10b981" },
  { id: "data-pipe", name: "Data Pipelines", symbol: "🔄", cat: "aiml", level: "Certified", desc: "Automated Data Ingestion, Transformation Flows & Batch Processing", color: "#3b82f6" },
  { id: "model-eval", name: "Model Evaluation", symbol: "🧪", cat: "aiml", level: "Certified", desc: "Confusion Matrices, Precision, Recall, F1-Score & Validation Curves", color: "#f59e0b" },
  { id: "ai-deploy", name: "AI Integration", symbol: "🚀", cat: "aiml", level: "Certified", desc: "Deploying AI Services, RESTful Model Inference & End-User Integration", color: "#ec4899" },

  // Tools
  { id: "git", name: "Git", symbol: "🌿", cat: "tools", level: "Advanced", desc: "Distributed Version Control, Branching Workflows, Stashing & Merging", color: "#f05032" },
  { id: "github", name: "GitHub", symbol: "🐙", cat: "tools", level: "Advanced", desc: "Open-source Repositories, Pull Requests, Code Reviews & CI/CD", color: "#ffffff" },
  { id: "postman", name: "Postman", symbol: "📮", cat: "tools", level: "Advanced", desc: "API Endpoint Testing, Environment Variables & Automated Collections", color: "#ff6c37" },
  { id: "vscode", name: "VS Code", symbol: "💻", cat: "tools", level: "Expert", desc: "Advanced Debugging, Custom Tooling, Terminal Workflows & Extensions", color: "#007acc" },

  // Computer Science
  { id: "oop", name: "OOP Concepts", symbol: "🏛️", cat: "cs", level: "Strong Core", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction & Design Patterns", color: "#38bdf8" },
  { id: "dsa", name: "DSA Algorithms", symbol: "🧩", cat: "cs", level: "Practitioner", desc: "Trees, Graphs, Dynamic Programming, Binary Search, Sorting & Hashing", color: "#818cf8" },
  { id: "sdlc", name: "SDLC & Agile", symbol: "⚙️", cat: "cs", level: "Applied", desc: "Sprint Cycles, Iterative Prototyping, Code Reviews & Testing", color: "#10b981" },
  { id: "net", name: "Computer Networks", symbol: "🌐", cat: "cs", level: "Core", desc: "TCP/IP, OSI Layers, HTTP/HTTPS, DNS Resolution & Web Sockets", color: "#06b6d4" },
  { id: "os", name: "Operating Systems", symbol: "🖥️", cat: "cs", level: "Core", desc: "Processes, Threads, Concurrency, Virtual Memory & File Systems", color: "#a855f7" }
];

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs"]
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "SQLite", "Relational Schema Design"]
  },
  {
    title: "Mobile Development",
    icon: "📱",
    skills: ["Flutter", "Dart", "Cross-Platform Android & iOS", "Mobile UI State"]
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript", "PHP", "Dart"]
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Data Processing",
      "Data Ingestion Pipelines",
      "Model Evaluation",
      "Tinplate CTC AI Research"
    ]
  },
  {
    title: "Developer Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Terminal CLI"]
  },
  {
    title: "Core Computer Science",
    icon: "📚",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Software Development Life Cycle (SDLC)",
      "Computer Networks",
      "Operating Systems"
    ]
  }
];

export default function Skills() {
  const [activeTechCategory, setActiveTechCategory] = useState("all");
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [skillsViewMode, setSkillsViewMode] = useState(null); // null = auto hover, "arranged" = locked grid, "floating" = cloud
  const [inspectTech, setInspectTech] = useState(null);

  const isArranged = skillsViewMode !== null ? skillsViewMode === "arranged" : isSkillsHovered;

  const filteredTechs = activeTechCategory === "all"
    ? TECH_SKILLS_ITEMS
    : TECH_SKILLS_ITEMS.filter((item) => item.cat === activeTechCategory);

  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Technical Arsenal</span>
          <h1 className="page-main-heading">Skills & Technologies</h1>
          <p className="page-subheading-text">
            Interactive Matrix &mdash; hover your mouse over the canvas below to dynamically organize all moving technologies into a structured, aligned grid!
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* 3D Moving-to-Arranged Interactive Matrix */}
        <div className="skills-interactive-block">
          
          {/* Top Options Bar */}
          <div className="skills-corner-top-bar">
            
            {/* Category Filter Tabs */}
            <div className="skills-category-tabs-scroll">
              {SKILL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`skill-tab-pill ${activeTechCategory === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTechCategory(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count-badge">
                    {tab.id === "all"
                      ? TECH_SKILLS_ITEMS.length
                      : TECH_SKILLS_ITEMS.filter((t) => t.cat === tab.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Status and View Mode Controls */}
            <div className="skills-status-and-toggles">
              <div className={`skills-mode-status-badge ${isArranged ? "status-arranged" : "status-floating"}`}>
                <span className="status-dot"></span>
                <span>
                  {isArranged
                    ? "Organized Grid Formation (Click any card to inspect details)"
                    : "Kinetic Motion — Hover mouse over canvas to arrange cards"}
                </span>
              </div>

              <div className="skills-view-switchers">
                <button
                  type="button"
                  className={`view-switch-btn ${skillsViewMode === null ? "selected" : ""}`}
                  onClick={() => setSkillsViewMode(null)}
                >
                  ✨ Hover Dynamic
                </button>
                <button
                  type="button"
                  className={`view-switch-btn ${skillsViewMode === "arranged" ? "selected" : ""}`}
                  onClick={() => setSkillsViewMode("arranged")}
                >
                  📐 Fixed Grid
                </button>
                <button
                  type="button"
                  className={`view-switch-btn ${skillsViewMode === "floating" ? "selected" : ""}`}
                  onClick={() => setSkillsViewMode("floating")}
                >
                  🌌 Motion Cloud
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Playground Canvas */}
          <div
            className={`skills-3d-playground ${isArranged ? "is-arranged-grid" : "is-moving-cloud"}`}
            onMouseEnter={() => setIsSkillsHovered(true)}
            onMouseLeave={() => setIsSkillsHovered(false)}
          >
            <div className="playground-ambient-glow"></div>
            <div className="playground-grid-mesh"></div>

            <div className="skills-cards-container">
              {filteredTechs.map((tech, idx) => {
                const floatDelay = ((idx % 7) * 0.4).toFixed(2);
                const floatDuration = (4.0 + (idx % 5) * 0.5).toFixed(2);

                return (
                  <div
                    key={tech.id}
                    className={`tech-3d-card ${isArranged ? "card-arranged" : "card-moving"}`}
                    style={{
                      "--float-delay": `${floatDelay}s`,
                      "--float-duration": `${floatDuration}s`
                    }}
                    onClick={() => setInspectTech(tech)}
                  >
                    <div className="tech-card-glass" style={{ borderColor: `${tech.color}40` }}>
                      <div className="tech-card-sheen"></div>
                      
                      <div className="tech-icon-circle" style={{ borderColor: `${tech.color}50` }}>
                        <span>{tech.symbol}</span>
                      </div>

                      <div className="tech-card-info">
                        <h4 className="tech-card-name">{tech.name}</h4>
                        <span className="tech-card-level-badge" style={{ color: tech.color }}>
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal / Inspector Drawer for Clicked Tech */}
          {inspectTech && (
            <div className="skills-inspect-drawer" onClick={() => setInspectTech(null)}>
              <div className="inspect-drawer-card" onClick={(e) => e.stopPropagation()}>
                <div className="inspect-drawer-header">
                  <div className="drawer-title-row">
                    <span className="inspect-icon-huge">{inspectTech.symbol}</span>
                    <div>
                      <h3 style={{ color: inspectTech.color }}>{inspectTech.name}</h3>
                      <span className="drawer-category-tag">{inspectTech.cat.toUpperCase()} • {inspectTech.level}</span>
                    </div>
                  </div>
                  <button type="button" className="drawer-close-btn" onClick={() => setInspectTech(null)}>
                    ✕
                  </button>
                </div>

                <div className="inspect-drawer-body">
                  <p className="inspect-body-desc">{inspectTech.desc}</p>
                  <div className="inspect-details-grid">
                    <div className="inspect-detail-box">
                      <span className="detail-lbl">Proficiency Level</span>
                      <span className="detail-val" style={{ color: inspectTech.color }}>{inspectTech.level}</span>
                    </div>
                    <div className="inspect-detail-box">
                      <span className="detail-lbl">Domain Category</span>
                      <span className="detail-val">{inspectTech.cat.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                <div className="inspect-drawer-footer">
                  <Link to="/projects" className="btn btn-primary" onClick={() => setInspectTech(null)}>
                    Explore Projects Built with This →
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Categorized Skills Breakdown Grid */}
        <div className="categories-breakdown-section" style={{ marginTop: "4rem" }}>
          <div className="section-head-center">
            <span className="section-pill-tag">Domain Stacks</span>
            <h2 className="section-heading-lg">Categorized Technical Disciplines</h2>
            <p className="section-subtext">Structured breakdown by engineering area.</p>
          </div>

          <div className="skills-categories-grid">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="skills-cat-card">
                <div className="cat-card-header">
                  <span className="cat-icon-box">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="cat-card-pills">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cat-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>Explore how these skills power real software applications</h3>
          <p>Inspect my major web, mobile, and AI projects or view verified certifications.</p>
          <div className="page-cta-actions">
            <Link to="/projects" className="btn btn-primary">
              View Major Projects →
            </Link>
            <Link to="/certificates" className="btn btn-secondary">
              Inspect Certificates →
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Hire / Contact Me →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
