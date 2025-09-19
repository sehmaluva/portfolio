import React from 'react'
import Reveal from './ScrollReveal'

const certs = [
  {title:'Python', img:'/assets/certificates/python.jpg'},
  {title:'Cyber Security', img:'/assets/certificates/cyber.jpg'}
]

export default function Certifications(){
  return (
    <Reveal>
      <section id="certifications" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map(c=> (
            <div key={c.title} className="p-2 border rounded">
              <h3 className="font-medium mb-2">{c.title}</h3>
              <img src={c.img} alt={c.title} loading="lazy" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
