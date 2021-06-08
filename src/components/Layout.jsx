import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/main.css' 
import Login from './Login'
import Home from './Home'

function Layout() {
  return (
    <>
      <Router>
        <Header/>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Router>
    </>
  )
}

export default Layout
