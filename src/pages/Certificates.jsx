import React, { useState } from "react";
import { Link } from "react-router-dom";

import certTinplateAI from "../assets/cert_tinplate_ai.png";
import certNptelIoT from "../assets/cert_nptel_iot.png";
import certSmartedFSWD from "../assets/cert_smarted_fswd.png";

import qrTinplateAI from "../assets/qr_tinplate_ai.png";
import qrNptelIoT from "../assets/qr_nptel_iot.png";
import qrSmartedFSWD from "../assets/qr_smarted_fswd.png";

const CERTIFICATES_DATA = [
  {
    id: "tinplate-ai",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Thesis Certified Internship (60 Days)",
    program: "Industrial Training & Research Program",
    badge: "Official Thesis Certified",
    badgeColor: "#0ea5e9",
    badgeIcon: "🏆",
    issuer: "Tinplate CTC",
    affiliation: "The Tinplate Company of India Limited (A Tata Steel Division)",
    date: "14/07/2026",
    period: "60 Days Industrial Training",
    credentialId: "3066d73a-e6e8-4b9c-801c-053953f5cdc6",
    credentialLabel: "Reference ID",
    image: certTinplateAI,
    qrImage: qrTinplateAI,
    verifyUrl: "https://www.ethesis.in/verify?ref=3066d73a-e6e8-4b9c-801c-053953f5cdc6",
    metrics: [
      { label: "Duration", val: "60 Days" },
      { label: "Status", val: "Thesis Certified" },
      { label: "Specialization", val: "AI & ML Systems" }
    ],
    skills: [
      "Machine Learning",
      "Deep Learning Models",
      "Data Processing & Pipelines",
      "Model Evaluation & Testing",
      "AI Integration & Deployment",
      "Research & Literature Review"
    ],
    keyTasks: [
      "Assisted in building, training, and fine-tuning machine learning and deep learning models for business use cases.",
      "Collected, cleaned, and preprocessed large datasets to ensure high data quality and designed efficient ingestion pipelines.",
      "Conducted experiments to evaluate model performance using standard metrics and hyperparameter tuning.",
      "Collaborated with engineering team to integrate trained AI models into applications, APIs, and platforms.",
      "Analyzed AI research and industry trends, assisting the team in testing new frameworks and architectures."
    ],
    signatory: "HR Team / Authorized Signatory, Tinplate CTC",
    signDate: "14/07/2026",
    contactInfo: "Jamshedpur Centre: Lane No. 1, Kasidih, Jamshedpur - 831 001 | Official Website: www.ethesis.in",
    qrHint: "Scannable QR linking to verified Reference ID: 3066d73a-e6e8-4b9c-801c-053953f5cdc6"
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things",
    subtitle: "Elite Online Certification (Score: 61%)",
    program: "NPTEL Online Certification (12 Week Course)",
    badge: "Elite Certification",
    badgeColor: "#ef4444",
    badgeIcon: "🎖️",
    issuer: "NPTEL — IIT Kharagpur",
    affiliation: "Funded by MoE, Govt. of India • Swayam • Skill India",
    date: "Jul – Oct 2025",
    period: "Jul – Oct 2025 (12 Weeks)",
    credentialId: "NPTEL25CS147S953300286",
    credentialLabel: "Roll Number",
    image: certNptelIoT,
    qrImage: qrNptelIoT,
    verifyUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS147S953300286",
    metrics: [
      { label: "Consolidated Score", val: "61% (Elite)" },
      { label: "Online Assignments", val: "17.35 / 25" },
      { label: "Proctored Exam", val: "43.5 / 75" },
      { label: "Candidates Certified", val: "50,282 Nationwide" }
    ],
    credits: "3 or 4 Recommended Academic Credits",
    skills: [
      "IoT Architecture & Protocols",
      "Sensors & Actuators Interfacing",
      "Wireless Sensor Networks",
      "Cloud IoT Integration",
      "Data Analytics for IoT",
      "Embedded Systems"
    ],
    keyTasks: [
      "Mastered end-to-end IoT system architecture from physical hardware sensing layers to cloud analytics.",
      "Successfully cleared physical proctored examinations administered across nationwide centers by IIT Kharagpur.",
      "Awarded prestigious Elite status recognized by Ministry of Education, Govt. of India and Swayam."
    ],
    signatory: "Prof. Haimanti Banerji, Coordinator, NPTEL, IIT Kharagpur",
    signDate: "Jul-Oct 2025",
    contactInfo: "Indian Institute of Technology Kharagpur | Free Online Education: Swayam",
    qrHint: "Printed scannable QR on certificate linking to Roll No: NPTEL25CS147S953300286"
  },
  {
    id: "smarted-fswd",
    title: "Full Stack Web Development",
    subtitle: "#startupindia Verified Training & Internship",
    program: "Internship & Hands-on Training Program",
    badge: "#startupindia Verified",
    badgeColor: "#a855f7",
    badgeIcon: "🚀",
    issuer: "SmartED Innovations",
    affiliation: "#startupindia • Algogi • USNG LearnSpace EdTech Pvt Ltd",
    date: "10 Aug 2025",
    period: "Full-Stack Web Internship",
    credentialId: "FSWD1204",
    credentialLabel: "Student ID",
    image: certSmartedFSWD,
    qrImage: qrSmartedFSWD,
    verifyUrl: "https://www.smarted.pro",
    metrics: [
      { label: "Specialization", val: "Full Stack Web" },
      { label: "Student ID", val: "FSWD1204" },
      { label: "Recognition", val: "#startupindia" }
    ],
    skills: [
      "Full-Stack Web Development",
      "Modern React.js Interfaces",
      "Backend Services & Node.js",
      "RESTful API Integration",
      "Database Modeling",
      "Agile Teamwork"
    ],
    keyTasks: [
      "Successfully completed rigorous training and practical internship in Full Stack Web Development.",
      "Engineered responsive web applications and integrated backend API endpoints.",
      "Consistently displayed exceptional enthusiasm, dedication, and strong willingness to learn and contribute."
    ],
    signatory: "Sai Sreekar, Director & Co-Founder, SmartED Innovations",
    signDate: "10 Aug 2025",
    contactInfo: "USNG Learnspace EdTech Pvt Ltd | Official Portal: www.smarted.pro",
    qrHint: "Printed scannable QR on certificate linking to Student ID: FSWD1204"
  }
];

