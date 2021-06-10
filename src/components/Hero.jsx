import React from 'react'
import '../css/main.css'
import '../css/hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="text">
          <h4>Oliver Nygren - Lic. PT / Online Coach</h4>
          <h1>Är du redo att uppnå stora träningsresultat?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit repellat! Omnis dolorum distinctio maxime debitis ratione suscipit ad similique officiis, necessitatibus excepturi.</p>
          <div className="buttons">
            <Link to="/online-coaching" className="primary">Online Coaching</Link>
            <Link to="/consultation" className="secondary">Boka Gratis Konsultation <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
        <div className="illustration"></div>
      </div>
    </div>
  )
}

export default Hero
