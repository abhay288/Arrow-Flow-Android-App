import React from 'react';
import { 
  Star, 
  Coins, 
  Unlock, 
  Trophy, 
  Flame, 
  Lightbulb, 
  Heart, 
  ArrowRight, 
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export default function Progression() {
  const progressionSteps = [
    { title: 'Solve Level', desc: 'Read paths & clear grid', color: 'var(--cyan)' },
    { title: 'Earn Stars', desc: '1 to 3 stars per stage', color: 'var(--amber)' },
    { title: 'Collect Coins', desc: 'Flow Coins rewarded', color: 'var(--amber)' },
    { title: 'Unlock Progress', desc: 'Worlds & achievements', color: 'var(--dir-down)' },
    { title: 'Master Levels', desc: 'Tackle grandmaster mazes', color: 'var(--dir-right)' }
  ];

  const progressionElements = [
    {
      icon: <Star size={24} color="#F59E0B" fill="#F59E0B" />,
      title: '3-Star Ratings',
      desc: 'Each level challenges you to complete it under move efficiency limits. Earn up to 3 stars to demonstrate spatial perfection.'
    },
    {
      icon: <Coins size={24} color="#F59E0B" />,
      title: 'Flow Coins',
      desc: 'Gather coins by beating stages, conquering daily challenges, and hitting milestones. Use coins to acquire hints and undos.'
    },
    {
      icon: <Unlock size={24} color="#00E5FF" />,
      title: 'World Unlocking',
      desc: 'Progress through 5 worlds. Reaching star thresholds and level targets unlocks advanced worlds with new mechanics like ice and locks.'
    },
    {
      icon: <Trophy size={24} color="#A855F7" />,
      title: 'Achievements',
      desc: 'Over 10 trophies reward dedicated play: first clear, 100% world stars, streak master, and zero-mistake perfection.'
    },
    {
      icon: <Flame size={24} color="#F43F5E" />,
      title: 'Daily Streaks',
      desc: 'Consistency is rewarded. Keep your daily solve streak intact to earn compounding coin bonuses each consecutive day.'
    },
    {
      icon: <Lightbulb size={24} color="#38BDF8" />,
      title: 'Smart Hints',
      desc: 'Spend collected coins to highlight the immediate next viable move if you encounter an especially deceptive maze.'
    },
    {
      icon: <Heart size={24} color="#F43F5E" fill="#F43F5E" />,
      title: 'Tactile Lives',
      desc: 'Start each stage with 2 lives. Need one more attempt? Use an undo or view an optional rewarded video for an extra chance.'
    }
  ];

  return (
    <section className="progression-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <TrendingUp size={14} />
            <span>Reward Loop</span>
          </div>
          <h2 className="section-title">Rewarding & Meaningful Progression</h2>
          <p className="section-subtitle">
            Every move you plan and puzzle you solve moves you forward through our structured mastery loop.
          </p>
        </div>

        {/* Visual Progression Flow */}
        <div className="progression-flow-wrapper glass-card">
          <h3 className="flow-title">The Master Flow Loop</h3>
          <div className="flow-pipeline">
            {progressionSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="pipeline-node">
                  <div className="node-num" style={{ borderColor: step.color, color: step.color }}>
                    0{idx + 1}
                  </div>
                  <div className="node-title">{step.title}</div>
                  <div className="node-desc">{step.desc}</div>
                </div>
                {idx < progressionSteps.length - 1 && (
                  <div className="pipeline-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Progression Elements Grid */}
        <div className="elements-grid">
          {progressionElements.map((elem, idx) => (
            <div key={idx} className="glass-card element-card">
              <div className="element-icon-box">{elem.icon}</div>
              <h4 className="element-title">{elem.title}</h4>
              <p className="element-desc">{elem.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .progression-section {
          position: relative;
        }
        .progression-flow-wrapper {
          padding: 36px 32px;
          margin-bottom: 48px;
          text-align: center;
        }
        .flow-title {
          font-size: 20px;
          margin-bottom: 32px;
          color: var(--text-primary);
        }
        .flow-pipeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .pipeline-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .node-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 800;
          background: rgba(var(--surface-rgb), 0.7);
          margin-bottom: 12px;
        }
        .node-title {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .node-desc {
          font-size: 12px;
          color: var(--text-muted);
        }
        .pipeline-arrow {
          color: var(--cyan);
          opacity: 0.6;
          display: flex;
          align-items: center;
          padding-bottom: 24px;
        }
        .elements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .element-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }
        .element-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(var(--surface-rgb), 0.9);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .element-title {
          font-size: 17px;
          margin-bottom: 8px;
        }
        .element-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .flow-pipeline {
            flex-direction: column;
            gap: 20px;
          }
          .pipeline-arrow {
            transform: rotate(90deg);
            padding: 0;
          }
          .progression-flow-wrapper {
            padding: 24px 18px;
          }
        }
      `}</style>
    </section>
  );
}
