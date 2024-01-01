import React from 'react'

function WorkItem({ title, description, link }) {
  return (
    <div className='flex flex-col m-5'>
      <h3 className='text-2xl text-green-600'>{title}</h3>
      <p className='text-green-900'>{description}</p>
      <a href={link} className='text-green-600'>View more info...</a>
    </div>
  )
}

export default WorkItem