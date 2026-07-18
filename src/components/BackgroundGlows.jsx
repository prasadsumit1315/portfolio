import React, { useState, useEffect } from "react";

export default function BackgroundGlows() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <div
      className="bg-glows-container"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1,
        overflow: "hidden"
      }}
    >
      {/* Dynamic Interactive Cursor Glow */}
      {isVisible && (
        <div
          className="bg-orb"
          style={{
            left: `${mousePos.x - 150}px`,
            top: `${mousePos.y - 150}px`,
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(255, 0, 127, 0.05) 50%, transparent 100%)",
            transition: "left 0.15s ease-out, top 0.15s ease-out",
            filter: "blur(60px)",
            opacity: 1
          }}
        />
      )}

      {/* Floating Ambient Orbs */}
      <div
        className="bg-orb animate-float-slow"
        style={{
          left: "8%",
          top: "15%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 80%)"
        }}
      />
      <div
        className="bg-orb animate-float-medium"
        style={{
          right: "5%",
          bottom: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.08) 0%, transparent 80%)"
        }}
      />
      <div
        className="bg-orb animate-float-fast"
        style={{
          left: "40%",
          top: "45%",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 80%)"
        }}
      />
    </div>
  );
}
