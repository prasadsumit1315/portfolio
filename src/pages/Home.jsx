import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";

const ROLES = [
  "BTech CSE Student",
  "Full-Stack Web Developer",
  "Mobile App Architect",
  "Data Structures & DSA Enthusiast"
];

export default function Home() {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const fullText = ROLES[currentRoleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at the end of the phrase
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(120);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 60 : 120);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx, typingSpeed]);

  return (
    <section className="hero-sec fade-in-up">
      <div className="hero-grid-pattern"></div>
      <div className="container hero-layout">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="gradient-text-animated">Sumit Prasad</span>
          </h1>
          <h2 style={{ minHeight: "40px" }}>
            <span className="typewriter-text">{currentText}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.2em",
                backgroundColor: "hsl(var(--primary))",
                marginLeft: "3px",
                animation: "blink 0.8s step-end infinite"
              }}
            ></span>
          </h2>
          <p>
            I am a passionate Web Developer and Software Engineer. I build modern, elegant web and mobile applications using native and cutting-edge technologies.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">CSE</span>
              <span className="stat-label">BTech Student</span>
            </div>
          </div>

          <div className="btn-group">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>

        <div className="hero-img-container">
          <div className="hero-img-wrapper">
            <img src={profileImg} alt="Sumit Prasad Profile" />
          </div>

          {/* Floating Technology Badges */}
          <div
            className="tech-badge animate-float-slow"
            style={{
              position: "absolute",
              top: "5%",
              left: "-8%",
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid hsl(var(--primary))",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              boxShadow: "0 6px 20px rgba(14, 165, 233, 0.2)"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>⚛️</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "white" }}>React</span>
          </div>

          <div
            className="tech-badge animate-float-medium"
            style={{
              position: "absolute",
              bottom: "15%",
              left: "-12%",
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid hsl(var(--secondary))",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              boxShadow: "0 6px 20px rgba(99, 102, 241, 0.2)"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>📱</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "white" }}>Flutter</span>
          </div>

          <div
            className="tech-badge animate-float-fast"
            style={{
              position: "absolute",
              top: "20%",
              right: "-10%",
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid hsl(var(--accent))",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              boxShadow: "0 6px 20px rgba(255, 0, 127, 0.2)"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>☕</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "white" }}>Java</span>
          </div>

          <div
            className="tech-badge animate-float-slow"
            style={{
              position: "absolute",
              bottom: "5%",
              right: "-5%",
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid hsl(var(--primary))",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              boxShadow: "0 6px 20px rgba(14, 165, 233, 0.2)"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🎯</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "white" }}>Kotlin</span>
          </div>
        </div>
      </div>

      {/* CSS inline styles for typewriter blinking cursor */}
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: hsl(var(--primary)) }
        }
      `}</style>
    </section>
  );
}
