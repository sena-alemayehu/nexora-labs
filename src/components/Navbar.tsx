import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
      <a href="#home" className="logo" onClick={closeMenu}>
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

        {/* RIGHT SIDE */}
        <div className="nav-actions">

          {/* THEME BUTTON */}
          <button
            className="theme-button"
            aria-label="Toggle theme"
          >
            ☀️
          </button>

          {/* TALK BUTTON */}
          <a
            href="#contact"
            className="talk-button"
          >
            Let's Talk
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

    </header>
  );
}

export default Navbar;