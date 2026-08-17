import React from 'react'

const About = () => {
  return (
    <section className="about-section">

      <div className="section-label">
        <span>02</span>
        ABOUT
      </div>

      <div className="about-layout">

        <div className="about-heading">
          <p className="about-small-title">
            A little about me
          </p>

          <h2>
            Building,
            <br />
            <span>learning & growing.</span>
          </h2>
        </div>


        <div className="about-content">

          <p className="about-intro">
            I'm a BCA student with a strong interest in web development,
            focused primarily on frontend development while also exploring
            the backend side of building complete applications.
          </p>

          <p className="about-description">
            I enjoy turning ideas into responsive, functional and
            thoughtfully designed experiences. Through hands-on projects,
            I've worked with modern web technologies and continue to
            strengthen my development skills with every project I build.
          </p>


          <div className="about-facts">

            <div className="fact">
              <span>01</span>
              <div>
                <small>EDUCATION</small>
                <strong>BCA · 3rd Year</strong>
              </div>
            </div>

            <div className="fact">
              <span>02</span>
              <div>
                <small>FOCUS</small>
                <strong>Frontend Development</strong>
              </div>
            </div>

            <div className="fact">
              <span>03</span>
              <div>
                <small>ALSO WORKING WITH</small>
                <strong>Backend · MERN</strong>
              </div>
            </div>

            <div className="fact">
              <span>04</span>
              <div>
                <small>APPROACH</small>
                <strong>Learn · Build · Improve</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="about-bottom-line">
        <span>WEB DEVELOPMENT</span>
        <span>REACT · JAVASCRIPT · MERN</span>
      </div>

    </section>
  )
}

export default About