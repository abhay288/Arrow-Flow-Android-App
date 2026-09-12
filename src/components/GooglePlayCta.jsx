import React from 'react';
import { Play, Sparkles, Star, ShieldCheck, DownloadCloud, ArrowUp, ArrowRight, ArrowDown } from 'lucide-react';

export default function GooglePlayCta() {
  return (
    <section className="cta-section section-py">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-glow-decor"></div>
          
          <div className="cta-content">
            <div className="cta-tag">
              <Sparkles size={14} />
              <span>Available Now on Android</span>
            </div>

            <h2 className="cta-heading">Ready to Clear the Path?</h2>
            <p className="cta-subheading">
              Download Arrow Flow and start solving. Enjoy 100 handcrafted campaign puzzles, daily seeded challenges, and pure offline logic gameplay.
            </p>

            <div className="cta-actions">
              <a
                href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cta-btn"
              >
                <Play size={20} fill="currentColor" />
                <span>Get Arrow Flow on Google Play</span>
              </a>
            </div>

            <div className="cta-badges">
              <div className="badge-item">
                <Star size={16} fill="#F59E0B" color="#F59E0B" />
                <span>100% Free to Play</span>
              </div>
              <div className="badge-item">
                <ShieldCheck size={16} color="#00E5FF" />
                <span>No Forced Paywalls</span>
              </div>
              <div className="badge-item">
                <DownloadCloud size={16} color="#10B981" />
                <span>Play Offline Anytime</span>
              </div>
            </div>
          </div>

          {/* Subtle Phone / Game Board Visual */}
          <div className="cta-visual-preview">
            <div className="cta-phone-card">
              <div className="phone-screen-ambient">
                <div className="mini-hud">
                  <span>Arrow Flow</span>
                  <div className="dot-cluster"><span></span><span></span><span></span></div>
                </div>
                <div className="mini-arrows-grid">
                  <div className="m-arrow up"><ArrowUp size={16} /></div>
                  <div className="m-arrow right"><ArrowRight size={16} /></div>
                  <div className="m-arrow down"><ArrowDown size={16} /></div>
                  <div className="m-arrow right"><ArrowRight size={16} /></div>
                  <div className="m-arrow up"><ArrowUp size={16} /></div>
                  <div className="m-arrow down"><ArrowDown size={16} /></div>
                </div>
                <div className="phone-cta-pill">Clear the Flow</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
        }
        .cta-banner {
          position: relative;
          background: linear-gradient(135deg, #0F172A 0%, #080D1A 100%);
          border: 1px solid #1E293B;
          border-radius: var(--radius-xl);
          padding: 64px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }
        .cta-glow-decor {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }
        .cta-content {
          position: relative;
          z-index: 1;
        }
        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(0, 229, 255, 0.12);
          color: #00E5FF;
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .cta-heading {
          font-size: 44px;
          font-weight: 900;
          color: #F8FAFC;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .cta-subheading {
          font-size: 18px;
          line-height: 1.6;
          color: #94A3B8;
          max-width: 580px;
          margin-bottom: 36px;
        }
        .cta-actions {
          display: flex;
          margin-bottom: 32px;
        }
        .cta-btn {
          padding: 18px 36px;
          font-size: 16px;
        }
        .cta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: #CBD5E1;
        }

        /* Subtle phone visual */
        .cta-visual-preview {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .cta-phone-card {
          width: 220px;
          background: #121927;
          border: 6px solid #1E293B;
          border-radius: 32px;
          padding: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 255, 0.2);
          transform: rotate(3deg);
          transition: transform 0.3s ease;
        }
        .cta-phone-card:hover {
          transform: rotate(0deg) scale(1.04);
        }
        .phone-screen-ambient {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .mini-hud {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #94A3B8;
          font-weight: 700;
        }
        .dot-cluster {
          display: flex;
          gap: 3px;
        }
        .dot-cluster span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00E5FF;
        }
        .mini-arrows-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 100%;
          background: #0B101D;
          padding: 10px;
          border-radius: 12px;
          border: 1px solid #1E293B;
        }
        .m-arrow {
          aspect-ratio: 1;
          background: #151E30;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .m-arrow.up { color: #38BDF8; }
        .m-arrow.right { color: #10B981; }
        .m-arrow.down { color: #A855F7; }
        .phone-cta-pill {
          background: rgba(0, 229, 255, 0.15);
          color: #00E5FF;
          font-size: 11px;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        @media (max-width: 900px) {
          .cta-banner {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            text-align: center;
          }
          .cta-subheading {
            margin: 0 auto 32px;
          }
          .cta-actions {
            justify-content: center;
          }
          .cta-badges {
            justify-content: center;
          }
          .cta-visual-preview {
            margin-top: 16px;
          }
        }
        @media (max-width: 600px) {
          .cta-heading {
            font-size: 32px;
          }
          .cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
