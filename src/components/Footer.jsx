import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import logoIcon from '../images/ONfitness-icon.svg'
import ApplePayIcon from '../images/payment-icons/apple-pay.png'
import GPayIcon from '../images/payment-icons/g-pay.jpg'
import MastercardIcon from '../images/payment-icons/mastercard.png'
import VisaIcon from '../images/payment-icons/visa.png'
import AmexIcon from '../images/payment-icons/amex.png'

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="column column-1">
          <img className="logo-icon" src={logoIcon} alt="Logo Icon" />
          <p>Copyright <i className="far fa-copyright"></i> ONfitness | 2021. Alla rättigheter reserverade. </p>
        </div>
        <div className="column column-2">
          <Link to="/faq">FAQ</Link>
          <Link to="/about-me">Om Mig</Link>
          <Link to="/contact">Kontakta Mig</Link>
          <Link to="/terms-and-conditions">Köpvillkor</Link>
          <Link to="/integrity-policy">Integritetspolicy</Link>
          <a href="https://www.allabolag.se/010507MPKD/nygren-oliver">Företagsinfo allabolag</a>
        </div>
        <div className="column column-3">
          <h3>Länkar <i className="fas fa-link"></i> </h3>
          <a target="blank" href="https://stanefferding.com/products/vertical-diet-peak-performance-detailed-program-notes">- The Vertical Diet and Peak Performance 3.0 (E-bok)</a>
          <a target="blank" href="https://youtu.be/BeOc7TRo9Os">- Stan Efferding Iceland Seminar (YouTube)</a>
          <a target="blank" href="https://youtu.be/v2sgQbQVd7c">- Stan Efferding "How to Build Muscle Mass" (YouTube)</a>
          <div className="social-icons">
            <div>
              <a href="/"> <i className="fab fa-instagram"></i> </a>
              <a href="/"> <i className="fab fa-facebook"></i> </a>
            </div>
            <div className="payment-icons">
              <img className="mc-icon" src={MastercardIcon} alt="Mastercard Icon" />
              <img className="visa-icon" src={VisaIcon} alt="Visa Icon" />
              <img className="amex-icon" src={AmexIcon} alt="Amex Icon" />
              <img className="ap-icon" src={ApplePayIcon} alt="Apple Pay Icon" />
              <img className="gpay-icon" src={GPayIcon} alt="Google Pay Icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
