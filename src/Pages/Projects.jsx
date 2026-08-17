import React from 'react'

const Projects = () => {
  return (
    <section className="projects-section">

      <div className="section-label">
        <span>04</span>
        PROJECTS
      </div>

      <div className="projects-intro">
        <div>
          <p className="projects-kicker">Selected work</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>
        </div>

        <p className="project-description">
          A selection of projects I've built while learning, experimenting,
          and growing as a web developer.
        </p>
      </div>


      {/* ================================
          PROJECT 01 — MOVIEVERSE
      ================================= */}

      <article className="featured-project">

        <div className="project-number">
          01
        </div>

        <div className="project-image movieverse-image">
          <img
            src="/projects/MovieVerse.png"
            alt="MovieVerse project preview"
          />
        </div>

        <div className="project-info">

          <p className="project-type">
            FULL-STACK WEB APPLICATION
          </p>

          <h3>MovieVerse</h3>

          <p className="project-description">
            A movie ticket booking platform where users can explore movies,
            book tickets, and order food for their cinema experience.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <div className="project-links">

            <a
              href="https://movie-verse-lovat-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span>↗</span>
            </a>

            <a
              href="https://github.com/somyaaa7ddumc/Movie-Verse"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

          </div>

        </div>

      </article>


      {/* ================================
          PROJECT 02 — WEATHERLY
      ================================= */}

      <article className="featured-project weather-project">

        <div className="project-number">
          02
        </div>

        <div className="project-image weather-image">
          <img
            src="/projects/Weatherly.png"
            alt="Weatherly project preview"
          />
        </div>

        <div className="project-info">

          <p className="project-type">
            WEATHER · API · REACT
          </p>

          <h3>Weatherly</h3>

          <p className="project-description">
            A responsive weather application that fetches real-time
            weather information and presents it through a clean,
            user-friendly interface.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>REST API</span>
            <span>CSS</span>
          </div>

          <div className="project-links">

            <a
              href="https://react-weather-api-project-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span>↗</span>
            </a>

            <a
              href="https://github.com/somyaaa7ddumc/Weatherly"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

          </div>

        </div>

      </article>


      {/* ================================
          RESERVED PROJECTS — 03–05
      ================================= */}

      <div className="reserved-projects">

        <div className="reserved-heading">
          <span>03 — 05</span>
          <p>MORE BUILDS COMING SOON</p>
        </div>

        <div className="reserved-grid">

          {/* TO-DO LIST */}

          <div className="reserved-card">

            <span>03</span>

            <h4>To-Do List</h4>

            <p>
              A task management application currently being improved
              for the portfolio.
            </p>

            <div className="reserved-links">

              <a
                href="https://to-do-project-blue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span>↗</span>
              </a>

              <a
                href="https://github.com/somyaaa7ddumc/To-Do-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

            </div>

          </div>


          {/* STOPWATCH */}

          <div className="reserved-card">

            <span>04</span>

            <h4>Stopwatch</h4>

            <p>
              A simple interactive stopwatch project currently being
              improved for the portfolio.
            </p>

            <div className="reserved-links">

              <a
                href="https://stopwatch-project-hazel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span>↗</span>
              </a>

              <a
                href="https://github.com/somyaaa7ddumc/stopwatch-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

            </div>

          </div>


          {/* ZODIAC FINDER */}

          <div className="reserved-card">

            <span>05</span>

            <h4>Zodiac Finder</h4>

            <p>
              An interactive zodiac finder based on the user's date
              and month of birth.
            </p>

            <div className="reserved-links">

              <a
                href="https://zodiac-finder-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span>↗</span>
              </a>

              <a
                href="https://github.com/somyaaa7ddumc/Zodiac-Finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>


      <div className="projects-footer">
        <span>04 / 06</span>
        <span>BUILD · BREAK · IMPROVE · REPEAT</span>
      </div>

    </section>
  )
}

export default Projects