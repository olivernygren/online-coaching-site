import React from 'react'
import '../css/main.css'
import '../css/hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit repellat! Omnis dolorum distinctio maxime debitis ratione suscipit ad similique officiis, necessitatibus excepturi.</p>
        <div className="buttons">
          <Link to="/" className="primary">Click here</Link>
          <Link to="/" className="secondary">Click here too <i className="fas fa-arrow-right"></i> </Link>
        </div>
      </div>
      <div className="illustration"></div>
    </div>
  )
}

export default Hero
