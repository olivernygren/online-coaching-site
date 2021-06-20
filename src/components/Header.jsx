import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../css/header.css'
import Logo from '../images/ONfitness-light.svg'
import Collapsible from 'react-collapsible';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            <Link className="link default-link" to='/personal-programs'>Personliga Upplägg</Link>
          </li>
          <li>
            <Link className="link default-link" to='/online-coaching'>Online Coaching</Link>
          </li>
          <li>
            <Link className="link default-link" to='/consultation'>Boka gratis konsultation</Link>
          </li>
          {/* <div className="services-dropdown">
            <button className="dropdown-btn">Mina Services <i className="fas fa-angle-down"></i> </button>
            <div className="dropdown-links">
              <Link className="link dropdown-item" to='/online-coaching'>Online Coaching</Link>
              <Link className="link dropdown-item" to="/personal-programs">Personliga Upplägg</Link>
              <Link className="link dropdown-item" to='/e-books-and-programs'>E-böcker och färdiga program</Link>
              <Link className="link dropdown-item" to='/consultation'>Boka gratis konsultation</Link>
            </div>
          </div> */}
          <div className="services-dropdown">
            <Collapsible trigger={["MINA SERVICES", <ExpandMoreIcon/>]}>
              <Link className="link dropdown-item" to='/online-coaching'>Online Coaching</Link>
              <Link className="link dropdown-item" to="/personal-programs">Personliga Upplägg</Link>
              <Link className="link dropdown-item" to='/e-books-and-programs'>E-böcker och färdiga program</Link>
              <Link className="link dropdown-item" to='/consultation'>Boka gratis konsultation</Link>
            </Collapsible>
          </div>
          <div className="header-divider"></div>
        </ul>
        <div className="header-icons">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
