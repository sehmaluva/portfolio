import React from 'react'
import Reveal from './ScrollReveal'

export default function Hero(){
  return (
    <Reveal>
      <section id="hero" className="section max-w-4xl mx-auto text-center py-12">
        <img src="/assets/images/profile.jpg" alt="profile" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
        <h1 className="text-3xl sm:text-4xl font-bold">Malvin T Machingura</h1>
        <p className="text-muted mt-2">Software Engineer | Full-Stack Developer</p>
        <p className="mt-3 max-w-xl mx-auto text-muted">A driven Software Engineering Student passionate about building responsive web apps and solving real-world problems. Currently seeking internship opportunities.</p>
      </section>
    </Reveal>
  )
}
