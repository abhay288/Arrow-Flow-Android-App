import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Arrow Flow?',
      a: 'Arrow Flow is an original logic puzzle mobile game built for Android. The objective is to untangle geometric arrow grids by identifying and launching arrows along clear, unobstructed paths until the entire board is empty.'
    },
    {
      q: 'How do I play Arrow Flow?',
      a: 'Inspect the board to find an arrow with an open trajectory toward the grid perimeter. Tap that arrow to clear it. Removing an arrow creates new open pathways for the arrows trapped behind it. Complete the puzzle in the optimal move order to earn stars!'
    },
    {
      q: 'Is Arrow Flow free to play?',
      a: 'Yes, Arrow Flow is 100% free to download and play. There are no paywalls, subscriptions, or pay-to-win mechanisms blocking any of the 100 handcrafted campaign levels.'
    },
    {
      q: 'Can I play Arrow Flow offline?',
      a: 'Absolutely. Arrow Flow is 100% offline-capable. All stage progress, unlocked worlds, star ratings, Flow Coins, and trophy achievements are saved directly and securely in local device storage.'
    },
    {
      q: 'How do lives work in the game?',
      a: 'You begin each level attempt with 2 lives. Tapping an arrow whose path is obstructed by another piece causes the arrow to shake with haptic dampening and costs 1 life. This encourages observation and deliberate planning.'
    },
    {
      q: 'What happens when I lose all my lives?',
      a: 'If you lose both lives, the level attempt concludes. You can instantly restart the level fresh, reverse mistakes using an Undo, or watch an optional rewarded video to gain 1 extra life and continue without resetting.'
    },
    {
      q: 'How do hints work?',
      a: 'If you find yourself puzzled by a dense grid, you can tap the Hint button. The engine evaluates the board in real time and highlights an arrow that is currently unobstructed and safe to launch.'
    },
    {
      q: 'What are stars used for?',
      a: 'Stars measure your move efficiency on each level (up to 3 stars per stage). Accumulating stars unlocks new progressive Campaign Worlds (such as Crossroads, Complexity, and Master Flow) and yields bonus Flow Coins.'
    },
    {
      q: 'Does Arrow Flow have ads?',
      a: 'Arrow Flow may display optional Google AdMob rewarded advertisements where applicable (for instance, if you voluntarily choose to watch a video in exchange for an extra life or hint coins). The game contains zero forced interstitial interruptions during active solving.'
    },
    {
      q: 'How can I report a problem or send feedback?',
      a: 'We welcome all player feedback and bug reports! You can email the developer directly at mauryaabhay938@gmail.com, reach out on Instagram (@the.abhay.maurya), or submit an issue on GitHub (@abhay288).'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-py">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Arrow Flow mechanics, offline play, and progression.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`glass-card faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
        }
        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .faq-item {
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--transition-fast);
        }
        .faq-item.active {
          border-color: var(--cyan);
          box-shadow: var(--shadow-md);
        }
        .faq-question-btn {
          width: 100%;
          padding: 22px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          background: transparent;
          color: var(--text-primary);
        }
        .faq-q-text {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
        }
        .faq-toggle-icon {
          color: var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .faq-answer-panel {
          padding: 0 26px 22px 26px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-a-text {
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        @media (max-width: 600px) {
          .faq-question-btn {
            padding: 18px 20px;
          }
          .faq-q-text {
            font-size: 16px;
          }
          .faq-answer-panel {
            padding: 0 20px 18px 20px;
          }
        }
      `}</style>
    </section>
  );
}
