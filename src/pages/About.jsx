import React from "react";
import { Link } from "react-router-dom";
import sumitClean from "../assets/sumit_trio_transparent.png";

export default function About() {
  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Biography & Philosophy</span>
          <h1 className="page-main-heading">About Sumit Prasad</h1>
          <p className="page-subheading-text">
            Full-Stack Web & Mobile Developer &bull; AI & Machine Learning Enthusiast &bull; B.Tech CSE (Batch 2023–2027)
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Bio Duo Layout */}
        <div className="about-split-showcase">
          {/* Left: Clean Photo */}
          <div className="about-visual-column">
            <div className="about-portrait-card">
              <div className="about-portrait-inner">
                <img
                  src={sumitClean}
                  alt="Sumit Prasad - Full-Stack Developer"
                  className="about-clean-photo"
                />
                <div className="about-portrait-glow"></div>
              </div>
              <div className="about-quick-badge">
                <span className="dot-green"></span>
                <span>Undergraduate Student &bull; Batch 2023–2027</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio */}
          <div className="about-narrative-column">
            <h2 className="about-story-title">
              Crafting Scalable Digital Experiences From Concept to Deployment
            </h2>
            <p className="about-text-p">
              I am a <strong>Full-Stack Web & Mobile Developer</strong> currently studying in the <strong>Computer Science & Engineering B.Tech program (Batch 2023–2027)</strong>. My engineering journey is driven by translating complex computational problems into elegant, reliable, and user-centric software applications.
            </p>
            <p className="about-text-p">
              My technical expertise bridges both the <strong>interactive web frontend</strong> (utilizing React.js, modern CSS architectures, and performant state management) and <strong>native cross-platform mobile development</strong> with Flutter and Dart. On the server, I design scalable microservices and RESTful APIs with Node.js, Express, PHP, and Laravel, backed by relational (MySQL) and NoSQL (MongoDB) data layers.
            </p>
            <p className="about-text-p">
              In addition to full-stack engineering, I completed a <strong>60-day industrial thesis internship at Tinplate CTC (a Tata Steel division)</strong>, where I worked with applied machine learning models, dataset ingestion pipelines, and model evaluation benchmarks.
            </p>

            {/* Quick Metrics */}
            <div className="about-metrics-row">
              <div className="about-metric-pill">
                <span className="metric-val">2023–2027</span>
                <span className="metric-lbl">B.Tech CSE Batch</span>
              </div>
              <div className="about-metric-pill">
                <span className="metric-val">4+ Major</span>
                <span className="metric-lbl">Full-Stack Platforms</span>
              </div>
              <div className="about-metric-pill">
                <span className="metric-val">60 Days</span>
                <span className="metric-lbl">Tinplate AI Internship</span>
              </div>
              <div className="about-metric-pill">
                <span className="metric-val">3 Authentic</span>
                <span className="metric-lbl">Verified Certificates</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Excellence */}
        <div className="about-pillars-container">
          <div className="section-head-center">
            <span className="section-pill-tag">Core Principles</span>
            <h2 className="section-heading-lg">The Pillars of My Engineering Approach</h2>
            <p className="section-subtext">How I approach every project, codebase, and team collaboration.</p>
          </div>

          <div className="about-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🎨</div>
              <h3>Modern Frontend Engineering</h3>
              <p>
                Building responsive, accessible, and fluid user interfaces with React.js, clean CSS systems, and dynamic micro-animations that captivate users while ensuring optimal performance.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">📱</div>
              <h3>Cross-Platform Mobile Power</h3>
              <p>
                Developing native-grade mobile applications with Flutter & Dart for Android and iOS with clean architecture, offline caching, and responsive UI components.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">⚙️</div>
              <h3>Robust Backend & APIs</h3>
              <p>
                Engineering scalable server environments with Node.js, Express, and Laravel, structured SQL/NoSQL schemas, and secure authentication flows.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🧠</div>
              <h3>Applied AI & Data Pipelines</h3>
              <p>
                Leveraging machine learning algorithms, automated data cleaning pipelines, and predictive analytics backed by industrial thesis research at Tinplate CTC.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="journey-timeline-section">
          <div className="section-head-center">
            <span className="section-pill-tag">Milestones</span>
            <h2 className="section-heading-lg">My Academic & Engineering Timeline</h2>
          </div>

          <div className="timeline-flow">
            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 – 2027</span>
                <h4>B.Tech in Computer Science & Engineering</h4>
                <p>Enrolled in undergraduate degree program, mastering core computer science foundations, Data Structures, OOP in Java, Computer Networks, and DBMS.</p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2025</span>
                <h4>Elite Certification in Internet of Things (IIT Kharagpur / NPTEL)</h4>
                <p>Awarded prestigious Elite status in proctored national examination covering IoT systems, sensors, and cloud integration.</p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2025</span>
                <h4>Full Stack Web Development (#startupindia)</h4>
                <p>Completed intensive training in modern web development at SmartED Innovations, building production-grade web APIs.</p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2026</span>
                <h4>Tinplate CTC AI & Machine Learning Thesis Internship</h4>
                <p>60-day industrial research thesis at Tata Steel division developing ML pipelines, model evaluations, and API integrations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="page-cta-banner">
          <h3>Explore the rest of my work and technical portfolio</h3>
          <p>Discover interactive skills, inspect project code, or get in touch for new opportunities.</p>
          <div className="page-cta-actions">
            <Link to="/skills" className="btn btn-primary">
              View Technical Skills →
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Browse Projects →
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
