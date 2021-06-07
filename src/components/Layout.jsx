import React from 'react'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import '../css/main.css' 

function Layout() {
  return (
    <>
      <Router>
        <Header/>
      </Router>
    </>
  )
}

export default Layout
