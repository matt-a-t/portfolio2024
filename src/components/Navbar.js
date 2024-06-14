import React from 'react'
import leaf from '../images/leaf3.png'

function Navbar() {
  const [scroll, setScroll] = React.useState(0)
  React.useEffect(() => {
    const onScroll = e => {
      const newScroll = e.target.documentElement.scrollTop
      if (newScroll > scroll) {
        document.querySelector('.border-b').style.top = '-110px'
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
        <a href='#top' className='flex place-items-center bg-altwhite pr-16'>
          <img src={leaf} alt='A minimalist green leaf icon' className='h-10 m-5' />
          <p className='text-green-900'>Matt Armstrong</p>
        </a>
        <span className='flex ml-10 text-green-600'>
          {['Skills', 'Work', 'About Me'].map((item) =>
            <a
              href={`#${item}`}
              className='flex hover:bg-green-100 place-items-center p-5 m-5'
            >
              {item}
            </a>
          )}
        </span>
      </nav>
    </div>
  )
}

export default Navbar