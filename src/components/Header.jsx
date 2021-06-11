import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/header.css'
import Logo from '../images/ONfitness-light.svg'

function Header() {
  return (
    <header>
      <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
      <nav>
        <ul>
          <li>
            <Link className="link" to='/'>Hem</Link>
          </li>
          <li>
            <Link className="link default-link" to='/e-books-and-programs'>E-böcker och Program</Link>
          </li>
          <li>
            <Link className="link default-link" to='/online-coaching'>Online Coaching</Link>
          </li>
          <li>
            <Link className="link default-link" to='/'>Boka gratis konsultation</Link>
          </li>
          <div className="services-dropdown">
            <button className="dropdown-btn">Mina Services <i className="fas fa-angle-down"></i> </button>
            <div className="dropdown-links">
              <Link className="link dropdown-item" to='/'>Boka gratis konsultation</Link>
              <Link className="link dropdown-item" to='/e-books-and-programs'>E-böcker och färdiga program</Link>
              <Link className="link dropdown-item" to='/'>Online Coaching</Link>
            </div>
          </div>
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
