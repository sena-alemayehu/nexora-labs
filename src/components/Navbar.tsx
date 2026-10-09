
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

interface NavbarProps {
  onTalkClick: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

function Navbar({
  onTalkClick,
  darkMode,
  toggleTheme,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close the mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle Let's Talk click
  const handleTalkClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMenu();
    onTalkClick();
  };

  // Track the active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.offsetTop <= scrollPosition
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Nexora Labs home"
        >
          <img
            src={
              darkMode
                ? "/nexora-logo.png"
                : "/nexora-logo-light.png"
            }
            alt="Nexora Labs"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "active" : ""
              }
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="nav-actions">
          {/* DARK / LIGHT MODE */}
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

          {/* LET'S TALK */}
          <a
            href="#contact"
            className="primary-button"
            onClick={handleTalkClick}
          >
            Let's Talk →
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id ? "active" : ""
            }
            onClick={
              item.id === "contact"
                ? handleTalkClick
                : closeMenu
            }
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
