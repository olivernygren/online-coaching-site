import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../css/main.css' 
// import Login from './Login'
// import Register from './Register'
import Home from './Home'
import Footer from './Footer'
import EBooksAndPrograms from './EBooksAndPrograms'
import OnlineCoaching from './OnlineCoaching'
import Consultation from './Consultation'
import PersonalPrograms from './PersonalPrograms'
import Contact from './Contact'
import FAQ from './FAQ'
import IntegrityPolicy from './IntegrityPolicy'
import TermsAndConditions from './TermsAndConditions'
import AboutMe from './AboutMe'
import Program1 from './products/Program1'
import Program2 from './products/Program2'
import Program3 from './products/Program3'
import Program4 from './products/Program4'
import EBook1 from './products/EBook1'
import EBook2 from './products/EBook2'
import EBook3 from './products/EBook3'
import EBook4 from './products/EBook4'
import Success from './Success'

function Layout() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>    
            <Route exact path='/' component={Home} />
            {/* <Route path='/login' component={Login} />
            <Route path='/register' component={Register} /> */}
            <Route exact path='/e-books-and-programs/program-1' component={Program1} />
            <Route exact path='/e-books-and-programs/program-2' component={Program2} />
            <Route exact path='/e-books-and-programs/program-3' component={Program3} />
            <Route exact path='/e-books-and-programs/program-4' component={Program4} />
            <Route exact path='/e-books-and-programs/e-book-1' component={EBook1} />
            <Route exact path='/e-books-and-programs/e-book-2' component={EBook2} />
            <Route exact path='/e-books-and-programs/e-book-3' component={EBook3} />
            <Route exact path='/e-books-and-programs/e-book-4' component={EBook4} />
            <Route path='/e-books-and-programs' component={EBooksAndPrograms} />
            <Route path='/online-coaching' component={OnlineCoaching} />
            <Route path='/personal-programs' component={PersonalPrograms} />
            <Route path='/consultation' component={Consultation} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={FAQ} />
            <Route path='/integrity-policy' component={IntegrityPolicy} />
            <Route path='/terms-and-conditions' component={TermsAndConditions} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='/success' component={Success} />
          </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Layout
