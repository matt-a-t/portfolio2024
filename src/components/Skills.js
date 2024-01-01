import React from 'react'

function Skills() {
  return (
    <ul className='flex flex-wrap'>
      {[
        'Full stack web development',
        'UI/UX Design',
        'Mentorship',
        'Collaboration',
        'Agile',
        'Leadership',
        'HR Management',
        'Version Control',
        'Testing'
      ].map((skill) =>
        <li className='text-green-900 m-2 md:m-5 p-5 md:p-10 bg-green-200'>{skill}</li>
      )}
    </ul>
  )
}

export default Skills 