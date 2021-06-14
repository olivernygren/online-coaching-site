import React from 'react'
import Hero from './Hero'
import '../css/main.css'
import '../css/home.css'
// import '../css/onlineCoaching.css'
import Blob from '../images/blob.svg'
import Blob2 from '../images/blob-2.svg'
import PlaceholderCover from '../images/covers/placeholder.png'
import LogoIcon from '../images/ONfitness-icon.svg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero/>
      <div className="home-online-coaching">
        <h2>Online Coaching</h2>
        <div className="content">
          <div className="card">
            <div className="online-coaching-header-btns">
              <i className="fas fa-eye" title="Läs mer"></i>
              <img src={LogoIcon} alt="Logo" />
              <i className="fas fa-arrow-right" title="Kontakta mig"></i>
            </div>
            <img className="home-online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
            <h4>Komplett Kost- och Träningsupplägg + Coaching</h4>
            <h5>1 399 kr / mån <small className="line-through">1 999 kr / mån</small> </h5>
            <button className="get-started-btn">Kom igång <i className="fas fa-arrow-right"></i> </button>
          </div>

          <div className="info-text">
            <h3>Vad ingår?</h3>
            <p>Direkt efter köp kommer du få besvara ett antal frågor i ett formulär. Utefter svaren på dessa frågor bygger jag ditt upplägg HELT från grunden, vilket inkluderar:</p>
            <ul>
              <li> <b>+</b> Personligt anpassat kostschema.</li>
              <li> <b>+</b> Personligt anpassat träningsprogram inkl. övningar, sets, reps, vila och noteringar kring utförande.</li>
              <li> <b>+</b> Direktkontakt med mig via Messenger.</li>
              <li> <b>+</b> (Valfritt) online-möte med mig innan skapandet av programmet.</li>
              <li> <b>+</b> Ändringar görs löpande varje månad och/eller efter behov</li>
              <li> <b>+</b> Kontinuerlig uppföljning och avstämningar veckovis</li>
            </ul>
            <Link className="read-more-btn" to='/online-coaching'>Läs mer om online coaching <i className="fas fa-arrow-right"></i> </Link>
          </div>
        </div>
      </div>
      {/* <div className="home-online-coaching">
        <div className="home-online-coaching-container" id="plans">
          <div className="background">
            <h2>Online Coaching</h2>
            <div className="online-coaching-packages">

              <div className="online-coaching-pkg online-coaching-pkg-1">
                <div className="online-coaching-header-btns">
                  <i className="fas fa-eye" title="Läs mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
                </div>
                <div className="img-bg"></div>
                <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Kostschema" />
                <h4>Kost</h4>
                <h5>1 299 kr / mån</h5>
                <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
              </div>
              
              <div className="online-coaching-pkg online-coaching-pkg-2">
                <div className="online-coaching-header-btns">
                  <i className="fas fa-eye" title="Läs mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
                </div>
                <div className="img-bg"></div>
                <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Kost- och Träningsprogram" />
                <h4>Kost- och Träningsprogram</h4>
                <h5>1 799 kr / mån <small className="line-through">2 299 kr / mån</small> </h5>
                <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
              </div>

              <div className="online-coaching-pkg online-coaching-pkg-3">
                <div className="online-coaching-header-btns">
                  <i className="fas fa-eye" title="Läs mer"></i>
                  <img src={LogoIcon} alt="Logo" />
                  <i className="fas fa-cart-plus" title="Lägg i varukorg"></i>
                </div>
                <div className="img-bg"></div>
                <img className="online-coaching-cover-img" src={PlaceholderCover} alt="Träningsprogram" />
                <h4>Träningsprogram</h4>
                <h5>999 kr / mån</h5>
                <button className="add-to-cart-btn">Lägg i varukorg <i className="fas fa-plus"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="home-book-consultation">
        <p>Är du osäker på hur du kan ta din träning eller kost till optimal nivå?</p>
        <Link to="/"> <h2>Boka  gratis konsultation <i className="fas fa-arrow-right"></i> </h2> </Link>
        <p>för att se hur vi kan nå dina mål</p>
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
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
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
            <img className="blob-img" src={Blob} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
          </div>
        </div>

        <div className="content-reverse">
          <div className="image">
            <img className="blob-img" src={Blob2} alt="blob" />
            <img className="home-cover-img" src={PlaceholderCover} alt="book" />
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

      <div className="three-blocks">
        <div className="box box-1">
          <h3>Träning <i className="fas fa-dumbbell"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
        <div className="box box-2">
          <h3>Kost <i className="fas fa-utensils"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
        <div className="box box-3">
          <h3>Hållbarhet <i className="fas fa-chart-line"></i> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quis, molestiae cupiditate illum sapiente reiciendis delectus sunt eius ex earum hic mollitia temporibus ab, officia minima est eos voluptatum!</p>
        </div>
      </div>


    </>
  )
}

export default Home
