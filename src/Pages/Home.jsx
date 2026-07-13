import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <h1> Hi, I'm Somya! </h1>
      <h2> BCA Student| Learner</h2>
      <p>
        I'm Passionate about building clean, responsive and user-friendly websites that solves real world problems.
        Currently learning React and improving my frontend skills through projects.
      </p>
      <a href="/resume.pdf" target="_blank">
      <button className='resume_btn'> Resume Here </button>
      </a>
    </div>
  )
}

export default Home;
