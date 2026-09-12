import React, { useState } from 'react';
import { Play, Sparkles, Compass, ShieldCheck, WifiOff, Calendar, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

export default function Hero() {
  // A sleek 4x4 interactive puzzle board matching Arrow Flow's exact mechanics
  const initialArrows = [
    { id: 1, r: 0, c: 0, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 2, r: 0, c: 1, dir: 'right', color: '#10B981', cleared: false },
    { id: 3, r: 0, c: 2, dir: 'down', color: '#A855F7', cleared: false },
    { id: 4, r: 0, c: 3, dir: 'right', color: '#10B981', cleared: false },

    { id: 5, r: 1, c: 0, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 6, r: 1, c: 1, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 7, r: 1, c: 2, dir: 'right', color: '#10B981', cleared: false },
    { id: 8, r: 1, c: 3, dir: 'down', color: '#A855F7', cleared: false },

    { id: 9, r: 2, c: 0, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 10, r: 2, c: 1, dir: 'down', color: '#A855F7', cleared: false },
    { id: 11, r: 2, c: 2, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 12, r: 2, c: 3, dir: 'right', color: '#10B981', cleared: false },

    { id: 13, r: 3, c: 0, dir: 'down', color: '#A855F7', cleared: false },
    { id: 14, r: 3, c: 1, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 15, r: 3, c: 2, dir: 'down', color: '#A855F7', cleared: false },
    { id: 16, r: 3, c: 3, dir: 'down', color: '#A855F7', cleared: false },
  ];

  const [arrows, setArrows] = useState(initialArrows);
  const [blockedId, setBlockedId] = useState(null);
  const [message, setMessage] = useState('Tap an arrow to launch its escape!');

  // Check if arrow has an unobstructed path to the boundary
  const canEscape = (arrow) => {
    const { r, c, dir } = arrow;
    if (dir === 'up') {
      for (let i = r - 1; i >= 0; i--) {
        if (arrows.some(a => a.r === i && a.c === c && !a.cleared)) return false;
      }
      return true;
    }
    if (dir === 'down') {
      for (let i = r + 1; i <= 3; i++) {
        if (arrows.some(a => a.r === i && a.c === c && !a.cleared)) return false;
      }
      return true;
    }
    if (dir === 'left') {
      for (let j = c - 1; j >= 0; j--) {
        if (arrows.some(a => a.r === r && a.c === j && !a.cleared)) return false;
      }
      return true;
    }
    if (dir === 'right') {
      for (let j = c + 1; j <= 3; j++) {
        if (arrows.some(a => a.r === r && a.c === j && !a.cleared)) return false;
      }
      return true;
    }
    return false;
  };

  const handleArrowClick = (arrow) => {
    if (arrow.cleared) return;
    if (canEscape(arrow)) {
      setArrows(prev => prev.map(a => a.id === arrow.id ? { ...a, cleared: true } : a));
      setMessage('Path clear! Arrow escaped smoothly.');
    } else {
      setBlockedId(arrow.id);
      setMessage('Blocked path! Find an arrow with an open exit.');
      setTimeout(() => setBlockedId(null), 500);
    }
  };

  const handleReset = () => {
    setArrows(initialArrows);
    setMessage('Board reset. Find the unobstructed sequence!');
  };

  const remainingCount = arrows.filter(a => !a.cleared).length;

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="section-tag glow-badge">
            <Sparkles size={14} />
            <span>Official Mobile Game</span>
          </div>

          <h1 className="hero-headline">
            Clear the path.<br />
            <span className="gradient-text">Master the flow.</span>
          </h1>

          <p className="hero-description">
            Arrow Flow is a challenging puzzle game where every move matters.
            Read the board, clear the path, and solve each level in the perfect order.
          </p>

          <div className="hero-cta-group">
            <a
              href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-btn-main"
            >
              <Play size={18} fill="currentColor" />
              <span>Play on Google Play</span>
            </a>
            <a
              href="#how-to-play"
              className="btn btn-secondary hero-btn-sub"
            >
              <Compass size={18} />
              <span>Explore the Game</span>
            </a>
          </div>

          {/* Trust & Real Feature Indicators */}
          <div className="hero-indicators">
            <div className="indicator-pill">
              <span className="indicator-dot cyan"></span>
              <strong>100</strong> Crafted Levels
            </div>
            <div className="indicator-pill">
              <span className="indicator-dot purple"></span>
              <strong>5</strong> Worlds
            </div>
            <div className="indicator-pill">
              <WifiOff size={14} className="indicator-icon" />
              Offline Play
            </div>
            <div className="indicator-pill">
              <Calendar size={14} className="indicator-icon" />
              Daily Puzzle
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Board */}
        <div className="hero-visual">
          <div className="hero-board-wrapper">
            <div className="board-decor-glow"></div>
            <div className="board-container">
              {/* Board Header / HUD */}
              <div className="board-hud">
                <div className="hud-badge">
                  <span className="hud-tag">LEVEL 01</span>
                  <span className="hud-world">World 1: First Flow</span>
                </div>
                <div className="hud-status">
                  <span className="hud-counter">{remainingCount} Left</span>
                  <button 
                    onClick={handleReset} 
                    className="hud-reset-btn" 
                    title="Reset Preview Board"
                    aria-label="Reset board"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Interactive 4x4 Grid */}
              <div className="hero-grid">
                {arrows.map((arrow) => (
                  <button
                    key={arrow.id}
                    onClick={() => handleArrowClick(arrow)}
                    disabled={arrow.cleared}
                    className={`grid-cell ${arrow.cleared ? 'cleared' : ''} ${blockedId === arrow.id ? 'shake-blocked' : ''}`}
                    style={{ '--arrow-color': arrow.color }}
                    aria-label={`Arrow pointing ${arrow.dir}`}
                  >
                    {!arrow.cleared && (
                      <div className="arrow-icon-wrapper" style={{ color: arrow.color }}>
                        {arrow.dir === 'up' && <ArrowUp size={24} strokeWidth={3} />}
                        {arrow.dir === 'down' && <ArrowDown size={24} strokeWidth={3} />}
                        {arrow.dir === 'left' && <ArrowLeft size={24} strokeWidth={3} />}
                        {arrow.dir === 'right' && <ArrowRight size={24} strokeWidth={3} />}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Board Footer / Helper */}
              <div className="board-footer">
                <span className="board-tip">{message}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 80px 0 100px;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 60px;
        }
        .hero-headline {
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          line-height: 1.08;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--cyan) 0%, #38BDF8 60%, var(--indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-description {
          font-size: 19px;
          line-height: 1.6;
          max-width: 540px;
          margin-bottom: 36px;
          color: var(--text-secondary);
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .hero-btn-main {
          padding: 16px 32px;
          font-size: 16px;
        }
        .hero-btn-sub {
          padding: 16px 28px;
          font-size: 16px;
        }
        .hero-indicators {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .indicator-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(var(--surface-rgb), 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          font-size: 13px;
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }
        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .indicator-dot.cyan { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
        .indicator-dot.purple { background: var(--purple); box-shadow: 0 0 8px var(--purple); }
        .indicator-icon {
          color: var(--cyan);
        }

        /* Right Column: Hero Visual Board */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .hero-board-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .board-decor-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
          filter: blur(28px);
          z-index: 0;
          pointer-events: none;
        }
        .board-container {
          position: relative;
          z-index: 1;
          background: #0F1523; /* Consistent luxury dark navy board */
          border: 1px solid #222F47;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 24px 60px rgba(10, 14, 23, 0.4), 0 0 0 1px rgba(0, 229, 255, 0.15);
        }
        .board-hud {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid #1E293B;
        }
        .hud-badge {
          display: flex;
          flex-direction: column;
        }
        .hud-tag {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #00E5FF;
        }
        .hud-world {
          font-size: 13px;
          color: #94A3B8;
          font-weight: 500;
        }
        .hud-status {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hud-counter {
          font-size: 12px;
          font-weight: 700;
          color: #F8FAFC;
          background: #1E293B;
          padding: 4px 10px;
          border-radius: 8px;
          border: 1px solid #334155;
        }
        .hud-reset-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1E293B;
          color: #94A3B8;
          border: 1px solid #334155;
          transition: all var(--transition-fast);
        }
        .hud-reset-btn:hover {
          color: #00E5FF;
          border-color: #00E5FF;
        }

        /* 4x4 Grid */
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 18px;
        }
        .grid-cell {
          aspect-ratio: 1;
          background: #172033;
          border: 1px solid #222F47;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.2s ease;
        }
        .grid-cell:hover:not(.cleared) {
          transform: scale(1.06);
          border-color: var(--arrow-color);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .grid-cell.cleared {
          background: #0D131F;
          border-color: #162031;
          cursor: default;
          opacity: 0.35;
        }
        .arrow-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .shake-blocked {
          animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          border-color: #F43F5E !important;
          background: rgba(244, 63, 94, 0.15) !important;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-2px, 0, 0); }
          20%, 80% { transform: translate3d(3px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .board-footer {
          text-align: center;
        }
        .board-tip {
          font-size: 13px;
          color: #94A3B8;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .hero-headline {
            font-size: 44px;
          }
          .hero-description {
            margin: 0 auto 32px;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-indicators {
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding: 40px 0 60px;
          }
          .hero-headline {
            font-size: 34px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100%;
          }
          .grid-cell {
            border-radius: 10px;
          }
          .board-container {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
