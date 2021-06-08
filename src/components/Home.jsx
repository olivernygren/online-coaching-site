import React from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
import Blob from '../images/blob.svg'
import Blob2 from '../images/blob-2.svg'
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

      <div className="home-book-consultation">
        <p>Är du osäker på hur du kan ta din träning eller kost till optimal nivå?</p>
        <Link to="/"> <h2>Boka konsultation <i className="fas fa-arrow-right"></i> </h2> </Link>
        <p>för endast 149 kr</p>
      </div>

      <div className="home-ebooks-and-programs">
        <h2>E-böcker och Färdiga Program</h2>
        <div className="content">
          <div className="text">
            <h3>Program 1 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-arrow-right"></i> </Link>
              <i className="fas fa-cart-plus"></i>
            </div>
          </div>
          <div className="image">
            <img src={Blob} alt="blob" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img src={Blob2} alt="blob" />
          </div>
          <div className="text">
            <h3>Program 2 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-arrow-right"></i> </Link>
              <i className="fas fa-cart-plus"></i>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <h3>E-bok 1 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-arrow-right"></i> </Link>
              <i className="fas fa-cart-plus"></i>
            </div>
          </div>
          <div className="image">
            <img src={Blob} alt="blob" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img src={Blob2} alt="blob" />
          </div>
          <div className="text">
            <h3>E-bok 2 <i className="fas fa-book"></i> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est quam earum facere dolor reprehenderit, perferendis illo odio architecto delectus quia consequuntur voluptates ipsum, obcaecati amet expedita asperiores corrupti neque!</p>
            <div className="buttons">
              <Link to="/" className="home-oc-link">Läs mer <i className="fas fa-arrow-right"></i> </Link>
              <i className="fas fa-cart-plus"></i>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Home
