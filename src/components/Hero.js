import React from 'react'
import logo from '../images/Logo.png'

function Hero() {
  return (
    <div className='md:flex place-items-center min-h-screen'>
      <img
        src={logo}
        alt="A minimalist logo design featuring a green tulip tree. The logo has a simple, clean aesthetic with sleek lines."
        className='md:w-1/2'
      />
      <div className='md:w-1/2 p-5 md:p-0'>
        <h1 className='text-6xl text-green-600'>I'm Matt</h1>
        <p className='text-green-900 md:pr-20'>
          As a Lead Engineer with a passion for UX research and design, I am eager to expand
          my skills and integrate my technical expertise with a deep understanding of user
          behavior. My curiosity about how people interact with technology drives me to
          continuously learn and innovate. Each project is an opportunity to refine my craft
          and contribute to creating intuitive, user-centered experiences.
        </p>
      </div>
    </div>
  )
}

export default Hero