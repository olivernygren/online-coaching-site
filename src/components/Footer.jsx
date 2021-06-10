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
          <p>Copyright <i class="far fa-copyright"></i> ONfitness AB 2021. Alla rättigheter reserverade </p>
        </div>
        <div className="column column-2">
          <span>FAQ</span>
          <span>Kontakta Mig</span>
          <span>Köpvillkor</span>
          <span>Integritetspolicy</span>
          <span> <Link to="/login">Logga In</Link> </span>
        </div>
        <div className="column column-3">
          <a href="/"> <i class="fab fa-instagram"></i> </a>
          <a href="/"> <i class="fab fa-facebook"></i> </a>
          <a href="/"> <i class="fab fa-twitter"></i> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
