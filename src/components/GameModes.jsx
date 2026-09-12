import React from 'react';
import { Compass, Calendar, Infinity as InfinityIcon, Trophy, Flame, Zap, ArrowRight } from 'lucide-react';

export default function GameModes() {
  const modes = [
    {
      id: 'campaign',
      title: 'Campaign Mode',
      tagline: '100 Handcrafted Stages Across 5 Worlds',
      description: 'Journey through progressively designed stages from First Flow to Grandmaster Flow mazes. Learn subtle directional interlocks, special arrow mechanics, and 3-star mastery.',
      badge: '100 LEVELS',
      badgeColor: 'cyan',
      icon: <Compass size={32} />,
      accent: 'var(--cyan)',
      features: ['5 Distinct Worlds', 'Zero impossible levels', 'Stars & Move Targets']
    },
    {
      id: 'daily',
      title: 'Daily Puzzle',
      tagline: 'Fresh Global Challenge Every Single Day',
      description: 'Wake up to a newly seeded challenge synchronized across all players. Solve the daily board, build an unbroken consecutive day streak, and claim bonus Flow Coins.',
      badge: 'DAILY STREAK',
      badgeColor: 'amber',
      icon: <Calendar size={32} />,
      accent: 'var(--amber)',
      features: ['Calendar streak tracking', 'Exclusive daily coin rewards', 'One board every 24 hours']
    },
    {
      id: 'endless',
      title: 'Endless Flow',
      tagline: 'Infinite Procedural Solving Zen',
      description: 'Looking for pure, unhurried tranquility? Dive into procedural puzzles generated on the fly. As your score grows, board dimensions and complexity organically scale.',
      badge: 'INFINITE ZEN',
      badgeColor: 'purple',
      icon: <InfinityIcon size={32} />,
      accent: 'var(--dir-down)',
      features: ['Algorithmic solvability', 'Dynamic board resizing', 'Relaxing distraction-free flow']
    }
  ];

  return (
    <section id="game-modes" className="modes-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Gameplay Experiences</span>
          </div>
          <h2 className="section-title">Diverse Modes for Every Mood</h2>
          <p className="section-subtitle">
            Whether you seek structured mastery, daily brain workouts, or endless relaxation, Arrow Flow has a mode for you.
          </p>
        </div>

        <div className="modes-grid">
          {modes.map((mode) => (
            <div key={mode.id} className="glass-card mode-card" style={{ '--mode-accent': mode.accent }}>
              <div className="mode-header">
                <div className="mode-icon-box">{mode.icon}</div>
                <span className={`mode-badge ${mode.badgeColor}`}>{mode.badge}</span>
              </div>

              <h3 className="mode-title">{mode.title}</h3>
              <p className="mode-tagline">{mode.tagline}</p>
              <p className="mode-description">{mode.description}</p>

              <div className="mode-divider"></div>

              <ul className="mode-features-list">
                {mode.features.map((feat, idx) => (
                  <li key={idx}>
                    <span className="feat-check" style={{ color: mode.accent }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .modes-section {
          position: relative;
        }
        .modes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .mode-card {
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
        }
        .mode-card:hover {
          transform: translateY(-6px);
          border-color: var(--mode-accent);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
        }
        .mode-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .mode-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(var(--surface-rgb), 0.9);
          border: 1px solid var(--border);
          color: var(--mode-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mode-badge {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          border: 1px solid transparent;
        }
        .mode-badge.cyan {
          background: rgba(0, 180, 216, 0.12);
          color: var(--cyan);
          border-color: rgba(0, 180, 216, 0.3);
        }
        .mode-badge.amber {
          background: rgba(245, 158, 11, 0.12);
          color: #F59E0B;
          border-color: rgba(245, 158, 11, 0.3);
        }
        .mode-badge.purple {
          background: rgba(168, 85, 247, 0.12);
          color: #A855F7;
          border-color: rgba(168, 85, 247, 0.3);
        }
        .mode-title {
          font-size: 24px;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .mode-tagline {
          font-size: 14px;
          font-weight: 600;
          color: var(--mode-accent);
          margin-bottom: 16px;
        }
        .mode-description {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .mode-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 20px;
        }
        .mode-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mode-features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-secondary);
        }
        .feat-check {
          font-weight: 900;
        }
        @media (max-width: 960px) {
          .modes-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
