import React, { useState, useEffect } from "react";

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 85 },
      { name: "JavaScript (ES6+)", percentage: 80 }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Java", percentage: 85 },
      { name: "C Programming", percentage: 75 }
    ]
  },
  {
    category: "Core CS & Tools",
    skills: [
      { name: "Data Structures & Algorithms", percentage: 80 },
      { name: "Git & GitHub", percentage: 75 },
      { name: "Problem Solving", percentage: 80 }
    ]
  }
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container skills-sec fade-in-up">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">A visual breakdown of my technical expertise, core programming languages, and tools.</p>

      <div className="skills-categories">
        {SKILLS_DATA.map((cat, idx) => (
          <div
            className={`skills-category fade-in-up delay-${idx + 1}`}
            style={{ opacity: 0 }}
            key={idx}
          >
            <h3>{cat.category}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: animate ? `${skill.percentage}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
