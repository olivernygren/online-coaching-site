import '../css/main.css'
import '../css/hero.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Hero() {

  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)
  const [showLast, setShowLast] = useState(false)

  const handleShowFirst = () => {
    setShowSecond(false)
    setShowFirst(true)
  }
  
  const handleShowSecond = () => {
    setShowFirst(false)
    setShowSecond(true)
  }

  const handleShowThird = () => {
    setShowSecond(false)
    setShowThird(true)
  }
  
  const handleShowFourth = () => {
    setShowThird(false)
    setShowFourth(true)
  }
  
  const handleShowFifth = () => {
    setShowFourth(false)
    setShowFifth(true)
  }
  
  const handleShowLast = () => {
    setShowFifth(false)
    setShowLast(true)
  }

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
        <form className="hero-form" method="POST" action="https://formspree.io/f/xyyljnop">
          <div className={showFirst ? "form-page form-page-1" : "hide"}>
            <h3>Vad är ditt främsta mål?</h3>
            <span>Välj endast ett alternativ</span>
            <div className="option first-option">
              <label htmlFor="goal-build-muscle">Bygga muskelmassa</label>
              <input type="checkbox" name="goal-build-muscle" />
            </div>
            <div className="option second-option">
              <label htmlFor="goal-burn-fat">Bränna fett</label>
              <input type="checkbox" name="goal-burn-fat" />
            </div>
            <div className="option third-option">
              <label htmlFor="goal-lose-weight">Gå ner i vikt</label>
              <input type="checkbox" name="goal-lose-weight" />
            </div>
            <div className="option fourth-option">
              <label htmlFor="goal-tone">Tona kroppen och få mer muskeldefinition</label>
              <input type="checkbox" name="goal-tone" />
            </div>
            <button onClick={handleShowSecond} className="form-next-btn" type="button" id="next-btn-1">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className={showSecond ? "form-page form-page-2" : "hide"}>
            <h3>Hur gammal är du?</h3>
            <span>Välj endast ett alternativ</span>
            <div className="option first-option">
              <label htmlFor="age-14-18">14-18 år</label>
              <input type="checkbox" name="age-14-18" />
            </div>
            <div className="option second-option">
              <label htmlFor="age-19-25">19-25 år</label>
              <input type="checkbox" name="age-19-25" />
            </div>
            <div className="option third-option">
              <label htmlFor="age-25-40">25-40 år</label>
              <input type="checkbox" name="age-25-40" />
            </div>
            <div className="option fourth-option">
              <label htmlFor="age-40-plus">40+</label>
              <input type="checkbox" name="age-40-plus" />
            </div>
            <button onClick={handleShowFirst} className="form-back-btn" type="button" id="back-btn-2"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button onClick={handleShowThird} className="form-next-btn" type="button" id="next-btn-2">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className={showThird ? "form-page form-page-3" : "hide"}>
            <h3>Ditt kön</h3>
            <span>Välj endast ett alternativ</span>
            <div className="option first-option">
              <label htmlFor="man">Man</label>
              <input type="checkbox" name="man" />
            </div>
            <div className="option second-option">
              <label htmlFor="woman">Kvinna</label>
              <input type="checkbox" name="woman" />
            </div>
            <button onClick={handleShowSecond} className="form-back-btn" type="button" id="back-btn-3"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button onClick={handleShowFourth} className="form-next-btn" type="button" id="next-btn-3">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className={showFourth ? "form-page form-page-4" : "hide"}>
            <h3>Berätta kort om dig själv</h3>
            <span>Tex. träningserfarenhet, mål osv</span>
            <div className="option first-option">
              <textarea name="short-desc" cols="30" rows="10"></textarea>
            </div>
            <button onClick={handleShowThird} className="form-back-btn" type="button" id="back-btn-4"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button onClick={handleShowFifth} className="form-next-btn" type="button" id="next-btn-4">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className={showFifth ? "form-page form-page-5" : "hide"}>
            <h3>När vill du helst bli kontaktad?</h3>
            <span>Välj endast ett alternativ</span>
            <div className="option first-option">
              <label htmlFor="morning">kl. 08-10</label>
              <input type="checkbox" name="morning-08-10" />
            </div>
            <div className="option second-option">
              <label htmlFor="lunch-time">kl.13-16</label>
              <input type="checkbox" name="lunch-time-13-16" />
            </div>
            <div className="option third-option">
              <label htmlFor="evening">kl. 19-21</label>
              <input type="checkbox" name="evening-19-21" />
            </div>
            <button onClick={handleShowFourth} className="form-back-btn" type="button" id="back-btn-5"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button onClick={handleShowLast} className="form-next-btn" type="button" id="next-btn-5">Nästa <i className="fas fa-arrow-right"></i> </button>
          </div>
          <div className={showLast ? "form-page form-page-6" : "hide"}>
            <h3>Fyll i din kontaktinformation så hör jag av mig!</h3>
            <div className="option first-option text-input-option">
              <label htmlFor="name">För- och efternamn</label>
              <input type="text" name="name" required />
              <label htmlFor="mobile">Mobilnummer</label>
              <input type="mobile" name="mobile" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <button onClick={handleShowFifth} className="form-back-btn" type="button" id="back-btn-6"> <i className="fas fa-arrow-left"></i> Tillbaka</button>
            <button onClick={handleShowFirst} className="form-submit-btn" type="submit" id="submit-btn">Slutför och Skicka <i className="fas fa-paper-plane"></i> </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
