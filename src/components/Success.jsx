import React, { useEffect } from 'react'
import Logo from '../images/ONfitness-dark.svg'
import { Link } from 'react-router-dom'
import '../css/success.css'

function Success() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'ONfitness | Tack för ditt köp!'
  }, [])

  return (
    <div className="success-container">
      <div className="content">
        <h2>Betalning genomförd!</h2>
        <div className="square">
          <i className="fas fa-check-circle"></i>
          <h2>Tack för att du handlat av oss!</h2>
          <p>Du har nu fått en orderbekräftelse till mailen du angav i betalningen.</p>
          <p>Har du köpt ett färdigt program eller e-bok så finns den bifogad som pdf-fil till mailen du angav i betalningen inom 24 timmar.</p>
          <h3>Har du frågor angående ditt köp?</h3>
          <p>Skicka iväg ett mail till mig <a className="mail-link" href="mailto:oliver@onfitness.se">här</a> så svarar jag så snabbt jag kan!</p>
          <div className="policies">
            <Link to="/integrity-policy">Integritetspolicy</Link>
            <Link to="/terms-and-conditions">Köpvillkor</Link>
          </div>
          <Link to="/">Gå till startsidan <i className="fas fa-arrow-right"></i> </Link>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Success
