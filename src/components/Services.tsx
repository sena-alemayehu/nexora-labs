function Services() {
  return (
    <section id="services" className="services">

      {/* SECTION HEADER */}
      <div className="section-header">
        <p className="section-label">
          WHAT WE DO
        </p>

        <h2>
          Our Services
        </h2>

        <p>
          We create modern digital solutions that help
          businesses grow, automate, and succeed.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        {/* 01 — WEB */}
        <div className="service-card">
          <span className="service-number">
            01
          </span>

          <h3>
            Web Development
          </h3>

          <p>
            Modern, fast, and scalable websites and web
            applications built for today's digital world.
          </p>

          <div className="service-projects">
            <span>E-commerce</span>
            <span>Nafi Delivery</span>
          </div>
        </div>

        {/* 02 — SYSTEMS */}
        <div className="service-card">
          <span className="service-number">
            02
          </span>

          <h3>
            Systems Development
          </h3>

          <p>
            Custom software systems designed to solve
            real-world business problems and improve
            productivity.
          </p>

          <div className="service-projects">
            <span>Business Management</span>
          </div>
        </div>

        {/* 03 — MOBILE */}
        <div className="service-card">
          <span className="service-number">
            03
          </span>

          <h3>
            Mobile Development
          </h3>

          <p>
            Powerful and responsive mobile applications
            designed for modern users.
          </p>

          <div className="service-projects">
            <span>Calorie Calculator</span>
            <span>Heartbeat Tracker</span>
          </div>
        </div>

        {/* 04 — BOTS */}
        <div className="service-card">
          <span className="service-number">
            04
          </span>

          <h3>
            Bot Development
          </h3>

          <p>
            Intelligent bots and automation solutions
            that save time and improve business efficiency.
          </p>

          <div className="service-projects">
            <span>Telegram Bot</span>
            <span>Automation</span>
          </div>
        </div>

        {/* 05 — UI/UX */}
        <div className="service-card">
          <span className="service-number">
            05
          </span>

          <h3>
            UI/UX Design
          </h3>

          <p>
            Clean, intuitive, and engaging interfaces
            designed around real users.
          </p>

          <div className="service-projects">
            <span>Web UI/UX</span>
            <span>Mobile UI/UX</span>
          </div>
        </div>

        {/* 06 — TECHNOLOGY */}
        <div className="service-card">
          <span className="service-number">
            06
          </span>

          <h3>
            Technology Solutions
          </h3>

          <p>
            Custom digital solutions built around your
            specific business and technology needs.
          </p>

          <div className="service-projects">
            <span>Digital Solutions</span>
            <span>Automation</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Services;