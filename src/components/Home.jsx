import React from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
import Blob from '../images/blob.svg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero/>
      <div className="home-online-coaching">
        <h2>Online Coaching</h2>
        <div className="content">
          <div className="text">
            <h3>Online Coaching <i className="fas fa-globe"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-arrow-right"></i> </Link>
          </div>
          <div className="image">
            <img src={Blob} alt="blob" />
          </div>
        </div>
      </div>
      <div className="home-e-books-and-programs">
        <h2>E-böcker och Färdiga Program</h2>
      </div>
    </>
  )
}

export default Home
