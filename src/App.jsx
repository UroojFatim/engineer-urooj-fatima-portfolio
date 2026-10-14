import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Components/Pages/LeftSide/Sidebar";
import Home from "./Components/Pages/RightSide/Home";
import Navbar from "./Components/Navbar";
import CustomCursor from "./Components/CustomCursor";

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const stored = window.localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const trackedSections = useMemo(() => ([
    'home',
    'about',
    'skills',
    'projects',
    'services',
    'certifications',
  ]), []);

  // Keep the <html class="dark"> flag and localStorage in sync with state.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Function to toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    if (sidebarOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [sidebarOpen]);

  // Close the mobile menu automatically if the viewport grows past the
  // mobile breakpoint (e.g. rotating a tablet to landscape) so it can't get
  // stuck open behind the desktop nav.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!sidebarOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24;
      setIsScrolled(scrolled);
      setShowBackToTop(window.scrollY > 400);
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topMost = visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActiveSection(topMost.target.id);
        }
      },
      { threshold: 0.35 }
    );

    trackedSections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) sectionObserver.observe(sectionElement);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, [trackedSections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="grid-field" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <CustomCursor />

      <Navbar
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        isScrolled={isScrolled}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <div className="flex">
        <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeSection={activeSection} />
        <main className="min-h-screen flex-1 text-on-surface">
          <Home />
        </main>
      </div>

      {activeSection !== 'home' && (
        <a
          href="mailto:urooj.fatim2004@gmail.com"
          data-cursor-hover
          className="fixed bottom-5 right-5 z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-glow transition hover:brightness-110"
        >
          Hire Me
        </a>
      )}

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          data-cursor-hover
          className="glass-card fixed bottom-20 right-5 z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-on-surface shadow-soft transition hover:border-primary/40"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
