import React, { useState } from "react";

// To receive emails directly at sumitprasad1315@gmail.com:
// 1. Go to https://formspree.io/ and sign up for a free account.
// 2. Create a form targeting your email: sumitprasad1315@gmail.com
// 3. Copy the Form ID (looks like a random string, e.g. "xpzvjreq") and paste it below:
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "" // 'success', 'error', 'sending'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      message: "Sending your message...",
      type: "sending"
    });

    const name = formData.name.trim() || "there";

    // Fallback if Formspree ID is not yet configured, to guide the user
    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === "YOUR_FORMSPREE_ID") {
      setTimeout(() => {
        setFormStatus({
          message: `✉️ (Demo Mode) Thanks ${name}! Setup your Formspree Form ID in 'src/pages/Contact.jsx' to receive real emails.`,
          type: "success"
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus({
          message: `Thanks ${name}! Your message has been sent successfully ✅`,
          type: "success"
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        const data = await response.json();
        setFormStatus({
          message: data.error || "Oops! There was a problem sending your message. Please try again.",
          type: "error"
        });
      }
    } catch (error) {
      setFormStatus({
        message: "Connection error. Please check your network and try again.",
        type: "error"
      });
    }
  };

  return (
    <main className="container contact-sec fade-in-up">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Feel free to drop a message, collaborate on a project, or connect with me via social channels.</p>

      <div className="contact-layout">
        {/* Direct Contact Details */}
        <div className="contact-info-panel fade-in-up delay-1" style={{ opacity: 0 }}>
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h4>Email</h4>
              <p><a href="mailto:sumitorasad1315@gmail.com">sumitorasad1315@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🌐</div>
            <div className="contact-details">
              <h4>GitHub</h4>
              <p><a href="https://github.com/sumit1315-as" target="_blank" rel="noopener noreferrer">github.com/sumit1315-as</a></p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/sumitprasad13" target="_blank" rel="noopener noreferrer">linkedin.com/in/sumitprasad13</a></p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-panel fade-in-up delay-2" style={{ opacity: 0 }}>
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Hi Sumit, I would love to collaborate with you on..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                marginTop: "0.5rem",
                width: "100%",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: formStatus.type === "sending" ? "scale(0.98)" : "none"
              }}
              disabled={formStatus.type === "sending"}
            >
              {formStatus.type === "sending" ? "⚡ Sending Message..." : "✉️ Send Message"}
            </button>

            {formStatus.message && (
              <div className={`form-status ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
