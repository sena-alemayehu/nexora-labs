import { useEffect, useRef, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // Reference to the Contact section
  const contactRef = useRef<HTMLElement | null>(null);

  // Dark mode is enabled by default.
  // Restore the user's saved theme when the page loads.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem("nexora-theme");

      return savedTheme === null ? true : savedTheme === "dark";
    } catch {
      return true;
    }
  });

  // Apply the selected theme and save it.
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("nexora-theme", theme);
    } catch {
      // The website still works if storage is unavailable.
    }
  }, [darkMode]);

  // Toggle between dark and light modes
  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  // Smoothly scroll to Contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <Navbar
        onTalkClick={scrollToContact}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      {/* ================= MAIN CONTENT ================= */}
      <main>
        {/* HOME / HERO */}
        <Home onTalkClick={scrollToContact} />

        {/* ABOUT */}
        <About onTalkClick={scrollToContact} />

        {/* SERVICES */}
        <Services />

        {/* PROJECTS */}
        <Projects />

        {/* CONTACT */}
        <Contact contactRef={contactRef} />
      </main>

      {/* ================= COPYRIGHT ================= */}
      <footer className="footer">
        <p>© 2026 Nexora Labs. All rights reserved.</p>

        <p className="footer-tagline">
          Innovation Accelerated.
        </p>
      </footer>
    </div>
  );
}

export default App;; 