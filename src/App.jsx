import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameIntro from './components/GameIntro';
import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
import GameModes from './components/GameModes';
import Progression from './components/Progression';
import Screenshots from './components/Screenshots';
import InteractiveBoard from './components/InteractiveBoard';
import About from './components/About';
import Developer from './components/Developer';
import GooglePlayCta from './components/GooglePlayCta';
import Faq from './components/Faq';
import Footer from './components/Footer';

// Subpages
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Theme state: 'light' is DEFAULT as requested
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('arrowflow_theme');
    if (saved) return saved;
    // If no preference saved, check system or default to light
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Client path state for clean SPA routing (/privacy, /terms, /contact, /)
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('arrowflow_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <div className="app-layout">
      <Navbar
        currentTheme={theme}
        onToggleTheme={toggleTheme}
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {currentPath === '/privacy' && (
        <PrivacyPage onNavigate={navigateTo} />
      )}

      {currentPath === '/terms' && (
        <TermsPage onNavigate={navigateTo} />
      )}

      {currentPath === '/contact' && (
        <ContactPage onNavigate={navigateTo} />
      )}

      {(currentPath === '/' || !['/privacy', '/terms', '/contact'].includes(currentPath)) && (
        <main>
          <Hero />
          <GameIntro />
          <Features />
          <HowToPlay />
          <GameModes />
          <Progression />
          <Screenshots />
          <InteractiveBoard />
          <About />
          <Developer />
          <GooglePlayCta />
          <Faq />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
