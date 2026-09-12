import React, { useState } from 'react';
import { 
  Smartphone, 
  Home, 
  Gamepad2, 
  Layers, 
  Trophy, 
  Calendar, 
  Infinity as InfinityIcon, 
  Settings as SettingsIcon,
  Star,
  Heart,
  RotateCcw,
  Lightbulb,
  Coins,
  ChevronRight,
  Flame,
  Volume2,
  Vibrate,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Lock,
  Check
} from 'lucide-react';

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState('home');

  const screens = [
    {
      id: 'home',
      label: 'Home Screen',
      icon: <Home size={18} />,
      title: 'Polished Central Hub',
      desc: 'Seamless access to campaign progression, daily puzzles, endless zen mode, and coin balances.',
      renderMockup: () => (
        <div className="phone-screen phone-home">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="phone-nav-bar">
            <div className="coin-chip">
              <Coins size={14} color="#F59E0B" />
              <span>450</span>
            </div>
            <div className="profile-chip">
              <Star size={14} color="#00E5FF" fill="#00E5FF" />
              <span>Lv. 18</span>
            </div>
          </div>

          <div className="home-brand-area">
            <img src="/logo.png" alt="Arrow Flow" className="mock-logo" />
            <h2 className="mock-brand-title">Arrow Flow</h2>
            <p className="mock-brand-sub">Clear the path. Master the flow.</p>
          </div>

          <div className="home-action-card">
            <button className="mock-play-btn">
              <span>CONTINUE CAMPAIGN</span>
              <small>Level 18 • Crossroads</small>
            </button>
          </div>

          <div className="home-modes-row">
            <div className="mock-mini-card">
              <Calendar size={18} color="#F59E0B" />
              <span>Daily Challenge</span>
              <small>🔥 4 Day Streak</small>
            </div>
            <div className="mock-mini-card">
              <InfinityIcon size={18} color="#A855F7" />
              <span>Endless Flow</span>
              <small>Zen Mode</small>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gameplay',
      label: 'Core Gameplay',
      icon: <Gamepad2 size={18} />,
      title: 'Tactile Arrow Puzzle HUD',
      desc: 'High-refresh custom canvas board with responsive path evaluation, life counter, moves target, and particle trails.',
      renderMockup: () => (
        <div className="phone-screen phone-gameplay">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="game-hud">
            <div className="hud-left">
              <span className="level-badge">LEVEL 14</span>
              <div className="stars-mini">
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
              </div>
            </div>
            <div className="hud-right">
              <div className="lives-badge">
                <Heart size={14} fill="#F43F5E" color="#F43F5E" />
                <span>2 Lives</span>
              </div>
            </div>
          </div>

          {/* 5x5 Mock Gameplay Board */}
          <div className="mock-board-5x5">
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>

            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell highlight-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>

            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell cleared-cell"></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>

            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell cleared-cell"></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>

            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
          </div>

          <div className="game-controls-bar">
            <button className="control-btn"><RotateCcw size={16} /><span>Undo</span></button>
            <div className="moves-counter"><span>Moves</span><strong>12 / 16</strong></div>
            <button className="control-btn"><Lightbulb size={16} /><span>Hint</span></button>
          </div>
        </div>
      )
    },
    {
      id: 'levels',
      label: 'Level Selection',
      icon: <Layers size={18} />,
      title: '5 Worlds Progression Carousel',
      desc: 'Clean world tabs from First Flow to Master Flow, star counts, stage unlocks, and difficulty progression.',
      renderMockup: () => (
        <div className="phone-screen phone-levels">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="levels-title-row">
            <h3>Campaign Worlds</h3>
            <span className="total-stars"><Star size={14} fill="#F59E0B" color="#F59E0B" /> 52/60</span>
          </div>

          <div className="world-tabs-row">
            <span className="w-tab active">W1: First Flow</span>
            <span className="w-tab">W2: Crossroads</span>
            <span className="w-tab">W3: Complexity</span>
          </div>

          <div className="levels-matrix-mock">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
              <div key={num} className={`level-box ${num <= 14 ? 'unlocked' : 'locked'}`}>
                <span className="lvl-num">{num}</span>
                {num <= 14 ? (
                  <div className="stars-row">
                    <Star size={8} fill="#F59E0B" color="#F59E0B" />
                    <Star size={8} fill="#F59E0B" color="#F59E0B" />
                    <Star size={8} fill={num < 12 ? '#F59E0B' : '#334155'} color={num < 12 ? '#F59E0B' : '#334155'} />
                  </div>
                ) : (
                  <Lock size={12} color="#64748B" />
                )}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: <Trophy size={18} />,
      title: 'Milestone Trophies & Rewards',
      desc: 'Track mastery badges, unlock bonus Flow Coins, and commemorate flawless multi-stage solutions.',
      renderMockup: () => (
        <div className="phone-screen phone-achieve">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="levels-title-row">
            <h3>Achievements</h3>
            <span className="trophy-count">🏆 6/12</span>
          </div>

          <div className="achieve-list">
            <div className="achieve-item completed">
              <div className="achieve-icon-box"><Check size={16} color="#10B981" /></div>
              <div className="achieve-meta">
                <strong>First Flow Master</strong>
                <small>Clear all 20 levels in World 1</small>
              </div>
              <span className="coin-award">+100 🪙</span>
            </div>

            <div className="achieve-item completed">
              <div className="achieve-icon-box"><Check size={16} color="#10B981" /></div>
              <div className="achieve-meta">
                <strong>Flawless Precision</strong>
                <small>Solve 5 levels with 0 blocked moves</small>
              </div>
              <span className="coin-award">+75 🪙</span>
            </div>

            <div className="achieve-item in-progress">
              <div className="achieve-icon-box"><Trophy size={16} color="#A855F7" /></div>
              <div className="achieve-meta">
                <strong>Daily Veteran</strong>
                <small>Complete 7 consecutive daily puzzles (4/7)</small>
                <div className="progress-bar-mock"><div className="pb-fill" style={{ width: '57%' }}></div></div>
              </div>
              <span className="coin-award locked">+150 🪙</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'daily',
      label: 'Daily Puzzle',
      icon: <Calendar size={18} />,
      title: 'Seeded 24-Hour Brain Teaser',
      desc: 'A synchronized challenge updated each morning to challenge spatial reasoning and build streaks.',
      renderMockup: () => (
        <div className="phone-screen phone-daily">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="levels-title-row">
            <h3>Daily Puzzle</h3>
            <div className="streak-chip">
              <Flame size={14} color="#F43F5E" fill="#F43F5E" />
              <span>4 Days</span>
            </div>
          </div>

          <div className="daily-calendar-mock">
            <div className="day-dot done">M</div>
            <div className="day-dot done">T</div>
            <div className="day-dot done">W</div>
            <div className="day-dot current">T</div>
            <div className="day-dot">F</div>
            <div className="day-dot">S</div>
            <div className="day-dot">S</div>
          </div>

          <div className="daily-board-preview">
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
          </div>

          <button className="mock-play-btn" style={{ marginTop: '16px' }}>
            <span>SOLVE TODAY'S PUZZLE</span>
          </button>
        </div>
      )
    },
    {
      id: 'endless',
      label: 'Endless Mode',
      icon: <InfinityIcon size={18} />,
      title: 'Infinite Zen Relaxation',
      desc: 'Procedural arrow grids generated automatically with adaptive scale for uninterrupted tranquil flow.',
      renderMockup: () => (
        <div className="phone-screen phone-endless">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="levels-title-row">
            <h3>Endless Flow</h3>
            <span className="zen-tag">Stage 24</span>
          </div>

          <div className="endless-metric-card">
            <small>Current Zen Streak</small>
            <strong>18 Stages Cleared</strong>
          </div>

          <div className="mock-board-5x5" style={{ opacity: 0.9 }}>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowUp size={16} color="#38BDF8" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
            <div className="mock-cell cleared-cell"></div>
            <div className="mock-cell"><ArrowDown size={16} color="#A855F7" /></div>
            <div className="mock-cell"><ArrowLeft size={16} color="#F43F5E" /></div>
            <div className="mock-cell"><ArrowRight size={16} color="#10B981" /></div>
          </div>

          <div className="endless-footer-tip">
            <small>Procedural generation ensures zero duplicate puzzles.</small>
          </div>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={18} />,
      title: 'Preferences & Controls',
      desc: 'Audio toggles, crisp haptic controls, dark & light theme adjustments, progress reset, and developer info.',
      renderMockup: () => (
        <div className="phone-screen phone-settings">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="bar-icons"><span>5G</span><span>100%</span></div>
          </div>
          <div className="levels-title-row">
            <h3>Settings</h3>
            <span className="version-tag">v1.0.0</span>
          </div>

          <div className="settings-list">
            <div className="setting-row">
              <div className="setting-meta">
                <Volume2 size={16} color="#00E5FF" />
                <span>Sound Effects</span>
              </div>
              <span className="toggle-pill active">ON</span>
            </div>

            <div className="setting-row">
              <div className="setting-meta">
                <Vibrate size={16} color="#00E5FF" />
                <span>Haptic Feedback</span>
              </div>
              <span className="toggle-pill active">ON</span>
            </div>

            <div className="setting-row">
              <div className="setting-meta">
                <Star size={16} color="#00E5FF" />
                <span>Theme Mode</span>
              </div>
              <span className="theme-indicator">Auto (System)</span>
            </div>

            <div className="setting-row">
              <div className="setting-meta">
                <RotateCcw size={16} color="#F43F5E" />
                <span style={{ color: '#F43F5E' }}>Reset Game Progress</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentScreen = screens.find(s => s.id === activeTab) || screens[0];

  return (
    <section id="screenshots" className="screenshots-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>Visual Showcase</span>
          </div>
          <h2 className="section-title">A Look Inside Arrow Flow</h2>
          <p className="section-subtitle">
            Engineered with high-contrast geometric aesthetics, smooth canvas rendering, and tactical clarity.
          </p>
        </div>

        {/* Screen Selection Tabs (Desktop + Mobile horizontal scroll) */}
        <div className="screen-tabs-bar">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`screen-tab-btn ${activeTab === s.id ? 'active' : ''}`}
            >
              <span className="tab-icon">{s.icon}</span>
              <span className="tab-label">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Featured Showcase Layout */}
        <div className="showcase-spotlight glass-card">
          <div className="spotlight-details">
            <div className="spotlight-badge">{currentScreen.label}</div>
            <h3 className="spotlight-title">{currentScreen.title}</h3>
            <p className="spotlight-desc">{currentScreen.desc}</p>
            <div className="spotlight-features">
              <div className="spotlight-bullet">
                <div className="bullet-dot"></div>
                <span>60 FPS smooth physics & custom canvas</span>
              </div>
              <div className="spotlight-bullet">
                <div className="bullet-dot"></div>
                <span>Dark & Light theme compliance</span>
              </div>
              <div className="spotlight-bullet">
                <div className="bullet-dot"></div>
                <span>100% offline data sandbox storage</span>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '28px', alignSelf: 'flex-start' }}
            >
              <span>Try on Android</span>
            </a>
          </div>

          {/* Center Phone Mockup Frame */}
          <div className="spotlight-mockup-wrapper">
            <div className="phone-bezel">
              <div className="phone-island"></div>
              {currentScreen.renderMockup()}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .screenshots-section {
          position: relative;
        }
        .screen-tabs-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 24px;
          margin-bottom: 32px;
          scrollbar-width: none;
        }
        .screen-tabs-bar::-webkit-scrollbar {
          display: none;
        }
        .screen-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-full);
          background: rgba(var(--surface-rgb), 0.7);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .screen-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--cyan);
        }
        .screen-tab-btn.active {
          background: var(--cyan-soft);
          border-color: var(--cyan);
          color: var(--cyan);
          box-shadow: 0 4px 16px var(--cyan-glow);
        }

        /* Showcase Spotlight */
        .showcase-spotlight {
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: center;
        }
        .spotlight-details {
          display: flex;
          flex-direction: column;
        }
        .spotlight-badge {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--cyan);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .spotlight-title {
          font-size: 32px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .spotlight-desc {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }
        .spotlight-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .spotlight-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-primary);
        }
        .bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 8px var(--cyan);
        }

        /* Phone Mockup Frame */
        .spotlight-mockup-wrapper {
          display: flex;
          justify-content: center;
        }
        .phone-bezel {
          width: 300px;
          height: 560px;
          background: #000000;
          border-radius: 44px;
          border: 10px solid #1E293B;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4), 0 0 0 2px #334155;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .phone-island {
          width: 80px;
          height: 18px;
          background: #000000;
          border-radius: 12px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .phone-screen {
          flex: 1;
          background: #0A0E17;
          color: #F8FAFC;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .phone-status-bar {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #94A3B8;
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .bar-icons {
          display: flex;
          gap: 6px;
        }

        /* Mock UI Elements */
        .phone-nav-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .coin-chip, .profile-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #172033;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid #222F47;
        }
        .home-brand-area {
          text-align: center;
          margin: 16px 0 24px;
        }
        .mock-logo {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          margin: 0 auto 12px;
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
        }
        .mock-brand-title {
          font-size: 20px;
          color: #F8FAFC;
          margin-bottom: 4px;
        }
        .mock-brand-sub {
          font-size: 11px;
          color: #94A3B8;
        }
        .mock-play-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #00E5FF 0%, #0099FF 100%);
          color: #031024;
          border-radius: 16px;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0, 229, 255, 0.3);
        }
        .mock-play-btn small {
          font-size: 10px;
          opacity: 0.85;
          margin-top: 2px;
        }
        .home-modes-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 14px;
        }
        .mock-mini-card {
          background: #121927;
          border: 1px solid #222F47;
          border-radius: 14px;
          padding: 12px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
        }
        .mock-mini-card span {
          font-size: 11px;
          font-weight: 700;
        }
        .mock-mini-card small {
          font-size: 9px;
          color: #94A3B8;
        }

        /* Gameplay mock */
        .game-hud {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .level-badge {
          font-size: 11px;
          font-weight: 800;
          color: #00E5FF;
        }
        .stars-mini {
          display: flex;
          gap: 2px;
          margin-top: 2px;
        }
        .lives-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          color: #F43F5E;
          background: rgba(244, 63, 94, 0.1);
          padding: 4px 8px;
          border-radius: 8px;
        }
        .mock-board-5x5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
          background: #0F1523;
          border: 1px solid #222F47;
          border-radius: 16px;
          padding: 10px;
          margin-bottom: 16px;
        }
        .mock-cell {
          aspect-ratio: 1;
          background: #172033;
          border: 1px solid #222F47;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mock-cell.highlight-cell {
          border-color: #00E5FF;
          background: #1A2840;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
        }
        .mock-cell.cleared-cell {
          background: transparent;
          border-color: transparent;
        }
        .game-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #121927;
          padding: 8px 12px;
          border-radius: 14px;
          border: 1px solid #222F47;
          margin-top: auto;
        }
        .control-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: #94A3B8;
        }
        .moves-counter {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 9px;
          color: #94A3B8;
        }
        .moves-counter strong {
          font-size: 11px;
          color: #F8FAFC;
        }

        /* Levels mock */
        .levels-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .levels-title-row h3 {
          font-size: 14px;
        }
        .total-stars, .trophy-count, .streak-chip, .zen-tag, .version-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          background: #172033;
          border-radius: 8px;
        }
        .world-tabs-row {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
          overflow-x: hidden;
        }
        .w-tab {
          font-size: 9px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #121927;
          color: #94A3B8;
        }
        .w-tab.active {
          background: #00E5FF;
          color: #031024;
          font-weight: 700;
        }
        .levels-matrix-mock {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }
        .level-box {
          aspect-ratio: 1;
          background: #121927;
          border: 1px solid #222F47;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .level-box.unlocked {
          border-color: rgba(0, 229, 255, 0.4);
        }
        .lvl-num {
          font-size: 10px;
          font-weight: 800;
        }
        .stars-row {
          display: flex;
          gap: 1px;
        }

        /* Achievements mock */
        .achieve-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .achieve-item {
          background: #121927;
          border: 1px solid #222F47;
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .achieve-icon-box {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: #172033;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .achieve-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .achieve-meta strong {
          font-size: 10px;
        }
        .achieve-meta small {
          font-size: 8px;
          color: #94A3B8;
        }
        .coin-award {
          font-size: 9px;
          font-weight: 700;
          color: #F59E0B;
        }
        .progress-bar-mock {
          height: 3px;
          background: #1E293B;
          border-radius: 2px;
          margin-top: 3px;
          overflow: hidden;
        }
        .pb-fill {
          height: 100%;
          background: #A855F7;
        }

        /* Daily Mock */
        .daily-calendar-mock {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
          padding: 6px 10px;
          background: #121927;
          border-radius: 8px;
        }
        .day-dot {
          font-size: 9px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
        }
        .day-dot.done {
          background: #10B981;
          color: #031024;
          font-weight: 700;
        }
        .day-dot.current {
          border: 2px solid #F43F5E;
          color: #F8FAFC;
          font-weight: 800;
        }
        .daily-board-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          background: #0F1523;
          padding: 10px;
          border-radius: 12px;
        }

        /* Endless Mock */
        .endless-metric-card {
          background: #121927;
          border: 1px solid #222F47;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          margin-bottom: 14px;
        }
        .endless-metric-card small {
          display: block;
          font-size: 9px;
          color: #94A3B8;
        }
        .endless-metric-card strong {
          font-size: 13px;
          color: #A855F7;
        }
        .endless-footer-tip {
          text-align: center;
          font-size: 9px;
          color: #64748B;
          margin-top: auto;
        }

        /* Settings Mock */
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .setting-row {
          background: #121927;
          border: 1px solid #222F47;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .setting-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
        }
        .toggle-pill {
          font-size: 9px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          background: #00E5FF;
          color: #031024;
        }
        .theme-indicator {
          font-size: 9px;
          color: #94A3B8;
        }

        @media (max-width: 900px) {
          .showcase-spotlight {
            grid-template-columns: 1fr;
            padding: 28px 20px;
          }
          .spotlight-mockup-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
