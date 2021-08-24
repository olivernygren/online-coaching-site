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
import { products } from '../database/products'
import EBookPack1 from './products/EBookPack1'

function Layout() {

  const program1 = products.findIndex((product) => product.id === 1001)
  const program1Link = products[program1].link
  
  const program2 = products.findIndex((product) => product.id === 1002)
  const program2Link = products[program2].link
  
  const program3 = products.findIndex((product) => product.id === 1003)
  const program3Link = products[program3].link
  
  const program4 = products.findIndex((product) => product.id === 1004)
  const program4Link = products[program4].link

  const eBook1 = products.findIndex((product) => product.id === 2001)
  const eBook1Link = products[eBook1].link
  
  const eBook2 = products.findIndex((product) => product.id === 2002)
  const eBook2Link = products[eBook2].link
  
  const eBook3 = products.findIndex((product) => product.id === 2003)
  const eBook3Link = products[eBook3].link
  
  const eBook4 = products.findIndex((product) => product.id === 2004)
  const eBook4Link = products[eBook4].link
  
  const eBookPack1 = products.findIndex((product) => product.id === 2006)
  const eBookPack1Link = products[eBookPack1].link


  return (
    <>
      <Router>
        <Header/>
          <Switch>    
            <Route exact path='/' component={Home} />
            {/* <Route path='/login' component={Login} />
            <Route path='/register' component={Register} /> */}
            <Route exact path={program1Link} component={Program1} />
            <Route exact path={program2Link} component={Program2} />
            <Route exact path={program3Link} component={Program3} />
            <Route exact path={program4Link} component={Program4} />
            <Route exact path={eBook1Link} component={EBook1} />
            <Route exact path={eBook2Link} component={EBook2} />
            <Route exact path={eBook3Link} component={EBook3} />
            <Route exact path={eBook4Link} component={EBook4} />
            <Route exact path={eBookPack1Link} component={EBookPack1} />
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
