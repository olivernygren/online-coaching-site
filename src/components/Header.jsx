import React from 'react'
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <h2>ONfitness</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>Link</Link>
          </li>
          <li>
            <Link to='/'>Link</Link>
          </li>
          <li>
            <Link to='/'>Link</Link>
          </li>
          <li>
            <Link to='/'>Link</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
