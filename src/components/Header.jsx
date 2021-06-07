import React from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css'

function Header() {
  return (
    <header>
      <h2 className="header-logo">ON<b>fitness</b></h2>
      <nav>
        <ul>
          <li>
            <Link className="link" to='/'>Hem</Link>
          </li>
          <li>
            <Link className="link" to='/'>E-böcker och färdiga program</Link>
          </li>
          <li>
            <Link className="link" to='/'>Online Coaching</Link>
          </li>
          <li>
            <Link className="link" to='/'>Boka konsultation</Link>
          </li>
        </ul>
        {/* <ul>
          <li><a className="link" href="/">Home</a></li>
          <li><a className="link" href="/">Work</a></li>
          <li><a className="link" href="/">Blog</a></li>
          <li><a className="link" href="/">Contact</a></li>
        </ul> */}
      </nav>
      <div className="header-icons">
        <button className="log-in-btn">Logga in</button>
        {/* <i class="fas fa-user"></i> */}
        <i class="fas fa-shopping-cart"></i>
      </div>
    </header>
  )
}

export default Header
