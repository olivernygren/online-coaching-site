import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../css/main.css' 
import Login from './Login'
import Home from './Home'
import Footer from './Footer'
import EBooksAndPrograms from './EBooksAndPrograms'
import OnlineCoaching from './OnlineCoaching'
import Consultation from './Consultation'
import Register from './Register'

function Layout() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>    
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/e-books-and-programs' component={EBooksAndPrograms} />
            <Route path='/online-coaching' component={OnlineCoaching} />
            <Route path='/consultation' component={Consultation} />
          </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Layout
