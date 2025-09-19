import React from 'react'
import Reveal from './ScrollReveal'

export default function Contact(){
  return (
    <Reveal>
      <section id="contact" className="section max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-muted mb-4">Email: <a href="mailto:machinguramalvint@gmail.com" className="text-brand">machinguramalvint@gmail.com</a></p>

        <form onSubmit={(e)=>{e.preventDefault(); alert('Demo: message sent')}} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input aria-label="Name" placeholder="Your name" className="p-2 border rounded" />
          <input aria-label="Email" placeholder="Your email" className="p-2 border rounded" />
          <textarea aria-label="Message" placeholder="Message" className="p-2 border rounded col-span-1 sm:col-span-2" rows={4}></textarea>
          <button className="bg-brand text-white rounded px-4 py-2">Send</button>
        </form>

        <div className="mt-4 text-sm text-muted">
          <p>GitHub: <a href="https://github.com/sehmaluva" className="text-brand">sehmaluva</a> · LinkedIn: <a href="https://www.linkedin.com/in/malvin-t-machingura" className="text-brand">Malvin T Machingura</a></p>
        </div>
      </section>
    </Reveal>
  )
}
