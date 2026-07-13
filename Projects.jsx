import React from 'react'

const Projects = () => {
  return (
    <>
    <h1>-- Projects --</h1>
  <div className='Project-container'>
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
      </div>
    </div>


    <div className='card'>
      <div className='card-header'>
          <h2> Facebook Login Clone </h2>
      </div>
      <div className='card-image2'>
          <img src="https://cdn.pixabay.com/photo/2017/12/06/04/56/facebook-3000954_1280.png" alt="form image" />
      </div>
      <div className='card-body'>
            <p>
              A clone of the login page of FaceBook created using HTML and CSS.
            </p>
      </div>
    </div>
    


  </div>
    </>
  )
}

export default Projects
