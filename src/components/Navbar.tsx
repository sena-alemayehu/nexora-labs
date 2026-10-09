import { useState } from "react";

interface NavbarProps {
  onTalkClick: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

function Navbar({
  onTalkClick,
  darkMode,
  toggleTheme,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Smoothly navigate to Contact
  const handleTalkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMenu();
    onTalkClick();
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src="/nexora-logo.png"
            alt="Nexora Labs"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="nav-actions">
          {/* DARK / LIGHT MODE BUTTON */}
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={!darkMode}
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* LET'S TALK BUTTON */}
          <a
            href="#contact"
            className="primary-button"
            onClick={handleTalkClick}
          >
            Let's Talk →
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={
          menuOpen
            ? "mobile-menu open"
            : "mobile-menu"
        }
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={handleTalkClick}>
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;