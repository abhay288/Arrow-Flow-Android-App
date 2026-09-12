import React from 'react';
import { Eye, GitCommit, Sparkles, Layers } from 'lucide-react';

export default function GameIntro() {
  const steps = [
    {
      step: '01',
      title: 'READ THE BOARD',
      description: 'Understand the arrows and their paths. Scan the grid perimeter and inspect each directional trajectory.',
      icon: <Eye size={28} className="step-icon-svg" />,
      accent: 'var(--cyan)',
      glow: 'var(--cyan-glow)'
    },
    {
      step: '02',
      title: 'FIND THE ORDER',
      description: 'Every puzzle has a sequence. Discover it. Unlocking one arrow opens exit corridors for subsequent moves.',
      icon: <GitCommit size={28} className="step-icon-svg" />,
      accent: 'var(--dir-down)', // Purple
      glow: 'rgba(168, 85, 247, 0.25)'
    },
    {
      step: '03',
      title: 'CLEAR THE FLOW',
      description: 'Make the right moves and complete the level. Trigger satisfying slipstreams and achieve 3-star perfection.',
      icon: <Sparkles size={28} className="step-icon-svg" />,
      accent: 'var(--dir-right)', // Emerald
      glow: 'rgba(16, 185, 129, 0.25)'
    }
  ];

  return (
    <section className="intro-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Core Concept</span>
          </div>
          <h2 className="section-title">A Puzzle That Makes You Think</h2>
          <p className="section-subtitle">
            Arrows can only move when their path is completely clear.
            Find the right order, avoid blocked moves, and clear the entire board.
          </p>
        </div>

        <div className="intro-cards-grid">
          {steps.map((item) => (
            <div 
              key={item.step} 
              className="glass-card intro-card" 
              style={{ '--card-accent': item.accent, '--card-glow': item.glow }}
            >
              <div className="card-top-row">
                <div className="step-badge">{item.step}</div>
                <div className="step-icon-box">{item.icon}</div>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .intro-section {
          position: relative;
        }
        .intro-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .intro-card {
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .intro-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-accent);
          opacity: 0.8;
        }
        .intro-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px var(--card-glow);
          border-color: var(--card-accent);
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .step-badge {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 800;
          color: var(--card-accent);
          letter-spacing: 0.05em;
          background: rgba(var(--surface-rgb), 0.5);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
        }
        .step-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(var(--surface-rgb), 0.9);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--card-accent);
        }
        .card-title {
          font-size: 20px;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .card-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        @media (max-width: 900px) {
          .intro-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
