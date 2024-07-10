import React, { useEffect } from 'react'
import MoreInfoButton from './MoreInfoButton'

function Skills() {
  return (
    <ul className='flex flex-wrap'>
      {[
        {
          header: 'Full stack web development',
          tools: [
            'React',
            'NextJS',
            'AWS API Gateway',
            'Node.js',
            'GraphQL',
            'Vercel',
          ]
        },
        {
          header: 'UI/UX Design',
          tools: [
            'Figma',
            'Wireframing',
            'Prototyping',
            'User Research',
            'User Testing',
            'User Flows',
            'User Personas',
          ]
        },
        {
          header: 'System Reliability - CI/CD',
          tools: [
            'Jest',
            'Webpack',
            'Babel',
            'ESLint',
            'Git',
            'GitHub',
            'Azure Devops',
            'Heroku',
            'Netlify',
          ]
        },
        {
          header: 'Mentorship',
          tools: [
            'Isaac',
            'Mic',
            'Bertolt',
            'Ryan',
            'Angela',
          ]
        },
        {
          header: 'Collaboration',
          tools: [
            'Pair programming',
            'Async communication',
            'Purposeful meetings',
          ]
        },
        {
          header: 'Process Improvement',
          tools: [
            'Agile',
            'Scrum',
            'Kanban',
            'Backlog generation and refinement',
            'Sprint planning',
          ]
        },
        {
          header: 'Leadership',
          tools: [
            'Vision setting',
            'Goal setting',
            'Team building',
            'Conflict resolution',
            'HR Managment',
          ]
        },
      ].map((skill) => <Skill skill={skill} />)}
    </ul>
  )
}

export default Skills

function Skill({ skill }) {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    function handleBodyClick(e) {
      const el = document.getElementById(`skill-${skill.header}`);
      if (!el.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.body.addEventListener('click', handleBodyClick);
    } else {
      document.body.removeEventListener('click', handleBodyClick);
    }
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, [open]);

  return (
    <div id={`skill-${skill.header}`} className='m-2 md:m-5 self-start'>
      <li
        className='p-5 md:p-10 pb-0 md:pb-0 flex flex-col bg-green-200'
      >
        <h3 className='p-5 md:p-10 text-green-600 text-2xl'>{skill.header}</h3>
        <MoreInfoButton onClick={() => setOpen(!open)} />
      </li>
      {
        open &&
        <ul className={`
          bg-green-200
          ${open && 'animate-in slide-in-from-top-40 zoom-in-25'}
          ${!open && 'animate-out zoom-out slide-out-to-top-full'}
          duration-500
          p-5
          md:p-10 
          pt-0
        `}>
          {skill.tools.map((tool) =>
            <p className='text-green-900 pt-4'>{tool}</p>
          )}
        </ul>
      }
    </div>
  )
}