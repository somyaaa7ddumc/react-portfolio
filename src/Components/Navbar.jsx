import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-name">
        Somya Agarwal
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Contact
        </NavLink>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-resume"
      >
        Resume <span>↗</span>
      </a>

    </nav>
  )
}

export default Navbar