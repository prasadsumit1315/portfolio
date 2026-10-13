import React, { useState, useEffect } from "react";

const GREETINGS = [
  {
    word: "Hello",
    lang: "English",
    flag: "🇬🇧",
    color: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #00f0ff 60%, #3b82f6 100%)"
  },
  {
    word: "नमस्ते",
    lang: "Hindi",
    flag: "🇮🇳",
    color: "#ff9933",
    glow: "rgba(255, 153, 51, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #ff9933 60%, #ff5500 100%)"
  },
  {
    word: "¡Hola!",
    lang: "Spanish",
    flag: "🇪🇸",
    color: "#ff3366",
    glow: "rgba(255, 51, 102, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #ff3366 60%, #ff007f 100%)"
  },
  {
    word: "Bonjour",
    lang: "French",
    flag: "🇫🇷",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #a855f7 60%, #6366f1 100%)"
  },
  {
    word: "こんにちは",
    lang: "Japanese",
    flag: "🇯🇵",
    color: "#ff4d94",
    glow: "rgba(255, 77, 148, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #ff4d94 60%, #ff1a75 100%)"
  },
  {
    word: "Ciao",
    lang: "Italian",
    flag: "🇮🇹",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #10b981 60%, #059669 100%)"
  },
  {
    word: "Guten Tag",
    lang: "German",
    flag: "🇩🇪",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #f59e0b 60%, #d97706 100%)"
  },
  {
    word: "Olá",
    lang: "Portuguese",
    flag: "🇧🇷",
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #22c55e 60%, #16a34a 100%)"
  },
  {
    word: "你好",
    lang: "Chinese",
    flag: "🇨🇳",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #ef4444 60%, #b91c1c 100%)"
  },
  {
    word: "مرحباً",
    lang: "Arabic",
    flag: "🇦🇪",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #06b6d4 60%, #0891b2 100%)"
  },
  {
    word: "안녕하세요",
    lang: "Korean",
    flag: "🇰🇷",
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #c084fc 60%, #7c3aed 100%)"
  },
  {
    word: "Привет",
    lang: "Russian",
    flag: "🇷🇺",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.55)",
    gradient: "linear-gradient(135deg, #ffffff 10%, #38bdf8 60%, #2563eb 100%)"
  }
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower timing per user request: 400ms per greeting
    const intervalTime = 400;
    const totalSteps = GREETINGS.length;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < totalSteps - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, intervalTime);

    // Smooth continuous progress bar across 4.8s
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 95);

    // Total sequence duration ~4.9s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsDone(true);
      }, 750);
    }, 4900);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsDone(true);
    }, 400);
  };

  if (isDone) return null;

  const current = GREETINGS[index];

  return (
    <aside
      className={`preloader-root ${isExiting ? "preloader-exit" : ""}`}
      aria-label="Welcome Loading Screen"
      role="status"
      aria-live="polite"
    >
      {/* Dynamic Colored Ambient Glows matching current greeting */}
      <div
        className="preloader-bg-glow glow-1"
        style={{
          background: `radial-gradient(circle, ${current.color} 0%, transparent 70%)`,
          transition: "background 0.4s ease"
        }}
      ></div>
      <div
        className="preloader-bg-glow glow-2"
        style={{
          background: `radial-gradient(circle, ${current.color} 0%, transparent 70%)`,
          transition: "background 0.4s ease"
        }}
      ></div>
      <div className="preloader-grid-overlay"></div>

      {/* Skip Button */}
      <button
        type="button"
        className="preloader-skip-btn"
        onClick={handleSkip}
        aria-label="Skip loading animation"
      >
        Skip Intro ✕
      </button>

      {/* Center Stage: Giant Hello with Dynamic Theme Color */}
      <div className="preloader-center-stage">
        {/* Monogram / Top Tag */}
        <div
          className="preloader-top-tag"
          style={{
            borderColor: `${current.color}55`,
            color: current.color,
            boxShadow: `0 0 20px ${current.glow}`
          }}
        >
          <span
            className="tag-dot"
            style={{
              background: current.color,
              boxShadow: `0 0 10px ${current.color}`
            }}
          ></span>
          <span>Sumit Prasad • Portfolio</span>
        </div>

        {/* Big Size Word with custom vibrant gradient & glow */}
        <div className="preloader-word-box">
          <h1
            className="preloader-huge-word"
            key={current.word}
            style={{
              backgroundImage: current.gradient,
              textShadow: `0 0 50px ${current.glow}`
            }}
          >
            {current.word}
          </h1>
        </div>

        {/* Language & Flag Indicator */}
        <div
          className="preloader-lang-indicator"
          key={`lang-${current.lang}`}
          style={{
            borderColor: `${current.color}66`,
            boxShadow: `0 4px 25px ${current.glow}`
          }}
        >
          <span className="preloader-flag">{current.flag}</span>
          <span
            className="preloader-lang-name"
            style={{ color: current.color }}
          >
            {current.lang}
          </span>
        </div>

        {/* Glowing Progress Line */}
        <div className="preloader-progress-wrapper">
          <div className="preloader-progress-track">
            <div
              className="preloader-progress-bar"
              style={{
                width: `${progress}%`,
                background: current.gradient,
                boxShadow: `0 0 15px ${current.color}`
              }}
            ></div>
          </div>
          <div className="preloader-progress-text">
            <span>INITIALIZING EXPERIENCE</span>
            <span className="progress-num" style={{ color: current.color }}>
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
