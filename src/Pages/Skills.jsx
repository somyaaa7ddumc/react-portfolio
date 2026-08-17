import React from 'react'

const Skills = () => {
  return (
    <section className="skills-section">

      <div className="section-label">
        <span>03</span>
        SKILLS
      </div>

      <div className="skills-intro">
        <div>
          <p className="skills-kicker">What I work with</p>

          <h2>
            My current
            <br />
            <span>toolkit.</span>
          </h2>
        </div>

        <p className="skills-description">
          A growing set of technologies I use to design, develop,
          and bring web applications to life.
        </p>
      </div>


      <div className="skills-stack">

        {/* FRONTEND */}

        <div className="skill-row">

          <div className="skill-category">
            <span>01</span>
            <div>
              <small>CORE</small>
              <h3>Frontend</h3>
            </div>
          </div>

          <div className="skill-list">

            <div className="skill-item">
              <span>HTML</span>
              <small>01</small>
            </div>

            <div className="skill-item">
              <span>CSS</span>
              <small>02</small>
            </div>

            <div className="skill-item">
              <span>JavaScript</span>
              <small>03</small>
            </div>

            <div className="skill-item featured">
              <span>React.js</span>
              <small>04</small>
            </div>

          </div>

        </div>


        {/* BACKEND */}

        <div className="skill-row">

          <div className="skill-category">
            <span>02</span>
            <div>
              <small>SERVER SIDE</small>
              <h3>Backend</h3>
            </div>
          </div>

          <div className="skill-list">

            <div className="skill-item">
              <span>Node.js</span>
              <small>01</small>
            </div>

            <div className="skill-item">
              <span>Express.js</span>
              <small>02</small>
            </div>

            <div className="skill-item">
              <span>MongoDB</span>
              <small>03</small>
            </div>

            <div className="skill-item">
              <span>REST APIs</span>
              <small>04</small>
            </div>

          </div>

        </div>


        {/* TOOLS */}

        <div className="skill-row">

          <div className="skill-category">
            <span>03</span>
            <div>
              <small>WORKFLOW</small>
              <h3>Tools</h3>
            </div>
          </div>

          <div className="skill-list">

            <div className="skill-item">
              <span>Git</span>
              <small>01</small>
            </div>

            <div className="skill-item">
              <span>GitHub</span>
              <small>02</small>
            </div>

            <div className="skill-item">
              <span>VS Code</span>
              <small>03</small>
            </div>

            <div className="skill-item">
              <span>Responsive Design</span>
              <small>04</small>
            </div>

          </div>

        </div>

      </div>


      <div className="skills-footer">
        <span>03 / 06</span>
        <span>ALWAYS BUILDING SOMETHING</span>
      </div>

    </section>
  )
}

export default Skills