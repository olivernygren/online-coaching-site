import React from 'react'
import Collapsible from 'react-collapsible';
import '../css/main.css'
import '../css/faq.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

function FAQ() {

  return (
    <div className="faq-container">
      <h2 className="main-h2 faq-h2">FAQ</h2>
      <h4>(Vanligt förekommande frågor)</h4>

      <div className="content">
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>
        <Collapsible trigger={["Fråga här", <ExpandMoreIcon/>]} transitionTime="350">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus nemo molestias asperiores quis ab consequatur doloribus, aliquam fuga nam dolorem corporis illo rerum animi? Beatae, nulla necessitatibus. Illum, necessitatibus.</p>
        </Collapsible>

        <div className="contact-cta">
          <h4>Hittar du inte svaret på den fråga du har?</h4>
          <p>Tveka inte på att kontakta mig så svarar jag på din fråga!</p>
          <Link to="/contact">Kontakta mig här <i className="fas fa-arrow-right"></i> </Link>
        </div>
      </div>

    </div>
  )
}

export default FAQ