export default function Certificates() {
  const [activeCertModal, setActiveCertModal] = useState(null);
  const [certCardTab, setCertCardTab] = useState({});

  const toggleCertTab = (id, tab) => {
    setCertCardTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Authentic Credentials</span>
          <h1 className="page-main-heading">Official Verified Certificates</h1>
          <p className="page-subheading-text">
            Government recognized credentials, Tata Steel industrial research, and IIT proctored certifications.
            Each certificate includes high-resolution previews and instant scannable QR verification.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* 3D Certificates Grid */}
        <div className="cert-3d-grid">
          {CERTIFICATES_DATA.map((cert) => {
            const currentTab = certCardTab[cert.id] || "doc";

            return (
              <div key={cert.id} className="cert-3d-card-wrapper">
                <div className="cert-modern-card">
                  <div className="cert-holo-sweep"></div>

                  {/* Card Header */}
                  <div className="cert-card-header">
                    <div className="cert-badge-row">
                      <span
                        className="cert-status-tag"
                        style={{ borderColor: cert.badgeColor, color: cert.badgeColor }}
                      >
                        {cert.badgeIcon} {cert.badge}
                      </span>
                      <span className="cert-date-tag">{cert.date}</span>
                    </div>

                    <h3 className="cert-card-title">{cert.title}</h3>
                    <p className="cert-issuer-row">
                      <strong>{cert.issuer}</strong> &bull; {cert.affiliation}
                    </p>

                    <div className="cert-view-tabs">
                      <button
                        type="button"
                        className={`cert-view-tab-btn ${currentTab === "doc" ? "active" : ""}`}
                        onClick={() => toggleCertTab(cert.id, "doc")}
                      >
                        Document Preview
                      </button>
                      <button
                        type="button"
                        className={`cert-view-tab-btn ${currentTab === "details" ? "active" : ""}`}
                        onClick={() => toggleCertTab(cert.id, "details")}
                      >
                        Verified Details
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Document & QR View */}
                  {currentTab === "doc" && (
                    <div className="cert-doc-view">
                      <div
                        className="cert-preview-frame"
                        onClick={() => setActiveCertModal(cert)}
                        title="Click to view full high-res certificate"
                      >
                        <img
                          src={cert.image}
                          alt={`${cert.title} - ${cert.issuer}`}
                          className="cert-document-image"
                        />
                        <div className="cert-holographic-glare"></div>
                        <div className="cert-expand-overlay">
                          <span className="expand-pill">🔍 Click to Expand High-Res</span>
                        </div>
                      </div>

                      {/* Scannable QR Code Verification Bar */}
                      <div className="cert-qr-verify-bar">
                        <div className="qr-scanner-box">
                          <img
                            src={cert.qrImage}
                            alt={`Scannable QR for ${cert.title}`}
                            className="cert-qr-code-img"
                          />
                          <div className="qr-laser-scanner"></div>
                        </div>

                        <div className="qr-verify-info">
                          <div className="qr-status-row">
                            <span className="qr-pulse-dot"></span>
                            <span className="qr-status-text">Instant Mobile QR Verification</span>
                          </div>
                          <p className="qr-instruction-text">
                            Scan with camera or Google Lens to verify credential status directly.
                          </p>
                          <div className="cred-id-tag">
                            <span className="cred-key">{cert.credentialLabel}:</span>
                            <span className="cred-val-code">{cert.credentialId}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Detailed Breakdown */}
                  {currentTab === "details" && (
                    <div className="cert-details-view">
                      <div className="cert-metrics-row">
                        {cert.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="cert-metric-cell">
                            <span className="metric-cell-val">{m.val}</span>
                            <span className="metric-cell-lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="cert-skills-area">
                        <span className="skills-area-label">Validated Competencies:</span>
                        <div className="cert-skills-chips">
                          {cert.skills.map((sk, skIdx) => (
                            <span key={skIdx} className="cert-skill-chip">{sk}</span>
                          ))}
                        </div>
                      </div>

                      <div className="cert-tasks-area">
                        <span className="tasks-area-label">Key Milestones & Verification:</span>
                        <ul className="cert-tasks-list">
                          {cert.keyTasks.map((task, tIdx) => (
                            <li key={tIdx}>
                              <span className="task-bullet-dot">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="cert-signatory-strip">
                        <div>
                          <span className="sign-lbl">Signatory / Authority</span>
                          <span className="sign-name">{cert.signatory}</span>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <span className="sign-lbl">Date of Issue</span>
                          <span className="sign-date">{cert.signDate}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Footer */}
                  <div className="cert-card-footer">
                    <button
                      type="button"
                      className="cert-action-btn primary"
                      onClick={() => setActiveCertModal(cert)}
                    >
                      <span>🔍 Full Lightbox</span>
                    </button>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-action-btn outline"
                    >
                      <span>Official Portal ↗</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activeCertModal && (
          <div className="cert-lightbox-backdrop" onClick={() => setActiveCertModal(null)}>
            <div className="cert-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cert-lightbox-header">
                <div>
                  <span className="modal-badge">{activeCertModal.badge}</span>
                  <h3>{activeCertModal.title}</h3>
                  <p>{activeCertModal.issuer} &bull; {activeCertModal.affiliation}</p>
                </div>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setActiveCertModal(null)}
                >
                  ✕ Close
                </button>
              </div>

              <div className="cert-lightbox-body">
                <div className="lightbox-img-col">
                  <img
                    src={activeCertModal.image}
                    alt={activeCertModal.title}
                    className="lightbox-full-img"
                  />
                </div>

                <div className="lightbox-info-col">
                  <div className="modal-qr-section">
                    <div className="modal-qr-frame">
                      <img
                        src={activeCertModal.qrImage}
                        alt="QR Code"
                        className="modal-qr-img"
                      />
                      <div className="qr-laser-scanner"></div>
                    </div>
                    <div className="modal-qr-text">
                      <h4>Instant QR Verification</h4>
                      <p>{activeCertModal.qrHint}</p>
                      <div className="modal-cred-box">
                        <span className="modal-cred-label">{activeCertModal.credentialLabel}:</span>
                        <code className="modal-cred-id">{activeCertModal.credentialId}</code>
                      </div>
                    </div>
                  </div>

                  <div className="modal-specs-list">
                    <div className="modal-spec-item">
                      <span className="spec-label">Program:</span>
                      <span className="spec-val">{activeCertModal.program}</span>
                    </div>
                    <div className="modal-spec-item">
                      <span className="spec-label">Authority:</span>
                      <span className="spec-val">{activeCertModal.signatory}</span>
                    </div>
                    <div className="modal-spec-item">
                      <span className="spec-label">Issue Date:</span>
                      <span className="spec-val">{activeCertModal.signDate}</span>
                    </div>
                    <div className="modal-spec-item">
                      <span className="spec-label">Center:</span>
                      <span className="spec-val">{activeCertModal.contactInfo}</span>
                    </div>
                  </div>

                  <div className="modal-action-buttons">
                    <a
                      href={activeCertModal.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Verify on Official Server ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>View technical projects where these credentials were put into practice</h3>
          <p>Inspect production-grade software applications and algorithmic code repositories.</p>
          <div className="page-cta-actions">
            <Link to="/projects" className="btn btn-primary">
              Explore Projects →
            </Link>
            <Link to="/skills" className="btn btn-secondary">
              View Technical Skills →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
