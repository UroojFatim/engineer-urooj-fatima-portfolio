import CV from "../../../assets/CV.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const navItems = [
  { idx: '01', label: 'Skills', to: 'skills' },
  { idx: '02', label: 'Projects', to: 'projects' },
  { idx: '03', label: 'Services', to: 'services' },
  { idx: '04', label: 'Certifications', to: 'certifications' },
];

// Native smooth-scroll — see matching note in Navbar.jsx.
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Sidebar = ({ toggleTheme, isDarkMode, sidebarOpen, toggleSidebar, activeSection }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-on-background/40 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[88vw] max-w-sm transform border-l border-outline-variant bg-surface p-6 text-on-surface shadow-2xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)' }}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Menu</span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={toggleSidebar}
              aria-label="Close menu"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={() => {
                toggleSidebar();
                // Let the drawer close first so scrollIntoView measures the
                // final (non-clipped) layout.
                window.setTimeout(() => scrollToSection(item.to), 300);
              }}
              className={`flex min-h-11 w-full items-center gap-3 rounded-md border px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === item.to
                  ? 'border-primary/50 bg-primary-container/40 text-on-primary-container'
                  : 'border-outline-variant bg-surface-container-low text-on-surface-variant'
              }`}
            >
              <span className="font-mono text-[10px] opacity-60">{item.idx}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 flex items-center justify-center gap-3 text-lg">
          <a href="https://github.com/UroojFatim" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/urooj-fatima-588ba2296" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share" target="_blank" rel="noreferrer" aria-label="Upwork" className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary">
            <SiUpwork />
          </a>
          <a href="mailto:urooj.fatim2004@gmail.com" aria-label="Email" className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary">
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href="mailto:urooj.fatim2004@gmail.com"
            className="flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-sm font-bold text-on-primary transition hover:brightness-110"
          >
            Hire Me
          </a>
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 w-full items-center justify-center rounded-md border border-outline-variant px-6 py-3 text-center text-sm font-bold text-on-surface"
          >
            Download Resume
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-on-surface-variant">
          urooj.fatim2004@gmail.com · +92 344 8302253
        </p>
      </div>
    </>
  );
};

export default Sidebar;
