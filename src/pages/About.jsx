import React from "react";
import profileImg from "../assets/profile.png";

export default function About() {
  return (
    <main className="container">
      <div className="about-grid">
        <div className="hero-img-container">
          <div className="hero-img-wrapper" style={{ width: "280px", height: "280px" }}>
            <img src={profileImg} alt="Sumit Prasad Profile" />
          </div>
        </div>

        <div className="about-info">
          <h2 className="section-title" style={{ textAlign: "left", marginLeft: 0 }}>About Me</h2>
          <h3>BTech CSE Student & Software Developer</h3>
          <p>
            I am <strong>Sumit Prasad</strong>, currently pursuing a Bachelor of Technology in Computer Science & Engineering. My passion lies in software development, particularly building intuitive user interfaces and robust backend systems.
          </p>
          <p>
            With a strong foundation in Java, C, and Data Structures & Algorithms, I love solving complex computational problems and translating solutions into clean, high-performance applications. I am active in mobile and web development, exploring native Android, Flutter, and web technologies.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h4>Education</h4>
              <p>BTech CSE Student<br />Computer Science</p>
            </div>
            <div className="about-card">
              <h4>Interests</h4>
              <p>Web Dev, Java, Flutter, DSA & UI/UX</p>
            </div>
            <div className="about-card">
              <h4>Goal</h4>
              <p>Become a Professional Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
