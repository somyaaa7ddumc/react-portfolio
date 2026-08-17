import React from 'react'

const Home = () => {
  return (
    <main className="hero">

      <div className="hero-content">

        <p className="eyebrow">
          BCA · WEB DEVELOPMENT · MERN
        </p>

        <h1>
          I build things
          <br />
          <span>for the web.</span>
        </h1>

        <p className="hero-text">
          I'm a third-year BCA student and web developer focused on
          creating responsive, thoughtful interfaces with React —
          while also understanding what happens behind them.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="primary-btn">
            Explore my work <span>↗</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            View Resume
          </a>
        </div>

      </div>

      <div className="hero-visual">

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="photo-placeholder">
          <span>YOUR</span>
          <strong>PHOTO</strong>
          <small>coming soon</small>
        </div>

        <div className="visual-label label-top">
          <span></span>
          FRONTEND
        </div>

        <div className="visual-label label-bottom">
          REACT · JS · CSS
        </div>

        <div className="hero-number">
          01
        </div>

      </div>

    </main>
  )
}

export default Home