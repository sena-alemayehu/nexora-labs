interface AboutProps {
  onTalkClick: () => void;
}

function About({ onTalkClick }: AboutProps) {
  return (
    <section id="about" className="about">

      {/* ================================
          SECTION HEADER
      ================================= */}

      <div className="section-header">

        <p className="section-label">
          ABOUT NEXORA
        </p>

        <h2>
          Turning Ideas Into
          <br />
          Digital Solutions
        </h2>

        <p>
          Nexora Labs is a technology-focused team building
          modern digital products, applications, and
          innovative technology solutions.
        </p>

      </div>


      {/* ================================
          ABOUT CONTENT
      ================================= */}

      <div className="about-content">

        <div className="about-text">

          <h3>
            Technology meets creativity.
          </h3>

          <p>
            We combine software development, UI/UX design,
            mobile development, automation, and modern
            technologies to transform ideas into useful
            digital products.
          </p>

          <p>
            From websites and mobile applications to business
            systems and intelligent bots, we focus on creating
            solutions that are simple, useful, and scalable.
          </p>


          {/* ================================
              CONTACT BUTTON
          ================================= */}

          <button
            type="button"
            className="primary-button"
            onClick={onTalkClick}
          >
            Let's Talk →
          </button>

        </div>


        {/* ================================
            STATS
        ================================= */}

        <div className="about-stats">

          <div className="about-stat">
            <strong>08+</strong>
            <span>Projects</span>
          </div>

          <div className="about-stat">
            <strong>05</strong>
            <span>Services</span>
          </div>

          <div className="about-stat">
            <strong>∞</strong>
            <span>Ideas</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;