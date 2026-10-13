import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Pre-configured intelligent knowledge responses about Sumit Prasad
const KNOWLEDGE_BASE = [
  {
    keywords: ["who", "sumit", "about", "profile", "bio", "developer", "introduce"],
    reply: "Sumit Prasad is a passionate Full-Stack Web & Mobile Developer currently studying in the B.Tech Computer Science & Engineering program (Batch 2023–2027). He specializes in modern React web applications, cross-platform Flutter/Dart mobile apps, robust backend APIs, and applied AI & machine learning systems.",
    action: { label: "Read Full About Page ↗", path: "/about" }
  },
  {
    keywords: ["skill", "tech", "stack", "react", "node", "flutter", "dart", "python", "java", "languages"],
    reply: "Sumit's technical stack spans:\n• Frontend: React.js, HTML5, CSS3, Modern JavaScript (ES6+), Responsive UI\n• Mobile: Flutter & Dart (Cross-platform Android & iOS)\n• Backend: Node.js, Express.js, PHP, Laravel, REST APIs\n• Databases: MySQL, MongoDB, SQLite\n• Core Languages: Java, Python, JavaScript, Dart, PHP\n• AI & ML: Data Pipelines, Model Evaluation, ML Systems",
    action: { label: "Explore Interactive 3D Skills Matrix ↗", path: "/skills" }
  },
  {
    keywords: ["project", "projects", "work", "eazzio", "renthive", "sanhe", "portfolio", "app", "apps"],
    reply: "Sumit has engineered 4 major software solutions:\n1. 📱 Eazzio Telecaller: Full-stack CRM & call management web app + Flutter mobile client\n2. 🏡 RentHive: Scalable full-stack rental marketplace platform\n3. 🛠️ SanHe@Fixit: Facility ticketing & workflow management in PHP/Laravel\n4. 📊 Automated AI Data Pipeline: Python data ingestion, preprocessing & ML analytics",
    action: { label: "View All Projects ↗", path: "/projects" }
  },
  {
    keywords: ["tinplate", "internship", "experience", "thesis", "tata", "ethesis", "ctc"],
    reply: "Sumit completed a prestigious 60-Day Industrial AI & Machine Learning Thesis Internship at Tinplate CTC (A Tata Steel Division) in Jamshedpur.\nHe engineered ML models, preprocessed datasets, built automated ingestion pipelines, and integrated AI inference endpoints.\nVerified Ref ID: 3066d73a-e6e8-4b9c-801c-053953f5cdc6.",
    action: { label: "Read Experience Breakdown ↗", path: "/experience" }
  },
  {
    keywords: ["cert", "certificate", "certificates", "nptel", "iit", "smarted", "qr", "verify", "credential"],
    reply: "Sumit holds 3 verified, authentic credentials:\n1. 🏆 Tinplate CTC AI Thesis Certification (60 Days • Tata Steel Division)\n2. 🎖️ NPTEL IoT Elite Certification (IIT Kharagpur, Roll No: NPTEL25CS147S953300286)\n3. 🚀 SmartED Full Stack Web Development (#startupindia verified, ID: FSWD1204)\nAll certificates feature scannable QR verification!",
    action: { label: "View Verified Certificates & QR ↗", path: "/certificates" }
  },
  {
    keywords: ["education", "college", "degree", "btech", "university", "cse", "coursework"],
    reply: "Sumit is an undergraduate student pursuing his Bachelor of Technology (B.Tech) in Computer Science & Engineering (Batch 2023–2027). His coursework includes Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Operating Systems, and Software Engineering.",
    action: { label: "See Education Details ↗", path: "/education" }
  },
  {
    keywords: ["dsa", "leetcode", "algorithm", "achievement", "problem", "solve", "github"],
    reply: "Sumit actively practices Data Structures and Algorithms with a focus on Arrays, Trees, Graphs, and Dynamic Programming. You can inspect his coding profiles on LeetCode, GitHub, and LinkedIn directly.",
    action: { label: "Check Achievements & DSA ↗", path: "/achievements" }
  },
  {
    keywords: ["contact", "email", "hire", "phone", "reach", "message", "linkedin", "collaborate"],
    reply: "You can connect with Sumit directly:\n• Email: sumitprasad.dev@gmail.com\n• LinkedIn: linkedin.com/in/sumitprasad1315\n• Location: India (Open to Remote, Hybrid, & On-site roles)\nHe typically replies within 24 hours!",
    action: { label: "Open Contact Form ↗", path: "/contact" }
  }
];

