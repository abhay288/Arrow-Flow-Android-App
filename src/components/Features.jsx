import React from 'react';
import { 
  CheckCircle, 
  Globe, 
  Star, 
  Calendar, 
  Flame, 
  Infinity as InfinityIcon, 
  Lightbulb, 
  WifiOff, 
  Vibrate, 
  Sparkles, 
  Volume2, 
  Coins, 
  Trophy, 
  Activity 
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <CheckCircle size={22} />,
      title: '100 Crafted Levels',
      desc: 'Carefully designed puzzles with progressive difficulty, zero impossible stages, and guaranteed solvability.'
    },
    {
      icon: <Globe size={22} />,
      title: '5 Progressive Worlds',
      desc: 'Journey from First Flow through Crossroads, Complexity, Twisted Paths, and Master Flow mazes.'
    },
    {
      icon: <Star size={22} />,
      title: '3-Star Mastery System',
      desc: 'Plan optimal sequences and achieve move targets to earn maximum stars on every level.'
    },
    {
      icon: <Calendar size={22} />,
      title: 'Daily Puzzle',
      desc: 'A fresh, calendar-seeded puzzle arrives every day to challenge your spatial reasoning.'
    },
    {
      icon: <Flame size={22} />,
      title: 'Daily Streaks',
      desc: 'Maintain daily solving streaks to earn bonus Flow Coins and keep your mind razor-sharp.'
    },
    {
      icon: <InfinityIcon size={22} />,
      title: 'Endless Mode',
      desc: 'Enjoy procedural zen puzzle solving with infinite stages and scalable board complexity.'
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Smart Hint System',
      desc: 'Never get stuck forever. Hints gently analyze the current board and reveal an unobstructed candidate.'
    },
    {
      icon: <WifiOff size={22} />,
      title: 'Offline Gameplay',
      desc: '100% playable without an internet connection. Progress, stars, and coins save locally on your device.'
    },
    {
      icon: <Vibrate size={22} />,
      title: 'Haptic Feedback',
      desc: 'Feel crisp, tactile feedback on launches, impacts, blocked shakes, and victory celebrations.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Particle Effects',
      desc: 'Dynamic slipstream particles and glowing energy trails highlight every successful arrow escape.'
    },
    {
      icon: <Volume2 size={22} />,
      title: 'Sound Effects',
      desc: 'Crisp audio design tuned for rewarding puzzle solving with easy mute controls.'
    },
    {
      icon: <Coins size={22} />,
      title: 'Coin & Reward System',
      desc: 'Earn Flow Coins through stage completions and achievements to redeem for hints and undos.'
    },
    {
      icon: <Trophy size={22} />,
      title: 'Achievements',
      desc: 'Unlock over 10 distinct trophies commemorating speed, mastery, streaks, and milestone solves.'
    },
    {
      icon: <Activity size={22} />,
      title: 'Smooth Animations',
      desc: 'Engineered for smooth 60 FPS rendering with responsive spring dampening and seamless transitions.'
    }
  ];

  return (
    <section id="features" className="features-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Full Feature Set</span>
          </div>
          <h2 className="section-title">Crafted for Pure Puzzle Flow</h2>
          <p className="section-subtitle">
            Every detail is tailored to deliver a rewarding, distraction-free spatial puzzle experience.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((f, i) => (
            <div key={i} className="glass-card feature-card">
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          position: relative;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .feature-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
        }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 180, 216, 0.4);
          box-shadow: var(--shadow-lg);
        }
        .feature-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--cyan-soft);
          color: var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid rgba(0, 180, 216, 0.2);
        }
        .feature-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        .feature-desc {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-secondary);
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-card {
            padding: 22px 20px;
          }
        }
      `}</style>
    </section>
  );
}
