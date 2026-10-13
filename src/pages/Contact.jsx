import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sumitprasad.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="page-wrapper fade-in-up">
      <div className="container">
        
        {/* Page Header */}
        <div className="page-header-block">
          <span className="section-pill-tag">Get in Touch</span>
          <h1 className="page-main-heading">Let's Build Something Great</h1>
          <p className="page-subheading-text">
            Have a project idea, software opportunity, or collaboration in mind? I'd love to hear from you.
          </p>
          <div className="heading-glow-bar"></div>
        </div>

        {/* Contact Layout Duo */}
        <div className="contact-layout-duo">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            
            <div className="contact-card-modern">
              <span className="contact-box-icon">✉️</span>
              <div className="contact-card-text">
                <h4>Professional Email</h4>
                <p>sumitprasad.dev@gmail.com</p>
                <div className="contact-action-row">
                  <a href="mailto:sumitprasad.dev@gmail.com" className="contact-card-link">
                    Send Direct Email ↗
                  </a>
                  <button
                    type="button"
                    className="copy-mini-btn"
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? "✓ Copied!" : "Copy Email"}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-card-modern">
              <span className="contact-box-icon">💼</span>
              <div className="contact-card-text">
                <h4>LinkedIn Network</h4>
                <p>linkedin.com/in/sumitprasad1315</p>
                <a
                  href="https://linkedin.com/in/sumitprasad1315"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-link"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="contact-card-modern">
              <span className="contact-box-icon">🐙</span>
              <div className="contact-card-text">
                <h4>GitHub Profile</h4>
                <p>github.com</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-link"
                >
                  Explore Code Repositories ↗
                </a>
              </div>
            </div>

            <div className="contact-card-modern">
              <span className="contact-box-icon">📍</span>
              <div className="contact-card-text">
                <h4>Location & Availability</h4>
                <p>India • Available Worldwide</p>
                <span className="avail-badge">Open for Full-Time, Remote & Contract Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-column">
            <div className="contact-form-container">
              <h3>Send a Direct Message</h3>
              <p className="form-sub-hint">
                Fill in the details below and I will respond to your inquiry as swiftly as possible.
              </p>

              <form className="modern-contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formState.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Hi Sumit, I would like to discuss..."
                    value={formState.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn-block">
                  {formSubmitted ? "✓ Message Sent Successfully! 🚀" : "Send Message 🚀"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Back to Home / Other Pages CTA */}
        <div className="page-cta-banner">
          <h3>Explore other sections of my portfolio</h3>
          <p>Inspect my verified credentials, technical skills matrix, and software engineering projects.</p>
          <div className="page-cta-actions">
            <Link to="/" className="btn btn-primary">
              Return to Home →
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Inspect Projects →
            </Link>
            <Link to="/certificates" className="btn btn-outline">
              View Certificates →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
