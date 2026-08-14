import React from 'react'
 
const Projects = () => {
  return (
    <>
    <h1>-- Projects --</h1>
  <div className='Project-container'>

  <div className='card'>
      <div className='card-header'>
          <h2> Weather App </h2>
      </div>
      <div className='card-image2'>
          <img src="https://cdn.pixabay.com/photo/2012/11/28/09/53/hurricane-67581_1280.jpg" alt="form image" />
      </div>
      <div className='card-body'>
            <p>
              A responsive weather app that provides real-time weather information for different cities, including temperature, humidity, wind speed, and weather conditions.
            </p>
            <a href="https://comfy-custard-8ace20.netlify.app/" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>

    <div className='card'>
      <div className='card-header'>
          <h2> TO-DO List </h2>
      </div>
      <div className='card-image'>
          <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/web-design-2140929_1280.png" alt="portfolio html css" />
      </div>
      <div className='card-body'>
            <p>
              My first portfolio website built using pure HTML and CSS, featuring a responsive navbar, about section, skills, and project cards.
            </p>
            <a href="https://cerulean-axolotl-cd7c45.netlify.app/" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>
 
    <div className='card'>
      <div className='card-header'>
          <h2> Portfolio (React + Router) </h2>
      </div>
      <div className='card-image'>
          <img src="https://cdn.pixabay.com/photo/2017/08/10/07/32/logo-2617177_1280.png" alt="react portfolio" />
      </div>
      <div className='card-body'>
            <p>
              An upgraded version of my portfolio rebuilt using React.js with React Router for multi-page navigation and reusable components.
            </p>
            <a href="https://incredible-liger-c7a0a2.netlify.app/" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>
 
    <div className='card'>
      <div className='card-header'>
          <h2> Zodiac Finder </h2>
      </div>
      <div className='card-image'>
          <img src="https://cdn.pixabay.com/photo/2021/01/16/05/09/zodiac-5921179_1280.png" alt="zodiac wheel" />
      </div>
      <div className='card-body'>
            <p>
              An interactive website where you can find your Zodiac Sign using just your date and month of birth.
            </p>
            <a href="https://incredible-liger-c7a0a2.netlify.app/" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>
 
    <div className='card'>
      <div className='card-header'>
          <h2> Registration Form </h2>
      </div>
      <div className='card-image2'>
          <img src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="form image" />
      </div>
      <div className='card-body'>
            <p>
              A Registration form which you can customize according to your needs and fill it effortlessly.
            </p>
            <a href="https://your-registration-form.netlify.app" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>

    <div className='card'>
      <div className='card-header'>
          <h2> Facebook Login Clone </h2>
      </div>
      <div className='card-image2'>
          <img src="https://cdn.pixabay.com/photo/2017/12/06/04/56/facebook-3000954_1280.png" alt="facebook clone" />
      </div>
      <div className='card-body'>
            <p>
              A clone of the login page of Facebook created using HTML and CSS.
            </p>
            <a href="https://your-facebook-clone.netlify.app" target="_blank" rel="noopener noreferrer">
              View on Netlify
            </a>
      </div>
    </div>
 
  </div>
    </>
  )
}
 
export default Projects