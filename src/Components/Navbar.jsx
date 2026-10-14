import React from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import CV from '../assets/CV.pdf';

const navItems = [
  { idx: '01', label: 'Skills', to: 'skills' },
  { idx: '02', label: 'Projects', to: 'projects' },
  { idx: '03', label: 'Services', to: 'services' },
  { idx: '04', label: 'Certifications', to: 'certifications' },
];

// Native smooth-scroll — each section carries a `scroll-mt-*` class so it
// lands clear of the sticky header instead of relying on a third-party
// library's own scroll math.
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = ({ toggleSidebar, activeSection, isScrolled, toggleTheme, isDarkMode }) => {
  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-outline-variant/60 bg-background/85 shadow-soft backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-container-max items-center justify-between px-4 sm:px-6 md:px-10">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex cursor-pointer items-center gap-2 sm:gap-2.5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-outline-variant font-mono text-[11px] font-bold text-primary sm:h-9 sm:w-9">
            UF
          </span>
          <span className="whitespace-nowrap font-display text-base font-semibold text-on-surface sm:text-lg md:text-xl">Urooj Fatima</span>
        </button>

        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={() => scrollToSection(item.to)}
              className={`group relative inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-medium tracking-wide transition-colors ${
                activeSection === item.to ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className={`font-mono text-[10px] ${activeSection === item.to ? 'text-primary' : 'text-on-surface-variant/50'}`}>
                {item.idx}
              </span>
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-300 ${
                  activeSection === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant transition hover:border-primary/50 hover:text-primary"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center justify-center rounded-md border border-outline-variant px-5 text-sm font-semibold text-on-surface transition hover:border-primary/50 hover:text-primary sm:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={toggleSidebar}
            aria-label="Open menu"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
