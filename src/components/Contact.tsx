import type { RefObject } from "react";

interface ContactProps {
  contactRef: RefObject<HTMLElement | null>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <section ref={contactRef} id="contact" className="contact">

      <div className="contact-content">

        {/* LABEL */}
        <p className="section-label">
          LET'S WORK TOGETHER
        </p>

        {/* TITLE */}
        <h2>
          Have an idea?
          <br />
          <span>Let's build it.</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="contact-description">
          Have a project, idea, or business challenge?
          Let's create something meaningful together.
        </p>

        {/* CONTACT BUTTON */}
        <a
          href="mailto:hello@nexora.com"
          className="primary-button"
        >
          Let's Talk →
        </a>

      </div>

    </section>
  );
}

export default Contact;