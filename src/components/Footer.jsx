import React from 'react';
import { Play, Instagram, Github, Mail, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleLink = (e, path, hash) => {
    e.preventDefault();
    if (path === '/') {
      onNavigate('/');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a 
              href="/" 
              onClick={(e) => handleLink(e, '/')} 
              className="footer-logo-row"
            >
              <img src="/logo.png" alt="Arrow Flow" className="footer-logo-img" />
              <span className="footer-brand-title">Arrow Flow</span>
            </a>
            <p className="footer-tagline">“Clear the path. Master the flow.”</p>
            <p className="footer-desc">
              The official developer & game website for Arrow Flow on Google Play. Built with passion for pure spatial logic and tactile puzzle gameplay.
            </p>
            <div className="footer-social-icons">
              <a 
                href="https://www.instagram.com/the.abhay.maurya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://github.com/abhay288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:mauryaabhay938@gmail.com?subject=Arrow%20Flow%20Feedback" 
                className="btn-icon"
                aria-label="Email Support"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Game</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={(e) => handleLink(e, '/', null)}>Home</a></li>
              <li><a href="#features" onClick={(e) => handleLink(e, '/', '#features')}>Features</a></li>
              <li><a href="#how-to-play" onClick={(e) => handleLink(e, '/', '#how-to-play')}>How to Play</a></li>
              <li><a href="#game-modes" onClick={(e) => handleLink(e, '/', '#game-modes')}>Game Modes</a></li>
              <li><a href="#screenshots" onClick={(e) => handleLink(e, '/', '#screenshots')}>Screenshots</a></li>
              <li><a href="#about" onClick={(e) => handleLink(e, '/', '#about')}>About Arrow Flow</a></li>
              <li><a href="#faq" onClick={(e) => handleLink(e, '/', '#faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Legal & Developer Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Legal & Developer</h4>
            <ul className="footer-links-list">
              <li><a href="/privacy" onClick={(e) => handleLink(e, '/privacy')}>Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => handleLink(e, '/terms')}>Terms of Service</a></li>
              <li><a href="/contact" onClick={(e) => handleLink(e, '/contact')}>Contact Support</a></li>
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-gplay-link"
                >
                  <Play size={13} fill="currentColor" />
                  <span>Google Play Store</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Support</h4>
            <p className="footer-contact-info">
              Have questions, issues, or suggestions? Reach out directly:
            </p>
            <a href="mailto:mauryaabhay938@gmail.com" className="support-email-link">
              mauryaabhay938@gmail.com
            </a>
            <div className="developer-tag-box">
              <small>Creator & Developer</small>
              <strong>Abhay Kushwaha</strong>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2026 Arrow Flow. All rights reserved.
          </p>
          <p className="credit-text">
            Designed & Developed by <strong>Abhay Kushwaha</strong>
          </p>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: rgba(var(--surface-rgb), 0.95);
          border-top: 1px solid var(--border);
          padding: 80px 0 40px;
          position: relative;
        }
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 60px;
        }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .footer-logo-img {
          width: 36px;
          height: 36px;
          border-radius: 8px;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
        }
        .footer-tagline {
          font-weight: 600;
          color: var(--cyan);
          margin-bottom: 12px;
          font-size: 14px;
        }
        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
          max-width: 340px;
        }
        .footer-social-icons {
          display: flex;
          gap: 10px;
        }
        .footer-col-heading {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links-list a {
          font-size: 14px;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .footer-links-list a:hover {
          color: var(--cyan);
        }
        .footer-gplay-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--cyan) !important;
          font-weight: 600;
        }
        .footer-contact-info {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        .support-email-link {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: var(--cyan);
          margin-bottom: 20px;
          word-break: break-all;
        }
        .developer-tag-box {
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          display: inline-flex;
          flex-direction: column;
        }
        .developer-tag-box small {
          font-size: 11px;
          color: var(--text-muted);
        }
        .developer-tag-box strong {
          font-size: 13.5px;
          color: var(--text-primary);
        }
        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid var(--border);
          font-size: 13.5px;
          color: var(--text-muted);
        }
        .footer-bottom-row strong {
          color: var(--text-primary);
        }

        @media (max-width: 960px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-row {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
