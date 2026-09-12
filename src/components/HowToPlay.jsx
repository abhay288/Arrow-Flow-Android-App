import React, { useState } from 'react';
import { Search, Touchpad, CheckCircle2, AlertTriangle, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, Heart, RotateCcw } from 'lucide-react';

export default function HowToPlay() {
  // Interactive mini tutorial board: 3x3 grid demonstrating steps
  const tutorialInitial = [
    { id: 'a', r: 0, c: 0, dir: 'up', cleared: false, clearable: true, label: 'Free' },
    { id: 'b', r: 0, c: 1, dir: 'down', cleared: false, clearable: false, label: 'Blocked by C' },
    { id: 'c', r: 1, c: 1, dir: 'right', cleared: false, clearable: true, label: 'Free to Right' },
    { id: 'd', r: 2, c: 0, dir: 'left', cleared: false, clearable: true, label: 'Free to Left' },
  ];

  const [tState, setTState] = useState(tutorialInitial);
  const [demoLives, setDemoLives] = useState(2);
  const [demoFeedback, setDemoFeedback] = useState('Select Arrow A, C, or D (they have clear paths). Avoid Arrow B!');

  const handleDemoClick = (item) => {
    if (item.cleared) return;

    if (item.id === 'b') {
      const cCleared = tState.find(x => x.id === 'c')?.cleared;
      if (!cCleared) {
        setDemoLives(prev => Math.max(0, prev - 1));
        setDemoFeedback('⚠️ Blocked! Arrow B tried to move down into Arrow C. You lost a life!');
        return;
      }
    }

    // Success clear
    setTState(prev => prev.map(x => x.id === item.id ? { ...x, cleared: true } : x));
    setDemoFeedback(`✨ Splendid! Arrow ${item.id.toUpperCase()} cleared the grid.`);
  };

  const handleResetDemo = () => {
    setTState(tutorialInitial);
    setDemoLives(2);
    setDemoFeedback('Board reset! Follow the 3 steps below.');
  };

  return (
    <section id="how-to-play" className="how-to-play-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Search size={14} />
            <span>Interactive Guide</span>
          </div>
          <h2 className="section-title">How to Play Arrow Flow</h2>
          <p className="section-subtitle">
            Master the simple yet exacting rules that govern every move on the board.
          </p>
        </div>

        {/* 3 Step Tutorial Cards */}
        <div className="tutorial-steps-grid">
          <div className="glass-card tutorial-card">
            <div className="step-num-bubble">1</div>
            <div className="tutorial-icon-box">
              <Search size={28} />
            </div>
            <h3 className="tutorial-title">Find an Arrow</h3>
            <p className="tutorial-text">
              Identify an arrow whose path is completely clear. Check that no other arrow or obstacle sits between it and the outer edge of the grid.
            </p>
          </div>

          <div className="glass-card tutorial-card">
            <div className="step-num-bubble">2</div>
            <div className="tutorial-icon-box">
              <Touchpad size={28} />
            </div>
            <h3 className="tutorial-title">Make Your Move</h3>
            <p className="tutorial-text">
              Tap the arrow to move it off the board. It will glide smoothly toward the exit perimeter, leaving a glowing slipstream behind.
            </p>
          </div>

          <div className="glass-card tutorial-card">
            <div className="step-num-bubble">3</div>
            <div className="tutorial-icon-box">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="tutorial-title">Clear the Board</h3>
            <p className="tutorial-text">
              Continue finding the correct sequence until every arrow is cleared. Each solved arrow unlocks paths for arrows trapped behind it.
            </p>
          </div>
        </div>

        {/* Life Warning Banner */}
        <div className="warning-banner glass-card">
          <div className="warning-icon-col">
            <AlertTriangle size={30} className="warning-symbol" />
          </div>
          <div className="warning-content">
            <h4 className="warning-heading">Life & Error Penalty</h4>
            <p className="warning-text">
              <strong>Tap a blocked arrow and you lose a life. Think before you move.</strong> Each stage gives you 2 lives. If an arrow hits another block, the board dampens with tactile feedback and costs 1 life.
            </p>
          </div>
        </div>

        {/* Visual Puzzle Demonstration Playground */}
        <div className="glass-card demo-playground">
          <div className="demo-header">
            <div>
              <h4 className="demo-title">Live Step-by-Step Interactive Test</h4>
              <p className="demo-subtitle">Try tapping the arrows below to test the rules directly:</p>
            </div>
            <div className="demo-hud">
              <div className="demo-lives-chip">
                <Heart size={16} fill="#F43F5E" color="#F43F5E" />
                <span>{demoLives} Lives</span>
              </div>
              <button 
                onClick={handleResetDemo} 
                className="btn-icon" 
                style={{ width: '34px', height: '34px' }}
                title="Reset Demo"
                aria-label="Reset demo board"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          <div className="demo-interactive-row">
            <div className="demo-grid-box">
              <div className="demo-grid">
                {/* 3x3 demonstration representation */}
                {/* Cell 0,0: Arrow A (Up - Free) */}
                <button 
                  onClick={() => handleDemoClick(tState[0])}
                  disabled={tState[0].cleared}
                  className={`demo-cell ${tState[0].cleared ? 'cleared' : 'free'}`}
                  style={{ gridColumn: 1, gridRow: 1 }}
                  title="Arrow A (Up - Free)"
                >
                  {!tState[0].cleared ? (
                    <div className="cell-content">
                      <span className="cell-id">A</span>
                      <ArrowUp size={20} color="#38BDF8" strokeWidth={3} />
                    </div>
                  ) : <span className="cleared-dot"></span>}
                </button>

                {/* Cell 0,1: Arrow B (Down - Blocked by C) */}
                <button 
                  onClick={() => handleDemoClick(tState[1])}
                  disabled={tState[1].cleared}
                  className={`demo-cell ${tState[1].cleared ? 'cleared' : 'blocked'}`}
                  style={{ gridColumn: 2, gridRow: 1 }}
                  title="Arrow B (Down - Blocked by C)"
                >
                  {!tState[1].cleared ? (
                    <div className="cell-content">
                      <span className="cell-id">B</span>
                      <ArrowDown size={20} color="#A855F7" strokeWidth={3} />
                    </div>
                  ) : <span className="cleared-dot"></span>}
                </button>

                {/* Cell 0,2: Empty */}
                <div className="demo-cell empty" style={{ gridColumn: 3, gridRow: 1 }}></div>

                {/* Cell 1,0: Empty */}
                <div className="demo-cell empty" style={{ gridColumn: 1, gridRow: 2 }}></div>

                {/* Cell 1,1: Arrow C (Right - Free) */}
                <button 
                  onClick={() => handleDemoClick(tState[2])}
                  disabled={tState[2].cleared}
                  className={`demo-cell ${tState[2].cleared ? 'cleared' : 'free'}`}
                  style={{ gridColumn: 2, gridRow: 2 }}
                  title="Arrow C (Right - Free)"
                >
                  {!tState[2].cleared ? (
                    <div className="cell-content">
                      <span className="cell-id">C</span>
                      <ArrowRight size={20} color="#10B981" strokeWidth={3} />
                    </div>
                  ) : <span className="cleared-dot"></span>}
                </button>

                {/* Cell 1,2: Empty exit */}
                <div className="demo-cell exit-channel" style={{ gridColumn: 3, gridRow: 2 }}>
                  <span className="exit-label">EXIT →</span>
                </div>

                {/* Cell 2,0: Arrow D (Left - Free) */}
                <button 
                  onClick={() => handleDemoClick(tState[3])}
                  disabled={tState[3].cleared}
                  className={`demo-cell ${tState[3].cleared ? 'cleared' : 'free'}`}
                  style={{ gridColumn: 1, gridRow: 3 }}
                  title="Arrow D (Left - Free)"
                >
                  {!tState[3].cleared ? (
                    <div className="cell-content">
                      <span className="cell-id">D</span>
                      <ArrowLeft size={20} color="#F43F5E" strokeWidth={3} />
                    </div>
                  ) : <span className="cleared-dot"></span>}
                </button>

                <div className="demo-cell empty" style={{ gridColumn: 2, gridRow: 3 }}></div>
                <div className="demo-cell empty" style={{ gridColumn: 3, gridRow: 3 }}></div>
              </div>
            </div>

            <div className="demo-explanation">
              <div className="feedback-badge">{demoFeedback}</div>
              <ul className="demo-rules-list">
                <li><span className="bullet cyan"></span><strong>Arrow A:</strong> Points UP with no obstruction above. Tap to clear.</li>
                <li><span className="bullet rose"></span><strong>Arrow D:</strong> Points LEFT toward the immediate boundary. Tap to clear.</li>
                <li><span className="bullet emerald"></span><strong>Arrow C:</strong> Points RIGHT through empty cell. Tap to clear.</li>
                <li><span className="bullet purple"></span><strong>Arrow B:</strong> Points DOWN directly into C. It is BLOCKED until C is cleared!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .how-to-play-section {
          position: relative;
        }
        .tutorial-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 36px;
        }
        .tutorial-card {
          padding: 32px 24px;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .step-num-bubble {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--cyan-soft);
          color: var(--cyan);
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 180, 216, 0.25);
        }
        .tutorial-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(var(--surface-rgb), 0.9);
          border: 1px solid var(--border);
          color: var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tutorial-title {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .tutorial-text {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Warning banner */
        .warning-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          margin-bottom: 40px;
          border-left: 5px solid #F59E0B;
          background: rgba(245, 158, 11, 0.08);
        }
        .warning-symbol {
          color: #F59E0B;
        }
        .warning-heading {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .warning-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Demo Playground */
        .demo-playground {
          padding: 32px;
        }
        .demo-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .demo-title {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .demo-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .demo-hud {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .demo-lives-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(244, 63, 94, 0.1);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 700;
          color: #F43F5E;
        }
        .demo-interactive-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 36px;
          align-items: center;
        }
        .demo-grid-box {
          background: #0F1523;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid #222F47;
          box-shadow: var(--shadow-md);
        }
        .demo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
        }
        .demo-cell {
          aspect-ratio: 1;
          background: #172033;
          border: 1px solid #222F47;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .demo-cell:hover:not(.cleared):not(.empty) {
          transform: scale(1.06);
          border-color: #00E5FF;
        }
        .demo-cell.empty {
          background: transparent;
          border: 1px dashed #1E293B;
          cursor: default;
        }
        .demo-cell.exit-channel {
          background: rgba(16, 185, 129, 0.08);
          border: 1px dashed rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }
        .exit-label {
          font-size: 10px;
          font-weight: 800;
          color: #10B981;
          letter-spacing: 0.05em;
        }
        .demo-cell.cleared {
          opacity: 0.2;
          background: #0B101D;
          border-color: #151E30;
          cursor: default;
        }
        .cleared-dot {
          width: 6px;
          height: 6px;
          background: #334155;
          border-radius: 50%;
        }
        .cell-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .cell-id {
          font-size: 10px;
          font-weight: 800;
          color: #94A3B8;
        }
        .demo-explanation {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .feedback-badge {
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .demo-rules-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .demo-rules-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .bullet.cyan { background: #38BDF8; }
        .bullet.rose { background: #F43F5E; }
        .bullet.emerald { background: #10B981; }
        .bullet.purple { background: #A855F7; }

        @media (max-width: 900px) {
          .tutorial-steps-grid {
            grid-template-columns: 1fr;
          }
          .demo-interactive-row {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          .demo-grid-box {
            max-width: 260px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
