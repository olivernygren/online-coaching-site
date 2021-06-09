import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../css/main.css' 
import Login from './Login'
import Home from './Home'
import Footer from './Footer'
import EBooksAndPrograms from './EBooksAndPrograms'

function Layout() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>    
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/e-books-and-programs' component={EBooksAndPrograms} />
          </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Layout
