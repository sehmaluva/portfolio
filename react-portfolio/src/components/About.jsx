import React from 'react'
import Reveal from './ScrollReveal'

export default function About(){
  return (
    <Reveal>
      <section id="about" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About me</h2>
        <p className="text-muted">As a driven Software Engineering Student, I'm fueled by a passion for crafting innovative solutions that merge technology and creativity. With a keen interest in Software Development, Machine Learning and Cyber Security. I'm currently looking for an Internship.</p>
        <p className="text-muted mt-2">I'm seeking an opportunity to expand my skill set in programming languages, frameworks and other related fields. My goal is to gain hands-on experience in a practical setting and enhance my skills in software engineering.</p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Contact</h3>
            <p className="text-muted">Email: <a href="mailto:machinguramalvint@gmail.com" className="text-brand hover:underline">machinguramalvint@gmail.com</a></p>
            <p className="text-muted">Phone: <a href="tel:+263775101044" className="text-brand hover:underline">+263 77 510 1044</a></p>
            <p className="text-muted">Location: Chitungwiza, Harare, Zimbabwe</p>
          </div>

          <div>
            <h3 className="font-medium">Education</h3>
            <p className="text-muted">Bindura University Of Science Education — Software Engineering (Feb 2023 - Present)</p>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
