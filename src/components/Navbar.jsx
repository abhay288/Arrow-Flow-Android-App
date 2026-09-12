import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Play, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentTheme, onToggleTheme, currentPath, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How to Play', href: '#how-to-play' },
    { label: 'Game Modes', href: '#game-modes' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      e.preventDefault();
      onNavigate('/');
      setTimeout(() => {
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onNavigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="brand-logo"
        >
          <img src="/logo.png" alt="Arrow Flow Logo" className="logo-img" />
          <div className="brand-text">
            <span className="brand-name">Arrow Flow</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="btn-icon theme-btn"
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Google Play CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
          >
            <Play size={16} fill="currentColor" />
            <span>Play on Google Play</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-legal-links">
              <a href="/privacy" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('/privacy'); }}>Privacy Policy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('/terms'); }}>Terms</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('/contact'); }}>Contact</a>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-cta"
            >
              <Play size={18} fill="currentColor" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          background: rgba(var(--surface-rgb), 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: all var(--transition-base);
        }
        .navbar-wrapper.scrolled {
          background: rgba(var(--surface-rgb), 0.88);
          border-bottom-color: var(--border);
          box-shadow: var(--shadow-sm);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 229, 255, 0.25);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--cyan);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-cta {
          padding: 10px 20px;
          font-size: 14px;
        }
        .mobile-menu-btn {
          display: none;
        }
        .mobile-drawer {
          display: none;
        }
        @media (max-width: 960px) {
          .desktop-nav {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: inline-flex;
          }
          .mobile-drawer {
            display: block;
            position: absolute;
            top: var(--nav-height);
            left: 0;
            right: 0;
            background: rgba(var(--surface-rgb), 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            padding: 24px 20px 32px;
            box-shadow: var(--shadow-lg);
            animation: slideDown 0.25s ease;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .mobile-nav-link {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            padding: 8px 0;
            border-bottom: 1px solid var(--border-light);
          }
          .mobile-legal-links {
            display: flex;
            gap: 16px;
            padding: 12px 0 4px;
            font-size: 13px;
            color: var(--text-muted);
          }
          .mobile-cta {
            width: 100%;
            margin-top: 12px;
            padding: 14px;
          }
        }
      `}</style>
    </header>
  );
}
