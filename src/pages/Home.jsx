import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sumitTransparent from "../assets/sumit_trio_transparent.png";

// Verified Certificate Assets for Preview
import certTinplateAI from "../assets/cert_tinplate_ai.png";
import certNptelIoT from "../assets/cert_nptel_iot.png";
import certSmartedFSWD from "../assets/cert_smarted_fswd.png";

const PRIMARY_TECHS = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js",
  "PHP", "Laravel", "MySQL", "MongoDB", "Flutter", "Dart", "Java", "Python"
];

const ROLES = [
  "Full-Stack Web & Mobile Developer",
  "Software Engineer",
  "AI / ML Enthusiast",
  "Mobile App Architect (Flutter & Dart)",
  "Backend Developer (Node.js & Laravel)"
];

const PORTAL_PAGES = [
  {
    path: "/about",
    title: "About Me",
    icon: "👨‍💻",
    desc: "Biography, background, engineering philosophy, and 4 core technical pillars.",
    tag: "Profile",
    color: "#0ea5e9"
  },
  {
    path: "/skills",
    title: "Technical Skills",
    icon: "⚡",
    desc: "Interactive 3D matrix with 35+ technologies, moving-to-arranged hover playground, and domain stacks.",
    tag: "Arsenal",
    color: "#a855f7"
  },
  {
    path: "/experience",
    title: "Work Experience",
    icon: "🏢",
    desc: "60-Day AI & ML Thesis Internship at Tinplate CTC (Tata Steel Division) with verified accomplishments.",
    tag: "Industrial",
    color: "#10b981"
  },
  {
    path: "/projects",
    title: "Major Projects",
    icon: "🚀",
    desc: "Eazzio Telecaller (Web + Flutter App), RentHive MERN platform, SanHe@Fixit, and AI Data Pipeline.",
    tag: "4 Projects",
    color: "#f59e0b"
  },
  {
    path: "/education",
    title: "Education",
    icon: "🎓",
    desc: "B.Tech in Computer Science & Engineering (Batch 2023–2027), core coursework, and computational theory.",
    tag: "B.Tech CSE",
    color: "#38bdf8"
  },
  {
    path: "/certificates",
    title: "Certificates & QR",
    icon: "📜",
    desc: "Official verified credentials: Tata Steel AI Thesis, IIT Kharagpur Elite IoT, and SmartED Full Stack.",
    tag: "Verified",
    color: "#ec4899"
  },
  {
    path: "/achievements",
    title: "Achievements & DSA",
    icon: "🏆",
    desc: "Data Structures & Algorithms mastery, LeetCode practice, and developer profiles on GitHub and LinkedIn.",
    tag: "Milestones",
    color: "#6366f1"
  },
  {
    path: "/contact",
    title: "Contact Me",
    icon: "✉️",
    desc: "Direct contact channels, professional email, message form, and availability for software roles.",
    tag: "Connect",
    color: "#14b8a6"
  }
];

const FEATURED_PROJECTS_PREVIEW = [
  {
    title: "Eazzio Telecaller Web & Mobile App",
    category: "Full-Stack Web + Flutter Mobile",
    desc: "End-to-end CRM lead distribution platform with real-time call tracking and cross-platform mobile client.",
    stack: ["React.js", "Node.js", "MongoDB", "Flutter", "Dart"]
  },
  {
    title: "RentHive — Unified Rental Platform",
    category: "Full-Stack Web (MERN)",
    desc: "Multi-category rental marketplace for vehicles, properties, and equipment with live booking management.",
    stack: ["React.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "SanHe@Fixit — Service Management",
    category: "Enterprise Backend & Web",
    desc: "Facility maintenance ticketing system with automated technician dispatch and SLA tracking.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript"]
  }
];

