import React from 'react';
import { User, Mail, Github, Instagram, Code, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function Developer() {
  return (
    <section className="developer-section section-py">
      <div className="container">
        <div className="dev-card glass-card">
          <div className="dev-content-col">
            <div className="section-tag">
              <Code size={14} />
              <span>Independent Creator</span>
            </div>
            <h2 className="dev-section-title">Meet the Developer</h2>
            <h3 className="dev-author-name">Abhay Kushwaha</h3>
            <p className="dev-bio">
              Developer & creator of Arrow Flow. Built with passion for smooth, challenging puzzle experiences, deterministic game physics, and tactile interaction design.
            </p>

            <div className="dev-social-actions">
              <a
                href="https://www.instagram.com/the.abhay.maurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary dev-social-link"
              >
                <Instagram size={18} />
                <span>Instagram</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>

              <a
                href="https://github.com/abhay288"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary dev-social-link"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>

              <a
                href="mailto:mauryaabhay938@gmail.com?subject=Arrow%20Flow%20Feedback"
                className="btn btn-primary dev-social-link"
              >
                <Mail size={18} />
                <span>Email Feedback</span>
              </a>
            </div>
          </div>

          <div className="dev-visual-col">
            <div className="dev-avatar-box">
              <div className="avatar-decor-glow"></div>
              <div className="avatar-inner">
                <span className="avatar-initials">AK</span>
              </div>
            </div>
            <div className="dev-badge-chip">
              <Sparkles size={14} color="#00E5FF" />
              <span>Arrow Flow Creator</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .developer-section {
          position: relative;
        }
        .dev-card {
          padding: 56px 48px;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 48px;
          align-items: center;
        }
        .dev-section-title {
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--cyan);
          margin-bottom: 6px;
        }
        .dev-author-name {
          font-size: 36px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .dev-bio {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 580px;
        }
        .dev-social-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .dev-social-link {
          padding: 12px 22px;
          font-size: 14px;
        }
        .ext-icon {
          opacity: 0.5;
          margin-left: -2px;
        }

        /* Avatar */
        .dev-visual-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .dev-avatar-box {
          position: relative;
          width: 140px;
          height: 140px;
          margin-bottom: 16px;
        }
        .avatar-decor-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
          filter: blur(20px);
          border-radius: 50%;
        }
        .avatar-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          border: 2px solid var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .avatar-initials {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 900;
          background: linear-gradient(135deg, var(--cyan) 0%, #38BDF8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dev-badge-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          background: rgba(var(--surface-rgb), 0.8);
          border: 1px solid var(--border);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 840px) {
          .dev-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 36px 24px;
            gap: 36px;
          }
          .dev-bio {
            margin: 0 auto 28px;
          }
          .dev-social-actions {
            justify-content: center;
          }
          .dev-visual-col {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
