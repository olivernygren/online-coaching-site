import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/contact.css'
import ContactIllustration from '../images/contact-illustration.svg'

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | Kontakta Mig'
  }, [])

  return (
    <div className="contact-container">
      <h2 className="main-h2">Kontakta mig</h2>
      <div className="content">
        <h3>Det finns två huvudsakliga sätt att kontakta mig på:</h3>
        <div className="contact-disclaimer">
          <h3>Emaila mig om:</h3>
          <ul>
            <li>Frågor kring online coaching</li>
            <li>Frågor kring personliga upplägg</li>
            <li>Frågor kring färdiga program och e-böcker</li>
            <li>Frågor kring betalningar</li>
            <li>...eller andra viktiga ärenden</li>
          </ul>
          <h3>DMa mig om:</h3>
          <ul>
            <li>Frågor kring kost och träning</li>
            <li>Enkla frågor kring coaching eller upplägg</li>
          </ul>
        </div>
        <div className="contact-info">
          <div className="email">
            <i class="fas fa-envelope"></i>
            <a href="mailto:oliver@onfitness.se">Email</a>
          </div>
          <div className="ig-dm">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/onfitness.se/">Instagram DM</a>
          </div>
        </div>
        <img src={ContactIllustration} alt="hej" />
      </div>
    </div>
  )
}

export default Contact
