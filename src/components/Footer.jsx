import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="column column-1">
          <h2 className="logo">ON<b>fitness</b> </h2>
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
          <Link> <i class="fab fa-instagram"></i> </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
