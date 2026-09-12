import React, { useState } from 'react';
import { Sparkles, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function InteractiveBoard() {
  // 4x4 curated solvable preview puzzle
  const initialArrows = [
    { id: 1, r: 0, c: 0, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 2, r: 0, c: 1, dir: 'right', color: '#10B981', cleared: false },
    { id: 3, r: 0, c: 2, dir: 'right', color: '#10B981', cleared: false },
    { id: 4, r: 0, c: 3, dir: 'up', color: '#38BDF8', cleared: false },

    { id: 5, r: 1, c: 0, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 6, r: 1, c: 1, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 7, r: 1, c: 2, dir: 'down', color: '#A855F7', cleared: false },
    { id: 8, r: 1, c: 3, dir: 'right', color: '#10B981', cleared: false },

    { id: 9, r: 2, c: 0, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 10, r: 2, c: 1, dir: 'down', color: '#A855F7', cleared: false },
    { id: 11, r: 2, c: 2, dir: 'up', color: '#38BDF8', cleared: false },
    { id: 12, r: 2, c: 3, dir: 'right', color: '#10B981', cleared: false },

    { id: 13, r: 3, c: 0, dir: 'down', color: '#A855F7', cleared: false },
    { id: 14, r: 3, c: 1, dir: 'down', color: '#A855F7', cleared: false },
    { id: 15, r: 3, c: 2, dir: 'left', color: '#F43F5E', cleared: false },
    { id: 16, r: 3, c: 3, dir: 'down', color: '#A855F7', cleared: false },
  ];

  const [arrows, setArrows] = useState(initialArrows);
  const [movesCount, setMovesCount] = useState(0);
  const [shakingId, setShakingId] = useState(null);
  const [lastAction, setLastAction] = useState('Select an arrow to begin.');
  const [particles, setParticles] = useState([]);

  const isPathClear = (arrow) => {
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

  const spawnParticles = (r, c, color) => {
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      r,
      c,
      color,
      angle: (i * 60 * Math.PI) / 180,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 600);
  };

  const handleArrowTap = (arrow) => {
    if (arrow.cleared) return;

    if (isPathClear(arrow)) {
      setMovesCount(prev => prev + 1);
      setArrows(prev => prev.map(a => a.id === arrow.id ? { ...a, cleared: true } : a));
      setLastAction(`Arrow cleared pointing ${arrow.dir.toUpperCase()}! Path was unobstructed.`);
      spawnParticles(arrow.r, arrow.c, arrow.color);
    } else {
      setShakingId(arrow.id);
      setLastAction(`Blocked move! An obstacle is preventing the arrow from moving ${arrow.dir}.`);
      setTimeout(() => setShakingId(null), 400);
    }
  };

  const handleReset = () => {
    setArrows(initialArrows);
    setMovesCount(0);
    setLastAction('Board reset. Find the unobstructed sequence!');
  };

  const clearedCount = arrows.filter(a => a.cleared).length;
  const isComplete = clearedCount === arrows.length;

  return (
    <section className="preview-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Interactive Demo</span>
          </div>
          <h2 className="section-title">Every Move Changes the Board</h2>
          <p className="section-subtitle">
            Experience the instant satisfaction of unblocking arrows, opening fresh corridors, and clearing the flow.
          </p>
        </div>

        <div className="preview-interactive-card glass-card">
          <div className="preview-layout">
            {/* Control Panel / Metrics */}
            <div className="preview-hud-panel">
              <div className="hud-metric-row">
                <div className="hud-stat-card">
                  <span className="stat-label">MOVES PLAYED</span>
                  <strong className="stat-val">{movesCount}</strong>
                </div>
                <div className="hud-stat-card">
                  <span className="stat-label">REMAINING</span>
                  <strong className="stat-val">{arrows.length - clearedCount}</strong>
                </div>
              </div>

              <div className="action-feedback-box">
                <span className="feedback-text">{lastAction}</span>
              </div>

              {isComplete && (
                <div className="victory-badge-box">
                  <CheckCircle2 size={24} color="#10B981" />
                  <div>
                    <strong>LEVEL CLEARED!</strong>
                    <p>Flawless spatial deduction. All arrows escaped.</p>
                  </div>
                </div>
              )}

              <div className="hud-controls-row">
                <button onClick={handleReset} className="btn btn-secondary reset-preview-btn">
                  <RotateCcw size={16} />
                  <span>Reset Board</span>
                </button>
              </div>

              <div className="tips-box">
                <p><strong>Pro Tip:</strong> Removing an arrow never blocks another arrow. It only creates more open freedom for trapped pieces.</p>
              </div>
            </div>

            {/* Interactive Board Surface */}
            <div className="preview-board-surface">
              <div className="board-decor-halo"></div>
              <div className="actual-board-mesh">
                {arrows.map((arrow) => (
                  <button
                    key={arrow.id}
                    onClick={() => handleArrowTap(arrow)}
                    disabled={arrow.cleared}
                    className={`preview-cell ${arrow.cleared ? 'cleared' : ''} ${shakingId === arrow.id ? 'shake-err' : ''}`}
                    style={{ '--arrow-tint': arrow.color }}
                    aria-label={`Arrow at row ${arrow.r} col ${arrow.c}`}
                  >
                    {!arrow.cleared && (
                      <div className="arrow-glyph" style={{ color: arrow.color }}>
                        {arrow.dir === 'up' && <ArrowUp size={26} strokeWidth={3} />}
                        {arrow.dir === 'down' && <ArrowDown size={26} strokeWidth={3} />}
                        {arrow.dir === 'left' && <ArrowLeft size={26} strokeWidth={3} />}
                        {arrow.dir === 'right' && <ArrowRight size={26} strokeWidth={3} />}
                      </div>
                    )}
                  </button>
                ))}

                {/* Particle burst animation */}
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className="particle-dot"
                    style={{
                      '--dx': `${Math.cos(p.angle) * 35}px`,
                      '--dy': `${Math.sin(p.angle) * 35}px`,
                      '--p-color': p.color,
                      gridColumn: p.c + 1,
                      gridRow: p.r + 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .preview-section {
          position: relative;
        }
        .preview-interactive-card {
          padding: 40px;
        }
        .preview-layout {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          align-items: center;
        }
        .preview-hud-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hud-metric-row {
          display: flex;
          gap: 16px;
        }
        .hud-stat-card {
          flex: 1;
          background: rgba(var(--surface-rgb), 0.8);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
        }
        .stat-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .stat-val {
          font-size: 28px;
          font-family: var(--font-heading);
          color: var(--cyan);
        }
        .action-feedback-box {
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          min-height: 56px;
          display: flex;
          align-items: center;
        }
        .feedback-text {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .victory-badge-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          color: var(--text-primary);
          animation: pulse 1s infinite alternate;
        }
        .victory-badge-box strong {
          color: #10B981;
          font-size: 14px;
        }
        .victory-badge-box p {
          font-size: 13px;
          margin-top: 2px;
        }
        .hud-controls-row {
          display: flex;
        }
        .reset-preview-btn {
          padding: 12px 24px;
          font-size: 14px;
        }
        .tips-box {
          border-left: 3px solid var(--cyan);
          padding-left: 14px;
          font-size: 13px;
          color: var(--text-muted);
        }
        .tips-box strong {
          color: var(--text-primary);
        }

        /* Board Surface */
        .preview-board-surface {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .board-decor-halo {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
          filter: blur(30px);
          z-index: 0;
          pointer-events: none;
        }
        .actual-board-mesh {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          background: #0F1523;
          border: 1px solid #222F47;
          border-radius: 24px;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        .preview-cell {
          aspect-ratio: 1;
          background: #172033;
          border: 1px solid #222F47;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, border-color 0.2s ease;
        }
        .preview-cell:hover:not(.cleared) {
          transform: scale(1.08);
          border-color: var(--arrow-tint);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
        }
        .preview-cell.cleared {
          background: #0B101D;
          border-color: #141C2B;
          opacity: 0.3;
          cursor: default;
        }
        .shake-err {
          animation: shakeError 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          border-color: #F43F5E !important;
          background: rgba(244, 63, 94, 0.2) !important;
        }
        @keyframes shakeError {
          10%, 90% { transform: translate3d(-3px, 0, 0); }
          20%, 80% { transform: translate3d(4px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-5px, 0, 0); }
          40%, 60% { transform: translate3d(5px, 0, 0); }
        }
        .particle-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--p-color);
          box-shadow: 0 0 10px var(--p-color);
          pointer-events: none;
          align-self: center;
          justify-self: center;
          animation: particleFly 0.6s ease-out forwards;
        }
        @keyframes particleFly {
          0% { transform: translate(0, 0) scale(1.4); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
        }

        @media (max-width: 960px) {
          .preview-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .actual-board-mesh {
            max-width: 320px;
          }
          .preview-interactive-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
