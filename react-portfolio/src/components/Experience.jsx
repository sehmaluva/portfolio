import React from 'react'
import Reveal from './ScrollReveal'

const timeline = [
  {title: 'Fincheck', date:'May 2025 - Present', desc:"Software Developer Intern"},
  {title:'Chitungwiza Municipality', date:'February  - April 2025', desc:'IT Student Intern'},
  {title:'Bindura University Of Science Education', date:'Feb 2023 - Present', desc:"Pursuing a degree in Software Engineering, building strong foundations in software development."},
  {title:'Seke 1 High - Advanced Level', date:'2020 - 2021', desc:'Advanced Level Studies'},
  {title:'Seke 1 High - Ordinary Level', date: '2016- 2019', desc:'Ordinary Level Studies'}
]

export default function Experience(){
  return (
    <Reveal>
      <section id="experience" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Experience & Education</h2>
        <ol className="space-y-4">
          {timeline.map(item=> (
            <li key={item.title} className="p-4 border rounded-lg border-gray-200 dark:border-gray-800">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-xs text-muted">{item.date}</p>
              <p className="mt-2 text-muted">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  )
}
