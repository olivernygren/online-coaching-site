import '../css/main.css'
import '../css/hero.css'
import { Link } from 'react-router-dom'
import React from 'react'
import Form from './Form'

function Hero() {

  return (
    <div className="hero">
      <div className="content">
        <div className="text">
          <h4>Oliver Nygren - Online Coach / Tränings-entusiast</h4>
          <h1>Är du redo att uppnå fantastiska träningsresultat?</h1>
          <p>Att uppnå fantastiska träningsresultat är lätt, men inte enkelt. Vare sig du är atlet eller en vanlig Svensson med några extra kilon runt magen så hjälper jag dig att lägga upp en smart, genomtänkt och enkel plan, baserat på dina preferenser!</p>
          <div className="buttons">
            <Link to="/online-coaching" className="primary">Online Coaching</Link>
            <Link to="/e-books-and-programs" className="secondary">E-böcker och Program <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
        <form className="hero-form" action="https://formspree.io/f/moqylppn" method="POST">
          <Form/>
        </form>
      </div>
    </div>
  )
}

export default Hero
