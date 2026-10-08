interface HeroProps {
  onTalkClick: () => void;
}

function Hero({ onTalkClick }: HeroProps) {
  return (
    <section id="home" className="hero">

      {/* ================================
          HERO LABEL
      ================================= */}

      <p className="hero-label">
        INNOVATION
        <span>•</span>
        DESIGN
        <span>•</span>
        TECHNOLOGY
      </p>


      {/* ================================
          HERO IMAGE
      ================================= */}

      <div className="hero-image">

        <img
          src="/technology.png"
          alt="Nexora Labs technology"
        />

        <div className="hero-image-overlay"></div>

        <div className="hero-image-text">
          <span>01</span>
          <p>Nexora Labs</p>
        </div>

      </div>


      {/* ================================
          HERO CONTENT
      ================================= */}

      <div className="hero-content">

        <h1>
          Build Better.
          <br />
          Create What's
          <br />
          <span>Next.</span>
        </h1>


        <p className="hero-description">
          We build modern digital experiences, powerful web
          applications, and innovative technology solutions
          that turn ideas into reality.
        </p>


        {/* ================================
            BUTTONS
        ================================= */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            Explore Our Work →
          </a>

          <a
            href="#contact"
            className="secondary-button"
            onClick={(e) => {
              e.preventDefault();
              onTalkClick();
            }}
          >
            Get Started
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;