import React from "react";
import { Link } from "react-router-dom";

const PROJECTS_DATA = [
  {
    title: "Eazzio Telecaller & CRM",
    category: "Android / Backend Mobile CRM",
    description: "An enterprise-level telecalling CRM system built to optimize team dialing and automate lead logging. Includes a background call tracking service natively monitoring call states, a default dialer role integration (Android 10+), secure filtering to ensure agent personal call privacy, local SQLite cache storage for offline logging, PostgreSQL backend transactions syncing logs on network recovery, and a centralized admin manager.",
    tech: ["Kotlin", "Java", "PostgreSQL", "Node.js", "SQLite (sqflite)", "Android SDK", "Foreground Service"],
    links: [
      { text: "📂 View Code", href: "#" },
      { text: "⚡ View Report", href: "#" }
    ],
    featured: true
  },
  {
    title: "Eazzio Team Reminder & Scheduler",
    category: "Flutter / Team Productivity",
    description: "A high-performance cross-platform team coordination and task scheduler application built with Flutter. Integrates custom workspace creations, team activity metrics logs, remote backend schedule synchronization, secure OTP verification for account authentication, local settings configs, and detailed call logs history tables.",
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "OTP Authentication", "REST API"],
    links: [
      { text: "📂 View Code", href: "#" },
      { text: "⚡ View Design", href: "#" }
    ],
    featured: true
  },
  {
    title: "Personal Portfolio Website",
    category: "Web Design",
    description: "A premium, highly interactive multi-page developer portfolio. Features custom-designed glassmorphism layouts, glowing ambient backlights, fluid CSS animations, dynamic active routing links, and a responsive responsive drawer menu.",
    tech: ["HTML5", "CSS3", "JavaScript", "Design System"],
    links: [
      { text: "⚡ Live Demo", href: "/" },
      { text: "📂 View Code", href: "#" }
    ],
    featured: false
  },
  {
    title: "Modern To-Do Planner",
    category: "Web Utility",
    description: "A clean task management web utility allowing users to organize daily tasks, filter statuses, and persist database activities using localStorage.",
    tech: ["HTML5", "CSS Grid", "JavaScript", "localStorage"],
    links: [
      { text: "📂 View Code", href: "#" }
    ],
    featured: false
  },
  {
    title: "Glassmorphism Calculator",
    category: "Web Application",
    description: "A modern calculator featuring mathematical evaluations, keyboard entry inputs, custom-engineered styling tokens, and a clean user-centric design layout.",
    tech: ["HTML5", "CSS Variables", "JS Logic"],
    links: [
      { text: "📂 View Code", href: "#" }
    ],
    featured: false
  }
];

export default function Projects() {
  return (
    <main className="container projects-sec fade-in-up">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A showcase of systems and applications I have developed, featuring mobile CRM architectures and web utilities.</p>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={idx}
            className={`project-card ${project.featured ? "featured" : ""} fade-in-up delay-${(idx % 3) + 1}`}
            style={{ opacity: 0 }}
          >
            <div className="project-details">
              <div className="project-header">
                <span className="project-category-tag">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech-list">
                {project.tech.map((techItem, tIdx) => (
                  <span key={tIdx} className="tech-tag">{techItem}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link, lIdx) => {
                  const isExternal = link.href.startsWith("#") || link.href.startsWith("http");
                  return isExternal ? (
                    <a key={lIdx} href={link.href} className="project-link">
                      {link.text}
                    </a>
                  ) : (
                    <Link key={lIdx} to={link.href} className="project-link">
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