const SUGGESTED_QUESTIONS = [
  "👨‍💻 Who is Sumit Prasad?",
  "⚡ What are his core skills?",
  "🚀 Show major projects",
  "🏢 Tinplate AI Internship",
  "📜 Verified Certificates",
  "📬 How to contact him?"
];

export default function AstronautChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "astronaut",
      text: "👋 Greetings Earthling! I'm **Astronaut**, Sumit Prasad's personal AI assistant.\n\nAsk me anything about Sumit's technical skills, projects, Tinplate AI internship, certificates, or how to get in touch!",
      time: "Just now"
    }
  ]);

  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const processQuery = (userText) => {
    const textLower = userText.toLowerCase();

    // Check knowledge base
    let bestMatch = null;
    let maxMatches = 0;

    for (const item of KNOWLEDGE_BASE) {
      let matchCount = 0;
      for (const kw of item.keywords) {
        if (textLower.includes(kw)) {
          matchCount++;
        }
      }
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = item;
      }
    }

    if (bestMatch && maxMatches > 0) {
      return {
        text: bestMatch.reply,
        action: bestMatch.action
      };
    }

    // Default polite cosmic fallback
    return {
      text: "Great question! Sumit is a versatile Full-Stack Web & Mobile Developer proficient in React, Node.js, Flutter, Dart, Java, Python, and AI systems. You can check his dedicated pages or ask me specifically about his skills, projects, internship, or contact info!",
      action: { label: "Explore All Pages on Home ↗", path: "/" }
    };
  };

  const handleSend = (textToSend = null) => {
    const text = (textToSend || inputMsg).trim();
    if (!text) return;

    const userMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    // Realistic AI thought latency
    setTimeout(() => {
      const response = processQuery(text);
      const aiMessage = {
        id: "ai-" + Date.now(),
        sender: "astronaut",
        text: response.text,
        action: response.action,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
    }, 650);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleActionClick = (path) => {
    navigate(path);
    // On mobile, optionally close, on desktop keep open
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome-cleared",
        sender: "astronaut",
        text: "✨ Orbit cleared! What else would you like to know about Sumit?",
        time: "Just now"
      }
    ]);
  };

  return (
    <div className="astronaut-widget-root">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          className="astronaut-fab-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Astronaut AI Assistant"
        >
          <div className="astronaut-fab-avatar">
            <span className="astronaut-emoji">👨‍🚀</span>
            <span className="astronaut-status-dot"></span>
          </div>
          <div className="astronaut-fab-label">
            <span className="fab-title">Astronaut AI</span>
            <span className="fab-sub">Online</span>
          </div>
          <div className="astronaut-fab-pulse"></div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="astronaut-chat-window">
          {/* Header */}
          <div className="astronaut-chat-header">
            <div className="header-identity">
              <div className="astronaut-header-avatar">
                <span>👨‍🚀</span>
                <span className="online-indicator"></span>
              </div>
              <div className="astronaut-header-text">
                <div className="header-title-row">
                  <h4>Astronaut</h4>
                  <span className="astronaut-tag">AI COPILOT</span>
                </div>
                <p>Sumit Prasad's Assistant • Ready</p>
              </div>
            </div>

            <div className="header-controls">
              <button
                type="button"
                className="header-icon-btn"
                onClick={clearChat}
                title="Clear Chat History"
                aria-label="Clear chat"
              >
                🧹
              </button>
              <button
                type="button"
                className="header-icon-btn close-btn"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="astronaut-chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble-row ${msg.sender === "user" ? "user-row" : "astronaut-row"}`}
              >
                {msg.sender === "astronaut" && (
                  <div className="msg-avatar">
                    <span>👨‍🚀</span>
                  </div>
                )}

                <div className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "astronaut-bubble"}`}>
                  <div className="msg-text-content">
                    {msg.text.split("\n").map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>

                  {msg.action && (
                    <button
                      type="button"
                      className="chat-action-link"
                      onClick={() => handleActionClick(msg.action.path)}
                    >
                      <span>{msg.action.label}</span>
                    </button>
                  )}

                  <span className="msg-timestamp">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row astronaut-row">
                <div className="msg-avatar">
                  <span>👨‍🚀</span>
                </div>
                <div className="chat-bubble astronaut-bubble typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="typing-label">Astronaut is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="astronaut-quick-prompts">
            <div className="prompts-label">Suggested Missions:</div>
            <div className="prompts-scroll">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="prompt-chip"
                  onClick={() => handleSend(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="astronaut-chat-footer">
            <input
              type="text"
              className="chat-text-input"
              placeholder="Ask Astronaut about Sumit's skills, projects, certificates..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="chat-send-btn"
              onClick={() => handleSend()}
              disabled={!inputMsg.trim()}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
