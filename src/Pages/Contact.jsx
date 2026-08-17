import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="section-label">
        <span>05</span>
        CONTACT
      </div>

      <div className="contact-intro">

        <div>
          <p className="contact-kicker">Open to opportunities</p>

          <h2>
            Let's
            <br />
            <span>connect.</span>
          </h2>
        </div>

        <p className="contact-description">
          I'm currently looking for internship opportunities and ways
          to grow as a web developer. I'm always open to learning,
          collaborating, and connecting with others in the field.
        </p>

      </div>


      <div className="contact-grid">

        <div className="contact-main">
          <p className="contact-label">GET IN TOUCH</p>

          <a
            href="mailto:somyaagarwal780@email.com"
            className="contact-email"
          >
            somyaagarwal780@email.com
            <span>↗</span>
          </a>
        </div>


        <div className="contact-links">

          <a
            href="https://github.com/somyaaa7ddumc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/somya-agarwal-867595363/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

        </div>

      </div>


      <div className="contact-footer">
        <span>05 / 06</span>
        <span>LEARNING · BUILDING · LOOKING AHEAD</span>
      </div>

    </section>
  )
}

export default Contact