import React from 'react'
import Carousel from './Carousel'

function AboutMe() {
  return (
    <div className="pt-5">
      <div className='sm:block md:flex place-items-center'>
        <div className='w-full md:w-1/2 p-10'>
          <p className='text-green-900'>
            I live in Indianapolis with my best friend and partner Chloe and our dogs: Nym and Bibi.
            Alongside my passion for technology, I enjoy exploring the outdoors on foot or by bike.
            My best ideas come to me when I am out in nature, so I try to spend as much time as I can
            outside. I love fantasy and science fiction and am often found with my nose in a book.
          </p>
          <div className="pt-5">
            <a href='mailto:matt.armstro@gmail.com' className='text-green-600 text-xl'><p>Contact Me</p></a>
            <a
              href='https://docs.google.com/document/d/e/2PACX-1vQ82_uA0LuZUt6NFv97JkSs2-l6eod6dVdxxpq1DgEY0jIUiiDmFHgvxiyVB6CUXc1-syM86Urj2H7B/pub'
              className='text-green-600 text-xl'
            >
              <p>Resume</p>
            </a>

          </div>
        </div>

        <Carousel />
      </div>


    </div>
  )
}

export default AboutMe