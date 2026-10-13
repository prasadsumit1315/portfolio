import React from "react";
import { Link } from "react-router-dom";

const CORE_SUBJECTS = [
  {
    name: "Data Structures & Algorithms",
    icon: "🧩",
    desc: "Arrays, Linked Lists, Trees, Heaps, Graphs, Sorting, Dynamic Programming & Complexity Analysis (Big O)."
  },
  {
    name: "Object-Oriented Programming (OOP)",
    icon: "🏛️",
    desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID principles, and design patterns in Java/C++."
  },
  {
    name: "Database Management Systems (DBMS)",
    icon: "🗄️",
    desc: "Relational modeling, SQL queries, normalization (1NF-BCNF), ACID properties, indexing, and NoSQL."
  },
  {
    name: "Computer Networks",
    icon: "🌐",
    desc: "OSI and TCP/IP protocol stacks, subnetting, routing algorithms, DNS, HTTP/HTTPS, and WebSockets."
  },
  {
    name: "Operating Systems",
    icon: "🖥️",
    desc: "Process scheduling, thread concurrency, semaphores, deadlocks, virtual memory, and file systems."
  },
  {
    name: "Software Engineering & SDLC",
    icon: "⚙️",
    desc: "Agile methodologies, sprint cycles, software requirements, automated testing, and CI/CD pipelines."
  }
];

export default function Education() {
  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Academic Background</span>
          <h1 className="page-main-heading">Education & Foundations</h1>
          <p className="page-subheading-text">
            Formal computer science training, algorithmic fundamentals, and specialized software engineering coursework.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Primary Education Card */}
        <div className="education-card-main">
          <div className="edu-card-header">
            <div className="edu-icon-badge">🎓</div>
            <div className="edu-info">
              <h3>Bachelor of Technology (B.Tech)</h3>
              <p className="edu-degree-subtitle">Computer Science & Engineering (CSE)</p>
            </div>
            <div className="edu-meta-pills">
              <span className="edu-duration">📅 Batch 2023 – 2027</span>
              <span className="edu-status-badge">✓ Currently Enrolled</span>
            </div>
          </div>

          <div className="edu-card-body">
            <h4>Core Academic Curriculum & Foundational Subjects</h4>
            <div className="edu-subjects-grid">
              {CORE_SUBJECTS.map((subj, idx) => (
                <div key={idx} className="edu-subject-item">
                  <span className="edu-check-icon">{subj.icon}</span>
                  <div>
                    <strong>{subj.name}</strong>
                    <p>{subj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Highlights & Labs Grid */}
        <div className="edu-highlights-grid">
          <div className="edu-highlight-box">
            <div className="box-icon">🔬</div>
            <h4>Practical Laboratory Experience</h4>
            <p>
              Extensive hands-on lab sessions conducting network packet tracing, writing concurrent Java socket servers, building database schemas in MySQL, and writing algorithmic benchmarks in C/Java.
            </p>
          </div>

          <div className="edu-highlight-box">
            <div className="box-icon">💡</div>
            <h4>Capstone Projects & Architecture</h4>
            <p>
              Designed and built real-world full-stack web and mobile applications as part of academic coursework, integrating RESTful services with persistent databases and responsive frontend clients.
            </p>
          </div>

          <div className="edu-highlight-box">
            <div className="box-icon">🎖️</div>
            <h4>Continuous Industry Up-skilling</h4>
            <p>
              Supplemented undergraduate coursework with nationwide certifications including NPTEL IIT Kharagpur (Internet of Things Elite Certification) and industrial AI internships at Tinplate CTC.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>Want to see the skills gained in action?</h3>
          <p>Explore my technical skill matrix or inspect my production-ready software projects.</p>
          <div className="page-cta-actions">
            <Link to="/skills" className="btn btn-primary">
              View Technical Skills →
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Inspect Projects →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
