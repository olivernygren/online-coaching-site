import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/header.css'
import MenuIcon from '../images/menu-icon-2.svg'
import Cross from '../images/cross.svg'
import Logo from '../images/ONfitness-light.svg'
// import Collapsible from 'react-collapsible';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const handleMenuOpen = () => {
    setIsMenuOpen(true)
  }

  return (
    <header>
      <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link className="link default-link" to='/'>Hem</Link>
          </li>
          <li>
            <Link className="link default-link" to='/e-books-and-programs'>E-böcker och Program</Link>
          </li>
          <li>
            <Link className="link default-link" to='/personal-programs'>Personliga Upplägg</Link>
          </li>
          <li>
            <Link className="link default-link" to='/online-coaching'>Online Coaching</Link>
          </li>
          <li>
            <Link className="link default-link" to='/consultation'>Boka gratis konsultation</Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile-nav">
        <div className="mobile-header-icons">
          <div className="menu-icon-container" onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}>
            { isMenuOpen ? <img className="icon" src={Cross} alt="Close Menu" /> : <img className="icon" src={MenuIcon} alt="Menu" /> }
          </div>
        </div>
        {isMenuOpen ? (
          <div className="mobile-menu">
            <ul>
              <li>
                <Link className="link default-link" to='/' onClick={handleMenuClose}>Hem</Link>
              </li>
              <li>
                <Link className="link default-link" to='/e-books-and-programs' onClick={handleMenuClose}>E-böcker och Program</Link>
              </li>
              <li>
                <Link className="link default-link" to='/personal-programs' onClick={handleMenuClose}>Personliga Upplägg</Link>
              </li>
              <li>
                <Link className="link default-link" to='/online-coaching' onClick={handleMenuClose}>Online Coaching</Link>
              </li>
              <li>
                <Link className="link default-link" to='/consultation' onClick={handleMenuClose}>Boka gratis konsultation</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Header
