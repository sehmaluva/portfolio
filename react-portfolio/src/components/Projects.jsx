import React from 'react'
import Reveal from './ScrollReveal'
import { motion } from 'framer-motion'

const projects = [
  {title:'My Personal Website', desc:'This personal website shows skills in web designing and programming.', link:'https://sehmaluva.github.io/portfolio/', date:'Jan 2025 - Feb 2025', img:'/assets/images/penguines.jpg'},
  {title:'Web Application', desc:'A web application project (see GitHub).', link:'https://github.com/sehmaluva/website_monitor/', date:'Mar 2024 - May 2024', img:'/assets/images/profile.jpg'}
]

export default function Projects(){
  return (
    <Reveal>
      <section id="projects" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(p=> (
            <motion.article key={p.title} whileHover={{scale:1.02}} whileFocus={{scale:1.02}} className="border rounded-lg overflow-hidden transition-all-smooth focus:outline-none focus:ring" tabIndex={0}>
              <a href={p.link} className="block" target="_blank" rel="noreferrer">
                <img src={p.img} alt="" loading="lazy" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-muted text-sm">{p.desc}</p>
                  <p className="text-xs text-muted mt-2">{p.date}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
