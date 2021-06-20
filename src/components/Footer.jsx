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
        </div>
        <div className="column column-3">
          <a href="/"> <i className="fab fa-instagram"></i> </a>
          <a href="/"> <i className="fab fa-facebook"></i> </a>
          <a href="/"> <i className="fab fa-twitter"></i> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
