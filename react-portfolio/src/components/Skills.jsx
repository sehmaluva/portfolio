import React from 'react'
import Reveal from './ScrollReveal'

const groups = [
  {title:'Frontend', items:['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']},
  {title:'Backend', items:['Django', 'Java', 'C++', 'GraphQL']},
  {title:'Databases', items:['PostgreSQL', 'MySql']},
  {title:'Tools', items:['Git', 'Github', 'Docker', 'CI/CD']}
]

export default function Skills(){
  return (
    <Reveal>
      <section id="skills" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groups.map(g=> (
            <div key={g.title} className="p-4 border rounded-lg border-gray-200 dark:border-gray-800">
              <h3 className="font-medium mb-2">{g.title}</h3>
              <ul className="list-disc pl-5 text-muted">
                {g.items.map(i=> <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
