import React from 'react';
import { Heart, Clock, TrendingUp, WifiOff, Focus, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Clock size={22} />,
      title: 'Quick, Satisfying Sessions',
      desc: 'Engineered for moments of focused problem-solving. Solve a level in 60 seconds on the train or dive deep into a complex world marathon.'
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Progressive Difficulty Curve',
      desc: 'Starts gently with emergent path clarity, gradually introducing intersecting crossings, ice constraints, and grandmaster labyrinth grids.'
    },
    {
      icon: <WifiOff size={22} />,
      title: '100% Offline-Friendly',
      desc: 'Zero mandatory connectivity requirements. No login walls or forced cloud synchronization. Your game, your time, anywhere you go.'
    },
    {
      icon: <Focus size={22} />,
      title: 'Minimal & Focused Experience',
      desc: 'No clutter, aggressive popups, or noisy energy meters. Pure, tactile geometric puzzle solving with crisp haptics and responsive audio.'
    }
  ];

  return (
    <section id="about" className="about-section section-py">
      <div className="container">
        <div className="about-card glass-card">
          <div className="about-header-col">
            <div className="section-tag">
              <Sparkles size={14} />
              <span>The Philosophy</span>
            </div>
            <h2 className="about-headline">Built for People Who Love Puzzles</h2>
            <p className="about-lead">
              Arrow Flow combines simple rules with increasingly challenging puzzles. The goal is easy to understand — but mastering the board requires observation, planning and precision.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-item">
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <h4 className="pillar-title">{p.title}</h4>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }
        .about-card {
          padding: 60px 48px;
        }
        .about-header-col {
          max-width: 760px;
          margin-bottom: 48px;
        }
        .about-headline {
          font-size: 38px;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }
        .about-lead {
          font-size: 19px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 40px;
        }
        .pillar-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .pillar-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--cyan-soft);
          color: var(--cyan);
          border: 1px solid rgba(0, 180, 216, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pillar-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--text-primary);
        }
        .pillar-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .about-card {
            padding: 32px 20px;
          }
          .about-headline {
            font-size: 28px;
          }
          .about-lead {
            font-size: 16px;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
