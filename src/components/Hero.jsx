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
        <form className="hero-form">
          <div className="form-page-1">
            <h3>Vad är ditt främsta mål?</h3>
            <div className="build-muscle-div">
              <label htmlFor="build-muscle">Bygga muskelmassa</label>
              <input type="checkbox" name="build-muscle" required />
            </div>
            <div className="burn-fat-div">
              <label htmlFor="burn-fat">Bränna fett</label>
              <input type="checkbox" name="burn-fat" required />
            </div>
            <div className="lose-weight-div">
              <label htmlFor="lose-weight">Gå ner i vikt</label>
              <input type="checkbox" name="lose-weight" required />
            </div>
            <div className="tone-div">
              <label htmlFor="tone">Tona kroppen och få mer muskeldefinition</label>
              <input type="checkbox" name="tone" required />
            </div>
            <button className="form-next-btn" type="button">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className="form-page-2 hide">
            <h3>Hur gammal är du?</h3>
            <div className="first-option">
              <label htmlFor="young">15-18 år</label>
              <input type="checkbox" name="young" required />
            </div>
            <div className="second-option">
              <label htmlFor="semi-young">19-25 år</label>
              <input type="checkbox" name="semi-young" required />
            </div>
            <div className="third-option">
              <label htmlFor="semi-old">25-40 år</label>
              <input type="checkbox" name="semi-old" required />
            </div>
            <div className="fourth-option">
              <label htmlFor="old">40+</label>
              <input type="checkbox" name="old" required />
            </div>
            <button className="form-next-btn" type="button"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button className="form-next-btn" type="button">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
