import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/main.css' 
import Login from './Login'
import Home from './Home'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Router>
        <Header/>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Footer/>
      </Router>
    </>
  )
}

export default Layout
