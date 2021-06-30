import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import logoIcon from '../images/ONfitness-icon.svg'

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="column column-1">
          {/* <h2 className="logo">ON<b>fitness</b> </h2> */}
          <img className="logo-icon" src={logoIcon} alt="Logo Icon" />
          <p>Copyright <i className="far fa-copyright"></i> ONfitness | 2021. Alla rättigheter reserverade. </p>
        </div>
        <div className="column column-2">
          <Link to="/faq">FAQ</Link>
          <Link to="/about-me">Om Mig</Link>
          <Link to="/contact">Kontakta Mig</Link>
          <Link to="/terms-and-conditions">Köpvillkor</Link>
          <Link to="/integrity-policy">Integritetspolicy</Link>
          <a href="https://www.allabolag.se/010507MPKD/nygren-oliver">Företaget på allabolag</a>
        </div>
        <div className="column column-3">
          <h3>Resurser <i className="fas fa-link"></i> </h3>
          <a target="blank" href="https://stanefferding.com/products/vertical-diet-peak-performance-detailed-program-notes">- The Vetical Diet and Peak Performance 3.0 (E-bok)</a>
          <a target="blank" href="https://youtu.be/BeOc7TRo9Os">- Stan Efferding Island Seminar (YouTube)</a>
          <a target="blank" href="https://youtu.be/v2sgQbQVd7c">- Stan Efferding "How to Build Muscle Mass" (YouTube)</a>
          <div className="social-icons">
            <a href="/"> <i className="fab fa-instagram"></i> </a>
            <a href="/"> <i className="fab fa-facebook"></i> </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
