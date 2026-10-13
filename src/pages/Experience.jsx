import React from "react";
import { Link } from "react-router-dom";
import certTinplateAI from "../assets/cert_tinplate_ai.png";
import qrTinplateAI from "../assets/qr_tinplate_ai.png";

export default function Experience() {
  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Professional Experience</span>
          <h1 className="page-main-heading">Industrial Experience & Research</h1>
          <p className="page-subheading-text">
            Practical application of machine learning, backend architectures, and production-grade software development.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Featured Card: Tinplate CTC AI Internship */}
        <div className="experience-flagship-card">
          <div className="exp-flagship-top">
            <div className="exp-org-branding">
              <div className="exp-logo-square">
                <span className="exp-emoji-badge">🏢</span>
              </div>
              <div className="exp-org-titles">
                <div className="exp-tag-row">
                  <span className="corp-badge">Tata Steel Division</span>
                  <span className="verified-status-tag">✓ Verified Thesis Internship</span>
                </div>
                <h2>The Tinplate Company of India Limited (Tinplate CTC)</h2>
                <h3>Artificial Intelligence & Machine Learning Research Intern</h3>
              </div>
            </div>

            <div className="exp-meta-summary">
              <div className="exp-meta-pill">
                <span className="meta-lbl">Duration</span>
                <span className="meta-val">60 Days Industrial Training</span>
              </div>
              <div className="exp-meta-pill">
                <span className="meta-lbl">Certification Date</span>
                <span className="meta-val">14/07/2026</span>
              </div>
              <div className="exp-meta-pill">
                <span className="meta-lbl">Location</span>
                <span className="meta-val">Jamshedpur Centre, India</span>
              </div>
              <div className="exp-meta-pill highlight">
                <span className="meta-lbl">Reference ID</span>
                <span className="meta-val">3066d73a-e6e8-4b9c-801c-053953f5cdc6</span>
              </div>
            </div>
          </div>

          <div className="exp-content-grid">
            {/* Left Column: Responsibilities & Impact */}
            <div className="exp-details-left">
              <h4>Key Engineering Responsibilities & Impact</h4>
              <ul className="exp-tasks-list">
                <li>
                  <span className="task-bullet">▸</span>
                  <div>
                    <strong>Machine Learning & Deep Learning Model Development:</strong> Assisted in training, tuning, and validating neural architectures and supervised learning algorithms for operational automation.
                  </div>
                </li>
                <li>
                  <span className="task-bullet">▸</span>
                  <div>
                    <strong>Automated Data Pipelines & Preprocessing:</strong> Cleaned, normalized, and engineered features from raw sensor and operational data streams, drastically reducing manual preparation overhead.
                  </div>
                </li>
                <li>
                  <span className="task-bullet">▸</span>
                  <div>
                    <strong>Rigorous Model Evaluation:</strong> Benchmarked predictive accuracy utilizing confusion matrices, precision, recall, and F1-score evaluation metrics with systematic hyperparameter optimization.
                  </div>
                </li>
                <li>
                  <span className="task-bullet">▸</span>
                  <div>
                    <strong>API Integration & Software Deployment:</strong> Collaborated directly with senior engineers to expose trained ML inference models via RESTful API endpoints for internal platforms.
                  </div>
                </li>
                <li>
                  <span className="task-bullet">▸</span>
                  <div>
                    <strong>State-of-the-Art AI Research:</strong> Surveyed cutting-edge machine learning research papers, contributing to testing modern frameworks and architectural approaches for industrial environments.
                  </div>
                </li>
              </ul>

              <div className="exp-tech-tags-wrap">
                <h4>Technologies & Tools Utilized</h4>
                <div className="exp-tags-cloud">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Deep Learning</span>
                  <span>Data Processing</span>
                  <span>Ingestion Pipelines</span>
                  <span>Model Evaluation</span>
                  <span>REST APIs</span>
                  <span>Hyperparameter Tuning</span>
                  <span>Jupyter / VS Code</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Credential Preview */}
            <div className="exp-proof-card">
              <div className="proof-card-inner">
                <div className="proof-header">
                  <span className="proof-badge">Official Certificate</span>
                  <span className="proof-auth">Signed by HR / Authorized Signatory</span>
                </div>
                <div className="proof-thumb-box">
                  <img
                    src={certTinplateAI}
                    alt="Tinplate CTC AI Internship Certificate"
                    className="proof-cert-img"
                  />
                  <div className="proof-qr-overlay">
                    <img src={qrTinplateAI} alt="Tinplate Verification QR" className="proof-qr-thumb" />
                    <span>Scan to Verify</span>
                  </div>
                </div>
                <div className="proof-footer">
                  <div className="proof-info-text">
                    <p className="proof-sub">Jamshedpur Centre: Lane No. 1, Kasidih, Jamshedpur - 831 001</p>
                    <p className="proof-url">Portal: www.ethesis.in</p>
                  </div>
                  <Link to="/certificates" className="btn btn-secondary proof-view-btn">
                    View Full Certificate & QR →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Experience Section */}
        <div className="additional-experience-grid">
          {/* SmartED */}
          <div className="exp-sub-card">
            <div className="exp-sub-header">
              <div className="exp-sub-icon">🚀</div>
              <div>
                <span className="sub-tag">#startupindia Verified</span>
                <h3>Full Stack Web Development Intern</h3>
                <h4>SmartED Innovations • Algogi</h4>
              </div>
            </div>
            <p className="exp-sub-desc">
              Completed intensive hands-on full-stack development internship focusing on React.js web interfaces, Node.js REST services, and database schema design.
            </p>
            <div className="exp-sub-footer">
              <span className="credential-pill">Student ID: FSWD1204</span>
              <Link to="/certificates" className="sub-link">Inspect Certificate →</Link>
            </div>
          </div>

          {/* Academic Software Project Lead */}
          <div className="exp-sub-card">
            <div className="exp-sub-header">
              <div className="exp-sub-icon">💻</div>
              <div>
                <span className="sub-tag">Engineering Leadership</span>
                <h3>Software Project Lead & Architect</h3>
                <h4>B.Tech CSE Projects</h4>
              </div>
            </div>
            <p className="exp-sub-desc">
              Led team development on cross-platform telecalling and enterprise service ticketing applications, architecting database schemas, API contracts, and Flutter mobile views.
            </p>
            <div className="exp-sub-footer">
              <span className="credential-pill">Batch 2023 – 2027</span>
              <Link to="/projects" className="sub-link">Explore Projects →</Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>Interested in discussing an engineering role or technical project?</h3>
          <p>I am available for software developer roles, internships, and high-impact software builds.</p>
          <div className="page-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Me Directly →
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Browse Major Projects →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
