import React from 'react'
import leaf from '../images/leaf3.png'

function Navbar() {
  const [scroll, setScroll] = React.useState(0)
  React.useEffect(() => {
    const onScroll = e => {
      const newScroll = e.target.documentElement.scrollTop
      if (newScroll > scroll) {
        document.querySelector('.border-b').style.top = '-100px'
      } else {
        document.querySelector('.border-b').style.top = '0'
      }
      setScroll(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scroll])

  return (
    <div className='hidden md:flex border-b sticky top-0 bg-green-200 transition-all'>
      <nav className='flex space-between'>
        <a href='/' className='flex place-items-center bg-altwhite pr-16'>
          <img src={leaf} alt='A minimalist green leaf icon' className='h-10 m-5' />
          <p className='text-green-900'>Matt Armstrong</p>
        </a>
        <span className='flex ml-10 text-green-600'>
          <a href='#Skills' className='flex place-items-center m-5'>Skills</a>
          <a href='#Work' className='flex place-items-center m-5'>Work</a>
          <a href='#About Me' className='flex place-items-center m-5'>About Me</a>
        </span>
      </nav>
    </div>
  )
}

export default Navbar