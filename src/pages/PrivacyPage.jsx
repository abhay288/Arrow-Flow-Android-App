import React, { useEffect } from 'react';
import { Shield, ArrowLeft, Mail, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage({ onNavigate }) {
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
              <Shield size={14} />
              <span>Legal Transparency</span>
            </div>
            <h1 className="legal-title">Privacy Policy for Arrow Flow</h1>
            
            <div className="legal-meta-box">
              <div className="meta-grid">
                <div><strong>Application:</strong> Arrow Flow (ArrowFlow)</div>
                <div><strong>Package Name:</strong> com.arrowflow.game.arrowflow</div>
                <div><strong>Developer:</strong> Abhay Kushwaha</div>
                <div><strong>Contact Email:</strong> <a href="mailto:mauryaabhay938@gmail.com">mauryaabhay938@gmail.com</a></div>
                <div><strong>Last Updated:</strong> September 2026</div>
                <div><strong>Platform:</strong> Google Play Store (Android)</div>
              </div>
            </div>
          </div>

          <div className="legal-body-content">
            <section className="legal-section">
              <h2>1. Overview</h2>
              <p>
                Welcome to <strong>Arrow Flow</strong>, an original logic puzzle game engineered and maintained by <strong>Abhay Kushwaha</strong>. We believe privacy is a fundamental human right. This Privacy Policy outlines what information is collected, how it is handled, and your rights when playing Arrow Flow.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Do NOT Collect</h2>
              <p>Arrow Flow does not collect, store, or transmit any personally identifiable information (PII):</p>
              <ul>
                <li>No user account creation, registration, or sign-in is required to play.</li>
                <li>We do not collect names, email addresses, phone numbers, contacts, or location data.</li>
                <li>We do not request access to device cameras, microphones, photos, or storage media beyond standard sandbox app files.</li>
                <li>We do not host proprietary backend tracking servers or profile user behaviors.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Local Storage of Game Data</h2>
              <p>
                All gameplay progress is stored exclusively and locally on your device in the app’s secure sandboxed storage:
              </p>
              <ul>
                <li>Completed campaign stages (Levels 1 to 100) and unlocked worlds (1 to 5)</li>
                <li>Star ratings, move efficiency counters, and personal best scores</li>
                <li>Flow Coin balance and in-game unlocks</li>
                <li>Audio sound effects and tactile haptic vibration toggles</li>
                <li>Daily puzzle completions and consecutive streak records</li>
              </ul>
              <p>
                This data remains strictly on your device and is never synchronized to external servers without your explicit knowledge.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Advertising (Google AdMob)</h2>
              <p>
                Arrow Flow contains optional rewarded video advertisements powered by <strong>Google AdMob</strong> (Google Mobile Ads SDK). Players may voluntarily choose to watch an advertisement to receive helpful in-game rewards (such as an extra life or hint coins).
              </p>
              <p>
                When advertisements are loaded or viewed, Google AdMob may process pseudonymous device information to deliver and measure ad performance, including:
              </p>
              <ul>
                <li>Google Advertising ID (GAID / AAID)</li>
                <li>IP address (for coarse geographic location / country level)</li>
                <li>Device model, operating system version, and display parameters</li>
                <li>Ad interaction diagnostics (views, completions, crash diagnostic reports)</li>
              </ul>
              <p>Google’s handling of advertising data is governed by:</p>
              <ul>
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy <ExternalLink size={12} className="inline-ext" />
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                    How Google uses information from sites or apps that use our services <ExternalLink size={12} className="inline-ext" />
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/ads/answer/2662922" target="_blank" rel="noopener noreferrer">
                    Google Ads Opt-out Settings <ExternalLink size={12} className="inline-ext" />
                  </a>
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Children's Privacy</h2>
              <p>
                Arrow Flow is designed for all audiences (rated Everyone / PEGI 3). We do not knowingly collect personal information from children under 13. If you believe a child has inadvertently provided personal information, please contact us immediately at <a href="mailto:mauryaabhay938@gmail.com">mauryaabhay938@gmail.com</a> and we will take immediate remedial action.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data Deletion &amp; Control</h2>
              <p>You can erase all your saved game progress at any time through:</p>
              <ul>
                <li><strong>In-Game:</strong> Navigate to <em>Settings &gt; Reset Game Progress</em> and confirm.</li>
                <li><strong>Android System Settings:</strong> Open <em>Settings &gt; Apps &gt; Arrow Flow &gt; Storage &gt; Clear Data</em>.</li>
                <li><strong>Uninstalling:</strong> Deleting the app from your device permanently erases all locally cached files and progress.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. Changes to This Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect app updates or regulatory guidelines. Updates will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Contact Information</h2>
              <p>For any questions or privacy inquiries regarding Arrow Flow, please contact:</p>
              <div className="contact-card-inline">
                <strong>Abhay Kushwaha</strong>
                <p>Developer &amp; Publisher</p>
                <p>Email: <a href="mailto:mauryaabhay938@gmail.com">mauryaabhay938@gmail.com</a></p>
                <p>Instagram: <a href="https://www.instagram.com/the.abhay.maurya/" target="_blank" rel="noopener noreferrer">@the.abhay.maurya</a></p>
                <p>GitHub: <a href="https://github.com/abhay288" target="_blank" rel="noopener noreferrer">github.com/abhay288</a></p>
              </div>
            </section>
          </div>

          <div className="legal-footer-nav">
            <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }}>Terms of Service</a>
            <span>•</span>
            <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}>Contact Developer</a>
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
        .inline-ext {
          display: inline;
          vertical-align: middle;
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
