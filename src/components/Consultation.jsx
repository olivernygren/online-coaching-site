import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/consultation.css'
import Form from './Form'

function Consultation() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="consultation-root">
      <div className="consultation-container">
        <div className="content">
          <h2>Boka gratis konsultation <i className="fas fa-video"></i> </h2>
          <div className="text-body">
            <p>Är du osäker på hur du ska nå dina mål? En gratis konsultation är ett perfekt första steg på vägen dit. Helt gratis och utan risk för dig.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus alias voluptate impedit laudantium est facere ducimus incidunt obcaecati adipisci voluptatum consectetur aliquid nobis ut doloribus, consequatur rerum ea quam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut deserunt totam iste numquam voluptatibus dignissimos consectetur aut, quaerat rerum adipisci iure, exercitationem officiis laudantium enim ullam, reprehenderit id officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut deserunt totam iste numquam voluptatibus dignissimos consectetur aut, quaerat rerum adipisci iure, exercitationem officiis laudantium enim ullam, reprehenderit id officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut deserunt totam iste numquam voluptatibus dignissimos consectetur aut, quaerat rerum adipisci iure, exercitationem officiis laudantium enim ullam, reprehenderit id officia.
            </p>
          </div>
          <h3>Innan du bokar konsultationen behöver jag lite basic info om dig. Vänligen fyll i och skicka formuläret nedan</h3>
          <p>När jag fått forumläret hör jag av mig så snabbt som möjligt för att boka in en tid!</p>
        </div>

      <form className="hero-form oc-form" method="POST" action="https://formspree.io/f/xeqvkpzg" id="consultation-form">
        <Form />
      </form>

      </div>
      
    </div>
  )
}

export default Consultation
