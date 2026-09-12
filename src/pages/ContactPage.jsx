import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft, Send, CheckCircle2, Instagram, Github, Play, HelpCircle, MessageSquare } from 'lucide-react';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', email: '', category: 'Feedback', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto draft with filled content
    const subject = encodeURIComponent(`[Arrow Flow] ${formData.category} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mauryaabhay938@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-page-root">
      <div className="container">
        <div className="legal-back-row">
          <button 
            onClick={() => onNavigate('/')} 
            className="btn btn-secondary back-home-btn"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="contact-card-wrapper glass-card">
          <div className="contact-layout">
            {/* Left Info Column */}
            <div className="contact-info-col">
              <div className="section-tag">
                <Mail size={14} />
                <span>Get In Touch</span>
              </div>
              <h1 className="contact-headline">Contact &amp; Support</h1>
              <p className="contact-intro">
                Have a question about gameplay, spotted a bug, or have ideas for new levels? We'd love to hear from you.
              </p>

              <div className="contact-channel-list">
                <div className="contact-channel">
                  <div className="channel-icon-box"><Mail size={20} /></div>
                  <div>
                    <span className="channel-label">Official Support Email</span>
                    <a href="mailto:mauryaabhay938@gmail.com" className="channel-value">
                      mauryaabhay938@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="channel-icon-box"><Instagram size={20} /></div>
                  <div>
                    <span className="channel-label">Instagram</span>
                    <a 
                      href="https://www.instagram.com/the.abhay.maurya/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="channel-value"
                    >
                      @the.abhay.maurya
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="channel-icon-box"><Github size={20} /></div>
                  <div>
                    <span className="channel-label">GitHub</span>
                    <a 
                      href="https://github.com/abhay288" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="channel-value"
                    >
                      github.com/abhay288
                    </a>
                  </div>
                </div>
              </div>

              <div className="support-faq-box">
                <HelpCircle size={18} color="#00E5FF" />
                <p>
                  For immediate answers to common questions about lives, ads, and offline saving, visit our <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('/'); setTimeout(() => document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>FAQ section</a>.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="submission-success-box">
                  <CheckCircle2 size={48} color="#10B981" />
                  <h3>Message Prepared!</h3>
                  <p>
                    Your default email application has opened with your inquiry. If it didn't launch automatically, please email us directly at <strong>mauryaabhay938@gmail.com</strong>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '16px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-heading">Send a Direct Message</h3>

                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Inquiry Topic</label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="form-input"
                    >
                      <option value="Feedback">General Feedback &amp; Ideas</option>
                      <option value="Bug Report">Bug / Glitch Report</option>
                      <option value="Level Design">Level Difficulty / Design</option>
                      <option value="AdMob / Inquiries">AdMob / Business Inquiries</option>
                      <option value="Other">Other Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Describe your question, level feedback, or details of the issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="legal-footer-nav" style={{ marginTop: '48px' }}>
            <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }}>Terms of Service</a>
            <span>•</span>
            <a href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow" target="_blank" rel="noopener noreferrer">Google Play Store</a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page-root {
          padding: 40px 0 100px;
          min-height: 80vh;
        }
        .contact-card-wrapper {
          padding: 56px 48px;
          max-width: 960px;
          margin: 0 auto;
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }
        .contact-headline {
          font-size: 38px;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .contact-intro {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }
        .contact-channel-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }
        .contact-channel {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .channel-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--cyan-soft);
          color: var(--cyan);
          border: 1px solid rgba(0, 180, 216, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .channel-label {
          display: block;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
        }
        .channel-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }
        .channel-value:hover {
          color: var(--cyan);
        }
        .support-faq-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          padding: 16px;
          border-radius: var(--radius-md);
          font-size: 13.5px;
          color: var(--text-secondary);
        }
        .support-faq-box a {
          color: var(--cyan);
          font-weight: 600;
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-heading {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .form-input {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: rgba(var(--surface-rgb), 0.7);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14.5px;
          transition: border-color var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--cyan);
          outline: none;
        }
        .form-textarea {
          resize: vertical;
        }
        .form-submit-btn {
          margin-top: 10px;
          padding: 14px;
          font-size: 15px;
        }
        .submission-success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
          gap: 12px;
        }
        .submission-success-box h3 {
          font-size: 22px;
          color: var(--text-primary);
        }
        .submission-success-box p {
          font-size: 14.5px;
          color: var(--text-secondary);
          max-width: 360px;
        }

        @media (max-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-card-wrapper {
            padding: 32px 20px;
          }
          .contact-headline {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