export default function Home() {
  // Typewriter roles
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const fullText = ROLES[roleIdx];

    const handleType = () => {
      if (!isDeleting) {
        setRoleText(fullText.substring(0, roleText.length + 1));
        if (roleText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2100);
          return;
        }
      } else {
        setRoleText(fullText.substring(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(110);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 50 : 110);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIdx, typingSpeed]);

  return (
    <div className="home-page-root">
      
      {/* =========================================================
          1. HERO SECTION (With User's Animated RGB SUMIT Code)
         ========================================================= */}
      <section id="hero" className="hero-split-section">
        <div className="hero-split-container">
          
          {/* LEFT PANEL */}
          <div className="hero-left-angled-panel">
            <div className="hero-left-content">
              
              {/* Badge */}
              <div className="hero-brand-tag">
                <span className="brand-dot"></span>
                <span>Full-Stack Web & Mobile Developer</span>
              </div>

              {/* Title with User's Exact Animated SUMIT element */}
              <h1 className="hero-name-heading">
                <span className="sumit" title="Hover over me for RGB animation!">
                  SUMIT
                </span>{" "}
                <span className="hero-name-accent">PRASAD</span>
              </h1>

              {/* Subtitle / Animated Role */}
              <div className="hero-role-wrapper">
                <span className="hero-role-static">Specializing in</span>
                <span className="hero-role-dynamic"> {roleText}</span>
                <span className="hero-cursor"></span>
              </div>

              {/* User Description */}
              <p className="hero-bio-lead">
                Building modern web applications, mobile applications, and practical software solutions.
              </p>

              {/* Primary Technologies Pills */}
              <div className="hero-tech-pills-list">
                {PRIMARY_TECHS.map((tech, idx) => (
                  <span key={idx} className="hero-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons (NO RESUME BUTTON) */}
              <div className="hero-action-buttons">
                <Link to="/projects" className="hero-cta-btn primary">
                  <span>Explore Projects</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>

                <Link to="/skills" className="hero-cta-btn outline">
                  ⚡ Skills Matrix
                </Link>

                <Link to="/contact" className="hero-cta-btn text-link">
                  Contact Me →
                </Link>
              </div>

              {/* Social Buttons */}
              <div className="hero-square-socials">
                <a
                  href="mailto:sumitprasad.dev@gmail.com"
                  className="social-square-btn"
                  title="Email Sumit Prasad"
                  aria-label="Email"
                >
                  <span className="social-icon-symbol">@</span>
                </a>

                <a
                  href="https://linkedin.com/in/sumitprasad1315"
                  target="_blank"
                  rel="noreferrer"
                  className="social-square-btn"
                  title="LinkedIn Profile: sumitprasad1315"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-square-btn"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-square-btn"
                  title="LeetCode Profile"
                  aria-label="LeetCode"
                >
                  <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>&lt;/&gt;</span>
                </a>
              </div>

              {/* Quick Stats Row - Updated to 2023 - 2027 */}
              <div className="hero-cred-row">
                <div className="cred-badge">
                  <span className="cred-val">B.Tech CSE</span>
                  <span className="cred-lbl">2023 – 2027 Batch</span>
                </div>
                <div className="cred-divider"></div>
                <div className="cred-badge">
                  <span className="cred-val">4+ Major</span>
                  <span className="cred-lbl">Full-Stack Solutions</span>
                </div>
                <div className="cred-divider"></div>
                <div className="cred-badge">
                  <span className="cred-val">Tinplate CTC</span>
                  <span className="cred-lbl">AI Thesis Certified</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL: Pure Clean Transparent PNG Photo (NO 360, NO 3D ANIMATION, NO TEXT) */}
          <div className="hero-right-dark-panel">
            <div className="hero-clean-photo-stage">
              <div className="hero-clean-photo-wrapper">
                <img
                  src={sumitTransparent}
                  alt="Sumit Prasad - Full-Stack Web & Mobile Developer"
                  className="sumit-pure-photo"
                />
                <div className="hero-photo-ambient-glow"></div>
              </div>

              {/* Cyber Pedestal Base at Bottom */}
              <div className="cyber-pedestal-base">
                <div className="pedestal-ring ring-1"></div>
                <div className="pedestal-ring ring-2"></div>
                <div className="pedestal-glow-core"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          2. PORTAL HUB: Direct Access to All Dedicated Pages
         ========================================================= */}
      <section className="portfolio-section-block">
        <div className="container">
          <div className="section-head-center">
            <span className="section-pill-tag">Explore Portfolio</span>
            <h2 className="section-heading-lg">Dedicated Portfolio Portals</h2>
            <p className="section-subtext">
              Every section has its own full, dedicated page with comprehensive details, interactive tooling, and live demonstrations.
            </p>
            <div className="heading-glow-bar"></div>
          </div>

          <div className="portals-navigation-grid">
            {PORTAL_PAGES.map((portal) => (
              <Link
                key={portal.path}
                to={portal.path}
                className="portal-card-item"
                style={{ "--portal-color": portal.color }}
              >
                <div className="portal-top-bar">
                  <span className="portal-icon-box">{portal.icon}</span>
                  <span className="portal-tag-badge">{portal.tag}</span>
                </div>
                <h3 className="portal-title">{portal.title}</h3>
                <p className="portal-desc">{portal.desc}</p>
                <div className="portal-action-row">
                  <span className="portal-link-label">Open Page</span>
                  <span className="portal-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED PROJECTS PREVIEW (Linking to /projects)
         ========================================================= */}
      <section className="portfolio-section-block section-darker">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-pill-tag">Selected Work</span>
              <h2 className="section-heading-lg" style={{ textAlign: "left" }}>Featured Software Projects</h2>
              <p className="section-subtext" style={{ textAlign: "left", margin: 0 }}>
                High-performance web applications, cross-platform mobile solutions, and data pipelines.
              </p>
            </div>
            <Link to="/projects" className="btn btn-primary">
              View All Projects →
            </Link>
          </div>

          <div className="projects-preview-grid">
            {FEATURED_PROJECTS_PREVIEW.map((proj, idx) => (
              <div key={idx} className="project-preview-card">
                <div className="proj-preview-cat">{proj.category}</div>
                <h3 className="proj-preview-title">{proj.title}</h3>
                <p className="proj-preview-desc">{proj.desc}</p>
                <div className="proj-preview-stack">
                  {proj.stack.map((s, sIdx) => (
                    <span key={sIdx} className="preview-tech-pill">{s}</span>
                  ))}
                </div>
                <Link to="/projects" className="preview-more-link">
                  Read Full Architecture & Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. VERIFIED CERTIFICATES PREVIEW (Linking to /certificates)
         ========================================================= */}
      <section className="portfolio-section-block">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-pill-tag">Authentic Credentials</span>
              <h2 className="section-heading-lg" style={{ textAlign: "left" }}>Government & Industrial Certifications</h2>
              <p className="section-subtext" style={{ textAlign: "left", margin: 0 }}>
                Officially verifiable certificates with scannable QR verification codes.
              </p>
            </div>
            <Link to="/certificates" className="btn btn-primary">
              Inspect All 3 Certificates & QR Codes →
            </Link>
          </div>

          <div className="certs-preview-row">
            {/* Tinplate CTC */}
            <div className="cert-preview-card">
              <div className="cert-thumb-wrap">
                <img src={certTinplateAI} alt="Tinplate CTC AI Thesis" className="cert-thumb-img" />
              </div>
              <div className="cert-preview-meta">
                <span className="cert-badge-sm">🏆 Tinplate CTC (Tata Steel Division)</span>
                <h4>AI & Machine Learning Thesis Certification</h4>
                <p>60 Days Industrial Research • Reference ID: 3066d73a-e6e8-4b9c-801c-053953f5cdc6</p>
                <Link to="/certificates" className="cert-inspect-link">
                  Verify with Scannable QR →
                </Link>
              </div>
            </div>

            {/* NPTEL IoT */}
            <div className="cert-preview-card">
              <div className="cert-thumb-wrap">
                <img src={certNptelIoT} alt="NPTEL IoT IIT Kharagpur" className="cert-thumb-img" />
              </div>
              <div className="cert-preview-meta">
                <span className="cert-badge-sm" style={{ color: "#ef4444", borderColor: "#ef4444" }}>🎖️ NPTEL — IIT Kharagpur</span>
                <h4>Introduction to Internet of Things (Elite 61%)</h4>
                <p>12-Week Proctored Examination • Roll: NPTEL25CS147S953300286</p>
                <Link to="/certificates" className="cert-inspect-link">
                  Verify with Scannable QR →
                </Link>
              </div>
            </div>

            {/* SmartED */}
            <div className="cert-preview-card">
              <div className="cert-thumb-wrap">
                <img src={certSmartedFSWD} alt="SmartED Full Stack Web" className="cert-thumb-img" />
              </div>
              <div className="cert-preview-meta">
                <span className="cert-badge-sm" style={{ color: "#a855f7", borderColor: "#a855f7" }}>🚀 SmartED Innovations</span>
                <h4>Full Stack Web Development (#startupindia)</h4>
                <p>Hands-on Training & Internship • Student ID: FSWD1204</p>
                <Link to="/certificates" className="cert-inspect-link">
                  Verify with Scannable QR →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CALL TO ACTION BANNER (NO RESUME DOWNLOAD)
         ========================================================= */}
      <section className="portfolio-section-block section-darker">
        <div className="container">
          <div className="home-cta-box">
            <span className="section-pill-tag">Open for Opportunities</span>
            <h2>Let's Engineer Something Exceptional Together</h2>
            <p>
              I am actively seeking software engineering opportunities, full-stack web and mobile development roles, and challenging technical projects.
            </p>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get in Touch / Hire Sumit →
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Read Full Biography →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
