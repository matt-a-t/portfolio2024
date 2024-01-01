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
          I'm a Lead Engineer looking to grow my UX research and design skills. I want to merge my
          technical expertise with my curiosity about how people work. I love to learn, and see
          every project as a step towards mastering the art of user-centered design.
        </p>
      </div>
    </div>
  )
}

export default Hero