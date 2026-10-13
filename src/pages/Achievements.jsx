import React from "react";
import { Link } from "react-router-dom";

const DSA_TOPICS = [
  {
    topic: "Arrays & Two Pointers",
    desc: "Prefix sums, sliding window techniques, in-place rotations, and two-pointer traversal algorithms.",
    badge: "Mastered",
    color: "#0ea5e9"
  },
  {
    topic: "Binary Search",
    desc: "Order-agnostic binary search, searching in rotated sorted arrays, and search space reduction paradigms.",
    badge: "Mastered",
    color: "#6366f1"
  },
  {
    topic: "Strings & Hashing",
    desc: "Sliding window frequency maps, anagram detection, Rabin-Karp pattern searching, and hash sets.",
    badge: "Proficient",
    color: "#10b981"
  },
  {
    topic: "Linked Lists",
    desc: "Fast & slow pointer cycle detection, in-place reversal, merge k-sorted lists, and LRU cache implementations.",
    badge: "Proficient",
    color: "#f59e0b"
  },
  {
    topic: "Trees & Binary Search Trees",
    desc: "DFS traversals (inorder, preorder, postorder), BFS level-order, LCA, tree serialization, and BST validations.",
    badge: "Advanced",
    color: "#a855f7"
  },
  {
    topic: "Graphs & Topological Sort",
    desc: "Adjacency representations, BFS, DFS, cycle detection, Dijkstra's shortest path, and Kahn's algorithm.",
    badge: "Advanced",
    color: "#ec4899"
  },
  {
    topic: "Dynamic Programming (DP)",
    desc: "Memoization (top-down), tabulation (bottom-up), 0/1 Knapsack, longest common subsequence, and matrix DP.",
    badge: "Practitioner",
    color: "#38bdf8"
  },
  {
    topic: "Stacks & Monotonic Queues",
    desc: "Next greater element, valid parentheses matching, histogram largest rectangles, and min-stacks.",
    badge: "Proficient",
    color: "#14b8a6"
  }
];

export default function Achievements() {
  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Milestones & Profiles</span>
          <h1 className="page-main-heading">Achievements & Coding Profiles</h1>
          <p className="page-subheading-text">
            Continuous algorithmic problem solving, structured competitive programming practice, and developer profiles.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Milestone Highlights Bar */}
        <div className="stats-highlight-row">
          <div className="stat-highlight-card">
            <span className="stat-large-val">60 Days</span>
            <span className="stat-large-lbl">Tinplate CTC AI Thesis</span>
            <span className="stat-sub-text">Tata Steel Industrial Research</span>
          </div>

          <div className="stat-highlight-card">
            <span className="stat-large-val">Elite</span>
            <span className="stat-large-lbl">IIT Kharagpur NPTEL</span>
            <span className="stat-sub-text">Internet of Things Certification</span>
          </div>

          <div className="stat-highlight-card">
            <span className="stat-large-val">4+ Major</span>
            <span className="stat-large-lbl">Full-Stack Solutions</span>
            <span className="stat-sub-text">Production Web & Flutter Apps</span>
          </div>

          <div className="stat-highlight-card">
            <span className="stat-large-val">B.Tech</span>
            <span className="stat-large-lbl">CSE 2023 – 2027</span>
            <span className="stat-sub-text">Computer Science Degree</span>
          </div>
        </div>

        {/* DSA Problem Solving Competencies */}
        <div className="dsa-section-block">
          <div className="dsa-header-row">
            <div>
              <span className="pill-small">Algorithmic Foundations</span>
              <h2 className="dsa-title">Data Structures & Algorithm Mastery</h2>
              <p className="dsa-sub">Active problem-solving across core computational paradigms.</p>
            </div>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary dsa-leetcode-btn"
            >
              <span>View LeetCode Profile ↗</span>
            </a>
          </div>

          <div className="dsa-cards-grid">
            {DSA_TOPICS.map((item, idx) => (
              <div key={idx} className="dsa-topic-card">
                <div className="dsa-card-top">
                  <h4>{item.topic}</h4>
                  <span
                    className="dsa-status-badge"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="dsa-topic-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles Showcase */}
        <div className="coding-profiles-container">
          <div className="profiles-header-center">
            <span className="section-pill-tag">Connect Online</span>
            <h2 className="section-heading-lg">Developer & Coding Profiles</h2>
            <p className="section-subtext">Inspect repositories, commit histories, code challenges, and professional network.</p>
          </div>

          <div className="profiles-showcase-grid">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="profile-link-card"
            >
              <div className="profile-card-icon github-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div className="profile-card-details">
                <h4>GitHub</h4>
                <p>Open-source repositories, project source code, and commit track record.</p>
              </div>
              <span className="profile-action-arrow">Explore Repos ↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sumitprasad1315"
              target="_blank"
              rel="noreferrer"
              className="profile-link-card"
            >
              <div className="profile-card-icon linkedin-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="profile-card-details">
                <h4>LinkedIn</h4>
                <p>Professional network, recommendations, and verified experience updates.</p>
              </div>
              <span className="profile-action-arrow">Connect on LinkedIn ↗</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="profile-link-card"
            >
              <div className="profile-card-icon leetcode-icon">
                <span>&lt;/&gt;</span>
              </div>
              <div className="profile-card-details">
                <h4>LeetCode</h4>
                <p>Algorithmic practice, contest participation, and problem solving mastery.</p>
              </div>
              <span className="profile-action-arrow">View Solutions ↗</span>
            </a>

            {/* Professional Email */}
            <a
              href="mailto:sumitprasad.dev@gmail.com"
              className="profile-link-card"
            >
              <div className="profile-card-icon email-icon">
                <span>@</span>
              </div>
              <div className="profile-card-details">
                <h4>Email Sumit</h4>
                <p>sumitprasad.dev@gmail.com &bull; Direct communication for hiring & collabs.</p>
              </div>
              <span className="profile-action-arrow">Send Email ↗</span>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="page-cta-banner">
          <h3>Ready to collaborate on high-impact software?</h3>
          <p>Let's connect and discuss building exceptional web, mobile, or AI-powered solutions.</p>
          <div className="page-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Me Now →
            </Link>
            <Link to="/certificates" className="btn btn-secondary">
              View Verified Credentials →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
