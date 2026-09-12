import React, { useEffect } from 'react';
import { FileText, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

export default function TermsPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-root">
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

        <div className="legal-document-card glass-card">
          <div className="legal-header">
            <div className="section-tag">
              <FileText size={14} />
              <span>Terms of Service</span>
            </div>
            <h1 className="legal-title">Terms of Service for Arrow Flow</h1>
            
            <div className="legal-meta-box">
              <div className="meta-grid">
                <div><strong>Application:</strong> Arrow Flow</div>
                <div><strong>Developer:</strong> Abhay Kushwaha</div>
                <div><strong>Effective Date:</strong> September 2026</div>
                <div><strong>Inquiries:</strong> <a href="mailto:mauryaabhay938@gmail.com">mauryaabhay938@gmail.com</a></div>
              </div>
            </div>
          </div>

          <div className="legal-body-content">
            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By downloading, installing, accessing, or playing <strong>Arrow Flow</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not install or play the game.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. License to Use</h2>
              <p>
                Abhay Kushwaha grants you a personal, non-exclusive, non-transferable, revocable license to download and play Arrow Flow on compatible Android devices for your personal, non-commercial entertainment purposes.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Intellectual Property Rights</h2>
              <p>
                All rights, title, and interest in and to Arrow Flow—including but not limited to the game code, algorithms, visual design, custom canvas animations, logo, sound effects, level designs, and branding—are the exclusive intellectual property of <strong>Abhay Kushwaha</strong>. You may not reverse-engineer, decompile, redistribute, or reproduce any part of the game without prior written authorization.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Virtual In-Game Items (Coins &amp; Lives)</h2>
              <p>
                Arrow Flow features virtual currencies and items (such as Flow Coins, hints, and lives) that are earned through gameplay achievements or voluntarily watching rewarded ads.
              </p>
              <ul>
                <li>Virtual items have no monetary or real-world cash value and cannot be redeemed for fiat currency.</li>
                <li>Virtual progress is stored locally on your device. Uninstalling the app or clearing app storage erases your virtual inventory without liability.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Advertising &amp; Third-Party Services</h2>
              <p>
                Arrow Flow uses Google AdMob to serve optional rewarded video advertisements. By engaging with these advertisements, you acknowledge and agree that your interactions are subject to Google's applicable policies and terms. We are not responsible for the content or claims of third-party advertisements.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Disclaimer of Warranties</h2>
              <p>
                Arrow Flow is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express or implied. While we strive to ensure optimal 60 FPS performance and zero software bugs, we do not warrant that gameplay will be entirely error-free or uninterrupted on all devices.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Abhay Kushwaha shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use Arrow Flow.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Governing Law &amp; Updates</h2>
              <p>
                These Terms are governed by applicable laws. We reserve the right to update these terms at any time. Continued use of Arrow Flow following modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have questions regarding these Terms of Service, please reach out to:
              </p>
              <div className="contact-card-inline">
                <strong>Abhay Kushwaha</strong>
                <p>Developer of Arrow Flow</p>
                <p>Email: <a href="mailto:mauryaabhay938@gmail.com">mauryaabhay938@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/abhay288" target="_blank" rel="noopener noreferrer">github.com/abhay288</a></p>
              </div>
            </section>
          </div>

          <div className="legal-footer-nav">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}>Contact Support</a>
            <span>•</span>
            <a href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow" target="_blank" rel="noopener noreferrer">Google Play Store</a>
          </div>
        </div>
      </div>

      <style>{`
        .legal-page-root {
          padding: 40px 0 100px;
          min-height: 80vh;
        }
        .legal-back-row {
          margin-bottom: 24px;
        }
        .back-home-btn {
          padding: 10px 20px;
          font-size: 14px;
        }
        .legal-document-card {
          padding: 56px 48px;
          max-width: 880px;
          margin: 0 auto;
        }
        .legal-title {
          font-size: 38px;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .legal-meta-box {
          background: var(--cyan-soft);
          border-left: 4px solid var(--cyan);
          padding: 18px 24px;
          border-radius: var(--radius-sm);
          margin-bottom: 40px;
        }
        .meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 24px;
          font-size: 14px;
          color: var(--text-primary);
        }
        .legal-section {
          margin-bottom: 36px;
        }
        .legal-section h2 {
          font-size: 22px;
          color: var(--cyan);
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 6px;
        }
        .legal-section p {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 12px;
          color: var(--text-secondary);
        }
        .legal-section ul {
          padding-left: 24px;
          margin-bottom: 16px;
        }
        .legal-section li {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .legal-section a {
          color: var(--cyan);
          text-decoration: underline;
        }
        .contact-card-inline {
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          padding: 20px 24px;
          border-radius: var(--radius-md);
          margin-top: 14px;
        }
        .contact-card-inline strong {
          font-size: 16px;
          color: var(--text-primary);
        }
        .contact-card-inline p {
          margin: 4px 0 0;
          font-size: 14px;
        }
        .legal-footer-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          font-size: 14px;
        }
        .legal-footer-nav a {
          color: var(--cyan);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .legal-document-card {
            padding: 32px 20px;
          }
          .legal-title {
            font-size: 28px;
          }
          .meta-grid {
            grid-template-columns: 1fr;
          }
          .legal-footer-nav {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
