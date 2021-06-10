import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/header.css'
import Logo from '../images/ONfitness-light.svg'

function Header() {
  return (
    <header>
      <div className="logo">
        {/* <Link to="/"><img className="logo-icon" src={logoIcon} alt="Logo Icon" /></Link>
        <h2 className="header-logo"> <Link className="header-logo" to='/'> ON<b>fitness</b> </Link> </h2> */}
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="link" to='/'>Hem</Link>
          </li>
          <li>
            <Link className="link" to='/e-books-and-programs'>E-böcker och färdiga program</Link>
          </li>
          <li>
            <Link className="link" to='/'>Online Coaching</Link>
          </li>
          <li>
            <Link className="link" to='/'>Boka konsultation</Link>
          </li>
          <div className="header-divider"></div>
        </ul>
        <div className="header-icons">
          <i className="fas fa-shopping-cart"></i>
          <Link to='/login' className="log-in-btn">Logga in</Link>
          {/* <i class="fas fa-user"></i> */}
        </div>
      </nav>
    </header>
  )
}

export default Header
